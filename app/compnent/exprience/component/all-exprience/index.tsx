import ExItem from "./ex-item";

// const ex = [
//   {
//     name: "react",
//     className: "-top-5 left-[50%] -translate-x-[50%]",
//     color: "text-[#F6CBB3]",
//   },
//   {
//     name: "next.js",
//     className: "top-[20%] -translate-y-[20%] left-12",
//     color: "text-[#C45798]",
//   },
//   {
//     name: "typescript",
//     className: "top-[65%] -translate-y-[65%] left-4",
//     color: "text-[#AB1B1F]",
//   },
//   {
//     name: "bootsrtrap",
//     className: "bottom-8 left-[50%] -translate-x-[50%]",
//   },
//   { name: "bootsrtrap", className: "top-[65%] -translate-y-[65%] right-4" },
//   {
//     name: "javascript",
//     className: "top-[20%] -translate-y-[20%] right-12",
//     color: "text-[#DC677F]",
//   },
//   // {
//   //   name: "tailwindcss",
//   //   className: "top-[400px] left-60",
//   //   color: "text-[#404F6F]",
//   // },
// ];
//  [
//   { name: "react", className: "top-7 left-24", color: "text-[#F6CBB3]" },
//   { name: "next.js", className: "top-28 left-3", color: "text-[#C45798]" },
//   { name: "typescript", className: "top-56 left-0", color: "text-[#AB1B1F]" },
//   { name: "bootsrtrap", className: "top-[350px] left-10" },
//   { name: "javascript", className: "top-0 left-60", color: "text-[#DC677F]" },
//   {
//     name: "tailwindcss",
//     className: "top-[400px] left-60",
//     color: "text-[#404F6F]",
//   },
//   // { name: "html/css", className: "top-6 left-6" },
//   // { name: "api", className: "top-7 left-7", color: "text-[#542E13]" },
// ];

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
      className: "bottom-8 left-[50%] -translate-x-[50%]",
    },
    { name: "bootsrtrap", className: "top-[65%] -translate-y-[65%] right-4" },
    {
      name: "javascript",
      className: "top-[20%] -translate-y-[20%] right-12",
      color: "text-[#DC677F]",
    },
    // {
    //   name: "tailwindcss",
    //   className: "top-[400px] left-60",
    //   color: "text-[#404F6F]",
    // },
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
