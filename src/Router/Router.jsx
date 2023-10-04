import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import News from "../Pages/News";
import Destination from "../Pages/Destination";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


const router = createBrowserRouter ([
    {
        path: "/",
        element: <MainLayout></MainLayout>, 
        errorElement: <ErrorPage></ErrorPage>, 
        children: [
            {
                path: "/",
                element: <News></News>
            }, 
            {
                path: "/destination",
                element: <Destination></Destination>
            }, 
            {
                path: "/blog",
                element: <Blog></Blog>
            }, 
            {
                path: "/contact",
                element: <Contact></Contact>
            }, 
            {
                path: '/home',
                element: <Home></Home>
            }, 
            {
                path: "/login",
                element: <Login></Login>
            }, 
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
]);

export default router;