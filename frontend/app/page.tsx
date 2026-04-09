'use client';

import { type RefObject, useEffect, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import {
  Activity,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Coffee,
  Hotel,
  LayoutGrid,
  MapPin,
  Martini,
  Search,
  Store,
  UtensilsCrossed,
} from 'lucide-react';
import { FeatureHotelCard } from '@/components/feature-hotel-card';
import { FeaturePlaceCard } from '@/components/feature-place-card';
import { ImageCarousel } from '@/components/image-carousel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { defaultLocale, isAppLocale, type AppLocale } from '@/i18n/config';
import { cn } from '@/lib/utils';
import { getCurrentUser } from '@/services/auth';
import { getFeatureImages } from '@/services/feature-images';
import { getFeatureHotels } from '@/services/feature-hotels';
import { getFeaturePlaces } from '@/services/feature-places';
import type { CarouselImage } from '@/types/carousel';
import type { FeatureHotel } from '@/types/feature-hotel';
import type { FeaturePlace } from '@/types/feature-place';

const featurePlaceImageOverlays = [
  'from-slate-950/78 via-slate-900/18 to-transparent',
  'from-cyan-950/78 via-cyan-900/16 to-transparent',
  'from-emerald-950/78 via-emerald-900/16 to-transparent',
  'from-amber-950/78 via-amber-900/14 to-transparent',
];

interface EdgeScrollButtonProps {
  direction: 'left' | 'right';
  ariaLabel: string;
  onClick: () => void;
  className?: string;
}

function EdgeScrollButton({
  direction,
  ariaLabel,
  onClick,
  className,
}: EdgeScrollButtonProps) {
  return (
    <Button
      type="button"
      variant="outline"
      size="icon-sm"
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        'z-20 h-10 w-10 shrink-0 rounded-full border-border/70 bg-card/90 text-slate-600 shadow-md backdrop-blur-sm hover:border-primary/25 hover:bg-muted/80 hover:text-slate-950 sm:h-11 sm:w-11',
        className,
      )}
    >
      {direction === 'left' ? (
        <ChevronLeft className="h-4 w-4" />
      ) : (
        <ChevronRight className="h-4 w-4" />
      )}
    </Button>
  );
}

