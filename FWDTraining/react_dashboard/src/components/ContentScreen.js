import Topbar from "./Topbar";
// import MediaContent from "./MediaContent";
// import AccountContent from "./AccountContent";
// import CustomerContent from "./CustomerContent";
// import HomeContent from "./HomeContent";
// import DepartmentContent from "./DepartmentContent";
import { Outlet } from "react-router-dom";
import "../css/contentScreen.css";
function ContentScreen({ url }) {
  return (
    <div className = "contentScreen">
      <Topbar />   
      {/* {
        url === "accounts" ? <AccountContent /> :
        url === "media" ? <MediaContent /> :
        url === "customers" ? <CustomerContent /> :
        url === "departments" ? <DepartmentContent /> :
        url === "homepage" ? <HomeContent /> : <></>
      }  */}
      <Outlet />
    </div>
  );
}

export default ContentScreen;

// location.pathname.includes(account) 