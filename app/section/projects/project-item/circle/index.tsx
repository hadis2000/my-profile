import TechIcon, { TechType } from "./tech-icon";

type CircleProps = {
  tech: TechType;
  className?: string;
};

const Circle = ({ tech, className }: CircleProps) => {
  return (
    <div
      className={`shadow-2xl aspect-square absolute rounded-full group-hover:z-50 transition-all duration-700
        bg-white flex items-center justify-center 
        ${className || ""}`}
    >
      <TechIcon tech={tech} />
    </div>
  );
};

export default Circle;
