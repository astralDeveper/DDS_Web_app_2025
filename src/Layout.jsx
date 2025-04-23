import { Outlet } from "react-router-dom";
import Header from "./Components/Header";

const Layout = () => {
  return (
    <>
      <div className="bg-[#262626]">
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
