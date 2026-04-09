import type { AppLocale } from "@/i18n/config";
import type { Hotel } from "@/types/hotel";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ?? "";

type HotelsResponse = {
  success: boolean;
  data?: {
    items?: Hotel[];
  };
  error?: string;
};

function withBaseUrl(path: string) {
  if (!API_BASE_URL) return path;
  return `${API_BASE_URL}${path}`;
}

export async function getHotels(locale: AppLocale): Promise<Hotel[]> {
  try {
    const searchParams = new URLSearchParams({ locale });
    const response = await fetch(withBaseUrl(`/api/hotels?${searchParams}`), {
      method: "GET",
      cache: "no-store",
    });

    const payload = (await response.json().catch(() => ({}))) as HotelsResponse;
    if (!response.ok || !payload.success) {
      return [];
    }

    return payload.data?.items ?? [];
  } catch {
    return [];
  }
}
