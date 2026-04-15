import { Login } from '@/components/login/index';
import { Register } from '@/components/register/index';
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