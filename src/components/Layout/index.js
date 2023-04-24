import React from "react";
import { Outlet } from "react-router-dom/dist";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Layout</h1>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
