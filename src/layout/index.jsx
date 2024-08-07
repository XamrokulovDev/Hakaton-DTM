// import Navbar 
import Navbar from "../components/navbar"
// import Footer 
import Footer from "../components/footer"
import { Outlet } from "react-router-dom"

const Routerlayout = () => {
  return (
    <header>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </header>
  )
}

export default Routerlayout