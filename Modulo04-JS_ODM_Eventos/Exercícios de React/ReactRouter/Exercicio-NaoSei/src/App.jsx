import { Outlet } from "react-router-dom"
import Navbar from "./component/NavBar"

function App() {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default App
