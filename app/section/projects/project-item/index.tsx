import CustomImage from "@/app/component/custom-image";
import emptyImg from "../../../asset/img/empty.png";
import Circle from "./circle";

const settings = [
  "w-14 top-10 left-10 group-hover:-left-16",
  "w-8 bottom-10 left-10 group-hover:-left-9",
  "w-22 bottom-5 right-10 group-hover:-right-24 group-hover:-bottom-5",
  "w-12 top-8 right-10 group-hover:-right-14",
  "w-14 bottom-14 left-10 group-hover:-bottom-16",
  "w-14 top-14 left-14 group-hover:-top-16",
];

const ProjectItems = () => {
  return (
    <div className="relative group group-hover/item:blur-[3px] hover:blur-none">
      <Circle className={settings[0]} />
      <Circle className={settings[1]} />
      <Circle className={settings[2]} />
      <Circle className={settings[3]} />
      <Circle className={settings[4]} />
      <Circle className={settings[5]} />

      <div
        className="bg-white rounded-2xl shadow-md py-7 cursor-pointer
       scale-90 group-hover:scale-100 transition-transform duration-500 delay-300
       flex flex-col items-center justify-center gap-1"
      >
        <CustomImage
          className="bg-green-500 rounded-full mb-3"
          src={emptyImg}
          alt=""
          width={120}
          height={120}
        />
        <h3 className="text-lg font-extrabold uppercase">react</h3>
        <h3 className="text-lg font-medium">2 years</h3>
      </div>
    </div>
  );
};

export default ProjectItems;
