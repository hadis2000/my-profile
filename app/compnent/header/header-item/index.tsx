const HeadrItem = ({ name }: { name: string }) => {
  return (
    <li
      className="font-bold list-none text-xl cursor-pointer border-transparent 
       relative group hover:text-gray-700"
    >
      {/* <span className="border-b-2 border-defaultPink-500 absolute bottom-0 left-[50%] group-hover:w-[50%] group-hover:animate-width"></span>
      <span className="border-b-2 border-defaultPink-500 absolute bottom-0 right-[50%] group-hover:w-[50%] group-hover:animate-width"></span> */}
      <span
        className="text-defaultPink-500 absolute top-0 left-0 w-0 group-hover:w-[100%] group-hover:animate-width100
         overflow-hidden h-7 border-b-2 border-defaultPink-500 
      "
      >
        {name}
      </span>
      {name}
    </li>
  );
};

export default HeadrItem;
