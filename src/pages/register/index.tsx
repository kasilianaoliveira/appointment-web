import { RegisterForm } from "@/components/register/register-form"
import { DecorativeLosango } from "@/components/ui/decorative-losango"

export const Register = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center px-4">
      <DecorativeLosango />
      <RegisterForm />
    </div>
  )
}
