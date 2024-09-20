import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout, Layout } from './layouts';
import { Inicio, Login, Registro } from './views';

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
]);

export default router;