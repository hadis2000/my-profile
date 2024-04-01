import Image from "next/image";

const SkillItems = () => {
  return (
    <div className="border border-teal-900 relative group">
      <div className="bg-red-400 w-[110%] h-[110%] absolute -top-[5%] -left-[5%] scale-75 group-hover:scale-100"></div>
      <div
        className="bg-white rounded-2xl shadow-md py-7 cursor-pointer
       scale-90 group-hover:scale-95
       flex flex-col items-center justify-center gap-1"
      >
        <Image
          className="bg-green-500 rounded-full mb-3"
          src=""
          alt=""
          width={120}
          height={120}
        />
        <h3 className="text-lg font-extrabold uppercase">react</h3>
        <h3 className="text-lg font-medium">2 years</h3>
      </div>
    </div>
  );
};

export default SkillItems;
