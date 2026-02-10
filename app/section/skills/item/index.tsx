import CustomImage from "@/app/component/custom-image";
import Ring from "./ring";

export type SkillItemType = {
  imgUrl?: string;
  title?: string;
  years?: number;
  percent?: number;
};

const Item = ({ years, title, imgUrl, percent }: SkillItemType) => {
  return (
    <div className="relative w-20 h-20 mx-auto">
      {/* Progress Ring */}
      <Ring percent={percent} />

      {/* Content */}
      <div
        className="group w-16 h-16 rounded-full overflow-hidden relative 
        flex items-center justify-center shadow bg-white mx-auto mt-2"
      >
        <CustomImage
          // src={imgUrl}
          className="group-hover:blur-xs w-full h-full rounded-full transition-all duration-500"
        />

        <div
          className="absolute inset-0 flex flex-col items-center justify-center
          text-center text-[0px] group-hover:text-sm transition-all duration-500"
        >
          <p>{title}</p>
          <span>{years} years</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
