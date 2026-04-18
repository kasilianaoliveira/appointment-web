import LosangoImg from "@/assets/losango.png"

type DecorativeLosangoProps = {
  readonly className?: string
  readonly imageClassName?: string
}

export function DecorativeLosango({
  className = "fixed -left-12 -bottom-6 z-0",
  imageClassName = "md:h-50 h-40 w-auto",
}: DecorativeLosangoProps) {
  return (
    <div className={className}>
      <img src={LosangoImg} alt="" className={imageClassName} aria-hidden="true" />
    </div>
  )
}
