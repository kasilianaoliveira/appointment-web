import { DecorativeLosango } from "@/components/ui/decorative-losango"
import { LoginForm } from "./login-form"

export const Login = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center px-4">
      <DecorativeLosango />
      <LoginForm />
    </div>
  )
}
