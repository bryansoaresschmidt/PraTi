import { Outlet } from "react-router-dom"
import Navbar from "./component/NavBar"

function App() {
  return (
    <>
    <Navbar />
    <h1>React Router</h1>
    <Outlet />
    </>
  )
}

export default App
