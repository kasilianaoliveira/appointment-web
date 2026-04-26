// import { ThemeToggle } from "./components/ui/theme-toggle"
import { Login } from "./pages/login"
export function App() {
  return (
    <div className="page-background min-h-screen">
      <div className="mx-auto flex min-h-screen items-center justify-center px-5">

        <div className="absolute right-4 top-4">
          {/* <ThemeToggle /> */}
        </div>

        <Login />
      </div>
    </div>
  )
}
