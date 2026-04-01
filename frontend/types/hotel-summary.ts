export type StarRating = 1 | 2 | 3 | 4 | 5;

export interface GeoLocation {
  lat: number;
  lng: number;
}

export interface RatingBreakdown {
  cleanliness: number;
  comfort: number;
  location: number;
  facilities: number;
  staff: number;
  valueForMoney: number;
}

export interface HotelSummary {
  id: string;
  name: string;
  slug?: string;
  type: "hotel" | "resort" | "villa" | "hostel" | "apartment";

  image: string;

  location: string;

  stars: StarRating;
  rating: number;
  reviewCount: number;

  bookingCount: number;

  price: number;
  currency?: string;
  priceNote?: string;

  amenities: string[];
  description?: string;
  tags?: string[];
}

export type Hotel = HotelSummary;
