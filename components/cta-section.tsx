"use client"

import { motion } from "framer-motion"

export function CtaSection() {
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
            Wähle jetzt einen Termin für ein kurzes Kennenlerngespräch. Kein Lebenslauf, kein
            Anschreiben. Unser Team meldet sich schnellstmöglich bei dir.
          </p>
        </motion.div>

        {/* HubSpot Calendar Embed */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 rounded-2xl overflow-hidden border border-[rgba(210,159,96,0.3)] bg-[#122b1e]"
        >
          <iframe
            src="https://meetings-eu1.hubspot.com/snupchester/clone?uuid=7abbbe63-bb38-4d03-8bde-6fd9b1dd6e57"
            style={{ width: "100%", minHeight: "700px", border: "none" }}
            title="Termin buchen"
          />
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
