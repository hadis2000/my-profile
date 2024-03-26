import ExItem from "./ex-item";

const AllExpriences = () => {
  const ex = [
    {
      name: "react",
      className: "-top-5 left-[50%] -translate-x-[50%]",
      color: "text-[#F6CBB3]",
    },
    {
      name: "next.js",
      className: "top-[20%] -translate-y-[20%] left-12",
      color: "text-[#C45798]",
    },
    {
      name: "typescript",
      className: "top-[65%] -translate-y-[65%] left-4",
      color: "text-[#AB1B1F]",
    },
    {
      name: "bootsrtrap",
      className: "bottom-4 left-[50%] -translate-x-[50%]",
    },
    {
      name: "tailwindcss",
      color: "text-[#404F6F]",
      className: "top-[65%] -translate-y-[65%] right-4",
    },
    {
      name: "javascript",
      className: "top-[20%] -translate-y-[20%] right-12",
      color: "text-[#DC677F]",
    },
  ];
  return (
    <>
      {ex.map((it, index) => (
        <ExItem
          key={index}
          exName={it.name}
          textColor={it.color}
          className={it.className}
        />
      ))}
    </>
  );
};

export default AllExpriences;
