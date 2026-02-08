import SecHeader from "@/app/component/sec-header";
import { useTranslation } from "react-i18next";
// import Item from "./item";
// import { skills } from "./data";
import { FaKey } from "react-icons/fa";
import { groupedSkills } from "./data";
import Item from "./item";
import ScratchCard from "@/app/component/scratch-card";

const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className="px-29 min-h-screen">
      <SecHeader
        secName={
          <span className="flex gap-2 w-fit mx-auto">
            {t("skills")}
            <FaKey className="text-amber-400 hover:cursor-grab " />
          </span>
        }
      />
      <div className="w-full flex flex-wrap gap-5 py-7 overflow-x-hidden">
        {Object.entries(groupedSkills).map(([category, skills], index) => (
          <div
            className="mb-8"
            key={index}
            data-aos="fade-right"
            data-aos-delay={index * 200}
          >
            <h2 className="text-xl font-bold mb-4">{category}</h2>
            <ScratchCard width={skills?.length * 80}>
              {skills.map((skill) => (
                <Item {...skill} />
              ))}
            </ScratchCard>
          </div>
        ))}
      </div>

      {/* <div className="w-full flex flex-wrap gap-5 py-7 overflow-x-hidden">
        {skills.map((item, index) => (
          <Item {...item} index={index} />
        ))}
      </div> */}
    </div>
  );
};

export default Skills;
