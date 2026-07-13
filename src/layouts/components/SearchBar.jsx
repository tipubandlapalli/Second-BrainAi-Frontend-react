const SearchBar = () => {
  return (
    <>
      <div className="hidden lg:flex flex-1 items-center">
        <input type="text" placeholder="Search" name="search" className="input input-bordered w-64" />

        <label htmlFor="search">
          <button className="btn btn-soft btn-primary ml-3">Search</button>
        </label>
      </div>
    </>
  );
}

export default SearchBar
