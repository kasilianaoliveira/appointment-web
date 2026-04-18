import { Footer } from "./footer";
import Header from "./header";
import Hero from "./hero";
import { FastService } from "./fast-service";
import { SecurityCare } from "./security-care";
import { Services } from "./services";

export default function Home() {
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
