import { NextResponse } from "next/server";
import {
  createAccessToken,
  getAuthStore,
  sanitizeUser,
  type AuthStoreUser,
} from "../_utils";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const fullName =
    typeof body.fullName === "string" ? body.fullName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!fullName || !email || !password) {
    return NextResponse.json(
      { success: false, error: "Full name, email, and password are required." },
      { status: 400 },
    );
  }

  const store = await getAuthStore();
  const normalizedEmail = email.toLowerCase();
  const existing = store.users.find(
    (item) => item.email.toLowerCase() === normalizedEmail,
  );

  if (existing) {
    return NextResponse.json(
      { success: false, error: store.errors.emailExists },
      { status: 409 },
    );
  }

  const newUser: AuthStoreUser = {
    id: `user_${Date.now()}`,
    email,
    fullName,
    password,
    role: "user",
    createdAt: new Date().toISOString(),
    preferences: {
      language: "vi",
      newsletter: false,
      notifications: true,
    },
  };

  store.users.push(newUser);

  const accessToken = createAccessToken(newUser, store.tokens.expiresIn);

  return NextResponse.json({
    success: true,
    message: store.messages.registerSuccess,
    data: {
      user: sanitizeUser(newUser),
      accessToken,
      refreshToken: `mock_refresh_${newUser.id}`,
      expiresIn: store.tokens.expiresIn,
    },
  });
}
