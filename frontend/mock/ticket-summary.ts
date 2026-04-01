import type { TicketSummary } from "@/types/ticket-summary";

export const ticketsSummaryMock: TicketSummary[] = [
  {
    id: "ticket-001",
    title: "Cáp Treo Bà Nà Hills & Cầu Vàng",
    thumbnail:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    rating: 4.8,
    reviewCount: 2150,
    priceFrom: 350000,
    category: "tour",
    discount: 15,
  },
  {
    id: "ticket-002",
    title: "Phố Cổ Hội An - Vé Vào Cổng",
    thumbnail:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
    rating: 4.7,
    reviewCount: 3420,
    priceFrom: 180000,
    category: "attraction",
  },
  {
    id: "ticket-003",
    title: "Bãi Biển Mỹ Khê - Tour Ngắm Hoàng Hôn",
    thumbnail:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop",
    rating: 4.6,
    reviewCount: 1890,
    priceFrom: 250000,
    category: "experience",
    discount: 10,
  },
  {
    id: "ticket-004",
    title: "Động Mỏm Non & Hòn Chim Phượng Hoàng",
    thumbnail:
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=300&fit=crop",
    rating: 4.9,
    reviewCount: 2780,
    priceFrom: 320000,
    category: "nature",
    discount: 20,
  },
  {
    id: "ticket-005",
    title: "Bảo Tàng Chứng Tích Chiến Tranh Mỹ",
    thumbnail:
      "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=400&h=300&fit=crop",
    rating: 4.5,
    reviewCount: 1560,
    priceFrom: 150000,
    category: "museum",
  },
  {
    id: "ticket-006",
    title: "Khu Du Lịch Giao Thuyền Sông Hàn",
    thumbnail:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
    rating: 4.4,
    reviewCount: 892,
    priceFrom: 400000,
    category: "tour",
    discount: 25,
  },
];

// Backward-compatible alias used by older mock consumers.
export const ticketsMockData = ticketsSummaryMock;
