import { useLocation } from "react-router";
import "./App.css";
import Home from "./pages";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="App">
      <Home />
      <br />
      Anggap ini landing page
    </div>
  );
}

export default App;
