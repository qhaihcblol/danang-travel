'use client';

import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import type { FacilityGroup, HotelServicesAndFacilities } from '@/types/hotel-detail';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

type HotelFacilitiesSectionProps = {
  servicesAndFacilities?: HotelServicesAndFacilities;
  fallbackAmenities?: string[];
};

const legacyGroupKeys = [
  'general',
  'business',
  'housekeeping',
  'reception',
  'fitnessAndWellness',
  'foodAndDrink',
  'transport',
  'accessibility',
] as const;

export function HotelFacilitiesSection({
  servicesAndFacilities,
  fallbackAmenities = [],
}: HotelFacilitiesSectionProps) {
  const t = useTranslations('hotels.detail');

  const featured = servicesAndFacilities?.featured ?? [];

  const groups = useMemo(() => {
    if (servicesAndFacilities?.groups?.length) {
      return servicesAndFacilities.groups;
    }

    const legacyGroups: FacilityGroup[] = legacyGroupKeys
      .map((key) => {
        const items = servicesAndFacilities?.[key] ?? [];

        if (!items.length) return null;

        return {
          label: t(`facilities.legacyLabels.${key}`),
          items,
        } as FacilityGroup;
      })
      .filter((group): group is FacilityGroup => !!group);

    if (legacyGroups.length) return legacyGroups;

    if (!fallbackAmenities.length) return [];

    return [
      {
        label: t('facilities.fallbackLabel'),
        items: fallbackAmenities,
      },
    ];
  }, [fallbackAmenities, servicesAndFacilities, t]);

  if (!groups.length && !featured.length) {
    return null;
  }

  return (
    <section className="mt-8 rounded-2xl border border-border/80 bg-card/55 p-5 sm:p-7 lg:p-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{t('facilities.title')}</h2>
          <p className="mt-1 text-base text-muted-foreground">{t('facilities.subtitle')}</p>
        </div>
        <Badge variant="secondary" className="w-fit rounded-full px-3 py-1.5 text-sm">
          {t('facilities.totalGroups', { count: groups.length })}
        </Badge>
      </div>

      {!!featured.length && (
        <div className="mt-5 rounded-xl border border-border/70 bg-background/80 p-4">
          <p className="text-sm font-semibold text-foreground">{t('facilities.featured')}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {featured.map((item) => (
              <span
                key={item}
                className="rounded-full border border-sky-200/80 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-800"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-5 rounded-xl border border-border/70 bg-background/90 px-4 sm:px-5">
        <Accordion type="multiple" className="w-full">
          {groups.map((group, index) => (
            <AccordionItem key={`${group.label}-${index}`} value={`${group.label}-${index}`}>
              <AccordionTrigger className="py-4 text-base font-semibold text-foreground hover:no-underline">
                <div className="flex w-full items-center justify-between gap-3 pr-2">
                  <span>{group.label}</span>
                  <span className="rounded-full border border-border/70 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    {t('facilities.groupItems', { count: group.items.length })}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 gap-2 pb-1 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <div
                      key={`${group.label}-${item}`}
                      className="rounded-lg border border-border/70 bg-card/30 px-3 py-2 text-sm text-foreground"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
