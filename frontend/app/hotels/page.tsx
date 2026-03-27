'use client';

import { useCallback, useMemo, useState } from 'react';
import { addDays, differenceInCalendarDays, format, startOfDay } from 'date-fns';
import { ja, vi } from 'date-fns/locale';
import { BedDouble, CalendarDays, MapPin, Minus, Plus, Search, Users } from 'lucide-react';
import type { DateRange } from 'react-day-picker';
import { useLocale, useTranslations } from 'next-intl';
import { ImageCarousel } from '@/components/image-carousel';
import { ServiceCard } from '@/components/service-card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { carouselImagesMockData, hotelsSummaryMock } from '@/mock';

const carouselImages = carouselImagesMockData.map((item) => item.url);

const popularLocations = ['Bãi biển Mỹ Khê', 'Cầu Rồng', 'Bán đảo Sơn Trà', 'Bà Nà Hills', 'Hải Châu'];
const searchHistory = ['Furama Resort Đà Nẵng', 'Novotel Danang Premier Han River', 'Mường Thanh Luxury'];

const today = startOfDay(new Date());

const withTrailingEllipsis = (value: string, tailLength = 24) => {
  if (value.length <= tailLength) return value;
  return `...${value.slice(-tailLength)}`;
};

function Counter({
  label,
  decreaseAriaLabel,
  increaseAriaLabel,
  value,
  min,
  onChange,
}: {
  label: string;
  decreaseAriaLabel: string;
  increaseAriaLabel: string;
  value: number;
  min: number;
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

export default function HotelsPage() {
  const t = useTranslations('hotels.page');
  const locale = useLocale();
  const dateLocale = locale === 'ja' ? ja : vi;

  const [locationInput, setLocationInput] = useState('Đà Nẵng');
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [range, setRange] = useState<DateRange | undefined>({
    from: today,
    to: addDays(today, 1),
  });

  const nights = useMemo(() => {
    if (!range?.from || !range?.to) return 0;
    return Math.max(0, differenceInCalendarDays(range.to, range.from));
  }, [range]);

  const dayLabel = useCallback(
    (date: Date) => format(date, 'EEE, dd/MM', { locale: dateLocale }),
    [dateLocale],
  );

  const dateLabel = useMemo(() => {
    if (!range?.from && !range?.to) return t('search.date.empty');
    if (range?.from && !range?.to) return `${dayLabel(range.from)} - ${t('search.date.checkoutPlaceholder')}`;
    if (range?.from && range?.to) {
      return `${dayLabel(range.from)} - ${dayLabel(range.to)} • ${t('search.date.nights', {count: nights})}`;
    }
    return t('search.date.empty');
  }, [dayLabel, range, nights, t]);

  const guestLabel = `${t('search.guests.roomsCount', {count: rooms})} • ${t('search.guests.adultsCount', {count: adults})} • ${t('search.guests.childrenCount', {count: children})}`;

  return (
    <div className="min-h-screen bg-background">
      <main className="w-full">
        <section className="relative mb-14 sm:mb-16">
          <div className="relative">
            <ImageCarousel images={carouselImages} />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
              <h1 className="mb-3 text-3xl font-bold text-white drop-shadow-lg sm:text-4xl lg:text-5xl">{t('hero.title')}</h1>
              <p className="max-w-2xl text-base text-white/95 drop-shadow-md sm:text-lg">
                {t('hero.subtitle')}
              </p>
            </div>
          </div>
        </section>

        <section className="sticky top-18 z-30 mx-auto -mt-28 mb-14 w-full max-w-6xl px-4 sm:top-22 sm:-mt-20 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/50 bg-white/85 p-3 shadow-2xl backdrop-blur-md">
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-[1.1fr_1.25fr_1fr_auto]">
              <div className="min-w-0">
                <Popover open={isLocationOpen} onOpenChange={setIsLocationOpen}>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="flex h-14 w-full min-w-0 items-center gap-3 overflow-hidden rounded-xl border border-border/40 bg-background/80 px-4 text-left transition-colors hover:bg-background"
                    >
                    <MapPin className="h-5 w-5 text-primary" />
                    <div className="min-w-0">
                      <p className="text-[11px] font-medium text-muted-foreground">{t('search.location.label')}</p>
                      <p className="truncate text-[15px] font-normal text-foreground">{locationInput ? withTrailingEllipsis(locationInput) : t('search.location.placeholder')}</p>
                    </div>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent align="start" className="w-[min(92vw,420px)] p-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase text-muted-foreground">{t('search.location.findLabel')}</label>
                      <div className="relative">
                        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                          value={locationInput}
                          onChange={(event) => setLocationInput(event.target.value)}
                          placeholder={t('search.location.inputPlaceholder')}
                          className="h-10 w-full rounded-lg border border-input bg-background pl-9 pr-3 text-sm outline-none ring-offset-background transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      className="w-full rounded-lg border border-dashed border-primary/50 bg-primary/5 px-3 py-2 text-left text-sm transition-colors hover:bg-primary/10"
                    >
                      <p className="font-semibold text-primary">{t('search.location.myLocationTitle')}</p>
                      <p className="text-muted-foreground">{t('search.location.myLocationSubtitle')}</p>
                    </button>

                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase text-muted-foreground">{t('search.location.searchHistory')}</p>
                      <div className="space-y-1">
                        {searchHistory.map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => {
                              setLocationInput(item);
                              setIsLocationOpen(false);
                            }}
                            className="block w-full rounded-md px-2 py-1.5 text-left text-sm hover:bg-muted"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase text-muted-foreground">{t('search.location.popularLocations')}</p>
                      <div className="flex flex-wrap gap-2">
                        {popularLocations.map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => {
                              setLocationInput(item);
                              setIsLocationOpen(false);
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
              </div>

              <div className="min-w-0">
                <Popover open={isDateOpen} onOpenChange={setIsDateOpen}>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="flex h-14 w-full min-w-0 items-center gap-3 overflow-hidden rounded-xl border border-border/40 bg-background/80 px-4 text-left transition-colors hover:bg-background"
                    >
                    <CalendarDays className="h-5 w-5 text-primary" />
                    <div className="min-w-0">
                      <p className="text-[11px] font-medium text-muted-foreground">{t('search.date.label')}</p>
                      <p className="truncate text-[15px] font-normal text-foreground">{dateLabel}</p>
                    </div>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent align="center" className="w-[min(94vw,680px)] overflow-hidden rounded-2xl border-border/70 bg-white p-0 shadow-2xl">
                  <div className="px-5 pt-4 pb-3">
                  <Calendar
                    mode="range"
                    locale={dateLocale}
                    numberOfMonths={2}
                    selected={range}
                    onSelect={setRange}
                    disabled={{ before: today }}
                    className="w-full rounded-xl border border-border/50 bg-white"
                    formatters={{
                      formatCaption: (date) => {
                        if (locale === 'ja') {
                          return format(date, 'yyyy年M月', { locale: ja });
                        }
                        return `Th${date.getMonth() + 1} ${date.getFullYear()}`;
                      },
                      formatWeekdayName: (date) => {
                        if (locale === 'ja') {
                          const labels = ['日', '月', '火', '水', '木', '金', '土'];
                          return labels[date.getDay()];
                        }
                        const labels = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
                        return labels[date.getDay()];
                      },
                    }}
                    classNames={{
                      month_caption: 'flex h-8 w-full items-center justify-center text-center text-lg font-semibold',
                      range_start: 'bg-primary/[0.18] text-foreground rounded-md',
                      range_middle: 'bg-primary/10 text-foreground',
                      range_end: 'bg-primary/[0.18] text-foreground rounded-md',
                      today: 'bg-primary/10 text-foreground rounded-md',
                      weekdays: 'grid grid-cols-7 gap-1 mt-2',
                      weekday: 'text-center text-xs font-medium text-foreground/75',
                      week: 'grid grid-cols-7 gap-1 mt-1',
                      day: 'text-sm',
                    }}
                  />
                  </div>

                  <div className="border-t border-border/60 px-5 py-2 text-right">
                    <button
                      type="button"
                      onClick={() => setRange(undefined)}
                      className="rounded-md bg-muted px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted/80"
                    >
                      {t('search.date.clear')}
                    </button>
                  </div>
                  </PopoverContent>
                </Popover>
              </div>

              <div className="min-w-0">
                <Popover open={isGuestOpen} onOpenChange={setIsGuestOpen}>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="flex h-14 w-full min-w-0 items-center gap-3 overflow-hidden rounded-xl border border-border/40 bg-background/80 px-4 text-left transition-colors hover:bg-background"
                    >
                    <Users className="h-5 w-5 text-primary" />
                    <div className="min-w-0">
                      <p className="text-[11px] font-medium text-muted-foreground">{t('search.guests.label')}</p>
                      <p className="truncate text-[15px] font-normal text-foreground">{guestLabel}</p>
                    </div>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent align="end" className="w-[min(92vw,360px)] p-4">
                  <Counter
                    label={t('search.guests.rooms')}
                    decreaseAriaLabel={t('search.guests.decreaseRooms')}
                    increaseAriaLabel={t('search.guests.increaseRooms')}
                    value={rooms}
                    min={1}
                    onChange={setRooms}
                  />
                  <Counter
                    label={t('search.guests.adults')}
                    decreaseAriaLabel={t('search.guests.decreaseAdults')}
                    increaseAriaLabel={t('search.guests.increaseAdults')}
                    value={adults}
                    min={1}
                    onChange={setAdults}
                  />
                  <Counter
                    label={t('search.guests.children')}
                    decreaseAriaLabel={t('search.guests.decreaseChildren')}
                    increaseAriaLabel={t('search.guests.increaseChildren')}
                    value={children}
                    min={0}
                    onChange={setChildren}
                  />
                  <Button className="mt-3 w-full" onClick={() => setIsGuestOpen(false)}>
                    {t('search.guests.done')}
                  </Button>
                  </PopoverContent>
                </Popover>
              </div>

              <Button className="h-14 rounded-xl px-6 font-semibold">
                <Search className="mr-2 h-4 w-4" />
                {t('search.submit')}
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto mb-16 max-w-7xl pt-2 px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-3">
            <BedDouble className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{t('featuredHotelsTitle')}</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hotelsSummaryMock.map((hotel) => (
              <ServiceCard key={hotel.id} {...hotel} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
