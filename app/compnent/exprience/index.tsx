import AllExpriences from "./component/all-exprience";
import Cirlces from "./component/circles";

const Exprience = () => {
  return (
    <div
      className="relative lg:w-[54%] w-full lg:mx-0 mx-auto
    h-[460px] lg:my-10 my-0"
    >
      <Cirlces />
      <AllExpriences />
    </div>
  );
};

export default Exprience;
