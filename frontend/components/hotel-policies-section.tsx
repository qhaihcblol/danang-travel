'use client';

import { useMemo } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import type { HotelPolicies } from '@/types/hotel-detail';

type HotelPoliciesSectionProps = {
  policies?: HotelPolicies;
  currency?: string;
};

const formatPrice = (value: number, currency = 'VND', locale = 'vi-VN') => {
  if (currency === 'VND') {
    return `${value.toLocaleString(locale)}đ`;
  }

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value);
};

export function HotelPoliciesSection({ policies, currency = 'VND' }: HotelPoliciesSectionProps) {
  const t = useTranslations('hotels.detail');
  const locale = useLocale();
  const numberLocale = locale === 'ja' ? 'ja-JP' : 'vi-VN';

  const smokingLabel = useMemo(() => {
    if (!policies?.smokingPolicy) return null;

    if (policies.smokingPolicy === 'allowed') return t('policies.allowed');
    if (policies.smokingPolicy === 'not_allowed') return t('policies.notAllowed');

    return t('policies.designatedAreas');
  }, [policies?.smokingPolicy, t]);

  if (!policies) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-border/80 bg-card/55 p-5 sm:p-7">
      <h2 className="text-2xl font-bold text-foreground">{t('policies.title')}</h2>
      <p className="mt-1 text-sm text-muted-foreground sm:text-base">{t('policies.subtitle')}</p>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-border/70 bg-background/90 p-4">
          <p className="text-sm font-semibold text-foreground">{t('policies.checkIn')}</p>
          {!!policies.checkIn?.from && <p className="mt-2 text-sm text-muted-foreground">{t('policies.from', { time: policies.checkIn.from })}</p>}
          {!!policies.checkIn?.until && <p className="mt-1 text-sm text-muted-foreground">{t('policies.until', { time: policies.checkIn.until })}</p>}
          {!!policies.checkIn?.note && <p className="mt-2 text-xs text-muted-foreground">{policies.checkIn.note}</p>}
        </div>

        <div className="rounded-xl border border-border/70 bg-background/90 p-4">
          <p className="text-sm font-semibold text-foreground">{t('policies.checkOut')}</p>
          {!!policies.checkOut?.until && <p className="mt-2 text-sm text-muted-foreground">{t('policies.until', { time: policies.checkOut.until })}</p>}
          {!!policies.checkOut?.note && <p className="mt-2 text-xs text-muted-foreground">{policies.checkOut.note}</p>}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-border/70 bg-background/90 p-4">
          <p className="text-sm font-semibold text-foreground">{t('policies.children')}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {policies.childrenPolicy?.allowed ? t('policies.allowed') : t('policies.notAllowed')}
          </p>
          {typeof policies.childrenPolicy?.freeAgeLimit === 'number' && (
            <p className="mt-1 text-xs text-muted-foreground">{t('policies.freeAge', { age: policies.childrenPolicy.freeAgeLimit })}</p>
          )}
        </div>

        <div className="rounded-xl border border-border/70 bg-background/90 p-4">
          <p className="text-sm font-semibold text-foreground">{t('policies.pets')}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {policies.petPolicy?.allowed ? t('policies.allowed') : t('policies.notAllowed')}
          </p>
          {typeof policies.petPolicy?.charge === 'number' && (
            <p className="mt-1 text-xs text-muted-foreground">
              {t('policies.petCharge', {
                price: formatPrice(policies.petPolicy.charge, currency, numberLocale),
              })}
            </p>
          )}
        </div>

        <div className="rounded-xl border border-border/70 bg-background/90 p-4">
          <p className="text-sm font-semibold text-foreground">{t('policies.smoking')}</p>
          <p className="mt-2 text-sm text-muted-foreground">{smokingLabel ?? t('policies.notSpecified')}</p>
        </div>
      </div>

      {!!policies.paymentMethods?.length && (
        <div className="mt-4 rounded-xl border border-border/70 bg-background/90 p-4">
          <p className="text-sm font-semibold text-foreground">{t('policies.paymentMethods')}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {policies.paymentMethods.map((method) => (
              <span
                key={method}
                className="rounded-full border border-border/70 bg-card/40 px-3 py-1 text-xs text-foreground"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      )}

      {!!policies.extraFees?.length && (
        <div className="mt-4 rounded-xl border border-amber-200/80 bg-amber-50/60 p-4">
          <p className="text-sm font-semibold text-amber-900">{t('policies.extraFees')}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-amber-900/90">
            {policies.extraFees.map((fee) => (
              <li key={fee}>{fee}</li>
            ))}
          </ul>
        </div>
      )}

      {!!policies.importantNotes?.length && (
        <div className="mt-4 rounded-xl border border-border/70 bg-background/90 p-4">
          <p className="text-sm font-semibold text-foreground">{t('policies.importantNotes')}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {policies.importantNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      )}

      {!!policies.childrenPolicy?.notes?.length && (
        <div className="mt-4 rounded-xl border border-border/70 bg-background/90 p-4">
          <p className="text-sm font-semibold text-foreground">{t('policies.childrenNotes')}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {policies.childrenPolicy.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      )}

      {!!policies.petPolicy?.notes?.length && (
        <div className="mt-4 rounded-xl border border-border/70 bg-background/90 p-4">
          <p className="text-sm font-semibold text-foreground">{t('policies.petNotes')}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {policies.petPolicy.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