export default function Home() {
  const t = useTranslations('home');
  const rawLocale = useLocale();
  const locale: AppLocale = isAppLocale(rawLocale) ? rawLocale : defaultLocale;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [featureImages, setFeatureImages] = useState<CarouselImage[]>([]);
  const [featuredPlaces, setFeaturedPlaces] = useState<FeaturePlace[]>([]);
  const [featuredHotels, setFeaturedHotels] = useState<FeatureHotel[]>([]);
  const [isCarouselLoading, setIsCarouselLoading] = useState(true);
  const [isFeaturedPlacesLoading, setIsFeaturedPlacesLoading] = useState(true);
  const [isFeaturedHotelsLoading, setIsFeaturedHotelsLoading] = useState(true);
  const categoryScrollRef = useRef<HTMLDivElement>(null);
  const featuredPlacesScrollRef = useRef<HTMLDivElement>(null);
  const featuredHotelsScrollRef = useRef<HTMLDivElement>(null);

  const categoryButtons = [
    { id: 'attractions', label: t('categories.attractions'), icon: MapPin },
    { id: 'hotels', label: t('categories.hotels'), icon: Hotel },
    { id: 'restaurants', label: t('categories.restaurants'), icon: UtensilsCrossed },
    { id: 'cafes', label: t('categories.cafes'), icon: Coffee },
    { id: 'bars', label: t('categories.bars'), icon: Martini },
    { id: 'shops', label: t('categories.shops'), icon: Store },
    { id: 'activities', label: t('categories.activities'), icon: Activity },
    { id: 'services', label: t('categories.services'), icon: BriefcaseBusiness },
    { id: 'topics', label: t('categories.topics'), icon: LayoutGrid },
  ];

  const featuredSections = [
    {
      id: 'featured-places',
      title: t('sections.featuredPlaces.title'),
      description: t('sections.featuredPlaces.description'),
    },
    {
      id: 'featured-hotels',
      title: t('sections.featuredHotels.title'),
      description: t('sections.featuredHotels.description'),
    },
    {
      id: 'trending-dining',
      title: t('sections.trendingDining.title'),
      description: t('sections.trendingDining.description'),
    },
  ];

  const handleCategoryClick = (id: string) => {
    setSelectedCategory((currentCategory) => (currentCategory === id ? null : id));
  };

  const scrollContainer = (
    containerRef: RefObject<HTMLDivElement | null>,
    direction: 'left' | 'right',
    viewportRatio: number,
  ) => {
    const container = containerRef.current;
    if (!container) return;

    container.scrollBy({
      left: (direction === 'left' ? -1 : 1) * Math.max(container.clientWidth * viewportRatio, 280),
      behavior: 'smooth',
    });
  };

  const scrollCategories = (direction: 'left' | 'right') => {
    scrollContainer(categoryScrollRef, direction, 0.82);
  };

  const scrollFeaturedPlaces = (direction: 'left' | 'right') => {
    scrollContainer(featuredPlacesScrollRef, direction, 0.94);
  };

  const scrollFeaturedHotels = (direction: 'left' | 'right') => {
    scrollContainer(featuredHotelsScrollRef, direction, 0.94);
  };

  useEffect(() => {
    let isMounted = true;

    const loadCurrentUser = async () => {
      const user = await getCurrentUser();
      if (isMounted) {
        setIsLoggedIn(!!user);
      }
    };

    const loadCarousel = async () => {
      const items = await getFeatureImages();
      if (isMounted) {
        setFeatureImages(items);
        setIsCarouselLoading(false);
      }
    };

    loadCurrentUser();
    loadCarousel();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadFeaturedPlaces = async () => {
      setIsFeaturedPlacesLoading(true);
      const items = await getFeaturePlaces(locale);
      if (isMounted) {
        setFeaturedPlaces(items);
        setIsFeaturedPlacesLoading(false);
      }
    };

    const loadFeaturedHotels = async () => {
      setIsFeaturedHotelsLoading(true);
      const items = await getFeatureHotels(locale);
      if (isMounted) {
        setFeaturedHotels(items);
        setIsFeaturedHotelsLoading(false);
      }
    };

    loadFeaturedPlaces();
    loadFeaturedHotels();

    return () => {
      isMounted = false;
    };
  }, [locale]);

  const renderFeaturedPlacesContent = () => {
    if (isFeaturedPlacesLoading) {
      return (
        <div className="space-y-4">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 3 }, (_, index) => (
              <div
                key={`feature-place-skeleton-${index}`}
                className="overflow-hidden rounded-3xl border border-border/80 bg-card/95 shadow-sm"
              >
                <div className="h-64 animate-pulse bg-muted/70" />
                <div className="space-y-3 px-5 py-5">
                  <div className="h-5 w-2/3 animate-pulse rounded-full bg-muted/60" />
                  <div className="h-4 w-full animate-pulse rounded-full bg-muted/50" />
                  <div className="h-4 w-4/5 animate-pulse rounded-full bg-muted/50" />
                  <div className="flex gap-2 pt-2">
                    <div className="h-7 w-20 animate-pulse rounded-full bg-muted/55" />
                    <div className="h-7 w-24 animate-pulse rounded-full bg-muted/55" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            {t('sections.featuredPlaces.loading')}
          </p>
        </div>
      );
    }

    if (featuredPlaces.length === 0) {
      return (
        <div className="rounded-2xl border border-dashed border-primary/30 bg-linear-to-r from-primary/6 via-background to-accent/6 px-5 py-8 text-sm text-muted-foreground">
          {t('sections.featuredPlaces.empty')}
        </div>
      );
    }

    return (
      <div className="flex items-center gap-2 sm:gap-3">
        <EdgeScrollButton
          direction="left"
          ariaLabel={t('sections.featuredPlaces.scrollLeft')}
          onClick={() => scrollFeaturedPlaces('left')}
        />

        <div className="min-w-0 flex-1">
          <div
            ref={featuredPlacesScrollRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth overscroll-x-contain px-1 py-2 pb-4 sm:px-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {featuredPlaces.map((place, index) => (
              <div
                key={place.id}
                className="min-w-0 shrink-0 self-stretch snap-start basis-full md:basis-[calc((100%-1rem)/2)] xl:basis-[calc((100%-2rem)/3)]"
              >
                <FeaturePlaceCard
                  place={place}
                  locale={locale}
                  featuredLabel={t('sections.featuredLabel')}
                  reviewsLabel={t('sections.featuredPlaces.reviews')}
                  coordinatesLabel={t('sections.featuredPlaces.coordinates')}
                  overlayClassName={featurePlaceImageOverlays[index % featurePlaceImageOverlays.length]}
                />
              </div>
            ))}
          </div>
        </div>

        <EdgeScrollButton
          direction="right"
          ariaLabel={t('sections.featuredPlaces.scrollRight')}
          onClick={() => scrollFeaturedPlaces('right')}
        />
      </div>
    );
  };

  const renderFeaturedHotelsContent = () => {
    if (isFeaturedHotelsLoading) {
      return (
        <div className="space-y-4">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 3 }, (_, index) => (
              <div
                key={`feature-hotel-skeleton-${index}`}
                className="overflow-hidden rounded-3xl border border-border/80 bg-card/95 shadow-sm"
              >
                <div className="h-64 animate-pulse bg-muted/70" />
                <div className="space-y-3 px-5 py-5">
                  <div className="h-5 w-2/3 animate-pulse rounded-full bg-muted/60" />
                  <div className="h-4 w-full animate-pulse rounded-full bg-muted/50" />
                  <div className="h-4 w-4/5 animate-pulse rounded-full bg-muted/50" />
                  <div className="flex gap-2 pt-2">
                    <div className="h-7 w-20 animate-pulse rounded-full bg-muted/55" />
                    <div className="h-7 w-24 animate-pulse rounded-full bg-muted/55" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            {t('sections.featuredHotels.loading')}
          </p>
        </div>
      );
    }

    if (featuredHotels.length === 0) {
      return (
        <div className="rounded-2xl border border-dashed border-primary/30 bg-linear-to-r from-primary/6 via-background to-accent/6 px-5 py-8 text-sm text-muted-foreground">
          {t('sections.featuredHotels.empty')}
        </div>
      );
    }

    return (
      <div className="flex items-center gap-2 sm:gap-3">
        <EdgeScrollButton
          direction="left"
          ariaLabel={t('sections.featuredHotels.scrollLeft')}
          onClick={() => scrollFeaturedHotels('left')}
        />

        <div className="min-w-0 flex-1">
          <div
            ref={featuredHotelsScrollRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth overscroll-x-contain px-1 py-2 pb-4 sm:px-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {featuredHotels.map((hotel, index) => (
              <div
                key={hotel.id}
                className="min-w-0 shrink-0 self-stretch snap-start basis-full md:basis-[calc((100%-1rem)/2)] xl:basis-[calc((100%-2rem)/3)]"
              >
                <FeatureHotelCard
                  hotel={hotel}
                  locale={locale}
                  featuredLabel={t('sections.featuredLabel')}
                  reviewsLabel={t('sections.featuredHotels.reviews')}
                  coordinatesLabel={t('sections.featuredHotels.coordinates')}
                  starSuffix={t('sections.featuredHotels.starSuffix')}
                  overlayClassName={featurePlaceImageOverlays[index % featurePlaceImageOverlays.length]}
                />
              </div>
            ))}
          </div>
        </div>

        <EdgeScrollButton
          direction="right"
          ariaLabel={t('sections.featuredHotels.scrollRight')}
          onClick={() => scrollFeaturedHotels('right')}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="w-full">
        {/* Hero Section with Carousel and Integrated Search */}
        <section className="relative mb-20">
          <div className="relative">
            {featureImages.length > 0 ? (
              <ImageCarousel images={featureImages} />
            ) : (
              <div className="relative h-88 w-full overflow-hidden rounded-2xl bg-muted/40 sm:h-117.5" />
            )}

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-8">
              {/* Text Content */}
              <div className="mb-8 max-w-2xl text-center sm:mb-12">
                <h1 className="mb-3 text-3xl leading-tight font-bold text-white drop-shadow-lg sm:text-4xl lg:text-5xl">
                  {t('hero.title')}
                </h1>
                {isCarouselLoading && (
                  <p className="text-sm text-white/80">{t('hero.loading')}</p>
                )}
                <p className="text-base text-white/95 drop-shadow-md sm:text-lg">
                  {t('hero.subtitle')}
                </p>
              </div>

              {/* Search Bar - Integrated in Hero */}
              <div className="w-full max-w-4xl px-4 sm:px-0">
                <div className="rounded-xl border border-white/35 bg-white/60 p-3 shadow-2xl backdrop-blur-md transition-all duration-300 hover:bg-white/70 hover:shadow-3xl sm:p-4">
                  <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                    <div className="relative w-full flex-1">
                      <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-600" />
                      <Input
                        type="text"
                        placeholder={t('hero.searchPlaceholder')}
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                        className="h-10 rounded-lg border border-white/45 bg-white/75 pl-12 text-sm text-slate-900 placeholder:text-slate-500 transition-all focus:border-primary/60 focus:bg-white/90 focus:ring-2 focus:ring-primary/50 focus:outline-none sm:h-11"
                      />
                    </div>
                    <Button className="h-10 w-full rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-200 hover:bg-primary/90 hover:shadow-lg active:scale-95 sm:h-11 sm:w-auto sm:px-8">
                      {t('hero.exploreButton')}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Buttons */}
        <section className="mx-auto mb-20 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="max-w-2xl space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                  {t('categories.heading')}
                </p>
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                  {t('categories.title')}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {t('categories.description')}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <EdgeScrollButton
                direction="left"
                ariaLabel={t('categories.scrollLeft')}
                onClick={() => scrollCategories('left')}
              />

              <div className="min-w-0 flex-1">
                <div
                  ref={categoryScrollRef}
                  className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth overscroll-x-contain px-1 py-1 pb-3 sm:px-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {categoryButtons.map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      type="button"
                      aria-pressed={selectedCategory === id}
                      onClick={() => handleCategoryClick(id)}
                      className={`group min-w-52 shrink-0 snap-start rounded-4xl border px-5 py-5 text-left transition-all duration-300 hover:-translate-y-0.5 sm:min-w-60 sm:px-6 sm:py-6 ${
                        selectedCategory === id
                          ? 'border-primary/35 bg-linear-to-br from-primary/12 via-white to-accent/8 shadow-lg shadow-primary/10'
                          : 'border-border/80 bg-card/90 shadow-sm hover:border-primary/25 hover:shadow-md'
                      }`}
                    >
                      <span
                        className={`mb-4 flex h-14 w-14 items-center justify-center rounded-[1.2rem] transition-colors sm:mb-5 sm:h-16 sm:w-16 ${
                          selectedCategory === id
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-primary/10 text-primary group-hover:bg-primary/15'
                        }`}
                      >
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                      </span>
                      <span className="block text-base font-semibold leading-snug text-foreground sm:text-lg">
                        {label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <EdgeScrollButton
                direction="right"
                ariaLabel={t('categories.scrollRight')}
                onClick={() => scrollCategories('right')}
              />
            </div>
          </div>
        </section>

        {/* Featured Sections */}
        <section className="mx-auto mb-20 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {featuredSections.map((section) => (
              <div
                key={section.id}
                className="overflow-hidden rounded-3xl border border-border/80 bg-card/95 shadow-sm"
              >
                <div className="border-b border-border/70 px-6 py-6 sm:px-8">
                  <div className="max-w-3xl space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/75">
                      {t('sections.featuredLabel')}
                    </p>
                    <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                      {section.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {section.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-8 sm:px-8 sm:py-10">
                  {section.id === 'featured-places' ? (
                    renderFeaturedPlacesContent()
                  ) : section.id === 'featured-hotels' ? (
                    renderFeaturedHotelsContent()
                  ) : (
                    <div className="rounded-2xl border border-dashed border-primary/30 bg-linear-to-r from-primary/6 via-background to-accent/6 px-5 py-8 text-sm text-muted-foreground">
                      {t('sections.placeholder')}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        {!isLoggedIn && (
          <section className="mx-auto mb-20 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-primary/20 bg-linear-to-r from-primary/10 via-accent/5 to-primary/10 p-8 text-center backdrop-blur-sm sm:p-16">
              <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {t('cta.description')}
              </p>
              <Button className="h-12 rounded-lg bg-primary px-10 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg">
                {t('cta.button')}
              </Button>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-0 bg-linear-to-b from-foreground to-foreground/95 text-card">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-base font-bold">{t('footer.about.title')}</h3>
              <p className="text-sm leading-relaxed opacity-75">
                {t('footer.about.description')}
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-base font-bold">{t('footer.explore.title')}</h3>
              <ul className="space-y-2.5 text-sm opacity-75">
                <li>
                  <a href="#" className="transition-opacity hover:opacity-100">
                    {t('footer.explore.hotels')}
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-opacity hover:opacity-100">
                    {t('footer.explore.tours')}
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-opacity hover:opacity-100">
                    {t('footer.explore.tickets')}
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-opacity hover:opacity-100">
                    {t('footer.explore.restaurants')}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-base font-bold">{t('footer.support.title')}</h3>
              <ul className="space-y-2.5 text-sm opacity-75">
                <li>
                  <a href="#" className="transition-opacity hover:opacity-100">
                    {t('footer.support.helpCenter')}
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-opacity hover:opacity-100">
                    {t('footer.support.contact')}
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-opacity hover:opacity-100">
                    {t('footer.support.terms')}
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-opacity hover:opacity-100">
                    {t('footer.support.privacy')}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-base font-bold">{t('footer.follow.title')}</h3>
              <ul className="space-y-2.5 text-sm opacity-75">
                <li>
                  <a href="#" className="transition-opacity hover:opacity-100">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-opacity hover:opacity-100">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-opacity hover:opacity-100">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-opacity hover:opacity-100">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-card/20 pt-8">
            <p className="text-sm opacity-60">{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
