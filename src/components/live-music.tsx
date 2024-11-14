'use client'

import { motion } from 'framer-motion'
import Image from "next/image"
import { Music, Clock } from 'lucide-react'

export default function LiveMusicSection() {
  return (
    <section className="relative h-[860px] overflow-hidden w-full">
      <Image
        src="/images/drinks/12.jpg"
        alt="Banda tocando ao vivo"
        fill
        quality={100}
        className="object-cover object-left md:object-top"
        priority
      />
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black via-black/20 to-transparent" />
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/20 to-transparent" />
      {/* Left side gradient */}
      <div className="absolute inset-0 bg-black/70 md:bg-black/0  backdrop-blur-sm md:backdrop-blur-none md:bg-gradient-to-l md:from-black md:via-black/30 md:to-transparent" />

      <div className="relative container mx-auto px-4 h-full">
        <div className="flex items-center justify-end h-full py-24">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
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
                Uma noite de muita música
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-zinc-100 leading-relaxed"
              >
                Prepare-se para uma programação musical incrível que vai embalar a sua noite! A partir do jantar, Lucas Nakamura dará início à festa com um repertório especial, criando o clima perfeito para o começo do nosso evento.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-base md:text-lg text-zinc-300 leading-relaxed"
              >
                Em seguida, a Banda Pérola entra no palco, trazendo uma energia contagiante e um show vibrante que vai animar ainda mais a sua noite.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-base md:text-lg text-zinc-300 leading-relaxed"
              >
                E para encerrar com chave de ouro, DJ Kant Baronn assume o comando da festa, levando todos a brindarem juntos a chegada de 2025!
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-4 text-zinc-100">
                <Music className="w-6 h-6 text-amber-400" />
                <span className="text-lg">Programação Musical</span>
              </div>
              <div className="space-y-2 pl-10">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span className="text-zinc-300">20:00 - Lucas Nakamura</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span className="text-zinc-300">22:00 - Banda Pérola</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span className="text-zinc-300">00:30 - DJ Kant Baronn</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}