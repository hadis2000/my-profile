import Experience from "../../component/experience";
import Introduction from "../../component/introduction";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full flex lg:flex-row flex-col justify-between items-center sm:gap-7 mx-auto overflow-hidden"
    >
      <Introduction />
      <Experience />
    </section>
  );
};

export default HeroSection;
