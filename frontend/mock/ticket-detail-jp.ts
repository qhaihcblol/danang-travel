import { TicketDetail } from "@/types/ticket-detail";

export const ticketsDetailMock: TicketDetail[] = [
  // ===== チケット1: バナヒルズケーブルカー & ゴールデンブリッジ =====
  {
    id: "ticket-001",
    title: "バナヒルズ・ゴールデンブリッジ - ケーブルカー乗車券",
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
    location: "バナヒルズ、ダナン市",
    operator: "Golden Sunrise Tours",

    highlights: [
      "150mのゴールデンブリッジ - 世界的に有名",
      "115m観覧車 - 東南アジア最高",
      "充実したFantastick Park遊園地",
      "フランス建築の黄色い教会",
      "ソンチャ山を通るリフトの雄大な景色",
      "ロマンチックな花園 Le Jardin d'Amour",
      "ユニークな雲の上のカフェ",
    ],

    packages: [
      {
        id: "pkg-001-1",
        name: "フルエクスペリエンス - ケーブルカー + 遊園地",
        description: "バナヒルズの1日フル体験パッケージ",
        price: 350000,
        originalPrice: 410000,
        available: true,
        stock: 45,
        maxPerOrder: 10,
        validUntil: "2026-12-31",

        benefits: [
          "ケーブルカー往復乗車（片道30分）",
          "Fantastick Park 全施設利用可能",
          "ゴールデンブリッジ & プロ級撮影スポット",
          "黄色い教会 & Le Jardin d'Amour",
          "ランチビュッフェ自由選択（20種類以上）",
          "ベトナム語ガイド（プロフェッショナル）",
          "基本旅行保険付き",
        ],
        notIncluded: [
          "ビュッフェ以外の食事・飲料",
          "追加モノレール乗車（別途50,000₫）",
          "プライベートガイド",
          "駐車料金",
        ],
        conditions: [
          "購入日から12ヶ月間有効",
          "払い戻し不可、日程変更のみ可能",
          "年間最大2回まで日程変更可能",
          "利用時にパスポート提示必須",
        ],
        policies: [
          {
            type: "age",
            title: "子供・シニア割引",
            content: "6才未満: 無料。6～12才: 30%割引。60才以上: 20%割引",
          },
          {
            type: "refund",
            title: "払い戻しポリシー",
            content:
              "48時間前キャンセル: 100%払い戻し。24～48時間: 50%払い戻し。24時間以内: 払い戻し不可",
          },
          {
            type: "reschedule",
            title: "日程変更",
            content: "48時間前通知で無料日程変更可能",
          },
        ],
      },
      {
        id: "pkg-001-2",
        name: "ケーブルカー + ゲート見学パッケージ",
        description: "ケーブルカーと主要観光スポット見学",
        price: 250000,
        originalPrice: 280000,
        available: true,
        stock: 120,
        maxPerOrder: 15,
        validUntil: "2026-12-31",

        benefits: [
          "ケーブルカー往復乗車",
          "ゴールデンブリッジ & 撮影",
          "黄色い教会 & 花園",
          "ベトナム語ガイド付き",
          "無料冷たい飲料（小瓶）",
        ],
        notIncluded: [
          "Fantastick Park",
          "ランチビュッフェ",
          "食事・飲料（ビュッフェ以外）",
        ],
        conditions: ["12ヶ月間有効", "払い戻し不可", "営業時間: 7:30～22:00"],
        policies: [
          {
            type: "refund",
            title: "払い戻しポリシー",
            content: "48時間前キャンセル: 100%払い戻し",
          },
          {
            type: "usage",
            title: "利用条件",
            content: "22:00までに利用完了必須。危険物持ち込み禁止",
          },
        ],
      },
      {
        id: "pkg-001-3",
        name: "ケーブルカー単体 - 割引価格",
        description: "ケーブルカー往復のみ、自由見学",
        price: 180000,
        originalPrice: 200000,
        available: true,
        stock: 200,
        maxPerOrder: 20,
        validUntil: "2026-12-31",

        benefits: [
          "ケーブルカー往復乗車",
          "全公開スポット自由見学",
          "ゴールデンブリッジ撮影OK",
        ],
        notIncluded: [
          "ガイドサービス",
          "ランチビュッフェ",
          "Fantastick Park",
          "保険",
        ],
        conditions: ["6ヶ月間有効", "払い戻し不可", "最終乗車: 21:30"],
        policies: [
          {
            type: "refund",
            title: "払い戻し不可",
            content: "このチケットは払い戻し・日程変更不可",
          },
        ],
      },
    ],

    policies: [
      {
        title: "営業時間",
        content:
          "毎日7:30～22:00営業。ケーブルカー最終乗車: 21:30。正月営業: 6:30開始",
      },
      {
        title: "安全上の注意",
        content:
          "先の鋭い物、危険物の持ち込み禁止。10才未満の子供は保護者同伴必須",
      },
      {
        title: "緊急対応",
        content: "医療室常設、レスキュー隊24時間体制。緊急電話: 0236-3791 666",
      },
      {
        title: "天候について",
        content:
          "濃い霧または嵐の場合、閉園する可能性があります。事前確認: 0236-3791 777",
      },
    ],

    usageGuide: [
      "ステップ1: ホテル1階チェックインカウンターへ30分前到着",
      "ステップ2: 電子チケット + パスポート + 保険証明提示",
      "ステップ3: 入口でリストバンドを受け取り、署名確認",
      "ステップ4: ガイドの指示に従いケーブルカー乗車",
      "ステップ5: ケーブルカー乗車（30分）で景色を堪能",
      "ステップ6: 山頂でのアクティビティを楽しむ",
      "ステップ7: 21:00までにカウンターに集合",
      "ステップ8: 下山用のリストバンドを返却",
    ],
  },

  // ===== チケット2: ホイアン古町 =====
  {
    id: "ticket-002",
    title: "ホイアン古町 - 入場券",
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
    location: "ホイアン古町、ホイアン市、クアンナム省",
    operator: "Hội An Heritage Organization",

    highlights: [
      "2000年の歴史を持つ古町、UNESCO認定",
      "800棟以上のベトナム・フランス・中国建築",
      "伝統的なランタンで有名なホイアン市場",
      "ホイアンのシンボル - 日本橋",
      "独特な建築のタンドック邸",
      "カフェ、レストラン、みやげ物店",
      "夜のランタン祭りが幻想的",
    ],

    packages: [
      {
        id: "pkg-002-1",
        name: "フルデイチケット - 入場 + 5遺跡見学",
        description: "古町入場、5つの主要遺跡 + 自由散策",
        price: 180000,
        originalPrice: 200000,
        available: true,
        stock: 150,
        maxPerOrder: 20,
        validUntil: "2026-12-31",

        benefits: [
          "ホイアン古町入場（24時間有効）",
          "5遺跡入場: 日本橋、チャウ寺、古家、会館、展示室",
          "自由散策・みやげ物購入",
          "夜間ライトアップ祭り参加可（開催時）",
          "見学地点での無料水分補給",
        ],
        notIncluded: [
          "カフェ・食事・飲料代",
          "プライベートガイド",
          "川下り（追加50,000₫）",
          "アオザイ衣装レンタル（100,000₫）",
        ],
        conditions: [
          "24時間有効（受取時から）",
          "払い戻し不可",
          "営業: 7:30～22:00",
          "遺跡見学: 8:00～17:30",
        ],
        policies: [
          {
            type: "age",
            title: "無料・割引",
            content: "5才未満: 無料。5～11才: 50%割引。60才以上: 50%割引",
          },
          {
            type: "refund",
            title: "払い戻しポリシー",
            content:
              "48時間前キャンセル: 100%払い戻し。24時間以内: 払い戻し不可",
          },
        ],
      },
      {
        id: "pkg-002-2",
        name: "夜間チケット - ランタン散策 (16:00-22:00)",
        description: "夜間限定、伝統ランタン見学",
        price: 120000,
        originalPrice: 150000,
        available: true,
        stock: 200,
        maxPerOrder: 30,
        validUntil: "2026-12-31",

        benefits: [
          "古町夜間入場（16:00～22:00）",
          "伝統ランタンのライトアップ鑑賞",
          "日本橋ナイト観光",
          "活気あるホイアン市場",
          "美しい夜景撮影",
        ],
        notIncluded: [
          "食事・飲料",
          "遺跡入場（追加100,000₫）",
          "ガイドサービス",
          "荷物預かり",
        ],
        conditions: [
          "夜間限定: 16:00～22:00のみ有効",
          "払い戻し不可",
          "遺跡見学不可（散策のみ）",
        ],
        policies: [
          {
            type: "usage",
            title: "使用制限",
            content: "16:00～22:00のみ有効。22:00以降は無効",
          },
        ],
      },
      {
        id: "pkg-002-3",
        name: "博物館 & ツアーパッケージ",
        description: "古町入場 + 3博物館",
        price: 200000,
        originalPrice: 240000,
        available: true,
        stock: 100,
        maxPerOrder: 15,
        validUntil: "2026-12-31",

        benefits: [
          "古町入場",
          "戦争証跡博物館",
          "サフン文化博物館",
          "ホイアン芸術展示室",
          "ベトナム語ガイド（2時間）",
        ],
        notIncluded: [
          "食事・飲料",
          "プロ写真撮影",
          "川下りツアー",
          "アオザイレンタル",
        ],
        conditions: [
          "24時間有効",
          "ガイド時間: 9:00～17:00",
          "24時間前予約必須",
        ],
        policies: [
          {
            type: "refund",
            title: "払い戻しポリシー",
            content: "72時間前キャンセル: 100%払い戻し",
          },
        ],
      },
    ],

    policies: [
      {
        title: "営業時間",
        content: "古町: 7:30～22:00。遺跡: 8:00～17:30。正月営業継続",
      },
      {
        title: "観光上の注意",
        content: "10:00～16:00が最混雑。早朝または夜間推奨。水分・上着持参",
      },
      {
        title: "アクセス",
        content: "ダナンから30km。バス所要時間: 1時間。無料駐車場あり",
      },
      {
        title: "雨季の注意",
        content: "9～10月の雨季は浸水の可能性。営業継続だが移動が困難",
      },
    ],

    usageGuide: [
      "ステップ1: ホイアン古町メインゲートへ到着",
      "ステップ2: 電子チケット + 身分証提示",
      "ステップ3: 紙チケット & 観光地図受取",
      "ステップ4: 地図に従い遺跡見学",
      "ステップ5: 伝統カフェで休息",
      "ステップ6: みやげ物店で買い物",
      "ステップ7: 夜間ランタン祭り参加",
      "ステップ8: 22:00前に古町から退出",
    ],
  },

  // ===== チケット3: ミーケービーチ =====
  {
    id: "ticket-003",
    title: "ミーケービーチ - サンセット鑑賞ツアー",
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
    location: "ミーケービーチ、ダナン市",
    operator: "Mỹ Khế Beach Resort & Tours",

    highlights: [
      "ベトナム最高峰のビーチ（フォーブス2019認定）",
      "白砂、透明な海水",
      "17:30～18:30のサンセットは絶景",
      "プライベートエリアでのんびり",
      "通年温かい海水（25～30℃）",
      "波が穏やかで子供も安全",
      "モダンな海岸公園 & 散歩道",
    ],

    packages: [
      {
        id: "pkg-003-1",
        name: "サンセットエクスペリエンス - 海水浴 & 夕食",
        description: "夕方の海水浴、サンセット、浜辺でのお食事",
        price: 250000,
        originalPrice: 280000,
        available: true,
        stock: 80,
        maxPerOrder: 15,
        validUntil: "2026-12-31",

        benefits: [
          "海岸散歩（16:00～17:00）",
          "海水浴 & ビーチゲーム（2時間）",
          "浜辺からサンセット鑑賞",
          "屋外ディナー（7品料理）",
          "無料飲料 & フルーツ",
          "レスキュー隊 & 医療スタッフ24/7",
          "安全浴用エリア（監視員付き）",
        ],
        notIncluded: [
          "水着 & ビーチ用品",
          "プロ写真撮影",
          "プライベートガイド",
          "マッサージ & スパ",
        ],
        conditions: [
          "海水浴: 16:30～18:30",
          "サンセット: 17:45～18:30",
          "身分証 & 保険証持参",
          "波が高い場合は海水浴禁止",
        ],
        policies: [
          {
            type: "age",
            title: "年齢制限",
            content:
              "5才未満: 無料（海水浴除く）。5～12才: 40%割引。保護者同伴必須",
          },
          {
            type: "usage",
            title: "海水浴条件",
            content:
              "ライフジャケット着用必須。波が高い場合禁止。朝ヨガ参加可（オプション）",
          },
          {
            type: "refund",
            title: "払い戻しポリシー",
            content:
              "48時間前: 100%払い戻し。悪天候でも活動継続の場合: 50%払い戻し",
          },
        ],
      },
      {
        id: "pkg-003-2",
        name: "ビーチリラックス - 傘の下で鑑賞",
        description: "ビーチチェア、傘、サンセット観賞（海水浴なし）",
        price: 150000,
        originalPrice: 180000,
        available: true,
        stock: 150,
        maxPerOrder: 30,
        validUntil: "2026-12-31",

        benefits: [
          "傘付きビーチチェア（16:00～18:30）",
          "ビーチマット付属",
          "冷たい飲料 & フルーツ",
          "サンセット鑑賞",
          "清潔なシャワー室 & トイレ",
          "スタッフサポート",
        ],
        notIncluded: ["海水浴", "食事", "洗濯", "プロ写真"],
        conditions: [
          "時間: 16:00～18:30",
          "海水浴禁止",
          "水着自持ちが必要な場合は別途",
        ],
        policies: [
          {
            type: "usage",
            title: "使用規則",
            content: "海水浴禁止。ビーチ清潔保持。外部飲食物持ち込み禁止",
          },
        ],
      },
      {
        id: "pkg-003-3",
        name: "フルデイビーチ - 朝から夜まで",
        description: "終日パッケージ、朝晩の食事、マッサージ",
        price: 450000,
        originalPrice: 520000,
        available: true,
        stock: 40,
        maxPerOrder: 10,
        validUntil: "2026-12-31",

        benefits: [
          "朝ヨガ（6:00～7:00）",
          "海水浴 & ビーチゲーム（7:30～12:00）",
          "ランチビュッフェ（12:00～13:30）",
          "ビーチマッサージ休息タイム（13:30～16:00）",
          "午後の海水浴（16:00～18:00）",
          "夜食 & サンセット観賞（18:00～20:00）",
          "完全保険 & 安全確保",
        ],
        notIncluded: [
          "水着 & 用品",
          "追加マッサージ",
          "プロ写真",
          "酒類（有料）",
        ],
        conditions: [
          "終日: 6:00～20:00",
          "72時間前予約必須",
          "4人以上での開催",
          "身分証 & 保険持参",
        ],
        policies: [
          {
            type: "refund",
            title: "払い戻しポリシー",
            content:
              "72時間前: 100%払い戻し。24～72時間: 50%払い戻し。24時間以内: 払い戻し不可",
          },
          {
            type: "age",
            title: "グループ割引",
            content: "5～10人: 10%割引。11～20人: 15%割引。20人以上: 20%割引",
          },
        ],
      },
    ],

    policies: [
      {
        title: "海水浴の安全",
        content:
          "24/7レスキュー隊。波が高い場合は禁止。ライフジャケット着用必須",
      },
      {
        title: "天候",
        content: "夏: 強い日差し、UV注意。雨季: 波高い場合キャンセル可",
      },
      {
        title: "シャワー施設",
        content: "清潔なシャワー室、淡水完備。トイレ & 洗面台。ドライヤー持参",
      },
      {
        title: "アクセス",
        content: "ダナン市街中心から5km。無料駐車場あり。市街バス利用可",
      },
    ],

    usageGuide: [
      "ステップ1: ミーケービーチ集合地点到着（30分前）",
      "ステップ2: 電子チケット + 身分証提示",
      "ステップ3: ライフジャケット受取 & 安全講習",
      "ステップ4: シャワー室で着替え",
      "ステップ5: ビーチで海水浴開始",
      "ステップ6: 浜辺からサンセット鑑賞",
      "ステップ7: 夕食レストランで食事",
      "ステップ8: シャワー & 後始末",
      "ステップ9: 20:00前にビーチ退出",
    ],
  },

  // ===== チケット4: モムノン鍾乳洞 & フェニックス島 =====
  {
    id: "ticket-004",
    title: "モムノン鍾乳洞 & フェニックス島",
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
    location: "フェニックス島、ハロン市、クアンニン省",
    operator: "Halong Bay Adventures",

    highlights: [
      "2000年の歴史を持つモムノン鍾乳洞、鍾乳石が美しい",
      "フェニックス島 - 自然の傑作",
      "100以上の島を通るクルーズ",
      "プライベートビーチ Surprise Beach",
      "ハロン湾のサンセット絶景",
      "夜間釣り & 水上ランタン",
      "新鮮なカニ & 海参料理",
    ],

    packages: [
      {
        id: "pkg-004-1",
        name: "2日1夜 - 湾内での船中泊",
        description: "鍾乳洞 & 島巡り、3食、船で宿泊",
        price: 1200000,
        originalPrice: 1500000,
        available: true,
        stock: 30,
        maxPerOrder: 8,
        validUntil: "2026-12-31",

        benefits: [
          "市街地ホテルピックアップ（8:00～8:30）",
          "5つ星船でのクルーズ & 洞窟見学",
          "3食付き: 昼食 + 夕食 + 朝食",
          "船中2人部屋での宿泊",
          "夜間釣り & スコーピオンフィッシュ",
          "Surprise Beachプライベートビーチ",
          "朝ヨガ & 瞑想",
          "日本語・英語ガイド24時間対応",
          "無料飲料 & フルーツ盛り",
        ],
        notIncluded: [
          "航空券",
          "衣類・個人用品",
          "旅行保険（追加可能）",
          "プレミアムアルコール",
          "マッサージサービス",
        ],
        conditions: [
          "出発: 朝8:30。帰着: 翌日11:00",
          "最少2人で開催",
          "7日前予約必須",
          "市街地ホテルとの往復送迎付き",
        ],
        policies: [
          {
            type: "refund",
            title: "払い戻しポリシー",
            content:
              "14日前: 100%払い戻し。7～14日前: 50%払い戻し。7日以内: 払い戻し不可",
          },
          {
            type: "reschedule",
            title: "日程変更",
            content: "7日前通知で無料日程変更可能",
          },
          {
            type: "age",
            title: "子供料金",
            content:
              "2才未満: 無料。2～6才: 50%。6～12才: 70%。12才以上: 大人料金",
          },
        ],
      },
      {
        id: "pkg-004-2",
        name: "1日ツアー - 5つ星船 (08:00-17:00)",
        description: "豪華船、2食、洞窟 & ビーチ見学",
        price: 750000,
        originalPrice: 900000,
        available: true,
        stock: 50,
        maxPerOrder: 15,
        validUntil: "2026-12-31",

        benefits: [
          "ホテルピックアップ（8:00～8:30）",
          "5つ星船プライベートキャビン",
          "ビュッフェ昼食 & 豪華夕食",
          "モムノン鍾乳洞見学2時間",
          "フェニックス島 & ディエプ島",
          "Surprise Beach で海水浴",
          "サンセット鑑賞",
          "冷たい飲料 & フルーツ4回分",
          "日本語・英語ガイド",
        ],
        notIncluded: [
          "航空券",
          "衣類",
          "保険",
          "アルコール",
          "プライベートガイド",
        ],
        conditions: [
          "8:00～17:00",
          "最少2人",
          "5日前予約",
          "17:30にホテル到着",
        ],
        policies: [
          {
            type: "refund",
            title: "払い戻しポリシー",
            content:
              "7日前: 100%払い戻し。3～7日前: 50%払い戻し。3日以内: 払い戻し不可",
          },
          {
            type: "usage",
            title: "運動強度",
            content: "登山 & 水泳あり（中程度）。6才以上に推奨",
          },
        ],
      },
      {
        id: "pkg-004-3",
        name: "1日ツアー - ビーチ & 釣り (08:00-17:00)",
        description: "標準船、海水浴、カニ釣り、2食",
        price: 450000,
        originalPrice: 550000,
        available: true,
        stock: 80,
        maxPerOrder: 20,
        validUntil: "2026-12-31",

        benefits: [
          "ホテルピックアップ（8:00～8:30）",
          "標準船（清潔）",
          "カニスープランチ & ウニ",
          "Surprise Beach 海水浴3時間",
          "カニ釣り + ガイド指導",
          "シーフード夕食",
          "無料飲料",
          "スタッフサポート24時間",
        ],
        notIncluded: [
          "航空券",
          "モムノン鍾乳洞（別料金50,000₫）",
          "衣類",
          "保険",
          "プライベートガイド",
        ],
        conditions: ["8:00～17:00", "最少4人", "3日前予約"],
        policies: [
          {
            type: "age",
            title: "割引",
            content: "3～12才: 60%。8人以上グループ: 10%割引",
          },
          {
            type: "refund",
            title: "払い戻しポリシー",
            content: "3日前: 100%払い戻し。3日以内: 払い戻し不可",
          },
        ],
      },
    ],

    policies: [
      {
        title: "海での安全",
        content: "プロレスキュー隊。ライフジャケット着用必須。波高い場合は禁止",
      },
      {
        title: "天候対応",
        content: "波が高い場合は24時間前通知で延期。嵐の場合は100%払い戻し",
      },
      {
        title: "健康と安全",
        content:
          "妊娠4ヶ月以降は乗船不可。船上に医療室あり。飲酒時の海水浴禁止",
      },
      {
        title: "アクセス",
        content:
          "ハノイから160km。乗船地: ケイバオベン（ハロン）。市街地からシャトル",
      },
    ],

    usageGuide: [
      "ステップ1: ハロンシティホテル集合（8:00時点）",
      "ステップ2: ケイバオベンへ送迎（30分）",
      "ステップ3: 船にチェックイン、身分証提示",
      "ステップ4: ライフジャケット受取",
      "ステップ5: 朝9:00出航、モムノン鍾乳洞へ",
      "ステップ6: 鍾乳洞見学（10:00～12:00）",
      "ステップ7: ランチ & ビーチへ移動",
      "ステップ8: Surprise Beachで海水浴（13:00～15:00）",
      "ステップ9: 夕食 & サンセット鑑賞（17:00）",
      "ステップ10: 乗船地帰着（17:30）、ホテル到着（18:30）",
    ],
  },

  // ===== チケット5: 戦争証跡博物館 =====
  {
    id: "ticket-005",
    title: "戦争証跡博物館",
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
    location: "65 グエン・クアン通り、1区、ホーチミン市",
    operator: "War Remnants Museum",

    highlights: [
      "ベトナム戦争の歴史を記録する世界的な博物館",
      "1955年から1975年の詳細な展示",
      "実際の戦闘用ヘリコプター・飛行機・戦車",
      "オリジナルの印刷物・武器・軍事用具",
      "報道写真記者の記録と証言",
      "戦争の影響に関する展示室",
      "詳細な歴史解説パネル",
    ],

    packages: [
      {
        id: "pkg-005-1",
        name: "自由見学 + オーディオガイド",
        description: "博物館入場 + 20言語オーディオガイド",
        price: 150000,
        originalPrice: 180000,
        available: true,
        stock: 200,
        maxPerOrder: 50,
        validUntil: "2026-12-31",

        benefits: [
          "博物館終日入場",
          "オーディオガイド（20言語）",
          "ベトナム語・英語マップ",
          "7展示エリア全て見学可",
          "45分ドキュメンタリー映画鑑賞",
          "館内無料Wi-Fi",
          "受付で冷たい飲料",
        ],
        notIncluded: [
          "プライベートガイド",
          "プロ写真撮影",
          "博物館書籍（150,000₫販売）",
          "旅行保険",
        ],
        conditions: [
          "終日営業: 8:00～17:30",
          "オーディオガイド: 2時間利用",
          "動画撮影禁止",
        ],
        policies: [
          {
            type: "age",
            title: "無料・割引",
            content:
              "6才未満: 無料。6～12才: 50%割引。学生証提示: 50%割引。60才以上: 50%割引",
          },
          {
            type: "refund",
            title: "払い戻しポリシー",
            content: "購入後払い戻し不可。日程変更なし",
          },
        ],
      },
      {
        id: "pkg-005-2",
        name: "ガイドツアー 2時間 (9:00 or 14:00)",
        description: "プロガイド付き詳細ツアー（ベトナム語・英語）",
        price: 350000,
        originalPrice: 420000,
        available: true,
        stock: 30,
        maxPerOrder: 15,
        validUntil: "2026-12-31",

        benefits: [
          "プロガイド2時間",
          "最大15人小グループ",
          "各展示エリアの詳細解説",
          "オーディオガイド & マップ",
          "全重要エリア見学",
          "歴史質問に回答",
          "冷たい飲料 & タオル",
        ],
        notIncluded: ["プロ写真", "博物館書籍", "保険", "ホテルピックアップ"],
        conditions: [
          "朝9:00～11:00 or 昼14:00～16:00",
          "最少5人",
          "48時間前予約",
          "15分前集合",
        ],
        policies: [
          {
            type: "refund",
            title: "払い戻しポリシー",
            content: "48時間前: 100%払い戻し。24時間以内: 払い戻し不可",
          },
          {
            type: "age",
            title: "グループ割引",
            content: "5～10人: 10%割引。10人以上: 15%割引",
          },
        ],
      },
      {
        id: "pkg-005-3",
        name: "コンボチケット - 博物館 + 映画",
        description: "入場 + 90分ドキュメンタリー映画鑑賞",
        price: 200000,
        originalPrice: 250000,
        available: true,
        stock: 100,
        maxPerOrder: 30,
        validUntil: "2026-12-31",

        benefits: [
          "博物館終日入場",
          "オーディオガイド（20言語）",
          "90分映画（英語・ベトナム語字幕）",
          "快適な映画館（エアコン完備）",
          "マップ & 詳細ガイド",
          "全展示エリア見学",
          "冷たい飲料 & タオル",
        ],
        notIncluded: ["プライベートガイド", "プロ写真", "書籍", "保険"],
        conditions: [
          "営業: 8:00～17:30",
          "映画上映: 10:00, 12:00, 14:00, 16:00",
          "動画撮影禁止",
        ],
        policies: [
          {
            type: "refund",
            title: "払い戻しポリシー",
            content: "24時間前: 100%払い戻し",
          },
          {
            type: "age",
            title: "子供料金",
            content: "6才未満: 無料。6～12才: 50%割引",
          },
        ],
      },
    ],

    policies: [
      {
        title: "営業時間",
        content: "毎日8:00～17:30。月曜日休館。正月3日間休館",
      },
      {
        title: "見学時の注意",
        content: "内容が敏感（8才以下非推奨）。展示物に触らない。携帯電話オフ",
      },
      {
        title: "アクセス",
        content:
          "タンソンニャット空港から10km。無料駐車場。市街地からバス利用可",
      },
      {
        title: "館内施設",
        content: "トイレ清潔。カフェあり（1階）。コンビニなし",
      },
    ],

    usageGuide: [
      "ステップ1: 博物館正門到着（15分前）",
      "ステップ2: 電子チケット + 身分証提示",
      "ステップ3: オーディオガイド & マップ受取",
      "ステップ4: チケット確認後入場",
      "ステップ5: エリア1（基礎）から見学（15分）",
      "ステップ6: エリア2, 3, 4（メイン展示）60分",
      "ステップ7: エリア5, 6（戦争の影響）45分",
      "ステップ8: 映画室 or 自由時間",
      "ステップ9: エリア7（屋外展示）見学",
      "ステップ10: オーディオガイド返却 & 退出",
    ],
  },

  // ===== チケット6: ハン川川下り =====
  {
    id: "ticket-006",
    title: "ハン川観光 - サイゴン川クルーズ",
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
    location: "ミーケービーチ、ダナン市",
    operator: "Dragon Bridge Tours & Riverside Cruises",

    highlights: [
      "伝統的な帆船（黄色の帆）",
      "ハン川3kmクルーズ、有名なドラゴン橋を通過",
      "昼間は街並みを水上から眺望",
      "カラフルにライトアップされたドラゴン橋撮影",
      "船上での新鮮なシーフード宴",
      "ハン川のサンセット - ロマンチック",
      "船上でのマッサージ & スパサービス",
    ],

    packages: [
      {
        id: "pkg-006-1",
        name: "ラグジュアリークルーズ - 2時間ディナー",
        description: "豪華船、シーフードビュッフェ、サンセット鑑賞",
        price: 600000,
        originalPrice: 750000,
        available: true,
        stock: 40,
        maxPerOrder: 8,
        validUntil: "2026-12-31",

        benefits: [
          "ホテルピックアップ（17:00～17:30）",
          "5つ星船プライベートキャビン",
          "ウニシーフードビュッフェ & 尾海老",
          "プレミアムワイン & ドリンク",
          "ドラゴン橋をクルーズ",
          "ハン川サンセット観賞",
          "ライブミュージック & ダンス（開催時）",
          "英語ガイド",
        ],
        notIncluded: [
          "航空券",
          "正装（推奨）",
          "追加マッサージ",
          "旅行保険",
          "プレミアムアルコール",
        ],
        conditions: ["時間: 17:30～19:30", "最少2人", "5日前予約", "正装推奨"],
        policies: [
          {
            type: "refund",
            title: "払い戻しポリシー",
            content:
              "7日前: 100%払い戻し。3～7日前: 50%払い戻し。3日以内: 払い戻し不可",
          },
          {
            type: "age",
            title: "子供条件",
            content: "5才未満: 無料（食事除く）。5～12才: 60%。保護者同伴必須",
          },
        ],
      },
      {
        id: "pkg-006-2",
        name: "イブニングクルーズ - 1.5時間サンセット",
        description: "標準船、軽食、サンセット観賞",
        price: 350000,
        originalPrice: 450000,
        available: true,
        stock: 80,
        maxPerOrder: 20,
        validUntil: "2026-12-31",

        benefits: [
          "ホテルピックアップ（17:30）",
          "標準船（快適）",
          "コムタムランチ & カニ鍋",
          "冷たいビール & ドリンク",
          "ハン川1.5時間クルーズ",
          "サンセット & ドラゴン橋ライトアップ観賞",
          "自由撮影",
          "バックグラウンド音楽",
        ],
        notIncluded: ["航空券", "正装", "アルコール", "保険", "マッサージ"],
        conditions: ["時間: 17:30～19:00", "最少2人", "3日前予約"],
        policies: [
          {
            type: "refund",
            title: "払い戻しポリシー",
            content:
              "3日前: 100%払い戻し。24～72時間: 50%払い戻し。24時間以内: 払い戻し不可",
          },
          {
            type: "age",
            title: "割引",
            content: "3～12才: 50%。10人以上グループ: 15%割引",
          },
        ],
      },
      {
        id: "pkg-006-3",
        name: "モーニング遺産ツアー - 2時間歴史見学",
        description: "早朝ツアー、ドラゴン橋、古寺見学、軽朝食",
        price: 280000,
        originalPrice: 350000,
        available: true,
        stock: 100,
        maxPerOrder: 30,
        validUntil: "2026-12-31",

        benefits: [
          "ホテルピックアップ（7:00）",
          "標準船",
          "ドラゴン橋 - 有名建造物見学",
          "川沿いの古寺巡り",
          "軽朝食（パン & 卵）",
          "飲料 & フルーツ",
          "ベトナム語・英語ガイド",
          "自由撮影",
        ],
        notIncluded: [
          "航空券",
          "衣類",
          "アルコール",
          "保険",
          "プライベートガイド",
        ],
        conditions: ["時間: 7:00～9:00", "最少4人", "2日前予約", "早朝出発"],
        policies: [
          {
            type: "refund",
            title: "払い戻しポリシー",
            content: "2日前: 100%払い戻し。2日以内: 払い戻し不可",
          },
          {
            type: "age",
            title: "子供料金",
            content: "5才未満: 無料。5～12才: 40%割引",
          },
        ],
      },
    ],

    policies: [
      {
        title: "船上の安全",
        content: "ライフジャケット必須。レスキュー隊24/7。飛び込み禁止",
      },
      {
        title: "天候",
        content: "風強い・嵐の場合は延期。24時間前通知で対応",
      },
      {
        title: "食事 & 飲料",
        content: "新鮮なシーフード。ビール & ワイン。プレミアムドリンク有料",
      },
      {
        title: "アクセス",
        content: "ダナン市街地ホテル集合。ミーケービーチから5kmの乗船地",
      },
    ],

    usageGuide: [
      "ステップ1: ホテル外で準備 & ピックアップ待機（10分前）",
      "ステップ2: 送迎車でミーケービーチ乗船地へ（15分）",
      "ステップ3: 船チェックイン、チケット提示 & 身分証",
      "ステップ4: ライフジャケット受取（必須）",
      "ステップ5: 船に乗船、座席選択",
      "ステップ6: 出航（クルーズ開始）",
      "ステップ7: 食事 & 飲料を楽しむ",
      "ステップ8: ドラゴン橋とサンセット鑑賞",
      "ステップ9: 乗船地帰着、返船手続き",
      "ステップ10: 送迎車でホテル到着（20:00前）",
    ],
  },
];
