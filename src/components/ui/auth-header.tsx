interface AuthHeaderProps {
  title: string
  description: string
}

export function AuthHeader({ title, description }: AuthHeaderProps) {
  return (
    <header className="flex flex-col items-start gap-2 mb-4">
      <h1 className="text-2xl font-semibold text-primary">{title}</h1>
      <p className="text-sm text-gray-400">{description}</p>
    </header>
  )
}