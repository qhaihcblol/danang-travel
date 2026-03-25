import { notFound } from 'next/navigation';
import { MapPin, Star } from 'lucide-react';
import { getHotelDetailMockById } from '@/mock';
import { HotelGallery } from '@/components/hotel-gallery';
import { HotelHighlights } from '@/components/hotel-highlights';
import { Badge } from '@/components/ui/badge';
import { HotelOverview } from '../../../components/hotel-overview';

type HotelDetailPageProps = {
  params: Promise<{ id: string }>;
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

export default async function HotelDetailPage({ params }: HotelDetailPageProps) {
  const { id } = await params;
  const hotel = getHotelDetailMockById(id);

  if (!hotel) {
    notFound();
  }

  const images = hotel.gallery?.length ? hotel.gallery : [hotel.image];

  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <HotelGallery images={images} hotelName={hotel.name} />

        <div className="mt-6">
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">{hotel.name}</h1>

          <div className="mt-3 flex flex-col gap-4 border-t border-border/60 pt-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: hotel.stars }).map((_, index) => (
                  <Star key={`${hotel.id}-star-${index}`} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>{hotel.location}</span>
              </p>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-xs font-medium text-muted-foreground">Giá phòng từ</p>
              <p className="text-2xl font-extrabold leading-tight text-foreground sm:text-3xl">
                {formatPrice(hotel.price, hotel.currency)}
              </p>
              <p className="text-xs text-muted-foreground">/ đêm</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
            <div className="space-y-6 lg:col-span-2">
              {!!hotel.tags?.length && (
                <div className="flex flex-wrap gap-2">
                  {hotel.tags.map((tag) => (
                    <Badge key={`${hotel.id}-tag-${tag}`} variant="secondary" className="rounded-full px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              {!!hotel.description && (
                <section className="rounded-xl border border-border/80 bg-card/60 p-4 sm:p-5">
                  <h2 className="border-b border-border/70 pb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Mô tả
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-foreground/90 sm:text-base">{hotel.description}</p>
                </section>
              )}

              {!!hotel.highlights?.length && <HotelHighlights highlights={hotel.highlights} />}

              <section className="rounded-xl border border-border/80 bg-card/60 p-4 sm:p-5">
                <h2 className="border-b border-border/70 pb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Tiện ích nổi bật
                </h2>
                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {(hotel.servicesAndFacilities?.featured?.slice(0, 6) ?? hotel.amenities.slice(0, 6)).map((amenity) => (
                    <div
                      key={`${hotel.id}-amenity-${amenity}`}
                      className="rounded-lg border border-border/80 bg-background/80 px-3 py-2 text-sm text-foreground"
                    >
                      {amenity}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-4 rounded-2xl border border-border/80 bg-card/70 p-4 lg:sticky lg:top-24 lg:h-fit">
              <div className="rounded-xl border border-border/70 bg-background px-4 py-3">
                <p className="text-sm font-medium text-muted-foreground">Đánh giá</p>
                <p className="mt-1 text-xl font-bold text-foreground">
                  {hotel.rating.toFixed(1)}/5{' '}
                  <span className="text-sm font-medium text-muted-foreground">- {hotel.reviewCount} bình luận</span>
                </p>
              </div>

              <HotelOverview overview={hotel.overview ?? hotel.description ?? ''} />
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
