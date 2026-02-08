import { ReactNode } from "react";

type secHeaderType = {
  secName: ReactNode;
};

const SecHeader = ({ secName }: secHeaderType) => {
  return <h2 className="text-center text-4xl font-bold">{secName}</h2>;
};

export default SecHeader;
