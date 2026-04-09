export interface HotelLocation {
  lat: number;
  lng: number;
}

export interface HotelPriceRange {
  min: number;
  max: number;
  currency: string;
}

export interface HotelRoomCapacity {
  adults: number;
  children: number;
}

export interface HotelRoom {
  type: string;
  description: string;
  coverImage: string;
  gallery: string[];
  capacity: HotelRoomCapacity[];
  price: number;
  currency: string;
  bedType: string;
  quantity: number;
  area: number;
  amenities: string[];
}

export interface HotelCheckInOutPolicy {
  checkInFrom: string;
  checkOutBefore: string;
  earlyCheckIn: string;
  lateCheckOut: string;
}

export interface HotelChildrenPolicy {
  policy: string;
  freeStay: string;
  extraBed: string;
}

export interface HotelCancellationPolicy {
  freeCancellationWindow: string;
  lateCancellationFee: string;
  noShowFee: string;
}

export interface HotelSmokingPolicy {
  inRoom: string;
  penalty: string;
  designatedArea: string;
}

export interface HotelPetsPolicy {
  allowed: string;
  fee?: string;
  note?: string;
  serviceAnimal?: string;
}

export interface HotelPaymentPolicy {
  acceptedMethods: string[];
  deposit: string;
  vat: string;
}

export interface HotelPolicies {
  checkInOut: HotelCheckInOutPolicy;
  children: HotelChildrenPolicy;
  cancellation: HotelCancellationPolicy;
  smoking: HotelSmokingPolicy;
  pets: HotelPetsPolicy;
  payment: HotelPaymentPolicy;
  other: string[];
}

export interface Hotel {
  id: string;
  name: string;
  address: string;
  highlights: string[];
  coverImage: string;
  gallery: string[];
  shortDescription: string;
  description: string;
  stars: number;
  rating: number;
  reviewCount: number;
  location: HotelLocation;
  priceRange: HotelPriceRange;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  amenities: string[];
  rooms: HotelRoom[];
  policies: HotelPolicies;
}
