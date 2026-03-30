'use client';

import { useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { BedDouble, CheckCircle2, FilterX, Images, SlidersHorizontal, Users, XCircle } from 'lucide-react';
import type { RoomType, RoomVariant } from '@/types/hotel-detail';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type HotelRoomsSectionProps = {
  rooms: RoomType[];
  currency?: string;
};

type RoomSortOption = 'priceAsc' | 'priceDesc' | 'flexibleFirst';

const formatPrice = (value: number, currency = 'VND', locale = 'vi-VN') => {
  if (currency === 'VND') {
    return `${value.toLocaleString(locale)}đ`;
  }

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value);
};

const toBedLabel = (beds: RoomVariant['beds']) => beds.map((bed) => `${bed.count} ${bed.type.replace('_', ' ')}`).join(' • ');

const hasFreeCancellation = (policy?: string) => {
  if (!policy) return false;

  const normalized = policy.toLowerCase();
  const includesFree = /free|miễn phí|無料/.test(normalized);
  const nonRefundable = /không hoàn|non[\s-]?refundable|返金不可/.test(normalized);

  return includesFree && !nonRefundable;
};

const isLowAvailability = (count?: number) => typeof count === 'number' && count <= 2;

const toStatusVariant = (availableCount?: number) => {
  if (availableCount === 0) return 'destructive' as const;
  if (availableCount !== undefined && availableCount <= 2) return 'secondary' as const;
  return 'default' as const;
};

