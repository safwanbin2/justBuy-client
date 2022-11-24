import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Category from "../Pages/Home/Categories/Category/Category";
import Home from "../Pages/Home/Home";

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
                path: "/category/:title",
                element: <Category></Category>,
                loader: ({params}) => fetch(``)
            }
        ]
    }
])

export default router;