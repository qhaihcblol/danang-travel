'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Hotel, Compass, Ticket, UtensilsCrossed, ShoppingBag, Clock, ArrowRight } from 'lucide-react';
import { ImageCarousel } from '@/components/image-carousel';
import { ServiceCard } from '@/components/service-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getCurrentUser } from '@/services/auth';
import {
  carouselImagesMockData,
  landmarksMockData,
  toursMockData,
  getRecentlyViewedMock,
} from '@/mock';
import { useAppLocale } from '@/hooks/use-app-locale';

// Extract URLs from carousel mock data
const carouselImages = carouselImagesMockData.map(img => img.url);

// Get recently viewed and featured activities
const recentlyViewed = getRecentlyViewedMock();
const famousLandmarks = landmarksMockData.slice(0, 4);
const featuredActivities = toursMockData.slice(0, 4);

export default function Home() {
  const router = useRouter();
  const locale = useAppLocale();
  const isJa = locale === 'ja';
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const categoryButtons = useMemo(
    () => [
      { id: 'landmarks', label: isJa ? '人気スポット' : 'Các địa danh nổi tiếng', icon: MapPin },
      { id: 'hotels', label: isJa ? 'ホテル' : 'Khách sạn', icon: Hotel },
      { id: 'tours', label: isJa ? 'ツアー・体験' : 'Tour & Trải nghiệm', icon: Compass },
      { id: 'tickets', label: isJa ? '観光チケット' : 'Vé tham quan', icon: Ticket },
      { id: 'food', label: isJa ? 'グルメ' : 'Ẩm thực', icon: UtensilsCrossed },
      { id: 'shopping', label: isJa ? 'ショッピング' : 'Mua sắm', icon: ShoppingBag },
    ],
    [isJa],
  );

  const handleCategoryClick = (id: string) => {
    if (id === 'hotels') {
      router.push('/hotels');
      return;
    }

    setSelectedCategory(selectedCategory === id ? null : id);
  };

  useEffect(() => {
    let isMounted = true;

    const loadCurrentUser = async () => {
      const user = await getCurrentUser();
      if (isMounted) {
        setIsLoggedIn(!!user);
      }
    };

    loadCurrentUser();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="w-full">
        {/* Hero Section with Carousel and Integrated Search */}
        <section className="relative mb-20">
          <div className="relative">
            <ImageCarousel images={carouselImages} />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-8">
              {/* Text Content */}
              <div className="text-center max-w-2xl mb-8 sm:mb-12">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-3 leading-tight">
                  {isJa ? 'ダナンの美しさに触れる' : 'Chạm vào vẻ đẹp Đà Nẵng'}
                </h1>
                <p className="text-base sm:text-lg text-white/95 drop-shadow-md">
                  {isJa ? '一歩ずつ安心して、旅をもっと特別に' : 'An tâm từng bước - Nâng tầm hành trình của bạn'}
                </p>
              </div>

              {/* Search Bar - Integrated in Hero */}
              <div className="w-full max-w-4xl px-4 sm:px-0">
                <div className="bg-white/60 backdrop-blur-md border border-white/35 rounded-xl shadow-2xl p-3 sm:p-4 transition-all duration-300 hover:shadow-3xl hover:bg-white/70">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center">
                    <div className="flex-1 w-full relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600" />
                      <Input
                        type="text"
                        placeholder={isJa ? 'ホテル、ツアー、スポット...' : 'Khách sạn, tour, địa điểm...'}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-12 h-10 sm:h-11 rounded-lg border border-white/45 bg-white/75 text-slate-900 placeholder:text-slate-500 focus:bg-white/90 focus:border-primary/60 focus:ring-2 focus:ring-primary/50 transition-all focus:outline-none text-sm"
                      />
                    </div>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95 h-10 sm:h-11 px-6 sm:px-8 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg text-sm w-full sm:w-auto">
                      {isJa ? '探す' : 'Khám phá'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Buttons */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {categoryButtons.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleCategoryClick(id)}
                className={`flex flex-col items-center justify-center gap-2 p-4 sm:p-5 rounded-2xl font-semibold text-sm transition-all duration-300 border-2 transform hover:scale-105 active:scale-95 ${selectedCategory === id
                    ? 'border-primary bg-linear-to-b from-primary/20 to-primary/10 shadow-lg shadow-primary/20 text-primary'
                    : 'border-border bg-card text-foreground hover:border-primary/60 hover:bg-linear-to-b hover:from-primary/5 hover:to-transparent hover:shadow-md'
                  }`}
              >
                <Icon className={`w-6 h-6 transition-all duration-300 ${selectedCategory === id ? 'text-primary scale-110' : 'text-primary/70 group-hover:text-primary'}`} />
                <span className="text-xs sm:text-sm font-semibold text-center line-clamp-2 leading-tight">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Recently Viewed Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <Clock className="w-7 h-7 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                {isJa ? '最近見た項目' : 'Đã xem gần đây'}
              </h2>
            </div>
            <Button variant="ghost" className="text-primary hover:bg-primary/10 gap-2 group">
              {isJa ? 'すべて見る' : 'Xem tất cả'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentlyViewed.map((item) => (
              <ServiceCard key={item.id} {...item} />
            ))}
          </div>
        </section>

        {/* Famous Landmarks Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <MapPin className="w-7 h-7 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                {isJa ? '人気スポット' : 'Các địa danh nổi tiếng'}
              </h2>
            </div>
            <Button variant="ghost" className="text-primary hover:bg-primary/10 gap-2 group">
              {isJa ? 'すべて見る' : 'Xem tất cả'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {famousLandmarks.map((landmark) => (
              <ServiceCard
                key={landmark.id}
                {...landmark}
                type="attraction"
              />
            ))}
          </div>
        </section>

        {/* Featured Activities Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <Compass className="w-7 h-7 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                {isJa ? '注目のアクティビティ' : 'Hoạt động nổi bật'}
              </h2>
            </div>
            <Button variant="ghost" className="text-primary hover:bg-primary/10 gap-2 group">
              {isJa ? 'すべて見る' : 'Xem tất cả'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredActivities.map((activity) => (
              <ServiceCard key={activity.id} {...activity} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        {!isLoggedIn && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="bg-linear-to-r from-primary/10 via-accent/5 to-primary/10 rounded-3xl p-8 sm:p-16 border border-primary/20 text-center backdrop-blur-sm">
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                {isJa
                  ? '会員登録して、限定オファーや新しい目的地の最新情報を受け取りましょう。'
                  : 'Đăng ký để nhận thông báo về các ưu đãi đặc biệt và điểm đến mới.'}
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-10 text-base font-semibold rounded-lg transition-all hover:shadow-lg">
                {isJa ? '今すぐ登録' : 'Đăng ký ngay'}
              </Button>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-linear-to-b from-foreground to-foreground/95 text-card mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-bold text-base mb-4">{isJa ? 'AnshinDanangについて' : 'Về AnshinDanang'}</h3>
              <p className="text-sm opacity-75 leading-relaxed">
                {isJa
                  ? 'ダナンを旅する日本人旅行者のための総合サポートプラットフォーム。'
                  : 'Nền tảng hỗ trợ du lịch hàng đầu cho du khách Nhật Bản tại Đà Nẵng.'}
              </p>
            </div>
            <div>
              <h3 className="font-bold text-base mb-4">{isJa ? '見つける' : 'Khám phá'}</h3>
              <ul className="text-sm space-y-2.5 opacity-75">
                <li><a href="#" className="hover:opacity-100 transition-opacity">{isJa ? 'ホテル' : 'Khách sạn'}</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">{isJa ? 'ツアー' : 'Tour'}</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">{isJa ? '観光チケット' : 'Vé tham quan'}</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">{isJa ? 'レストラン' : 'Nhà hàng'}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-base mb-4">{isJa ? 'サポート' : 'Hỗ trợ'}</h3>
              <ul className="text-sm space-y-2.5 opacity-75">
                <li><a href="#" className="hover:opacity-100 transition-opacity">{isJa ? 'ヘルプセンター' : 'Trung tâm trợ giúp'}</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">{isJa ? 'お問い合わせ' : 'Liên hệ'}</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">{isJa ? '利用規約' : 'Điều khoản dịch vụ'}</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">{isJa ? 'プライバシーポリシー' : 'Chính sách bảo mật'}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-base mb-4">{isJa ? 'フォロー' : 'Theo dõi'}</h3>
              <ul className="text-sm space-y-2.5 opacity-75">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Facebook</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Instagram</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">Twitter</a></li>
                <li><a href="#" className="hover:opacity-100 transition-opacity">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-card/20 pt-8">
            <p className="text-sm opacity-60">
              {isJa ? '© 2024 AnshinDanang.jp. 全著作権所有。' : '© 2024 AnshinDanang.jp. Tất cả quyền được bảo lưu.'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
