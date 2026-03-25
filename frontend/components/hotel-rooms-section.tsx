'use client';

import { useMemo } from 'react';
import { BedDouble } from 'lucide-react';
import type { HotelDetailRoom } from '@/types/hotel-detail';
import { Badge } from '@/components/ui/badge';

type HotelRoomsSectionProps = {
  rooms: HotelDetailRoom[];
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

const toBedLabel = (room: HotelDetailRoom) => {
  return room.beds
    .map((bed) => `${bed.count} ${bed.type.replace('_', ' ')}`)
    .join(' • ');
};

const toStatusLabel = (status?: HotelDetailRoom['status']) => {
  if (status === 'sold_out') return 'Hết phòng';
  if (status === 'limited') return 'Sắp hết';
  return 'Còn phòng';
};

const toStatusVariant = (status?: HotelDetailRoom['status']) => {
  if (status === 'sold_out') return 'destructive' as const;
  if (status === 'limited') return 'secondary' as const;
  return 'default' as const;
};

export function HotelRoomsSection({ rooms }: HotelRoomsSectionProps) {
  const visibleRooms = useMemo(() => [...rooms].sort((a, b) => a.price - b.price), [rooms]);
  const nights = 1;

  return (
    <section className="mt-10 rounded-2xl border border-border/80 bg-card/55 p-4 sm:p-6 lg:p-7">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">Danh sách phòng</h2>
        </div>
        <Badge variant="secondary" className="w-fit rounded-full px-3 py-1 text-sm">
          {visibleRooms.length} phòng
        </Badge>
      </div>

      <div className="mt-5 space-y-4">
        {visibleRooms.map((room) => {
          const mainImage = room.gallery?.[0];
          const totalStayCost = nights > 0 ? room.price * nights : room.price;

          return (
            <article
              key={room.id}
              className="overflow-hidden rounded-xl border border-border/80 bg-background/90 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
                <div className="aspect-4/3 bg-muted">
                  {mainImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={mainImage} alt={room.name} className="h-full w-full object-cover" loading="lazy" />
                  ) : (
                    <div className="flex h-full items-center justify-center text-muted-foreground">
                      <BedDouble className="mr-2 h-5 w-5" />
                      Không có ảnh
                    </div>
                  )}
                </div>

                <div className="p-4 sm:p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold text-foreground">{room.name}</h3>
                        <Badge variant={toStatusVariant(room.status)}>{toStatusLabel(room.status)}</Badge>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {room.type ?? 'Phòng tiêu chuẩn'} • {toBedLabel(room)} • Tối đa {room.capacity} khách
                      </p>
                    </div>

                    <div className="text-left sm:text-right">
                      <p className="text-xs text-muted-foreground">Giá / đêm</p>
                      <p className="text-xl font-bold text-foreground">{formatPrice(room.price, room.currency)}</p>
                      <p className="text-xs text-muted-foreground">Tổng {Math.max(nights, 1)} đêm: {formatPrice(totalStayCost, room.currency)}</p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                    {room.sizeM2 && <p>Diện tích: {room.sizeM2}m2</p>}
                    {room.view && <p>Tầm nhìn: {room.view}</p>}
                    {room.floor && <p>Vị trí: {room.floor}</p>}
                    {room.availableCount !== undefined && <p>Còn lại: {room.availableCount} phòng</p>}
                  </div>

                  {!!room.amenities?.length && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {room.amenities.slice(0, 6).map((amenity) => (
                        <span key={`${room.id}-${amenity}`} className="rounded-full border border-border/70 bg-muted/35 px-2.5 py-1 text-xs text-foreground">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  )}

                  {!!room.cancellationPolicy && (
                    <p className="mt-3 text-sm text-primary">{room.cancellationPolicy}</p>
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
