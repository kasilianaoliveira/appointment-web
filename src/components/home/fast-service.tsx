import MacExample from "@/assets/mac-exemplo.png"
import { useNavigate } from "@tanstack/react-router"
import { Button } from "../ui/button"
import { Subtitle } from "../ui/subtitle"
import { Title } from "../ui/title"

export function FastService() {
  const navigate = useNavigate()

  return (
    <section className="mx-auto flex w-full max-w-360 flex-col items-center gap-12 px-4 py-16 lg:flex-row lg:justify-between lg:gap-16 lg:py-24">
      <div className="flex w-full max-w-2xl flex-col items-center gap-6 text-center lg:items-start lg:text-left">
        <Title title="Atendimento rápido e sem complicação" />

        <Subtitle subtitle="Agende seu servico em poucos passos e tenha seu computador diagnosticado e reparado com rapidez e transparencia." />

        <Button
          type="primary"
          className="w-full lg:w-auto sm:min-w-48"
          onClick={() => navigate({ to: "/register" })}
        >
          Agendar agora
        </Button>
      </div>

      <div className="flex w-full justify-center lg:max-w-xl lg:justify-end">
        <img
          src={MacExample}
          alt="Painel do sistema exibido em um notebook"
          className="h-auto w-full max-w-88 object-contain sm:max-w-md md:max-w-136 lg:max-w-160"
        />
      </div>
    </section>
  )
}
