import { SlidersHorizontal, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HotelsFilterSidebarProps {
  locale: string;
  title: string;
  description: string;
  clearLabel: string;
  starsLabel: string;
  maxBudgetLabel: string;
  minRatingLabel: string;
  amenitiesLabel: string;
  roomTypesLabel: string;
  petPolicyLabel: string;
  petFriendlyOnlyLabel: string;
  emptyAmenitiesLabel: string;
  emptyRoomTypesLabel: string;
  starOptions: number[];
  selectedStars: number[];
  maxPrice: number;
  maxPriceLimit: number;
  minRating: number;
  amenityOptions: string[];
  selectedAmenities: string[];
  roomTypeOptions: string[];
  selectedRoomTypes: string[];
  petFriendlyOnly: boolean;
  onToggleStar: (star: number) => void;
  onMaxPriceChange: (value: number) => void;
  onMinRatingChange: (value: number) => void;
  onToggleAmenity: (amenity: string) => void;
  onToggleRoomType: (roomType: string) => void;
  onPetFriendlyOnlyChange: (value: boolean) => void;
  onClearFilters: () => void;
}

function CheckboxPill({
  label,
  checked,
  onToggle,
}: {
  label: string;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={checked}
      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
        checked
          ? 'border-primary/50 bg-primary/12 text-primary shadow-sm'
          : 'border-border/80 bg-background text-muted-foreground hover:border-primary/25 hover:text-foreground'
      }`}
    >
      {label}
    </button>
  );
}

export function HotelsFilterSidebar({
  locale,
  title,
  description,
  clearLabel,
  starsLabel,
  maxBudgetLabel,
  minRatingLabel,
  amenitiesLabel,
  roomTypesLabel,
  petPolicyLabel,
  petFriendlyOnlyLabel,
  emptyAmenitiesLabel,
  emptyRoomTypesLabel,
  starOptions,
  selectedStars,
  maxPrice,
  maxPriceLimit,
  minRating,
  amenityOptions,
  selectedAmenities,
  roomTypeOptions,
  selectedRoomTypes,
  petFriendlyOnly,
  onToggleStar,
  onMaxPriceChange,
  onMinRatingChange,
  onToggleAmenity,
  onToggleRoomType,
  onPetFriendlyOnlyChange,
  onClearFilters,
}: HotelsFilterSidebarProps) {
  const currencyFormatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 0,
  });

  return (
    <aside className="rounded-3xl border border-border/80 bg-card/95 p-5 shadow-sm lg:sticky lg:top-24 lg:p-6">
      <div className="mb-5 flex items-start justify-between gap-3 border-b border-border/70 pb-5">
        <div>
          <p className="mb-1 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
            <Sparkles className="h-3.5 w-3.5" />
            {title}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={onClearFilters}
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          {clearLabel}
        </Button>
      </div>

      <div className="space-y-6">
        <section>
          <h3 className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
            <SlidersHorizontal className="h-4 w-4 text-primary" />
            {starsLabel}
          </h3>
          <div className="flex flex-wrap gap-2">
            {starOptions.map((star) => (
              <CheckboxPill
                key={star}
                label={`${star}★`}
                checked={selectedStars.includes(star)}
                onToggle={() => onToggleStar(star)}
              />
            ))}
          </div>
        </section>

        <section>
          <div className="mb-3 flex items-center justify-between gap-2">
            <h3 className="text-sm font-semibold text-foreground">{maxBudgetLabel}</h3>
            <span className="text-xs font-semibold text-primary">
              {currencyFormatter.format(maxPrice)}
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={Math.max(maxPriceLimit, 1)}
            step={50000}
            value={maxPrice}
            onChange={(event) => onMaxPriceChange(Number(event.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-muted accent-primary"
          />
        </section>

        <section>
          <div className="mb-3 flex items-center justify-between gap-2">
            <h3 className="text-sm font-semibold text-foreground">{minRatingLabel}</h3>
            <span className="text-xs font-semibold text-primary">{minRating.toFixed(1)}+</span>
          </div>
          <input
            type="range"
            min={0}
            max={5}
            step={0.1}
            value={minRating}
            onChange={(event) => onMinRatingChange(Number(event.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-muted accent-primary"
          />
        </section>

        <section>
          <h3 className="mb-3 text-sm font-semibold text-foreground">{amenitiesLabel}</h3>
          {amenityOptions.length === 0 ? (
            <p className="text-xs text-muted-foreground">{emptyAmenitiesLabel}</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {amenityOptions.map((amenity) => (
                <CheckboxPill
                  key={amenity}
                  label={amenity}
                  checked={selectedAmenities.includes(amenity)}
                  onToggle={() => onToggleAmenity(amenity)}
                />
              ))}
            </div>
          )}
        </section>

        <section>
          <h3 className="mb-3 text-sm font-semibold text-foreground">{roomTypesLabel}</h3>
          {roomTypeOptions.length === 0 ? (
            <p className="text-xs text-muted-foreground">{emptyRoomTypesLabel}</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {roomTypeOptions.map((roomType) => (
                <CheckboxPill
                  key={roomType}
                  label={roomType}
                  checked={selectedRoomTypes.includes(roomType)}
                  onToggle={() => onToggleRoomType(roomType)}
                />
              ))}
            </div>
          )}
        </section>

        <section>
          <h3 className="mb-3 text-sm font-semibold text-foreground">{petPolicyLabel}</h3>
          <label className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground">
            <input
              type="checkbox"
              checked={petFriendlyOnly}
              onChange={(event) => onPetFriendlyOnlyChange(event.target.checked)}
              className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
            />
            {petFriendlyOnlyLabel}
          </label>
        </section>
      </div>
    </aside>
  );
}
