"use client";

import { useEffect, useState } from "react";
import {
  APP_LOCALE_CHANGED_EVENT,
  DEFAULT_LOCALE,
  type Locale,
  getLocale,
} from "@/lib/i18n";

export const useAppLocale = () => {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const syncLocale = () => {
      setLocale(getLocale());
    };

    syncLocale();
    window.addEventListener(APP_LOCALE_CHANGED_EVENT, syncLocale);

    return () => {
      window.removeEventListener(APP_LOCALE_CHANGED_EVENT, syncLocale);
    };
  }, []);

  return locale;
};
