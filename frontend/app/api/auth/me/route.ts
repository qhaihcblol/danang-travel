import { NextResponse } from "next/server";
import {
  getAuthStore,
  getBearerToken,
  parseAccessToken,
  sanitizeUser,
} from "../_utils";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const store = await getAuthStore();
  const token = getBearerToken(request);

  if (!token) {
    return NextResponse.json(
      { success: false, error: store.errors.invalidToken },
      { status: 401 },
    );
  }

  const payload = parseAccessToken(token);
  if (!payload) {
    return NextResponse.json(
      { success: false, error: store.errors.invalidToken },
      { status: 401 },
    );
  }

  const user = store.users.find(
    (item) => item.id === payload.sub || item.email === payload.email,
  );

  if (!user) {
    return NextResponse.json(
      { success: false, error: store.errors.userNotFound },
      { status: 404 },
    );
  }

  return NextResponse.json({
    success: true,
    data: {
      user: sanitizeUser(user),
    },
  });
}
