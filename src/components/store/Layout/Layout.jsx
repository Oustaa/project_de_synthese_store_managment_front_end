import React from "react";
import { Outlet } from "react-router-dom/dist";
import Header from "./Header";
import Footer from "../../Layout/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
