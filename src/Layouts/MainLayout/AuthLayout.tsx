import Footer from "../../components/Footer/Footer";
import {Outlet} from "react-router"
import NavBar from "../../components/NavBar/NavBar";

export default function AuthLayout() {
  return (
    <>
  <NavBar/>
    <Outlet />
   <Footer/>
    </>
  )
}
