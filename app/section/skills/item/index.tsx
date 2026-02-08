import CustomImage from "@/app/component/custom-image";

type SkillItemType = {
  imgUrl?: string;
  title?: string;
  years?: number;
};

const Item = ({ years, title, imgUrl }: SkillItemType) => {
  return (
    <div
      className="group w-16 h-16 mx-auto rounded-full shrink-0 overflow-hidden relative 
    flex items-center justify-center shadow"
    >
      <CustomImage
        // src={imgUrl}
        className="group-hover:blur-xs w-full h-full rounded-full"
      />
      <div
        className="absolute left-[50%] top-[50%] -translate-[50%] truncate text-center
        text-[0px] group-hover:text-lg transition-all cursor-default duration-500  "
      >
        <p className="">{title}</p>
        <span>{years} years</span>
      </div>
    </div>
  );
};

export default Item;
