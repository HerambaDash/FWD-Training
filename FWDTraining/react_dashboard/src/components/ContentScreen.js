import Topbar from "./Topbar";
import MediaContent from "./MediaContent";
import AccountContent from "./AccountContent";
import CustomerContent from "./CustomerContent";
import HomeContent from "./HomeContent";
import DepartmentContent from "./DepartmentContent";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../css/contentScreen.css";
function ContentScreen({ url }) {
  // const location = useLocation();
  // console.log(location);
  return (
    <div className = "contentScreen">
      <Topbar />
    {/*     
      {
        url === "accounts" ? <AccountContent /> :
        url === "media" ? <MediaContent /> :
        url === "customers" ? <CustomerContent /> :
        url === "departments" ? <DepartmentContent /> :
        url === "homepage" ? <HomeContent /> : <></>
      } 
    */}
      <Outlet />
    </div>
  );
}

export default ContentScreen;