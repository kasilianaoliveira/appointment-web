import type { CSSProperties } from "react"

type ServiceCardProps = {
  readonly title: string
  readonly description: string
  readonly price: number
  readonly background: string
  readonly buttonBackground: string
}

export default function Card({
  title,
  description,
  price,
  background,
  buttonBackground,
}: ServiceCardProps) {
  const cardStyle = {
    background,
  } satisfies CSSProperties

  const buttonStyle = {
    background: buttonBackground,
  } satisfies CSSProperties

  return (
    <article
      className="mx-auto flex h-full w-full flex-col text-center rounded-[1.5rem] border border-white/40 p-6 text-black"
      style={cardStyle}
    >
      <div className="h-20 flex flex-col items-center justify-center gap-2">
        <h3 className="text-sm font-bold leading-tight">{title}</h3>
        <p className="max-w-70 text-sm leading-5 text-gray-500">{description}</p>
      </div>


      <div className="flex flex-col items-center justify-center my-6 mx-auto">
        <p className="text-sm font-refular self-start">a partir</p>

        <div className="mt-1 flex items-start justify-center gap-1 leading-none">
          <span className="text-6xl font-extrabold tracking-tight">{price}</span>
          <span className="mt-2 text-sm font-bold">R$</span>
        </div>
      </div>

      <button
        type="button"
        className="mt-auto rounded-full px-5 py-3 text-sm font-medium text-primary-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] transition-transform duration-300 hover:scale-[1.02]"
        style={buttonStyle}
      >
        Agendar
      </button>
    </article>
  )
}
