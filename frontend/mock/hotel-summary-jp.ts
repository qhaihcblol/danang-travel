import type { HotelSummary } from "@/types/hotel-summary";

export const hotelsSummaryMock: HotelSummary[] = [
  // ================================================================
  // 1. THE SHIN HOTEL & SPA ★★★★★
  // ================================================================
  {
    id: "hotel-001",
    name: "The Shin Hotel & Spa",
    slug: "the-shin-hotel-spa-da-nang",
    type: "hotel",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    location: "Võ Nguyên Giáp, Mỹ Khê, Đà Nẵng",
    stars: 5,
    rating: 9.2,
    reviewCount: 1284,
    bookingCount: 4350,
    price: 2_850_000,
    currency: "VND",
    priceNote: "1泊あたりの料金、税込",
    amenities: [
      "インフィニティプール",
      "スパ",
      "プライベートビーチ",
      "レストラン",
      "バー",
      "ジム",
      "無料Wi-Fi",
    ],
    description:
      "世界最高峰のビーチのひとつ、ミーケービーチに隣接するThe Shin Hotel & Spaは、オーシャンビューのインフィニティプールとダナン随一と評されるスパを備えた、最高水準の5つ星リゾート体験をご提供します。",
    tags: [
      "オーシャンビュー",
      "インフィニティプール",
      "スパ",
      "プライベートビーチ",
    ],
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
    priceNote: "1泊あたりの料金、税別",
    amenities: [
      "屋外プール",
      "レストラン",
      "ビーチバー",
      "ヨガ",
      "無料Wi-Fi",
      "無料自転車レンタル",
    ],
    description:
      "Azura Boutique Resortは地中海風の温かみあるデザインで統一され、静かなノンヌック・ビーチのほとりに位置しています。喧騒を離れて安らぎを求めるカップルや旅行者に最適な宿泊先です。",
    tags: ["ブティック", "静寂", "地中海スタイル", "ノンヌック"],
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
    priceNote: "1ベッド/1泊あたりの料金、税込",
    amenities: [
      "ドミトリールーム",
      "共有キッチン",
      "コワーキングスペース",
      "高速Wi-Fi",
      "無料ロッカー",
      "毎日無料ツアー",
    ],
    description:
      "ダナン市内で最も活気あふれるホステル。ドラゴンブリッジまで徒歩わずか5分。新しい友人を作りながら街を探索したいバックパッカーにとって理想的な出会いの場です。",
    tags: [
      "市内中心部",
      "バックパッカー",
      "コワーキング",
      "ドラゴンブリッジ近く",
    ],
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
    priceNote: "1泊あたりの料金、長期滞在に最適",
    amenities: [
      "フル装備キッチン",
      "専用洗濯機",
      "プール",
      "駐車場",
      "高速Wi-Fi",
      "Smart TV（Netflix対応）",
    ],
    description:
      "ファム・ヴァン・ドン大通りに位置する高級サービスアパートメント。ファミリーや長期滞在者に最適。各部屋にはフル装備のキッチン、専用ランドリー、プライベートバルコニーが備わっています。",
    tags: ["アパートメント", "ファミリー", "長期滞在", "キッチン付き"],
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
    priceNote: "1泊あたりの料金、朝食込み",
    amenities: [
      "プール3か所",
      "200mプライベートビーチ",
      "2000㎡スパ",
      "レストラン5か所",
      "カジノ",
      "お子様無料",
    ],
    description:
      "Vela Grand Resortは、ミーケービーチに沿って広がる8ヘクタールの敷地を誇り、ダナン随一の豪華リゾートとして知られています。カンファレンス、ウェディング、そして家族での贅沢なバケーションに最適な、ダナンを代表するリゾートです。",
    tags: ["5つ星", "メガリゾート", "MICE", "ウェディング", "ファミリー"],
  },
];
