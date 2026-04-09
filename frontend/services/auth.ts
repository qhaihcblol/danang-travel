import type { AuthResponse, User } from "@/types/auth";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ?? "";
const AUTH_TOKEN_KEY = "anshin_auth_token";
const AUTH_CHANGED_EVENT = "anshin-auth-changed";

type ApiBaseResponse = {
  success: boolean;
  message?: string;
  error?: string;
  status?: number;
};

type ApiAuthResponse = ApiBaseResponse & {
  data?: {
    user?: User;
    accessToken?: string;
    refreshToken?: string;
    expiresIn?: number;
  };
};

type ApiMeResponse = ApiBaseResponse & {
  data?: {
    user?: User;
  };
};

function notifyAuthChanged() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(AUTH_CHANGED_EVENT));
}

function saveToken(token?: string) {
  if (typeof window === "undefined") return;
  if (token) {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    notifyAuthChanged();
  }
}

function clearToken() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(AUTH_TOKEN_KEY);
  notifyAuthChanged();
}

function getToken(): string | undefined {
  if (typeof window === "undefined") return undefined;
  return localStorage.getItem(AUTH_TOKEN_KEY) ?? undefined;
}

function withBaseUrl(path: string) {
  if (!API_BASE_URL) return path;
  return `${API_BASE_URL}${path}`;
}

async function requestJson<T extends ApiBaseResponse>(
  path: string,
  init: RequestInit,
): Promise<T> {
  try {
    const response = await fetch(withBaseUrl(path), {
      cache: "no-store",
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...(init.headers ?? {}),
      },
    });

    const payload = (await response.json().catch(() => ({}))) as T;
    if (!response.ok) {
      return {
        ...payload,
        success: false,
        status: response.status,
        error: payload.error ?? payload.message ?? "Request failed.",
      } as T;
    }

    return {
      ...payload,
      status: response.status,
    } as T;
  } catch {
    return {
      success: false,
      status: 0,
      error: "Network error. Please try again.",
    } as T;
  }
}

function toAuthResponse(apiResponse: ApiAuthResponse): AuthResponse {
  if (!apiResponse.success) {
    return {
      success: false,
      error: apiResponse.error ?? apiResponse.message ?? "Request failed.",
    };
  }

  const accessToken = apiResponse.data?.accessToken;

  return {
    success: true,
    user: apiResponse.data?.user,
    token: accessToken,
    accessToken,
    refreshToken: apiResponse.data?.refreshToken,
    expiresIn: apiResponse.data?.expiresIn,
    message: apiResponse.message,
  };
}

export async function login(
  email: string,
  password: string,
): Promise<AuthResponse> {
  const response = await requestJson<ApiAuthResponse>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  const normalized = toAuthResponse(response);
  if (normalized.success) {
    saveToken(normalized.accessToken);
  }

  return normalized;
}

export async function register(
  fullName: string,
  email: string,
  password: string,
): Promise<AuthResponse> {
  const response = await requestJson<ApiAuthResponse>("/api/auth/register", {
    method: "POST",
    body: JSON.stringify({ fullName, email, password }),
  });

  return toAuthResponse(response);
}

export async function forgotPassword(email: string): Promise<AuthResponse> {
  const response = await requestJson<ApiBaseResponse>(
    "/api/auth/forgot-password",
    {
      method: "POST",
      body: JSON.stringify({ email }),
    },
  );

  if (!response.success) {
    return {
      success: false,
      error: response.error ?? response.message ?? "Request failed.",
    };
  }

  return {
    success: true,
    message: response.message,
  };
}

export async function getCurrentUser(): Promise<User | null> {
  const token = getToken();
  if (!token) return null;

  const response = await requestJson<ApiMeResponse>("/api/auth/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.success) {
    if (response.status === 401) {
      clearToken();
    }

    return null;
  }

  return response.data?.user ?? null;
}

export async function logout(): Promise<AuthResponse> {
  const token = getToken();
  const response = await requestJson<ApiBaseResponse>("/api/auth/logout", {
    method: "POST",
    headers: token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : undefined,
  });

  clearToken();

  if (!response.success) {
    return {
      success: false,
      error: response.error ?? response.message ?? "Request failed.",
    };
  }

  return {
    success: true,
    message: response.message,
  };
}

export { AUTH_CHANGED_EVENT };
