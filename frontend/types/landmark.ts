export interface Landmark {
  id: string;
  name: string;
  image: string;
  location: string;
  rating: number;
  reviews: number;
  type: "attraction";
  description?: string;
  openingHours?: string;
  visitDuration?: string;
}
