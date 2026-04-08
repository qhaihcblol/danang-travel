import { NextRequest, NextResponse } from 'next/server';
import { getBackendApiUrl } from '@/lib/backend-api';
import { defaultLocale, isAppLocale } from '@/i18n/config';
import type { FeaturePlace } from '@/types/feature-place';

export const runtime = 'nodejs';

type FeaturePlacesResponse = {
  success: boolean;
  data?: {
    items?: unknown;
  };
  error?: string;
};

type RawFeaturePlace = Omit<FeaturePlace, 'reviewCount'> & {
  reviewCount?: number;
  reviewsCount?: number;
};

function normalizeFeaturePlace(place: RawFeaturePlace): FeaturePlace {
  return {
    ...place,
    reviewCount: place.reviewCount ?? place.reviewsCount ?? 0,
  };
}

function normalizeFeaturePlaces(items: unknown): FeaturePlace[] {
  if (!Array.isArray(items)) return [];

  return items.map((place) => normalizeFeaturePlace(place as RawFeaturePlace));
}

export async function GET(request: NextRequest) {
  const localeParam = request.nextUrl.searchParams.get('locale');
  const locale =
    localeParam && isAppLocale(localeParam) ? localeParam : defaultLocale;

  try {
    const searchParams = new URLSearchParams({ locale });
    const response = await fetch(
      getBackendApiUrl(`/api/feature-places?${searchParams}`),
      {
        method: 'GET',
        cache: 'no-store',
      },
    );

    const payload = (await response
      .json()
      .catch(() => ({}))) as FeaturePlacesResponse;
    if (!response.ok || !payload.success) {
      return NextResponse.json(
        {
          success: false,
          error: payload.error ?? 'Unable to load feature places data.',
        },
        { status: response.status || 502 },
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        items: normalizeFeaturePlaces(payload.data?.items),
      },
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: 'Unable to load feature places data.',
      },
      { status: 502 },
    );
  }
}
