import CircleSpinner from "../circle-spinner";
import Circles from "./component/circles";

const Experience = () => {
  return (
    <div
      className="relative lg:w-[45%] md:w-[80%] sm:w-full w-86 lg:mx-0 mx-auto
    sm:h-115 h-90 flex items-center justify-center"
    >
      <Circles />
      <CircleSpinner
        items={[
          "react",
          "next.js",
          "typescript",
          "bootstrap",
          "tailwindcss",
          "javascript",
        ]}
        rotationSpeed={0.25}
      />
    </div>
  );
};

export default Experience;
