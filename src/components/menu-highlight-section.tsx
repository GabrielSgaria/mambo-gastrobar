'use client'

import { motion } from 'framer-motion'
import Image from "next/image"

export default function MenuHighlightSection() {
  return (
    <section className="relative h-[860px] overflow-hidden w-full">
      <Image
        src="/images/drinks/14.png"
        alt="Drink especial do Réveillon"
        fill
        quality={100}
        className="object-cover object-top"
        priority
      />
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" /> */}

      <div className="relative container mx-auto px-4 h-full">
        <div className="flex items-center justify-start h-full py-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 max-w-xl flex flex-col"
          >
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-serif text-amber-400"
              >
                Gastronomia Excepcional
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-zinc-100 leading-relaxed"
              >
                Entradas especiais, pratos refinados e sobremesas irresistíveis, preparados para
                tornar sua noite memorável.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-base md:text-lg text-zinc-300 leading-relaxed"
              >
                Nossa equipe servirá chopes e drinks à vontade, além de refrigerantes e água
                para manter a energia da celebração.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex justify-between items-center border-b border-amber-400/30 pb-2">
                <span className="text-zinc-100">Entradas Especiais</span>
                <span className="text-amber-400">4 opções</span>
              </div>
              <div className="flex justify-between items-center border-b border-amber-400/30 pb-2">
                <span className="text-zinc-100">Pratos Principais</span>
                <span className="text-amber-400">6 opções</span>
              </div>
              <div className="flex justify-between items-center border-b border-amber-400/30 pb-2">
                <span className="text-zinc-100">Sobremesas</span>
                <span className="text-amber-400">3 opções</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}