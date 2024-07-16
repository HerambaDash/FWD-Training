import "../css/sidebar.css";
function PageLinkButton({ icon, text}) {
  return (
    <>
      <button className = "pageLinkButton">
        <i className = {icon + " pageLinkIcon"}></i>
        <span className = "pageLinkText">{text}</span>
      </button>
    </>
  );
}

export default PageLinkButton;

// { `icon ${pageLinkIcon}`}
// { icon } "pageIcon"
// fa-house fa-solid pageLinkIcon