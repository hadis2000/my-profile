import HeaderItem from "./header-item";

const items = ["home", "about", "skills", "works", "contact us"];

const Header = () => {
  return (
    <header className="w-[90%] h-[70px] bg-white rounded-3xl mx-auto px-[2%] flex items-center justify-between mt-2">
      <div className="border border-red-700">ddd</div>
      <div className="flex gap-7 h-fit">
        {items.map((itemName, index) => (
          <HeaderItem key={index} name={itemName} />
        ))}
      </div>
    </header>
  );
};

export default Header;
