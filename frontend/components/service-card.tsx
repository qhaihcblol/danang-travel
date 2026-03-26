import Image from 'next/image';
import { Star, MapPin, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppLocale } from '@/hooks/use-app-locale';
import { getNumberLocale } from '@/lib/i18n';

interface ServiceCardProps {
  id: string;
  name: string;
  image: string;
  location?: string;
  stars?: number;
  rating?: number;
  reviewCount?: number;
  reviews?: number;
  bookingCount?: number;
  price?: number;
  priceNote?: string;
  amenities?: string[];
  tags?: string[];
  type?: 'hotel' | 'resort' | 'villa' | 'hostel' | 'apartment' | 'tour' | 'ticket' | 'attraction';
  variant?: 'grid' | 'hotel-list';
}

export function ServiceCard({
  id,
  name,
  image,
  location,
  stars,
  rating = 4.5,
  reviewCount,
  reviews = 0,
  bookingCount,
  price,
  priceNote,
  amenities,
  tags,
  type = 'hotel',
  variant = 'grid',
}: ServiceCardProps) {
  const router = useRouter();
  const locale = useAppLocale();
  const isJa = locale === 'ja';
  const numberLocale = getNumberLocale(locale);
  const [isFavorited, setIsFavorited] = useState(false);
  const totalReviews = reviewCount ?? reviews;
  const visibleAmenities = (amenities ?? []).slice(0, 3);
  const visibleTags = (tags ?? []).slice(0, 2);
  const displayStars = Math.max(0, Math.min(5, stars ?? Math.round(rating)));
  const isAccommodation = ['hotel', 'resort', 'villa', 'hostel', 'apartment'].includes(type);

  const typeLabelMap: Record<NonNullable<ServiceCardProps['type']>, string> = {
    hotel: isJa ? 'ホテル' : 'Khách sạn',
    resort: 'Resort',
    villa: 'Villa',
    hostel: 'Hostel',
    apartment: isJa ? 'アパートメント' : 'Căn hộ',
    tour: 'Tour',
    ticket: isJa ? 'チケット' : 'Vé',
    attraction: isJa ? 'スポット' : 'Điểm đến',
  };
  const displayType = typeLabelMap[type] ?? type;
  const hotelHref = isAccommodation ? `/hotels/${id}` : undefined;

  const formatPrice = (value: number) => {
    if (value === 0) return isJa ? '無料' : 'Miễn phí';
    return value.toLocaleString(numberLocale) + 'đ';
  };

  if (variant === 'hotel-list' && isAccommodation) {
    return (
      <Card
        className="group overflow-hidden border border-orange-400/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
        onClick={() => hotelHref && router.push(hotelHref)}
      >
        <div className="flex flex-col md:flex-row">
          <div className="relative h-56 w-full overflow-hidden md:h-auto md:w-56 lg:w-60">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 240px"
              priority={false}
            />
            <button
              onClick={(event) => {
                event.stopPropagation();
                setIsFavorited(!isFavorited);
              }}
              className={`absolute right-3 top-3 rounded-full p-2 transition-all duration-300 ${
                isFavorited
                  ? 'bg-accent text-white shadow-lg'
                  : 'bg-white/85 text-muted-foreground hover:bg-white hover:text-accent'
              }`}
              aria-label={isJa ? 'お気に入りに追加' : 'Add to favorites'}
            >
              <Heart className={`h-4 w-4 ${isFavorited ? 'fill-current' : ''}`} />
            </button>
          </div>

          <div className="flex min-w-0 flex-1 flex-col p-4 md:p-5">
            <div className="mb-2 flex items-start justify-between gap-3">
              <h3 className="line-clamp-2 text-xl font-bold leading-tight text-foreground">
                {name}
              </h3>
              {displayStars > 0 && (
                <div className="hidden items-center gap-0.5 md:flex">
                  {[...Array(displayStars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>
              )}
            </div>

            <div className="mb-2 flex items-center gap-2 text-sm">
              <span className="rounded bg-indigo-600 px-2 py-0.5 font-semibold text-white">
                {rating.toFixed(1)} /10
              </span>
              <span className="font-medium text-indigo-700">{isJa ? 'とても良い' : 'Rất tốt'}</span>
              <span className="text-muted-foreground">{totalReviews.toLocaleString(numberLocale)} {isJa ? '件のレビュー' : 'bình luận'}</span>
            </div>

            {location && (
              <div className="mb-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />
                <span className="line-clamp-1">{location}</span>
              </div>
            )}

            <div className="mb-2 flex flex-wrap gap-2">
              {visibleAmenities.map((amenity) => (
                <span
                  key={`${id}-${amenity}`}
                  className="rounded-sm border border-border bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {amenity}
                </span>
              ))}
            </div>

            {typeof bookingCount === 'number' && (
              <p className="text-sm font-medium text-muted-foreground">
                {bookingCount.toLocaleString(numberLocale)}+ {isJa ? '件予約済み' : 'khách đã đặt'}
              </p>
            )}
          </div>

          <div className="flex w-full flex-col justify-center gap-3 border-t border-border/60 p-4 md:w-56 md:border-l md:border-t-0 md:p-5 lg:w-60">
            {price !== undefined && (
              <div className="text-right">
                <p className="text-4xl font-extrabold leading-none tracking-tight text-foreground md:text-3xl">
                  {formatPrice(price)}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {priceNote ?? (isJa ? '1泊あたりの料金（税・手数料別）' : 'Giá cho một đêm, chưa gồm thuế phí')}
                </p>
              </div>
            )}
            <button
              onClick={(event) => {
                event.stopPropagation();
                if (hotelHref) router.push(hotelHref);
              }}
              className="rounded-xl bg-orange-500 px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-orange-600"
            >
              {isJa ? '詳細を見る' : 'Xem chi tiết'}
            </button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card
      className="overflow-hidden group h-full cursor-pointer border border-border/40 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 transform"
      onClick={() => hotelHref && router.push(hotelHref)}
    >
      {/* Image Container */}
      <div className="relative w-full overflow-hidden bg-muted" style={{ aspectRatio: '16/10' }}>
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-115 transition-transform duration-700 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
        />
        
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Price Badge */}
        {price !== undefined && (
          <div className={`absolute top-3 right-3 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
            price === 0 
              ? 'bg-green-500/90 text-white' 
              : 'bg-primary text-primary-foreground hover:bg-primary/90'
          }`}>
            {formatPrice(price)}
          </div>
        )}

        {/* Type Badge */}
        <div className="absolute bottom-3 left-3 rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-white backdrop-blur-sm">
          {displayType}
        </div>
        
        {/* Favorite Button */}
        <button
          onClick={(event) => {
            event.stopPropagation();
            setIsFavorited(!isFavorited);
          }}
          className={`absolute top-3 left-3 p-2 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 ${
            isFavorited
              ? 'bg-accent text-white shadow-lg scale-110'
              : 'bg-white/70 text-muted-foreground hover:bg-white hover:text-accent'
          }`}
          aria-label={isJa ? 'お気に入りに追加' : 'Add to favorites'}
        >
          <Heart className={`w-5 h-5 transition-all duration-300 ${isFavorited ? 'fill-current scale-125' : ''}`} />
        </button>
      </div>

      {/* Content */}
      <CardContent className="flex h-full flex-col p-4">
        {/* Title */}
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 text-base font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
            {name}
          </h3>
          {displayStars > 0 && (
            <div className="mt-0.5 flex shrink-0 items-center gap-0.5">
              {[...Array(displayStars)].map((_, i) => (
                <Star
                  key={`${id}-name-star-${i}`}
                  className="h-4.5 w-4.5 fill-sky-500 text-sky-500"
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Location */}
        {location && (
          <div className="mb-3 flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0" />
            <span className="line-clamp-1">{location}</span>
          </div>
        )}

        {typeof bookingCount === 'number' && (
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="rounded-md bg-primary/8 px-2.5 py-1 text-xs font-medium text-primary ring-1 ring-primary/20">
              {bookingCount.toLocaleString(numberLocale)} {isJa ? '件予約' : 'lượt đặt'}
            </span>
          </div>
        )}

        {visibleTags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1.5">
            {visibleTags.map((tag) => (
              <span
                key={`${id}-tag-${tag}`}
                className="rounded-full border border-primary/25 bg-primary/8 px-2.5 py-1 text-[11px] font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {visibleAmenities.length > 0 && (
          <div className="mb-3">
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {isJa ? '設備' : 'Tiện ích'}
            </p>
            <div className="flex flex-wrap gap-1.5">
            {visibleAmenities.map((amenity) => (
              <span
                key={`${id}-${amenity}`}
                className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground"
              >
                {amenity}
              </span>
            ))}
            </div>
          </div>
        )}

        {/* Rating */}
        {totalReviews > 0 && (
          <div className="mt-auto flex items-center gap-2 border-t border-border/30 pt-2 text-sm">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <div className="flex items-center gap-1">
              <span className="font-medium text-foreground">{rating.toFixed(1)} / 10</span>
              <span className="text-muted-foreground">({totalReviews})</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
