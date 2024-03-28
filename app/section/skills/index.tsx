import SecHeader from "@/app/compnent/sec-header";
import { useTranslation } from "next-i18next";
const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className="px-28 py-10 min-h-screen">
      <SecHeader secName={t("skills")} />
      <div className="border border-red-700 my-10"></div>
    </div>
  );
};

export default Skills;
