import { type CSSProperties } from 'react';
import Image from 'next/image';
import { Compass, MapPin, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { FeaturePlace } from '@/types/feature-place';

const addressClampStyle: CSSProperties = {
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
};

const descriptionClampStyle: CSSProperties = {
  display: '-webkit-box',
  WebkitLineClamp: 4,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
};

interface FeaturePlaceCardProps {
  place: FeaturePlace;
  locale: string;
  featuredLabel: string;
  reviewsLabel: string;
  coordinatesLabel: string;
  overlayClassName?: string;
}

export function FeaturePlaceCard({
  place,
  locale,
  featuredLabel,
  reviewsLabel,
  coordinatesLabel,
  overlayClassName,
}: FeaturePlaceCardProps) {
  const reviewCountFormatter = new Intl.NumberFormat(locale);
  const ratingFormatter = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  return (
    <Card
      tabIndex={0}
      className="group overflow-hidden rounded-3xl border-border/80 bg-card/95 py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:-translate-y-1 focus-visible:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={place.image}
          alt={place.name}
          fill
          sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105"
        />

        <div
          className={cn(
            'absolute inset-0 bg-linear-to-t',
            overlayClassName ?? 'from-slate-950/78 via-slate-900/18 to-transparent',
          )}
        />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
          <span className="inline-flex rounded-full border border-white/30 bg-white/14 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
            {place.type}
          </span>

          <div className="rounded-2xl bg-white/92 px-3 py-2 text-right shadow-lg backdrop-blur-sm">
            <div className="flex items-center justify-end gap-1 text-sm font-semibold text-foreground">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              {ratingFormatter.format(place.rating)}
            </div>
            <p className="mt-0.5 text-[11px] text-muted-foreground">
              {reviewCountFormatter.format(place.reviewCount)} {reviewsLabel}
            </p>
          </div>
        </div>

        <div className="absolute inset-x-4 bottom-4 translate-y-4 rounded-2xl bg-black/55 p-4 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
            {featuredLabel}
          </p>
          <p className="text-sm leading-relaxed text-white/92" style={descriptionClampStyle}>
            {place.shortDescription}
          </p>
        </div>
      </div>

      <CardContent className="space-y-4 px-5 py-5">
        <div className="space-y-2.5">
          <h3 className="text-lg font-semibold leading-tight text-foreground">
            {place.name}
          </h3>
          <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary/80" />
            <p style={addressClampStyle}>{place.address}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {place.tags.map((tag) => (
            <span
              key={`${place.id}-${tag}`}
              className="rounded-full bg-primary/8 px-3 py-1 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-border/70 pt-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/12 px-3 py-1 text-xs font-semibold text-accent">
            <Compass className="h-3.5 w-3.5" />
            {coordinatesLabel}
          </span>
          <span className="text-xs font-medium tracking-[0.04em] text-muted-foreground">
            {place.latitude.toFixed(4)}, {place.longitude.toFixed(4)}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
