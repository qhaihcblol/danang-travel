'use client';

import type { LucideIcon } from 'lucide-react';
import {
  Award,
  Building2,
  Car,
  CircleHelp,
  Dumbbell,
  Landmark,
  MapPin,
  Mountain,
  Palmtree,
  Sparkles,
  Utensils,
  Waves,
  Wifi,
} from 'lucide-react';
import type { HotelFeatureHighlight } from '@/types/hotel-detail';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useAppLocale } from '@/hooks/use-app-locale';

type HotelHighlightsProps = {
  highlights: HotelFeatureHighlight[];
};

const PREVIEW_LIMIT = 3;

const highlightIconMap: Record<string, LucideIcon> = {
  airport: Car,
  attraction: Landmark,
  award: Award,
  beach: Waves,
  bridge: Landmark,
  business: Building2,
  city: Building2,
  conference: Building2,
  craft: Sparkles,
  design: Sparkles,
  fitness: Dumbbell,
  food: Utensils,
  fun: Sparkles,
  garden: Palmtree,
  general: CircleHelp,
  government: Building2,
  heritage: Landmark,
  hotel: Building2,
  housekeeping: Sparkles,
  kids: Sparkles,
  landmark: Landmark,
  location: MapPin,
  market: Building2,
  mountain: Mountain,
  museum: Landmark,
  nature: Palmtree,
  park: Palmtree,
  pool: Waves,
  restaurant: Utensils,
  river: Waves,
  rooftop: Building2,
  service: Sparkles,
  shopping: Building2,
  spa: Sparkles,
  sport: Dumbbell,
  sunrise: Sparkles,
  temple: Landmark,
  train: Car,
  unique: Sparkles,
  wifi: Wifi,
  yoga: Sparkles,
};

const getHighlightIcon = (iconKey?: string): LucideIcon => {
  if (!iconKey) return Sparkles;
  return highlightIconMap[iconKey] ?? Sparkles;
};

export function HotelHighlights({ highlights }: HotelHighlightsProps) {
  const locale = useAppLocale();
  const isJa = locale === 'ja';
  const previewItems = highlights.slice(0, PREVIEW_LIMIT);
  const hasMore = highlights.length > PREVIEW_LIMIT;

  return (
    <section className="rounded-xl border border-border/80 bg-card/60 p-4 sm:p-5">
      <h2 className="border-b border-border/70 pb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        {isJa ? 'ハイライト' : 'Nổi bật'}
      </h2>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {previewItems.map((highlight, index) => {
          const Icon = getHighlightIcon(highlight.icon);
          return (
            <Tooltip key={`preview-highlight-${index}`}>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  className="flex min-h-28 w-full flex-col items-center justify-start gap-2 rounded-lg border border-border/70 bg-background/90 px-3 py-3 text-center"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="line-clamp-2 text-sm font-medium text-foreground">{highlight.title}</p>
                </button>
              </TooltipTrigger>
              {!!highlight.description && (
                <TooltipContent side="top" sideOffset={8} className="max-w-xs px-3 py-2 text-sm leading-6">
                  <p>{highlight.description}</p>
                </TooltipContent>
              )}
            </Tooltip>
          );
        })}
      </div>

      {hasMore && (
        <div className="mt-3 text-right">
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="text-sm font-medium text-primary underline-offset-4 transition-colors hover:text-primary/80 hover:underline"
              >
                {isJa ? '詳細を見る' : 'Xem chi tiết'}
              </button>
            </DialogTrigger>
            <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle>{isJa ? 'ホテルのハイライト' : 'Nổi bật của khách sạn'}</DialogTitle>
              </DialogHeader>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {highlights.map((highlight, index) => {
                  const Icon = getHighlightIcon(highlight.icon);
                  return (
                    <div
                      key={`full-highlight-${index}`}
                      className="rounded-lg border border-border/80 bg-background/90 px-4 py-3"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background text-primary">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{highlight.title}</p>
                          {!!highlight.description && (
                            <p className="mt-1 text-sm leading-6 text-muted-foreground">{highlight.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </section>
  );
}
