import { Outlet } from "react-router-dom";
import Navber from "../Sheard/Navber/Navber";
import Footer from "../Sheard/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
