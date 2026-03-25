import type { HotelSummary } from "@/types/hotel-summary";

export const hotelsMockData: HotelSummary[] = [
  // ─────────────────────────────────────────────────────────────
  // 1. Furama Resort Đà Nẵng
  // ─────────────────────────────────────────────────────────────
  {
    id: "hotel-1",
    name: "Furama Resort Đà Nẵng",
    slug: "furama-resort-da-nang",
    type: "resort",

    // Media
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    // Location
    location: "Bãi biển Mỹ Khê, Ngũ Hành Sơn, Đà Nẵng",
    coordinates: { lat: 16.0544, lng: 108.2478 },

    // Stars & Rating
    stars: 5,
    rating: 4.6,
    ratingBreakdown: {
      cleanliness: 4.7,
      comfort: 4.6,
      location: 4.7,
      facilities: 4.6,
      staff: 4.8,
      valueForMoney: 4.4,
    },
    reviewCount: 245,

    // Stats
    bookingCount: 1380,

    // Pricing
    price: 2500000,
    currency: "VND",
    priceNote: "Giá chưa gồm thuế và phí dịch vụ",

    // Highlight
    amenities: [
      "Hồ bơi ngoài trời",
      "Spa & Wellness",
      "Nhà hàng",
      "Trực tiếp ra biển",
      "WiFi miễn phí",
      "Bãi đỗ xe",
    ],
    description:
      "Khu nghỉ dưỡng 5 sao sang trọng bậc nhất Đà Nẵng với view biển tuyệt đẹp, hồ bơi vô cực và không gian thiên nhiên xanh mát trải dài.",
    tags: ["Best seller", "Luxury"],
  },

  // ─────────────────────────────────────────────────────────────
  // 2. Sea Harmony Hotel Đà Nẵng
  // ─────────────────────────────────────────────────────────────
  {
    id: "hotel-2",
    name: "Sea Harmony Hotel Đà Nẵng",
    slug: "sea-harmony-hotel-da-nang",
    type: "hotel",

    // Media
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop",
    // Location
    location: "Đường Bạch Đằng, Hải Châu, Đà Nẵng",
    coordinates: { lat: 16.0678, lng: 108.2208 },

    // Stars & Rating
    stars: 4,
    rating: 4.4,
    ratingBreakdown: {
      cleanliness: 4.4,
      comfort: 4.3,
      location: 4.5,
      facilities: 4.3,
      staff: 4.6,
      valueForMoney: 4.5,
    },
    reviewCount: 156,

    // Stats
    bookingCount: 910,

    // Pricing
    price: 1800000,
    currency: "VND",
    priceNote: "Đã bao gồm bữa sáng cho 2 khách",

    // Highlight
    amenities: [
      "WiFi miễn phí",
      "Nhà hàng",
      "Phòng gym",
      "Bar trên sân thượng",
      "Dịch vụ đưa đón sân bay",
    ],
    description:
      "Khách sạn 4 sao trung tâm thành phố với phòng hướng biển và sông Hàn, dịch vụ chu đáo và vị trí thuận tiện di chuyển khắp Đà Nẵng.",
    tags: ["Popular"],
  },

  // ─────────────────────────────────────────────────────────────
  // 3. Vinpearl Resort & Spa Đà Nẵng
  // ─────────────────────────────────────────────────────────────
  {
    id: "hotel-3",
    name: "Vinpearl Resort & Spa Đà Nẵng",
    slug: "vinpearl-resort-spa-da-nang",
    type: "resort",

    // Media
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop",
    // Location
    location: "Non Nước, Ngũ Hành Sơn, Đà Nẵng",
    coordinates: { lat: 16.1154, lng: 108.3187 },

    // Stars & Rating
    stars: 5,
    rating: 4.7,
    ratingBreakdown: {
      cleanliness: 4.8,
      comfort: 4.7,
      location: 4.6,
      facilities: 4.8,
      staff: 4.7,
      valueForMoney: 4.5,
    },
    reviewCount: 312,

    // Stats
    bookingCount: 1725,

    // Pricing
    price: 3200000,
    currency: "VND",
    priceNote: "Bao gồm bữa sáng & sử dụng hồ bơi không giới hạn",

    // Highlight
    amenities: [
      "Spa 5 sao",
      "Thể thao dưới nước",
      "3 Nhà hàng",
      "Kids Club",
      "Hồ bơi vô cực",
      "Private Beach",
    ],
    description:
      "Resort cao cấp ven biển với không gian rộng lớn, nhiều hồ bơi, khu spa đẳng cấp và đa dạng hoạt động vui chơi giải trí cho cả gia đình.",
    tags: ["Luxury", "Family"],
  },

  // ─────────────────────────────────────────────────────────────
  // 4. Mỹ Khê Sunrise Hotel
  // ─────────────────────────────────────────────────────────────
  {
    id: "hotel-4",
    name: "Mỹ Khê Sunrise Hotel",
    slug: "my-khe-sunrise-hotel",
    type: "hotel",

    // Media
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop",
    // Location
    location: "Đường Võ Nguyên Giáp, Mỹ Khê, Sơn Trà, Đà Nẵng",
    coordinates: { lat: 16.0609, lng: 108.2441 },

    // Stars & Rating
    stars: 4,
    rating: 4.3,
    ratingBreakdown: {
      cleanliness: 4.3,
      comfort: 4.3,
      location: 4.5,
      facilities: 4.2,
      staff: 4.4,
      valueForMoney: 4.4,
    },
    reviewCount: 189,

    // Stats
    bookingCount: 1048,

    // Pricing
    price: 1200000,
    currency: "VND",
    priceNote: "Giá chưa gồm thuế 10%",

    // Highlight
    amenities: [
      "Rooftop Bar",
      "Nhà hàng hải sản",
      "View thành phố & biển",
      "Hồ bơi",
      "WiFi miễn phí",
    ],
    description:
      "Khách sạn 4 sao ngay bãi Mỹ Khê với tầm nhìn toàn cảnh thành phố và đại dương, bar sân thượng lý tưởng cho buổi tối thư giãn.",
    tags: ["City View"],
  },

  // ─────────────────────────────────────────────────────────────
  // 5. Coastal Boutique Hotel
  // ─────────────────────────────────────────────────────────────
  {
    id: "hotel-5",
    name: "Coastal Boutique Hotel",
    slug: "coastal-boutique-hotel",
    type: "hotel",

    // Media
    image:
      "https://images.unsplash.com/photo-1562790351-d273a961e0e9?w=600&h=400&fit=crop",
    // Location
    location: "Đường Hoàng Sa, Sơn Trà, Đà Nẵng",
    coordinates: { lat: 16.1093, lng: 108.2727 },

    // Stars & Rating
    stars: 4,
    rating: 4.5,
    ratingBreakdown: {
      cleanliness: 4.5,
      comfort: 4.4,
      location: 4.4,
      facilities: 4.3,
      staff: 4.6,
      valueForMoney: 4.5,
    },
    reviewCount: 167,

    // Stats
    bookingCount: 860,

    // Pricing
    price: 950000,
    currency: "VND",
    priceNote: "Đã bao gồm bữa sáng",

    // Highlight
    amenities: [
      "Thiết kế boutique độc đáo",
      "Nhà hàng farm-to-table",
      "WiFi tốc độ cao",
      "Cho thuê xe đạp",
      "Yoga buổi sáng",
    ],
    description:
      "Khách sạn boutique nhỏ xinh phong cách Indochine hiện đại, gần bán đảo Sơn Trà yên tĩnh, lý tưởng cho các cặp đôi và du khách thích sự riêng tư.",
    tags: ["Boutique", "New"],
  },

  // ─────────────────────────────────────────────────────────────
  // 6. Grand Plaza Hotel Đà Nẵng
  // ─────────────────────────────────────────────────────────────
  {
    id: "hotel-6",
    name: "Grand Plaza Hotel Đà Nẵng",
    slug: "grand-plaza-hotel-da-nang",
    type: "hotel",

    // Media
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop",
    // Location
    location: "Đường Phan Chu Trinh, Hải Châu, Đà Nẵng",
    coordinates: { lat: 16.0586, lng: 108.2215 },

    // Stars & Rating
    stars: 4,
    rating: 4.2,
    ratingBreakdown: {
      cleanliness: 4.2,
      comfort: 4.1,
      location: 4.4,
      facilities: 4.1,
      staff: 4.3,
      valueForMoney: 4.2,
    },
    reviewCount: 234,

    // Stats
    bookingCount: 1196,

    // Pricing
    price: 850000,
    currency: "VND",
    priceNote: "Giá tốt nhất — miễn phí hủy trước 24h",

    // Highlight
    amenities: [
      "Trung tâm hội nghị",
      "Nhà hàng quốc tế",
      "Phòng họp",
      "Business Center",
      "Dịch vụ giặt là",
      "WiFi miễn phí",
    ],
    description:
      "Khách sạn tiện ích bậc nhất giữa trung tâm Đà Nẵng, phù hợp cho khách công tác với đầy đủ cơ sở vật chất hội nghị và vị trí đắc địa.",
    tags: ["Business"],
  },

  // ─────────────────────────────────────────────────────────────
  // 7. Brilliant Hotel Đà Nẵng
  // ─────────────────────────────────────────────────────────────
  {
    id: "hotel-7",
    name: "Brilliant Hotel Đà Nẵng",
    slug: "brilliant-hotel-da-nang",
    type: "hotel",

    // Media
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop",
    // Location
    location: "Đường Trần Phú, Hải Châu, Đà Nẵng",
    coordinates: { lat: 16.0631, lng: 108.2198 },

    // Stars & Rating
    stars: 4,
    rating: 4.3,
    ratingBreakdown: {
      cleanliness: 4.4,
      comfort: 4.2,
      location: 4.5,
      facilities: 4.1,
      staff: 4.3,
      valueForMoney: 4.3,
    },
    reviewCount: 201,

    // Stats
    bookingCount: 974,

    // Pricing
    price: 1050000,
    currency: "VND",
    priceNote: "Đã bao gồm bữa sáng buffet",

    // Highlight
    amenities: [
      "Hồ bơi trên sân thượng",
      "View sông Hàn",
      "Spa",
      "Nhà hàng buffet",
      "WiFi miễn phí",
    ],
    description:
      "Khách sạn 4 sao view sông Hàn lãng mạn, hồ bơi sân thượng với tầm nhìn toàn cảnh cầu Rồng, lý tưởng cho kỳ nghỉ cặp đôi và gia đình.",
    tags: ["Popular", "City View"],
  },

  // ─────────────────────────────────────────────────────────────
  // 8. Mercure Đà Nẵng French Village Bana Hills
  // ─────────────────────────────────────────────────────────────
  {
    id: "hotel-8",
    name: "Mercure Bà Nà Hills",
    slug: "mercure-da-nang-ba-na-hills",
    type: "resort",

    // Media
    image:
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&h=400&fit=crop",
    // Location
    location: "Khu du lịch Bà Nà Hills, Hòa Vang, Đà Nẵng",
    coordinates: { lat: 15.9973, lng: 107.9897 },

    // Stars & Rating
    stars: 4,
    rating: 4.4,
    ratingBreakdown: {
      cleanliness: 4.4,
      comfort: 4.3,
      location: 4.3,
      facilities: 4.4,
      staff: 4.5,
      valueForMoney: 4.2,
    },
    reviewCount: 143,

    // Stats
    bookingCount: 687,

    // Pricing
    price: 2100000,
    currency: "VND",
    priceNote: "Bao gồm vé cáp treo Bà Nà Hills",

    // Highlight
    amenities: [
      "Phong cách Pháp cổ điển",
      "Vị trí trên núi 1.487m",
      "Nhà hàng Âu",
      "Gần Golden Bridge",
      "Sưởi ấm phòng",
    ],
    description:
      "Resort phong cách làng Pháp độc đáo trên đỉnh Bà Nà Hills ở độ cao 1.487m, mang lại trải nghiệm nghỉ dưỡng trên mây hoàn toàn khác biệt.",
    tags: ["Unique", "Mountain"],
  },
];
