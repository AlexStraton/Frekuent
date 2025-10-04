

function SearchBar({ placeholder, onSearch, value }) {

  const handleInputChange = (event) => {
    const value = event.target.value;
    onSearch(value);
  };

  return (
    <div className="flex justify-center my-4 px-4 sm:px-8 md:px-12 lg:px-14">
      <input
        type="text"
        placeholder={placeholder || "Search...."}
        value={value}
        onChange={handleInputChange}
        className="w-full max-w-md py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
}

export default SearchBar;
