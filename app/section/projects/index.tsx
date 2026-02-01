import SecHeader from "@/app/component/sec-header";
import { useTranslation } from "next-i18next";
import ProjectItems from "./project-item";
const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className="px-28 min-h-screen">
      <SecHeader secName={t("projects")} />
      <div
        className="my-5 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3
      md:grid-cols-2 grid-cols-1 gap-3 group/item"
      >
        <ProjectItems key={1} />
        <ProjectItems key={2} />
        <ProjectItems key={3} />
        <ProjectItems key={4} />
        <ProjectItems key={5} />
        <ProjectItems key={6} />
        <ProjectItems key={7} />
        <ProjectItems key={8} />
      </div>
    </div>
  );
};

export default Projects;
