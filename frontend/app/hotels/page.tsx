'use client';

import { useEffect, useMemo, useState } from 'react';
import { ArrowDownWideNarrow, Hotel as HotelIcon, Sparkles } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { HotelResultCard } from '@/components/hotels/hotel-result-card';
import { HotelsFilterSidebar } from '@/components/hotels/hotels-filter-sidebar';
import { HotelsSearchBar } from '@/components/hotels/hotels-search-bar';
import { ImageCarousel } from '@/components/image-carousel';
import { defaultLocale, isAppLocale, type AppLocale } from '@/i18n/config';
import { getFeatureImages } from '@/services/feature-images';
import { getHotels } from '@/services/hotels';
import type { CarouselImage } from '@/types/carousel';
import type { Hotel } from '@/types/hotel';

const DEFAULT_ADULTS = 2;
const DEFAULT_CHILDREN = 0;

type SortOption = 'recommended' | 'priceAsc' | 'ratingDesc' | 'reviewDesc';

function normalizeText(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function getDistrictFromAddress(address: string) {
  const chunks = address.split(',').map((chunk) => chunk.trim()).filter(Boolean);
  if (chunks.length >= 2) {
    return chunks[chunks.length - 2];
  }
  return address;
}

function getHotelMinimumPrice(hotel: Hotel) {
  const roomPrices = hotel.rooms
    .map((room) => room.price)
    .filter((price) => Number.isFinite(price) && price > 0);

  if (roomPrices.length > 0) {
    return Math.min(...roomPrices);
  }

  return hotel.priceRange.min;
}

function supportsGuestCount(hotel: Hotel, adults: number, children: number) {
  if (hotel.rooms.length === 0) {
    return true;
  }

  return hotel.rooms.some((room) =>
    room.capacity.some(
      (capacity) => capacity.adults >= adults && capacity.children >= children,
    ),
  );
}

function isHotelPetFriendly(hotel: Hotel) {
  const allowedText = hotel.policies?.pets?.allowed ?? '';
  const normalized = normalizeText(allowedText);

  const disallowedPatterns = [/khong cho phep/, /khong/, /khong cho/, /不可/, /not allow/];
  const hasDisallowed = disallowedPatterns.some((pattern) => pattern.test(normalized));

  return !hasDisallowed;
}

export default function HotelsPage() {
  const t = useTranslations('hotels');
  const rawLocale = useLocale();
  const locale: AppLocale = isAppLocale(rawLocale) ? rawLocale : defaultLocale;

  const [featureImages, setFeatureImages] = useState<CarouselImage[]>([]);
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [isCarouselLoading, setIsCarouselLoading] = useState(true);
  const [isHotelsLoading, setIsHotelsLoading] = useState(true);

  const [nameQuery, setNameQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [adults, setAdults] = useState(DEFAULT_ADULTS);
  const [children, setChildren] = useState(DEFAULT_CHILDREN);

  const [selectedStars, setSelectedStars] = useState<number[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedRoomTypes, setSelectedRoomTypes] = useState<string[]>([]);
  const [petFriendlyOnly, setPetFriendlyOnly] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [maxPrice, setMaxPrice] = useState(3000000);
  const [sortBy, setSortBy] = useState<SortOption>('recommended');

  useEffect(() => {
    let isMounted = true;

    const loadCarousel = async () => {
      const images = await getFeatureImages();
      if (isMounted) {
        setFeatureImages(images);
        setIsCarouselLoading(false);
      }
    };

    loadCarousel();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadHotels = async () => {
      setIsHotelsLoading(true);
      const items = await getHotels(locale);
      if (isMounted) {
        setHotels(items);
        setIsHotelsLoading(false);
      }
    };

    loadHotels();

    return () => {
      isMounted = false;
    };
  }, [locale]);

  const starOptions = useMemo(() => {
    const stars = new Set(hotels.map((hotel) => hotel.stars));
    return Array.from(stars).sort((a, b) => b - a);
  }, [hotels]);

  const amenityOptions = useMemo(() => {
    const countMap = new Map<string, number>();

    for (const hotel of hotels) {
      for (const amenity of hotel.amenities) {
        countMap.set(amenity, (countMap.get(amenity) ?? 0) + 1);
      }
    }

    return Array.from(countMap.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([amenity]) => amenity)
      .slice(0, 12);
  }, [hotels]);

  const roomTypeOptions = useMemo(() => {
    const roomTypes = new Set<string>();

    for (const hotel of hotels) {
      for (const room of hotel.rooms) {
        roomTypes.add(room.type);
      }
    }

    return Array.from(roomTypes).sort((a, b) => a.localeCompare(b, locale));
  }, [hotels, locale]);

  const maxPriceLimit = useMemo(() => {
    const values = hotels.map((hotel) => getHotelMinimumPrice(hotel));
    if (values.length === 0) {
      return 1;
    }

    return Math.max(...values);
  }, [hotels]);

  useEffect(() => {
    setMaxPrice(maxPriceLimit);
  }, [maxPriceLimit]);

  const filteredHotels = useMemo(() => {
    const normalizedName = normalizeText(nameQuery);
    const normalizedLocation = normalizeText(locationQuery);

    const matched = hotels.filter((hotel) => {
      if (normalizedName.length > 0) {
        const searchTarget = normalizeText(`${hotel.name} ${hotel.highlights.join(' ')}`);
        if (!searchTarget.includes(normalizedName)) {
          return false;
        }
      }

      if (normalizedLocation.length > 0) {
        const district = getDistrictFromAddress(hotel.address);
        const locationTarget = normalizeText(`${hotel.address} ${district}`);
        if (!locationTarget.includes(normalizedLocation)) {
          return false;
        }
      }

      if (selectedStars.length > 0 && !selectedStars.includes(hotel.stars)) {
        return false;
      }

      if (selectedAmenities.length > 0) {
        const hasAllAmenities = selectedAmenities.every((amenity) =>
          hotel.amenities.includes(amenity),
        );
        if (!hasAllAmenities) {
          return false;
        }
      }

      if (selectedRoomTypes.length > 0) {
        const hasRoomType = hotel.rooms.some((room) =>
          selectedRoomTypes.includes(room.type),
        );
        if (!hasRoomType) {
          return false;
        }
      }

      if (petFriendlyOnly && !isHotelPetFriendly(hotel)) {
        return false;
      }

      if (hotel.rating < minRating) {
        return false;
      }

      if (getHotelMinimumPrice(hotel) > maxPrice) {
        return false;
      }

      if (!supportsGuestCount(hotel, adults, children)) {
        return false;
      }

      return true;
    });

    const sorted = [...matched];

    switch (sortBy) {
      case 'priceAsc':
        sorted.sort((a, b) => getHotelMinimumPrice(a) - getHotelMinimumPrice(b));
        break;
      case 'ratingDesc':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'reviewDesc':
        sorted.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      default:
        sorted.sort((a, b) => {
          if (b.rating !== a.rating) {
            return b.rating - a.rating;
          }
          return b.reviewCount - a.reviewCount;
        });
        break;
    }

    return sorted;
  }, [
    adults,
    children,
    hotels,
    locationQuery,
    maxPrice,
    minRating,
    nameQuery,
    petFriendlyOnly,
    selectedAmenities,
    selectedRoomTypes,
    selectedStars,
    sortBy,
  ]);

  const activeFilterCount =
    selectedStars.length +
    selectedAmenities.length +
    selectedRoomTypes.length +
    (petFriendlyOnly ? 1 : 0) +
    (minRating > 0 ? 1 : 0) +
    (maxPrice < maxPriceLimit ? 1 : 0);

  const handleSearch = () => {
    document.getElementById('hotel-results')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const clearAllFilters = () => {
    setNameQuery('');
    setLocationQuery('');
    setAdults(DEFAULT_ADULTS);
    setChildren(DEFAULT_CHILDREN);
    setSelectedStars([]);
    setSelectedAmenities([]);
    setSelectedRoomTypes([]);
    setPetFriendlyOnly(false);
    setMinRating(0);
    setMaxPrice(maxPriceLimit);
    setSortBy('recommended');
  };

  const toggleStar = (star: number) => {
    setSelectedStars((current) =>
      current.includes(star)
        ? current.filter((value) => value !== star)
        : [...current, star],
    );
  };

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((current) =>
      current.includes(amenity)
        ? current.filter((value) => value !== amenity)
        : [...current, amenity],
    );
  };

  const toggleRoomType = (roomType: string) => {
    setSelectedRoomTypes((current) =>
      current.includes(roomType)
        ? current.filter((value) => value !== roomType)
        : [...current, roomType],
    );
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-background via-background to-muted/20">
      <main className="w-full">
        <section className="relative mb-12">
          <div className="relative">
            {featureImages.length > 0 ? (
              <ImageCarousel images={featureImages} className="h-105 rounded-none sm:h-125" />
            ) : (
              <div className="relative h-105 w-full bg-muted/35 sm:h-125" />
            )}

            <div className="absolute inset-0 bg-linear-to-b from-slate-950/15 via-slate-900/45 to-slate-950/65" />

            <div className="absolute inset-0 mx-auto flex w-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-white backdrop-blur-sm">
                  <HotelIcon className="h-4 w-4" />
                  {t('hero.badge')}
                </p>

                <h1 className="mb-4 text-3xl leading-tight font-bold text-white drop-shadow-lg sm:text-4xl lg:text-5xl">
                  {t('hero.title')}
                </h1>

                <p className="mb-6 max-w-2xl text-base text-white/92 sm:text-lg">
                  {t('hero.subtitle')}
                </p>
              </div>

              <HotelsSearchBar
                nameQuery={nameQuery}
                locationQuery={locationQuery}
                adults={adults}
                childGuests={children}
                onNameQueryChange={setNameQuery}
                onLocationQueryChange={setLocationQuery}
                onAdultsChange={setAdults}
                onChildrenChange={setChildren}
                onSearch={handleSearch}
                onReset={clearAllFilters}
                namePlaceholder={t('search.namePlaceholder')}
                locationPlaceholder={t('search.locationPlaceholder')}
                adultsLabel={t('search.adultsLabel')}
                childrenLabel={t('search.childrenLabel')}
                searchLabel={t('search.searchButton')}
                resetLabel={t('search.resetButton')}
              />

              {isCarouselLoading && (
                <p className="mt-2 text-xs text-white/80">{t('hero.loading')}</p>
              )}
            </div>
          </div>
        </section>

        <section id="hotel-results" className="mx-auto mb-16 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col gap-4 rounded-3xl border border-border/80 bg-card/95 p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-1 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary/80">
                <Sparkles className="h-3.5 w-3.5" />
                {t('results.label')}
              </p>
              <h2 className="text-2xl font-bold text-foreground">{t('results.title')}</h2>
              <p className="text-sm text-muted-foreground">{t('results.description')}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                {filteredHotels.length} {t('results.foundSuffix')}
              </span>
              <span className="rounded-full bg-accent/12 px-3 py-1 text-sm font-semibold text-accent">
                {activeFilterCount} {t('results.activeFiltersSuffix')}
              </span>
              <label className="flex items-center gap-2 rounded-full border border-border/80 bg-background px-3 py-1.5 text-sm text-muted-foreground">
                <ArrowDownWideNarrow className="h-4 w-4 text-primary" />
                <span>{t('results.sortLabel')}</span>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value as SortOption)}
                  className="bg-transparent text-sm font-medium text-foreground outline-none"
                >
                  <option value="recommended">{t('results.sort.recommended')}</option>
                  <option value="priceAsc">{t('results.sort.priceAsc')}</option>
                  <option value="ratingDesc">{t('results.sort.ratingDesc')}</option>
                  <option value="reviewDesc">{t('results.sort.reviewDesc')}</option>
                </select>
              </label>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
            <HotelsFilterSidebar
              locale={locale}
              title={t('filters.title')}
              description={t('filters.description')}
              clearLabel={t('filters.clearButton')}
              starsLabel={t('filters.starsLabel')}
              maxBudgetLabel={t('filters.maxBudgetLabel')}
              minRatingLabel={t('filters.minRatingLabel')}
              amenitiesLabel={t('filters.amenitiesLabel')}
              roomTypesLabel={t('filters.roomTypesLabel')}
              petPolicyLabel={t('filters.petPolicyLabel')}
              petFriendlyOnlyLabel={t('filters.petFriendlyOnlyLabel')}
              emptyAmenitiesLabel={t('filters.emptyAmenities')}
              emptyRoomTypesLabel={t('filters.emptyRoomTypes')}
              starOptions={starOptions}
              selectedStars={selectedStars}
              maxPrice={maxPrice}
              maxPriceLimit={maxPriceLimit}
              minRating={minRating}
              amenityOptions={amenityOptions}
              selectedAmenities={selectedAmenities}
              roomTypeOptions={roomTypeOptions}
              selectedRoomTypes={selectedRoomTypes}
              petFriendlyOnly={petFriendlyOnly}
              onToggleStar={toggleStar}
              onMaxPriceChange={setMaxPrice}
              onMinRatingChange={setMinRating}
              onToggleAmenity={toggleAmenity}
              onToggleRoomType={toggleRoomType}
              onPetFriendlyOnlyChange={setPetFriendlyOnly}
              onClearFilters={clearAllFilters}
            />

            <div>
              {isHotelsLoading ? (
                <div className="grid gap-5 md:grid-cols-2">
                  {Array.from({ length: 4 }, (_, index) => (
                    <div
                      key={`hotel-loading-${index}`}
                      className="overflow-hidden rounded-3xl border border-border/80 bg-card/95 shadow-sm"
                    >
                      <div className="h-64 animate-pulse bg-muted/70" />
                      <div className="space-y-3 px-5 py-5">
                        <div className="h-5 w-2/3 animate-pulse rounded-full bg-muted/60" />
                        <div className="h-4 w-full animate-pulse rounded-full bg-muted/50" />
                        <div className="h-4 w-4/5 animate-pulse rounded-full bg-muted/50" />
                        <div className="h-8 w-40 animate-pulse rounded-full bg-muted/55" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : filteredHotels.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-primary/30 bg-linear-to-r from-primary/6 via-background to-accent/8 p-8 text-center">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{t('results.emptyTitle')}</h3>
                  <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {t('results.emptyDescription')}
                  </p>
                </div>
              ) : (
                <div className="grid gap-5 md:grid-cols-2">
                  {filteredHotels.map((hotel) => (
                    <HotelResultCard
                      key={hotel.id}
                      hotel={hotel}
                      locale={locale}
                      featuredLabel={t('card.featuredLabel')}
                      reviewsLabel={t('card.reviewsLabel')}
                      starSuffix={t('card.starSuffix')}
                      fromPriceLabel={t('card.fromPriceLabel')}
                      perNightLabel={t('card.perNightLabel')}
                      maxGuestsLabel={t('card.maxGuestsLabel')}
                      roomTypesLabel={t('card.roomTypesLabel')}
                      petFriendlyLabel={t('card.petFriendlyLabel')}
                      petUnavailableLabel={t('card.petUnavailableLabel')}
                      detailsLabel={t('card.detailsLabel')}
                      isPetFriendly={isHotelPetFriendly(hotel)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
