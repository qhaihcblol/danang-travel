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

  const [header, home, authLogin, authRegister, authForgotPassword] =
    await Promise.all([
      import(`../locales/${locale}/header.json`),
      import(`../locales/${locale}/home.json`),
      import(`../locales/${locale}/auth/login.json`),
      import(`../locales/${locale}/auth/register.json`),
      import(`../locales/${locale}/auth/forgot-password.json`),
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
    },
  };
});
