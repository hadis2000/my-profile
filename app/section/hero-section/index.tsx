import React from "react";
import Exprience from "../../compnent/exprience";
import Introduction from "../../compnent/introduction";

const HeroSection = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between gap-7 w-[90%]  mx-auto overflow-hidden">
      <Introduction />
      <Exprience />
    </div>
  );
};

export default HeroSection;
