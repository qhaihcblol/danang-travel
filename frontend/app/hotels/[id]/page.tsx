import { notFound } from 'next/navigation';
import { Clock3, Info, MapPin, Star } from 'lucide-react';
import { hotelsDetailMock } from '@/mock';
import { HotelGallery } from '@/components/hotel-gallery';
import { HotelHighlights } from '@/components/hotel-highlights';
import { HotelRoomsSection } from '@/components/hotel-rooms-section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { getNumberLocale } from '@/lib/i18n';
import { getServerLocale } from '@/lib/server-locale';

type HotelDetailPageProps = {
  params: Promise<{ id: string }>;
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

export default async function HotelDetailPage({ params }: HotelDetailPageProps) {
  const locale = await getServerLocale();
  const isJa = locale === 'ja';
  const numberLocale = getNumberLocale(locale);
  const { id } = await params;
  const hotel = hotelsDetailMock.find((item) => item.id === id);

  if (!hotel) {
    notFound();
  }

  const images = hotel.gallery?.length ? hotel.gallery : [hotel.image];
  const featuredAmenities =
    hotel.servicesAndFacilities?.featured?.length
      ? hotel.servicesAndFacilities.featured.slice(0, 6)
      : hotel.amenities.slice(0, 6);
  const nearbyPreview = hotel.nearbyPlaces?.slice(0, 2) ?? [];
  const ratingLabels = {
    cleanliness: isJa ? '清潔さ' : 'Độ sạch sẽ',
    comfort: isJa ? '快適さ' : 'Sự thoải mái',
    location: isJa ? '立地' : 'Vị trí',
    facilities: isJa ? '設備' : 'Tiện nghi',
    staff: isJa ? 'スタッフ' : 'Nhân viên',
    valueForMoney: isJa ? 'コストパフォーマンス' : 'Đáng giá tiền',
  } as const;
  const overviewContent = (hotel.overview ?? hotel.description ?? '').trim();

  return (
    <main className="min-h-screen bg-linear-to-b from-background via-background to-muted/20">
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <HotelGallery images={images} hotelName={hotel.name} />

        <div className="mt-7">
          <h1 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl">{hotel.name}</h1>

          <div className="mt-4 flex flex-col gap-4 border-t border-border/60 pt-4 sm:flex-row sm:items-start sm:justify-between">
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
              <p className="text-xs font-medium text-muted-foreground">{isJa ? '料金は' : 'Giá phòng từ'}</p>
              <p className="text-2xl font-extrabold leading-tight text-foreground sm:text-3xl">
                {formatPrice(hotel.price, hotel.currency, numberLocale)}
              </p>
              <p className="text-xs text-muted-foreground">{hotel.priceNote ?? (isJa ? '/ 泊' : '/ đêm')}</p>
              <Button asChild size="lg" className="mt-3 h-11 w-full rounded-lg text-sm font-bold sm:min-w-45">
                <a href="#hotel-rooms">{isJa ? '今すぐ予約' : 'Đặt ngay'}</a>
              </Button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)] lg:gap-8">
            <div className="space-y-5 lg:space-y-6">
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
                    {isJa ? '説明' : 'Mô tả'}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-foreground/90 sm:text-base">{hotel.description}</p>
                </section>
              )}

              {!!hotel.highlights?.length && <HotelHighlights highlights={hotel.highlights} />}

              <section className="rounded-xl border border-border/80 bg-card/60 p-4 sm:p-5">
                <h2 className="border-b border-border/70 pb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  {isJa ? '主な設備' : 'Tiện ích nổi bật'}
                </h2>
                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {featuredAmenities.map((amenity) => (
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

            <aside className="space-y-4 rounded-2xl border border-border/80 bg-card/70 p-4 shadow-sm lg:sticky lg:top-24 lg:h-fit lg:p-5">
              <div className="rounded-xl border border-border/70 bg-background px-4 py-3 transition-colors hover:border-sky-200/80 hover:bg-sky-50/40">
                <div className="flex items-center gap-2">
                  <p className="text-base font-semibold text-slate-700">{isJa ? '総合評価' : 'Đánh giá tổng quan'}</p>
                  {!!hotel.ratingBreakdown && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          type="button"
                          className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-border/80 text-muted-foreground transition-colors hover:border-sky-300 hover:bg-sky-100/70 hover:text-sky-700"
                          aria-label={isJa ? '評価の詳細を見る' : 'Xem chi tiết đánh giá'}
                        >
                          <Info className="h-3.5 w-3.5" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent
                        side="top"
                        align="end"
                        className="max-w-xs border border-sky-100 bg-sky-50/95 p-3 text-xs text-slate-700 shadow-md"
                      >
                        <div className="space-y-2">
                          {Object.entries(hotel.ratingBreakdown).map(([key, value]) => (
                            <div key={`${hotel.id}-rating-${key}`} className="grid grid-cols-[1fr_auto] items-center gap-3">
                              <span>{ratingLabels[key as keyof typeof ratingLabels]}</span>
                              <span className="font-semibold text-slate-900">{value.toFixed(1)}</span>
                            </div>
                          ))}
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  )}
                </div>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <p className="text-2xl font-extrabold leading-none text-foreground">{hotel.rating.toFixed(1)} / 10</p>
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                    {hotel.reviewCount.toLocaleString(numberLocale)} {isJa ? '件のレビュー' : 'bình luận'}
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-border/70 bg-background px-4 py-3">
                <p className="text-sm font-medium text-muted-foreground">{isJa ? '予約数' : 'Đã đặt'}</p>
                <p className="mt-1 text-lg font-bold text-foreground">{hotel.bookingCount.toLocaleString(numberLocale)}+ {isJa ? '件' : 'lượt'}</p>
              </div>

              {!!hotel.nearbyPlaces?.length && (
                <section className="rounded-xl border border-border/70 bg-background px-4 py-3 transition-colors hover:border-sky-200/80 hover:bg-sky-50/40">
                  <div className="flex items-center gap-2">
                    <h2 className="text-base font-semibold text-slate-700">{isJa ? '周辺スポット（最寄り2件）' : 'Khám phá (2 địa điểm gần nhất)'}</h2>
                    {hotel.nearbyPlaces.length > nearbyPreview.length && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            type="button"
                            className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-border/80 text-muted-foreground transition-colors hover:border-sky-300 hover:bg-sky-100/70 hover:text-sky-700"
                            aria-label={isJa ? '周辺スポットをすべて表示' : 'Xem tất cả địa điểm lân cận'}
                          >
                            <Info className="h-3.5 w-3.5" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent
                          side="left"
                          align="start"
                          className="max-w-sm border border-sky-100 bg-sky-50/95 p-3 text-xs text-slate-700 shadow-md"
                        >
                          <div className="space-y-2">
                            {hotel.nearbyPlaces.map((place) => (
                              <div key={`${hotel.id}-nearby-tooltip-${place.name}`} className="space-y-1">
                                <p className="font-semibold text-slate-900">{place.name}</p>
                                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-600">
                                  {!!place.category && <span>{place.category}</span>}
                                  {typeof place.distanceKm === 'number' && <span>{place.distanceKm.toLocaleString(numberLocale)} km</span>}
                                  {typeof place.travelTimeMin === 'number' && <span>{place.travelTimeMin} {isJa ? '分' : 'phút'}</span>}
                                </div>
                              </div>
                            ))}
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </div>
                  <div className="mt-3 space-y-2.5">
                    {nearbyPreview.map((place) => (
                      <div
                        key={`${hotel.id}-nearby-${place.name}`}
                        className="rounded-lg border border-border/60 bg-card/40 px-3 py-2"
                      >
                        <p className="text-sm font-medium leading-tight text-foreground">{place.name}</p>
                        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                          {!!place.category && <span>{place.category}</span>}
                          {typeof place.distanceKm === 'number' && (
                            <span className="inline-flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5" />
                              {place.distanceKm.toLocaleString(numberLocale)} km
                            </span>
                          )}
                          {typeof place.travelTimeMin === 'number' && (
                            <span className="inline-flex items-center gap-1">
                              <Clock3 className="h-3.5 w-3.5" />
                              {place.travelTimeMin} {isJa ? '分' : 'phút'}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {!!overviewContent && (
                <section className="rounded-xl border border-border/70 bg-background px-4 py-3 transition-colors hover:border-sky-200/80 hover:bg-sky-50/40">
                  <div className="flex items-center gap-2">
                    <h2 className="text-base font-semibold text-slate-700">{isJa ? '概要' : 'Tổng quan'}</h2>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          type="button"
                          className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-border/80 text-muted-foreground transition-colors hover:border-sky-300 hover:bg-sky-100/70 hover:text-sky-700"
                          aria-label={isJa ? '概要をすべて表示' : 'Xem toàn bộ nội dung tổng quan'}
                        >
                          <Info className="h-3.5 w-3.5" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent
                        side="left"
                        align="start"
                        className="max-w-sm border border-sky-100 bg-sky-50/95 p-3 text-xs text-slate-700 shadow-md"
                      >
                        <p className="leading-6">{overviewContent}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <p className="mt-2 line-clamp-4 text-sm leading-7 text-foreground/90">{overviewContent}</p>
                </section>
              )}
            </aside>
          </div>

          <div id="hotel-rooms" className="scroll-mt-24">
            <HotelRoomsSection rooms={hotel.rooms} currency={hotel.currency} />
          </div>
        </div>
      </section>
    </main>
  );
}
