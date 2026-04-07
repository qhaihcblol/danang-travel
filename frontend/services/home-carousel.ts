import type { CarouselImage } from "@/types/carousel";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ?? "";

type CarouselResponse = {
  success: boolean;
  data?: {
    items?: CarouselImage[];
  };
  error?: string;
};

function withBaseUrl(path: string) {
  if (!API_BASE_URL) return path;
  return `${API_BASE_URL}${path}`;
}

export async function getHomeCarouselImages(): Promise<CarouselImage[]> {
  try {
    const response = await fetch(withBaseUrl("/api/home-carousel"), {
      method: "GET",
      cache: "no-store",
    });

    const payload = (await response
      .json()
      .catch(() => ({}))) as CarouselResponse;
    if (!response.ok || !payload.success) {
      return [];
    }

    return payload.data?.items ?? [];
  } catch {
    return [];
  }
}
