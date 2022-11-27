import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import Main from "../Layouts/Main";
import AddProducts from "../Pages/Dashboard/AddProducts/AddProducts";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import Payment from "../Pages/Dashboard/MyOrders/Payment";
import MyProducts from "../Pages/Dashboard/MyProcuts/MyProducts";
import Wishlist from "../Pages/Dashboard/Wishlist/Wishlist";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Category from "../Pages/Home/Categories/Category/Category";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/category/:category",
                element: <PrivateRoute><Category></Category></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.category}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('justbuy-token')}`
                    }
                })
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
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path: "/dashboard/myorders",
                element: <MyOrders></MyOrders>
            },
            {
                path: "/dashboard/wishlist",
                element: <Wishlist></Wishlist>
            },
            {
                path: "/dashboard/myproducts",
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: "/dashboard/addproducts",
                element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            {
                path: "/dashboard/allbuyers",
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: "/dashboard/allsellers",
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: "/dashboard/payment/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/payment/${params.id}`),
                element: <Payment></Payment>
            }
        ]
    }
])

export default router;