import ExItem from "./ex-item";

const AllExperiences = () => {
  const ex = [
    {
      name: "react",
      className: "sm:top-[0%] top-[20%] left-[25%] sm:left-[43%]  ",
      color: "text-[#F6CBB3]",
    },
    {
      name: "next.js",
      className: "sm:top-[20%] top-[60%]  left-[2%] sm:left-[20%]",
      color: "text-[#C45798]",
    },
    {
      name: "typescript",
      className: "sm:top-[65%] top-[75%]  left-[30%] sm:left-[17%]",
      color: "text-[#AB1B1F]",
    },
    {
      name: "bootstrap",
      className: "sm:top-[95%] top-[40%]  left-[4%] sm:left-[41%] ",
    },
    {
      name: "tailwindcss",
      color: "text-[#404F6F]",
      className: "sm:top-[65%] top-[35%] right-[2%] sm:right-[15%]",
    },
    {
      name: "javascript",
      className: "sm:top-[20%] top-[60%] right-[2%] sm:right-[17%]",
      color: "text-[#DC677F]",
    },
  ];
  return (
    <div className="w-full h-full animate-spin-slow">
      {/* <div className="w-full h-full "> */}
      {ex.map((it, index) => (
        <ExItem
          key={index}
          exName={it.name}
          textColor={it.color}
          className={it.className + " animate-spin-moon "}
          // className={it.className + "  "}
        />
      ))}
    </div>
  );
};

export default AllExperiences;
