import { QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from "@tanstack/react-router"
import { ConfigProvider, theme as antdTheme } from "antd"
import { queryClient } from "@/app/query-client"
import { useThemeMode } from "@/lib/theme-store"
import { themeConfig } from "@/lib/theme"
import { router } from "@/routers/router"

export function RootProviders() {
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
      </QueryClientProvider>
    </ConfigProvider>
  )
}
