import NavBar from "./Components/NavBar/NavBar.js";
import Home from "./Components/Home/Home.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <ToastContainer />
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
