import LosangoImg from "@/assets/losango.png"
import { LoginForm } from "./login-form"
export const Login = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <div className="fixed -left-12 -bottom-6 z-0">
        <img src={LosangoImg} alt="Decorative losango" className="md:h-50 h-40 w-auto" />
      </div>
      <LoginForm />
    </div>
  )
}