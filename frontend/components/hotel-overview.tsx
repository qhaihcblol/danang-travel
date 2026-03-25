'use client';

import { useMemo, useState } from 'react';

type HotelOverviewProps = {
  overview: string;
};

const OVERVIEW_PREVIEW_CHAR_LIMIT = 320;

export function HotelOverview({ overview }: HotelOverviewProps) {
  const [expanded, setExpanded] = useState(false);

  const canExpand = useMemo(() => overview.length > OVERVIEW_PREVIEW_CHAR_LIMIT, [overview.length]);

  return (
    <section className="rounded-xl border border-border/70 bg-background px-4 py-3">
      <h2 className="text-sm font-semibold text-muted-foreground">Overview</h2>
      <p
        className="mt-2 text-sm leading-7 text-foreground/90"
        style={
          !expanded
            ? {
                display: '-webkit-box',
                WebkitLineClamp: 4,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }
            : undefined
        }
      >
        {overview}
      </p>

      {canExpand && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          {expanded ? 'Thu gọn' : 'Xem chi tiết'}
        </button>
      )}
    </section>
  );
}
