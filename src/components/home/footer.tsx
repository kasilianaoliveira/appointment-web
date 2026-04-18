import {
  EnvironmentOutlined,
  InstagramOutlined,
  MailOutlined,
} from "@ant-design/icons"

const pageLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#contato", label: "Contato" },
]

const contactItems = [
  {
    icon: <EnvironmentOutlined className="text-lg" />,
    label: "Quixeramobim - Ceara",
    href: "https://maps.google.com/?q=Quixeramobim+Ceara",
  },
  {
    icon: <MailOutlined className="text-lg" />,
    label: "klfixbyte@gmail.com",
    href: "mailto:klfixbyte@gmail.com",
  },
  {
    icon: <InstagramOutlined className="text-lg" />,
    label: "@lucas_tech70",
    href: "https://www.linkedin.com",
  },
]

export function Footer() {
  return (
    <footer id="contato" className="mt-8 scroll-mt-8 border-t border-gray-500/60 bg-primary dark:bg-transparent text-primary">
      <div className="mx-auto grid w-full max-w-360 gap-12 px-4 py-12 md:grid-cols-2 md:gap-8 md:px-6 lg:px-8">
        <div className="space-y-5">
          <h3 className="text-lg font-semibold text-white">Páginas</h3>

          <nav className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-slate-200">
            {pageLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
                {index < pageLinks.length - 1 ? " |" : ""}
              </a>
            ))}
          </nav>
        </div>

        <div className="space-y-4 md:justify-self-end">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 text-sm text-slate-200 transition-colors hover:text-white"
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-slate-300">
        © Todos os direitos reservados - 2026
      </div>
    </footer>
  )
}
