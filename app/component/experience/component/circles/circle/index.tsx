export type circleType = {
  className?: string;
};

const Circle = ({ className }: circleType) => {
  return (
    <div
      className={`absolute ${className} left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]
       w-86.25 h-86.25 rounded-full opacity-50 bg-[#A4D1FB]`}
    ></div>
  );
};

export default Circle;
