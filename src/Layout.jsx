import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Layout = () => {
  return (
    <>
      <div className="bg-yellow_color">
        <Header />
      </div>
      <main className="">
        <Outlet />
      </main>
      <div className="bg-yellow_color">
        <Footer />
      </div>
    </>
  );
};

export default Layout;
