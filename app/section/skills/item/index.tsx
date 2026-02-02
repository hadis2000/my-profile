import CustomImage from "@/app/component/custom-image";

const Item = () => {
  return (
    <div
      className="group w-32 h-32 mx-auto rounded-full shrink-0 overflow-hidden relative 
    flex items-center justify-center shadow"
    >
      <CustomImage className="hover:blur-xs w-full h-full rounded-full" />
      <p
        className="absolute left-[50%] top-[50%] -translate-[50%] 
        text-[0px] group-hover:text-lg transition-all cursor-default"
      >
        2 years
      </p>
      {/* <div
        className="absolute inset-0 rounded-full bg-white/65 blur-md 
        translate-x-full -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0
        transition-transform duration-500"
      ></div> */}
    </div>
  );
};

export default Item;
