import SecHeader from "@/app/component/sec-header";
import { useTranslation } from "next-i18next";
import ProjectItems from "./project-item";
import { my_projects } from "./data";
const Projects = () => {
  const { t } = useTranslation();
  return (
    <section id="projects" className="flex flex-col gap-8">
      <SecHeader secName={t("projects")} />
      <div
        className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3
      md:grid-cols-2 grid-cols-1 group/item gap-7"
      >
        {my_projects.map((pro, index) => (
          <ProjectItems key={index} {...pro} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
