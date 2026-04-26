import Home from "@/pages/home";
import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from './__root';


export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <Home />,
})