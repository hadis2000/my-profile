import SecHeader from "@/app/component/sec-header";
import { useTranslation } from "react-i18next";
import Item from "./item";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className="px-28 5min-h-screen">
      <SecHeader secName={t("skills")} />
      <div className="w-full flex gap-5 py-7 overflow-x-auto">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Skills;
