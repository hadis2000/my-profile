import { useLanguage } from "../store/language";

const FixedMenu = () => {
  const { lang, setLan } = useLanguage();
  return (
    <div
      dir="ltr"
      className="w-24 h-14 fixed top-36 left-0 *:transition-[width] cursor-pointer
    *:h-full *:absolute *:top-0 *:left-0 *:rounded-r-lg font-semibold 
    *:flex *:items-center *:justify-end *:pe-3 text-defaultGray-500"
    >
      <div
        onClick={() => setLan()}
        className="w-full hover:w-[130%] bg-defaultBlue-500"
      >
        {lang.toUpperCase()}
      </div>
      <div className="w-2/3 hover:w-[130%] bg-defaultBlue-400">EN</div>
      <div className="w-1/3 hover:w-[130%] bg-defaultBlue-300">EN</div>
    </div>
  );
};

export default FixedMenu;
