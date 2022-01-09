import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Canvas from "../../components/Canvas";

const Layout = () => {
  return (
    <>
      <Header />
      <Canvas />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
