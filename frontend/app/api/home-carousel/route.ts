import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import type { CarouselImage } from "@/types/carousel";

export const runtime = "nodejs";

const STORE_PATH = path.resolve(
  process.cwd(),
  "..",
  "backend",
  "mock",
  "home_carousel.json",
);

type CarouselStore = {
  items?: CarouselImage[];
};

export async function GET() {
  try {
    const raw = await readFile(STORE_PATH, "utf-8");
    const parsed = JSON.parse(raw) as CarouselStore;
    const items = Array.isArray(parsed.items) ? parsed.items : [];

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
        error: "Unable to load carousel data.",
      },
      { status: 500 },
    );
  }
}
