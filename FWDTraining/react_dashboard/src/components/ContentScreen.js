import Topbar from "./Topbar";
import Content from "./Content";
import "../css/contentScreen.css";
function ContentScreen() {
  return (
    <div className = "contentScreen">
      <Topbar />
      <Content />
    </div>
  );
}

export default ContentScreen;