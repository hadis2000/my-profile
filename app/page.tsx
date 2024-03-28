"use client";
import FixedMenu from "./compnent/fixed-menu";
import Header from "./compnent/header";
import { useLanguage } from "./compnent/store/language";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import HeroSection from "./section/hero-section";

export default function Home() {
  const { lang } = useLanguage();

  return (
    <I18nextProvider i18n={i18n} defaultNS={"translation"}>
      <main
        dir={lang == "en" ? "rtl" : "ltr"}
        className="min-h-screen bg-gradient-to-r from-defaultPink-50 to-defaultBlue-50 pt-8 relative"
      >
        <Header />
        <HeroSection />
        <FixedMenu />
      </main>
    </I18nextProvider>
  );
}
