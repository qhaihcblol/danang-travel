import { NextRequest, NextResponse } from "next/server";
import { getBackendApiUrl } from "@/lib/backend-api";
import { defaultLocale, isAppLocale } from "@/i18n/config";
import type { Hotel } from "@/types/hotel";

export const runtime = "nodejs";

type HotelsResponse = {
  success: boolean;
  data?: {
    items?: Hotel[];
  };
  error?: string;
};

export async function GET(request: NextRequest) {
  const localeParam = request.nextUrl.searchParams.get("locale");
  const locale =
    localeParam && isAppLocale(localeParam) ? localeParam : defaultLocale;

  try {
    const searchParams = new URLSearchParams({ locale });
    const response = await fetch(
      getBackendApiUrl(`/api/hotels?${searchParams}`),
      {
        method: "GET",
        cache: "no-store",
      },
    );

    const payload = (await response.json().catch(() => ({}))) as HotelsResponse;
    if (!response.ok || !payload.success) {
      return NextResponse.json(
        {
          success: false,
          error: payload.error ?? "Unable to load hotels data.",
        },
        { status: response.status || 502 },
      );
    }

    const items = Array.isArray(payload.data?.items) ? payload.data?.items : [];

    return NextResponse.json({
      success: true,
      data: {
        items,
      },
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Unable to load hotels data.",
      },
      { status: 502 },
    );
  }
}
