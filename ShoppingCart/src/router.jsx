import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Cart from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";

const routes = createBrowserRouter(
  [{
      path: "/",
      element: <App />,
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

  export default routes