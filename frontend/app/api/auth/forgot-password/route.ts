import { NextResponse } from "next/server";
import { getAuthStore } from "../_utils";

export const runtime = "nodejs";

export async function POST() {
  const store = await getAuthStore();

  return NextResponse.json({
    success: true,
    message: store.messages.forgotPasswordSuccess,
  });
}
