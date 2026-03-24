export interface HotelSummary {
  id: string;
  name: string;
  image: string;
  location: string;
  stars: number;
  rating: number;
  reviewCount: number;
  bookingCount: number;
  price: number;
  type: "hotel";
  amenities: string[];
  description?: string;
}

export type Hotel = HotelSummary;
