import "../css/contentScreen.css";
import {AccountContext} from "../store/AccountContext";
import { useContext } from "react";

function AccountContent() {
  const { setAuth } = useContext(AccountContext);
  return (
    <div className="content">
      <button
        className="logout"
        onClick={() => {localStorage.removeItem("account_context"); setAuth(null);}}
        style = {{ cursor : "pointer"}}
      >
        Logout
      </button>
    </div>
  );
}

export default AccountContent;
