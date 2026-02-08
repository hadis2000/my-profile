import CustomImage from "@/app/component/custom-image";

type SkillItemType = {
  icon?: string;
  nameEn?: string;
  nameFa?: string;
  years?: number;
  index: number;
};

const Item = ({ years, nameEn, index }: SkillItemType) => {
  return (
    <div
      className="group w-28 h-28 mx-auto rounded-full shrink-0 overflow-hidden relative 
    flex items-center justify-center shadow "
      key={index}
      data-aos="fade-right"
      data-aos-delay={index * 200} // هر آیتم 200ms بعد از قبلی
    >
      <CustomImage className="group-hover:blur-xs w-full h-full rounded-full" />
      <div
        className="absolute left-[50%] top-[50%] -translate-[50%] truncate text-center
        text-[0px] group-hover:text-lg transition-all cursor-default duration-500  "
      >
        <p className="">{nameEn}</p>
        <span>{years} years</span>
      </div>
      {/* <div
        className="absolute inset-0 rounded-full bg-white/65 blur-md 
        translate-x-full -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0
        transition-transform duration-500"
      ></div> */}
    </div>
  );
};

export default Item;
