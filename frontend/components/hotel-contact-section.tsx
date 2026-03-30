'use client';

import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import type { HotelContact } from '@/types/hotel-detail';
import { Button } from '@/components/ui/button';

type HotelContactSectionProps = {
  contact?: HotelContact;
  fallbackAddress?: string;
};

export function HotelContactSection({
  contact,
  fallbackAddress,
}: HotelContactSectionProps) {
  const t = useTranslations('hotels.detail');

  const mapUrl = useMemo(() => {
    if (contact?.googleMapsUrl) {
      return contact.googleMapsUrl;
    }

    if (contact?.coordinates) {
      return `https://maps.google.com/?q=${contact.coordinates.lat},${contact.coordinates.lng}`;
    }

    if (contact?.address) {
      return `https://maps.google.com/?q=${encodeURIComponent(contact.address)}`;
    }

    if (fallbackAddress) {
      return `https://maps.google.com/?q=${encodeURIComponent(fallbackAddress)}`;
    }

    return undefined;
  }, [contact?.address, contact?.coordinates, contact?.googleMapsUrl, fallbackAddress]);

  if (!contact && !fallbackAddress) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-border/80 bg-card/55 p-5 sm:p-7">
      <h2 className="text-2xl font-bold text-foreground">{t('contact.title')}</h2>
      <p className="mt-1 text-sm text-muted-foreground sm:text-base">{t('contact.subtitle')}</p>

      <div className="mt-5 space-y-3">
        {!!contact?.phone && (
          <div className="rounded-xl border border-border/70 bg-background/90 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t('contact.phone')}</p>
            <div className="mt-2 flex items-center justify-between gap-3">
              <p className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                <Phone className="h-4 w-4 text-muted-foreground" />
                {contact.phone}
              </p>
              <Button asChild size="sm" variant="outline" className="shrink-0">
                <a href={`tel:${contact.phone}`}>{t('contact.callNow')}</a>
              </Button>
            </div>
          </div>
        )}

        {!!contact?.email && (
          <div className="rounded-xl border border-border/70 bg-background/90 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t('contact.email')}</p>
            <div className="mt-2 flex items-center justify-between gap-3">
              <p className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                <Mail className="h-4 w-4 text-muted-foreground" />
                {contact.email}
              </p>
              <Button asChild size="sm" variant="outline" className="shrink-0">
                <a href={`mailto:${contact.email}`}>{t('contact.sendEmail')}</a>
              </Button>
            </div>
          </div>
        )}

        {(!!contact?.address || !!fallbackAddress) && (
          <div className="rounded-xl border border-border/70 bg-background/90 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t('contact.address')}</p>
            <p className="mt-2 inline-flex items-start gap-2 text-sm text-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <span>{contact?.address ?? fallbackAddress}</span>
            </p>
          </div>
        )}

        {!!contact?.website && (
          <div className="rounded-xl border border-border/70 bg-background/90 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t('contact.website')}</p>
            <a
              href={contact.website}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              {contact.website}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        )}
      </div>

      {!!mapUrl && (
        <Button asChild variant="default" className="mt-4 w-full sm:w-auto">
          <a href={mapUrl} target="_blank" rel="noreferrer">
            <MapPin className="h-4 w-4" />
            {t('contact.openMap')}
          </a>
        </Button>
      )}
    </section>
  );
}
