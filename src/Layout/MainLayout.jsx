import { Outlet } from "react-router-dom"
// components
import Navbar from "../components/Navbar"
import ThemeContainer from "../components/ThemeContainer"

function MainLayout() {
  return (
    <>
      <Navbar/>
      <ThemeContainer/>
      <main className="align-element">
        <Outlet/>
      </main>
    </>
  )
}

export default MainLayout