import type { AppLocale } from '@/i18n/config';
import type { FeatureHotel } from '@/types/feature-hotel';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, '') ?? '';

type FeatureHotelsResponse = {
  success: boolean;
  data?: {
    items?: FeatureHotel[];
  };
  error?: string;
};

function withBaseUrl(path: string) {
  if (!API_BASE_URL) return path;
  return `${API_BASE_URL}${path}`;
}

export async function getFeatureHotels(locale: AppLocale): Promise<FeatureHotel[]> {
  try {
    const searchParams = new URLSearchParams({ locale });
    const response = await fetch(withBaseUrl(`/api/feature-hotels?${searchParams}`), {
      method: 'GET',
      cache: 'no-store',
    });

    const payload = (await response
      .json()
      .catch(() => ({}))) as FeatureHotelsResponse;
    if (!response.ok || !payload.success) {
      return [];
    }

    return payload.data?.items ?? [];
  } catch {
    return [];
  }
}
