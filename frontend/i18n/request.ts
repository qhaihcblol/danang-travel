import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { defaultLocale, isAppLocale, localeCookieName } from "@/i18n/config";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const localeFromCookie = cookieStore.get(localeCookieName)?.value;
  const locale =
    localeFromCookie && isAppLocale(localeFromCookie)
      ? localeFromCookie
      : defaultLocale;

  const [
    header,
    home,
    authLogin,
    authRegister,
    authForgotPassword,
    hotelsPage,
    hotelsDetail,
    hotelsGallery,
    hotelsHighlights,
    hotelsRooms,
    ticketsPage,
    ticketsDetail,
  ] = await Promise.all([
    import(`../locales/${locale}/header.json`),
    import(`../locales/${locale}/home.json`),
    import(`../locales/${locale}/auth/login.json`),
    import(`../locales/${locale}/auth/register.json`),
    import(`../locales/${locale}/auth/forgot-password.json`),
    import(`../locales/${locale}/hotels/page.json`),
    import(`../locales/${locale}/hotels/detail.json`),
    import(`../locales/${locale}/hotels/gallery.json`),
    import(`../locales/${locale}/hotels/highlights.json`),
    import(`../locales/${locale}/hotels/rooms.json`),
    import(`../locales/${locale}/tickets/page.json`),
    import(`../locales/${locale}/tickets/detail.json`),
  ]);

  return {
    locale,
    messages: {
      header: header.default,
      home: home.default,
      auth: {
        login: authLogin.default,
        register: authRegister.default,
        forgotPassword: authForgotPassword.default,
      },
      hotels: {
        page: hotelsPage.default,
        detail: hotelsDetail.default,
        gallery: hotelsGallery.default,
        highlights: hotelsHighlights.default,
        rooms: hotelsRooms.default,
      },
      tickets: {
        page: ticketsPage.default,
        detail: ticketsDetail.default,
      },
    },
  };
});
