import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RootProviders } from "@/app/root-providers"
import "./index.css"
import { initializeThemeMode } from "./lib/theme-store"

const root = document.getElementById("root")

if (!root) {
  throw new Error("Root element not found")
}

initializeThemeMode()

createRoot(root).render(
  <StrictMode>
    <RootProviders />
  </StrictMode>,
)
