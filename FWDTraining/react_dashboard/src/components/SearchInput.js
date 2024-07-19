import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function SearchInput() {
  const location = useLocation();
  const history = useNavigate();
  const [input, setInput] = useState("");
  const [displayText, setDispalyText] = useState("");

  useEffect(() => {
    if(location.pathname === "/") {
      setDispalyText("Home");
    }
    if(location.pathname === "/media") {
      setDispalyText("Media");
    }
    if(location.pathname === "/my-account") {
      setDispalyText("Accounts");
    }
    if(location.pathname.includes("customers")) {
      setDispalyText("Customers");
    }
    if(location.pathname.includes("departments")) {
      setDispalyText("Departments");
    }
    setInput("")
  }, [location.pathname]);

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
        placeholder={"Search in " + displayText}
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
