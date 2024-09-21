import { Outlet } from 'react-router-dom';
import { Sidebar, Resumen } from '../components'

export const Layout = () => {
  return (
    <div className='md:flex'>
      <Sidebar />

      <main className="flex-1 h-screen overflow-y-auto bg-gray-100 p-10">
        <Outlet />
      </main>
      
      <Resumen />
    </div>
  )
}