import Sidebar from "../components/Sidebar";
import ContentScreen from "../components/ContentScreen";
function Homepage() {
  return (
    <>
      <Sidebar />
      <ContentScreen url = "homepage" />
    </>
  );
}

export default Homepage;