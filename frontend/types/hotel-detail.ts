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

export type RoomStatus = "available" | "limited" | "sold_out";

export interface HotelDetailRoom {
  id: string;
  name: string;
  type?: string; // "Deluxe" | "Suite" | "Standard" ...

  // Bed & capacity
  beds: RoomBed[];
  capacity: number; // số khách tối đa
  extraBedAllowed?: boolean;
  extraBedCharge?: number;

  // Area
  sizeM2?: number; // diện tích m²
  floor?: string; // "Tầng 3–5"
  view?: string; // "Hướng biển" | "Hướng thành phố"

  // Pricing
  price: number; // giá / đêm
  originalPrice?: number; // giá gốc (để show % giảm)
  currency?: string;
  priceIncludes?: string[]; // "Bữa sáng" | "Thuế VAT"

  // Availability
  quantity: number; // tổng số phòng loại này
  status?: RoomStatus;
  availableCount?: number; // số phòng còn trống

  // Media & amenities
  gallery?: string[];
  amenities?: string[];
  highlights?: string[]; // "Bồn tắm riêng" | "Ban công"

  // Policy
  cancellationPolicy?: string;
  mealPlan?:
    | "room_only"
    | "breakfast"
    | "half_board"
    | "full_board"
    | "all_inclusive";
  paymentPolicy?: "pay_now" | "pay_later" | "pay_at_hotel";
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
  from?: string;
  note?: string;
}

export interface CancellationPolicy {
  type: "free" | "partial" | "non_refundable";
  description: string;
  deadline?: string; // "trước 24h"
}

export interface HotelPolicies {
  checkIn?: CheckInPolicy;
  checkOut?: CheckOutPolicy;
  cancellation?: CancellationPolicy;

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

  // Core data
  rooms: HotelDetailRoom[];
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

// ============================================================
// REVIEW  (bonus — thường cần trong detail page)
// ============================================================

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
