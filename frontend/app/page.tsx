'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
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
import { ImageCarousel } from '@/components/image-carousel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getCurrentUser } from '@/services/auth';
import { getHomeCarouselImages } from '@/services/home-carousel';
import type { CarouselImage } from '@/types/carousel';

export default function Home() {
  const t = useTranslations('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [carouselItems, setCarouselItems] = useState<CarouselImage[]>([]);
  const [isCarouselLoading, setIsCarouselLoading] = useState(true);
  const categoryScrollRef = useRef<HTMLDivElement>(null);

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

  const scrollCategories = (direction: 'left' | 'right') => {
    categoryScrollRef.current?.scrollBy({
      left: direction === 'left' ? -320 : 320,
      behavior: 'smooth',
    });
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
      const items = await getHomeCarouselImages();
      if (isMounted) {
        setCarouselItems(items);
        setIsCarouselLoading(false);
      }
    };

    loadCurrentUser();
    loadCarousel();

    return () => {
      isMounted = false;
    };
  }, []);

  const carouselImages = carouselItems.map((item) => item.url);

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="w-full">
        {/* Hero Section with Carousel and Integrated Search */}
        <section className="relative mb-20">
          <div className="relative">
            {carouselImages.length > 0 ? (
              <ImageCarousel images={carouselImages} />
            ) : (
              <div className="relative w-full h-88 sm:h-117.5 rounded-2xl overflow-hidden bg-muted/40" />
            )}

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-8">
              {/* Text Content */}
              <div className="text-center max-w-2xl mb-8 sm:mb-12">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-3 leading-tight">
                  {t('hero.title')}
                </h1>
                {isCarouselLoading && (
                  <p className="text-sm text-white/80">Loading highlights...</p>
                )}
                <p className="text-base sm:text-lg text-white/95 drop-shadow-md">
                  {t('hero.subtitle')}
                </p>
              </div>

              {/* Search Bar - Integrated in Hero */}
              <div className="w-full max-w-4xl px-4 sm:px-0">
                <div className="bg-white/60 backdrop-blur-md border border-white/35 rounded-xl shadow-2xl p-3 sm:p-4 transition-all duration-300 hover:shadow-3xl hover:bg-white/70">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center">
                    <div className="flex-1 w-full relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600" />
                      <Input
                        type="text"
                        placeholder={t('hero.searchPlaceholder')}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-12 h-10 sm:h-11 rounded-lg border border-white/45 bg-white/75 text-slate-900 placeholder:text-slate-500 focus:bg-white/90 focus:border-primary/60 focus:ring-2 focus:ring-primary/50 transition-all focus:outline-none text-sm"
                      />
                    </div>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95 h-10 sm:h-11 px-6 sm:px-8 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg text-sm w-full sm:w-auto">
                      {t('hero.exploreButton')}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Buttons */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                  {t('categories.heading')}
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  {t('categories.title')}
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t('categories.description')}
                </p>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <Button
                  type="button"
                  variant="outline"
                  size="icon-sm"
                  onClick={() => scrollCategories('left')}
                  aria-label={t('categories.scrollLeft')}
                  className="rounded-full border-border/80 bg-card/80 shadow-sm hover:bg-card"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="icon-sm"
                  onClick={() => scrollCategories('right')}
                  aria-label={t('categories.scrollRight')}
                  className="rounded-full border-border/80 bg-card/80 shadow-sm hover:bg-card"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-linear-to-r from-background to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-linear-to-l from-background to-transparent z-10" />

              <div
                ref={categoryScrollRef}
                className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory overscroll-x-contain pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {categoryButtons.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={selectedCategory === id}
                    onClick={() => handleCategoryClick(id)}
                    className={`group shrink-0 min-w-39.5 sm:min-w-44 snap-start rounded-3xl border p-4 sm:p-5 text-left transition-all duration-300 hover:-translate-y-0.5 ${selectedCategory === id
                        ? 'border-primary/35 bg-linear-to-br from-primary/12 via-white to-accent/8 shadow-lg shadow-primary/10'
                        : 'border-border/80 bg-card/90 shadow-sm hover:border-primary/25 hover:shadow-md'
                      }`}
                  >
                    <span
                      className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl transition-colors ${selectedCategory === id
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-primary/10 text-primary group-hover:bg-primary/15'
                        }`}
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="block text-sm font-semibold leading-snug text-foreground">
                      {label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Sections */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
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
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {section.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-8 sm:px-8 sm:py-10">
                  <div className="rounded-2xl border border-dashed border-primary/30 bg-linear-to-r from-primary/6 via-background to-accent/6 px-5 py-8 text-sm text-muted-foreground">
                    {t('sections.placeholder')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        {!isLoggedIn && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="bg-linear-to-r from-primary/10 via-accent/5 to-primary/10 rounded-3xl p-8 sm:p-16 border border-primary/20 text-center backdrop-blur-sm">
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                {t('cta.description')}
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-10 text-base font-semibold rounded-lg transition-all hover:shadow-lg">
                {t('cta.button')}
              </Button>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-linear-to-b from-foreground to-foreground/95 text-card mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-bold text-base mb-4">{t('footer.about.title')}</h3>
              <p className="text-sm opacity-75 leading-relaxed">
                {t('footer.about.description')}
              </p>
            </div>
            <div>
              <h3 className="font-bold text-base mb-4">{t('footer.explore.title')}</h3>
              <ul className="text-sm space-y-2.5 opacity-75">
                <li><a href="#" className="hover:opacity-100 transition-opacity">{t('footer.explore.hotels')}</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">{t('footer.explore.tours')}</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">{t('footer.explore.tickets')}</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">{t('footer.explore.restaurants')}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-base mb-4">{t('footer.support.title')}</h3>
              <ul className="text-sm space-y-2.5 opacity-75">
                <li><a href="#" className="hover:opacity-100 transition-opacity">{t('footer.support.helpCenter')}</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">{t('footer.support.contact')}</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">{t('footer.support.terms')}</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">{t('footer.support.privacy')}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-base mb-4">{t('footer.follow.title')}</h3>
              <ul className="text-sm space-y-2.5 opacity-75">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Facebook</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Instagram</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Twitter</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-card/20 pt-8">
            <p className="text-sm opacity-60">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
