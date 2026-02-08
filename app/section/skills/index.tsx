import SecHeader from "@/app/component/sec-header";
import { useTranslation } from "react-i18next";
import Item from "./item";
import { skills } from "./data";
import { FaKey } from "react-icons/fa";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className="px-29 5min-h-screen">
      <SecHeader
        secName={
          <span className="flex gap-2 w-fit mx-auto">
            {t("skills")}{" "}
            <FaKey className="text-amber-400 hover:cursor-grab " />
          </span>
        }
      />
      <div className="w-full flex flex-wrap gap-5 py-7 overflow-x-hidden">
        {skills.map((item, index) => (
          <Item {...item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
