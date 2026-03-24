export interface Ticket {
  id: string;
  name: string;
  image: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  type: "ticket";
  validity?: string;
  benefits?: string[];
  description?: string;
}
