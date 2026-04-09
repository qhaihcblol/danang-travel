import type { ReactNode } from 'react';
import { ChevronDown, MapPin, Minus, Plus, Search, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';

interface HotelsSearchBarProps {
  nameQuery: string;
  locationQuery: string;
  adults: number;
  childGuests: number;
  onNameQueryChange: (value: string) => void;
  onLocationQueryChange: (value: string) => void;
  onAdultsChange: (value: number) => void;
  onChildrenChange: (value: number) => void;
  onSearch: () => void;
  onReset: () => void;
  namePlaceholder: string;
  locationPlaceholder: string;
  adultsLabel: string;
  childrenLabel: string;
  searchLabel: string;
  resetLabel: string;
}

interface GuestCounterProps {
  icon: ReactNode;
  label: string;
  value: number;
  minValue: number;
  maxValue: number;
  onChange: (value: number) => void;
}

function GuestCounter({ icon, label, value, minValue, maxValue, onChange }: GuestCounterProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-border/70 bg-background px-3 py-2">
      <div className="mr-3 flex min-w-0 items-center gap-2">
        <span className="text-slate-600">{icon}</span>
        <span className="text-sm font-medium text-slate-800">{label}</span>
      </div>

      <div className="flex items-center gap-1.5">
        <Button
          type="button"
          variant="ghost"
          size="icon-xs"
          className="rounded-full text-slate-700 hover:bg-slate-200"
          onClick={() => onChange(Math.max(minValue, value - 1))}
          disabled={value <= minValue}
          aria-label={`${label} -`}
        >
          <Minus className="h-3.5 w-3.5" />
        </Button>

        <span className="min-w-8 text-center text-sm font-semibold text-slate-900">{value}</span>

        <Button
          type="button"
          variant="ghost"
          size="icon-xs"
          className="rounded-full text-slate-700 hover:bg-slate-200"
          onClick={() => onChange(Math.min(maxValue, value + 1))}
          disabled={value >= maxValue}
          aria-label={`${label} +`}
        >
          <Plus className="h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  );
}

export function HotelsSearchBar({
  nameQuery,
  locationQuery,
  adults,
  childGuests,
  onNameQueryChange,
  onLocationQueryChange,
  onAdultsChange,
  onChildrenChange,
  onSearch,
  onReset,
  namePlaceholder,
  locationPlaceholder,
  adultsLabel,
  childrenLabel,
  searchLabel,
  resetLabel,
}: HotelsSearchBarProps) {
  const totalGuests = adults + childGuests;

  return (
    <div className="w-full rounded-2xl border border-white/40 bg-white/55 p-3 shadow-2xl backdrop-blur-md sm:p-4">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="flex h-11 items-center gap-2 rounded-xl border border-white/35 bg-white/80 px-3">
            <Search className="h-4 w-4 shrink-0 text-slate-600" />
            <Input
              value={nameQuery}
              onChange={(event) => onNameQueryChange(event.target.value)}
              placeholder={namePlaceholder}
              className="h-full border-0 bg-transparent px-0 text-slate-900 shadow-none placeholder:text-slate-500 focus-visible:border-0 focus-visible:ring-0"
            />
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="flex h-11 items-center gap-2 rounded-xl border border-white/35 bg-white/80 px-3">
            <MapPin className="h-4 w-4 shrink-0 text-slate-600" />
            <Input
              value={locationQuery}
              onChange={(event) => onLocationQueryChange(event.target.value)}
              placeholder={locationPlaceholder}
              className="h-full border-0 bg-transparent px-0 text-slate-900 shadow-none placeholder:text-slate-500 focus-visible:border-0 focus-visible:ring-0"
            />
          </div>
        </div>

        <div className="lg:col-span-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                type="button"
                variant="outline"
                className="h-11 w-full justify-between rounded-xl border-white/35 bg-white/80 px-3 text-slate-800 hover:bg-white"
              >
                <span className="inline-flex items-center gap-2 overflow-hidden text-sm">
                  <Users className="h-4 w-4 shrink-0 text-slate-600" />
                  <span className="truncate text-left">
                    {totalGuests} - {adults} {adultsLabel}, {childGuests} {childrenLabel}
                  </span>
                </span>
                <ChevronDown className="h-4 w-4 shrink-0 text-slate-500" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="start"
              sideOffset={8}
              className="w-(--radix-dropdown-menu-trigger-width) rounded-xl border border-border/80 bg-white p-3 shadow-xl"
            >
              <div className="space-y-2">
                <GuestCounter
                  icon={<Users className="h-4 w-4" />}
                  label={adultsLabel}
                  value={adults}
                  minValue={1}
                  maxValue={8}
                  onChange={onAdultsChange}
                />
                <GuestCounter
                  icon={<Users className="h-4 w-4" />}
                  label={childrenLabel}
                  value={childGuests}
                  minValue={0}
                  maxValue={6}
                  onChange={onChildrenChange}
                />
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex gap-2 lg:col-span-2">
          <Button
            type="button"
            onClick={onSearch}
            className="h-11 flex-1 rounded-xl bg-primary text-primary-foreground shadow-md hover:bg-primary/90"
          >
            {searchLabel}
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={onReset}
            className="h-11 flex-1 rounded-xl bg-white/50 text-slate-700 hover:bg-white/75"
          >
            {resetLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
