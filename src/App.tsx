import {createBrowserRouter, RouterProvider} from "react-router"
import MainLayout from "./Layouts/MainLayout/MainLayout"
import Home from "./pages/Home/Home"
import NotFound from "./pages/NotFound/NotFound"
import Orders from "./pages/Orders/Orders"

import Brands from "./pages/Brands/Brands"
import Categories from "./pages/Categories/Categories"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import SearchProducts from "./pages/SearchProducts/SearchProducts"
import Cart from "./pages/Cart/Cart"
import Wishlist from "./pages/Wishlist/Wishlist"
import Favorites from "./pages/Favorites/Favorites"
import Checkout from "./pages/Checkout/Checkout"
import Login from "./pages/Authentication/Login/Login"
import SignUp from "./pages/Authentication/SignUp/SignUp"
import ForgotPassword from "./pages/Authentication/ForgotPassword/ForgotPassword"
import VerifyEmail from "./pages/Authentication/VerifyEmail/VerifyEmail"

function App() {
  const routes = createBrowserRouter([
  {
    path:"/",
    element: <MainLayout />,
    children :[
      {
        index: true ,
        element:<Home /> ,
      } ,  
       {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/verify-email",
    element: <VerifyEmail />,
  },
  {
    path: "/brands",
    element: <Brands />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/products/:id",
    element: <ProductDetails />,
  },
  {
    path: "/search",
    element: <SearchProducts />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
    ]
  }
  ])
  return (
   <>
   <RouterProvider router={routes}></RouterProvider>
   </>
  )
}

export default App
