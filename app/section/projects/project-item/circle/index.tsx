import emptyImg from "../../../../asset/img/empty.png";
import CustomImage from "@/app/component/custom-image";

type CircleProps = {
  src?: string;
  className?: string;
};

const Circle = ({ src, className }: CircleProps) => {
  return (
    <CustomImage
      alt=""
      src={src || emptyImg}
      className={`shadow-2xl aspect-square absolute rounded-full group-hover:z-50 transition-all duration-700 ${className || ""}`}
    />
  );
};

export default Circle;
