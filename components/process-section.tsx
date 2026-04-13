"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "1",
    title: "Bewerbung in 2 Minuten",
    description: "Kein Lebenslauf, kein Anschreiben",
  },
  {
    number: "2",
    title: "Kurzes Kennenlerngespräch",
    description: "Video-Call mit unserem Team",
  },
  {
    number: "3",
    title: "Onboarding & Setup",
    description: "Zugang zu Tools, Liste und Leitfaden",
  },
  {
    number: "4",
    title: "Loslegen & Verdienen",
    description: "Erste Anrufe, erste Termine, erstes Fixum",
  },
]

export function ProcessSection() {
  const scrollToTermin = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.getElementById("termin")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-24 border-y border-[rgba(210,159,96,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Dein Weg zum ersten{" "}
            <span className="text-[#d29f60]">Honorar</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector Line - Desktop */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[rgba(210,159,96,0.3)] to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Number Circle */}
                <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-full bg-[#122b1e] border-2 border-[#d29f60] flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#d29f60]">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-[#d4d4d4]/70 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Inline CTA Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#termin"
            onClick={scrollToTermin}
            className="text-[#d29f60] hover:text-[#e0b07a] transition-colors font-medium"
          >
            Termin vereinbaren →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
