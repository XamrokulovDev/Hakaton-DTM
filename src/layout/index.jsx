import { useLocation } from "react-router-dom";
// import Navbar 
import Navbar from "../components/navbar"
// import Footer 
import Footer from "../components/footer"
import { Outlet } from "react-router-dom"

const Routerlayout = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/sign';

  return (
    <header>
      {!hideHeaderFooter && <Navbar />}
      <div>
        <Outlet />
      </div>
      {!hideHeaderFooter && <Footer />}
    </header>
  )
}

export default Routerlayout