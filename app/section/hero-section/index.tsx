import Experience from "../../component/experience";
import Introduction from "../../component/introduction";

const HeroSection = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between gap-7 w-[90%]  mx-auto overflow-hidden">
      <Introduction />
      <Experience />
    </div>
  );
};

export default HeroSection;
