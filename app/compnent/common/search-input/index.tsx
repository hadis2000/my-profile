import { useTranslation } from "next-i18next";

const SearchInput = () => {
  const { t } = useTranslation();

  return (
    <div className="border border-gray-300 bg-white w-fit rounded-full my-7 lg:mx-0 mx-auto">
      <input
        className="rounded-full mx-2 focus:outline-none p-1"
        placeholder={`${t("search")}...`}
      />
      <button className="bg-defaultBlue-500 px-5 py-1 m-[1px] rounded-full">
        {t("go")}
      </button>
    </div>
  );
};

export default SearchInput;
