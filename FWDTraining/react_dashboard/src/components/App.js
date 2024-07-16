import Sidebar from "./Sidebar";
import ContentScreen from "./ContentScreen";
import "../css/app.css";
function App() {
  return (
    <div className = "app">
      <Sidebar />
      <ContentScreen />
    </div>
  );
}

export default App;