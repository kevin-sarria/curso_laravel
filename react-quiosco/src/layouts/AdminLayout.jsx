import { Outlet } from "react-router-dom"
import { AdminSidebar } from "../components"
import { useAuth } from "../hooks"

export const AdminLayout = () => {

    useAuth({ middleware: 'admin' });

  return (
    <div className='md:flex'>
        <AdminSidebar />

        <main className="flex-1 h-screen overflow-y-auto bg-gray-100 p-10">
          <Outlet />
        </main>
        
        
      </div>
  )
}
