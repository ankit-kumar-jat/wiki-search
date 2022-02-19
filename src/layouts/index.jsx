import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
function Layout() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
