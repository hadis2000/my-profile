export type circleType = {
  className?: string;
};

const Circle = ({ className }: circleType) => {
  return (
    <div
      className={`absolute ${className} left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]
       sm:w-86.25 sm:h-86.25 w-72 h-72 rounded-full opacity-50 bg-[#A4D1FB]`}
    ></div>
  );
};

export default Circle;
