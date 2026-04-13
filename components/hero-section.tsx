"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const trustBadges = [
  "1.000 € Fixum netto – jeden Monat",
  "100 % Remote & Homeoffice",
  "Vorqualifizierte Listen",
]

export function HeroSection() {
  const scrollToTermin = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.getElementById("termin")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Radial vignette at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(8, 20, 14, 0.8) 100%)"
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          {/* Main Headline - Compact and engaging */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
          >
            <span className="text-white block">
              Für ambitionierte Freelancer, die planbar verdienen möchten.
            </span>
            <span className="text-[#d29f60] italic block">
              Mehr Einkommen. Weniger Zufall. Maximale Freiheit.
            </span>
          </motion.h1>

          {/* Subheadline - Compact key value propositions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3 text-base sm:text-lg text-[#d4d4d4] font-medium leading-relaxed"
          >
            <p>1.000 € Fixum netto – jeden Monat, 100 % Remote & Homeoffice, Vorqualifizierte Listen – kein Recherche-Aufwand</p>
            <p className="text-[#d29f60]">Fixum + Provision. Fertige Scripts. Kein Aufwand. Nur telefonieren.</p>
          </motion.div>

          {/* Trust Badges - Minimal inline badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 flex-wrap"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f2a1c] border border-[rgba(210,159,96,0.25)]"
              >
                <Check className="w-3.5 h-3.5 text-[#d29f60] flex-shrink-0" />
                <span className="text-[#d4d4d4] text-xs sm:text-sm whitespace-nowrap">{badge}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Link */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="#termin"
              onClick={scrollToTermin}
              className="text-[#d29f60] hover:text-[#e0b07a] transition-colors font-medium text-base sm:text-lg"
            >
              Termin vereinbaren →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
