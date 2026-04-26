import { queryClient } from "@/app/query-client"
import { createRouter } from '@tanstack/react-router'
import { Route as rootRoute } from './__root'
import { googleCallbackRoute, loginRoute, registerRoute } from './authentication'
import { indexRoute } from './home'

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  registerRoute,
  googleCallbackRoute,
])

export const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
})
