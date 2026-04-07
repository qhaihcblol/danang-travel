import { NextResponse } from "next/server";
import { createAccessToken, getAuthStore, sanitizeUser } from "../_utils";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!email || !password) {
    return NextResponse.json(
      { success: false, error: "Email and password are required." },
      { status: 400 },
    );
  }

  const store = await getAuthStore();
  const user = store.users.find(
    (item) => item.email.toLowerCase() === email.toLowerCase(),
  );

  if (!user || user.password !== password) {
    return NextResponse.json(
      { success: false, error: store.errors.invalidCredentials },
      { status: 401 },
    );
  }

  const accessToken = createAccessToken(user, store.tokens.expiresIn);

  return NextResponse.json({
    success: true,
    message: store.messages.loginSuccess,
    data: {
      user: sanitizeUser(user),
      accessToken,
      refreshToken: `mock_refresh_${user.id}`,
      expiresIn: store.tokens.expiresIn,
    },
  });
}
