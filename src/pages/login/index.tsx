import { LoginForm } from "@/components/login/login-form"
import { DecorativeLosango } from "@/components/ui/decorative-losango"

export const Login = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center px-4">
      <DecorativeLosango />
      <LoginForm />
    </div>
  )
}
