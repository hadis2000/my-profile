import AllExperiences from "./component/all-experience";
import Circles from "./component/circles";

const Experience = () => {
  return (
    <div
      className="relative lg:w-[54%] sm:w-full w-86 lg:mx-0 mx-auto
    sm:h-115 h-90 lg:my-10 my-0"
    >
      <Circles />
      <AllExperiences />
    </div>
  );
};

export default Experience;
