import { readFile } from "fs/promises";
import path from "path";
import type { User } from "@/types/auth";

export interface AuthStoreUser extends User {
  password: string;
}

export interface AuthStore {
  users: AuthStoreUser[];
  tokens: {
    expiresIn: number;
  };
  messages: {
    loginSuccess: string;
    registerSuccess: string;
    forgotPasswordSuccess: string;
    logoutSuccess: string;
  };
  errors: {
    invalidCredentials: string;
    emailExists: string;
    userNotFound: string;
    invalidToken: string;
  };
}

const DEFAULT_STORE: AuthStore = {
  users: [
    {
      id: "u_001",
      email: "test@example.com",
      fullName: "Dev Hai",
      password: "123456",
      role: "user",
      avatar: "https://i.pravatar.cc/150?img=3",
      createdAt: "2024-01-15T10:30:00Z",
      preferences: {
        language: "vi",
        newsletter: true,
        notifications: true,
      },
    },
  ],
  tokens: {
    expiresIn: 900,
  },
  messages: {
    loginSuccess: "Login successful",
    registerSuccess: "Register successful",
    forgotPasswordSuccess:
      "If the email exists, we'll send reset instructions.",
    logoutSuccess: "Logout successful",
  },
  errors: {
    invalidCredentials: "Invalid email or password",
    emailExists: "Email already registered",
    userNotFound: "User not found",
    invalidToken: "Invalid or expired token",
  },
};

const STORE_PATH = path.resolve(
  process.cwd(),
  "..",
  "backend",
  "mock",
  "auth",
  "auth.json",
);

let cachedStore: AuthStore | null = null;

type RawUser = Partial<AuthStoreUser> & { name?: string };

function normalizeUser(rawUser: RawUser): AuthStoreUser {
  return {
    id: rawUser.id ?? `u_${Date.now()}`,
    email: rawUser.email ?? "user@example.com",
    fullName: rawUser.fullName ?? rawUser.name ?? "User",
    password: rawUser.password ?? "123456",
    role: rawUser.role ?? "user",
    avatar: rawUser.avatar,
    createdAt: rawUser.createdAt ?? new Date().toISOString(),
    preferences: {
      language: rawUser.preferences?.language ?? "vi",
      newsletter: rawUser.preferences?.newsletter ?? false,
      notifications: rawUser.preferences?.notifications ?? true,
    },
  };
}

function mergeStore(raw: unknown): AuthStore {
  if (!raw || typeof raw !== "object") {
    return DEFAULT_STORE;
  }

  const rawStore = raw as Partial<AuthStore> & {
    data?: { user?: RawUser };
    users?: RawUser[];
  };

  const users = Array.isArray(rawStore.users)
    ? rawStore.users.map(normalizeUser)
    : rawStore.data?.user
      ? [normalizeUser(rawStore.data.user)]
      : DEFAULT_STORE.users;

  return {
    users,
    tokens: {
      ...DEFAULT_STORE.tokens,
      ...rawStore.tokens,
    },
    messages: {
      ...DEFAULT_STORE.messages,
      ...rawStore.messages,
    },
    errors: {
      ...DEFAULT_STORE.errors,
      ...rawStore.errors,
    },
  };
}

export async function getAuthStore(): Promise<AuthStore> {
  if (cachedStore) {
    return cachedStore;
  }

  try {
    const data = await readFile(STORE_PATH, "utf-8");
    cachedStore = mergeStore(JSON.parse(data));
  } catch {
    cachedStore = DEFAULT_STORE;
  }

  return cachedStore;
}

export function sanitizeUser(user: AuthStoreUser): User {
  const { password: _password, ...safeUser } = user;
  return safeUser;
}

type TokenPayload = {
  sub: string;
  email: string;
  exp: number;
};

export function createAccessToken(
  user: AuthStoreUser,
  expiresIn: number,
): string {
  const issuedAt = Math.floor(Date.now() / 1000);
  const payload: TokenPayload = {
    sub: user.id,
    email: user.email,
    exp: issuedAt + expiresIn,
  };

  const encoded = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return `mock.${encoded}`;
}

export function parseAccessToken(token: string): TokenPayload | null {
  if (!token.startsWith("mock.")) {
    return null;
  }

  try {
    const encoded = token.slice("mock.".length);
    const payload = JSON.parse(
      Buffer.from(encoded, "base64url").toString("utf-8"),
    ) as TokenPayload;

    if (!payload?.exp || payload.exp < Date.now() / 1000) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

export function getBearerToken(request: Request): string | null {
  const header = request.headers.get("authorization") ?? "";
  const [scheme, token] = header.split(" ");
  if (scheme !== "Bearer" || !token) {
    return null;
  }

  return token;
}
