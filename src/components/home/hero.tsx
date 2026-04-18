import Banner from "@/assets/banner.png"
import { Button } from "../ui/button"
import { Subtitle } from "../ui/subtitle"
import { Title } from "../ui/title"

export default function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-360 flex-col items-center gap-10 px-4 py-12 lg:flex-row md:items-center md:justify-between md:gap-12 md:py-16">
      <div className="flex h-full w-full max-w-150 lg:max-w-xl flex-col items-center lg:items-start gap-6">
        <Title title="Conserto e manutenção de computadores com agendamento rápido" />
        <Subtitle subtitle="Formatação, montagem, limpeza e manutenção com atendimento rápido e transparente." />
        <Button type="primary" className="w-full">Agende agora</Button>
      </div>
      <div className="flex w-full justify-center md:w-auto md:flex-1 md:justify-end">
        <img
          src={Banner}
          alt="Banner"
          className="h-auto object-contain sm:max-w-150 lg:max-w-xl"
        />
      </div>
    </section>
  )
}
