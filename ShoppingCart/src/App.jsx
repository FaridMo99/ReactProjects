import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import HamburgerButton from "./components/HamburgerButton";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar>
        <HamburgerButton/>
      </Navbar>
      <Outlet />
      <Footer/>
    </>
  );
}

export default App;
