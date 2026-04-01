export interface TicketSummary {
  id: string;
  title: string;
  thumbnail: string;
  rating: number;
  reviewCount: number;
  priceFrom: number;
  category?: string; // loại vé (museum, tour, food, etc)
  discount?: number; // % hoặc giá tuyệt đối
}
