import LosangoImg from "@/assets/losango.png"
import { RegisterForm } from "./register-form"

export const Register = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <div className="fixed left-4 bottom-4 z-0">
        <img src={LosangoImg} alt="Decorative losango" className="h-40 w-auto" />
      </div>
      <RegisterForm />
    </div>
  )
}