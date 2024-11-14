'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { CalendarClock } from 'lucide-react'
import Image from 'next/image'

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/drinks/10.jpg"
          alt="Celebração de Ano Novo no Mambo Gastrobar"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-4xl font-serif text-amber-400 mb-6">
            Não perca a chance de começar o ano no melhor ambiente gastronômico de Fazenda Rio Grande
          </h2>
          <p className="text-lg text-zinc-100 mb-8 font-bold uppercase ">
            Reserve já seu ingresso e celebre o Ano Novo com todo o charme e exclusividade do Mambo Gastrobar!
          </p>
          <Button className="bg-amber-400 text-black hover:bg-amber-500 text-lg px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-900/50">
            <CalendarClock className="w-6 h-6 mr-2" />
            Reservar Agora
          </Button>
        </motion.div>
      </div>
    </section>
  )
}