export function HotelRoomsSection({ rooms, currency = 'VND' }: HotelRoomsSectionProps) {
  const t = useTranslations('hotels.rooms');
  const locale = useLocale();
  const numberLocale = locale === 'ja' ? 'ja-JP' : 'vi-VN';
  const [breakfastOnly, setBreakfastOnly] = useState(false);
  const [freeCancellationOnly, setFreeCancellationOnly] = useState(false);
  const [lowAvailabilityOnly, setLowAvailabilityOnly] = useState(false);
  const [sortOption, setSortOption] = useState<RoomSortOption>('priceAsc');
  const [activeGalleryRoom, setActiveGalleryRoom] = useState<RoomType | null>(null);

  const hasActiveFilters = breakfastOnly || freeCancellationOnly || lowAvailabilityOnly;

  const toStatusLabel = (availableCount?: number) => {
    if (availableCount === 0) return t('status.soldOut');
    if (availableCount !== undefined && availableCount <= 2) return t('status.almostSoldOut');
    return t('status.available');
  };

  const toCapacityLabel = (capacity: RoomVariant['capacity']) => {
    const adultsLabel = t('capacity.adults', { count: capacity.adults });
    const childrenCount = capacity.children ?? 0;
    return childrenCount > 0
      ? t('capacity.withChildren', { adults: adultsLabel, children: childrenCount })
      : adultsLabel;
  };

  const visibleRooms = useMemo(() => {
    return rooms
      .map((room) => {
        const filteredVariants = room.roomVariants.filter((variant) => {
          if (breakfastOnly && !variant.breakfast) return false;
          if (freeCancellationOnly && !hasFreeCancellation(variant.cancellationPolicy)) return false;
          if (lowAvailabilityOnly && !isLowAvailability(variant.availableCount)) return false;

          return true;
        });

        const sortedVariants = [...filteredVariants].sort((first, second) => {
          if (sortOption === 'priceDesc') {
            return second.price - first.price;
          }

          if (sortOption === 'flexibleFirst') {
            const firstFlexible = hasFreeCancellation(first.cancellationPolicy);
            const secondFlexible = hasFreeCancellation(second.cancellationPolicy);

            if (firstFlexible !== secondFlexible) {
              return Number(secondFlexible) - Number(firstFlexible);
            }
          }

          return first.price - second.price;
        });

        const firstVariant = sortedVariants[0];

        const maxGuests = sortedVariants.reduce((acc, variant) => {
          const children = variant.capacity.children ?? 0;
          return Math.max(acc, variant.capacity.adults + children);
        }, 0);

        const availableCounts = sortedVariants
          .map((variant) => variant.availableCount)
          .filter((count): count is number => count !== undefined);

        const totalAvailable = availableCounts.length
          ? availableCounts.reduce((sum, count) => sum + count, 0)
          : undefined;

        return {
          room,
          sortedVariants,
          firstVariant,
          maxGuests,
          totalAvailable,
        };
      })
      .filter((item) => item.sortedVariants.length > 0)
      .sort(
        (a, b) =>
          sortOption === 'priceDesc'
            ? (b.firstVariant?.price ?? Number.MIN_SAFE_INTEGER) -
              (a.firstVariant?.price ?? Number.MIN_SAFE_INTEGER)
            : (a.firstVariant?.price ?? Number.MAX_SAFE_INTEGER) -
              (b.firstVariant?.price ?? Number.MAX_SAFE_INTEGER),
      );
  }, [breakfastOnly, freeCancellationOnly, lowAvailabilityOnly, rooms, sortOption]);

  const resetFilters = () => {
    setBreakfastOnly(false);
    setFreeCancellationOnly(false);
    setLowAvailabilityOnly(false);
    setSortOption('priceAsc');
  };

  return (
    <section className="mt-10 rounded-2xl border border-border/80 bg-card/55 p-5 sm:p-7 lg:p-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{t('title')}</h2>
          <p className="mt-1 text-base text-muted-foreground">{t('subtitle')}</p>
        </div>
        <Badge variant="secondary" className="w-fit rounded-full px-3 py-1.5 text-sm">
          {t('roomTypesCount', { count: visibleRooms.length })}
        </Badge>
      </div>

      <div className="mt-5 rounded-xl border border-border/70 bg-background/90 p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
            <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
            {t('controls.title')}
          </p>

          <div className="flex w-full flex-wrap gap-2 lg:w-auto lg:justify-end">
            <Button
              type="button"
              size="sm"
              variant={breakfastOnly ? 'default' : 'outline'}
              onClick={() => setBreakfastOnly((prev) => !prev)}
            >
              {t('filters.breakfast')}
            </Button>
            <Button
              type="button"
              size="sm"
              variant={freeCancellationOnly ? 'default' : 'outline'}
              onClick={() => setFreeCancellationOnly((prev) => !prev)}
            >
              {t('filters.freeCancellation')}
            </Button>
            <Button
              type="button"
              size="sm"
              variant={lowAvailabilityOnly ? 'default' : 'outline'}
              onClick={() => setLowAvailabilityOnly((prev) => !prev)}
            >
              {t('filters.lowAvailability')}
            </Button>

            <Select value={sortOption} onValueChange={(value) => setSortOption(value as RoomSortOption)}>
              <SelectTrigger className="h-8 min-w-48">
                <SelectValue placeholder={t('controls.sort')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="priceAsc">{t('sortOptions.priceAsc')}</SelectItem>
                <SelectItem value="priceDesc">{t('sortOptions.priceDesc')}</SelectItem>
                <SelectItem value="flexibleFirst">{t('sortOptions.flexibleFirst')}</SelectItem>
              </SelectContent>
            </Select>

            {hasActiveFilters && (
              <Button type="button" size="sm" variant="ghost" onClick={resetFilters}>
                <FilterX className="h-4 w-4" />
                {t('controls.clearFilters')}
              </Button>
            )}
          </div>
        </div>

        <p className="mt-3 text-sm text-muted-foreground">
          {t('controls.resultsSummary', { visible: visibleRooms.length, total: rooms.length })}
        </p>
      </div>

      <div className="mt-6 space-y-5">
        {visibleRooms.map(({ room, sortedVariants, firstVariant, maxGuests, totalAvailable }) => {
          const mainImage = room.gallery?.[0];
          const visibleAmenities = room.amenities?.slice(0, 6) ?? [];
          const extraAmenities = room.amenities?.slice(6) ?? [];

          return (
            <article
              key={room.id}
              className="overflow-hidden rounded-xl border border-border/80 bg-background/95 shadow-sm transition-shadow hover:shadow-md"
            >
              <header className="border-b border-border/70 bg-muted/25 px-4 py-3 sm:px-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{room.name}</h3>
                    <p className="text-sm text-muted-foreground">{room.type ?? t('standardRoomType')}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {maxGuests > 0 && (
                      <span className="rounded-full border border-border/70 bg-background px-2.5 py-1 text-xs text-muted-foreground">
                        {t('maxGuests', { count: maxGuests })}
                      </span>
                    )}
                    <Badge variant={toStatusVariant(totalAvailable)}>{toStatusLabel(totalAvailable)}</Badge>
                    {!!room.gallery?.length && (
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        className="h-7 px-2.5 text-xs"
                        onClick={() => setActiveGalleryRoom(room)}
                      >
                        <Images className="h-3.5 w-3.5" />
                        {t('gallery.view')}
                      </Button>
                    )}
                  </div>
                </div>
              </header>

              <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-12 md:gap-5 md:p-5">
                <div className="space-y-3 md:col-span-4">
                  <div className="overflow-hidden rounded-lg border border-border/70 bg-muted/50">
                    {mainImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={mainImage} alt={room.name} className="h-44 w-full object-cover" loading="lazy" />
                    ) : (
                      <div className="flex h-44 items-center justify-center text-muted-foreground">
                        <BedDouble className="mr-2 h-5 w-5" />
                        {t('noImage')}
                      </div>
                    )}
                  </div>

                  <div className="rounded-lg border border-border/70 bg-card/30 p-3">
                    <div className="space-y-1.5 text-sm text-muted-foreground">
                      {room.sizeM2 && <p>{t('roomInfo.size', { value: room.sizeM2 })}</p>}
                      {room.view && <p>{t('roomInfo.view', { value: room.view })}</p>}
                      {totalAvailable !== undefined && <p>{t('roomInfo.remaining', { count: totalAvailable })}</p>}
                    </div>

                    {visibleAmenities.length > 0 && (
                      <div className="mt-3">
                        <p className="mb-2 text-sm font-medium text-foreground">{t('amenities.title')}</p>
                        <div className="flex flex-wrap gap-2">
                          {visibleAmenities.map((amenity) => (
                            <span
                              key={`${room.id}-${amenity}`}
                              className="rounded-full border border-border/70 bg-background px-2.5 py-1 text-xs text-foreground"
                            >
                              {amenity}
                            </span>
                          ))}
                        </div>

                        {extraAmenities.length > 0 && (
                          <HoverCard>
                            <HoverCardTrigger asChild>
                              <button
                                type="button"
                                className="mt-2 text-xs font-semibold text-primary underline-offset-4 hover:underline"
                              >
                                {t('amenities.viewMore', { count: extraAmenities.length })}
                              </button>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-96 max-w-[90vw] p-4">
                              <p className="mb-3 text-base font-semibold text-foreground">{t('amenities.allAmenities')}</p>
                              <div className="flex max-h-56 flex-wrap gap-2 overflow-y-auto pr-1">
                                {(room.amenities ?? []).map((amenity) => (
                                  <span
                                    key={`${room.id}-all-${amenity}`}
                                    className="rounded-full border border-border/70 bg-muted/25 px-3 py-1.5 text-sm text-foreground"
                                  >
                                    {amenity}
                                  </span>
                                ))}
                              </div>
                            </HoverCardContent>
                          </HoverCard>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-3 md:col-span-8">
                  {sortedVariants.length > 0 && (
                    <div className="overflow-hidden rounded-xl border border-border/80 bg-card/45">
                      <div className="hidden border-b border-border/80 bg-muted/35 px-4 py-3 text-sm font-semibold text-foreground md:grid md:grid-cols-[minmax(0,2fr)_minmax(220px,1fr)]">
                        <p>{t('table.recommendedForYou')}</p>
                        <p className="border-l border-border/80 pl-4">{t('table.price')}</p>
                      </div>

                      {sortedVariants.map((variant) => (
                        <div
                          key={variant.id}
                          className="grid grid-cols-1 border-b border-border/70 bg-background/95 last:border-b-0 md:grid-cols-[minmax(0,2fr)_minmax(220px,1fr)]"
                        >
                          <div className="space-y-3 px-4 py-4 md:py-5">
                            <p className="text-lg font-semibold text-foreground">{toBedLabel(variant.beds)}</p>

                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-6">
                              <div className="space-y-2">
                                <p className="inline-flex min-h-6 items-center gap-1.5 text-sm text-muted-foreground">
                                  <Users className="h-4 w-4" />
                                  {toCapacityLabel(variant.capacity)}
                                </p>
                                <p className="inline-flex min-h-6 items-center text-sm text-muted-foreground">
                                  {variant.availableCount !== undefined
                                    ? t('availability.remaining', { count: variant.availableCount })
                                    : t('availability.contactToCheck')}
                                </p>
                              </div>
                              <div className="space-y-2">
                                <p className="inline-flex min-h-6 items-center gap-1.5 text-sm text-teal-700 dark:text-teal-300">
                                  {variant.breakfast ? (
                                    <CheckCircle2 className="h-4 w-4" />
                                  ) : (
                                    <XCircle className="h-4 w-4 text-muted-foreground" />
                                  )}
                                  {variant.breakfast ? t('breakfast.included') : t('breakfast.notIncluded')}
                                </p>
                                <p className="inline-flex min-h-6 items-center text-sm text-muted-foreground">
                                  {variant.cancellationPolicy ?? t('cancellation.nonRefundable')}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col justify-center gap-3 border-t border-border/70 bg-muted/15 px-4 py-4 md:border-t-0 md:border-l md:border-border/80 md:py-5">
                            <div className="md:text-right">
                              <p className="text-2xl font-bold leading-tight text-foreground">
                                {formatPrice(variant.price, currency, numberLocale)}
                              </p>
                            </div>
                            <Button size="sm" className="h-9 w-full text-sm font-semibold md:ml-auto md:w-24">
                              {t('bookNow')}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {sortedVariants.length === 0 && (
                    <div className="rounded-lg border border-dashed border-border bg-muted/20 p-4 text-sm text-muted-foreground">
                      {t('noPriceOptions')}
                    </div>
                  )}

                  {firstVariant && (
                    <div className="pt-1 text-xs text-muted-foreground">
                      {t('lowestPriceFrom', {price: formatPrice(firstVariant.price, currency, numberLocale)})}
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}

        {visibleRooms.length === 0 && (
          <div className="rounded-xl border border-dashed border-border p-8 text-center">
            <p className="text-base font-semibold text-foreground">
              {hasActiveFilters ? t('empty.filteredTitle') : t('empty.title')}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {hasActiveFilters ? t('empty.filteredSubtitle') : t('empty.subtitle')}
            </p>
          </div>
        )}
      </div>

      <Dialog open={!!activeGalleryRoom} onOpenChange={(isOpen) => !isOpen && setActiveGalleryRoom(null)}>
        <DialogContent className="max-h-[85vh] max-w-4xl overflow-y-auto p-5 sm:p-6">
          <DialogTitle>
            {t('gallery.title', { room: activeGalleryRoom?.name ?? t('standardRoomType') })}
          </DialogTitle>

          {!!activeGalleryRoom?.gallery?.length ? (
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {activeGalleryRoom.gallery.map((image, index) => (
                <div key={`${activeGalleryRoom.id}-gallery-${index}`} className="overflow-hidden rounded-lg border border-border/70 bg-muted/25">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={image} alt={`${activeGalleryRoom.name}-${index + 1}`} className="h-52 w-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-sm text-muted-foreground">{t('gallery.empty')}</p>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
