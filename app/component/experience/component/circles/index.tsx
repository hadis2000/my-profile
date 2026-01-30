import Image from "next/image";
import Circle from "./circle";
import catImg from "../../../../asset/img/cat.png";

const Circles = () => {
  return (
    <>
      <Circle className="animate-translateX-reverse" />
      <Circle />
      <Circle className="animate-translateX" />
      <Image
        className="absolute left-[50%] -translate-x-[50%] top-[60%] -translate-y-[50%]"
        src={catImg}
        alt="catImg"
        width={400}
        height={400}
      />
    </>
  );
};

export default Circles;
