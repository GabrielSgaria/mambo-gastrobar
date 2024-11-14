'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Ticket, Users, Baby, ChevronDown, ChevronUp } from 'lucide-react'

export default function TicketSection() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null)

  const ticketInfo = [
    {
      category: "Adultos",
      icon: <Users className="w-8 h-8 text-amber-400" />,
      prices: [
        { label: "Primeiro lote", price: "R$399,00" },
        { label: "Segundo lote", price: "R$499,00" },
      ],
    },
    {
      category: "Adolescentes",
      subtext: "(10 a 17 anos)",
      icon: <Users className="w-8 h-8 text-amber-400" />,
      prices: [
        { label: "Primeiro lote", price: "R$299,00" },
      ],
    },
    {
      category: "Crianças",
      subtext: "(5 a 9 anos)",
      icon: <Baby className="w-8 h-8 text-amber-400" />,
      prices: [
        { label: "Primeiro lote", price: "R$90,00" },
      ],
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-amber-400 mb-4">
            Ingressos Limitados
          </h2>
          <p className="text-xl text-zinc-300">Garanta o Seu Agora!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ticketInfo.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                className="bg-zinc-900 p-6 rounded-lg shadow-lg border border-amber-400/30 hover:border-amber-400/60 transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.03 }}
                onClick={() => setExpandedCategory(expandedCategory === index ? null : index)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {category.icon}
                    <div className="ml-4">
                      <h3 className="text-2xl font-serif text-amber-400">{category.category}</h3>
                      {category.subtext && (
                        <p className="text-sm text-zinc-400">{category.subtext}</p>
                      )}
                    </div>
                  </div>
                  {expandedCategory === index ? (
                    <ChevronUp className="w-6 h-6 text-amber-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-amber-400" />
                  )}
                </div>
                <AnimatePresence>
                  {expandedCategory === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {category.prices.map((price, priceIndex) => (
                        <div key={priceIndex} className="mb-4 pb-4 border-b border-zinc-700 last:border-b-0">
                          <p className="text-zinc-300 mb-1">{price.label}</p>
                          <p className="text-3xl font-bold text-amber-400">{price.price}</p>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-black rounded-b-full"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-zinc-300 text-lg mb-8">
            Parcelamento disponível em até 3 vezes!
          </p>
          <Button className="bg-amber-400 text-black hover:bg-amber-500 text-lg px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-900/50">
            <Ticket className="w-6 h-6 mr-2" />
            Comprar Ingressos
          </Button>
        </motion.div>
      </div>
    </section>
  )
}