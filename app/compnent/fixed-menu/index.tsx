const FixedMenu = () => {
  return (
    <div
      className="w-24 h-14 fixed top-36 left-0 
    *:h-full *:absolute *:top-0 *:left-0 *:rounded-r-lg"
    >
      <div className="w-full bg-defaultBlue-500"></div>
      <div className="w-2/3 bg-defaultBlue-400"></div>
      <div className="w-1/3 bg-defaultBlue-300"></div>
    </div>
  );
};

export default FixedMenu;
