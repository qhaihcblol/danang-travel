import { notFound } from 'next/navigation';
import { MapPin, Star } from 'lucide-react';
import { getHotelDetailMockById } from '@/mock';
import { HotelGallery } from '@/components/hotel-gallery';

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
        </div>
      </section>
    </main>
  );
}
