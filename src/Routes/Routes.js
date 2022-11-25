import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import Main from "../Layouts/Main";
import AddProducts from "../Pages/Dashboard/AddProducts/AddProducts";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProcuts/MyProducts";
import Category from "../Pages/Home/Categories/Category/Category";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/category/:category",
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.category}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "/dashboard/myorders",
                element: <MyOrders></MyOrders>
            },
            {
                path: "/dashboard/myproducts",
                element: <MyProducts></MyProducts>
            },
            {
                path: "/dashboard/addproducts",
                element: <AddProducts></AddProducts>
            },
            {
                path: "/dashboard/allbuyers",
                element: <AllBuyers></AllBuyers>
            },
            {
                path: "/dashboard/allsellers",
                element: <AllSellers></AllSellers>
            }
        ]
    }
])

export default router;