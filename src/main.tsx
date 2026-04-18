import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from "@tanstack/react-router"
import { ConfigProvider, theme as antdTheme } from "antd"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { initializeThemeMode, useThemeMode } from "./lib/theme-store"
import { themeConfig } from "./lib/theme"
import { router } from "./routers/router"

const queryClient = new QueryClient()

const root = document.getElementById("root")

if (!root) {
  throw new Error("Root element not found")
}

initializeThemeMode()

function RootProviders() {
  const { themeMode } = useThemeMode()

  const configProviderTheme = {
    ...themeConfig,
    algorithm: themeMode === "dark" ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
    token: {
      ...themeConfig.token,
      colorPrimary: themeMode === "dark" ? "#FFFFFF" : "#0F2243",
      colorInfo: themeMode === "dark" ? "#FFFFFF" : "#0F2243",
    },
  }

  return (
    <ConfigProvider theme={configProviderTheme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        {/* <App /> */}
      </QueryClientProvider>
    </ConfigProvider>
  )
}

createRoot(root).render(
  <StrictMode>
    <RootProviders />
  </StrictMode>,
)
