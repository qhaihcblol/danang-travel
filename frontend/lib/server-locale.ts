import { cookies } from "next/headers";
import { DEFAULT_LOCALE, LOCALE_COOKIE_KEY, type Locale } from "@/lib/i18n";

const isLocale = (value: string | undefined): value is Locale =>
  value === "vi" || value === "ja";

export const getServerLocale = async (): Promise<Locale> => {
  const cookieStore = await cookies();
  const value = cookieStore.get(LOCALE_COOKIE_KEY)?.value;
  return isLocale(value) ? value : DEFAULT_LOCALE;
};
