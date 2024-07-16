import "../css/sidebar.css";
import Logo from "../assets/Logo.png";
function CompanyTitle() {
  return (
    <div className = "compTitle">
      <img className = "logoImage" src={Logo} alt="Logo"></img>
      <span className="companyText">Workspace</span>
    </div>
  );
}

export default CompanyTitle;
