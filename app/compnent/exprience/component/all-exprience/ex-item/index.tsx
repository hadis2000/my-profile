type ExItemType = {
  exName: string;
  textColor?: string;
  className: string;
};
const ExItem = ({ exName, textColor, className }: ExItemType) => {
  return (
    <div
      className={`absolute ${className} bg-white rounded-full px-6 py-1 text-lg ${
        textColor ?? "text-[#000000]"
      } 
      font-bold w-fit text-center shadow-[4px_4px_4.7px_0px_rgba(0,0,0,0.25)]`}
    >
      {exName[0].toUpperCase() + exName.substring(1)}
    </div>
  );
};

export default ExItem;
