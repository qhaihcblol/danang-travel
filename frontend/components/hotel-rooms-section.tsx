'use client';

import { useMemo } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { BedDouble, CheckCircle2, Users, XCircle } from 'lucide-react';
import type { RoomType, RoomVariant } from '@/types/hotel-detail';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

type HotelRoomsSectionProps = {
  rooms: RoomType[];
  currency?: string;
};

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

const toStatusVariant = (availableCount?: number) => {
  if (availableCount === 0) return 'destructive' as const;
  if (availableCount !== undefined && availableCount <= 2) return 'secondary' as const;
  return 'default' as const;
};

export function HotelRoomsSection({ rooms, currency = 'VND' }: HotelRoomsSectionProps) {
  const t = useTranslations('hotels.rooms');
  const locale = useLocale();
  const numberLocale = locale === 'ja' ? 'ja-JP' : 'vi-VN';

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
        const sortedVariants = [...room.roomVariants].sort((a, b) => a.price - b.price);
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
      .sort(
        (a, b) =>
          (a.firstVariant?.price ?? Number.MAX_SAFE_INTEGER) -
          (b.firstVariant?.price ?? Number.MAX_SAFE_INTEGER),
      );
  }, [rooms]);

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
            <p className="text-base font-semibold text-foreground">{t('empty.title')}</p>
            <p className="mt-1 text-sm text-muted-foreground">{t('empty.subtitle')}</p>
          </div>
        )}
      </div>
    </section>
  );
}
