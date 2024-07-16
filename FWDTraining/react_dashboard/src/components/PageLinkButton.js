import "../css/sidebar.css";
import { useNavigate } from "react-router-dom";
function PageLinkButton({ icon, text, link}) {
  const history = useNavigate();
  return (
    <>
      <button className = "pageLinkButton" onClick = {() => history(link)}>
        <i className = {icon + " pageLinkIcon"}></i>
        <span className = "pageLinkText">{text}</span>
      </button>
    </>
  );
}

export default PageLinkButton;