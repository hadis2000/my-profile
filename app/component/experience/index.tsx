import AllExperiences from "./component/all-experience";
import Circles from "./component/circles";

const Experience = () => {
  return (
    <div
      className="relative lg:w-[54%] w-full lg:mx-0 mx-auto
    h-115 lg:my-10 my-0"
    >
      <Circles />
      <AllExperiences />
    </div>
  );
};

export default Experience;
