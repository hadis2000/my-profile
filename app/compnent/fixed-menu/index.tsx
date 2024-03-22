const FixedMenu = () => {
  return (
    <div
      className="w-24 h-14 fixed top-36 left-0 *:transition-all
    *:h-full *:absolute *:top-0 *:left-0 *:rounded-r-lg"
    >
      <div className="w-full hover:w-[130%] bg-defaultBlue-500"></div>
      <div className="w-2/3 hover:w-[130%] bg-defaultBlue-400"></div>
      <div className="w-1/3 hover:w-[130%] bg-defaultBlue-300"></div>
    </div>
  );
};

export default FixedMenu;
