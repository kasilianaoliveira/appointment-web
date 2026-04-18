import Home from "@/components/home";
import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from './__root';


export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <Home />,
})