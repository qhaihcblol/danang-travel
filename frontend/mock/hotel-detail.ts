import type { HotelDetail } from "@/types/hotel-detail";

export const hotelsDetailMockData: HotelDetail[] = [
  // ═══════════════════════════════════════════════════════════════
  // 1. Furama Resort Đà Nẵng
  // ═══════════════════════════════════════════════════════════════
  {
    // ── HotelSummary fields ──────────────────────────────────────
    id: "hotel-1",
    name: "Furama Resort Đà Nẵng",
    slug: "furama-resort-da-nang",
    type: "resort",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop",
    ],
    location: "Bãi biển Mỹ Khê, Ngũ Hành Sơn, Đà Nẵng",
    coordinates: { lat: 16.0544, lng: 108.2478 },
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
    bookingCount: 1380,
    price: 2500000,
    currency: "VND",
    priceNote: "Giá chưa gồm thuế và phí dịch vụ",
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

    // ── HotelDetail fields ───────────────────────────────────────
    gallery: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1586611292717-f828b167408c?w=1200&h=800&fit=crop",
    ],
    videoUrl: "https://www.youtube.com/watch?v=example-furama",

    overview:
      "Furama Resort Đà Nẵng là khu nghỉ dưỡng 5 sao mang phong cách Á Đông tinh tế nằm trải dài trên 4 ha mặt tiền bãi biển Mỹ Khê. Được khai trương năm 1997, Furama là resort 5 sao đầu tiên tại Đà Nẵng và vẫn giữ vị thế hàng đầu sau gần 3 thập kỷ hoạt động. Với hơn 200 phòng nghỉ, villa và suite, resort sở hữu 3 hồ bơi ngoài trời, trung tâm Furama Spa rộng lớn, 5 nhà hàng và bar mang phong cách ẩm thực đa dạng từ Việt Nam, Nhật Bản đến Địa Trung Hải. Không gian kiến trúc hoà mình vào thiên nhiên với vườn nhiệt đới xanh mát, lối đi riêng xuống biển và tầm nhìn toàn cảnh đại dương không bị che khuất.",

    highlights: [
      {
        icon: "beach",
        title: "Trực tiếp ra biển Mỹ Khê",
        description:
          "Lối đi riêng dẫn thẳng ra bãi biển Mỹ Khê — một trong những bãi biển đẹp nhất thế giới theo bình chọn của Forbes.",
      },
      {
        icon: "pool",
        title: "3 hồ bơi ngoài trời",
        description:
          "Hồ bơi vô cực, hồ trẻ em và hồ bơi nước ngọt rộng 1.800m² với khu sunbed dọc bờ biển.",
      },
      {
        icon: "spa",
        title: "Furama Spa đẳng cấp quốc tế",
        description:
          "Trung tâm spa rộng 800m² với 16 phòng trị liệu, phòng xông hơi, bể tắm thảo dược và đội ngũ kỹ thuật viên được đào tạo chuyên sâu.",
        badge: "Nổi bật",
      },
      {
        icon: "restaurant",
        title: "5 nhà hàng & bar",
        description:
          "Đa dạng ẩm thực từ buffet sáng quốc tế, lẩu Nhật Bản, hải sản tươi sống đến cocktail bar bên hồ bơi.",
      },
      {
        icon: "award",
        title: "Resort 5 sao đầu tiên tại Đà Nẵng",
        description:
          "Hơn 25 năm dẫn đầu về chất lượng dịch vụ, đạt nhiều giải thưởng du lịch quốc tế uy tín.",
        badge: "Biểu tượng",
      },
    ],

    nearbyPlaces: [
      {
        name: "Bãi biển Mỹ Khê",
        category: "Bãi biển",
        distanceKm: 0.05,
        travelTimeMin: 1,
        icon: "beach",
      },
      {
        name: "Ngũ Hành Sơn (Marble Mountains)",
        category: "Di tích lịch sử",
        distanceKm: 3.2,
        travelTimeMin: 8,
        icon: "landmark",
      },
      {
        name: "Phố cổ Hội An",
        category: "Di sản văn hóa",
        distanceKm: 28,
        travelTimeMin: 40,
        icon: "heritage",
      },
      {
        name: "Sân bay Quốc tế Đà Nẵng",
        category: "Sân bay",
        distanceKm: 8.5,
        travelTimeMin: 20,
        icon: "airport",
      },
      {
        name: "Cầu Rồng",
        category: "Điểm tham quan",
        distanceKm: 6.1,
        travelTimeMin: 15,
        icon: "attraction",
      },
      {
        name: "Trung tâm thương mại Vincom",
        category: "Mua sắm",
        distanceKm: 5.8,
        travelTimeMin: 14,
        icon: "shopping",
      },
    ],

    rooms: [
      {
        id: "room-1-1",
        name: "Phòng Deluxe Garden View",
        type: "Deluxe",
        beds: [{ type: "king", count: 1 }],
        capacity: 2,
        extraBedAllowed: true,
        extraBedCharge: 350000,
        sizeM2: 42,
        floor: "Tầng 1–3",
        view: "Hướng vườn nhiệt đới",
        price: 2500000,
        originalPrice: 3200000,
        currency: "VND",
        priceIncludes: ["Bữa sáng buffet cho 2 khách", "WiFi miễn phí"],
        quantity: 40,
        status: "available",
        availableCount: 12,
        gallery: [
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=500&fit=crop",
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=500&fit=crop",
        ],
        amenities: [
          "Điều hòa",
          "TV màn hình phẳng",
          "Minibar",
          "Két an toàn",
          "Ban công riêng",
          "Phòng tắm đứng",
        ],
        highlights: [
          "Ban công nhìn ra vườn nhiệt đới",
          "Giường King size êm ái",
        ],
        cancellationPolicy: "Miễn phí hủy trước 48 giờ",
        mealPlan: "breakfast",
        paymentPolicy: "pay_later",
      },
      {
        id: "room-1-2",
        name: "Phòng Deluxe Ocean View",
        type: "Deluxe",
        beds: [{ type: "king", count: 1 }],
        capacity: 2,
        extraBedAllowed: true,
        extraBedCharge: 350000,
        sizeM2: 42,
        floor: "Tầng 2–5",
        view: "Hướng biển trực diện",
        price: 3200000,
        originalPrice: 4000000,
        currency: "VND",
        priceIncludes: [
          "Bữa sáng buffet cho 2 khách",
          "WiFi miễn phí",
          "1 lần minibar",
        ],
        quantity: 30,
        status: "limited",
        availableCount: 4,
        gallery: [
          "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&h=500&fit=crop",
          "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=800&h=500&fit=crop",
        ],
        amenities: [
          "Điều hòa",
          "TV màn hình phẳng",
          "Minibar",
          "Két an toàn",
          "Ban công hướng biển",
          "Bồn tắm + Phòng tắm đứng",
        ],
        highlights: [
          "View biển không bị che khuất",
          "Bồn tắm đặt biệt nhìn ra đại dương",
        ],
        cancellationPolicy: "Miễn phí hủy trước 48 giờ",
        mealPlan: "breakfast",
        paymentPolicy: "pay_later",
      },
      {
        id: "room-1-3",
        name: "Suite Hướng Biển",
        type: "Suite",
        beds: [{ type: "king", count: 1 }],
        capacity: 3,
        extraBedAllowed: true,
        extraBedCharge: 500000,
        sizeM2: 85,
        floor: "Tầng 4–5",
        view: "Hướng biển toàn cảnh",
        price: 5500000,
        originalPrice: 7000000,
        currency: "VND",
        priceIncludes: [
          "Bữa sáng buffet cho 2 khách",
          "WiFi miễn phí",
          "Minibar không giới hạn",
          "Đưa đón sân bay 1 chiều",
        ],
        quantity: 10,
        status: "available",
        availableCount: 3,
        gallery: [
          "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=500&fit=crop",
          "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=500&fit=crop",
        ],
        amenities: [
          "Phòng khách riêng",
          "Điều hòa",
          "TV 55 inch",
          "Minibar cao cấp",
          "Két an toàn",
          "Sân hiên rộng hướng biển",
          "Bồn tắm Jacuzzi",
          "Phòng tắm đứng mưa",
          "Dép & Áo choàng tắm cao cấp",
        ],
        highlights: [
          "Sân hiên riêng 30m² view biển",
          "Bồn tắm Jacuzzi ngoài trời",
          "Dịch vụ butler riêng 24/7",
        ],
        cancellationPolicy: "Miễn phí hủy trước 72 giờ",
        mealPlan: "breakfast",
        paymentPolicy: "pay_later",
      },
      {
        id: "room-1-4",
        name: "Villa Hồ Bơi Riêng",
        type: "Villa",
        beds: [
          { type: "king", count: 1 },
          { type: "single", count: 2 },
        ],
        capacity: 4,
        extraBedAllowed: false,
        sizeM2: 180,
        floor: "Tầng 1 (Villa riêng biệt)",
        view: "Hướng vườn & hồ bơi riêng",
        price: 12000000,
        originalPrice: 15000000,
        currency: "VND",
        priceIncludes: [
          "Bữa sáng tại villa",
          "WiFi miễn phí",
          "Minibar cao cấp",
          "Đưa đón sân bay 2 chiều",
          "1 buổi spa cho 2 người",
        ],
        quantity: 8,
        status: "limited",
        availableCount: 2,
        gallery: [
          "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=500&fit=crop",
          "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=800&h=500&fit=crop",
        ],
        amenities: [
          "Hồ bơi riêng 8x4m",
          "Phòng khách rộng",
          "Phòng ăn riêng",
          "Bếp nhỏ",
          "2 phòng ngủ",
          "2 phòng tắm",
          "Vườn riêng",
          "BBQ ngoài trời",
          "TV 65 inch",
          "Dàn âm thanh",
        ],
        highlights: [
          "Hồ bơi riêng 8x4m",
          "Khu vườn nhiệt đới khép kín",
          "Phù hợp gia đình & nhóm bạn",
        ],
        cancellationPolicy: "Miễn phí hủy trước 7 ngày",
        mealPlan: "breakfast",
        paymentPolicy: "pay_now",
      },
    ],

    servicesAndFacilities: {
      featured: [
        "Hồ bơi vô cực",
        "Furama Spa",
        "Private Beach",
        "5 Nhà hàng & Bar",
        "Kids Club",
        "Tennis",
      ],
      groups: [
        {
          label: "Bể bơi & Biển",
          icon: "pool",
          items: [
            "3 hồ bơi ngoài trời",
            "Hồ bơi vô cực",
            "Hồ bơi trẻ em",
            "Lối đi riêng ra biển",
            "Khu sunbed & Ghế tắm nắng",
            "Cho thuê thiết bị thể thao biển",
          ],
        },
        {
          label: "Sức khỏe & Làm đẹp",
          icon: "spa",
          items: [
            "Furama Spa (800m²)",
            "16 phòng trị liệu",
            "Phòng xông hơi khô & ướt",
            "Bể tắm thảo dược",
            "Phòng gym hiện đại",
            "Yoga & Thiền buổi sáng",
            "Aerobic dưới nước",
          ],
        },
        {
          label: "Ẩm thực",
          icon: "restaurant",
          items: [
            "Nhà hàng Hemisphere (Buffet quốc tế)",
            "Nhà hàng Edo (Ẩm thực Nhật Bản)",
            "Bar La Mer (Cocktail & Snack)",
            "Pool Bar",
            "Room Service 24/7",
            "BBQ Beachside theo yêu cầu",
          ],
        },
        {
          label: "Giải trí & Thể thao",
          icon: "sport",
          items: [
            "Sân tennis (3 sân)",
            "Sân bóng chuyền bãi biển",
            "Lặn biển & Snorkeling",
            "Kayak & Paddleboard",
            "Đạp xe quanh resort",
            "Kids Club (4–12 tuổi)",
            "Mini Golf",
          ],
        },
        {
          label: "Dịch vụ lễ tân & Hỗ trợ",
          icon: "concierge",
          items: [
            "Lễ tân 24/7",
            "Butler service (Suite & Villa)",
            "Đưa đón sân bay",
            "Thuê xe & Xe máy",
            "Tour tham quan",
            "Giữ hành lý",
            "Đổi tiền",
            "ATM trong khuôn viên",
          ],
        },
        {
          label: "Tiện ích phòng & Buồng phòng",
          icon: "housekeeping",
          items: [
            "Dọn phòng 2 lần/ngày",
            "Turndown service buổi tối",
            "Giặt là & Ủi đồ",
            "Giặt khô",
            "Điều hòa nhiệt độ riêng",
          ],
        },
        {
          label: "Hội nghị & Sự kiện",
          icon: "business",
          items: [
            "Trung tâm hội nghị (500 người)",
            "3 phòng họp nhỏ",
            "Hỗ trợ AV & Kỹ thuật",
            "Tổ chức tiệc cưới bãi biển",
            "Đội ngũ Event Planner",
          ],
        },
        {
          label: "Tiện ích chung",
          icon: "general",
          items: [
            "WiFi miễn phí toàn khu",
            "Bãi đỗ xe miễn phí",
            "Cửa hàng lưu niệm",
            "Phòng đọc sách & Thư viện",
            "Khu vực không hút thuốc",
            "Thiết bị hỗ trợ người khuyết tật",
          ],
        },
      ],
    },

    policies: {
      checkIn: {
        from: "14:00",
        note: "Check-in sớm tùy theo phòng trống (phí phát sinh)",
      },
      checkOut: {
        until: "12:00",
        note: "Check-out muộn đến 16:00 với phí 50% giá phòng",
      },
      cancellation: {
        type: "free",
        description:
          "Hủy miễn phí trước 48 giờ so với giờ check-in. Hủy trong vòng 48 giờ hoặc không đến sẽ tính phí 1 đêm đầu.",
        deadline: "48 giờ trước check-in",
      },
      childrenPolicy: {
        allowed: true,
        freeAgeLimit: 6,
        notes: [
          "Trẻ em dưới 6 tuổi được ở miễn phí khi dùng chung giường với bố mẹ",
          "Trẻ 7–12 tuổi phụ thu 350.000 VNĐ/đêm bao gồm sáng",
          "Giường phụ cho trẻ: 350.000 VNĐ/đêm",
          "Kids Club hoạt động 9:00–17:00 miễn phí cho trẻ 4–12 tuổi",
        ],
      },
      petPolicy: {
        allowed: false,
        notes: ["Không cho phép thú cưng vào khuôn viên resort"],
      },
      paymentMethods: [
        "Visa",
        "MasterCard",
        "JCB",
        "Amex",
        "Tiền mặt (VNĐ, USD)",
        "Chuyển khoản ngân hàng",
      ],
      extraFees: [
        "Thuế VAT 10% chưa bao gồm trong giá phòng",
        "Phí dịch vụ 5%",
        "Phí minibar tính theo tiêu thụ thực tế",
      ],
      importantNotes: [
        "Yêu cầu xuất trình CMND/Hộ chiếu khi check-in",
        "Đặt cọc 500.000 VNĐ/phòng hoặc thẻ tín dụng",
        "Resort là khu vực không hút thuốc (khu hút thuốc riêng tại ngoài trời)",
      ],
      smokingPolicy: "designated_areas",
    },

    contact: {
      phone: "+84 236 3847 888",
      email: "reservation@furama.com.vn",
      address: "105 Võ Nguyên Giáp, Khuê Mỹ, Ngũ Hành Sơn, Đà Nẵng 550000",
      website: "https://www.furama.com.vn",
      googleMapsUrl: "https://goo.gl/maps/furama-danang",
      coordinates: { lat: 16.0544, lng: 108.2478 },
    },

    topReviews: [
      {
        id: "review-1-1",
        author: "Nguyễn Minh Tuấn",
        avatarUrl: "https://i.pravatar.cc/100?img=11",
        rating: 9.5,
        title: "Trải nghiệm nghỉ dưỡng tuyệt vời nhất từ trước đến nay",
        content:
          "Phòng Ocean View nhìn thẳng ra biển, sóng vỗ ru ngủ mỗi đêm. Bữa sáng buffet cực kỳ phong phú. Nhân viên rất chuyên nghiệp và thân thiện. Hồ bơi vô cực buổi hoàng hôn là điểm nhấn không thể quên.",
        date: "2025-12-10",
        stayType: "couple",
        roomName: "Phòng Deluxe Ocean View",
      },
      {
        id: "review-1-2",
        author: "Trần Thị Hoa",
        avatarUrl: "https://i.pravatar.cc/100?img=20",
        rating: 9.0,
        title: "Gia đình 4 người rất hài lòng",
        content:
          "Villa hồ bơi riêng là lựa chọn hoàn hảo cho gia đình. Các con thích Kids Club và hồ bơi trẻ em. Furama Spa thư giãn tuyệt vời sau những ngày chơi biển. Sẽ quay lại năm sau!",
        date: "2025-11-25",
        stayType: "family",
        roomName: "Villa Hồ Bơi Riêng",
      },
      {
        id: "review-1-3",
        author: "David Chen",
        avatarUrl: "https://i.pravatar.cc/100?img=53",
        rating: 9.2,
        title: "World-class resort with authentic Vietnamese hospitality",
        content:
          "Stayed for 5 nights in the Ocean Suite. The private terrace with Jacuzzi overlooking the sea was incredible. Staff remembered our names from day 2. The Edo Japanese restaurant is surprisingly excellent.",
        date: "2025-10-18",
        stayType: "couple",
        roomName: "Suite Hướng Biển",
      },
    ],

    meta: {
      title: "Furama Resort Đà Nẵng 5 Sao — Nghỉ Dưỡng Bãi Biển Mỹ Khê",
      description:
        "Đặt phòng Furama Resort Đà Nẵng với giá tốt nhất. Resort 5 sao đầu tiên tại Đà Nẵng, view biển Mỹ Khê, hồ bơi vô cực, Furama Spa và 5 nhà hàng đẳng cấp.",
      keywords: [
        "furama resort",
        "resort đà nẵng",
        "khách sạn 5 sao đà nẵng",
        "bãi biển mỹ khê",
        "spa đà nẵng",
      ],
      canonicalUrl: "https://example.com/hotels/furama-resort-da-nang",
    },
    lastUpdated: "2026-01-15T08:00:00Z",
  },

  // ═══════════════════════════════════════════════════════════════
  // 2. Sea Harmony Hotel Đà Nẵng
  // ═══════════════════════════════════════════════════════════════
  {
    // ── HotelSummary fields ──────────────────────────────────────
    id: "hotel-2",
    name: "Sea Harmony Hotel Đà Nẵng",
    slug: "sea-harmony-hotel-da-nang",
    type: "hotel",
    image:
      "https://images.unsplash.com/photo-1578899387351-623a0ba99864?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578899387351-623a0ba99864?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop",
    ],
    location: "Đường Bạch Đằng, Hải Châu, Đà Nẵng",
    coordinates: { lat: 16.0678, lng: 108.2208 },
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
    bookingCount: 910,
    price: 1800000,
    currency: "VND",
    priceNote: "Đã bao gồm bữa sáng cho 2 khách",
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

    // ── HotelDetail fields ───────────────────────────────────────
    gallery: [
      "https://images.unsplash.com/photo-1578899387351-623a0ba99864?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&h=800&fit=crop",
    ],

    overview:
      "Sea Harmony Hotel nằm ngay trên đường Bạch Đằng thơ mộng ven sông Hàn, cách cầu Rồng nổi tiếng chỉ 300m. Với 120 phòng nghỉ được thiết kế hiện đại tối giản mang màu sắc biển cả, khách sạn là lựa chọn lý tưởng cho cả khách du lịch và công tác. Từ tầng cao nhìn ra toàn cảnh sông Hàn và thành phố về đêm lung linh. Rooftop bar với tầm nhìn 360 độ là điểm check-in không thể bỏ qua.",

    highlights: [
      {
        icon: "location",
        title: "Vị trí trung tâm đắc địa",
        description:
          "Nằm trên đường Bạch Đằng ven sông Hàn, cách cầu Rồng 300m, tiện di chuyển khắp thành phố.",
      },
      {
        icon: "rooftop",
        title: "Rooftop Bar view 360°",
        description:
          "Bar sân thượng tầng 18 với tầm nhìn toàn cảnh sông Hàn, cầu Rồng và thành phố Đà Nẵng.",
        badge: "Hot",
      },
      {
        icon: "river",
        title: "Phòng hướng sông Hàn",
        description:
          "Nhiều phòng có tầm nhìn trực diện ra sông Hàn — đặc biệt đẹp vào ban đêm khi cầu Rồng thắp sáng.",
      },
    ],

    nearbyPlaces: [
      {
        name: "Cầu Rồng",
        category: "Điểm tham quan",
        distanceKm: 0.3,
        travelTimeMin: 4,
        icon: "attraction",
      },
      {
        name: "Chợ Hàn",
        category: "Mua sắm",
        distanceKm: 0.8,
        travelTimeMin: 10,
        icon: "shopping",
      },
      {
        name: "Bãi biển Mỹ Khê",
        category: "Bãi biển",
        distanceKm: 3.5,
        travelTimeMin: 10,
        icon: "beach",
      },
      {
        name: "Sân bay Quốc tế Đà Nẵng",
        category: "Sân bay",
        distanceKm: 4.2,
        travelTimeMin: 12,
        icon: "airport",
      },
      {
        name: "Bảo tàng Chăm",
        category: "Bảo tàng",
        distanceKm: 1.1,
        travelTimeMin: 5,
        icon: "museum",
      },
    ],

    rooms: [
      {
        id: "room-2-1",
        name: "Phòng Superior City View",
        type: "Superior",
        beds: [{ type: "double", count: 1 }],
        capacity: 2,
        extraBedAllowed: true,
        extraBedCharge: 250000,
        sizeM2: 28,
        floor: "Tầng 3–8",
        view: "Hướng thành phố",
        price: 1200000,
        originalPrice: 1500000,
        currency: "VND",
        priceIncludes: ["Bữa sáng cho 2 khách", "WiFi miễn phí"],
        quantity: 50,
        status: "available",
        availableCount: 18,
        amenities: [
          "Điều hòa",
          "TV 43 inch",
          "Minibar",
          "Két an toàn",
          "Phòng tắm vòi sen",
        ],
        highlights: ["Tầm nhìn thành phố về đêm"],
        cancellationPolicy: "Miễn phí hủy trước 24 giờ",
        mealPlan: "breakfast",
        paymentPolicy: "pay_later",
      },
      {
        id: "room-2-2",
        name: "Phòng Deluxe River View",
        type: "Deluxe",
        beds: [{ type: "king", count: 1 }],
        capacity: 2,
        extraBedAllowed: true,
        extraBedCharge: 250000,
        sizeM2: 35,
        floor: "Tầng 9–15",
        view: "Hướng sông Hàn",
        price: 1800000,
        originalPrice: 2300000,
        currency: "VND",
        priceIncludes: [
          "Bữa sáng buffet cho 2 khách",
          "WiFi miễn phí",
          "Welcome drink",
        ],
        quantity: 35,
        status: "available",
        availableCount: 9,
        gallery: [
          "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=500&fit=crop",
        ],
        amenities: [
          "Điều hòa",
          "TV 50 inch",
          "Minibar",
          "Két an toàn",
          "Bồn tắm",
          "Phòng tắm đứng",
        ],
        highlights: ["View sông Hàn và cầu Rồng", "Bồn tắm đặt cạnh cửa sổ"],
        cancellationPolicy: "Miễn phí hủy trước 24 giờ",
        mealPlan: "breakfast",
        paymentPolicy: "pay_later",
      },
      {
        id: "room-2-3",
        name: "Phòng Twin Superior",
        type: "Superior",
        beds: [{ type: "single", count: 2 }],
        capacity: 2,
        extraBedAllowed: false,
        sizeM2: 28,
        floor: "Tầng 3–8",
        view: "Hướng thành phố",
        price: 1300000,
        currency: "VND",
        priceIncludes: ["Bữa sáng cho 2 khách", "WiFi miễn phí"],
        quantity: 20,
        status: "available",
        availableCount: 7,
        amenities: ["Điều hòa", "TV 43 inch", "Minibar", "Két an toàn"],
        highlights: ["Phù hợp 2 bạn bè đi chung"],
        cancellationPolicy: "Miễn phí hủy trước 24 giờ",
        mealPlan: "breakfast",
        paymentPolicy: "pay_later",
      },
    ],

    servicesAndFacilities: {
      featured: [
        "Rooftop Bar",
        "Phòng gym",
        "Nhà hàng",
        "Đưa đón sân bay",
        "WiFi miễn phí",
      ],
      groups: [
        {
          label: "Ăn uống",
          icon: "restaurant",
          items: [
            "Nhà hàng Harmony (tầng 2)",
            "Rooftop Bar (tầng 18)",
            "Room Service 6:00–22:00",
          ],
        },
        {
          label: "Sức khỏe",
          icon: "fitness",
          items: [
            "Phòng gym trang bị hiện đại",
            "Sân thượng tập yoga buổi sáng (theo lịch)",
          ],
        },
        {
          label: "Dịch vụ",
          icon: "service",
          items: [
            "Lễ tân 24/7",
            "Đưa đón sân bay (thu phí)",
            "Thuê xe máy & Xe đạp",
            "Giặt là",
            "Giữ hành lý",
            "Tour city & Hội An",
          ],
        },
        {
          label: "Tiện ích",
          icon: "general",
          items: [
            "WiFi miễn phí tốc độ cao",
            "Thang máy",
            "Bãi đỗ xe (thu phí)",
            "ATM",
          ],
        },
      ],
    },

    policies: {
      checkIn: {
        from: "14:00",
        note: "Check-in sớm có thể sắp xếp tùy phòng trống",
      },
      checkOut: {
        until: "12:00",
        note: "Check-out muộn đến 14:00 miễn phí, 18:00 phí 50%",
      },
      cancellation: {
        type: "free",
        description:
          "Miễn phí hủy trước 24 giờ. Hủy muộn hoặc không đến tính phí 1 đêm.",
        deadline: "24 giờ trước check-in",
      },
      childrenPolicy: {
        allowed: true,
        freeAgeLimit: 6,
        notes: [
          "Trẻ dưới 6 tuổi miễn phí khi dùng chung giường bố mẹ",
          "Phụ thu giường phụ: 200.000 VNĐ/đêm",
        ],
      },
      petPolicy: { allowed: false, notes: ["Không nhận thú cưng"] },
      paymentMethods: ["Visa", "MasterCard", "Tiền mặt", "Chuyển khoản"],
      extraFees: ["Thuế VAT 10%", "Bãi đỗ xe 50.000 VNĐ/đêm"],
      smokingPolicy: "not_allowed",
    },

    contact: {
      phone: "+84 236 3822 666",
      email: "info@seaharmonyhotel.vn",
      address: "16 Bạch Đằng, Hải Châu, Đà Nẵng 550000",
      website: "https://www.seaharmonyhotel.vn",
      coordinates: { lat: 16.0678, lng: 108.2208 },
    },

    topReviews: [
      {
        id: "review-2-1",
        author: "Lê Văn Bình",
        avatarUrl: "https://i.pravatar.cc/100?img=33",
        rating: 9.0,
        title: "Vị trí cực kỳ thuận tiện, Rooftop Bar tuyệt vời",
        content:
          "Đi công tác Đà Nẵng thường xuyên và đây là khách sạn yêu thích. Phòng River View nhìn ra sông Hàn rất đẹp. Rooftop Bar buổi tối view cầu Rồng phun lửa không thể tuyệt hơn.",
        date: "2025-12-01",
        stayType: "business",
        roomName: "Phòng Deluxe River View",
      },
    ],

    meta: {
      title: "Sea Harmony Hotel Đà Nẵng — View Sông Hàn, Trung Tâm Thành Phố",
      description:
        "Khách sạn 4 sao ven sông Hàn, cách cầu Rồng 300m. Phòng hướng sông, Rooftop Bar view 360°, bao gồm bữa sáng. Đặt ngay giá tốt nhất.",
      keywords: [
        "khách sạn đà nẵng trung tâm",
        "view sông hàn",
        "rooftop bar đà nẵng",
      ],
      canonicalUrl: "https://example.com/hotels/sea-harmony-hotel-da-nang",
    },
    lastUpdated: "2026-01-10T08:00:00Z",
  },

  // ═══════════════════════════════════════════════════════════════
  // 3. Vinpearl Resort & Spa Đà Nẵng
  // ═══════════════════════════════════════════════════════════════
  {
    id: "hotel-3",
    name: "Vinpearl Resort & Spa Đà Nẵng",
    slug: "vinpearl-resort-spa-da-nang",
    type: "resort",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1586611292717-f828b167408c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop",
    ],
    location: "Non Nước, Ngũ Hành Sơn, Đà Nẵng",
    coordinates: { lat: 16.1154, lng: 108.3187 },
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
    bookingCount: 1725,
    price: 3200000,
    currency: "VND",
    priceNote: "Bao gồm bữa sáng & sử dụng hồ bơi không giới hạn",
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

    gallery: [
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1586611292717-f828b167408c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=1200&h=800&fit=crop",
    ],

    overview:
      "Vinpearl Resort & Spa Đà Nẵng tọa lạc tại bờ biển Non Nước yên tĩnh thuộc chân núi Ngũ Hành Sơn huyền thoại. Trải dài trên 10ha, resort sở hữu 4 hồ bơi kết nối, bãi biển riêng 350m, khu spa 1.200m² và hệ thống nhà hàng phục vụ ẩm thực đa vùng miền. Đây là lựa chọn hoàn hảo cho gia đình với Kids Club được thiết kế chuyên biệt và nhiều hoạt động thể thao biển phong phú.",

    highlights: [
      {
        icon: "pool",
        title: "4 hồ bơi kết nối",
        description:
          "Hệ thống 4 hồ bơi rộng 3.500m² kết nối nhau, bao gồm hồ lazy river và hồ sóng nhân tạo.",
        badge: "Độc đáo",
      },
      {
        icon: "beach",
        title: "Bãi biển riêng 350m",
        description:
          "Bãi cát trắng mịn riêng với đội ngũ cứu hộ và cho thuê thiết bị thể thao biển miễn phí.",
      },
      {
        icon: "kids",
        title: "Kids Club chuyên biệt",
        description:
          "Khu vui chơi Kids Club rộng 500m² với nhân viên trông trẻ chuyên nghiệp, hoạt động theo chủ đề từng ngày.",
        badge: "Family",
      },
      {
        icon: "spa",
        title: "Vinpearl Spa 1.200m²",
        description:
          "Trung tâm spa cao cấp với 20 phòng trị liệu, phòng couple, hammam và bể ngâm khoáng chất.",
      },
    ],

    nearbyPlaces: [
      {
        name: "Ngũ Hành Sơn",
        category: "Di tích lịch sử",
        distanceKm: 1.5,
        travelTimeMin: 5,
        icon: "landmark",
      },
      {
        name: "Làng đá mỹ nghệ Non Nước",
        category: "Văn hóa",
        distanceKm: 2.0,
        travelTimeMin: 6,
        icon: "craft",
      },
      {
        name: "Phố cổ Hội An",
        category: "Di sản",
        distanceKm: 25,
        travelTimeMin: 35,
        icon: "heritage",
      },
      {
        name: "Sân bay Đà Nẵng",
        category: "Sân bay",
        distanceKm: 12,
        travelTimeMin: 25,
        icon: "airport",
      },
    ],

    rooms: [
      {
        id: "room-3-1",
        name: "Phòng Superior Vườn",
        type: "Superior",
        beds: [{ type: "king", count: 1 }],
        capacity: 2,
        extraBedAllowed: true,
        extraBedCharge: 400000,
        sizeM2: 40,
        floor: "Tầng 1–2",
        view: "Hướng vườn & hồ bơi",
        price: 3200000,
        originalPrice: 4000000,
        currency: "VND",
        priceIncludes: ["Bữa sáng buffet", "Sử dụng hồ bơi", "WiFi miễn phí"],
        quantity: 60,
        status: "available",
        availableCount: 15,
        amenities: [
          "Điều hòa",
          "TV 49 inch",
          "Minibar",
          "Két an toàn",
          "Sân hiên nhỏ",
        ],
        highlights: ["Lối ra hồ bơi trực tiếp"],
        cancellationPolicy: "Miễn phí hủy trước 72 giờ",
        mealPlan: "breakfast",
        paymentPolicy: "pay_later",
      },
      {
        id: "room-3-2",
        name: "Phòng Deluxe Hướng Biển",
        type: "Deluxe",
        beds: [{ type: "king", count: 1 }],
        capacity: 3,
        extraBedAllowed: true,
        extraBedCharge: 450000,
        sizeM2: 52,
        floor: "Tầng 3–5",
        view: "Hướng biển",
        price: 4500000,
        originalPrice: 5800000,
        currency: "VND",
        priceIncludes: [
          "Bữa sáng buffet cho 2",
          "Sử dụng hồ bơi",
          "WiFi",
          "Welcome fruit",
        ],
        quantity: 40,
        status: "limited",
        availableCount: 6,
        amenities: [
          "Điều hòa",
          "TV 55 inch",
          "Minibar",
          "Bồn tắm + Sen",
          "Ban công biển",
        ],
        highlights: ["View biển từ ban công", "Bồn tắm riêng"],
        cancellationPolicy: "Miễn phí hủy trước 72 giờ",
        mealPlan: "breakfast",
        paymentPolicy: "pay_later",
      },
      {
        id: "room-3-3",
        name: "Suite Gia Đình",
        type: "Suite",
        beds: [
          { type: "king", count: 1 },
          { type: "twin", count: 1 },
        ],
        capacity: 4,
        extraBedAllowed: true,
        extraBedCharge: 500000,
        sizeM2: 95,
        floor: "Tầng 2–4",
        view: "Hướng biển & hồ bơi",
        price: 7500000,
        originalPrice: 9000000,
        currency: "VND",
        priceIncludes: [
          "Bữa sáng buffet cho 4",
          "Sử dụng Kids Club miễn phí",
          "WiFi",
          "Đưa đón sân bay",
        ],
        quantity: 15,
        status: "available",
        availableCount: 4,
        amenities: [
          "2 Phòng ngủ",
          "Phòng khách riêng",
          "2 Phòng tắm",
          "Bồn Jacuzzi",
          "Sân hiên lớn",
          "TV 65 inch",
        ],
        highlights: [
          "Phù hợp gia đình 4 người",
          "2 phòng ngủ riêng biệt",
          "Sân hiên hướng biển",
        ],
        cancellationPolicy: "Miễn phí hủy trước 5 ngày",
        mealPlan: "breakfast",
        paymentPolicy: "pay_now",
      },
    ],

    servicesAndFacilities: {
      featured: [
        "4 Hồ bơi",
        "Bãi biển riêng",
        "Vinpearl Spa",
        "Kids Club",
        "3 Nhà hàng",
      ],
      groups: [
        {
          label: "Hồ bơi & Biển",
          icon: "pool",
          items: [
            "4 hồ bơi kết nối (3.500m²)",
            "Lazy River 120m",
            "Hồ sóng nhân tạo",
            "Bãi biển riêng 350m",
            "Cho thuê thiết bị biển",
          ],
        },
        {
          label: "Spa & Sức khỏe",
          icon: "spa",
          items: [
            "Vinpearl Spa (1.200m²)",
            "20 phòng trị liệu",
            "Hammam",
            "Bể ngâm khoáng",
            "Phòng gym cao cấp",
            "Sân tennis (4 sân)",
          ],
        },
        {
          label: "Ẩm thực",
          icon: "restaurant",
          items: [
            "Nhà hàng The Kitchen (Buffet)",
            "Nhà hàng The Sea (Hải sản)",
            "Bamboo Bar & Lounge",
            "Pool Bar",
            "Room Service 24/7",
          ],
        },
        {
          label: "Vui chơi giải trí",
          icon: "fun",
          items: [
            "Kids Club (4–12 tuổi)",
            "Playground ngoài trời",
            "Lướt sóng & Kayak",
            "Diving & Snorkeling",
            "Thể thao bãi biển",
            "Mini cinema",
          ],
        },
        {
          label: "Dịch vụ",
          icon: "service",
          items: [
            "Lễ tân 24/7",
            "Butler (Suite)",
            "Đưa đón sân bay",
            "Cho thuê xe",
            "Laundry",
            "ATM",
            "Cửa hàng lưu niệm",
          ],
        },
      ],
    },

    policies: {
      checkIn: {
        from: "15:00",
        note: "Check-in sớm phụ thu 50% nếu trước 09:00",
      },
      checkOut: { until: "12:00" },
      cancellation: {
        type: "free",
        description: "Hủy miễn phí trước 72 giờ. Hủy muộn hơn tính phí 2 đêm.",
        deadline: "72 giờ",
      },
      childrenPolicy: {
        allowed: true,
        freeAgeLimit: 5,
        notes: [
          "Trẻ dưới 5 tuổi miễn phí",
          "Kids Club miễn phí cho trẻ 4–12 tuổi",
          "Phụ thu trẻ 6–11: 500.000 VNĐ/đêm có sáng",
        ],
      },
      petPolicy: { allowed: false, notes: ["Không nhận thú cưng"] },
      paymentMethods: [
        "Visa",
        "MasterCard",
        "JCB",
        "Amex",
        "Tiền mặt",
        "Chuyển khoản",
      ],
      extraFees: ["Thuế VAT 10%", "Phí dịch vụ 5%"],
      smokingPolicy: "designated_areas",
    },

    contact: {
      phone: "+84 236 3958 888",
      email: "reservation.danang@vinpearl.com",
      address: "Trường Sa, Hòa Hải, Ngũ Hành Sơn, Đà Nẵng",
      website: "https://vinpearl.com/da-nang",
      coordinates: { lat: 16.1154, lng: 108.3187 },
    },

    topReviews: [
      {
        id: "review-3-1",
        author: "Phạm Thanh Hương",
        avatarUrl: "https://i.pravatar.cc/100?img=47",
        rating: 9.8,
        title: "Hoàn hảo cho kỳ nghỉ gia đình",
        content:
          "4 hồ bơi kết nối là trải nghiệm không đâu có. Con tôi 7 tuổi mê Kids Club đến không chịu về. Bãi biển riêng sạch sẽ an toàn. Nhân viên cực kỳ nhiệt tình với trẻ em. Sẽ quay lại nhất định.",
        date: "2025-11-15",
        stayType: "family",
        roomName: "Suite Gia Đình",
      },
    ],

    meta: {
      title: "Vinpearl Resort & Spa Đà Nẵng 5 Sao — Bãi Biển Riêng & 4 Hồ Bơi",
      description:
        "Resort 5 sao Vinpearl Đà Nẵng với 4 hồ bơi kết nối, bãi biển riêng 350m, Kids Club và Spa 1.200m². Lý tưởng cho gia đình.",
      keywords: [
        "vinpearl đà nẵng",
        "resort gia đình đà nẵng",
        "4 hồ bơi",
        "bãi biển riêng",
      ],
      canonicalUrl: "https://example.com/hotels/vinpearl-resort-spa-da-nang",
    },
    lastUpdated: "2026-01-12T08:00:00Z",
  },

  // ═══════════════════════════════════════════════════════════════
  // 4. Mỹ Khê Sunrise Hotel
  // ═══════════════════════════════════════════════════════════════
  {
    id: "hotel-4",
    name: "Mỹ Khê Sunrise Hotel",
    slug: "my-khe-sunrise-hotel",
    type: "hotel",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&h=400&fit=crop",
    ],
    location: "Đường Võ Nguyên Giáp, Mỹ Khê, Sơn Trà, Đà Nẵng",
    coordinates: { lat: 16.0609, lng: 108.2441 },
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
    bookingCount: 1048,
    price: 1200000,
    currency: "VND",
    priceNote: "Giá chưa gồm thuế 10%",
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

    gallery: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&h=800&fit=crop",
    ],

    overview:
      "Mỹ Khê Sunrise Hotel tọa lạc ngay trên đường Võ Nguyên Giáp sầm uất ven biển Mỹ Khê — bãi biển đẹp nhất Đà Nẵng. Với 18 tầng và 98 phòng nghỉ, khách sạn cung cấp tầm nhìn tuyệt đẹp ra đại dương và thành phố từ mọi phòng. Rooftop bar tầng 18 là điểm hẹn lý tưởng để ngắm bình minh và hoàng hôn trên biển.",

    highlights: [
      {
        icon: "sunrise",
        title: "Ngắm bình minh từ phòng ngủ",
        description:
          "Phòng hướng đông trực tiếp ra biển cho trải nghiệm bình minh tuyệt vời mỗi sáng.",
        badge: "Đặc biệt",
      },
      {
        icon: "rooftop",
        title: "Rooftop Bar tầng 18",
        description:
          "Bar sân thượng cao nhất tuyến biển Mỹ Khê với cocktail và tầm nhìn 360 độ.",
      },
      {
        icon: "location",
        title: "Ngay bãi biển Mỹ Khê",
        description: "Cách bãi biển Mỹ Khê chỉ 2 phút đi bộ qua đường.",
      },
    ],

    nearbyPlaces: [
      {
        name: "Bãi biển Mỹ Khê",
        category: "Bãi biển",
        distanceKm: 0.1,
        travelTimeMin: 2,
        icon: "beach",
      },
      {
        name: "Furama Resort",
        category: "Điểm tham quan",
        distanceKm: 1.5,
        travelTimeMin: 5,
        icon: "hotel",
      },
      {
        name: "Ngũ Hành Sơn",
        category: "Di tích",
        distanceKm: 5.5,
        travelTimeMin: 12,
        icon: "landmark",
      },
      {
        name: "Sân bay Đà Nẵng",
        category: "Sân bay",
        distanceKm: 6.0,
        travelTimeMin: 15,
        icon: "airport",
      },
    ],

    rooms: [
      {
        id: "room-4-1",
        name: "Phòng Standard City View",
        type: "Standard",
        beds: [{ type: "double", count: 1 }],
        capacity: 2,
        extraBedAllowed: true,
        extraBedCharge: 200000,
        sizeM2: 25,
        floor: "Tầng 3–9",
        view: "Hướng thành phố",
        price: 1200000,
        currency: "VND",
        priceIncludes: ["WiFi miễn phí"],
        quantity: 40,
        status: "available",
        availableCount: 20,
        amenities: ["Điều hòa", "TV 43 inch", "Minibar", "Két an toàn"],
        cancellationPolicy: "Miễn phí hủy trước 24 giờ",
        mealPlan: "room_only",
        paymentPolicy: "pay_later",
      },
      {
        id: "room-4-2",
        name: "Phòng Deluxe Sea View",
        type: "Deluxe",
        beds: [{ type: "king", count: 1 }],
        capacity: 2,
        extraBedAllowed: true,
        extraBedCharge: 200000,
        sizeM2: 32,
        floor: "Tầng 10–16",
        view: "Hướng biển trực diện",
        price: 1800000,
        originalPrice: 2200000,
        currency: "VND",
        priceIncludes: ["Bữa sáng cho 2", "WiFi miễn phí"],
        quantity: 35,
        status: "available",
        availableCount: 11,
        gallery: [
          "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=500&fit=crop",
        ],
        amenities: [
          "Điều hòa",
          "TV 50 inch",
          "Minibar",
          "Bồn tắm",
          "Ban công nhỏ",
        ],
        highlights: ["View biển Mỹ Khê", "Ngắm bình minh từ ban công"],
        cancellationPolicy: "Miễn phí hủy trước 24 giờ",
        mealPlan: "breakfast",
        paymentPolicy: "pay_later",
      },
    ],

    servicesAndFacilities: {
      featured: [
        "Rooftop Bar",
        "Hồ bơi ngoài trời",
        "Nhà hàng hải sản",
        "WiFi miễn phí",
      ],
      groups: [
        {
          label: "Ăn uống",
          icon: "restaurant",
          items: [
            "Nhà hàng Sunrise (tầng 2) — hải sản tươi sống",
            "Rooftop Bar Horizon (tầng 18)",
            "Cafe sảnh (6:00–22:00)",
          ],
        },
        {
          label: "Giải trí",
          icon: "fun",
          items: [
            "Hồ bơi ngoài trời (tầng 5)",
            "Phòng gym",
            "Cho thuê xe đạp & xe máy",
          ],
        },
        {
          label: "Dịch vụ",
          icon: "service",
          items: [
            "Lễ tân 24/7",
            "Giặt là",
            "Đưa đón sân bay (thu phí)",
            "Tour tham quan",
          ],
        },
        {
          label: "Tiện ích",
          icon: "general",
          items: ["WiFi tốc độ cao", "Thang máy", "ATM", "Cửa hàng tiện lợi"],
        },
      ],
    },

    policies: {
      checkIn: { from: "14:00" },
      checkOut: { until: "12:00" },
      cancellation: {
        type: "free",
        description: "Miễn phí hủy trước 24 giờ",
        deadline: "24 giờ",
      },
      childrenPolicy: {
        allowed: true,
        freeAgeLimit: 6,
        notes: ["Trẻ dưới 6 miễn phí"],
      },
      petPolicy: { allowed: false, notes: ["Không nhận thú cưng"] },
      paymentMethods: ["Visa", "MasterCard", "Tiền mặt"],
      extraFees: ["Thuế VAT 10%"],
      smokingPolicy: "not_allowed",
    },

    contact: {
      phone: "+84 236 3939 555",
      email: "info@mykheunrisehotel.vn",
      address: "210 Võ Nguyên Giáp, Mỹ Khê, Sơn Trà, Đà Nẵng",
      coordinates: { lat: 16.0609, lng: 108.2441 },
    },

    topReviews: [
      {
        id: "review-4-1",
        author: "Nguyễn Thị Mai",
        avatarUrl: "https://i.pravatar.cc/100?img=25",
        rating: 8.8,
        title: "Giá tốt, view đẹp, Rooftop tuyệt vời",
        content:
          "Phòng Sea View tầng 14 view biển cực kỳ đẹp. Bình minh mỗi sáng thức dậy là được nhìn ngay từ giường ngủ. Rooftop bar buổi tối rất cool. Giá rất hợp lý so với chất lượng.",
        date: "2025-12-20",
        stayType: "couple",
        roomName: "Phòng Deluxe Sea View",
      },
    ],

    meta: {
      title: "Mỹ Khê Sunrise Hotel — View Biển Đẹp, Rooftop Bar Đà Nẵng",
      description:
        "Khách sạn 4 sao ngay bãi biển Mỹ Khê Đà Nẵng. Phòng hướng biển, Rooftop Bar tầng 18. Giá từ 1.200.000 VNĐ/đêm.",
      keywords: ["khách sạn mỹ khê", "view biển đà nẵng", "rooftop bar mỹ khê"],
      canonicalUrl: "https://example.com/hotels/my-khe-sunrise-hotel",
    },
    lastUpdated: "2026-01-08T08:00:00Z",
  },

  // ═══════════════════════════════════════════════════════════════
  // 5. Coastal Boutique Hotel
  // ═══════════════════════════════════════════════════════════════
  {
    id: "hotel-5",
    name: "Coastal Boutique Hotel",
    slug: "coastal-boutique-hotel",
    type: "hotel",
    image:
      "https://images.unsplash.com/photo-1561599810-d3fee221d187?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1561599810-d3fee221d187?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop",
    ],
    location: "Đường Hoàng Sa, Sơn Trà, Đà Nẵng",
    coordinates: { lat: 16.1093, lng: 108.2727 },
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
    bookingCount: 860,
    price: 950000,
    currency: "VND",
    priceNote: "Đã bao gồm bữa sáng",
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

    gallery: [
      "https://images.unsplash.com/photo-1561599810-d3fee221d187?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1562790351-d273a961e0e9?w=1200&h=800&fit=crop",
    ],

    overview:
      "Coastal Boutique Hotel là một viên ngọc ẩn dọc đường Hoàng Sa thơ mộng ven bán đảo Sơn Trà. Chỉ có 32 phòng nghỉ được thiết kế thủ công theo phong cách Indochine — kết hợp gỗ tự nhiên, gốm sứ thủ công và vải lanh — mỗi phòng là một tác phẩm nghệ thuật độc bản. Nhà hàng farm-to-table phục vụ thực đơn theo mùa với nguyên liệu địa phương tươi ngon. Địa điểm lý tưởng để thư giãn chậm, gần thiên nhiên và trải nghiệm văn hóa Đà Nẵng theo cách riêng.",

    highlights: [
      {
        icon: "design",
        title: "32 phòng thiết kế thủ công",
        description:
          "Mỗi phòng là sự kết hợp độc đáo giữa gỗ tự nhiên, gốm Bát Tràng và vải lanh Hội An.",
        badge: "New",
      },
      {
        icon: "food",
        title: "Nhà hàng Farm-to-Table",
        description:
          "Thực đơn thay đổi theo mùa, nguyên liệu mua trực tiếp từ nông trại địa phương mỗi sáng.",
      },
      {
        icon: "yoga",
        title: "Yoga & Thiền buổi sáng miễn phí",
        description:
          "Lớp yoga ngoài trời hướng biển mỗi sáng 6:30 do giáo viên chứng chỉ quốc tế hướng dẫn.",
      },
      {
        icon: "nature",
        title: "Gần bán đảo Sơn Trà",
        description:
          "Cách khu bảo tồn thiên nhiên Sơn Trà chỉ 2km — lý tưởng cho trekking và ngắm voọc.",
      },
    ],

    nearbyPlaces: [
      {
        name: "Bán đảo Sơn Trà",
        category: "Thiên nhiên",
        distanceKm: 2.0,
        travelTimeMin: 6,
        icon: "nature",
      },
      {
        name: "Chùa Linh Ứng",
        category: "Tâm linh",
        distanceKm: 3.5,
        travelTimeMin: 10,
        icon: "temple",
      },
      {
        name: "Bãi biển Mỹ Khê",
        category: "Bãi biển",
        distanceKm: 4.5,
        travelTimeMin: 12,
        icon: "beach",
      },
      {
        name: "Trung tâm thành phố",
        category: "Đô thị",
        distanceKm: 6.0,
        travelTimeMin: 15,
        icon: "city",
      },
    ],

    rooms: [
      {
        id: "room-5-1",
        name: "Phòng Garden Courtyard",
        type: "Standard",
        beds: [{ type: "queen", count: 1 }],
        capacity: 2,
        extraBedAllowed: false,
        sizeM2: 22,
        floor: "Tầng 1",
        view: "Hướng sân vườn trong",
        price: 950000,
        currency: "VND",
        priceIncludes: [
          "Bữa sáng farm-to-table cho 2",
          "WiFi",
          "Yoga buổi sáng",
        ],
        quantity: 12,
        status: "available",
        availableCount: 5,
        amenities: [
          "Quạt trần gỗ",
          "TV 40 inch",
          "Đèn ngủ thủ công",
          "Phòng tắm đứng",
          "Sản phẩm hữu cơ",
        ],
        highlights: [
          "Không gian yên tĩnh nhìn ra vườn",
          "Thiết kế Indochine authentic",
        ],
        cancellationPolicy: "Miễn phí hủy trước 48 giờ",
        mealPlan: "breakfast",
        paymentPolicy: "pay_later",
      },
      {
        id: "room-5-2",
        name: "Phòng Ocean Breeze",
        type: "Deluxe",
        beds: [{ type: "king", count: 1 }],
        capacity: 2,
        extraBedAllowed: false,
        sizeM2: 30,
        floor: "Tầng 3–4",
        view: "Thoáng hướng biển",
        price: 1400000,
        originalPrice: 1700000,
        currency: "VND",
        priceIncludes: [
          "Bữa sáng farm-to-table cho 2",
          "WiFi",
          "Yoga",
          "Welcome cocktail",
        ],
        quantity: 12,
        status: "available",
        availableCount: 4,
        gallery: [
          "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=500&fit=crop",
        ],
        amenities: [
          "Quạt trần gỗ",
          "TV 43 inch",
          "Bồn tắm",
          "Ban công nhỏ",
          "Minibar organic",
        ],
        highlights: ["Ban công ngắm biển", "Bồn tắm vintage style"],
        cancellationPolicy: "Miễn phí hủy trước 48 giờ",
        mealPlan: "breakfast",
        paymentPolicy: "pay_later",
      },
    ],

    servicesAndFacilities: {
      featured: [
        "Farm-to-table Restaurant",
        "Yoga buổi sáng",
        "Cho thuê xe đạp",
        "Library Corner",
      ],
      groups: [
        {
          label: "Ăn uống",
          icon: "restaurant",
          items: [
            "Nhà hàng The Coastal Kitchen (farm-to-table)",
            "Cafe hữu cơ buổi sáng",
            "Cocktail Bar nhỏ buổi tối",
            "Picnic basket theo yêu cầu",
          ],
        },
        {
          label: "Trải nghiệm",
          icon: "experience",
          items: [
            "Yoga & Thiền buổi sáng (miễn phí)",
            "Workshop nấu ăn Việt Nam",
            "Trekking Sơn Trà có hướng dẫn",
            "Cho thuê xe đạp miễn phí",
          ],
        },
        {
          label: "Không gian",
          icon: "space",
          items: [
            "Library corner với sách và board game",
            "Sân thượng ngắm sao buổi tối",
            "Vườn cây xanh trung tâm",
          ],
        },
        {
          label: "Dịch vụ",
          icon: "service",
          items: ["Lễ tân 8:00–22:00", "Giặt là handwash", "Đặt tour & Xe"],
        },
      ],
    },

    policies: {
      checkIn: {
        from: "14:00",
        note: "Khách sạn nhỏ — vui lòng thông báo giờ đến trước",
      },
      checkOut: { until: "11:00" },
      cancellation: {
        type: "free",
        description: "Miễn phí hủy trước 48 giờ. Hủy muộn tính 1 đêm.",
        deadline: "48 giờ",
      },
      childrenPolicy: {
        allowed: true,
        freeAgeLimit: 12,
        notes: [
          "Không phù hợp cho trẻ dưới 5 tuổi (không có tiện ích trẻ em)",
          "Trẻ 5–12 tuổi phụ thu 150.000 VNĐ",
        ],
      },
      petPolicy: {
        allowed: true,
        charge: 200000,
        notes: [
          "Nhận thú cưng nhỏ < 5kg",
          "Phụ thu 200.000 VNĐ/đêm",
          "Không để thú cưng một mình trong phòng",
        ],
      },
      paymentMethods: ["Visa", "MasterCard", "Tiền mặt", "Chuyển khoản"],
      importantNotes: [
        "Khách sạn yên tĩnh — không tổ chức tiệc hay sự kiện ồn ào",
        "Không có thang máy (4 tầng)",
      ],
      smokingPolicy: "not_allowed",
    },

    contact: {
      phone: "+84 236 3799 888",
      email: "hello@coastalboutiquehotel.vn",
      address: "48 Hoàng Sa, Thọ Quang, Sơn Trà, Đà Nẵng",
      website: "https://www.coastalboutiquehotel.vn",
      coordinates: { lat: 16.1093, lng: 108.2727 },
    },

    topReviews: [
      {
        id: "review-5-1",
        author: "Sophie Martin",
        avatarUrl: "https://i.pravatar.cc/100?img=44",
        rating: 9.5,
        title: "A hidden gem — exactly what we were looking for",
        content:
          "We stayed 5 nights and it was the most peaceful and beautiful stay. The farm-to-table breakfast was incredible every morning. Morning yoga overlooking the sea, cycling to Son Tra peninsula — pure bliss. The room design is stunning and unique. Highly recommend for couples who want something special.",
        date: "2025-12-05",
        stayType: "couple",
        roomName: "Phòng Ocean Breeze",
      },
    ],

    meta: {
      title: "Coastal Boutique Hotel Đà Nẵng — Indochine Design, Farm-to-Table",
      description:
        "Khách sạn boutique 32 phòng thiết kế Indochine tại Sơn Trà. Nhà hàng farm-to-table, yoga buổi sáng, gần bán đảo Sơn Trà. Từ 950.000 VNĐ/đêm.",
      keywords: [
        "boutique hotel đà nẵng",
        "khách sạn indochine",
        "sơn trà",
        "farm to table đà nẵng",
      ],
      canonicalUrl: "https://example.com/hotels/coastal-boutique-hotel",
    },
    lastUpdated: "2026-01-05T08:00:00Z",
  },

  // ═══════════════════════════════════════════════════════════════
  // 6. Grand Plaza Hotel Đà Nẵng
  // ═══════════════════════════════════════════════════════════════
  {
    id: "hotel-6",
    name: "Grand Plaza Hotel Đà Nẵng",
    slug: "grand-plaza-hotel-da-nang",
    type: "hotel",
    image:
      "https://images.unsplash.com/photo-1585132340905-fe94a2c1ff89?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1585132340905-fe94a2c1ff89?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1562790351-d273a961e0e9?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=600&h=400&fit=crop",
    ],
    location: "Đường Phan Chu Trinh, Hải Châu, Đà Nẵng",
    coordinates: { lat: 16.0586, lng: 108.2215 },
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
    bookingCount: 1196,
    price: 850000,
    currency: "VND",
    priceNote: "Giá tốt nhất — miễn phí hủy trước 24h",
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

    gallery: [
      "https://images.unsplash.com/photo-1585132340905-fe94a2c1ff89?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1562790351-d273a961e0e9?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&h=800&fit=crop",
    ],

    overview:
      "Grand Plaza Hotel là địa chỉ hàng đầu cho khách công tác tại Đà Nẵng. Nằm ngay trung tâm quận Hải Châu, cách UBND thành phố 200m và ga Đà Nẵng 1km, khách sạn cung cấp trung tâm hội nghị hiện đại sức chứa 600 người, 5 phòng họp riêng và đầy đủ hỗ trợ kỹ thuật chuyên nghiệp. Dịch vụ business class với tiêu chuẩn quốc tế.",

    highlights: [
      {
        icon: "conference",
        title: "Trung tâm hội nghị 600 người",
        description:
          "Hội trường chính với thiết bị AV hiện đại, ánh sáng điều chỉnh và hệ thống âm thanh chuyên nghiệp.",
        badge: "Business",
      },
      {
        icon: "location",
        title: "Trung tâm hành chính Đà Nẵng",
        description:
          "Cách UBND Thành phố 200m, gần các tòa nhà văn phòng, ngân hàng và trung tâm thương mại.",
      },
      {
        icon: "wifi",
        title: "Kết nối internet doanh nghiệp",
        description:
          "Đường truyền cáp quang 1Gbps, WiFi 6 toàn khách sạn, hỗ trợ VPN và họp trực tuyến.",
      },
    ],

    nearbyPlaces: [
      {
        name: "UBND TP. Đà Nẵng",
        category: "Hành chính",
        distanceKm: 0.2,
        travelTimeMin: 3,
        icon: "government",
      },
      {
        name: "Chợ Cồn",
        category: "Mua sắm",
        distanceKm: 0.5,
        travelTimeMin: 6,
        icon: "market",
      },
      {
        name: "Ga Đà Nẵng",
        category: "Giao thông",
        distanceKm: 1.0,
        travelTimeMin: 5,
        icon: "train",
      },
      {
        name: "Sân bay Đà Nẵng",
        category: "Sân bay",
        distanceKm: 3.5,
        travelTimeMin: 10,
        icon: "airport",
      },
      {
        name: "Cầu Rồng",
        category: "Điểm tham quan",
        distanceKm: 1.8,
        travelTimeMin: 8,
        icon: "attraction",
      },
    ],

    rooms: [
      {
        id: "room-6-1",
        name: "Phòng Standard",
        type: "Standard",
        beds: [{ type: "double", count: 1 }],
        capacity: 2,
        extraBedAllowed: true,
        extraBedCharge: 150000,
        sizeM2: 24,
        floor: "Tầng 3–10",
        view: "Hướng thành phố",
        price: 850000,
        currency: "VND",
        priceIncludes: ["WiFi miễn phí"],
        quantity: 60,
        status: "available",
        availableCount: 25,
        amenities: [
          "Điều hòa",
          "TV 43 inch",
          "Minibar",
          "Két an toàn",
          "Bàn làm việc rộng",
          "Ổ cắm đa năng",
        ],
        highlights: ["Bàn làm việc rộng rãi", "Ổ cắm quốc tế tiện lợi"],
        cancellationPolicy: "Miễn phí hủy trước 24 giờ",
        mealPlan: "room_only",
        paymentPolicy: "pay_later",
      },
      {
        id: "room-6-2",
        name: "Phòng Deluxe Business",
        type: "Deluxe",
        beds: [{ type: "king", count: 1 }],
        capacity: 2,
        extraBedAllowed: true,
        extraBedCharge: 200000,
        sizeM2: 32,
        floor: "Tầng 11–16",
        view: "Hướng thành phố",
        price: 1200000,
        originalPrice: 1500000,
        currency: "VND",
        priceIncludes: ["Bữa sáng", "WiFi", "Truy cập Executive Lounge"],
        quantity: 30,
        status: "available",
        availableCount: 12,
        amenities: [
          "Điều hòa",
          "TV 55 inch",
          "Minibar",
          "Két an toàn",
          "Bàn làm việc lớn",
          "Ghế ergonomic",
          "Coffee maker",
          "Bồn tắm",
        ],
        highlights: [
          "Executive Lounge access",
          "Ghế ergonomic làm việc dài ngày",
        ],
        cancellationPolicy: "Miễn phí hủy trước 24 giờ",
        mealPlan: "breakfast",
        paymentPolicy: "pay_later",
      },
      {
        id: "room-6-3",
        name: "Phòng Twin Business",
        type: "Standard",
        beds: [{ type: "single", count: 2 }],
        capacity: 2,
        extraBedAllowed: false,
        sizeM2: 26,
        floor: "Tầng 3–10",
        view: "Hướng thành phố",
        price: 950000,
        currency: "VND",
        priceIncludes: ["WiFi miễn phí"],
        quantity: 25,
        status: "available",
        availableCount: 10,
        amenities: [
          "Điều hòa",
          "TV 43 inch",
          "Minibar",
          "Két an toàn",
          "2 Bàn làm việc",
        ],
        highlights: ["Phù hợp 2 đồng nghiệp đi công tác"],
        cancellationPolicy: "Miễn phí hủy trước 24 giờ",
        mealPlan: "room_only",
        paymentPolicy: "pay_later",
      },
    ],

    servicesAndFacilities: {
      featured: [
        "Hội trường 600 người",
        "5 Phòng họp",
        "Business Center 24/7",
        "WiFi Gigabit",
      ],
      groups: [
        {
          label: "Hội nghị & Sự kiện",
          icon: "conference",
          items: [
            "Hội trường Grand Ballroom (600 người)",
            "Phòng họp A–E (20–80 người)",
            "Hỗ trợ AV & Live streaming",
            "Dịch vụ đặt tiệc & Catering",
            "Phiên dịch đồng thời",
          ],
        },
        {
          label: "Business",
          icon: "business",
          items: [
            "Business Center 24/7",
            "In ấn & Photo copy",
            "Executive Lounge (tầng 16)",
            "Secretarial service",
            "Fax & Courier",
          ],
        },
        {
          label: "Ăn uống",
          icon: "restaurant",
          items: [
            "Nhà hàng The Grand (quốc tế)",
            "Executive Lounge (cocktail giờ 17–19h)",
            "Cafe Lobby",
            "Room Service 24/7",
          ],
        },
        {
          label: "Tiện ích",
          icon: "general",
          items: [
            "WiFi Gigabit toàn khách sạn",
            "Phòng gym",
            "Bãi đỗ xe (miễn phí cho khách lưu trú)",
            "Giặt là nhanh 4 giờ",
            "Thang máy cao tốc",
          ],
        },
        {
          label: "Dịch vụ",
          icon: "service",
          items: [
            "Lễ tân 24/7",
            "Concierge",
            "Đưa đón sân bay",
            "Cho thuê xe có tài xế",
            "Phòng hút thuốc riêng (ngoài trời)",
          ],
        },
      ],
    },

    policies: {
      checkIn: { from: "14:00", note: "Flexible cho khách corporate" },
      checkOut: {
        until: "12:00",
        note: "Late checkout miễn phí đến 14:00 cho thành viên",
      },
      cancellation: {
        type: "free",
        description: "Miễn phí hủy trước 24 giờ",
        deadline: "24 giờ",
      },
      childrenPolicy: {
        allowed: true,
        freeAgeLimit: 12,
        notes: ["Trẻ dưới 12 tuổi miễn phí"],
      },
      petPolicy: { allowed: false, notes: ["Không nhận thú cưng"] },
      paymentMethods: [
        "Visa",
        "MasterCard",
        "JCB",
        "Amex",
        "Tiền mặt",
        "Chuyển khoản",
        "Hóa đơn doanh nghiệp",
      ],
      extraFees: ["Thuế VAT 10%", "Phí dịch vụ 5% (tiệc & sự kiện)"],
      smokingPolicy: "designated_areas",
    },

    contact: {
      phone: "+84 236 3888 999",
      email: "sales@grandplazadanang.vn",
      address: "58 Phan Chu Trinh, Hải Châu, Đà Nẵng 550000",
      website: "https://www.grandplazadanang.vn",
      coordinates: { lat: 16.0586, lng: 108.2215 },
    },

    topReviews: [
      {
        id: "review-6-1",
        author: "Trần Văn Khoa",
        avatarUrl: "https://i.pravatar.cc/100?img=15",
        rating: 8.5,
        title: "Lý tưởng cho hội nghị doanh nghiệp",
        content:
          "Tổ chức hội nghị 300 người tại đây, mọi thứ rất chuyên nghiệp. Đội ngũ event planner hỗ trợ chu đáo từ A đến Z. Phòng họp thiết bị tốt, âm thanh rõ. Phòng ngủ sạch sẽ và đủ tiện nghi cho khách công tác.",
        date: "2025-11-20",
        stayType: "business",
        roomName: "Phòng Deluxe Business",
      },
    ],

    meta: {
      title: "Grand Plaza Hotel Đà Nẵng — Hội Nghị, Trung Tâm Thành Phố",
      description:
        "Khách sạn 4 sao trung tâm Đà Nẵng, chuyên hội nghị và công tác. Hội trường 600 người, WiFi Gigabit, Executive Lounge. Từ 850.000 VNĐ/đêm.",
      keywords: [
        "khách sạn hội nghị đà nẵng",
        "grand plaza đà nẵng",
        "khách sạn công tác đà nẵng",
      ],
      canonicalUrl: "https://example.com/hotels/grand-plaza-hotel-da-nang",
    },
    lastUpdated: "2026-01-06T08:00:00Z",
  },

  // ═══════════════════════════════════════════════════════════════
  // 7. Brilliant Hotel Đà Nẵng
  // ═══════════════════════════════════════════════════════════════
  {
    id: "hotel-7",
    name: "Brilliant Hotel Đà Nẵng",
    slug: "brilliant-hotel-da-nang",
    type: "hotel",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&h=400&fit=crop",
    ],
    location: "Đường Trần Phú, Hải Châu, Đà Nẵng",
    coordinates: { lat: 16.0631, lng: 108.2198 },
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
    bookingCount: 974,
    price: 1050000,
    currency: "VND",
    priceNote: "Đã bao gồm bữa sáng buffet",
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

    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1578899387351-623a0ba99864?w=1200&h=800&fit=crop",
    ],

    overview:
      "Brilliant Hotel tọa lạc trên đường Trần Phú lãng mạn ven sông Hàn, đối diện cầu Rồng huyền thoại. Với 16 tầng và 130 phòng nghỉ hiện đại, điểm nhấn là hồ bơi tầng thượng có tầm nhìn ôm trọn cầu Rồng và sông Hàn — khung cảnh đặc biệt về đêm khi cầu Rồng phun lửa thứ 7 và Chủ nhật. Khu spa Brilliant và nhà hàng buffet quốc tế hoàn thiện trải nghiệm nghỉ dưỡng trọn vẹn.",

    highlights: [
      {
        icon: "pool",
        title: "Hồ bơi tầng thượng view cầu Rồng",
        description:
          "Hồ bơi infinity tầng 16 với tầm nhìn trực diện cầu Rồng — đặc biệt mãn nhãn lúc 21:00 thứ 7 khi cầu phun lửa.",
        badge: "Hot",
      },
      {
        icon: "river",
        title: "Phòng hướng sông Hàn",
        description:
          "Phòng tầng cao nhìn ra sông Hàn, cầu Rồng và cầu Thuận Phước lung linh về đêm.",
      },
      {
        icon: "spa",
        title: "Brilliant Spa",
        description:
          "Spa 400m² với liệu trình đá nóng, massage Thái và facial chuyên sâu.",
      },
    ],

    nearbyPlaces: [
      {
        name: "Cầu Rồng",
        category: "Điểm tham quan",
        distanceKm: 0.1,
        travelTimeMin: 2,
        icon: "attraction",
      },
      {
        name: "Bảo tàng Điêu khắc Chăm",
        category: "Bảo tàng",
        distanceKm: 0.8,
        travelTimeMin: 5,
        icon: "museum",
      },
      {
        name: "Chợ Hàn",
        category: "Mua sắm",
        distanceKm: 1.2,
        travelTimeMin: 7,
        icon: "shopping",
      },
      {
        name: "Sân bay Đà Nẵng",
        category: "Sân bay",
        distanceKm: 4.0,
        travelTimeMin: 12,
        icon: "airport",
      },
      {
        name: "Bãi biển Mỹ Khê",
        category: "Bãi biển",
        distanceKm: 3.8,
        travelTimeMin: 10,
        icon: "beach",
      },
    ],

    rooms: [
      {
        id: "room-7-1",
        name: "Phòng Superior",
        type: "Superior",
        beds: [{ type: "double", count: 1 }],
        capacity: 2,
        extraBedAllowed: true,
        extraBedCharge: 200000,
        sizeM2: 26,
        floor: "Tầng 3–8",
        view: "Hướng thành phố",
        price: 1050000,
        currency: "VND",
        priceIncludes: ["Bữa sáng buffet cho 2", "WiFi"],
        quantity: 50,
        status: "available",
        availableCount: 18,
        amenities: ["Điều hòa", "TV 43 inch", "Minibar", "Két an toàn"],
        cancellationPolicy: "Miễn phí hủy trước 24 giờ",
        mealPlan: "breakfast",
        paymentPolicy: "pay_later",
      },
      {
        id: "room-7-2",
        name: "Phòng Deluxe River View",
        type: "Deluxe",
        beds: [{ type: "king", count: 1 }],
        capacity: 2,
        extraBedAllowed: true,
        extraBedCharge: 250000,
        sizeM2: 34,
        floor: "Tầng 9–15",
        view: "Hướng sông Hàn & cầu Rồng",
        price: 1600000,
        originalPrice: 2000000,
        currency: "VND",
        priceIncludes: [
          "Bữa sáng buffet cho 2",
          "WiFi",
          "Welcome drink",
          "1 lần minibar",
        ],
        quantity: 40,
        status: "limited",
        availableCount: 5,
        gallery: [
          "https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=800&h=500&fit=crop",
        ],
        amenities: [
          "Điều hòa",
          "TV 55 inch",
          "Minibar",
          "Bồn tắm",
          "Ban công hướng sông",
        ],
        highlights: [
          "Ngắm cầu Rồng phun lửa từ ban công",
          "Bồn tắm view sông Hàn",
        ],
        cancellationPolicy: "Miễn phí hủy trước 24 giờ",
        mealPlan: "breakfast",
        paymentPolicy: "pay_later",
      },
    ],

    servicesAndFacilities: {
      featured: [
        "Hồ bơi tầng 16",
        "Brilliant Spa",
        "Buffet sáng quốc tế",
        "View cầu Rồng",
      ],
      groups: [
        {
          label: "Hồ bơi & Spa",
          icon: "spa",
          items: [
            "Hồ bơi infinity tầng 16",
            "Brilliant Spa (400m²)",
            "Phòng xông hơi",
            "Phòng gym",
            "Bể tắm thảo dược",
          ],
        },
        {
          label: "Ăn uống",
          icon: "restaurant",
          items: [
            "Nhà hàng The Dragon View (buffet)",
            "Rooftop Bar (tầng 16)",
            "Room Service 6:00–23:00",
          ],
        },
        {
          label: "Dịch vụ",
          icon: "service",
          items: [
            "Lễ tân 24/7",
            "Giặt là",
            "Đưa đón sân bay",
            "Tour",
            "Giữ hành lý",
          ],
        },
        {
          label: "Tiện ích",
          icon: "general",
          items: ["WiFi tốc độ cao", "Bãi đỗ xe (thu phí)", "ATM", "Thang máy"],
        },
      ],
    },

    policies: {
      checkIn: { from: "14:00" },
      checkOut: { until: "12:00" },
      cancellation: {
        type: "free",
        description: "Miễn phí hủy trước 24 giờ",
        deadline: "24 giờ",
      },
      childrenPolicy: {
        allowed: true,
        freeAgeLimit: 6,
        notes: ["Trẻ dưới 6 tuổi miễn phí", "Phụ thu giường phụ 200.000 VNĐ"],
      },
      petPolicy: { allowed: false, notes: ["Không nhận thú cưng"] },
      paymentMethods: ["Visa", "MasterCard", "Tiền mặt", "Chuyển khoản"],
      extraFees: ["Thuế VAT 10%", "Bãi đỗ xe 60.000 VNĐ/đêm"],
      smokingPolicy: "not_allowed",
    },

    contact: {
      phone: "+84 236 3222 999",
      email: "info@brillianthoteldanang.vn",
      address: "162 Trần Phú, Hải Châu, Đà Nẵng 550000",
      website: "https://www.brillianthoteldanang.vn",
      coordinates: { lat: 16.0631, lng: 108.2198 },
    },

    topReviews: [
      {
        id: "review-7-1",
        author: "Vũ Thị Lan",
        avatarUrl: "https://i.pravatar.cc/100?img=37",
        rating: 8.8,
        title: "Hồ bơi tầng 16 là điểm 10 không có nhưng",
        content:
          "Cặp đôi chúng tôi đặt phòng River View để mừng kỷ niệm. Hồ bơi tầng thượng lúc hoàng hôn quá đẹp, view cầu Rồng và sông Hàn tuyệt vời. Buffet sáng đa dạng. Phòng hơi nhỏ nhưng sạch và đầy đủ tiện nghi.",
        date: "2025-12-12",
        stayType: "couple",
        roomName: "Phòng Deluxe River View",
      },
    ],

    meta: {
      title: "Brilliant Hotel Đà Nẵng — Hồ Bơi View Cầu Rồng, Sông Hàn",
      description:
        "Khách sạn 4 sao ven sông Hàn, hồ bơi tầng 16 view cầu Rồng, bao gồm buffet sáng. Lý tưởng cho cặp đôi. Từ 1.050.000 VNĐ/đêm.",
      keywords: [
        "brilliant hotel đà nẵng",
        "hồ bơi view cầu rồng",
        "khách sạn sông hàn",
      ],
      canonicalUrl: "https://example.com/hotels/brilliant-hotel-da-nang",
    },
    lastUpdated: "2026-01-09T08:00:00Z",
  },

  // ═══════════════════════════════════════════════════════════════
  // 8. Mercure Bà Nà Hills
  // ═══════════════════════════════════════════════════════════════
  {
    id: "hotel-8",
    name: "Mercure Bà Nà Hills",
    slug: "mercure-da-nang-ba-na-hills",
    type: "resort",
    image:
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop",
    ],
    location: "Khu du lịch Bà Nà Hills, Hòa Vang, Đà Nẵng",
    coordinates: { lat: 15.9973, lng: 107.9897 },
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
    bookingCount: 687,
    price: 2100000,
    currency: "VND",
    priceNote: "Bao gồm vé cáp treo Bà Nà Hills",
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

    gallery: [
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=1200&h=800&fit=crop",
    ],

    overview:
      "Mercure Bà Nà Hills là khách sạn duy nhất nằm trên đỉnh Bà Nà Hills ở độ cao 1.487m so với mực nước biển — vị trí không nơi nào tại Đà Nẵng sánh được. Được thiết kế theo phong cách làng quê Pháp cổ điển với kiến trúc đá granit, mái ngói đỏ và khu vườn hoa tươi thắm, resort tạo cảm giác như đang ở một vùng quê nước Pháp thơ mộng lơ lửng trên mây. Chỉ cần bước ra khỏi cửa là đến Golden Bridge nổi tiếng thế giới và toàn bộ khu vui chơi giải trí Bà Nà Hills.",

    highlights: [
      {
        icon: "mountain",
        title: "Trên đỉnh núi 1.487m",
        description:
          "Khách sạn duy nhất tại Đà Nẵng nằm trên đỉnh Bà Nà Hills — ngủ trên mây theo nghĩa đen.",
        badge: "Độc nhất",
      },
      {
        icon: "bridge",
        title: "Gần Golden Bridge 2 phút",
        description:
          "Cầu Vàng nổi tiếng thế giới cách khách sạn chỉ 2 phút đi bộ — có thể chụp ảnh buổi sớm khi chưa có đông khách.",
        badge: "Iconic",
      },
      {
        icon: "french",
        title: "Kiến trúc làng Pháp cổ điển",
        description:
          "Toàn bộ khu resort mô phỏng làng quê Pháp thế kỷ 19 với nhà thờ, quảng trường và vườn hoa Châu Âu.",
      },
      {
        icon: "cloud",
        title: "Khí hậu mát mẻ quanh năm",
        description:
          "Nhiệt độ trung bình 20°C quanh năm, là nơi thoát khỏi cái nóng Đà Nẵng hè oi bức.",
        badge: "Mát mẻ",
      },
    ],

    nearbyPlaces: [
      {
        name: "Cầu Vàng (Golden Bridge)",
        category: "Điểm tham quan",
        distanceKm: 0.2,
        travelTimeMin: 3,
        icon: "attraction",
      },
      {
        name: "Vườn hoa Le Jardin",
        category: "Thiên nhiên",
        distanceKm: 0.3,
        travelTimeMin: 4,
        icon: "garden",
      },
      {
        name: "Khu Fantasy Park",
        category: "Giải trí",
        distanceKm: 0.5,
        travelTimeMin: 6,
        icon: "park",
      },
      {
        name: "Ga cáp treo đỉnh",
        category: "Giao thông",
        distanceKm: 0.1,
        travelTimeMin: 2,
        icon: "cable",
      },
      {
        name: "Trung tâm Đà Nẵng",
        category: "Đô thị",
        distanceKm: 40,
        travelTimeMin: 60,
        icon: "city",
      },
    ],

    rooms: [
      {
        id: "room-8-1",
        name: "Phòng Classic",
        type: "Classic",
        beds: [{ type: "queen", count: 1 }],
        capacity: 2,
        extraBedAllowed: true,
        extraBedCharge: 400000,
        sizeM2: 28,
        floor: "Tầng 1–2",
        view: "Hướng làng Pháp",
        price: 2100000,
        originalPrice: 2800000,
        currency: "VND",
        priceIncludes: ["Bữa sáng buffet cho 2", "Vé cáp treo 2 chiều", "WiFi"],
        quantity: 50,
        status: "available",
        availableCount: 14,
        amenities: [
          "Sưởi ấm điện",
          "TV 43 inch",
          "Minibar",
          "Két an toàn",
          "Đồ dùng phòng tắm cao cấp",
        ],
        highlights: [
          "Phòng sưởi ấm — cần thiết ở độ cao 1.487m",
          "Phong cách Pháp cổ điển",
        ],
        cancellationPolicy: "Miễn phí hủy trước 72 giờ",
        mealPlan: "breakfast",
        paymentPolicy: "pay_later",
      },
      {
        id: "room-8-2",
        name: "Phòng Superior Garden View",
        type: "Superior",
        beds: [{ type: "king", count: 1 }],
        capacity: 2,
        extraBedAllowed: true,
        extraBedCharge: 450000,
        sizeM2: 35,
        floor: "Tầng 2–3",
        view: "Hướng vườn hoa & núi",
        price: 2800000,
        originalPrice: 3500000,
        currency: "VND",
        priceIncludes: [
          "Bữa sáng buffet cho 2",
          "Vé cáp treo 2 chiều",
          "WiFi",
          "Welcome drink Pháp",
        ],
        quantity: 30,
        status: "available",
        availableCount: 8,
        gallery: [
          "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=500&fit=crop",
        ],
        amenities: [
          "Sưởi ấm trung tâm",
          "TV 50 inch",
          "Minibar wine",
          "Bồn tắm cổ điển",
          "Sân hiên nhìn vườn",
        ],
        highlights: [
          "View vườn hoa Pháp và núi rừng",
          "Bồn tắm claw-foot cổ điển Pháp",
        ],
        cancellationPolicy: "Miễn phí hủy trước 72 giờ",
        mealPlan: "breakfast",
        paymentPolicy: "pay_later",
      },
      {
        id: "room-8-3",
        name: "Suite Penthouse Đỉnh Núi",
        type: "Suite",
        beds: [{ type: "king", count: 1 }],
        capacity: 2,
        extraBedAllowed: false,
        sizeM2: 65,
        floor: "Tầng 4 (Penthouse)",
        view: "360° — núi rừng, mây và làng Pháp",
        price: 6500000,
        originalPrice: 8000000,
        currency: "VND",
        priceIncludes: [
          "Bữa sáng tại phòng hoặc nhà hàng",
          "Vé cáp treo không giới hạn",
          "WiFi",
          "Minibar cao cấp",
          "1 buổi spa couple",
        ],
        quantity: 5,
        status: "limited",
        availableCount: 1,
        gallery: [
          "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=800&h=500&fit=crop",
        ],
        amenities: [
          "Sưởi ấm + Lò sưởi",
          "TV 65 inch",
          "Minibar cao cấp",
          "Bồn tắm sâu",
          "Phòng tắm đứng mưa",
          "Ban công 360° toàn cảnh",
          "Phòng khách riêng",
        ],
        highlights: [
          "Ban công 360° nhìn thấy biển Đà Nẵng xa xa",
          "Lò sưởi gỗ thật",
          "Cao nhất đỉnh Bà Nà Hills",
        ],
        cancellationPolicy: "Miễn phí hủy trước 7 ngày",
        mealPlan: "breakfast",
        paymentPolicy: "pay_now",
      },
    ],

    servicesAndFacilities: {
      featured: [
        "Golden Bridge 2 phút",
        "Vườn hoa Le Jardin",
        "Fantasy Park",
        "Nhà hàng Pháp",
        "Spa",
      ],
      groups: [
        {
          label: "Trải nghiệm độc đáo",
          icon: "unique",
          items: [
            "Cầu Vàng Golden Bridge (2 phút đi bộ)",
            "Vườn hoa Le Jardin rộng 2ha",
            "Fantasy Park (vé bao gồm)",
            "Nhà thờ giả cổ 1.200 chỗ",
            "Hầm rượu vang ngầm",
          ],
        },
        {
          label: "Ăn uống",
          icon: "restaurant",
          items: [
            "Nhà hàng Le Jardin (Pháp & Âu)",
            "Buffet sáng quốc tế",
            "Bar rượu vang trong hầm đá",
            "Room service 24/7",
            "Picnic basket theo yêu cầu",
          ],
        },
        {
          label: "Sức khỏe",
          icon: "spa",
          items: [
            "Spa Indochine (400m²)",
            "Phòng gym với view núi",
            "Hồ bơi trong nhà (28°C)",
            "Yoga buổi sáng trên mây",
          ],
        },
        {
          label: "Dịch vụ",
          icon: "service",
          items: [
            "Lễ tân 24/7",
            "Shuttle xe đến ga cáp treo chân núi",
            "Đưa đón Đà Nẵng trung tâm (thu phí)",
            "Giặt là",
            "Hỗ trợ chụp ảnh chuyên nghiệp",
          ],
        },
        {
          label: "Tiện ích",
          icon: "general",
          items: [
            "WiFi toàn khu",
            "Hệ thống sưởi ấm trung tâm",
            "Quầy bán áo ấm & phụ kiện",
            "Tiệm bánh mì baguette hàng ngày",
          ],
        },
      ],
    },

    policies: {
      checkIn: {
        from: "15:00",
        note: "Chỉ tiếp nhận khách sau 15:00 do đặc thù cáp treo",
      },
      checkOut: {
        until: "11:00",
        note: "Checkout sớm để kịp cáp treo xuống núi trước 17:00",
      },
      cancellation: {
        type: "free",
        description: "Miễn phí hủy trước 72 giờ. Hủy muộn hơn tính phí 2 đêm.",
        deadline: "72 giờ",
      },
      childrenPolicy: {
        allowed: true,
        freeAgeLimit: 5,
        notes: [
          "Trẻ dưới 5 tuổi miễn phí",
          "Nhiệt độ trên núi thấp — mang đủ áo ấm cho trẻ",
          "Không có Kids Club chuyên biệt",
        ],
      },
      petPolicy: {
        allowed: false,
        notes: ["Không nhận thú cưng — quy định khu du lịch Bà Nà Hills"],
      },
      paymentMethods: ["Visa", "MasterCard", "Tiền mặt", "Chuyển khoản"],
      extraFees: ["Thuế VAT 10%", "Vé Fantasy Park bán riêng nếu không có gói"],
      importantNotes: [
        "Nhiệt độ trên đỉnh 15–22°C, mang áo ấm",
        "Cáp treo hoạt động 7:30–21:30 hàng ngày",
        "Không có ô tô lên đỉnh — di chuyển hoàn toàn bằng cáp treo",
        "Cần đặt phòng trước ít nhất 3 ngày vào mùa cao điểm",
      ],
      smokingPolicy: "designated_areas",
    },

    contact: {
      phone: "+84 236 3749 888",
      email: "reservation@mercurebanahills.vn",
      address: "Đỉnh Bà Nà Hills, Hòa Vang, Đà Nẵng 550000",
      website: "https://mercure.com/ba-na-hills",
      googleMapsUrl: "https://goo.gl/maps/mercure-ba-na-hills",
      coordinates: { lat: 15.9973, lng: 107.9897 },
    },

    topReviews: [
      {
        id: "review-8-1",
        author: "Hoàng Minh Đức",
        avatarUrl: "https://i.pravatar.cc/100?img=60",
        rating: 9.2,
        title: "Trải nghiệm không thể tìm thấy ở nơi khác",
        content:
          "Thức dậy giữa biển mây trắng, bước ra ban công nhìn cả vùng đồng bằng dưới chân. Buổi sáng sớm ra chụp ảnh Cầu Vàng khi chưa có du khách — đẹp không thể tả. Nhà hàng Pháp rất ngon. Phòng Suite Penthouse đáng từng đồng. Sẽ quay lại vào mùa đông.",
        date: "2025-11-08",
        stayType: "couple",
        roomName: "Suite Penthouse Đỉnh Núi",
      },
      {
        id: "review-8-2",
        author: "Akira Yamamoto",
        avatarUrl: "https://i.pravatar.cc/100?img=70",
        rating: 9.0,
        title: "Absolutely magical — sleeping in the clouds",
        content:
          "We stayed 2 nights and woke up both mornings to a sea of clouds below. The Golden Bridge at sunrise with almost no tourists was breathtaking. French village atmosphere is charming and very well done. Heating in the room is essential and works perfectly. A truly unique experience in Vietnam.",
        date: "2025-10-30",
        stayType: "couple",
        roomName: "Phòng Superior Garden View",
      },
    ],

    meta: {
      title: "Mercure Bà Nà Hills — Ngủ Trên Mây, Gần Cầu Vàng Golden Bridge",
      description:
        "Khách sạn duy nhất trên đỉnh Bà Nà Hills 1.487m, phong cách làng Pháp, 2 phút đến Golden Bridge. Bao gồm vé cáp treo. Từ 2.100.000 VNĐ/đêm.",
      keywords: [
        "mercure bà nà hills",
        "khách sạn bà nà hills",
        "golden bridge",
        "ngủ trên mây đà nẵng",
      ],
      canonicalUrl: "https://example.com/hotels/mercure-da-nang-ba-na-hills",
    },
    lastUpdated: "2026-01-11T08:00:00Z",
  },
];
