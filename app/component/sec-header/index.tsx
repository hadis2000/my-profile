type secHeaderType = {
  secName: string;
};

const SecHeader = ({ secName }: secHeaderType) => {
  return <h2 className="text-center text-4xl font-bold">{secName}</h2>;
};

export default SecHeader;
