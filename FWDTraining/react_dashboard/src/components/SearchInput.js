function SearchInput() {
  return (
    <div className="searchInputParent">
      <input
        className="searchInput"
        type="text"
        placeholder="Search in"
      ></input>
      <span className = "searchIconParent">
        <i className="fa-solid fa-magnifying-glass center searchIcon"></i>
      </span>
    </div>
  );
}

export default SearchInput;
