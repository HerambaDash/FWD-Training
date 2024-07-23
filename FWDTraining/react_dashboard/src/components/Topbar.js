import SearchInput from "./SearchInput";
import "../css/contentScreen.css";
import {AccountContext} from "../store/AccountContext";
import { useContext } from "react";
function Topbar() {
  const { setAuth } = useContext(AccountContext);
   return (
    <div className = "topbar">
      <SearchInput />
      <button
        className="logout"
        onClick={() => {localStorage.removeItem("account_context"); setAuth(null);}}
        style = {{ cursor : "pointer"}}
      >
        Logout
      </button>
    </div>
   )
}

export default Topbar;