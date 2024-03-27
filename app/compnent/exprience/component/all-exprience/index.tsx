import ExItem from "./ex-item";

const AllExpriences = () => {
  const ex = [
    {
      name: "react",
      className: "top-[0%] left-[43%]  ",
      color: "text-[#F6CBB3]",
    },
    {
      name: "next.js",
      className: "top-[20%] left-[20%]",
      color: "text-[#C45798]",
    },
    {
      name: "typescript",
      className: "top-[65%] left-[17%]",
      color: "text-[#AB1B1F]",
    },
    {
      name: "bootsrtrap",
      className: "top-[95%] left-[41%] ",
    },
    {
      name: "tailwindcss",
      color: "text-[#404F6F]",
      className: "top-[65%]  right-[15%]",
    },
    {
      name: "javascript",
      className: "top-[20%] right-[17%]",
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

export default AllExpriences;
