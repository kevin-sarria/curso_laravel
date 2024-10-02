import { Link } from "react-router-dom"
import { useAuth } from "../hooks"

export const AdminSidebar = () => {

    const { logout } = useAuth({ middleware: 'auth' });

  return (
    <aside className="md:w-72 h-screen">
        <div className="p-4">
            <img
                src="/img/logo.svg"
                alt="Imagen Logotipo"
                className="w-40"
            />
        </div>

        <nav className="flex flex-col p-4">
            <Link to="/admin" className="font-medium text-lg">Ordenes</Link>
            <Link to="/admin/productos" className="font-medium text-lg">Producto</Link>
        </nav>

        <div className="my-5 px-5">
            <button
                type='button'
                className='text-center bg-red-500 hover:bg-red-700 w-full p-3 font-bold text-white truncate'
                onClick={ () => logout() }
            >
                Cerrar Sesion
            </button>
        </div>

    </aside>
  )
}
