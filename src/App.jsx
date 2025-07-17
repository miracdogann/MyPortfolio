import "./style/index.css";
import MainPage from "./pages/MainPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <MainPage />
    </>
  );
}

export default App;
