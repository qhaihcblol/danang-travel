export type Locale = "vi" | "ja";

export const APP_LOCALE_CHANGED_EVENT = "app-locale-changed";
export const LOCALE_STORAGE_KEY = "app-locale";
export const LOCALE_COOKIE_KEY = "app-locale";

export const DEFAULT_LOCALE: Locale = "vi";

type HeaderMessages = {
  recentlyViewed: string;
  favorites: string;
  openAccountMenu: string;
  profile: string;
  orders: string;
  logout: string;
  traveler: string;
  login: string;
  register: string;
};

type Messages = {
  header: HeaderMessages;
};

export const messages: Record<Locale, Messages> = {
  vi: {
    header: {
      recentlyViewed: "Đã xem",
      favorites: "Yêu thích",
      openAccountMenu: "Mở menu tài khoản",
      profile: "Trang cá nhân",
      orders: "Đơn hàng",
      logout: "Đăng xuất",
      traveler: "Khách du lịch",
      login: "Đăng nhập",
      register: "Đăng ký",
    },
  },
  ja: {
    header: {
      recentlyViewed: "最近見た項目",
      favorites: "お気に入り",
      openAccountMenu: "アカウントメニューを開く",
      profile: "プロフィール",
      orders: "注文履歴",
      logout: "ログアウト",
      traveler: "旅行者",
      login: "ログイン",
      register: "会員登録",
    },
  },
};

const isLocale = (value: string | null): value is Locale =>
  value === "vi" || value === "ja";

const getLocaleFromCookie = (): Locale | null => {
  if (typeof document === "undefined") {
    return null;
  }

  const match = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${LOCALE_COOKIE_KEY}=`));

  if (!match) {
    return null;
  }

  const value = decodeURIComponent(match.split("=")[1] ?? "");
  return isLocale(value) ? value : null;
};

export const getLocale = (): Locale => {
  if (typeof window === "undefined") {
    return DEFAULT_LOCALE;
  }

  const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  if (isLocale(saved)) {
    return saved;
  }

  return getLocaleFromCookie() ?? DEFAULT_LOCALE;
};

export const setLocale = (locale: Locale) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  document.cookie = `${LOCALE_COOKIE_KEY}=${encodeURIComponent(locale)}; path=/; max-age=31536000; samesite=lax`;
  document.documentElement.lang = locale === "ja" ? "ja" : "vi";
  window.dispatchEvent(
    new CustomEvent(APP_LOCALE_CHANGED_EVENT, { detail: { locale } }),
  );
};

export const getMessages = (locale: Locale) => messages[locale];

export const getNumberLocale = (locale: Locale) =>
  locale === "ja" ? "ja-JP" : "vi-VN";
