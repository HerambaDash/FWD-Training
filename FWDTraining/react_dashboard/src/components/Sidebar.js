import PageLinkButton from "./PageLinkButton";
import CompanyTitle from "./CompanyTitle";
import "../css/sidebar.css";
function Sidebar() {
  return (
    <div className = "sidebar">
      <div className = "marginedDiv1">
        <CompanyTitle />
        <PageLinkButton icon = "fa-solid fa-house" text = "Home" />
        <PageLinkButton icon = "fa-solid fa-user-group" text = "Customers" />
        <PageLinkButton icon = "fa-solid fa-id-card" text = "Departments" />
        <PageLinkButton icon = "fa-solid fa-image" text = "Media" />
      </div>
      <div className = "marginedDiv2">
        <PageLinkButton icon = "fa-solid fa-user" text = "My Account" />
      </div>
    </div>
  );
}

export default Sidebar;