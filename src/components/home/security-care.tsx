import SecurityImage from "@/assets/security-image.png"
import { CheckOutlined } from "@ant-design/icons"
import { useNavigate } from "@tanstack/react-router"
import { Button } from "../ui/button"
import { Subtitle } from "../ui/subtitle"
import { Title } from "../ui/title"

const highlights = [
  "Atendimento rápido",
  "Diagnóstico preciso",
  "Segurança no manuseio",
  "Suporte confiável",
]

export function SecurityCare() {
  const navigate = useNavigate()

  return (
    <section className="mx-auto flex w-full max-w-360 flex-col items-center gap-12 px-4 py-16 lg:flex-row lg:justify-between lg:gap-16 lg:py-24">
      <div className="flex w-full justify-center lg:max-w-3xl lg:justify-start">
        <img
          src={SecurityImage}
          alt="Equipe técnica atendendo um cliente com notebook sobre a mesa"
          className="h-auto w-full max-w-[24rem] object-contain sm:max-w-lg md:max-w-160 lg:max-w-3xl"
        />
      </div>

      <div className="flex w-full max-w-2xl flex-col items-center gap-5 text-center lg:items-start lg:text-left">
        <Title title="Cuidado e segurança para seu equipamento" />

        <Subtitle subtitle="Confie seu computador a profissionais qualificados que garantem um atendimento seguro, transparente e eficiente." />

        <ul className="mt-2 flex w-full flex-col items-center justify-center lg:items-start gap-4 text-left font-medium text-primary lg:text-2xl">
          {highlights.map((item) => (
            <li key={item} className="flex items-center gap-3  text-gray-400">
              <CheckOutlined className="text-xl lg:text-2xl" />
              <span className=" text-sm md:text-lg">{item}</span>
            </li>
          ))}
        </ul>

        <Button
          type="primary"
          className="mt-3 w-full lg:w-auto lg:min-w-56"
          onClick={() => navigate({ to: "/register" })}
        >
          Agendar serviço
        </Button>
      </div>
    </section>
  )
}
