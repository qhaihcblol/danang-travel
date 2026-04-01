import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getLocale, getTranslations } from 'next-intl/server';
import { CircleCheck, Clock3, Info, MapPin, ShieldCheck, Sparkles, Star, Ticket, UserRound } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getTicketsDetailMock } from '@/mock';

type TicketDetailPageProps = {
  params: Promise<{ id: string }>;
};

const normalizeCategory = (value?: string) => {
  const input = (value ?? '').toLowerCase();
  if (input === 'tour') return 'tour';
  if (input === 'attraction') return 'attraction';
  if (input === 'experience') return 'experience';
  if (input === 'nature') return 'nature';
  if (input === 'museum') return 'museum';
  return 'experience';
};

const formatPrice = (value: number, locale: string) => `${value.toLocaleString(locale)}đ`;

export default async function TicketDetailPage({ params }: TicketDetailPageProps) {
  const t = await getTranslations('tickets.detail');
  const locale = await getLocale();
  const numberLocale = locale === 'ja' ? 'ja-JP' : 'vi-VN';

  const { id } = await params;
  const ticket = getTicketsDetailMock(locale).find((item) => item.id === id);

  if (!ticket) {
    notFound();
  }

  const images = ticket.gallery?.length ? ticket.gallery : [ticket.thumbnail];
  const categoryKey = normalizeCategory(ticket.category);

  return (
    <main className="min-h-screen bg-linear-to-b from-background via-background to-muted/20">
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.35fr_1fr]">
          <div className="overflow-hidden rounded-2xl border border-border/60">
            <div className="relative aspect-16/10">
              <Image
                src={images[0]}
                alt={ticket.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-2 border-t border-border/60 bg-card p-2">
              {images.slice(1, 4).map((image, index) => (
                <div key={`${ticket.id}-gallery-${index}`} className="relative aspect-4/3 overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={`${ticket.title} ${index + 2}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 33vw, 240px"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
            <div className="mb-3 flex flex-wrap gap-2">
              <Badge variant="secondary">{t(`categories.${categoryKey}`)}</Badge>
              {ticket.discount ? <Badge className="bg-rose-500 text-white">{t('discount', { percent: ticket.discount })}</Badge> : null}
            </div>

            <h1 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">{ticket.title}</h1>

            <div className="mt-4 flex items-center justify-between gap-3 text-sm">
              <p className="inline-flex items-center gap-1.5 font-semibold text-amber-600">
                <Star className="h-4 w-4 fill-current" />
                {ticket.rating.toFixed(1)}
              </p>
              <p className="text-muted-foreground">{t('reviewCount', { count: ticket.reviewCount })}</p>
            </div>

            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 shrink-0" />
                {ticket.location}
              </p>
              <p className="flex items-center gap-1.5">
                <UserRound className="h-4 w-4 shrink-0" />
                {t('operator')}: {ticket.operator ?? t('unknownOperator')}
              </p>
              <p className="flex items-center gap-1.5">
                <Ticket className="h-4 w-4 shrink-0" />
                {t('bookingCount', { count: ticket.bookingCount })}
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-primary/25 bg-primary/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t('priceFrom')}</p>
              <p className="mt-1 text-3xl font-extrabold text-foreground">{formatPrice(ticket.priceFrom, numberLocale)}</p>
            </div>

            <Button className="mt-4 h-11 w-full rounded-xl text-sm font-bold">{t('bookNow')}</Button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.35fr_1fr]">
          <div className="space-y-6">
            <section className="rounded-2xl border border-border/60 bg-card p-5">
              <div className="mb-3 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">{t('highlightsTitle')}</h2>
              </div>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {ticket.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-border/60 bg-card p-5">
              <div className="mb-4 flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">{t('packagesTitle')}</h2>
              </div>

              <div className="space-y-4">
                {ticket.packages.map((pkg) => (
                  <article key={pkg.id} className="rounded-xl border border-border/70 bg-background p-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-base font-bold text-foreground">{pkg.name}</h3>
                        {pkg.description ? <p className="mt-1 text-sm text-muted-foreground">{pkg.description}</p> : null}
                      </div>
                      <Badge variant={pkg.available ? 'default' : 'secondary'}>
                        {pkg.available ? t('package.available') : t('package.unavailable')}
                      </Badge>
                    </div>

                    <div className="mt-3 flex flex-wrap items-end gap-2">
                      <p className="text-2xl font-extrabold text-foreground">{formatPrice(pkg.price, numberLocale)}</p>
                      {pkg.originalPrice ? (
                        <p className="text-sm text-muted-foreground line-through">{formatPrice(pkg.originalPrice, numberLocale)}</p>
                      ) : null}
                    </div>

                    <div className="mt-3 grid grid-cols-1 gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                      {typeof pkg.stock === 'number' ? (
                        <p className="flex items-center gap-1.5">
                          <ShieldCheck className="h-4 w-4 shrink-0" />
                          {t('package.stock', { count: pkg.stock })}
                        </p>
                      ) : null}
                      {typeof pkg.maxPerOrder === 'number' ? (
                        <p className="flex items-center gap-1.5">
                          <ShieldCheck className="h-4 w-4 shrink-0" />
                          {t('package.maxPerOrder', { count: pkg.maxPerOrder })}
                        </p>
                      ) : null}
                      {pkg.validUntil ? (
                        <p className="flex items-center gap-1.5">
                          <Clock3 className="h-4 w-4 shrink-0" />
                          {t('package.validUntil', { date: pkg.validUntil })}
                        </p>
                      ) : null}
                    </div>

                    <div className="mt-3 space-y-3 text-sm">
                      <div>
                        <p className="font-semibold text-foreground">{t('package.benefits')}</p>
                        <ul className="mt-1 list-disc space-y-1 pl-5 text-muted-foreground">
                          {pkg.benefits.slice(0, 5).map((benefit) => (
                            <li key={benefit}>{benefit}</li>
                          ))}
                        </ul>
                      </div>

                      {!!pkg.notIncluded?.length && (
                        <div>
                          <p className="font-semibold text-foreground">{t('package.notIncluded')}</p>
                          <ul className="mt-1 list-disc space-y-1 pl-5 text-muted-foreground">
                            {pkg.notIncluded.slice(0, 3).map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            {!!ticket.policies?.length && (
              <section className="rounded-2xl border border-border/60 bg-card p-5">
                <h2 className="mb-2 text-xl font-bold text-foreground">{t('generalPoliciesTitle')}</h2>
                <Accordion type="single" collapsible>
                  {ticket.policies.map((policy, index) => (
                    <AccordionItem key={`${ticket.id}-policy-${index}`} value={`general-policy-${index}`}>
                      <AccordionTrigger>{policy.title}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{policy.content}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            )}

            {!!ticket.usageGuide?.length && (
              <section className="rounded-2xl border border-border/60 bg-card p-5">
                <h2 className="mb-3 text-xl font-bold text-foreground">{t('usageGuideTitle')}</h2>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  {ticket.usageGuide.map((step, index) => (
                    <li key={`${ticket.id}-usage-${index}`} className="rounded-lg border border-border/60 bg-background px-3 py-2">
                      {step}
                    </li>
                  ))}
                </ol>
              </section>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
