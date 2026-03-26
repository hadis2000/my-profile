import CustomImage from "@/app/component/custom-image";
import Circle from "./circle";
import { TechType } from "./circle/tech-icon";
import Link from "next/link";

const circleSettings = [
  "w-14 top-10 left-10 group-hover:-left-16 text-3xl",
  "w-22 bottom-5 right-10 group-hover:-right-24 group-hover:-bottom-5 text-4xl",
  "w-14 bottom-14 left-10 group-hover:-bottom-16 text-3xl",
  "w-14 top-14 left-14 group-hover:-top-16 text-3xl",
  "w-8 bottom-10 left-10 group-hover:-left-9 text-xl",
  "w-12 top-8 right-10 group-hover:-right-14 text-3xl",
];

export type ProjectItemType = {
  title?: string;
  imgUrl?: string;
  url?: string;
  date?: string;
  techs?: TechType[];
};

const ProjectItems = ({ date, imgUrl, techs, title, url }: ProjectItemType) => (
  <Link
    href={url ?? ""}
    target="_blank"
    className="relative group group-hover/item:blur-[3px] hover:blur-none"
  >
    {techs?.map((tech, i) => (
      <Circle key={i} className={circleSettings[i]} tech={tech} />
    ))}

    <div
      className="
        bg-white rounded-2xl shadow-md py-7 cursor-pointer
        scale-100 transition-transform duration-500 delay-300
        flex flex-col items-center justify-center gap-1 px-5
      "
    >
      <CustomImage
        src={imgUrl}
        alt={title ?? "-"}
        width={500}
        height={500}
        className="rounded-full mb-3 w-30 h-30 object-cover group-hover:shadow
        group-hover:w-full group-hover:rounded-lg transition-all duration-200"
      />
      <h3 className="text-lg font-extrabold uppercase">{title ?? "-"}</h3>
      <h3 className="text-lg font-medium">{date ?? "-"}</h3>
    </div>
  </Link>
);

export default ProjectItems;
