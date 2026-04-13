"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

function Modal({
  isOpen,
  onClose,
  title,
  children,
}: {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
          onClick={onClose}
        >
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-5 text-[#d29f60] hover:text-[#e0b07a] transition-colors text-2xl cursor-pointer bg-transparent border-none p-0"
              aria-label="Schließen"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold text-white mb-6">
              {title}
            </h2>

            {/* Content */}
            <div className="text-[#cccccc] text-[0.92rem] leading-[1.85] space-y-6">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function ImpressumContent() {
  return (
    <>
      <div>
        <p className="font-bold text-white">Close Consulting</p>
        <p>Mettenstrasse 30, 80638 München</p>
      </div>

      <div>
        <p className="font-bold text-white">Vertreten durch:</p>
        <p>Leon Ioakeim</p>
      </div>

      <div>
        <h3 className="text-[#d29f60] font-semibold text-[1.05rem] mt-6 mb-2">Kontakt</h3>
        <p>Telefon: +49 176 70511230</p>
        <p>E-Mail: <a href="mailto:info@terminjaeger.de" className="text-[#d29f60] underline">info@terminjaeger.de</a></p>
      </div>

      <div>
        <h3 className="text-[#d29f60] font-semibold text-[1.05rem] mt-6 mb-2">Umsatzsteuer-ID</h3>
        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE362460134</p>
      </div>

      <div>
        <h3 className="text-[#d29f60] font-semibold text-[1.05rem] mt-6 mb-2">Verbraucherstreitbeilegung</h3>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
    </>
  )
}

function DatenschutzContent() {
  return (
    <>
      <div>
        <h3 className="text-[#d29f60] font-semibold text-[1.05rem] mt-6 mb-2">1. Datenschutz auf einen Blick</h3>
        <h4 className="text-white font-semibold mt-4 mb-2">Allgemeine Hinweise</h4>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
        </p>
        <h4 className="text-white font-semibold mt-4 mb-2">Datenerfassung auf dieser Website</h4>
        <p className="font-semibold text-white mt-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
        </p>
        <p className="font-semibold text-white mt-2">Wie erfassen wir Ihre Daten?</p>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst.
        </p>
        <p className="font-semibold text-white mt-2">Wofür nutzen wir Ihre Daten?</p>
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
        </p>
        <p className="font-semibold text-white mt-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
        <p>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
        </p>
      </div>

      <div>
        <h3 className="text-[#d29f60] font-semibold text-[1.05rem] mt-6 mb-2">2. Hosting</h3>
        <p>
          Wir hosten die Inhalte unserer Website bei folgendem Anbieter: Vercel Inc. Der Anbieter ist Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Wenn Sie unsere Website besuchen, erfasst Vercel verschiedene Logfiles inklusive Ihrer IP-Adressen.
        </p>
      </div>

      <div>
        <h3 className="text-[#d29f60] font-semibold text-[1.05rem] mt-6 mb-2">3. Allgemeine Hinweise und Pflichtinformationen</h3>
        <h4 className="text-white font-semibold mt-4 mb-2">Datenschutz</h4>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
        <h4 className="text-white font-semibold mt-4 mb-2">Hinweis zur verantwortlichen Stelle</h4>
        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />
          Close Consulting<br />
          Mettenstrasse 30<br />
          80638 München<br />
          Telefon: +49 176 70511230<br />
          E-Mail: <a href="mailto:info@terminjaeger.de" className="text-[#d29f60] underline">info@terminjaeger.de</a>
        </p>
      </div>

      <div>
        <h3 className="text-[#d29f60] font-semibold text-[1.05rem] mt-6 mb-2">4. Datenerfassung auf dieser Website</h3>
        <h4 className="text-white font-semibold mt-4 mb-2">Cookies</h4>
        <p>
          Unsere Internetseiten verwenden so genannte Cookies. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
        </p>
        <h4 className="text-white font-semibold mt-4 mb-2">Kontaktformular</h4>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
        </p>
      </div>

      <div>
        <h3 className="text-[#d29f60] font-semibold text-[1.05rem] mt-6 mb-2">5. Analyse-Tools und Werbung</h3>
        <h4 className="text-white font-semibold mt-4 mb-2">Vercel Analytics</h4>
        <p>
          Diese Website nutzt Vercel Analytics, einen Webanalysedienst. Der Dienst ermöglicht uns die Analyse der Nutzung unserer Website. Die Datenverarbeitung erfolgt auf Grundlage unseres berechtigten Interesses an einer statistischen Analyse des Nutzerverhaltens.
        </p>
      </div>

      <div>
        <h3 className="text-[#d29f60] font-semibold text-[1.05rem] mt-6 mb-2">6. Plugins und Tools</h3>
        <h4 className="text-white font-semibold mt-4 mb-2">HubSpot</h4>
        <p>
          Wir nutzen HubSpot für unser Online-Marketing. Hierbei handelt es sich um eine integrierte Software-Lösung, mit der wir verschiedene Aspekte unseres Online-Marketings abdecken. Wenn Sie sich über unsere Website für einen Termin anmelden, werden die von Ihnen eingegebenen Daten bei HubSpot gespeichert und verarbeitet.
        </p>
        <h4 className="text-white font-semibold mt-4 mb-2">Wistia</h4>
        <p>
          Diese Website bindet Videos über Wistia ein. Anbieter ist Wistia, Inc., 17 Tudor Street, Cambridge, MA 02139, USA. Wenn Sie eine Seite mit einem Wistia-Video aufrufen, wird eine Verbindung zu den Servern von Wistia hergestellt.
        </p>
      </div>
    </>
  )
}

export function Footer() {
  const [impressumOpen, setImpressumOpen] = useState(false)
  const [datenschutzOpen, setDatenschutzOpen] = useState(false)

  return (
    <>
      <footer className="bg-[#091a11] border-t border-[rgba(210,159,96,0.3)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <Link href="#home" className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Close Consulting"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
            </Link>

            {/* Links */}
            <div className="flex items-center gap-6">
              <button
                onClick={() => setImpressumOpen(true)}
                className="text-[#d4d4d4]/70 hover:text-white text-sm transition-colors"
              >
                Impressum
              </button>
              <button
                onClick={() => setDatenschutzOpen(true)}
                className="text-[#d4d4d4]/70 hover:text-white text-sm transition-colors"
              >
                Datenschutzerklärung
              </button>
            </div>

            {/* Copyright */}
            <p className="text-[#d4d4d4]/50 text-sm">
              © 2025 Close Consulting
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <Modal
        isOpen={impressumOpen}
        onClose={() => setImpressumOpen(false)}
        title="Impressum"
      >
        <ImpressumContent />
      </Modal>

      <Modal
        isOpen={datenschutzOpen}
        onClose={() => setDatenschutzOpen(false)}
        title="Datenschutzerklärung"
      >
        <DatenschutzContent />
      </Modal>
    </>
  )
}
