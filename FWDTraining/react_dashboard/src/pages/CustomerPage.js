import Sidebar from "../components/Sidebar";
import ContentScreen from "../components/ContentScreen";
function CustomerPage() {
  return (
    <>
      <Sidebar />
      <ContentScreen url = "customers" />
    </>
  );
}

export default CustomerPage;