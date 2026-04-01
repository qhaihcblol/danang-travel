'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { format, startOfDay } from 'date-fns';
import { ja, vi } from 'date-fns/locale';
import { ArrowUpDown, CalendarDays, MapPin, Minus, Plus, Search, Star, Ticket, Users } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { ImageCarousel } from '@/components/image-carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { carouselImagesMockData, getTicketsSummaryMock } from '@/mock';

const carouselImages = carouselImagesMockData.map((item) => item.url);
const today = startOfDay(new Date());

type SortKey = 'recommended' | 'rating' | 'priceAsc' | 'priceDesc';
type CategoryKey = 'all' | 'tour' | 'attraction' | 'experience' | 'nature' | 'museum';

const normalizeCategory = (value?: string): Exclude<CategoryKey, 'all'> => {
  const input = (value ?? '').toLowerCase();
  switch (input) {
    case 'tour':
    case 'ツアー':
      return 'tour';
    case 'attraction':
    case '観光地':
      return 'attraction';
    case 'experience':
    case '体験':
      return 'experience';
    case 'nature':
    case '自然':
      return 'nature';
    case 'museum':
    case '博物館':
      return 'museum';
    default:
      return 'experience';
  }
};

function Counter({
  label,
  value,
  min,
  decreaseAriaLabel,
  increaseAriaLabel,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  decreaseAriaLabel: string;
  increaseAriaLabel: string;
  onChange: (next: number) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-2">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-40"
          aria-label={decreaseAriaLabel}
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-6 text-center text-sm font-semibold">{value}</span>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
          aria-label={increaseAriaLabel}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default function TicketsPage() {
  const t = useTranslations('tickets.page');
  const locale = useLocale();
  const dateLocale = locale === 'ja' ? ja : vi;
  const ticketsSummary = getTicketsSummaryMock(locale);
  const defaultDestination = t('search.destination.defaultValue').trim().toLowerCase();

  const [destinationInput, setDestinationInput] = useState(() => t('search.destination.defaultValue'));
  const [isDestinationOpen, setIsDestinationOpen] = useState(false);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const [visitDate, setVisitDate] = useState<Date | undefined>(today);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [ticketsCount, setTicketsCount] = useState(2);
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all');
  const [sortKey, setSortKey] = useState<SortKey>('recommended');

  const dateLabel = useMemo(() => {
    if (!visitDate) return t('search.date.empty');
    return format(visitDate, 'EEE, dd/MM/yyyy', { locale: dateLocale });
  }, [dateLocale, t, visitDate]);

  const guestLabel = `${t('search.travelers.adultsCount', { count: adults })} • ${t('search.travelers.childrenCount', { count: children })} • ${t('search.travelers.ticketsCount', { count: ticketsCount })}`;

  const filteredTickets = useMemo(() => {
    const normalizedKeyword = destinationInput.trim().toLowerCase();
    const keyword = normalizedKeyword === defaultDestination ? '' : normalizedKeyword;

    return ticketsSummary
      .filter((ticket) => {
        const category = normalizeCategory(ticket.category);
        const isCategoryMatch = selectedCategory === 'all' || category === selectedCategory;

        if (!keyword) return isCategoryMatch;

        return (
          isCategoryMatch &&
          (`${ticket.title} ${category}`.toLowerCase().includes(keyword))
        );
      })
      .sort((left, right) => {
        if (sortKey === 'rating') return right.rating - left.rating;
        if (sortKey === 'priceAsc') return left.priceFrom - right.priceFrom;
        if (sortKey === 'priceDesc') return right.priceFrom - left.priceFrom;

        const leftScore = left.rating * Math.log10(left.reviewCount + 10);
        const rightScore = right.rating * Math.log10(right.reviewCount + 10);
        return rightScore - leftScore;
      });
  }, [defaultDestination, destinationInput, selectedCategory, sortKey, ticketsSummary]);

  const categoryKeys: CategoryKey[] = ['all', 'tour', 'attraction', 'experience', 'nature', 'museum'];

  const formatPrice = (value: number) => `${value.toLocaleString(locale === 'ja' ? 'ja-JP' : 'vi-VN')}đ`;

  return (
    <div className="min-h-screen bg-background">
      <main className="w-full">
        <section className="relative mb-14 sm:mb-16">
          <div className="relative">
            <ImageCarousel images={carouselImages} />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
              <h1 className="mb-3 text-3xl font-bold text-white drop-shadow-lg sm:text-4xl lg:text-5xl">{t('hero.title')}</h1>
              <p className="max-w-3xl text-base text-white/95 drop-shadow-md sm:text-lg">{t('hero.subtitle')}</p>
            </div>
          </div>
        </section>

        <section className="sticky top-18 z-30 mx-auto -mt-28 mb-8 w-full max-w-6xl px-4 sm:top-22 sm:-mt-20 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/55 bg-white/90 p-3 shadow-2xl backdrop-blur-md">
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-[1.25fr_1fr_1fr_auto]">
              <Popover open={isDestinationOpen} onOpenChange={setIsDestinationOpen}>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className="flex h-14 w-full items-center gap-3 rounded-xl border border-border/40 bg-background/80 px-4 text-left transition-colors hover:bg-background"
                  >
                    <MapPin className="h-5 w-5 text-primary" />
                    <div className="min-w-0">
                      <p className="text-[11px] font-medium text-muted-foreground">{t('search.destination.label')}</p>
                      <p className="truncate text-[15px] font-normal text-foreground">{destinationInput || t('search.destination.placeholder')}</p>
                    </div>
                  </button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-[min(92vw,430px)] p-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase text-muted-foreground">{t('search.destination.findLabel')}</label>
                      <div className="relative">
                        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                          value={destinationInput}
                          onChange={(event) => setDestinationInput(event.target.value)}
                          placeholder={t('search.destination.inputPlaceholder')}
                          className="h-10 w-full rounded-lg border border-input bg-background pl-9 pr-3 text-sm outline-none ring-offset-background transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                        />
                      </div>
                    </div>

                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase text-muted-foreground">{t('search.destination.searchHistory')}</p>
                      <div className="space-y-1">
                        {[t('search.destination.history.0'), t('search.destination.history.1'), t('search.destination.history.2')].map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => {
                              setDestinationInput(item);
                              setIsDestinationOpen(false);
                            }}
                            className="block w-full rounded-md px-2 py-1.5 text-left text-sm hover:bg-muted"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase text-muted-foreground">{t('search.destination.popularDestinations')}</p>
                      <div className="flex flex-wrap gap-2">
                        {[t('search.destination.popular.0'), t('search.destination.popular.1'), t('search.destination.popular.2'), t('search.destination.popular.3')].map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => {
                              setDestinationInput(item);
                              setIsDestinationOpen(false);
                            }}
                            className="rounded-full border border-border px-3 py-1 text-xs font-medium transition-colors hover:border-primary hover:text-primary"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              <Popover open={isDateOpen} onOpenChange={setIsDateOpen}>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className="flex h-14 w-full items-center gap-3 rounded-xl border border-border/40 bg-background/80 px-4 text-left transition-colors hover:bg-background"
                  >
                    <CalendarDays className="h-5 w-5 text-primary" />
                    <div className="min-w-0">
                      <p className="text-[11px] font-medium text-muted-foreground">{t('search.date.label')}</p>
                      <p className="truncate text-[15px] font-normal text-foreground">{dateLabel}</p>
                    </div>
                  </button>
                </PopoverTrigger>
                <PopoverContent align="center" className="w-[min(94vw,420px)] rounded-2xl border-border/70 bg-white p-0 shadow-2xl">
                  <div className="px-5 pt-4 pb-3">
                    <Calendar
                      mode="single"
                      locale={dateLocale}
                      selected={visitDate}
                      onSelect={setVisitDate}
                      disabled={{ before: today }}
                      className="w-full rounded-xl border border-border/50 bg-white"
                    />
                  </div>
                  <div className="border-t border-border/60 px-5 py-2 text-right">
                    <button
                      type="button"
                      onClick={() => setVisitDate(undefined)}
                      className="rounded-md bg-muted px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted/80"
                    >
                      {t('search.date.clear')}
                    </button>
                  </div>
                </PopoverContent>
              </Popover>

              <Popover open={isGuestOpen} onOpenChange={setIsGuestOpen}>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className="flex h-14 w-full items-center gap-3 rounded-xl border border-border/40 bg-background/80 px-4 text-left transition-colors hover:bg-background"
                  >
                    <Users className="h-5 w-5 text-primary" />
                    <div className="min-w-0">
                      <p className="text-[11px] font-medium text-muted-foreground">{t('search.travelers.label')}</p>
                      <p className="truncate text-[15px] font-normal text-foreground">{guestLabel}</p>
                    </div>
                  </button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-[min(92vw,360px)] p-4">
                  <Counter
                    label={t('search.travelers.adults')}
                    decreaseAriaLabel={t('search.travelers.decreaseAdults')}
                    increaseAriaLabel={t('search.travelers.increaseAdults')}
                    value={adults}
                    min={1}
                    onChange={setAdults}
                  />
                  <Counter
                    label={t('search.travelers.children')}
                    decreaseAriaLabel={t('search.travelers.decreaseChildren')}
                    increaseAriaLabel={t('search.travelers.increaseChildren')}
                    value={children}
                    min={0}
                    onChange={setChildren}
                  />
                  <Counter
                    label={t('search.travelers.tickets')}
                    decreaseAriaLabel={t('search.travelers.decreaseTickets')}
                    increaseAriaLabel={t('search.travelers.increaseTickets')}
                    value={ticketsCount}
                    min={1}
                    onChange={setTicketsCount}
                  />
                  <Button className="mt-3 w-full" onClick={() => setIsGuestOpen(false)}>
                    {t('search.travelers.done')}
                  </Button>
                </PopoverContent>
              </Popover>

              <Button className="h-14 rounded-xl px-6 font-semibold">
                <Search className="mr-2 h-4 w-4" />
                {t('search.submit')}
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto mb-16 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Ticket className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{t('sections.featuredTitle')}</h2>
              <Badge variant="secondary">{t('sections.resultCount', { count: filteredTickets.length })}</Badge>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {(['recommended', 'rating', 'priceAsc', 'priceDesc'] as SortKey[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSortKey(key)}
                    className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
                      sortKey === key
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                    }`}
                  >
                    {t(`sort.${key}`)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            {categoryKeys.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-background hover:border-primary/50 hover:text-primary'
                }`}
              >
                {t(`categories.${category}`)}
              </button>
            ))}
          </div>

          {filteredTickets.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
              <p className="text-lg font-semibold text-foreground">{t('empty.title')}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t('empty.subtitle')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTickets.map((ticket) => {
                const categoryKey = normalizeCategory(ticket.category);

                return (
                  <article
                    key={ticket.id}
                    className="group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative aspect-16/10 overflow-hidden">
                      <Image
                        src={ticket.thumbnail}
                        alt={ticket.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/15 to-transparent" />

                      <div className="absolute left-3 top-3 flex gap-2">
                        <Badge className="bg-black/55 text-white backdrop-blur-sm">{t(`categories.${categoryKey}`)}</Badge>
                        {ticket.discount ? (
                          <Badge className="bg-rose-500 text-white">{t('card.discount', { percent: ticket.discount })}</Badge>
                        ) : null}
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
                        <div className="rounded-lg bg-white/90 px-2.5 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
                          {t('card.fromLabel')}
                        </div>
                        <div className="text-right text-white">
                          <p className="text-xs uppercase tracking-wide text-white/85">{t('card.priceLabel')}</p>
                          <p className="text-xl font-extrabold">{formatPrice(ticket.priceFrom)}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 p-4">
                      <h3 className="line-clamp-2 text-lg font-bold leading-snug text-foreground">{ticket.title}</h3>

                      <div className="flex items-center justify-between gap-3 text-sm">
                        <div className="flex items-center gap-1.5 font-semibold text-amber-600">
                          <Star className="h-4 w-4 fill-current" />
                          <span>{ticket.rating.toFixed(1)}</span>
                        </div>
                        <p className="text-muted-foreground">{t('card.reviewCount', { count: ticket.reviewCount })}</p>
                      </div>

                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 shrink-0" />
                        <span>{destinationInput}</span>
                      </div>

                      <Button asChild className="w-full rounded-xl font-semibold">
                        <Link href={`/tickets/${ticket.id}`}>{t('card.viewDetail')}</Link>
                      </Button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
