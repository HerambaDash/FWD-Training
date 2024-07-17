import "../css/sidebar.css";
import { useLocation, useNavigate } from "react-router-dom";
function PageLinkButton({ icon, text, link}) {
  const history = useNavigate();
  const location = useLocation();
  return (
    <>
      <button className = {location.pathname === link ? "pageLinkButton active" : "pageLinkButton"} onClick = {() => history(link)}>
        <i className = {icon + " pageLinkIcon"}></i>
        <span className = "pageLinkText">{text}</span>
      </button>
    </>
  );
}

export default PageLinkButton;