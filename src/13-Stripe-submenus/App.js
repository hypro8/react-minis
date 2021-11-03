import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SubMenu from "./Submenu";

function StripeApp() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <SubMenu />
    </>
  );
}

export default StripeApp;
