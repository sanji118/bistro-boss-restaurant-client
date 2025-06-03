import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../auth/Login";
import Register from "../auth/Register";
import NotFound from "../components/NotFound";

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