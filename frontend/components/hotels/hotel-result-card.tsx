import { type CSSProperties } from 'react';
import Image from 'next/image';
import { BedDouble, MapPin, PawPrint, Sparkles, Star, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { Hotel } from '@/types/hotel';

const addressClampStyle: CSSProperties = {
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
};

const descriptionClampStyle: CSSProperties = {
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
};

interface HotelResultCardProps {
  hotel: Hotel;
  locale: string;
  featuredLabel: string;
  reviewsLabel: string;
  starSuffix: string;
  fromPriceLabel: string;
  perNightLabel: string;
  maxGuestsLabel: string;
  roomTypesLabel: string;
  petFriendlyLabel: string;
  petUnavailableLabel: string;
  isPetFriendly: boolean;
}

function getMinimumRoomPrice(hotel: Hotel) {
  const roomPrices = hotel.rooms
    .map((room) => room.price)
    .filter((price) => Number.isFinite(price) && price > 0);

  if (roomPrices.length > 0) {
    return Math.min(...roomPrices);
  }

  return hotel.priceRange.min;
}

function getMaximumGuests(hotel: Hotel) {
  let maxAdults = 0;
  let maxChildren = 0;

  for (const room of hotel.rooms) {
    for (const capacity of room.capacity) {
      if (capacity.adults > maxAdults) {
        maxAdults = capacity.adults;
      }
      if (capacity.children > maxChildren) {
        maxChildren = capacity.children;
      }
    }
  }

  return {
    adults: maxAdults,
    children: maxChildren,
  };
}

export function HotelResultCard({
  hotel,
  locale,
  featuredLabel,
  reviewsLabel,
  starSuffix,
  fromPriceLabel,
  perNightLabel,
  maxGuestsLabel,
  roomTypesLabel,
  petFriendlyLabel,
  petUnavailableLabel,
  isPetFriendly,
}: HotelResultCardProps) {
  const reviewCountFormatter = new Intl.NumberFormat(locale);
  const ratingFormatter = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
  const currencyFormatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: hotel.priceRange.currency,
    maximumFractionDigits: 0,
  });

  const minimumPrice = getMinimumRoomPrice(hotel);
  const maxGuests = getMaximumGuests(hotel);
  const roomTypes = Array.from(new Set(hotel.rooms.map((room) => room.type)));

  return (
    <Card className="group h-full overflow-hidden rounded-3xl border-border/80 bg-card/95 py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={hotel.coverImage}
          alt={hotel.name}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-900/24 to-transparent" />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/14 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            {featuredLabel}
          </span>

          <div className="rounded-2xl bg-white/92 px-3 py-2 text-right shadow-lg backdrop-blur-sm">
            <div className="flex items-center justify-end gap-1 text-sm font-semibold text-foreground">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              {ratingFormatter.format(hotel.rating)}
            </div>
            <p className="mt-0.5 text-[11px] text-muted-foreground">
              {reviewCountFormatter.format(hotel.reviewCount)} {reviewsLabel}
            </p>
          </div>
        </div>

        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
          <span className="inline-flex items-center rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            {hotel.stars}
            {starSuffix}
          </span>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-900 shadow-md">
            {fromPriceLabel} {currencyFormatter.format(minimumPrice)}
          </span>
        </div>
      </div>

      <CardContent className="flex flex-1 flex-col gap-4 px-5 py-5">
        <div className="space-y-2.5">
          <h3 className="text-lg leading-tight font-semibold text-foreground">{hotel.name}</h3>
          <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary/80" />
            <p style={addressClampStyle}>{hotel.address}</p>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground" style={descriptionClampStyle}>
            {hotel.shortDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2 text-xs text-muted-foreground sm:grid-cols-2">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/8 px-3 py-1.5 font-medium text-primary">
            <BedDouble className="h-3.5 w-3.5" />
            {roomTypes.length} {roomTypesLabel}
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/12 px-3 py-1.5 font-medium text-accent">
            <Users className="h-3.5 w-3.5" />
            {maxGuestsLabel}: {maxGuests.adults + maxGuests.children}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {hotel.amenities.slice(0, 4).map((amenity) => (
            <span
              key={`${hotel.id}-${amenity}`}
              className="rounded-full border border-border/80 bg-muted/35 px-2.5 py-1 text-xs text-muted-foreground"
            >
              {amenity}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-border/70 pt-4">
          <p className="text-xs font-medium text-muted-foreground">
            {currencyFormatter.format(minimumPrice)} / {perNightLabel}
          </p>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
              isPetFriendly
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-slate-100 text-slate-700'
            }`}
          >
            <PawPrint className="h-3.5 w-3.5" />
            {isPetFriendly ? petFriendlyLabel : petUnavailableLabel}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
