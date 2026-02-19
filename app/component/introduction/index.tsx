// import SearchInput from "../common/search-input";
import { useTranslation } from "next-i18next";

const Introduction = () => {
  const { t } = useTranslation();
  return (
    <div className="lg:w-fit w-full drop-shadow-xl lg:my-24 my-5 lg:text-start px-2 text-center">
      <h2 className="text-6xl font-bold py-3">{t("hello")}!</h2>
      <h2 className="text-5xl font-semibold py-5 text-dGray-500 ">
        {t("im")} <span className="text-dPink-500">{t("my-name")}</span>
      </h2>
      <h3 className="text-4xl font-medium text-dPink-600">{t("headline")}</h3>
      {/* <SearchInput /> */}
    </div>
  );
};

export default Introduction;
