'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import SectionAmbient from '@/components/section-ambient'
import MenuHighlightSection from '@/components/menu-highlight-section'
import CocktailShowcase from '@/components/cocktail-showcase'
import OpenBarSection from '@/components/open-bar-section'
import TicketSection from '@/components/ticket-section'
import CTASection from '@/components/cta-section'
import Footer from '@/components/footer'
import LocationSection from '@/components/location-section'
import { Ticket } from 'lucide-react'

export default function Component() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

  const springScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="relative w-full">
      <motion.header
        style={{ backgroundColor: useTransform(springScrollYProgress, [0, 0.1], ["rgba(0,0,0,0)", "rgba(0,0,0,0.8)"]) }}
        className="fixed top-0 left-0 right-0 z-50 py-4"
      >
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <motion.span
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            MAMBO
          </motion.span>
          <motion.div
            className="hidden md:flex space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {["Início", "Menu", "Eventos", "Galeria", "Contato"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-amber-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </nav>
      </motion.header>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 bg-black z-40 flex items-center justify-center"
        >
          <div className="flex flex-col items-center space-y-4">
            {["Início", "Menu", "Eventos", "Galeria", "Contato"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white text-2xl hover:text-amber-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}

      <div ref={containerRef} className="relative w-full">
        <motion.div
          style={{ opacity, scale }}
          className="sticky top-0 w-full h-screen flex items-center justify-center z-0"
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/drinks/12.jpg"
              alt="Drink especial do Reveillon"
              className="object-cover object-right md:object-center (min-width: 808px) 50vw, 100vw"
              quality={100}
              fill
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black via-black/50 to-transparent">
              <div className="container h-full mx-auto px-4 flex flex-col justify-center items-end text-right">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl md:text-7xl font-serif text-amber-400 mb-4"
                >
                  REVEILLON 2025
                </motion.h1>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-xl space-y-4"
                >
                  <p className="text-lg md:text-xl text-white">
                    O Mambo Gastrobar convida você para o Réveillon mais completo e exclusivo de
                    Fazenda Rio Grande.
                  </p>
                  <p className="text-base md:text-lg text-zinc-200">
                    Uma noite onde gastronomia sofisticada, ambiente festivo e muita animação se unem
                    para um momento inesquecível.
                  </p>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Button className="bg-amber-400 text-black hover:bg-amber-500 text-lg px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-900/50">
                      <Ticket className="w-6 h-6 mr-2" />
                      Comprar Ingressos
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="relative z-10 bg-black">
          <MenuHighlightSection />
          <CocktailShowcase />
          <OpenBarSection />
          <SectionAmbient />
        </div>


        <TicketSection />

        <section id="galeria" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            {/* <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-16 text-center text-amber-400"
            >
              Galeria
            </motion.h2> */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative aspect-square"
                >
                  <Image
                    src={`/images/bar/${index}.jpg`}
                    alt={`Imagem da Galeria ${index}`}
                    className="object-cover rounded-lg"
                    fill
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <div className="relative z-10 bg-white">
          <LocationSection />
        </div>

        <div className='relative z-10'>
          <CTASection />
        </div>


        <Footer />
      </div>
    </div>
  )
}