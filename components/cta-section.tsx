"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  const handleApply = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // This will be handled by the user's funnel logic
    // For now, it could scroll to a future form or just be a placeholder link
    // e.preventDefault()
  }

  return (
    <section id="termin" className="relative py-24 overflow-hidden">
      {/* Gold glow background */}
      <div className="absolute inset-0 gold-glow" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 text-center"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Bereit, <span className="text-[#d29f60]">loszulegen</span>?
          </h2>

          <p className="text-[#d4d4d4] text-lg max-w-2xl mx-auto">
            Werde Teil unseres Teams und starte deine Karriere als Freelancer. Kein Lebenslauf, kein
            Anschreiben. Unser Team meldet sich schnellstmöglich bei dir.
          </p>
        </motion.div>

        {/* Large CTA Button replacement for Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#" // Future funnel link
            onClick={handleApply}
            className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 text-xl font-bold text-[#0d2218] bg-[#d29f60] rounded-full hover:bg-[#e0b07a] transition-all duration-300 shadow-[0_0_30px_rgba(210,159,96,0.3)] hover:shadow-[0_0_50px_rgba(210,159,96,0.5)] transform hover:-translate-y-1"
          >
            Jetzt bewerben
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-[#d4d4d4]/50 text-sm mt-8"
        >
          Kostenlos · Unverbindlich · 100 % Homeoffice
        </motion.p>
      </div>
    </section>
  )
}
