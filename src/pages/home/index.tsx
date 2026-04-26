import { FastService } from "@/components/home/fast-service";
import { Footer } from "@/components/home/footer";
import Header from "@/components/home/header";
import Hero from "@/components/home/hero";
import { SecurityCare } from "@/components/home/security-care";
import { Services } from "@/components/home/services";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    if (globalThis.location.hash) {
      globalThis.history.replaceState(null, "", globalThis.location.pathname)
    }

    globalThis.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [])

  return (
    <div className="page-background min-h-screen">
      <Header />
      <Hero />
      <Services />
      <FastService />
      <SecurityCare />
      <Footer />
    </div >
  )
}
