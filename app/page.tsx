"use client";
import Exprience from "./compnent/exprience";
import FixedMenu from "./compnent/fixed-menu";
import Header from "./compnent/header";
import Introduction from "./compnent/introduction";
import { useLanguage } from "./compnent/store/language";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

export default function Home() {
  const { lang } = useLanguage();

  return (
    <I18nextProvider i18n={i18n} defaultNS={"translation"}>
      <main
        dir={lang == "en" ? "rtl" : "ltr"}
        className="min-h-screen bg-gradient-to-r from-defaultPink-50 to-defaultBlue-50 pt-8 relative"
      >
        <Header />
        <div className="flex lg:flex-row flex-col justify-between gap-7 w-[90%] mx-auto overflow-hidden">
          <Introduction />
          <Exprience />
        </div>
        <FixedMenu />
      </main>
    </I18nextProvider>
  );
}
