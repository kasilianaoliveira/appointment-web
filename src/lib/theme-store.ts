import { create } from "zustand"
import { persist } from "zustand/middleware"

export type ThemeMode = "light" | "dark"

const STORAGE_KEY = "appointment-web-theme-mode"

function getStoredThemeMode(): ThemeMode | null {
  if (typeof window === "undefined") {
    return null
  }

  const storedValue = window.localStorage.getItem(STORAGE_KEY)

  if (!storedValue) {
    return null
  }

  try {
    const parsedValue = JSON.parse(storedValue) as {
      state?: { themeMode?: ThemeMode }
    }

    return parsedValue.state?.themeMode ?? null
  } catch {
    return null
  }
}

function getSystemThemeMode(): ThemeMode {
  if (typeof window === "undefined") {
    return "light"
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function applyThemeMode(themeMode: ThemeMode) {
  if (typeof document === "undefined") {
    return
  }

  const root = document.documentElement

  root.classList.toggle("dark", themeMode === "dark")
  root.style.colorScheme = themeMode
}

type ThemeModeStore = {
  themeMode: ThemeMode
  setThemeMode: (themeMode: ThemeMode) => void
  toggleThemeMode: () => void
}

export const useThemeMode = create<ThemeModeStore>()(
  persist(
    (set, get) => ({
      themeMode: getSystemThemeMode(),
      setThemeMode: (themeMode) => {
        applyThemeMode(themeMode)
        set({ themeMode })
      },
      toggleThemeMode: () => {
        const nextThemeMode = get().themeMode === "dark" ? "light" : "dark"

        applyThemeMode(nextThemeMode)
        set({ themeMode: nextThemeMode })
      },
    }),
    {
      name: STORAGE_KEY,
      partialize: (state) => ({ themeMode: state.themeMode }),
      onRehydrateStorage: () => (state) => {
        applyThemeMode(state?.themeMode ?? getSystemThemeMode())
      },
    },
  ),
)

export function initializeThemeMode() {
  const themeMode = getStoredThemeMode() ?? useThemeMode.getState().themeMode ?? getSystemThemeMode()

  applyThemeMode(themeMode)

  return themeMode
}

if (typeof window !== "undefined") {
  const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)")

  mediaQueryList.addEventListener("change", (event) => {
    const storedTheme = getStoredThemeMode()

    if (storedTheme) {
      return
    }

    const nextThemeMode = event.matches ? "dark" : "light"

    applyThemeMode(nextThemeMode)
    useThemeMode.setState({ themeMode: nextThemeMode })
  })

  useThemeMode.subscribe((state) => {
    applyThemeMode(state.themeMode)
  })
}
