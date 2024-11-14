'use client'

import { motion } from 'framer-motion'
import Image from "next/image"

export default function OpenBarSection() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden w-full">
      <Image
        src="/images/dishes/9.jpg"
        alt="Prato refinado com bife e massa"
        fill
        quality={100}
        className="object-cover object-center opacity-90 (min-width: 808px) 50vw, 100vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-l from-black via-black/20 to-transparent" />

      <div className="relative container mx-auto px-4 min-h-screen flex items-center justify-end">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl text-right space-y-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-amber-400"
          >
            Nosso open bar:
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-zinc-100 leading-relaxed"
          >
            Vinhos, Chopes, Drinks, refrigerante e água
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-zinc-300 leading-relaxed"
          >
            Cada casal receberá uma garrafa de espumante de cortesia, brindando à chegada de um novo
            ano com todo o estilo.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-zinc-300 leading-relaxed"
          >
            E, à meia-noite, uma queima de fogos espetacular iluminará o céu, marcando o início
            de uma nova jornada.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}