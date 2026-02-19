// import SearchInput from "../common/search-input";
import { useTranslation } from "next-i18next";

const Introduction = () => {
  const { t } = useTranslation();
  return (
    <div className="lg:w-fit w-full drop-shadow-xl lg:my-24 my-5 lg:text-start px-2 text-center">
      <h2 className="sm:text-6xl text-4xl font-bold py-3">{t("hello")}!</h2>
      <h2 className="sm:text-5xl text-3xl font-semibold sm:py-5 py-2 text-dGray-500 ">
        {t("im")} <span className="text-dPink-500">{t("my-name")}</span>
      </h2>
      <h3 className="sm:text-4xl text-2xl font-medium text-dPink-600">
        {t("headline")}
      </h3>
      {/* <SearchInput /> */}
    </div>
  );
};

export default Introduction;
