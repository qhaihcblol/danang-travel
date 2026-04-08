import type { CarouselImage } from '@/types/carousel';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, '') ?? '';

type FeatureImagesResponse = {
  success: boolean;
  data?: {
    items?: unknown;
  };
  error?: string;
};

function withBaseUrl(path: string) {
  if (!API_BASE_URL) return path;
  return `${API_BASE_URL}${path}`;
}

function normalizeFeatureImages(items: unknown): CarouselImage[] {
  if (!Array.isArray(items)) return [];

  return items.filter(
    (item): item is CarouselImage =>
      typeof item === 'string' && item.trim().length > 0,
  );
}

export async function getFeatureImages(): Promise<CarouselImage[]> {
  try {
    const response = await fetch(withBaseUrl('/api/feature-images'), {
      method: 'GET',
      cache: 'no-store',
    });

    const payload = (await response
      .json()
      .catch(() => ({}))) as FeatureImagesResponse;
    if (!response.ok || !payload.success) {
      return [];
    }

    return normalizeFeatureImages(payload.data?.items);
  } catch {
    return [];
  }
}
