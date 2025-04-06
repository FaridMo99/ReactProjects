import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { ItemAmountProvider } from "../contexts/ItemAmountContext";

function MainLayout() {
  return (
    <>
      <ItemAmountProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </ItemAmountProvider>
    </>
  );
}

export default MainLayout;
