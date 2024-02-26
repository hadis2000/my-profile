import Image from "next/image";
import HeaderItem from "./header-item";
import Linkdin from "../../asset/img/2.png";
import Instagram from "../../asset/img/3.png";
import Telegram from "../../asset/img/5.png";
import Tooltip from "../common/tooltip";

const items = ["home", "about", "skills", "works", "contact us"];

const Header = () => {
  return (
    <header
      className="relative w-[90%] h-[80px] bg-white rounded-3xl mx-auto px-[2%] shadow-lg
    flex md:flex-row flex-col-reverse items-center md:justify-between justify-center gap-2"
    >
      <div className="w-6 h-11 bg-white absolute -top-10 left-[10%]"></div>
      <div className="w-6 h-11 bg-white absolute -top-10 right-[10%]"></div>
      <div className="flex justify-between gap-3 *:cursor-pointer">
        <Tooltip text="Linkdin">
          <Image src={Linkdin} alt={"Linkdin"} width={30} height={30} />
        </Tooltip>
        <Tooltip text="Instagram">
          <Image src={Instagram} alt={"Instagram"} width={30} height={30} />
        </Tooltip>
        <Tooltip text="Telegram">
          <Image src={Telegram} alt={"Telegram"} width={30} height={30} />
        </Tooltip>
      </div>
      <div className="flex gap-7 h-fit">
        {items.map((itemName, index) => (
          <HeaderItem key={index} name={itemName} />
        ))}
      </div>
    </header>
  );
};

export default Header;
