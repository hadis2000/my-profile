import SearchInput from "../common/search-input";

const Introduction = () => {
  return (
    <div className="lg:w-fit w-full drop-shadow-xl lg:my-24 my-5 lg:text-left text-center">
      <h2 className="text-6xl font-bold py-3">Hi there</h2>
      <h2 className="text-5xl font-semibold py-5 text-defaultGray-500 ">
        Im <span className="text-defaultPink-500">Hadiseh Hosseini</span>
      </h2>
      <h3 className="text-4xl font-medium text-defaultPink-600">
        Im into web develop
      </h3>
      <SearchInput />
    </div>
  );
};

export default Introduction;
