import {
  mockForgotPassword,
  mockGetCurrentUser,
  mockLogin,
  mockLogout,
  mockRegister,
} from "@/mock/auth";
import type { AuthResponse, User } from "@/types/auth";

const AUTH_TOKEN_KEY = "anshin_auth_token";
const AUTH_CHANGED_EVENT = "anshin-auth-changed";

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

export async function login(
  email: string,
  password: string,
): Promise<AuthResponse> {
  const response = await mockLogin(email, password);
  if (response.success) {
    saveToken(response.token);
  }
  return response;
}

export async function register(
  fullName: string,
  email: string,
  password: string,
): Promise<AuthResponse> {
  return mockRegister(fullName, email, password);
}

export async function forgotPassword(email: string): Promise<AuthResponse> {
  return mockForgotPassword(email);
}

export async function getCurrentUser(): Promise<User | null> {
  return mockGetCurrentUser(getToken());
}

export async function logout(): Promise<AuthResponse> {
  clearToken();
  return mockLogout();
}

export { AUTH_CHANGED_EVENT };
