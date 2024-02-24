export type circleType = {
  left?: string;
};

const Circle = ({ left = "left-[50%]" }: circleType) => {
  return (
    <div
      className={`absolute ${left} top-[50%] -translate-x-[50%] -translate-y-[50%]
       w-[345px] h-[345px] rounded-full opacity-50 bg-[#A4D1FB]`}
    ></div>
  );
};

export default Circle;
