import { Carousel } from "antd"
import Card from "../ui/card"
import { Subtitle } from "../ui/subtitle"
import { Title } from "../ui/title"

const services = [
  {
    title: "Formatação de computador sem backup",
    description: "Instalação limpa do sistema, removendo vírus e deixando o PC rápido e estável.",
    price: 40,
    background: "linear-gradient(180deg, #FFF3C5 0%, #FFEAA0 100%)",
    buttonBackground: "linear-gradient(90deg, #FFB200 0%, #FF8A00 100%)",
  },
  {
    title: "Formatação de computador com backup",
    description: "Formatação completa com backup seguro dos seus arquivos antes da reinstalação.",
    price: 60,
    background: "linear-gradient(180deg, #DFFAE9 0%, #C7F0D7 100%)",
    buttonBackground: "linear-gradient(90deg, #2E8B57 0%, #0B5D44 100%)",
  },
  {
    title: "Montagem de computador",
    description: "Montagem profissional de PC com organização, compatibilidade e desempenho garantido.",
    price: 120,
    background: "linear-gradient(180deg, #FFD7E3 0%, #F2BED0 100%)",
    buttonBackground: "linear-gradient(90deg, #FF5C7A 0%, #F4378F 100%)",
  },
  {
    title: "Montagem de computador + instalação de sistema",
    description: "Montagem completa do PC com sistema operacional instalado e pronto para uso.",
    price: 170,
    background: "linear-gradient(180deg, #DDF4FF 0%, #C8E8FF 100%)",
    buttonBackground: "linear-gradient(90deg, #2F8BFF 0%, #1262D6 100%)",
  },
  {
    title: "Troca de pasta térmica",
    description: "Substituição da pasta térmica para reduzir temperaturas e melhorar o desempenho.",
    price: 30,
    background: "linear-gradient(180deg, #F2E4FF 0%, #E3CCFF 100%)",
    buttonBackground: "linear-gradient(90deg, #8A5BFF 0%, #5A35D6 100%)",
  },
  {
    title: "Consultoria de hardware",
    description: "Orientação para escolher peças ideais com melhor custo-benefício para seu uso.",
    price: 60,
    background: "linear-gradient(180deg, #FFE8D6 0%, #FFD6B8 100%)",
    buttonBackground: "linear-gradient(90deg, #FF8A3D 0%, #E5631C 100%)",
  },
]

const servicePages = services.reduce<typeof services[]>((pages, service, index) => {
  const pageIndex = Math.floor(index / 3)

  if (!pages[pageIndex]) {
    pages[pageIndex] = []
  }

  pages[pageIndex].push(service)

  return pages
}, [])

export const Services = () => {
  return (
    <section id="servicos" className="mx-auto flex w-full max-w-360 scroll-mt-8 flex-col items-center px-4 py-16">
      <div className="flex flex-col items-center">
        <Title title="Serviços" />
        <Subtitle subtitle="Escolha o serviço ideal e agende em poucos minutos" />
      </div>

      <div className="mt-10 w-full overflow-hidden rounded-[2rem] px-4 py-8 md:px-8 md:py-10">
        <Carousel
          className="services-carousel"
          autoplay={{ dotDuration: true }}
          autoplaySpeed={8000}
          customPaging={(index) => (
            <button
              type="button"
              aria-label={`Ir para a página ${index + 1} de serviços`}
            />
          )}
        >
          {servicePages.map((page, pageIndex) => (
            <div key={`services-page-${pageIndex}`} >
              <div className="grid gap-6 pb-8 md:grid-cols-3">
                {page.map((service) => (
                  <Card
                    key={service.title}
                    title={service.title}
                    description={service.description}
                    price={service.price}
                    background={service.background}
                    buttonBackground={service.buttonBackground}
                  />
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
