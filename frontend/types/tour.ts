export interface Tour {
  id: string;
  name: string;
  image: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  type: "tour";
  duration?: string;
  groupSize?: string;
  description?: string;
  highlights?: string[];
}
