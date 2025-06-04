import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../auth/Login";
import Register from "../auth/Register";
import NotFound from "../components/NotFound";
import Contact from "../pages/Contact/Contact";
import Menu from "../pages/menu/Menu";
import Dashboard from "../pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout/>,
        children:[
            {
                index: true,
                element: <HomeLayout/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/menu',
                element:<Menu/>
            },
            {
                path:'/dashboard',
                element:<Dashboard/>
            },
            {
                path:'auth/login',
                element: <Login/>,
            },
            {
                path: 'auth/register',
                element: <Register/>,
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    }
])