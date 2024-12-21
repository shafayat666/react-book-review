import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { createContext } from "react";
import { Bounce, ToastContainer } from "react-toastify";

export const LevelContext = createContext(1)

const Root = () => {
  const books = useLoaderData();
  
  return (
    <div className="w-11/12 mx-auto flex flex-col min-h-screen">
      <div className="flex-grow">
        <LevelContext.Provider value={books}>
          <Header />
          <Outlet />
        </LevelContext.Provider>
      </div>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default Root;