import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <div className="flex">
      <Sidebar />
      <div>
        <Header />
        <main className="mt-[59px] ml-[252px]">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default App
