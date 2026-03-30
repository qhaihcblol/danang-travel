'use client';

import { useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { SlidersHorizontal } from 'lucide-react';
import type { HotelReview, RatingBreakdown } from '@/types/hotel-detail';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type HotelReviewsSectionProps = {
  rating: number;
  reviewCount: number;
  ratingBreakdown?: RatingBreakdown;
  reviews?: HotelReview[];
};

type ReviewSortOption = 'latest' | 'ratingHigh' | 'ratingLow';

const REVIEWS_PAGE_SIZE = 4;

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
  const [stayTypeFilter, setStayTypeFilter] = useState<'all' | NonNullable<HotelReview['stayType']>>('all');
  const [sortOption, setSortOption] = useState<ReviewSortOption>('latest');
  const [visibleCount, setVisibleCount] = useState(REVIEWS_PAGE_SIZE);

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
    const filtered = reviews.filter((review) => {
      if (stayTypeFilter === 'all') return true;
      return review.stayType === stayTypeFilter;
    });

    return [...filtered].sort((first, second) => {
      if (sortOption === 'ratingHigh') {
        return second.rating - first.rating;
      }

      if (sortOption === 'ratingLow') {
        return first.rating - second.rating;
      }

      const firstTime = toSafeDate(first.date)?.getTime() ?? 0;
      const secondTime = toSafeDate(second.date)?.getTime() ?? 0;
      return secondTime - firstTime;
    });
  }, [reviews, sortOption, stayTypeFilter]);

  const stayTypeOptions = useMemo(() => {
    const uniqueValues = new Set<NonNullable<HotelReview['stayType']>>();

    reviews.forEach((review) => {
      if (review.stayType) {
        uniqueValues.add(review.stayType);
      }
    });

    return Array.from(uniqueValues);
  }, [reviews]);

  const visibleReviews = useMemo(() => sortedReviews.slice(0, visibleCount), [sortedReviews, visibleCount]);
  const hasMore = sortedReviews.length > visibleReviews.length;

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

      <div className="mt-5 rounded-xl border border-border/70 bg-background/90 p-4">
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
          <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
          {t('reviews.controls.title')}
        </p>

        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
          <label className="space-y-1">
            <span className="text-xs font-medium text-muted-foreground">{t('reviews.controls.stayTypeLabel')}</span>
            <Select
              value={stayTypeFilter}
              onValueChange={(value) => {
                setStayTypeFilter(value as typeof stayTypeFilter);
                setVisibleCount(REVIEWS_PAGE_SIZE);
              }}
            >
              <SelectTrigger className="w-full md:min-w-52">
                <SelectValue placeholder={t('reviews.controls.allStayTypes')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('reviews.controls.allStayTypes')}</SelectItem>
                {stayTypeOptions.map((stayType) => (
                  <SelectItem key={stayType} value={stayType}>
                    {t(`reviews.stayType.${stayType}`)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </label>

          <label className="space-y-1">
            <span className="text-xs font-medium text-muted-foreground">{t('reviews.controls.sortLabel')}</span>
            <Select
              value={sortOption}
              onValueChange={(value) => {
                setSortOption(value as ReviewSortOption);
                setVisibleCount(REVIEWS_PAGE_SIZE);
              }}
            >
              <SelectTrigger className="w-full md:min-w-52">
                <SelectValue placeholder={t('reviews.sortOptions.latest')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">{t('reviews.sortOptions.latest')}</SelectItem>
                <SelectItem value="ratingHigh">{t('reviews.sortOptions.ratingHigh')}</SelectItem>
                <SelectItem value="ratingLow">{t('reviews.sortOptions.ratingLow')}</SelectItem>
              </SelectContent>
            </Select>
          </label>
        </div>

        <p className="mt-3 text-sm text-muted-foreground">
          {t('reviews.showingCount', { visible: visibleReviews.length, total: sortedReviews.length })}
        </p>
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
          {visibleReviews.length > 0 ? (
            visibleReviews.map((review) => {
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

          {hasMore && (
            <div className="pt-1">
              <Button type="button" variant="outline" className="w-full sm:w-auto" onClick={() => setVisibleCount((prev) => prev + REVIEWS_PAGE_SIZE)}>
                {t('reviews.loadMore')}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
