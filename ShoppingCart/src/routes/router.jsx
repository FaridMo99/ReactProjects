import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage.jsx";
import Cart from "../pages/Cart.jsx";
import Home from "../pages/Home.jsx";
import MainLayout from "../layouts/MainLayout.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Cart",
        element: <Cart />,
      },
    ],
  },
]);

export default routes;
