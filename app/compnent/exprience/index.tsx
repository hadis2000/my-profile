import Image from "next/image";
import Circle from "./component/circle";
import catImg from "../../asset/img/cat.png";

const Exprience = () => {
  return (
    <div
      className="relative lg:w-[54%] w-full lg:mx-0 mx-auto
    h-[460px] lg:my-10 my-0"
    >
      <Circle left="left-[46%] animate-translateX" />
      <Circle />
      <Circle left="left-[54%] animate-translateX" />
      <Image
        className="absolute left-[50%] -translate-x-[50%] top-[60%] -translate-y-[50%]"
        src={catImg}
        alt="catImg"
        width={400}
        height={400}
      />
    </div>
  );
};

export default Exprience;
