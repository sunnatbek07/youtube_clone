import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import { useState } from "react"
import ResponsiveSidebar from "./components/Ui/ResponsiveSidebar"

function App() {
  const aside = useState(true)

  return (
    <div className="flex min-w-full app">
      {
        aside ? <Sidebar /> : <ResponsiveSidebar />
      }
      <div>
        <Header />
        <main className=" m-0 md:ml-20 mt-[59px] lg:ml-[260px]">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default App
