import Home from "../pages/Home/Home";
import Brands from "../pages/Brands/Brands";
import Categories from "../pages/Categories/Categories";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import SearchProducts from "../pages/SearchProducts/SearchProducts";
import Cart from "../pages/Cart/Cart";
import Wishlist from "../pages/Wishlist/Wishlist";
import Favorites from "../pages/Favorites/Favorites";
import Orders from "../pages/Orders/Orders";
import Checkout from "../pages/Checkout/Checkout";
import ProtectedRoute from "../guards/ProtectedRoute";
import Products from "../pages/Products/Products";


export const appRoutes = [
  {
    index: true,
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/brands",
    element: (
      <ProtectedRoute>
        <Brands />
      </ProtectedRoute>
    ),
  },
  {
    path: "/categories",
    element: (
      <ProtectedRoute>
        <Categories />
      </ProtectedRoute>
    ),
  },
  {
    path: "/products/:id",
    element: (
      <ProtectedRoute>
        <ProductDetails />
      </ProtectedRoute>
    ),
  },
  {
    path: "/search",
    element: (
      <ProtectedRoute>
        <SearchProducts />
      </ProtectedRoute>
    ),
  },
  {
    path: "/cart",
    element: (
      <ProtectedRoute>
        <Cart />
      </ProtectedRoute>
    ),
  },
  {
    path: "/wishlist",
    element: (
      <ProtectedRoute>
        <Wishlist />
      </ProtectedRoute>
    ),
  },
  {
    path: "/favorites",
    element: (
      <ProtectedRoute>
        <Favorites />
      </ProtectedRoute>
    ),
  },
  {
    path: "/orders",
    element: (
      <ProtectedRoute>
        <Orders />
      </ProtectedRoute>
    ),
  },
  {
    path: "/products",
    element: (
      <ProtectedRoute>
        <Products />
      </ProtectedRoute>
    ),
  },
  {
    path: "/checkout",
    element: (
      <ProtectedRoute>
        <Checkout />
      </ProtectedRoute>
    ),
  },
];