"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const stats = [
  { value: "1.000 €", label: "Fixum netto – jeden Monat" },
  { value: "5-30 %", label: "Provision pro Abschluss" },
  { value: "30+", label: "Verfügbare Kundenprojekte" },
  { value: "100 %", label: "Remote & selbständig" },
]

export function ChanceSection() {
  const scrollToTermin = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.getElementById("termin")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
              Warum Close Consulting – und <span className="text-[#d29f60]">kein anderes Unternehmen</span>
            </h2>

            <div className="space-y-4 text-[#d4d4d4] leading-relaxed">
              <p>
                Es gibt viele Unternehmen, die Freelancer für Cold Calling suchen. Aber kaum eines gibt dir von Tag 1 an alles, was du brauchst, um sofort loszulegen und verlässlich zu verdienen.
              </p>
              <p>
                Bei Close Consulting bekommst du kein leeres Versprechen – du bekommst ein System, das funktioniert. Unsere Freelancer starten mit einem erprobten Skript, vorqualifizierten Anruflisten und einem eingerichteten CRM. Kein Aufwand vorab. Kein Rätseln.
              </p>
              <p>
                Wir sind spezialisiert auf Marketingagenturen – das bedeutet: eine klare Zielgruppe, ein einfacher Gesprächseinstieg und qualifizierte Entscheider am Telefon.
              </p>
              <p>
                Dazu kommt ein Fixum, das dir Sicherheit gibt – Monat für Monat. Weil wir an dich glauben, bevor du deinen ersten Termin gebucht hast.
              </p>
              <p>
                Kein anderer Auftraggeber bietet dir diese Kombination: Sicherheit durch Fixum, Upside durch Provision, und ein eingespieltes System im Rücken.
              </p>
            </div>

            {/* Inline CTA Link */}
            <a
              href="#termin"
              onClick={scrollToTermin}
              className="text-[#d29f60] hover:text-[#e0b07a] transition-colors font-medium"
            >
              Termin vereinbaren →
            </a>
          </motion.div>

          {/* Right Column - Stats Grid */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ 
                    y: -4, 
                    borderColor: "rgba(210, 159, 96, 0.5)",
                    transition: { duration: 0.2 }
                  }}
                  className="bg-[#122b1e] border border-[rgba(210,159,96,0.3)] rounded-xl p-6 transition-all"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-[#d29f60]">
                    {stat.value}
                  </p>
                  <p className="text-[#d4d4d4]/70 text-sm mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Logo below cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex justify-center"
            >
              <Image
                src="/images/logo.png"
                alt="Close Consulting"
                width={56}
                height={56}
                className="h-14 w-auto opacity-40 hover:opacity-60 transition-opacity"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
