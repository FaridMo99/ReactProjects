import {createBrowserRouter} from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import ErrorPage from "../pages/ErrorPage"
import Home from "../pages/Home"

const route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children:[{
            index:true,
            element:<Home/>
        },]
    }
])

export default route