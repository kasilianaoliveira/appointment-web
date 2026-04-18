import { createRouter } from '@tanstack/react-router'
import { Route as rootRoute } from './__root'
import { loginRoute, registerRoute } from './authentication'
import { indexRoute } from './home'

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  registerRoute,
])

export const router = createRouter({
  routeTree,
})