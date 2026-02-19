import Circle from "./circle";
import catImg from "../../../../asset/img/cat.png";
import CustomImage from "@/app/component/custom-image";

const Circles = () => {
  return (
    <>
      <Circle className="animate-translateX-reverse" />
      <Circle />
      <Circle className="animate-translateX" />
      <CustomImage
        className="absolute left-[50%] -translate-x-[50%] top-[60%] -translate-y-[50%] 
        sm:w-[400] sm:h-[400] w-[300] h-[300]"
        src={catImg}
        alt="catImg"
        width={400}
        height={400}
      />
    </>
  );
};

export default Circles;
