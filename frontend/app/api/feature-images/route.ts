import { NextResponse } from 'next/server';
import { getBackendApiUrl } from '@/lib/backend-api';
import type { CarouselImage } from '@/types/carousel';

export const runtime = 'nodejs';

type FeatureImagesResponse = {
  success: boolean;
  data?: {
    items?: unknown;
  };
  error?: string;
};

function normalizeFeatureImages(items: unknown): CarouselImage[] {
  if (!Array.isArray(items)) return [];

  return items.filter(
    (item): item is CarouselImage =>
      typeof item === 'string' && item.trim().length > 0,
  );
}

export async function GET() {
  try {
    const response = await fetch(getBackendApiUrl('/api/feature-images'), {
      method: 'GET',
      cache: 'no-store',
    });

    const payload = (await response
      .json()
      .catch(() => ({}))) as FeatureImagesResponse;
    if (!response.ok || !payload.success) {
      return NextResponse.json(
        {
          success: false,
          error: payload.error ?? 'Unable to load feature images.',
        },
        { status: response.status || 502 },
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        items: normalizeFeatureImages(payload.data?.items),
      },
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: 'Unable to load feature images.',
      },
      { status: 502 },
    );
  }
}
