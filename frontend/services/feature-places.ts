import type { AppLocale } from '@/i18n/config';
import type { FeaturePlace } from '@/types/feature-place';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, '') ?? '';

type FeaturePlacesResponse = {
  success: boolean;
  data?: {
    items?: FeaturePlace[];
  };
  error?: string;
};

function withBaseUrl(path: string) {
  if (!API_BASE_URL) return path;
  return `${API_BASE_URL}${path}`;
}

export async function getFeaturePlaces(locale: AppLocale): Promise<FeaturePlace[]> {
  try {
    const searchParams = new URLSearchParams({ locale });
    const response = await fetch(withBaseUrl(`/api/feature-places?${searchParams}`), {
      method: 'GET',
      cache: 'no-store',
    });

    const payload = (await response
      .json()
      .catch(() => ({}))) as FeaturePlacesResponse;
    if (!response.ok || !payload.success) {
      return [];
    }

    return payload.data?.items ?? [];
  } catch {
    return [];
  }
}
