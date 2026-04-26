
import { Login } from "@/pages/login";
import { Register } from "@/pages/register";
import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from './__root';

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: () => <Login />,
})

export const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: () => <Register />,
})