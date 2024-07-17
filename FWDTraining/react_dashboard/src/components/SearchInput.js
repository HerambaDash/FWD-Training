import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function SearchInput() {
  const location = useLocation();
  const history = useNavigate();
  const [input, setInput] = useState("");
  const [displayText, setDispalyText] = useState(location.pathname);
  function handleSearch() {
    // let value = document.getElementById("search").value;
    // console.log(value);
    // history(location.pathname + "?" + value);
    history(location.pathname + "?" + input)
  }
  return (
    <div className="searchInputParent">
      <input
        id = "search"
        className="searchInput"
        type="text"
        placeholder={"Search in" + " " + location?.pathname}
        onChange = {(e) => setInput(e.target.value)}
        value = {input}
      ></input>
      <span className = "searchIconParent" onClick = {handleSearch}>
        <i className="fa-solid fa-magnifying-glass center searchIcon"></i>
      </span>
    </div>
  );
}

export default SearchInput;
