import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Routerlayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/sign';

  return (
    <header className="relative">
      {!hideHeaderFooter && <Navbar />}
      <div className="">
        <Outlet />
      </div>
      {!hideHeaderFooter && <Footer />}
    </header>
  );
}

export default Routerlayout;