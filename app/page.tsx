"use client";
import FixedMenu from "./component/fixed-menu";
import Header from "./component/header";
import { useLanguage } from "./component/store/language";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import HeroSection from "./section/hero-section";
import Projects from "./section/projects";
import Skills from "./section/skills";
import Test from "./section/test";

export default function Home() {
  const { lang } = useLanguage();

  return (
    <I18nextProvider i18n={i18n} defaultNS={"translation"}>
      <main
        dir={lang == "en" ? "rtl" : "ltr"}
        className="min-h-screen pt-8 relative"
      >
        <Header />
        <HeroSection />
        <FixedMenu />
        <Projects />
        <Skills />
        <Test />
      </main>
    </I18nextProvider>
  );
}
