import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import {Outlet} from "react-router"

export default function MainLayout() {
  return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}
