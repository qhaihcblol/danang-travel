'use client';

import { useMemo } from 'react';
import { BedDouble, CheckCircle2, Users, XCircle } from 'lucide-react';
import type { RoomType, RoomVariant } from '@/types/hotel-detail';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

type HotelRoomsSectionProps = {
  rooms: RoomType[];
  currency?: string;
};

const formatPrice = (value: number, currency = 'VND') => {
  if (currency === 'VND') {
    return `${value.toLocaleString('vi-VN')}đ`;
  }

  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value);
};

const toBedLabel = (beds: RoomVariant['beds']) => beds.map((bed) => `${bed.count} ${bed.type.replace('_', ' ')}`).join(' • ');

const toStatusLabel = (availableCount?: number) => {
  if (availableCount === 0) return 'Hết phòng';
  if (availableCount !== undefined && availableCount <= 2) return 'Sắp hết';
  return 'Còn phòng';
};

const toStatusVariant = (availableCount?: number) => {
  if (availableCount === 0) return 'destructive' as const;
  if (availableCount !== undefined && availableCount <= 2) return 'secondary' as const;
  return 'default' as const;
};

const toCapacityLabel = (capacity: RoomVariant['capacity']) => {
  const adultsLabel = `${capacity.adults} người lớn`;
  const childrenCount = capacity.children ?? 0;
  return childrenCount > 0 ? `${adultsLabel}, ${childrenCount} trẻ em` : adultsLabel;
};

export function HotelRoomsSection({ rooms, currency = 'VND' }: HotelRoomsSectionProps) {
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
    <section className="mt-10 rounded-2xl border border-border/80 bg-card/55 p-4 sm:p-6 lg:p-7">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">Danh sách phòng</h2>
          <p className="mt-1 text-sm text-muted-foreground">Thiết kế rõ ràng theo từng loại phòng và tùy chọn đặt.</p>
        </div>
        <Badge variant="secondary" className="w-fit rounded-full px-3 py-1 text-sm">
          {visibleRooms.length} loại phòng
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
                    <p className="text-sm text-muted-foreground">{room.type ?? 'Phòng tiêu chuẩn'}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {maxGuests > 0 && (
                      <span className="rounded-full border border-border/70 bg-background px-2.5 py-1 text-xs text-muted-foreground">
                        Tối đa {maxGuests} khách
                      </span>
                    )}
                    <Badge variant={toStatusVariant(totalAvailable)}>{toStatusLabel(totalAvailable)}</Badge>
                  </div>
                </div>
              </header>

              <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3 md:gap-5 md:p-5">
                <div className="space-y-3 md:col-span-1">
                  <div className="overflow-hidden rounded-lg border border-border/70 bg-muted/50">
                    {mainImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={mainImage} alt={room.name} className="h-44 w-full object-cover" loading="lazy" />
                    ) : (
                      <div className="flex h-44 items-center justify-center text-muted-foreground">
                        <BedDouble className="mr-2 h-5 w-5" />
                        Không có ảnh
                      </div>
                    )}
                  </div>

                  <div className="rounded-lg border border-border/70 bg-card/30 p-3">
                    <div className="space-y-1.5 text-sm text-muted-foreground">
                      {room.sizeM2 && <p>Diện tích: {room.sizeM2}m2</p>}
                      {room.view && <p>Hướng nhìn: {room.view}</p>}
                      {totalAvailable !== undefined && <p>Còn lại: {totalAvailable} phòng</p>}
                    </div>

                    {visibleAmenities.length > 0 && (
                      <div className="mt-3">
                        <p className="mb-2 text-sm font-medium text-foreground">Tiện nghi</p>
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
                                Xem thêm tiện nghi (+{extraAmenities.length})
                              </button>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80">
                              <p className="mb-2 text-sm font-semibold text-foreground">Tất cả tiện nghi</p>
                              <div className="flex max-h-56 flex-wrap gap-2 overflow-y-auto pr-1">
                                {(room.amenities ?? []).map((amenity) => (
                                  <span
                                    key={`${room.id}-all-${amenity}`}
                                    className="rounded-full border border-border/70 bg-muted/25 px-2.5 py-1 text-xs text-foreground"
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

                <div className="space-y-2.5 md:col-span-2">
                  {sortedVariants.length > 0 &&
                    sortedVariants.map((variant) => (
                      <div
                        key={variant.id}
                        className="grid grid-cols-1 gap-3 rounded-lg border border-border/70 bg-card/35 p-3 md:grid-cols-3 md:items-center"
                      >
                        <div className="space-y-1 md:col-span-2">
                          <p className="text-sm font-semibold text-foreground">{toBedLabel(variant.beds)}</p>
                          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                            <span className="inline-flex items-center gap-1">
                              <Users className="h-3.5 w-3.5" />
                              {toCapacityLabel(variant.capacity)}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              {variant.breakfast ? (
                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                              ) : (
                                <XCircle className="h-3.5 w-3.5 text-muted-foreground" />
                              )}
                              {variant.breakfast ? 'Có bữa sáng' : 'Không gồm bữa sáng'}
                            </span>
                            {variant.availableCount !== undefined && <span>Còn {variant.availableCount} phòng</span>}
                          </div>
                          {variant.cancellationPolicy && (
                            <p className="text-xs font-medium text-primary">{variant.cancellationPolicy}</p>
                          )}
                        </div>

                        <div className="flex flex-col gap-2 md:col-span-1 md:items-end">
                          <div className="text-left md:text-right">
                            <p className="text-[11px] text-muted-foreground">Giá / đêm</p>
                            <p className="text-lg font-bold text-foreground">{formatPrice(variant.price, currency)}</p>
                          </div>
                          <Button size="sm" className="w-full md:w-auto">
                            Đặt
                          </Button>
                        </div>
                      </div>
                    ))}

                  {sortedVariants.length === 0 && (
                    <div className="rounded-lg border border-dashed border-border bg-muted/20 p-4 text-sm text-muted-foreground">
                      Chưa có lựa chọn giá cho loại phòng này.
                    </div>
                  )}

                  {firstVariant && (
                    <div className="pt-1 text-xs text-muted-foreground">
                      Giá thấp nhất từ <span className="font-semibold text-foreground">{formatPrice(firstVariant.price, currency)}</span> mỗi đêm.
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}

        {visibleRooms.length === 0 && (
          <div className="rounded-xl border border-dashed border-border p-8 text-center">
            <p className="text-base font-semibold text-foreground">Hiện chưa có phòng để hiển thị</p>
            <p className="mt-1 text-sm text-muted-foreground">Vui lòng quay lại sau để xem thêm lựa chọn.</p>
          </div>
        )}
      </div>
    </section>
  );
}
