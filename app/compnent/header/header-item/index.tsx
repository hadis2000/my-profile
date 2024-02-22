const HeadrItem = ({ name }: { name: string }) => {
  return (
    <li className="font-bold list-none text-xl hover:text-[#C23489] border-b-2 border-transparent cursor-pointer hover:border-[#C23489]">
      {name}
    </li>
  );
};

export default HeadrItem;
