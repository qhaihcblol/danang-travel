import { NextRequest, NextResponse } from "next/server";
import { getBackendApiUrl } from "@/lib/backend-api";
import { defaultLocale, isAppLocale } from "@/i18n/config";
import type { Hotel } from "@/types/hotel";

export const runtime = "nodejs";

type HotelDetailResponse = {
  success: boolean;
  data?: {
    item?: Hotel;
  };
  error?: string;
};

interface Context {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(request: NextRequest, context: Context) {
  const { id } = await context.params;
  const localeParam = request.nextUrl.searchParams.get("locale");
  const locale =
    localeParam && isAppLocale(localeParam) ? localeParam : defaultLocale;

  try {
    const searchParams = new URLSearchParams({ locale });
    const response = await fetch(
      getBackendApiUrl(`/api/hotels/${encodeURIComponent(id)}?${searchParams}`),
      {
        method: "GET",
        cache: "no-store",
      },
    );

    const payload = (await response
      .json()
      .catch(() => ({}))) as HotelDetailResponse;
    if (!response.ok || !payload.success || !payload.data?.item) {
      return NextResponse.json(
        {
          success: false,
          error: payload.error ?? "Unable to load hotel detail data.",
        },
        { status: response.status || 502 },
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        item: payload.data.item,
      },
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Unable to load hotel detail data.",
      },
      { status: 502 },
    );
  }
}
