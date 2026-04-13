"use client"

import { motion } from "framer-motion"
import {
  Banknote,
  Home,
  ClipboardList,
  Phone,
  Monitor,
  GraduationCap,
} from "lucide-react"

const benefits = [
  {
    icon: Banknote,
    title: "Fixum + Provision",
    description:
      "1.000 € netto Fixum – monatlich, verlässlich. Plus 5–30 % Provision auf jeden Abschluss",
  },
  {
    icon: Home,
    title: "100 % Remote",
    description: "Laptop, Headset, Internet – mehr brauchst du nicht",
  },
  {
    icon: ClipboardList,
    title: "Fertige Anruflisten",
    description:
      "Keine Eigenrecherche. Wir liefern dir vorqualifizierte Kontakte",
  },
  {
    icon: Phone,
    title: "Bewährter Leitfaden",
    description:
      "Klare Gesprächsstruktur – auch ohne Vorerfahrung sofort einsetzbar",
  },
  {
    icon: Monitor,
    title: "Eingerichtetes CRM",
    description: "Einfache Dokumentation, kein technischer Aufwand",
  },
  {
    icon: GraduationCap,
    title: "Coaching & Mentoring",
    description: "Regelmäßige 1:1-Calls und Kurse für deine Weiterentwicklung",
  },
]

export function BenefitsSection() {
  const scrollToTermin = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.getElementById("termin")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="benefits" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            Alles, was du für deinen{" "}
            <span className="text-[#d29f60]">Erfolg</span> brauchst
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -4,
                borderColor: "rgba(210, 159, 96, 0.5)",
                transition: { duration: 0.2 },
              }}
              className="bg-[#122b1e] border border-[rgba(210,159,96,0.3)] rounded-xl p-6 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-[#d29f60]/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-[#d29f60]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-[#d4d4d4]/80">{benefit.description}</p>
            </motion.div>
          ))}
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
