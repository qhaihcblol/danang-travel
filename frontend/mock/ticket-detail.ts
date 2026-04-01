import { TicketDetail } from "@/types/ticket-detail";

export const ticketsDetailMock: TicketDetail[] = [
  // ===== VÉ 1: Cáp Treo Bà Nà Hills & Cầu Vàng =====
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

    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    ],
    bookingCount: 8500,
    location: "Bà Nà Hills, thành phố Đà Nẵng",
    operator: "Golden Sunrise Tours",

    highlights: [
      "Cầu Vàng 150m nổi tiếng trên toàn thế giới",
      "Vòng quay Ferris 115m - cao nhất Đông Nam Á",
      "Khu vui chơi Fantastick Park đầy đủ tiện ích",
      "Nhà thờ Vàng kiến trúc Pháp cổ kính",
      "Tuylift qua cảnh núi Sơn Trà hùng vĩ",
      "Le Jardin d'Amour - khu vườn hoa lãng mạn",
      "Quán cà phê trên mây độc đáo",
    ],

    packages: [
      {
        id: "pkg-001-1",
        name: "Full Experience - Cáp Treo + Khu Vui Chơi",
        description: "Trải nghiệm đầy đủ Bà Nà Hills trong 1 ngày",
        price: 350000,
        originalPrice: 410000,
        available: true,
        stock: 45,
        maxPerOrder: 10,
        validUntil: "2026-12-31",

        benefits: [
          "Cáp treo khứ hồi (30 phút một chiều)",
          "Vào toàn bộ Fantastick Park và trò chơi",
          "Golden Bridge & vị trí thoát ảnh chuyên nghiệp",
          "Nhà thờ Vàng & Le Jardin d'Amour",
          "Buffet trưa tự chọn (20+ món)",
          "Hướng dẫn du lịch tiếng Việt chuyên nghiệp",
          "Bảo hiểm du lịch cơ bản",
        ],
        notIncluded: [
          "Đồ ăn & nước uống ngoài buffet",
          "Tàu Monorail thêm",
          "Hướng dẫn viên riêng",
          "Phí gửi xe",
        ],
        conditions: [
          "Có hiệu lực 12 tháng từ ngày mua",
          "Không hoàn lại tiền, chỉ được hoãn",
          "Được hoãn tối đa 2 lần trong năm",
          "Bắt buộc phải có CMND/Hộ chiếu",
        ],
        policies: [
          {
            type: "age",
            title: "Giảm giá trẻ em & người lớn",
            content:
              "Trẻ em < 6 tuổi: Miễn phí. Từ 6-12 tuổi: Giảm 30%. Người > 60 tuổi: Giảm 20%",
          },
          {
            type: "refund",
            title: "Chính sách hoàn tiền",
            content:
              "Hoàn 100% nếu hủy 48h trước. Hoàn 50% nếu hủy 24-48h. Không hoàn < 24h",
          },
          {
            type: "reschedule",
            title: "Thay đổi ngày",
            content: "Được thay đổi ngày miễn phí nếu thông báo 48h trước",
          },
        ],
      },
      {
        id: "pkg-001-2",
        name: "Cáp Treo + Tham Quan Cửa Khẩu",
        description: "Cáp treo khứ hồi và tham quan các điểm du lịch chính",
        price: 250000,
        originalPrice: 280000,
        available: true,
        stock: 120,
        maxPerOrder: 15,
        validUntil: "2026-12-31",

        benefits: [
          "Cáp treo khứ hồi",
          "Golden Bridge & chụp hình",
          "Nhà thờ Vàng & Le Jardin d'Amour",
          "Hướng dẫn du lịch tiếng Việt",
          "Nước uống miễn phí (chai nhỏ)",
        ],
        notIncluded: [
          "Fantastick Park",
          "Buffet trưa",
          "Tàu Monorail",
          "Bảo hiểm du lịch",
        ],
        conditions: [
          "Có hiệu lực 12 tháng",
          "Không hoàn tiền",
          "Giờ hoạt động: 7:30 - 22:00",
        ],
        policies: [
          {
            type: "refund",
            title: "Hoàn tiền",
            content: "Hoàn 100% nếu hủy 48h trước",
          },
          {
            type: "usage",
            title: "Điều kiện sử dụng",
            content:
              "Phải hoàn thành sử dụng trước 22:00. Không được mang vật cấm",
          },
        ],
      },
      {
        id: "pkg-001-3",
        name: "Cáp Treo Solo - Giảm Giá",
        description: "Chỉ cáp treo khứ hồi, tự do tham quan",
        price: 180000,
        originalPrice: 200000,
        available: true,
        stock: 200,
        maxPerOrder: 20,
        validUntil: "2026-12-31",

        benefits: [
          "Cáp treo khứ hồi",
          "Tự do tham quan tất cả điểm công cộng",
          "Golden Bridge cho ảnh",
        ],
        notIncluded: [
          "Hướng dẫn du lịch",
          "Buffet ăn trưa",
          "Fantastick Park",
          "Bảo hiểm",
        ],
        conditions: [
          "Có hiệu lực 6 tháng",
          "Không hoàn tiền",
          "Giờ đóng cửa: 21:30",
        ],
        policies: [
          {
            type: "refund",
            title: "Không hoàn tiền",
            content: "Vé này không hỗ trợ hoàn tiền hay hoãn lịch",
          },
        ],
      },
    ],

    policies: [
      {
        title: "Giờ hoạt động",
        content:
          "Mở cửa 7:30 - 22:00 hàng ngày. Cáp treo cuối cùng đóng cửa lúc 21:30",
      },
      {
        title: "Lưu ý an toàn",
        content:
          "Không mang vật sắc nhọn, chất gây cháy nổ. Giám sát trẻ em < 10 tuổi",
      },
      {
        title: "Ứng phó khẩn cấp",
        content: "Trạm y tế, nhân viên cứu hộ 24/7, đội cứu nạn sẵn sàng",
      },
      {
        title: "Thời tiết",
        content:
          "Có thể đóng cửa khi sương mù hoặc mưa bão. Kiểm tra trước khi đi",
      },
    ],

    usageGuide: [
      "Bước 1: Đến quầy check-in 30 phút trước",
      "Bước 2: Xuất trình vé điện tử + CMND/Hộ chiếu",
      "Bước 3: Lấy wristband tại cổng vào",
      "Bước 4: Xếp hàng vào cáp treo theo hướng dẫn viên",
      "Bước 5: Lên cáp treo, thưởng ngoạn cảnh đẹp 30 phút",
      "Bước 6: Tận hưởng các hoạt động tại đỉnh",
      "Bước 7: Tập trung tại quầy trước 21:00 để xuống",
      "Bước 8: Cấp lại wristband tại cổng ra",
    ],
  },

  // ===== VÉ 2: Phố Cổ Hội An =====
  {
    id: "ticket-002",
    title: "Phố Cổ Hội An - Vé Vào Cổng",
    thumbnail:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
    rating: 4.7,
    reviewCount: 3420,
    priceFrom: 180000,
    category: "attraction",

    gallery: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504681869696-d977e3a34596?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1469899385723-8e48d6fe4b13?w=600&h=400&fit=crop",
    ],
    bookingCount: 12000,
    location: "Phố Cổ, thành phố Hội An, tỉnh Quảng Nam",
    operator: "Hội An Heritage Organization",

    highlights: [
      "Phố cổ 2000 năm tuổi được UNESCO công nhận",
      "Hơn 800 nhà cổ kiến trúc Việt - Pháp - Trung",
      "Chợ Hội An nổi tiếng với đèn lồng truyền thống",
      "Cầu Nhật Bản - biểu tượng Hội An",
      "Nhà Độc Lạc với kiến trúc độc đáo",
      "Quán cà phê, nhà hàng, cửa hàng lưu niệm",
      "Dạo phố buổi tối với đèn lồng lung linh",
    ],

    packages: [
      {
        id: "pkg-002-1",
        name: "Vé Full Day - Vào Cổng + Tham Quan 5 Di Tích",
        description: "Vé vào phố cổ, được vào 5 di tích chính + dạo phố tự do",
        price: 180000,
        originalPrice: 200000,
        available: true,
        stock: 150,
        maxPerOrder: 20,
        validUntil: "2026-12-31",

        benefits: [
          "Vé vào phố cổ Hội An (hiệu lực 1 ngày)",
          "Được vào 5 di tích: Cầu Nhật, Chùa Cầu, Nhà Cổ, Hội Quán, Phòng trưng bày",
          "Dạo phố tự do, mua sắm lưu niệm",
          "Tham gia lễ hội ánh sáng chiều tối (nếu có)",
          "Nước uống miễn phí (bưu điểm tham quan)",
        ],
        notIncluded: [
          "Đồ ăn & nước uống tại quán cà phê",
          "Tour hướng dẫn riêng",
          "Thuyền dạo sông (thêm 50.000đ)",
          "Áo dài chụp ảnh (thuê 100.000đ)",
        ],
        conditions: [
          "Có hiệu lực 1 ngày (24h từ khi nhận vé)",
          "Không hoàn lại tiền",
          "Mở cửa: 7:30 - 22:00",
          "Được vào di tích: 8:00 - 17:30",
        ],
        policies: [
          {
            type: "age",
            title: "Miễn phí & Giảm giá",
            content:
              "Trẻ em < 5 tuổi: Miễn phí. Từ 5-11 tuổi: 50%. Người > 60 tuổi: 50%",
          },
          {
            type: "refund",
            title: "Chính sách hoàn tiền",
            content: "Hoàn 100% nếu hủy 48h trước. Không hoàn nếu hủy < 48h",
          },
        ],
      },
      {
        id: "pkg-002-2",
        name: "Vé Tối - Dạo Phố Đèn Lồng (16:00-22:00)",
        description: "Vé nhập cảnh phố cổ buổi tối để tận hưởng đèn lồng",
        price: 120000,
        originalPrice: 150000,
        available: true,
        stock: 200,
        maxPerOrder: 30,
        validUntil: "2026-12-31",

        benefits: [
          "Vé vào phố cổ buổi tối (16:00 - 22:00)",
          "Thưởng ngoạn đèn lồng truyền thống sáng lên",
          "Tham quan Cầu Nhật Bản dưới ánh đèn",
          "Chợ Hội An sôi động buổi tối",
          "Chụp ảnh đẹp lung linh",
        ],
        notIncluded: [
          "Ăn uống",
          "Vé các di tích (thêm 100.000đ)",
          "Tour hướng dẫn",
          "Gửi đồ",
        ],
        conditions: [
          "Vé này chỉ sử dụng buổi tối 16:00-22:00",
          "Không hoàn lại tiền",
          "Không được vào các di tích (chỉ dạo phố)",
        ],
        policies: [
          {
            type: "usage",
            title: "Giới hạn giờ sử dụng",
            content:
              "Chỉ sử dụng được từ 16:00 - 22:00. Vé hết hiệu lực sau 22:00",
          },
        ],
      },
      {
        id: "pkg-002-3",
        name: "Vé Bảo tàng & Tham Quan",
        description: "Vé vào phố cổ + 3 bảo tàng chính",
        price: 200000,
        originalPrice: 240000,
        available: true,
        stock: 100,
        maxPerOrder: 15,
        validUntil: "2026-12-31",

        benefits: [
          "Vé vào phố cổ",
          "Bảo tàng Chứng tích chiến tranh",
          "Bảo tàng Văn hóa Sa Huỳnh",
          "Phòng trưng bày nghệ thuật Hội An",
          "Hướng dẫn viên tiếng Việt (2h)",
        ],
        notIncluded: [
          "Ăn uống",
          "Chụp ảnh chuyên nghiệp",
          "Thuyền du ngoạn",
          "Áo dài thuê",
        ],
        conditions: [
          "Hiệu lực 1 ngày",
          "Hướng dẫn viên: 9:00-17:00",
          "Phải đặt trước 24h",
        ],
        policies: [
          {
            type: "refund",
            title: "Hoàn tiền",
            content: "Hoàn 100% nếu hủy 72h trước",
          },
        ],
      },
    ],

    policies: [
      {
        title: "Giờ hoạt động",
        content:
          "Phố cổ mở 7:30 - 22:00. Di tích mở 8:00 - 17:30. Tết Nguyên đán không đóng cửa",
      },
      {
        title: "Lưu ý du lịch",
        content:
          "Phố cổ rất đông vào 10:00-16:00. Nên đi sớm hoặc chiều tối. Mang nước uống & áo khoác",
      },
      {
        title: "Giao thông",
        content:
          "Cách Đà Nẵng 30km. Xe buýt từ Đà Nẵng đi Hội An 1h. Có bãi đỗ xe miễn phí",
      },
      {
        title: "Lưu ý mùa mưa",
        content:
          "Mùa mưa 9-10 tháng, phố cổ thường ngập. Vẫn hoạt động nhưng khó đi lại",
      },
    ],

    usageGuide: [
      "Bước 1: Đến cổng chính phố cổ Hội An",
      "Bước 2: Xuất trình vé điện tử + CMND",
      "Bước 3: Nhận vé giấy & bản đồ du lịch",
      "Bước 4: Tham quan các di tích theo vị trí trên bản đồ",
      "Bước 5: Ăn uống tại các quán cà phê truyền thống",
      "Bước 6: Mua sắm lưu niệm tại cửa hàng",
      "Bước 7: Tham gia lễ hội đèn lồng buổi tối",
      "Bước 8: Rời phố cổ trước 22:00",
    ],
  },

  // ===== VÉ 3: Bãi Biển Mỹ Khê =====
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

    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop",
    ],
    bookingCount: 5200,
    location: "Bãi Biển Mỹ Khê, thành phố Đà Nẵng",
    operator: "Mỹ Khế Beach Resort & Tours",

    highlights: [
      "Bãi biển sạch đẹp nhất Việt Nam",
      "Cát trắng mịn, nước biển xanh trong",
      "Hoàng hôn tuyệt đẹp lúc 17:30-18:30",
      "Âu yếm & yên tĩnh tại các bãi riêng",
      "Nước biển ấm quanh năm",
      "Không sóng lớn, an toàn cho trẻ em",
      "Công viên ven biển & đường đi bộ hiện đại",
    ],

    packages: [
      {
        id: "pkg-003-1",
        name: "Sunset Experience - Tắm & Ngắm Hoàng Hôn",
        description:
          "Tour chiều tối tắm biển, thưởng ngoạn hoàng hôn, bữa cơm trên bãi",
        price: 250000,
        originalPrice: 280000,
        available: true,
        stock: 80,
        maxPerOrder: 15,
        validUntil: "2026-12-31",

        benefits: [
          "Dạo bộ ven biển từ 16:00-17:00",
          "Tắm & nội chơi biển (2h)",
          "Thưởng ngoạn hoàng hôn từ bãi",
          "Bữa cơm ngoài trời (7 món)",
          "Nước uống & trái cây miễn phí",
          "Nhân viên cứu hộ & y tế 24/7",
          "Vé khu tắm an toàn (tắm dù)",
        ],
        notIncluded: [
          "Đồ bơi & dụng cụ bơi",
          "Ảnh chuyên nghiệp",
          "Hướng dẫn viên riêng",
          "Massage & spa",
        ],
        conditions: [
          "Tắm biển: 16:30-18:30",
          "Hoàng hôn: 17:45-18:30",
          "Mang theo CMND & bảo hiểm",
          "Không tắm khi sóng lớn",
        ],
        policies: [
          {
            type: "age",
            title: "Điều kiện tuổi",
            content:
              "Trẻ em < 5 tuổi: Miễn phí (không tắm). Từ 5-12: Giảm 40%. Phải có người lớn kèm",
          },
          {
            type: "usage",
            title: "Điều kiện tắm",
            content:
              "Bắt buộc đeo phao. Không tắm khi sóng lớn. Tập thể dục sáng (tuỳ chọn)",
          },
          {
            type: "refund",
            title: "Hoàn tiền",
            content:
              "Hoàn 100% nếu hủy 48h trước. Hoàn 50% nếu thời tiết xấu nhưng vẫn có hoạt động",
          },
        ],
      },
      {
        id: "pkg-003-2",
        name: "Beach Relax - Nằm Dưới Ô & Thưởng Ngoạn",
        description: "Lên nhà tắm, nằm dưới ô, thưởng ngoạn hoàng hôn",
        price: 150000,
        originalPrice: 180000,
        available: true,
        stock: 150,
        maxPerOrder: 30,
        validUntil: "2026-12-31",

        benefits: [
          "Chỗ nằm dưới ô (từ 16:00-18:30)",
          "Ghế xếp & tấm lót bãi",
          "Nước uống lạnh & trái cây",
          "Thưởng ngoạn hoàng hôn",
          "Phòng tắm & toilet sạch sẽ",
          "Nhân viên hỗ trợ",
        ],
        notIncluded: [
          "Tắm biển",
          "Ăn cơm",
          "Giặt quần áo",
          "Ảnh chuyên nghiệp",
        ],
        conditions: [
          "Thời gian: 16:00-18:30",
          "Chỉ nằm không tắm",
          "Mang theo đồ tắm riêng",
        ],
        policies: [
          {
            type: "usage",
            title: "Quy định sử dụng",
            content:
              "Không tắm biển. Giữ gìn bãi sạch sẽ. Không mang thực phẩm ngoài vào",
          },
        ],
      },
      {
        id: "pkg-003-3",
        name: "Full Day Beach - Sáng Chiều Cả Ngày",
        description: "Vé sáng chiều, tắm cả ngày, ăn trưa + tối",
        price: 450000,
        originalPrice: 520000,
        available: true,
        stock: 40,
        maxPerOrder: 10,
        validUntil: "2026-12-31",

        benefits: [
          "Dạo bộ sáng 6:00-7:00 (yoga ngoài trời)",
          "Tắm & chơi biển 7:30-12:00",
          "Ăn trưa buffet (12:00-13:30)",
          "Nghỉ ngơi & massage tại bãi (13:30-16:00)",
          "Tắm & chơi biển chiều (16:00-18:00)",
          "Ăn tối & thưởng ngoạn hoàng hôn (18:00-20:00)",
          "Bảo hiểm & an toàn đầy đủ",
        ],
        notIncluded: [
          "Đồ bơi & dụng cụ",
          "Massage thêm",
          "Ảnh chuyên nghiệp",
          "Rượu bia (có tính phí)",
        ],
        conditions: [
          "Toàn bộ ngày: 6:00-20:00",
          "Phải đăng ký trước 72h",
          "Tổ chức 4 người trở lên",
          "Mang CMND & bảo hiểm",
        ],
        policies: [
          {
            type: "refund",
            title: "Hoàn tiền",
            content:
              "Hoàn 100% nếu hủy 72h trước. Hoàn 50% nếu hủy 24-72h. Không hoàn < 24h",
          },
          {
            type: "age",
            title: "Giảm giá nhóm",
            content:
              "5-10 người: Giảm 10%. 11-20 người: Giảm 15%. 20+ người: Giảm 20%",
          },
        ],
      },
    ],

    policies: [
      {
        title: "An toàn tắm biển",
        content:
          "Nhân viên cứu hộ 24/7. Cấm tắm khi sóng lớn. Bắt buộc đeo phao",
      },
      {
        title: "Thời tiết",
        content: "Mùa hè: Nắng mạnh, UV cao. Mùa mưa: Có thể hủy nếu sóng lớn",
      },
      {
        title: "Phòng tắm & vệ sinh",
        content:
          "Phòng tắm sạch, nước ngọt. Toilet & lavabo. Không có máy sấy tóc",
      },
      {
        title: "Giao thông",
        content:
          "Cách trung tâm Đà Nẵng 5km. Bãi đỗ xe miễn phí. Xe buýt từ trung tâm",
      },
    ],

    usageGuide: [
      "Bước 1: Đến điểm tập trung Mỹ Khê (gate chính)",
      "Bước 2: Xuất trình vé điện tử + CMND",
      "Bước 3: Nhận phao & huấn luyện an toàn",
      "Bước 4: Vào phòng tắm đổi quần áo",
      "Bước 5: Vào biển tắm dưới sự giám sát",
      "Bước 6: Thưởng ngoạn hoàng hôn từ bãi",
      "Bước 7: Ăn cơm tối tại khu ăn",
      "Bước 8: Vệ sinh & rời bãi trước 20:00",
    ],
  },

  // ===== VÉ 4: Động Mỏm Non & Hòn Chim =====
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

    gallery: [
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1469022563149-aa64dbd37718?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop",
    ],
    bookingCount: 6800,
    location: "Hòn Chim Phượng Hoàng, Hạ Long, Quảng Ninh",
    operator: "Halong Bay Adventures",

    highlights: [
      "Động Mỏm Non 2000 tuổi với nhũ đá kỳ vĩ",
      "Hòn Chim Phượng Hoàng - tượng đài thiên nhiên",
      "Thuyền du ngoạn qua 100+ hòn đảo",
      "Bãi tắm riêng tư Surprise Beach",
      "Hoàng hôn trên vịnh Hạ Long tuyệt đẹp",
      "Câu cá đêm & đèn lồng trên nước",
      "Bộp cua & hải sâm tươi sống",
    ],

    packages: [
      {
        id: "pkg-004-1",
        name: "Tour 2 Ngày 1 Đêm - Thuyền Ngủ Trên Vịnh",
        description: "Du ngoạn động & hòn đảo, ăn 3 bữa, ngủ trên tàu",
        price: 1200000,
        originalPrice: 1500000,
        available: true,
        stock: 30,
        maxPerOrder: 8,
        validUntil: "2026-12-31",

        benefits: [
          "Đón tại khách sạn thành phố (8:00-8:30)",
          "Thuyền 5 sao du ngoạn động & hòn Chim",
          "Ăn 3 bữa: trưa + tối + sáng hôm sau",
          "Ngủ trên tàu cabin 2 giường",
          "Câu cá đêm & lò cạp",
          "Bãi tắm Surprise Beach",
          "Yoga sáng & thiền",
          "Hướng dẫn viên tiếng Việt-Anh 24h",
          "Nước uống & hoa quả miễn phí",
        ],
        notIncluded: [
          "Vé máy bay",
          "Quần áo ngoài",
          "Bảo hiểm du lịch",
          "Rượu bia cao cấp",
          "Dịch vụ massage",
        ],
        conditions: [
          "Đi: Sáng 8:30. Về: Sáng hôm sau 11:00",
          "Tối thiểu 2 người",
          "Phải đặt trước 7 ngày",
          "Đón trả khách sạn trong thành phố",
        ],
        policies: [
          {
            type: "refund",
            title: "Chính sách hoàn tiền",
            content:
              "Hoàn 100% nếu hủy 14 ngày trước. Hoàn 50% nếu hủy 7-14 ngày. Không hoàn < 7 ngày",
          },
          {
            type: "reschedule",
            title: "Thay đổi ngày",
            content: "Được thay đổi ngày miễn phí nếu thông báo 7 ngày trước",
          },
          {
            type: "age",
            title: "Trẻ em & em bé",
            content:
              "< 2 tuổi: Miễn phí. 2-6 tuổi: 50%. 6-12: 70%. > 12: Giá người lớn",
          },
        ],
      },
      {
        id: "pkg-004-2",
        name: "Tour 1 Ngày - Thuyền 5 Sao (08:00-17:00)",
        description: "Thuyền sang trọng, 2 bữa ăn, động & bãi tắm",
        price: 750000,
        originalPrice: 900000,
        available: true,
        stock: 50,
        maxPerOrder: 15,
        validUntil: "2026-12-31",

        benefits: [
          "Đón tại khách sạn (8:00-8:30)",
          "Thuyền 5 sao cabin riêng biệt",
          "Ăn trưa buffet & tối sang trọng",
          "Tham quan Động Mỏm Non 2h",
          "Hòn Chim Phượng Hoàng & đảo Diệp Vân",
          "Bãi tắm Surprise Beach",
          "Thưởng ngoạn hoàng hôn",
          "Nước lạnh & hoa quả 4 lần",
          "Hướng dẫn viên tiếng Việt-Anh",
        ],
        notIncluded: [
          "Vé máy bay",
          "Quần áo du lịch",
          "Bảo hiểm",
          "Rượu bia",
          "Hướng dẫn riêng",
        ],
        conditions: [
          "Từ 8:00-17:00",
          "Tối thiểu 2 người",
          "Đặt trước 5 ngày",
          "Trả khách sạn lúc 17:30",
        ],
        policies: [
          {
            type: "refund",
            title: "Hoàn tiền",
            content:
              "Hoàn 100% nếu hủy 7 ngày. Hoàn 50% nếu hủy 3-7 ngày. Không hoàn < 3 ngày",
          },
          {
            type: "usage",
            title: "Vận động vật lý",
            content:
              "Có hoạt động leo núi & bơi (trung bình). Phù hợp mọi độ tuổi > 6 tuổi",
          },
        ],
      },
      {
        id: "pkg-004-3",
        name: "Tour 1 Ngày - Bãi Tắm & Câu Cá (08:00-17:00)",
        description: "Thuyền thường, tắm biển, câu cá, ăn 2 bữa",
        price: 450000,
        originalPrice: 550000,
        available: true,
        stock: 80,
        maxPerOrder: 20,
        validUntil: "2026-12-31",

        benefits: [
          "Đón tại khách sạn (8:00-8:30)",
          "Thuyền thường nhưng sạch sẽ",
          "Ăn trưa canh cua & ốc",
          "Tắm bãi Surprise Beach 3h",
          "Câu cá + hướng dẫn",
          "Ăn tối hải sâm & cua",
          "Nước uống miễn phí",
          "Hướng dẫn viên 24h",
        ],
        notIncluded: [
          "Vé máy bay",
          "Tắm Động Mỏm Non",
          "Quần áo",
          "Bảo hiểm",
          "Hướng dẫn riêng",
        ],
        conditions: ["8:00-17:00", "Tối thiểu 4 người", "Đặt trước 3 ngày"],
        policies: [
          {
            type: "age",
            title: "Giảm giá",
            content: "3-12 tuổi: 60%. Nhóm 8+: Giảm 10%",
          },
          {
            type: "refund",
            title: "Hoàn tiền",
            content: "Hoàn 100% nếu hủy 3 ngày. Không hoàn < 3 ngày",
          },
        ],
      },
    ],

    policies: [
      {
        title: "An toàn tắm biển",
        content:
          "Nhân viên cứu hộ chuyên nghiệp. Bắt buộc đeo phao. Cấm tắm sóng lớn",
      },
      {
        title: "Tình trạng thời tiết",
        content:
          "Có thể hoãn nếu sóng lớn (tuyên bố 24h). Hủy & hoàn tiền 100% nếu bão",
      },
      {
        title: "Sức khỏe & yêu cầu",
        content:
          "Không tâm can > 4 tháng tuổi. Có phòng y tế trên tàu. Không rượu khi tắm",
      },
      {
        title: "Giao thông",
        content:
          "Cách Hà Nội 160km. Bến: Bến Cái Bèo (Hạ Long). Shuttle từ thành phố",
      },
    ],

    usageGuide: [
      "Bước 1: Đón tại khách sạn Hạ Long lúc 8:00",
      "Bước 2: Đến bến Cái Bèo, check-in tàu 8:45",
      "Bước 3: Xuất trình vé & CMND, nhận phao",
      "Bước 4: Xuất phát 9:00, tới Động Mỏm Non",
      "Bước 5: Tham quan động 10:00-12:00",
      "Bước 6: Ăn trưa & thuyền tới bãi",
      "Bước 7: Tắm & chơi bãi 13:00-15:00",
      "Bước 8: Ăn tối & ngắm hoàng hôn 17:00",
      "Bước 9: Quay về bến 17:30, trả khách sạn 18:30",
    ],
  },

  // ===== VÉ 5: Bảo Tàng Chứng Tích Chiến Tranh Mỹ =====
  {
    id: "ticket-005",
    title: "Bảo Tàng Chứng Tích Chiến Tranh Mỹ",
    thumbnail:
      "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=400&h=300&fit=crop",
    rating: 4.5,
    reviewCount: 1560,
    priceFrom: 150000,
    category: "museum",

    gallery: [
      "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1549921233-a6750c76d287?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1578070463688-20aa7ee98562?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    ],
    bookingCount: 4500,
    location: "65 Ngô Quyền, Quận 1, thành phố Hồ Chí Minh",
    operator: "War Remnants Museum",

    highlights: [
      "Bảo tàng nổi tiếng thế giới ghi lại lịch sử Chiến tranh Mỹ-Việt",
      "Triển lãm từ năm 1955 đến 1975 chi tiết",
      "Trực thăng, máy bay, xe tăng chiến sự thực",
      "Tờ rơi, vũ khí & dụng cụ quân sự gốc",
      "Ảnh tư liệu & tường thuật từ phóng viên",
      "Phòng trưng bày về hậu quả chiến tranh",
      "Hướng dẫn chi tiết về các sự kiện lịch sử",
    ],

    packages: [
      {
        id: "pkg-005-1",
        name: "Vé Tự Khám Phá + Audio Guide",
        description: "Vé vào bảo tàng + thiết bị audio guide 20+ ngôn ngữ",
        price: 150000,
        originalPrice: 180000,
        available: true,
        stock: 200,
        maxPerOrder: 50,
        validUntil: "2026-12-31",

        benefits: [
          "Vé vào bảo tàng (hiệu lực toàn ngày)",
          "Audio guide 20+ ngôn ngữ (bao gồm)",
          "Bản đồ bảo tàng tiếng Việt-Anh",
          "Tham quan tất cả 7 khu vực triển lãm",
          "Xem phim tư liệu 45 phút (mỗi 30 phút)",
          "Wifi miễn phí tại bảo tàng",
          "Nước uống lạnh tại tiếp tân",
        ],
        notIncluded: [
          "Hướng dẫn viên riêng",
          "Ảnh chuyên nghiệp",
          "Sách về bảo tàng (bán 150.000đ)",
          "Bảo hiểm du lịch",
        ],
        conditions: [
          "Hiệu lực toàn ngày từ 8:00-17:30",
          "Audio guide: 2h sử dụng",
          "Không được quay video",
        ],
        policies: [
          {
            type: "age",
            title: "Miễn phí & Giảm giá",
            content:
              "Trẻ em < 6 tuổi: Miễn phí. Từ 6-12: 50%. Học sinh có thẻ: 50%. Người > 60: 50%",
          },
          {
            type: "refund",
            title: "Không hoàn tiền",
            content: "Vé này không hoàn tiền sau khi mua. Không được hoãn lịch",
          },
        ],
      },
      {
        id: "pkg-005-2",
        name: "Tour Hướng Dẫn 2 Giờ (Sáng 9:00 hoặc Chiều 14:00)",
        description:
          "Tour với hướng dẫn viên tiếng Việt hoặc Anh, giải thích chi tiết",
        price: 350000,
        originalPrice: 420000,
        available: true,
        stock: 30,
        maxPerOrder: 15,
        validUntil: "2026-12-31",

        benefits: [
          "Hướng dẫn viên chuyên nghiệp 2h",
          "Nhóm tối đa 15 người",
          "Giải thích chi tiết từng khu triển lãm",
          "Audio guide & bản đồ",
          "Tham quan tất cả khu vực quan trọng",
          "Trả lời mọi câu hỏi lịch sử",
          "Nước uống & khăn lạnh",
        ],
        notIncluded: [
          "Ảnh chuyên nghiệp",
          "Sách lưu niệm",
          "Bảo hiểm",
          "Đón/trả khách sạn",
        ],
        conditions: [
          "Sáng: 9:00-11:00. Chiều: 14:00-16:00",
          "Tối thiểu 5 người",
          "Phải đặt trước 48h",
          "Giờ tập trung: 15 phút trước",
        ],
        policies: [
          {
            type: "refund",
            title: "Hoàn tiền",
            content: "Hoàn 100% nếu hủy 48h trước. Không hoàn < 48h",
          },
          {
            type: "age",
            title: "Giảm giá nhóm",
            content: "Nhóm 5-10: Giảm 10%. Nhóm 10+: Giảm 15%",
          },
        ],
      },
      {
        id: "pkg-005-3",
        name: "Vé Combo - Bảo Tàng + Phim Tài Liệu",
        description: "Vé vào + xem phim tài liệu 90 phút về chiến tranh",
        price: 200000,
        originalPrice: 250000,
        available: true,
        stock: 100,
        maxPerOrder: 30,
        validUntil: "2026-12-31",

        benefits: [
          "Vé vào bảo tàng toàn ngày",
          "Audio guide 20+ ngôn ngữ",
          "Phim tài liệu 90 phút (tiếng Anh+Việt)",
          "Phòng chiếu điều hòa thoải mái",
          "Bản đồ & hướng dẫn chi tiết",
          "Tham quan tất cả triển lãm",
          "Nước uống & khăn lạnh",
        ],
        notIncluded: [
          "Hướng dẫn viên riêng",
          "Ảnh chuyên nghiệp",
          "Sách lưu niệm",
          "Bảo hiểm",
        ],
        conditions: [
          "Mở cửa: 8:00-17:30",
          "Phim chiếu: 10:00, 12:00, 14:00, 16:00",
          "Không được quay video",
        ],
        policies: [
          {
            type: "refund",
            title: "Hoàn tiền",
            content: "Hoàn 100% nếu hủy 24h trước",
          },
          {
            type: "age",
            title: "Trẻ em",
            content: "< 6 tuổi: Miễn phí. 6-12 tuổi: 50%",
          },
        ],
      },
    ],

    policies: [
      {
        title: "Giờ hoạt động",
        content:
          "Mở cửa 8:00-17:30 hàng ngày. Đóng cửa: Thứ Hai hàng tuần. Tết Nguyên đán đóng 3 ngày",
      },
      {
        title: "Lưu ý khi tham quan",
        content:
          "Nội dung nhạy cảm, không thích hợp cho trẻ em < 8 tuổi. Không được chạm vào các vật dụng. Tắt điện thoại",
      },
      {
        title: "Giao thông",
        content:
          "Cách Tan Sơn Nhất 10km. Có bãi đỗ xe miễn phí. Xe buýt từ trung tâm TPHCM",
      },
      {
        title: "Cục Bộ Bảo Tàng",
        content:
          "Nhà vệ sinh sạch sẽ. Quán cà phê nhỏ tại tầng 1. Không có quớt",
      },
    ],

    usageGuide: [
      "Bước 1: Đến cổng bảo tàng (65 Ngô Quyền) 15 phút trước",
      "Bước 2: Xuất trình vé điện tử + CMND",
      "Bước 3: Nhận audio guide & bản đồ",
      "Bước 4: Qua cổng, tham quan Khu 1 (Nền Tảng)",
      "Bước 5: Khu 2, 3, 4 (Triển Lãm Chính) - 60 phút",
      "Bước 6: Khu 5, 6 (Hậu Quả & Di Vật) - 45 phút",
      "Bước 7: Phòng Chiếu - xem phim hoặc tự do",
      "Bước 8: Tham quan Khu 7 (Ngoài Trời)",
      "Bước 9: Trả Audio guide & rời bảo tàng",
    ],
  },

  // ===== VÉ 6: Khu Du Lịch Giao Thuyền Sông Hàn =====
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

    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1469899385723-8e48d6fe4b13?w=600&h=400&fit=crop",
    ],
    bookingCount: 3800,
    location: "Bãi biển Mỹ Khê, thành phố Đà Nẵng",
    operator: "Dragon Bridge Tours & Riverside Cruises",

    highlights: [
      "Thuyền giao truyền thống với buồm là vàng",
      "Du ngoạn sông Hàn 3km qua cầu Rồng nổi tiếng",
      "Ngắm cảnh thành phố từ nước xuyên hôm",
      "Chụp ảnh cầu Rồng dưới ánh sáng màu",
      "Tiệc hải sản tươi sống trên thuyền",
      "Ngắm hoàng hôn trên sông Hàn lãng mạn",
      "Dịch vụ massage & spa trên thuyền",
    ],

    packages: [
      {
        id: "pkg-006-1",
        name: "Luxury Cruise - 2 Giờ Ăn Tối Sang Trọng",
        description:
          "Thuyền cao cấp, ăn buffet hải sâm, ngắm sông Hàn hoàng hôn",
        price: 600000,
        originalPrice: 750000,
        available: true,
        stock: 40,
        maxPerOrder: 8,
        validUntil: "2026-12-31",

        benefits: [
          "Đón tại khách sạn (17:00-17:30)",
          "Thuyền 5 sao cabin riêng biệt",
          "Ăn buffet hải sâm & ghế tôm lớn",
          "Rượu vang & nước uống hạng cao",
          "Chèo thuyền qua cầu Rồng",
          "Ngắm hoàng hôn trên sông Hàn",
          "Nhạc sống & khiêu vũ (nếu có)",
          "Hướng dẫn viên tiếng Anh",
        ],
        notIncluded: [
          "Vé máy bay",
          "Quần áo trang trọng",
          "Massage thêm",
          "Bảo hiểm du lịch",
          "Rượu mạnh cao cấp",
        ],
        conditions: [
          "Thời gian: 17:30-19:30",
          "Tối thiểu 2 người",
          "Phải đặt trước 5 ngày",
          "Mặc quần áo trang trọng",
        ],
        policies: [
          {
            type: "refund",
            title: "Chính sách hoàn tiền",
            content:
              "Hoàn 100% nếu hủy 7 ngày trước. Hoàn 50% nếu hủy 3-7 ngày. Không hoàn < 3 ngày",
          },
          {
            type: "age",
            title: "Điều kiện trẻ em",
            content:
              "< 5 tuổi: Miễn phí (không ăn). 5-12 tuổi: 60%. Phải có người lớn kèm theo",
          },
        ],
      },
      {
        id: "pkg-006-2",
        name: "Evening Cruise - 1.5 Giờ Ngắm Hoàng Hôn",
        description: "Thuyền tiêu chuẩn, nhẹ nhàng, thưởng ngoạn hoàng hôn",
        price: 350000,
        originalPrice: 450000,
        available: true,
        stock: 80,
        maxPerOrder: 20,
        validUntil: "2026-12-31",

        benefits: [
          "Đón tại khách sạn (17:30)",
          "Thuyền tiêu chuẩn thoải mái",
          "Cơm tấm & canh cua lẩu",
          "Nước uống & bia lạnh",
          "Du ngoạn sông Hàn 1.5h",
          "Ngắm hoàng hôn & cầu Rồng sáng đèn",
          "Chụp ảnh tự do",
          "Nhạc nền dễ chịu",
        ],
        notIncluded: [
          "Vé máy bay",
          "Quần áo trang trọng",
          "Rượu mạnh",
          "Bảo hiểm",
          "Massage",
        ],
        conditions: [
          "Thời gian: 17:30-19:00",
          "Tối thiểu 2 người",
          "Đặt trước 3 ngày",
        ],
        policies: [
          {
            type: "refund",
            title: "Hoàn tiền",
            content:
              "Hoàn 100% nếu hủy 3 ngày. Hoàn 50% nếu hủy 24-72h. Không hoàn < 24h",
          },
          {
            type: "age",
            title: "Giảm giá",
            content: "3-12 tuổi: 50%. Nhóm 10+: Giảm 15%",
          },
        ],
      },
      {
        id: "pkg-006-3",
        name: "Morning Heritage - 2 Giờ Tham Quan Lịch Sử",
        description: "Tour sáng, tham quan cầu Rồng, ngôi đền cổ, ăn sáng nhẹ",
        price: 280000,
        originalPrice: 350000,
        available: true,
        stock: 100,
        maxPerOrder: 30,
        validUntil: "2026-12-31",

        benefits: [
          "Đón tại khách sạn (7:00)",
          "Thuyền tiêu chuẩn",
          "Tham quan Cầu Rồng - công trình nổi tiếng",
          "Ghé thăm các ngôi đền cổ trên sông",
          "Ăn sáng nhẹ (bánh mỳ & trứng)",
          "Nước uống & trái cây",
          "Hướng dẫn viên tiếng Việt-Anh",
          "Chụp ảnh tự do",
        ],
        notIncluded: [
          "Vé máy bay",
          "Quần áo",
          "Rượu bia",
          "Bảo hiểm",
          "Hướng dẫn riêng",
        ],
        conditions: [
          "Thời gian: 7:00-9:00",
          "Tối thiểu 4 người",
          "Đặt trước 2 ngày",
          "Sáng sớm, chuẩn bị tỉnh táo",
        ],
        policies: [
          {
            type: "refund",
            title: "Hoàn tiền",
            content: "Hoàn 100% nếu hủy 2 ngày. Không hoàn < 2 ngày",
          },
          {
            type: "age",
            title: "Trẻ em",
            content: "< 5 tuổi: Miễn phí. 5-12: 40%",
          },
        ],
      },
    ],

    policies: [
      {
        title: "An toàn trên thuyền",
        content:
          "Áo phao bắt buộc khi lên thuyền. Nhân viên cứu hộ 24/7. Không được nhậy trên thuyền",
      },
      {
        title: "Thời tiết",
        content:
          "Có thể hoãn nếu gió lớn hoặc mưa bão. Thông báo 24h trước nếu hủy",
      },
      {
        title: "Đồ ăn & Nước uống",
        content:
          "Hải sâm tươi sống. Bia & rượu vang. Không có nước ngọt cao cấp",
      },
      {
        title: "Giao thông",
        content:
          "Đón tại khách sạn thành phố Đà Nẵng. Thuyền xuất phát từ bến Mỹ Khê (5km)",
      },
    ],

    usageGuide: [
      "Bước 1: Chuẩn bị & ngoài cửa khách sạn 10 phút trước",
      "Bước 2: Xe đón tới bến Mỹ Khê (15 phút)",
      "Bước 3: Check-in thuyền, xuất trình vé & CMND",
      "Bước 4: Nhận áo phao bắt buộc",
      "Bước 5: Lên thuyền, chọn chỗ ngồi",
      "Bước 6: Xuất phát du ngoạn sông Hàn",
      "Bước 7: Ăn & uống dùng dụng cụ an toàn",
      "Bước 8: Ngắm cầu Rồng & hoàng hôn",
      "Bước 9: Trở về bến, xe trả khách sạn",
      "Bước 10: Rời khỏi trước 20:00",
    ],
  },
];
