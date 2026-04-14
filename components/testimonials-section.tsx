"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Script from "next/script"

const testimonials = [
  {
    title: "Im besten Monat konnte ich 6.500 € verdienen",
    text: "Ich hatte vorher kaum Vertriebserfahrung. Close Consulting hat mir einen fertigen Leitfaden gegeben, vorqualifizierte Listen geliefert und mich von Anfang an begleitet. Im besten Monat habe ich bereits über 6.500 € verdient – bei freier Zeiteinteilung.",
    name: "Moritz Lauxtermann",
    role: "Freelancer bei Close Consulting",
    videoPosition: "right" as const,
    wistiaId: "gd5h3ge2g1",
  },
  {
    title: "Schon in der ersten Woche Geld verdient",
    text: "Als Freelancer hatte ich immer das Risiko, monatelang ohne Aufträge dazustehen. Das Fixum von Close Consulting hat das verändert. Ich weiß, was ich mindestens verdiene – und kann mit guter Performance noch drauflegen.",
    name: "Laurenz Huber",
    role: "Freelancer bei Close Consulting",
    videoPosition: "left" as const,
    wistiaId: "q4t6rwpwoj",
  },
  {
    title: "Das System macht den Unterschied",
    text: "Ich musste keine Leads recherchieren, keine Skripte schreiben. Alles war eingerichtet. Ich habe einfach angefangen zu telefonieren – und wurde dabei begleitet.",
    name: "Folgt …",
    role: "Freelancer bei Close Consulting",
    videoPosition: "right" as const,
    wistiaId: null,
  },
]

function WistiaEmbed({ wistiaId }: { wistiaId: string }) {
  return (
    <div className="relative rounded-2xl overflow-hidden border-2 border-[#d29f60] shadow-[0_0_30px_rgba(210,159,96,0.15)]">
      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
      <Script src={`https://fast.wistia.com/embed/${wistiaId}.js`} strategy="lazyOnload" />
      <style jsx>{`
        wistia-player[media-id='${wistiaId}']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${wistiaId}/swatch');
          display: block;
          filter: blur(5px);
          padding-top: 56.25%;
        }
      `}</style>
      {/* @ts-expect-error - Wistia custom element */}
      <wistia-player media-id={wistiaId} aspect="1.7777777777777777"></wistia-player>
    </div>
  )
}

function VideoPlaceholder() {
  return (
    <div className="aspect-video rounded-2xl bg-[#0d2218] border-2 border-dashed border-[#d29f60]/50 flex items-center justify-center">
      <p className="text-[#d29f60]/60 italic text-sm">Video folgt in Kürze</p>
    </div>
  )
}

function TestimonialContent({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0]
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl sm:text-3xl font-bold text-white text-balance">
        &quot;{testimonial.title}&quot;
      </h3>
      <p className="text-[#d4d4d4] leading-relaxed">{testimonial.text}</p>
      <div className="pt-2">
        <p className="text-white font-medium">– {testimonial.name}</p>
        <p className="text-[#d4d4d4]/70 text-sm">{testimonial.role}</p>
        <div className="flex items-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#d29f60] text-[#d29f60]" />
          ))}
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const scrollToTermin = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.getElementById("termin")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="testimonials" className="py-24">
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
            Was unsere <span className="text-[#d29f60]">Freelancer</span> sagen
          </h2>
          <p className="text-[#d4d4d4]/70">Echte Menschen. Echte Ergebnisse.</p>
        </motion.div>

        {/* Testimonials */}
        <div className="space-y-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`flex flex-col ${
                testimonial.videoPosition === "left" ? "md:flex-row-reverse" : "md:flex-row"
              } gap-8 lg:gap-16 items-center`}
            >
              {/* Text always first on mobile, order changes on desktop based on videoPosition */}
              <div className="w-full md:w-1/2 order-1">
                <TestimonialContent testimonial={testimonial} />
              </div>
              {/* Video always last on mobile */}
              <div className="w-full md:w-1/2 order-2">
                {testimonial.wistiaId ? (
                  <WistiaEmbed wistiaId={testimonial.wistiaId} />
                ) : (
                  <VideoPlaceholder />
                )}
              </div>
            </motion.div>
          ))}
        </div>

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
            className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-[#0d2218] bg-[#d29f60] rounded-full hover:bg-[#e0b07a] transition-all duration-300 shadow-[0_0_20px_rgba(210,159,96,0.2)] hover:shadow-[0_0_30px_rgba(210,159,96,0.4)]"
          >
            Jetzt bewerben
          </a>
        </motion.div>
      </div>
    </section>
  )
}
