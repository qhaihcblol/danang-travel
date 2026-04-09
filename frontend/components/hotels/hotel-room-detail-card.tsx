import Image from 'next/image';
import { BedDouble, Maximize, Users } from 'lucide-react';
import type { HotelRoom } from '@/types/hotel';

interface HotelRoomDetailCardProps {
  room: HotelRoom;
  locale: string;
  currencyCode: string;
  labels: {
    fromLabel: string;
    perNightLabel: string;
    maxGuestsLabel: string;
    bedTypeLabel: string;
    areaLabel: string;
    quantityLabel: string;
    amenitiesLabel: string;
  };
}

function getMaximumGuests(room: HotelRoom) {
  let maxAdults = 0;
  let maxChildren = 0;

  for (const capacity of room.capacity) {
    if (capacity.adults > maxAdults) {
      maxAdults = capacity.adults;
    }
    if (capacity.children > maxChildren) {
      maxChildren = capacity.children;
    }
  }

  return maxAdults + maxChildren;
}

export function HotelRoomDetailCard({
  room,
  locale,
  currencyCode,
  labels,
}: HotelRoomDetailCardProps) {
  const currencyFormatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    maximumFractionDigits: 0,
  });

  return (
    <article className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm">
      <div className="grid gap-0 md:grid-cols-[240px_minmax(0,1fr)]">
        <div className="relative h-56 md:h-full">
          <Image
            src={room.coverImage}
            alt={room.type}
            fill
            sizes="(min-width: 768px) 240px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent md:bg-linear-to-r" />
          <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">
            {labels.fromLabel} {currencyFormatter.format(room.price)} / {labels.perNightLabel}
          </div>
        </div>

        <div className="space-y-4 px-5 py-5">
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-foreground">{room.type}</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">{room.description}</p>
          </div>

          <div className="grid gap-2 text-xs text-muted-foreground sm:grid-cols-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-primary">
              <Users className="h-3.5 w-3.5" />
              {labels.maxGuestsLabel}: {getMaximumGuests(room)}
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1.5 text-accent">
              <BedDouble className="h-3.5 w-3.5" />
              {labels.bedTypeLabel}: {room.bedType}
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1.5">
              <Maximize className="h-3.5 w-3.5" />
              {labels.areaLabel}: {room.area}m2
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1.5">
              <BedDouble className="h-3.5 w-3.5" />
              {labels.quantityLabel}: {room.quantity}
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">
              {labels.amenitiesLabel}
            </p>
            <div className="flex flex-wrap gap-2">
              {room.amenities.map((amenity) => (
                <span
                  key={`${room.type}-${amenity}`}
                  className="rounded-full border border-border/80 bg-background px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
