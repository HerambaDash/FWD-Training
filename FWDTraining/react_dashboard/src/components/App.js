import { Routes, Route } from "react-router-dom";
import Homepage from '../pages/Homepage';
import AccountsPage from '../pages/AccountsPage';
import CustomerPage from '../pages/CustomerPage';
import DepartmentPage from '../pages/DepartmentPage';
import MediaPage from '../pages/MediaPage';
import Sidebar from "./Sidebar";
import ContentScreen from "./ContentScreen";
import "../css/app.css";
function App() {
  return (
    <div className = "app">
      {/* <Routes>
        <Route exact = {true} path = "/" element = {<Homepage />} />
        <Route exact = {true} path = "customers/:pgNo" element = {<CustomerPage />} />
        <Route exact = {true} path = "departments/:pgNo" element = {<DepartmentPage />} />
        <Route exact = {true} path = "media" element = {<MediaPage />} />
        <Route exact = {true} path = "my-account" element = {<AccountsPage />} />
      </Routes> */}
      <Sidebar />
      <ContentScreen />
    </div>
  );
}

export default App;

// ParentDiv(relative) -> Navbar (c1, positon: fixed, top - 0) & Page(c2 & page content & top - 75px, marginTop 75px)