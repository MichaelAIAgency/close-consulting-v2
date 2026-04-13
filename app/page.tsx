import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ChanceSection } from "@/components/chance-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ProcessSection } from "@/components/process-section"
import { RequirementsSection } from "@/components/requirements-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0d2218]">
      <Navbar />
      <HeroSection />
      <ChanceSection />
      <TestimonialsSection />
      <BenefitsSection />
      <ProcessSection />
      <RequirementsSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
