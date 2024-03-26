// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "../public/locales/en/common.json";
import translationFA from "../public/locales/fa/common.json";

const resources = {
  en: {
    translation: translationEN,
  },
  fa: {
    translation: translationFA,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // زبان پیش‌فرض
  fallbackLng: "en", // در صورت عدم وجود ترجمه برای زبان انتخابی
  interpolation: {
    escapeValue: false, // از فرمت‌های خاص برای ترجمه‌ها استفاده می‌کنیم
  },
});

export default i18n;
