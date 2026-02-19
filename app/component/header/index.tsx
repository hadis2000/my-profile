import HeaderItem from "./header-item";
import Linkedin from "../../asset/img/2.png";
import Telegram from "../../asset/img/5.png";
import Tooltip from "../common/tooltip";
import { useTranslation } from "react-i18next";
import CustomImage from "../custom-image";
import { FaGithub } from "react-icons/fa";

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
          <CustomImage
            onClick={() =>
              window.open("https://linkedin.com/in/hadiseh-hosseini", "_blank")
            }
            src={Linkedin}
            alt={t("linkedin")}
            width={30}
            height={30}
          />
        </Tooltip>
        <Tooltip text={t("github")}>
          <FaGithub
            className="text-3xl"
            onClick={() =>
              window.open("https://github.com/hadis2000", "_blank")
            }
          />
        </Tooltip>
        <Tooltip text={t("telegram")}>
          <CustomImage
            onClick={() =>
              window.open("https://t.me/hadiseh_hosseini", "_blank")
            }
            src={Telegram}
            alt={t("telegram")}
            width={30}
            height={30}
          />
        </Tooltip>
      </div>
    </header>
  );
};

export default Header;
