import PageLinkButton from "./PageLinkButton";
import CompanyTitle from "./CompanyTitle";
import "../css/sidebar.css";
function Sidebar() {
  return (
    <div className = "sidebar">
      <div className = "marginedDiv1">
        <CompanyTitle />
        <PageLinkButton icon = "fa-solid fa-house" text = "Home" link = "/" />
        <PageLinkButton icon = "fa-solid fa-user-group" text = "Customers" link = "/customers/1" />
        <PageLinkButton icon = "fa-solid fa-id-card" text = "Departments" link = "/departments/1" />
        <PageLinkButton icon = "fa-solid fa-image" text = "Media"  link = "/media" />
      </div>
      <div className = "marginedDiv2">
        <PageLinkButton icon = "fa-solid fa-user" text = "My Account" link = "/my-account"/>
      </div>
    </div>
  );
}

export default Sidebar;