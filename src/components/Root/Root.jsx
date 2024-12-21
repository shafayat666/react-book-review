import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col min-h-screen">
      <div className="flex-grow">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;