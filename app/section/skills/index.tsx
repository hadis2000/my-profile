import SecHeader from "@/app/component/sec-header";
import { useTranslation } from "next-i18next";
import SkillItems from "./skill-item";
const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className="px-28 min-h-screen">
      <SecHeader secName={t("skills")} />
      <div
        className="my-5 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3
      md:grid-cols-2 grid-cols-1 gap-3"
      >
        <SkillItems />
        <SkillItems />
        <SkillItems />
        <SkillItems />
        <SkillItems />
        <SkillItems />
        <SkillItems />
        <SkillItems />
      </div>
    </div>
  );
};

export default Skills;
