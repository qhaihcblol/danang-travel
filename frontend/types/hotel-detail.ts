import type { HotelSummary } from "@/types/hotel-summary";

export interface HotelDetailRoom {
  id: string;
  name: string;
  bed: string;
  capacity: number;
  price: number;
  quantity: number;
  amenities?: string[];
}

export interface HotelPolicy {
  checkIn: string;
  checkOut: string;
  cancellation: string;
  childrenAndBeds?: string;
}

export interface HotelContact {
  phone: string;
  email: string;
  address: string;
}

export interface HotelDetail extends HotelSummary {
  gallery: string[];
  overview: string;
  nearbyPlaces: string[];
  policies: HotelPolicy;
  contact: HotelContact;
  rooms: HotelDetailRoom[];
}
