"use client"

import { motion } from "framer-motion"
import { Check, Phone, MessageSquare, Mic, Smartphone, Headset } from "lucide-react"

const trustBadges = [
  "1.000 € Fixum netto – jeden Monat",
  "100 % Remote & Homeoffice",
  "Vorqualifizierte Listen",
]

const FloatingIcon = ({ icon: Icon, delay, x, y, size, duration }: { 
  icon: any, 
  delay: number, 
  x: string, 
  y: string, 
  size?: number,
  duration?: number 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, left: x, top: y }}
      animate={{ 
        opacity: [0.2, 0.5, 0.2],
        scale: [1, 1.05, 1],
        y: [0, -30, 0],
        rotate: [0, 10, -10, 0]
      }}
      transition={{ 
        duration: duration || 8, 
        repeat: Infinity, 
        delay,
        ease: "easeInOut"
      }}
      className="absolute pointer-events-none z-0 hidden lg:block"
    >
      <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d29f60]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <Icon className="text-[#d29f60] relative z-10" size={size || 28} strokeWidth={1.5} />
      </div>
    </motion.div>
  )
}

export function HeroSection() {
  const scrollToTermin = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.getElementById("termin")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingIcon icon={Phone} x="10%" y="20%" delay={0} size={32} duration={10} />
        <FloatingIcon icon={MessageSquare} x="85%" y="15%" delay={2} size={24} duration={12} />
        <FloatingIcon icon={Mic} x="75%" y="65%" delay={1} size={30} duration={9} />
        <FloatingIcon icon={Smartphone} x="15%" y="70%" delay={3} size={26} duration={11} />
        <FloatingIcon icon={Headset} x="80%" y="40%" delay={4} size={28} duration={14} />
        <FloatingIcon icon={Phone} x="5%" y="50%" delay={2.5} size={22} duration={13} />
      </div>

      {/* Radial vignette at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(8, 20, 14, 0.8) 100%)"
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
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

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center"
          >
            <a
              href="#termin"
              onClick={scrollToTermin}
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-[#0d2218] bg-[#d29f60] rounded-full hover:bg-[#e0b07a] transition-all duration-300 shadow-[0_0_20px_rgba(210,159,96,0.3)] hover:shadow-[0_0_30px_rgba(210,159,96,0.5)]"
            >
              Jetzt bewerben
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
