import { DecorativeLosango } from "@/components/ui/decorative-losango"
import { RegisterForm } from "./register-form"

export const Register = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center px-4">
      <DecorativeLosango />
      <RegisterForm />
    </div>
  )
}
