export interface FeatureHotelLocation {
  lat: number;
  lng: number;
}

export interface FeatureHotel {
  id: string;
  name: string;
  address: string;
  highlights: string[];
  coverImage: string;
  shortDescription: string;
  stars: number;
  rating: number;
  reviewCount: number;
  location: FeatureHotelLocation;
}
