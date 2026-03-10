import Experience from "../../component/experience";
import Introduction from "../../component/introduction";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex lg:flex-row flex-col justify-between sm:gap-7 mx-auto overflow-hidden"
    >
      <Introduction />
      <Experience />
    </section>
  );
};

export default HeroSection;
