import { CloseOutlined, MenuOutlined } from "@ant-design/icons"
import { useNavigate } from "@tanstack/react-router"
import { Drawer } from "antd"
import { useState } from "react"
import { Button } from "../ui/button"
import { ThemeToggle } from "../ui/theme-toggle"

const menuItems = [
  { href: "/", label: "Inicio" },
  { href: "/services", label: "Serviços" },
  { href: "/how-it-works", label: "Como funciona" },
  { href: "/contact", label: "Contato" },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="relative z-50 border-b border-border/80  px-4 py-4 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-360 items-center justify-between gap-4">
        <ul className="hidden gap-4 text-primary md:flex">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative inline-flex pb-1 transition-transform text-sm md:text-base duration-300 ease-out hover:scale-105 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-primary after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="ml-auto flex items-center gap-3">
          <ThemeToggle />

          <div className="hidden gap-4 md:flex">
            <Button
              type="default"
              className="bg-primary"
              onClick={() => navigate({ to: "/login" })}
            >
              Login
            </Button>
            <Button type="primary" onClick={() => navigate({ to: "/register" })}>
              Cadastre-se
            </Button>
          </div>

          <button
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-accent md:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? <CloseOutlined className="text-lg" /> : <MenuOutlined className="text-lg" />}
          </button>
        </div>
      </nav>

      <Drawer
        open={isMobileMenuOpen}
        onClose={closeMobileMenu}
        placement="right"
        size="min(22rem, 100vw)"
        closable={false}
        mask
        destroyOnHidden
        rootClassName="md:hidden"
        styles={{
          content: {
            background: "var(--card)",
            color: "var(--foreground)",
          },
          body: {
            padding: "1.5rem 1rem 1rem",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          },
          header: { display: "none" },
        }}
      >
        <div className="mb-6 flex justify-end">
          <Button
            aria-label="Fechar menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-accent"
            onClick={closeMobileMenu}
          >
            <CloseOutlined className="text-lg" />
          </Button>
        </div>

        <ul className="flex flex-col gap-1 text-primary">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block rounded-2xl px-4 py-3 text-base transition-colors hover:bg-accent"
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-3 pt-6">
          <Button
            type="default"
            block
            onClick={() => {
              closeMobileMenu()
              navigate({ to: "/login" })
            }}
          >
            Login
          </Button>
          <Button
            type="primary"
            block
            onClick={() => {
              closeMobileMenu()
              navigate({ to: "/register" })
            }}
          >
            Cadastre-se
          </Button>
        </div>
      </Drawer>
    </header>
  )
}
