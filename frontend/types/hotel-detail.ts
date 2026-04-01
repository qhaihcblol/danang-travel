import type {
  GeoLocation,
  HotelSummary,
  RatingBreakdown,
} from "@/types/hotel-summary";

export type {
  GeoLocation,
  Hotel,
  HotelSummary,
  RatingBreakdown,
  StarRating,
} from "@/types/hotel-summary";

// ============================================================
// ROOM
// ============================================================

export type BedType =
  | "single"
  | "double"
  | "twin"
  | "king"
  | "queen"
  | "bunk"
  | "sofa_bed";

export interface RoomBed {
  type: BedType;
  count: number;
}

export interface RoomCapacity {
  adults: number;
  children?: number;
}
export interface RoomVariant {
  id: string;
  beds: RoomBed[];
  capacity: RoomCapacity;
  price: number;
  cancellationPolicy?: string;
  breakfast: boolean;
  availableCount?: number;
}
export interface RoomType {
  id: string;
  name: string;
  type?: string;
  roomVariants: RoomVariant[];
  // Area
  sizeM2?: number;
  view?: string;

  // Media & amenities
  gallery?: string[];
  amenities?: string[];
}

// ============================================================
// SERVICES & FACILITIES
// ============================================================

export interface FacilityGroup {
  label: string; // "Thể dục & Sức khỏe"
  icon?: string; // icon key hoặc URL
  items: string[];
}

export interface HotelServicesAndFacilities {
  featured?: string[]; // hiển thị nổi bật trên hero
  groups?: FacilityGroup[]; // thay thế các field rời rạc cũ

  // Giữ lại các nhóm tường minh nếu cần typed access
  general?: string[];
  business?: string[];
  housekeeping?: string[];
  reception?: string[];
  fitnessAndWellness?: string[];
  foodAndDrink?: string[];
  transport?: string[];
  accessibility?: string[];
}

// ============================================================
// POLICIES
// ============================================================

export interface CheckInPolicy {
  from: string; // "14:00"
  until?: string; // "12:00"
  note?: string;
}

export interface CheckOutPolicy {
  until: string; // "12:00"
  note?: string;
}

export interface HotelPolicies {
  checkIn?: CheckInPolicy;
  checkOut?: CheckOutPolicy;

  childrenPolicy?: {
    allowed: boolean;
    notes?: string[];
    freeAgeLimit?: number; // trẻ dưới X tuổi miễn phí
  };

  petPolicy?: {
    allowed: boolean;
    notes?: string[];
    charge?: number;
  };

  paymentMethods?: string[]; // "Visa" | "MasterCard" | "Tiền mặt"
  extraFees?: string[];
  importantNotes?: string[];
  smokingPolicy?: "allowed" | "not_allowed" | "designated_areas";
}

// ============================================================
// CONTACT & LOCATION
// ============================================================

export interface HotelContact {
  phone: string;
  email: string;
  address: string;
  website?: string;
  googleMapsUrl?: string;
  coordinates?: GeoLocation;
}

// ============================================================
// HIGHLIGHTS
// ============================================================

export interface HotelFeatureHighlight {
  icon?: string; // icon key để render
  title: string;
  description?: string;
  badge?: string; // "Mới" | "Hot"
}

// ============================================================
// NEARBY PLACES
// ============================================================

export interface NearbyPlace {
  name: string;
  category?: string; // "Bãi biển" | "Sân bay" | "Nhà hàng"
  distanceKm?: number;
  travelTimeMin?: number;
  icon?: string;
}

// ============================================================
// SEO / META
// ============================================================

export interface HotelMeta {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
}

// ============================================================
// HOTEL DETAIL  (full page)
// ============================================================

export interface HotelDetail extends HotelSummary {
  // Media
  gallery: string[];
  videoUrl?: string;

  // Content
  overview?: string;
  highlights?: HotelFeatureHighlight[];
  nearbyPlaces?: NearbyPlace[]; // typed thay vì string[]

  // Location
  coordinates?: GeoLocation;

  // Core data
  rooms: RoomType[];
  servicesAndFacilities?: HotelServicesAndFacilities;
  policies?: HotelPolicies;
  contact?: HotelContact;

  // Reviews
  ratingBreakdown?: RatingBreakdown;
  topReviews?: HotelReview[];

  // Meta
  meta?: HotelMeta;
  lastUpdated?: string; // ISO date string
}

export interface HotelReview {
  id: string;
  author: string;
  avatarUrl?: string;
  rating: number;
  title?: string;
  content: string;
  date: string;
  stayType?: "business" | "couple" | "family" | "solo" | "group";
  roomName?: string;
}
