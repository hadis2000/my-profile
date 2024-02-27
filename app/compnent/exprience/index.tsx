import Circle from "./component/circle";
import ExItem from "./component/ex-item";

const Exprience = () => {
  const ex = [
    { name: "react", className: "top-7 left-24", color: "text-[#F6CBB3]" },
    { name: "next.js", className: "top-28 left-3", color: "text-[#C45798]" },
    { name: "typescript", className: "top-56 left-0", color: "text-[#AB1B1F]" },
    { name: "bootsrtrap", className: "top-[350px] left-10" },
    { name: "javascript", className: "top-0 left-60", color: "text-[#DC677F]" },
    {
      name: "tailwindcss",
      className: "top-[400px] left-60",
      color: "text-[#404F6F]",
    },
    // { name: "html/css", className: "top-6 left-6" },
    // { name: "api", className: "top-7 left-7", color: "text-[#542E13]" },
  ];
  return (
    <div
      className="relative lg:w-[50%] w-full lg:mx-0 mx-auto 
    h-[400px] py-14 lg:my-10 my-0"
    >
      <Circle left="left-[46%]" />
      <Circle />
      <Circle left="left-[54%]" />
      {ex.map((it, index) => (
        <ExItem
          key={index}
          exName={it.name}
          textColor={it.color}
          className={it.className}
        />
      ))}
    </div>
  );
};

export default Exprience;
