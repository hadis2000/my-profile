import { ReactNode } from "react";

export type tooltipType = {
  children: ReactNode;
  text?: string;
  item?: ReactNode;
};

const Tooltip = ({ children, text }: tooltipType) => {
  return (
    <div className="relative group">
      {children}
      <div className=" absolute top-full left-[50%] -translate-x-[50%] hidden group-hover:block ">
        <div className="w-2 h-2 rotate-45 bg-white absolute -top-1 left-[50%] -translate-x-[50%]"></div>
        <div className="bg-white p-1 rounded-lg shadow-md">{text}</div>
      </div>
    </div>
  );
};

export default Tooltip;
