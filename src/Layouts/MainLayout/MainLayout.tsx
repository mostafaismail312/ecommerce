import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import TopHeader from "../../components/TopHeader/TopHeader";
import { Outlet } from "react-router"

export default function MainLayout() {
  return (
    <>
      <TopHeader />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}
