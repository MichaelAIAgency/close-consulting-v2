"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const requirements = [
  "Sehr gute Deutschkenntnisse in Wort und Schrift",
  "Klare und freundliche Telefonstimme",
  "Selbständige und zuverlässige Arbeitsweise",
  "Laptop, Headset und stabile Internetverbindung",
  "Mind. 40 Stunden pro Woche verfügbar",
  "Gewerbeschein vorhanden oder bereit, einen zu machen",
]

export function RequirementsSection() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Kein Verkaufsgenie <span className="text-[#d29f60]">nötig</span>
          </h2>
          <p className="text-[#d4d4d4]/70">Das bringst du mit</p>
        </motion.div>

        {/* Requirements List */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {requirements.map((requirement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="flex items-center gap-4"
            >
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#122b1e] border border-[rgba(210,159,96,0.3)] flex items-center justify-center">
                <Check className="w-4 h-4 text-[#d29f60]" />
              </span>
              <span className="text-[#d4d4d4] text-lg">{requirement}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center text-[#d4d4d4]/60 italic mt-8"
        >
          Quereinsteiger sind herzlich willkommen. Wir schulen dich – du musst
          nur wollen.
        </motion.p>
      </div>
    </section>
  )
}
