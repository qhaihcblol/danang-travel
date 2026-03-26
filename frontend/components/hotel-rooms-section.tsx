'use client';

import { useMemo } from 'react';
import { BedDouble, CheckCircle2, Users, XCircle } from 'lucide-react';
import type { RoomType, RoomVariant } from '@/types/hotel-detail';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { useAppLocale } from '@/hooks/use-app-locale';
import { getNumberLocale } from '@/lib/i18n';

type HotelRoomsSectionProps = {
  rooms: RoomType[];
  currency?: string;
};

const formatPrice = (value: number, currency = 'VND', localeTag = 'vi-VN') => {
  if (currency === 'VND') {
    return `${value.toLocaleString(localeTag)}đ`;
  }

  return new Intl.NumberFormat(localeTag, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value);
};

const toBedLabel = (beds: RoomVariant['beds']) => beds.map((bed) => `${bed.count} ${bed.type.replace('_', ' ')}`).join(' • ');

const toStatusLabel = (availableCount: number | undefined, isJa: boolean) => {
  if (availableCount === 0) return isJa ? '満室' : 'Hết phòng';
  if (availableCount !== undefined && availableCount <= 2) return isJa ? '残りわずか' : 'Sắp hết';
  return isJa ? '空室あり' : 'Còn phòng';
};

const toStatusVariant = (availableCount?: number) => {
  if (availableCount === 0) return 'destructive' as const;
  if (availableCount !== undefined && availableCount <= 2) return 'secondary' as const;
  return 'default' as const;
};

const toCapacityLabel = (capacity: RoomVariant['capacity'], isJa: boolean) => {
  const adultsLabel = isJa ? `大人${capacity.adults}名` : `${capacity.adults} người lớn`;
  const childrenCount = capacity.children ?? 0;
  return childrenCount > 0
    ? isJa
      ? `${adultsLabel}, 子ども${childrenCount}名`
      : `${adultsLabel}, ${childrenCount} trẻ em`
    : adultsLabel;
};

export function HotelRoomsSection({ rooms, currency = 'VND' }: HotelRoomsSectionProps) {
  const locale = useAppLocale();
  const isJa = locale === 'ja';
  const numberLocale = getNumberLocale(locale);
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
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{isJa ? '客室一覧' : 'Danh sách phòng'}</h2>
          <p className="mt-1 text-base text-muted-foreground">{isJa ? '部屋タイプごとに料金と条件を分かりやすく表示しています。' : 'Thiết kế rõ ràng theo từng loại phòng và mức giá cho mỗi lựa chọn.'}</p>
        </div>
        <Badge variant="secondary" className="w-fit rounded-full px-3 py-1.5 text-sm">
          {visibleRooms.length} {isJa ? '種類' : 'loại phòng'}
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
                    <p className="text-sm text-muted-foreground">{room.type ?? (isJa ? 'スタンダードルーム' : 'Phòng tiêu chuẩn')}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {maxGuests > 0 && (
                      <span className="rounded-full border border-border/70 bg-background px-2.5 py-1 text-xs text-muted-foreground">
                        {isJa ? `最大${maxGuests}名` : `Tối đa ${maxGuests} khách`}
                      </span>
                    )}
                    <Badge variant={toStatusVariant(totalAvailable)}>{toStatusLabel(totalAvailable, isJa)}</Badge>
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
                        {isJa ? '画像なし' : 'Không có ảnh'}
                      </div>
                    )}
                  </div>

                  <div className="rounded-lg border border-border/70 bg-card/30 p-3">
                    <div className="space-y-1.5 text-sm text-muted-foreground">
                      {room.sizeM2 && <p>{isJa ? `面積: ${room.sizeM2}m2` : `Diện tích: ${room.sizeM2}m2`}</p>}
                      {room.view && <p>{isJa ? `眺望: ${room.view}` : `Hướng nhìn: ${room.view}`}</p>}
                      {totalAvailable !== undefined && <p>{isJa ? `残り: ${totalAvailable}室` : `Còn lại: ${totalAvailable} phòng`}</p>}
                    </div>

                    {visibleAmenities.length > 0 && (
                      <div className="mt-3">
                        <p className="mb-2 text-sm font-medium text-foreground">{isJa ? '設備' : 'Tiện nghi'}</p>
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
                                {isJa ? `設備をもっと見る (+${extraAmenities.length})` : `Xem thêm tiện nghi (+${extraAmenities.length})`}
                              </button>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-96 max-w-[90vw] p-4">
                              <p className="mb-3 text-base font-semibold text-foreground">{isJa ? 'すべての設備' : 'Tất cả tiện nghi'}</p>
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
                        <p>{isJa ? 'おすすめプラン' : 'Đề xuất cho bạn'}</p>
                        <p className="border-l border-border/80 pl-4">{isJa ? '料金' : 'Giá'}</p>
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
                                  {toCapacityLabel(variant.capacity, isJa)}
                                </p>
                                <p className="inline-flex min-h-6 items-center text-sm text-muted-foreground">
                                  {variant.availableCount !== undefined
                                    ? isJa
                                      ? `残り${variant.availableCount}室`
                                      : `Còn ${variant.availableCount} phòng`
                                    : isJa
                                      ? '空室状況はお問い合わせください'
                                      : 'Liên hệ để kiểm tra phòng'}
                                </p>
                              </div>
                              <div className="space-y-2">
                                <p className="inline-flex min-h-6 items-center gap-1.5 text-sm text-teal-700 dark:text-teal-300">
                                  {variant.breakfast ? (
                                    <CheckCircle2 className="h-4 w-4" />
                                  ) : (
                                    <XCircle className="h-4 w-4 text-muted-foreground" />
                                  )}
                                  {variant.breakfast
                                    ? isJa
                                      ? '朝食付き'
                                      : 'Bao gồm bữa sáng'
                                    : isJa
                                      ? '朝食なし'
                                      : 'Không gồm bữa sáng'}
                                </p>
                                <p className="inline-flex min-h-6 items-center text-sm text-muted-foreground">
                                  {variant.cancellationPolicy ?? (isJa ? '返金不可' : 'Không hoàn tiền')}
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
                              {isJa ? '予約' : 'Đặt'}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {sortedVariants.length === 0 && (
                    <div className="rounded-lg border border-dashed border-border bg-muted/20 p-4 text-sm text-muted-foreground">
                      {isJa ? 'この部屋タイプの料金プランはまだありません。' : 'Chưa có lựa chọn giá cho loại phòng này.'}
                    </div>
                  )}

                  {firstVariant && (
                    <div className="pt-1 text-xs text-muted-foreground">
                      {isJa ? '最安料金は' : 'Giá thấp nhất từ'} <span className="font-semibold text-foreground">{formatPrice(firstVariant.price, currency, numberLocale)}</span> {isJa ? '／泊。' : 'mỗi đêm.'}
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}

        {visibleRooms.length === 0 && (
          <div className="rounded-xl border border-dashed border-border p-8 text-center">
            <p className="text-base font-semibold text-foreground">{isJa ? '表示できる客室がありません' : 'Hiện chưa có phòng để hiển thị'}</p>
            <p className="mt-1 text-sm text-muted-foreground">{isJa ? '後でもう一度ご確認ください。' : 'Vui lòng quay lại sau để xem thêm lựa chọn.'}</p>
          </div>
        )}
      </div>
    </section>
  );
}
