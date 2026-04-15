import { createRouter } from '@tanstack/react-router'
import { Route as rootRoute } from './__root'
import { loginRoute, registerRoute } from './authentication'

const routeTree = rootRoute.addChildren([
  loginRoute,
  registerRoute,
])

export const router = createRouter({
  routeTree,
})