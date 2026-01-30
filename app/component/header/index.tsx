import Image from "next/image";
import HeaderItem from "./header-item";
import Linkedin from "../../asset/img/2.png";
import Instagram from "../../asset/img/3.png";
import Telegram from "../../asset/img/5.png";
import Tooltip from "../common/tooltip";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const items: string[] = t("header", { returnObjects: true }) as string[];
  return (
    <header
      className="sticky top-3 z-50 animate-headerAnim w-[90%] h-20 bg-white rounded-3xl mx-auto px-[2%] shadow-lg
    flex md:flex-row flex-col-reverse items-center md:justify-between justify-center gap-2"
    >
      <div className="flex gap-7 h-fit">
        {items.map((itemName, index) => (
          <HeaderItem key={index} name={itemName} />
        ))}
      </div>
      <div className="flex justify-between gap-3 *:cursor-pointer">
        <Tooltip text={t("linkedin")}>
          <Image src={Linkedin} alt={t("linkedin")} width={30} height={30} />
        </Tooltip>
        <Tooltip text={t("instagram")}>
          <Image src={Instagram} alt={t("instagram")} width={30} height={30} />
        </Tooltip>
        <Tooltip text={t("telegram")}>
          <Image src={Telegram} alt={t("telegram")} width={30} height={30} />
        </Tooltip>
      </div>
    </header>
  );
};

export default Header;
