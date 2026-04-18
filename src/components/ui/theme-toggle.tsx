import { useThemeMode } from "@/lib/theme-store"
import { MoonOutlined, SunOutlined } from "@ant-design/icons"

type ThemeToggleProps = {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const themeMode = useThemeMode((state) => state.themeMode)
  const toggleThemeMode = useThemeMode((state) => state.toggleThemeMode)

  const buttonClassName = [
    "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  const isDarkMode = themeMode === "dark"

  return (
    <button
      type="button"
      aria-label={isDarkMode ? "Ativar tema claro" : "Ativar tema escuro"}
      aria-pressed={isDarkMode}
      className={buttonClassName}
      onClick={toggleThemeMode}
    >
      {isDarkMode ? <SunOutlined className="text-base" /> : <MoonOutlined className="text-base" />}
    </button>
  )
}
