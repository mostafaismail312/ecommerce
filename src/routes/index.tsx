import { createBrowserRouter } from "react-router-dom";

import NotFound from "../pages/NotFound/NotFound";

import { authRoutes } from "./auth.routes";
import { appRoutes } from "./app.routes";
import AuthLayout from "../Layouts/MainLayout/AuthLayout";
import MainLayout from "../Layouts/MainLayout/MainLayout";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: authRoutes,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: appRoutes,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);