"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Über uns" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#benefits", label: "Vorteile" },
  { href: "#termin", label: "Jetzt bewerben" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    const handleSectionObserver = () => {
      const sections = navLinks.map((link) => link.href.replace("#", ""))
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id)
            }
          })
        },
        { threshold: 0.3 }
      )

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) observer.observe(element)
      })

      return () => observer.disconnect()
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    const cleanup = handleSectionObserver()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      cleanup?.()
    }
  }, [])

  const scrollToTermin = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    document.getElementById("termin")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0d2218]/80 backdrop-blur-md border-b border-[rgba(210,159,96,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#home" className="flex-shrink-0">
            <Image
              src="/images/logo-navbar.png"
              alt="Close Consulting"
              width={180}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? "text-[#d29f60]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#d29f60]"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button - scrolls to #termin */}
          <div className="hidden lg:block">
            <a
              href="#termin"
              onClick={scrollToTermin}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-[#d29f60] bg-[#0d2218] border border-[#d29f60] rounded-full hover:bg-[#d29f60] hover:text-[#0d2218] transition-all duration-300"
            >
              Jetzt bewerben
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-[#0d2218]/95 backdrop-blur-md border-b border-[rgba(210,159,96,0.3)]"
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-base font-medium transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? "text-[#d29f60]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#termin"
              onClick={scrollToTermin}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-[#d29f60] bg-[#0d2218] border border-[#d29f60] rounded-full hover:bg-[#d29f60] hover:text-[#0d2218] transition-all duration-300 mt-4"
            >
              Jetzt bewerben
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
