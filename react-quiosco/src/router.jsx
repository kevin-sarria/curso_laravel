import { createBrowserRouter } from 'react-router-dom';
import { AdminLayout, AuthLayout, Layout } from './layouts';
import { Inicio, Login, Ordenes, Productos, Registro } from './views';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Inicio />
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/registro',
                element: <Registro />
            },
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Ordenes />
            },
            {
                path: '/admin/productos',
                element: <Productos />
            }
        ]
    }
]);

export default router;