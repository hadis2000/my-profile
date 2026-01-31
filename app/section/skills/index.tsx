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
      md:grid-cols-2 grid-cols-1 gap-3 group/item"
      >
        <SkillItems key={1} />
        <SkillItems key={2} />
        <SkillItems key={3} />
        <SkillItems key={4} />
        <SkillItems key={5} />
        <SkillItems key={6} />
        <SkillItems key={7} />
        <SkillItems key={8} />
      </div>
    </div>
  );
};

export default Skills;
