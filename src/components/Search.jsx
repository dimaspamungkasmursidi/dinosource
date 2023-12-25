const Search = () => {
  return (
    <div className="w-full flex justify-center gap-2 mt-10 text-center">
      <input
        type="text"
        className="w-1/2 px-5 py-2 border rounded-lg bg-white shadow-lg shadow-secondary placeholder-gray-400 text-gray-700 focus:outline-none focus:shadow-outline"
        placeholder="Cari Dinosaurus"
        minlength="3"
        maxlength="50"
      />
      <button className="text-white bg-secondary hover:bg-slate-500 py-2 px-4 rounded shadow-lg shadow-white">Search</button>
    </div>
  );
};

export default Search;
