import SecHeader from "@/app/compnent/sec-header";
import { useTranslation } from "next-i18next";
import SkillItems from "./skill-item";
const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className="px-28 py-10 min-h-screen">
      <SecHeader secName={t("skills")} />
      <div
        className="border border-red-700 my-10 grid 2xl:grid-cols-5 lg:grid-cols-3
      md:grid-cols-2 grid-cols-1 gap-14"
      >
        <SkillItems />
        <SkillItems />
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
