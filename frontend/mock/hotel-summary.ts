import type { HotelSummary } from "@/types/hotel-summary";

export const hotelsSummaryMock: HotelSummary[] = [
  // ================================================================
  // 1. THE SHIN HOTEL & SPA ★★★★★
  // ==============================data==================================
  {
    id: "hotel-001",
    name: "The Shin Hotel & Spa",
    slug: "the-shin-hotel-spa-da-nang",
    type: "hotel",
    image: "https://images.unsplash.com/photunsplasho-1566073771259-6a8506099945?w=800",
    location: "Võ Nguyên Giáp, Mỹ Khê, Đà Nẵng",
    stars: 5,
    rating: 9.2,
    reviewCount: 1284,
    bookingCount: 4350,
    price: 2_850_000,
    currency: "VND",
    priceNote: "Giá mỗi đêm, đã bao gồm thuế",
    amenities: [
      "Hồ bơi vô cực",
      "Spa",
      "Bãi biển riêng",
      "Nhà hàng",
      "Bar",
      "Gym",
      "WiFi miễn phí",
    ],
    description:
      "Tọa lạc ngay sát biển Mỹ Khê – một trong những bãi biển đẹp nhất hành tinh – The Shin Hotel & Spa mang đến trải nghiệm nghỉ dưỡng đẳng cấp 5 sao với hồ bơi vô cực hướng biển và dịch vụ spa được đánh giá cao nhất Đà Nẵng.",
    tags: ["Hướng biển", "Hồ bơi vô cực", "Spa", "Bãi biển riêng"],
  },

  // ================================================================
  // 2. AZURA BOUTIQUE RESORT ★★★★
  // ================================================================
  {
    id: "hotel-002",
    name: "Azura Boutique Resort",
    slug: "azura-boutique-resort-da-nang",
    type: "resort",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    location: "Trường Sa, Ngũ Hành Sơn, Đà Nẵng",
    stars: 4,
    rating: 8.8,
    reviewCount: 743,
    bookingCount: 2110,
    price: 1_650_000,
    currency: "VND",
    priceNote: "Giá mỗi đêm, chưa bao gồm thuế",
    amenities: [
      "Hồ bơi ngoài trời",
      "Nhà hàng",
      "Bar bãi biển",
      "Yoga",
      "WiFi miễn phí",
      "Xe đạp miễn phí",
    ],
    description:
      "Azura Boutique Resort mang phong cách Mediterranean ấm áp, nằm sát biển Non Nước yên tĩnh. Lý tưởng cho những cặp đôi và du khách tìm kiếm sự bình yên, xa rời ồn ào.",
    tags: ["Boutique", "Yên tĩnh", "Mediterranean", "Non Nước"],
  },

  // ================================================================
  // 3. DA NANG CENTRAL HOSTEL ★★★
  // ================================================================
  {
    id: "hotel-003",
    name: "Da Nang Central Hostel",
    slug: "da-nang-central-hostel",
    type: "hostel",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800",
    location: "Trần Phú, Hải Châu, Đà Nẵng",
    stars: 3,
    rating: 8.4,
    reviewCount: 2891,
    bookingCount: 8760,
    price: 220_000,
    currency: "VND",
    priceNote: "Giá mỗi giường/đêm, đã bao gồm thuế",
    amenities: [
      "Phòng ký túc xá",
      "Bếp chung",
      "Khu vực co-working",
      "WiFi tốc độ cao",
      "Tủ khóa miễn phí",
      "Tour miễn phí hàng ngày",
    ],
    description:
      "Hostel sôi động nhất trung tâm Đà Nẵng, chỉ 5 phút đi bộ đến Cầu Rồng. Điểm gặp gỡ lý tưởng cho du khách ba lô muốn khám phá thành phố và kết bạn mới.",
    tags: ["Trung tâm", "Ba lô", "Co-working", "Gần Cầu Rồng"],
  },

  // ================================================================
  // 4. SOLEIL APARTMENT HOTEL ★★★★
  // ================================================================
  {
    id: "hotel-004",
    name: "Soleil Apartment Hotel",
    slug: "soleil-apartment-hotel-da-nang",
    type: "apartment",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    location: "Phạm Văn Đồng, Sơn Trà, Đà Nẵng",
    stars: 4,
    rating: 8.9,
    reviewCount: 512,
    bookingCount: 1430,
    price: 1_200_000,
    currency: "VND",
    priceNote: "Giá/đêm, phù hợp lưu trú dài ngày",
    amenities: [
      "Bếp đầy đủ tiện nghi",
      "Máy giặt riêng",
      "Hồ bơi",
      "Bãi đỗ xe",
      "WiFi tốc độ cao",
      "Smart TV Netflix",
    ],
    description:
      "Căn hộ khách sạn cao cấp nằm trên đại lộ Phạm Văn Đồng, lý tưởng cho gia đình và khách lưu trú dài ngày. Mỗi căn hộ có bếp đầy đủ tiện nghi, phòng giặt và ban công riêng.",
    tags: ["Căn hộ", "Gia đình", "Lưu trú dài ngày", "Có bếp"],
  },

  // ================================================================
  // 5. VELA GRAND RESORT ★★★★★
  // ================================================================
  {
    id: "hotel-005",
    name: "Vela Grand Resort",
    slug: "vela-grand-resort-da-nang",
    type: "resort",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
    location: "Hoàng Sa, Mỹ Khê, Đà Nẵng",
    stars: 5,
    rating: 9.5,
    reviewCount: 3102,
    bookingCount: 9840,
    price: 4_500_000,
    currency: "VND",
    priceNote: "Giá mỗi đêm, đã bao gồm bữa sáng",
    amenities: [
      "3 hồ bơi",
      "Bãi biển riêng 200m",
      "Khu spa rộng 2000m²",
      "5 nhà hàng",
      "Casino",
      "Trẻ em miễn phí",
    ],
    description:
      "Vela Grand Resort là biểu tượng nghỉ dưỡng sang trọng bậc nhất Đà Nẵng với khuôn viên 8 hecta trải dài theo bờ biển Mỹ Khê. Điểm đến lý tưởng cho hội nghị, đám cưới và kỳ nghỉ gia đình đẳng cấp.",
    tags: ["5 sao", "Mega resort", "MICE", "Đám cưới", "Gia đình"],
  },
];
