'use client';

import { type ReactNode, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import {
  ArrowLeft,
  CalendarClock,
  Compass,
  DoorOpen,
  MapPin,
  PawPrint,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react';
import { HotelRoomDetailCard } from '@/components/hotels/hotel-room-detail-card';
import { Button } from '@/components/ui/button';
import { defaultLocale, isAppLocale, type AppLocale } from '@/i18n/config';
import { getHotelById } from '@/services/hotels';
import type { Hotel } from '@/types/hotel';

function formatIsoDate(value: string, locale: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(date);
}

function getMinimumPrice(hotel: Hotel) {
  const roomPrices = hotel.rooms
    .map((room) => room.price)
    .filter((price) => Number.isFinite(price) && price > 0);

  if (roomPrices.length > 0) {
    return Math.min(...roomPrices);
  }

  return hotel.priceRange.min;
}

function getMaximumPrice(hotel: Hotel) {
  const roomPrices = hotel.rooms
    .map((room) => room.price)
    .filter((price) => Number.isFinite(price) && price > 0);

  if (roomPrices.length > 0) {
    return Math.max(...roomPrices);
  }

  return hotel.priceRange.max;
}

function getPetsFriendlyText(value: string) {
  const normalized = value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

  if (
    normalized.includes('khong') ||
    normalized.includes('不可') ||
    normalized.includes('not allow')
  ) {
    return false;
  }

  return true;
}

function DetailSection({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-border/80 bg-card/95 p-6 shadow-sm sm:p-7">
      <div className="mb-5 border-b border-border/70 pb-4">
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

export default function HotelDetailPage() {
  const t = useTranslations('hotelDetail');
  const params = useParams<{ id: string }>();
  const rawLocale = useLocale();
  const locale: AppLocale = isAppLocale(rawLocale) ? rawLocale : defaultLocale;

  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const hotelId = typeof params.id === 'string' ? params.id : '';

  useEffect(() => {
    let isMounted = true;

    const loadHotel = async () => {
      if (!hotelId) {
        if (isMounted) {
          setHotel(null);
          setIsLoading(false);
        }
        return;
      }

      setIsLoading(true);
      const item = await getHotelById(locale, hotelId);
      if (isMounted) {
        setHotel(item);
        setIsLoading(false);
      }
    };

    loadHotel();

    return () => {
      isMounted = false;
    };
  }, [hotelId, locale]);

  const galleryImages = useMemo(() => {
    if (!hotel) return [];
    return Array.from(new Set([hotel.coverImage, ...hotel.gallery]));
  }, [hotel]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="h-80 animate-pulse rounded-3xl bg-muted/50" />
          <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,2fr)_360px]">
            <div className="space-y-6">
              <div className="h-56 animate-pulse rounded-3xl bg-muted/45" />
              <div className="h-72 animate-pulse rounded-3xl bg-muted/45" />
            </div>
            <div className="h-80 animate-pulse rounded-3xl bg-muted/45" />
          </div>
        </main>
      </div>
    );
  }

  if (!hotel) {
    return (
      <div className="min-h-screen bg-background">
        <main className="mx-auto flex max-w-3xl flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-foreground">{t('notFound.title')}</h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {t('notFound.description')}
          </p>
          <Link href="/hotels" className="mt-6">
            <Button className="rounded-xl">{t('notFound.backButton')}</Button>
          </Link>
        </main>
      </div>
    );
  }

  const currencyFormatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: hotel.priceRange.currency,
    maximumFractionDigits: 0,
  });

  const minimumPrice = getMinimumPrice(hotel);
  const maximumPrice = getMaximumPrice(hotel);
  const isPetsFriendly = getPetsFriendlyText(hotel.policies.pets.allowed);

  return (
    <div className="min-h-screen bg-linear-to-b from-background via-background to-muted/20">
      <main className="pb-16">
        <section className="relative mb-10 overflow-hidden">
          <div className="relative h-95 w-full sm:h-112">
            <Image
              src={hotel.coverImage}
              alt={hotel.name}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-b from-slate-950/20 via-slate-950/55 to-slate-950/75" />
          </div>

          <div className="absolute inset-0 mx-auto flex w-full max-w-7xl items-end px-4 pb-8 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Link
                href="/hotels"
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-semibold tracking-[0.18em] text-white backdrop-blur-sm"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                {t('hero.backToHotels')}
              </Link>

              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">
                  <Sparkles className="h-3.5 w-3.5" />
                  {t('hero.featuredLabel')}
                </span>
                <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {hotel.stars} {t('hero.starSuffix')}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-white drop-shadow-lg sm:text-4xl lg:text-5xl">
                {hotel.name}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/90">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-black/35 px-3 py-1 backdrop-blur-sm">
                  <MapPin className="h-4 w-4" />
                  {hotel.address}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-black/35 px-3 py-1 backdrop-blur-sm">
                  <Star className="h-4 w-4 fill-amber-300 text-amber-300" />
                  {hotel.rating.toFixed(1)} ({hotel.reviewCount} {t('hero.reviewsLabel')})
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_360px]">
            <div className="space-y-6">
              <DetailSection title={t('overview.title')} subtitle={t('overview.subtitle')}>
                <p className="text-sm leading-relaxed text-muted-foreground">{hotel.shortDescription}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{hotel.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {hotel.highlights.map((highlight) => (
                    <span
                      key={`${hotel.id}-${highlight}`}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </DetailSection>

              <DetailSection title={t('gallery.title')} subtitle={t('gallery.subtitle')}>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {galleryImages.map((image, index) => (
                    <div key={`${hotel.id}-gallery-${index}`} className="relative h-48 overflow-hidden rounded-2xl">
                      <Image
                        src={image}
                        alt={`${hotel.name} gallery ${index + 1}`}
                        fill
                        sizes="(min-width: 1280px) 30vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </DetailSection>

              <DetailSection title={t('amenities.title')} subtitle={t('amenities.subtitle')}>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {hotel.amenities.map((amenity) => (
                    <div
                      key={`${hotel.id}-amenity-${amenity}`}
                      className="inline-flex items-center rounded-xl border border-border/80 bg-background px-3 py-2 text-sm text-muted-foreground"
                    >
                      {amenity}
                    </div>
                  ))}
                </div>
              </DetailSection>

              <DetailSection title={t('rooms.title')} subtitle={t('rooms.subtitle')}>
                <div className="space-y-4">
                  {hotel.rooms.map((room) => (
                    <HotelRoomDetailCard
                      key={`${hotel.id}-${room.type}-${room.price}`}
                      room={room}
                      locale={locale}
                      currencyCode={hotel.priceRange.currency}
                      labels={{
                        fromLabel: t('rooms.fromLabel'),
                        perNightLabel: t('rooms.perNightLabel'),
                        maxGuestsLabel: t('rooms.maxGuestsLabel'),
                        bedTypeLabel: t('rooms.bedTypeLabel'),
                        areaLabel: t('rooms.areaLabel'),
                        quantityLabel: t('rooms.quantityLabel'),
                        amenitiesLabel: t('rooms.amenitiesLabel'),
                      }}
                    />
                  ))}
                </div>
              </DetailSection>

              <DetailSection title={t('policies.title')} subtitle={t('policies.subtitle')}>
                <div className="grid gap-4 md:grid-cols-2">
                  <article className="rounded-2xl border border-border/80 bg-background p-4">
                    <h3 className="mb-2 text-sm font-semibold text-foreground">{t('policies.checkInOut.title')}</h3>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li>{t('policies.checkInOut.checkInFrom')}: {hotel.policies.checkInOut.checkInFrom}</li>
                      <li>{t('policies.checkInOut.checkOutBefore')}: {hotel.policies.checkInOut.checkOutBefore}</li>
                      <li>{t('policies.checkInOut.earlyCheckIn')}: {hotel.policies.checkInOut.earlyCheckIn}</li>
                      <li>{t('policies.checkInOut.lateCheckOut')}: {hotel.policies.checkInOut.lateCheckOut}</li>
                    </ul>
                  </article>

                  <article className="rounded-2xl border border-border/80 bg-background p-4">
                    <h3 className="mb-2 text-sm font-semibold text-foreground">{t('policies.children.title')}</h3>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li>{t('policies.children.policy')}: {hotel.policies.children.policy}</li>
                      <li>{t('policies.children.freeStay')}: {hotel.policies.children.freeStay}</li>
                      <li>{t('policies.children.extraBed')}: {hotel.policies.children.extraBed}</li>
                    </ul>
                  </article>

                  <article className="rounded-2xl border border-border/80 bg-background p-4">
                    <h3 className="mb-2 text-sm font-semibold text-foreground">{t('policies.cancellation.title')}</h3>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li>{t('policies.cancellation.freeCancellationWindow')}: {hotel.policies.cancellation.freeCancellationWindow}</li>
                      <li>{t('policies.cancellation.lateCancellationFee')}: {hotel.policies.cancellation.lateCancellationFee}</li>
                      <li>{t('policies.cancellation.noShowFee')}: {hotel.policies.cancellation.noShowFee}</li>
                    </ul>
                  </article>

                  <article className="rounded-2xl border border-border/80 bg-background p-4">
                    <h3 className="mb-2 text-sm font-semibold text-foreground">{t('policies.smoking.title')}</h3>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li>{t('policies.smoking.inRoom')}: {hotel.policies.smoking.inRoom}</li>
                      <li>{t('policies.smoking.penalty')}: {hotel.policies.smoking.penalty}</li>
                      <li>{t('policies.smoking.designatedArea')}: {hotel.policies.smoking.designatedArea}</li>
                    </ul>
                  </article>

                  <article className="rounded-2xl border border-border/80 bg-background p-4">
                    <h3 className="mb-2 text-sm font-semibold text-foreground">{t('policies.pets.title')}</h3>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li>{t('policies.pets.allowed')}: {hotel.policies.pets.allowed}</li>
                      {hotel.policies.pets.fee ? <li>{t('policies.pets.fee')}: {hotel.policies.pets.fee}</li> : null}
                      {hotel.policies.pets.note ? <li>{t('policies.pets.note')}: {hotel.policies.pets.note}</li> : null}
                      {hotel.policies.pets.serviceAnimal ? <li>{t('policies.pets.serviceAnimal')}: {hotel.policies.pets.serviceAnimal}</li> : null}
                    </ul>
                  </article>

                  <article className="rounded-2xl border border-border/80 bg-background p-4">
                    <h3 className="mb-2 text-sm font-semibold text-foreground">{t('policies.payment.title')}</h3>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li>{t('policies.payment.acceptedMethods')}: {hotel.policies.payment.acceptedMethods.join(', ')}</li>
                      <li>{t('policies.payment.deposit')}: {hotel.policies.payment.deposit}</li>
                      <li>{t('policies.payment.vat')}: {hotel.policies.payment.vat}</li>
                    </ul>
                  </article>
                </div>

                {hotel.policies.other.length > 0 ? (
                  <div className="mt-4 rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-4">
                    <h3 className="mb-2 text-sm font-semibold text-foreground">{t('policies.other.title')}</h3>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {hotel.policies.other.map((item, index) => (
                        <li key={`${hotel.id}-policy-other-${index}`}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </DetailSection>

              <DetailSection title={t('recently.title')} subtitle={t('recently.subtitle')}>
                <div className="rounded-2xl border border-dashed border-primary/35 bg-linear-to-r from-primary/6 via-background to-accent/8 px-5 py-8 text-sm text-muted-foreground">
                  {t('recently.empty')}
                </div>
              </DetailSection>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <section className="rounded-3xl border border-border/80 bg-card/95 p-6 shadow-sm">
                <p className="mb-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  {t('sidebar.summaryLabel')}
                </p>

                <h2 className="text-2xl font-bold text-foreground">{hotel.name}</h2>

                <div className="mt-4 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    {t('sidebar.priceRangeLabel')}
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    {currencyFormatter.format(minimumPrice)} - {currencyFormatter.format(maximumPrice)}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                    <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                    {hotel.rating.toFixed(1)} / 5
                  </span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {hotel.reviewCount} {t('sidebar.reviewsLabel')}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                      isPetsFriendly
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    <PawPrint className="h-3.5 w-3.5" />
                    {isPetsFriendly ? t('sidebar.petsFriendly') : t('sidebar.petsNotAllowed')}
                  </span>
                </div>
              </section>

              <section className="rounded-3xl border border-border/80 bg-card/95 p-6 shadow-sm">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
                  {t('sidebar.checkInOutTitle')}
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="inline-flex items-center gap-2">
                    <DoorOpen className="h-4 w-4 text-primary/80" />
                    {t('sidebar.checkInFrom')}: {hotel.policies.checkInOut.checkInFrom}
                  </p>
                  <p className="inline-flex items-center gap-2">
                    <CalendarClock className="h-4 w-4 text-primary/80" />
                    {t('sidebar.checkOutBefore')}: {hotel.policies.checkInOut.checkOutBefore}
                  </p>
                </div>
              </section>

              <section className="rounded-3xl border border-border/80 bg-card/95 p-6 shadow-sm">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
                  {t('sidebar.coordinatesTitle')}
                </h3>
                <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Compass className="h-4 w-4 text-primary/80" />
                  {hotel.location.lat.toFixed(6)}, {hotel.location.lng.toFixed(6)}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">{t('sidebar.coordinatesHint')}</p>
              </section>

              <section className="rounded-3xl border border-border/80 bg-card/95 p-6 shadow-sm">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary/80">
                  {t('sidebar.metaTitle')}
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>{t('sidebar.createdAt')}: {formatIsoDate(hotel.createdAt, locale)}</p>
                  <p>{t('sidebar.updatedAt')}: {formatIsoDate(hotel.updatedAt, locale)}</p>
                </div>
              </section>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
