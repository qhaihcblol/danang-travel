'use client';

import { useMemo } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import type { HotelReview, RatingBreakdown } from '@/types/hotel-detail';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

type HotelReviewsSectionProps = {
  rating: number;
  reviewCount: number;
  ratingBreakdown?: RatingBreakdown;
  reviews?: HotelReview[];
};

const RATING_KEYS: Array<keyof RatingBreakdown> = [
  'cleanliness',
  'comfort',
  'location',
  'facilities',
  'staff',
  'valueForMoney',
];

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

const toInitials = (name: string) => {
  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(-2);

  return parts.map((part) => part[0]?.toUpperCase() ?? '').join('') || '?';
};

const toSafeDate = (value: string) => {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

export function HotelReviewsSection({
  rating,
  reviewCount,
  ratingBreakdown,
  reviews = [],
}: HotelReviewsSectionProps) {
  const t = useTranslations('hotels.detail');
  const locale = useLocale();
  const numberLocale = locale === 'ja' ? 'ja-JP' : 'vi-VN';

  const score = clamp(rating, 0, 10);

  const numberFormatter = useMemo(() => new Intl.NumberFormat(numberLocale), [numberLocale]);
  const dateFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat(numberLocale, {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
    [numberLocale],
  );

  const breakdownRows = useMemo(() => {
    if (!ratingBreakdown) return [];

    return RATING_KEYS.map((key) => {
      const value = clamp(ratingBreakdown[key], 0, 10);

      return {
        key,
        value,
        percentage: value * 10,
      };
    });
  }, [ratingBreakdown]);

  const sortedReviews = useMemo(() => {
    return [...reviews].sort((first, second) => {
      const firstTime = toSafeDate(first.date)?.getTime() ?? 0;
      const secondTime = toSafeDate(second.date)?.getTime() ?? 0;
      return secondTime - firstTime;
    });
  }, [reviews]);

  return (
    <section className="mt-8 rounded-2xl border border-border/80 bg-card/55 p-5 sm:p-7 lg:p-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{t('reviews.title')}</h2>
          <p className="mt-1 text-base text-muted-foreground">{t('reviews.subtitle')}</p>
        </div>
        <Badge variant="secondary" className="w-fit rounded-full px-3 py-1.5 text-sm">
          {t('reviewCount', { count: reviewCount })}
        </Badge>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(260px,320px)_minmax(0,1fr)]">
        <aside className="space-y-4 rounded-xl border border-border/70 bg-background/90 p-4 sm:p-5">
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
            <p className="text-sm font-medium text-muted-foreground">{t('overallRating')}</p>
            <div className="mt-2 flex items-end justify-between gap-2">
              <p className="text-4xl font-black leading-none text-foreground">{score.toFixed(1)}</p>
              <p className="text-sm font-semibold tracking-wide text-primary">/10</p>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              {t('reviews.basedOn', { count: numberFormatter.format(reviewCount) })}
            </p>
          </div>

          <div className="rounded-xl border border-border/70 bg-card/40 p-4">
            <p className="text-sm font-semibold text-foreground">{t('reviews.categoryScores')}</p>
            {breakdownRows.length > 0 ? (
              <div className="mt-3 space-y-3">
                {breakdownRows.map((row) => (
                  <div key={row.key} className="grid grid-cols-[minmax(0,110px)_minmax(0,1fr)_auto] items-center gap-2">
                    <span className="truncate text-xs text-muted-foreground">{t(`ratingLabels.${row.key}`)}</span>
                    <Progress value={row.percentage} className="h-2.5" />
                    <span className="text-xs font-semibold text-foreground">{row.value.toFixed(1)}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-3 text-sm text-muted-foreground">{t('reviews.noBreakdown')}</p>
            )}
          </div>
        </aside>

        <div className="space-y-3">
          {sortedReviews.length > 0 ? (
            sortedReviews.map((review) => {
              const reviewDate = toSafeDate(review.date);

              return (
                <article key={review.id} className="rounded-xl border border-border/70 bg-background/95 p-4 sm:p-5">
                  <header className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="size-10 border border-border/70">
                        {review.avatarUrl && <AvatarImage src={review.avatarUrl} alt={review.author} />}
                        <AvatarFallback className="bg-sky-100 text-xs font-semibold text-sky-800">
                          {toInitials(review.author)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{review.author}</p>
                        <p className="text-xs text-muted-foreground">
                          {reviewDate ? dateFormatter.format(reviewDate) : review.date}
                        </p>
                      </div>
                    </div>

                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
                      {review.rating.toFixed(1)} / 10
                    </span>
                  </header>

                  {(review.stayType || review.roomName) && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {review.stayType && (
                        <span className="rounded-full border border-border/80 bg-card px-2.5 py-1 text-xs text-muted-foreground">
                          {t(`reviews.stayType.${review.stayType}`)}
                        </span>
                      )}
                      {review.roomName && (
                        <span className="rounded-full border border-border/80 bg-card px-2.5 py-1 text-xs text-muted-foreground">
                          {t('reviews.roomName', { room: review.roomName })}
                        </span>
                      )}
                    </div>
                  )}

                  {!!review.title && <h3 className="mt-3 text-base font-semibold text-foreground">{review.title}</h3>}

                  <p className="mt-2 text-sm leading-7 text-foreground/90">{review.content}</p>
                </article>
              );
            })
          ) : (
            <div className="rounded-xl border border-dashed border-border bg-muted/15 p-7 text-center">
              <p className="text-base font-semibold text-foreground">{t('reviews.emptyTitle')}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t('reviews.emptySubtitle')}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
