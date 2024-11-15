'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { Ticket } from 'lucide-react'

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
        
        {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black via-black/20 to-transparent" />
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/20 to-transparent" />
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
          <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-8"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="bg-amber-400 text-black hover:bg-amber-500 text-lg px-6 py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl shadow-amber-900/50"
                    >
                      <Link href="https://wa.me/5541933009469" target="_blank" className="flex items-center justify-center">
                        <Ticket className="w-6 h-6 mr-2" />
                        Comprar Ingressos
                      </Link>
                    </Button>
                  </motion.div>
        </motion.div>
      </div>
    </section>
  )
}