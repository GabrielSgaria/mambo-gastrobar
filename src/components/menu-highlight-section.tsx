'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from "next/image"
import { ChevronDown } from 'lucide-react'

const menuItems = {
  'Antepastos': [
    'Burrata com confit de tomate cereja e molho pesto',
    'Tapenade de Azeitonas',
    'Carpaccio de pera com gorgonzola',
    'Pasta de ricota com tomate seco',
    'Pasta de ricota com espinafre',
    'Pasta de queijo com ervas',
    'Coalhada com mel e nozes',
    'Canapés de atum',
    'Canapés de camarão',
    'Queijos variados e embutidos artesanais',
    'Frutas variadas'
  ],
  'Saladas': [
    'Salada Mambo',
    'Salada tropical de camarão',
    'Salada de romã',
    'Salada grega',
    'Salada de lentilha',
    'Salpicão e salada de batata'
  ],
  'Acompanhamentos': [
    'Arroz Tropical de camarão',
    'Arroz a grega',
    'Arroz branco',
    'Lentilha com defumados',
    'Cuscuz com passas e damasco',
    'Abóbora caramelizada',
    'Legumes salteados com ervas',
    'Penne ao pesto',
    'Rondelli de gorgonzola com nozes e parma crocante'
  ],
  'Carnes': [
    'Pernil de cordeiro assado',
    'Mignon ao molho madeira',
    'Leitão assado',
    'Coxa de pato Confitada'
  ],
  'Sobremesas': [
    'Cheese cake com calda de frutas vermelhas',
    'Rabanada com creme inglês',
    'Bombom de uva de travessa',
    'Pudim'
  ]
}

export default function MenuHighlightSection() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category)
  }

  return (
    <section className="relative h-[860px] overflow-hidden w-full">
      <Image
        src="/images/drinks/14.png"
        alt="Drink especial do Réveillon"
        fill
        quality={100}
        className="object-cover object-center"
        priority
      />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-black via-black/30 to-transparent" />

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
              {Object.entries(menuItems).map(([category, items]) => (
                <div key={category} className="space-y-2">
                  <div 
                    className="flex justify-between items-center border-b border-amber-400/30 pb-2 cursor-pointer"
                    onClick={() => toggleCategory(category)}
                  >
                    <span className="text-zinc-100">{category}</span>
                    <div className="flex items-center">
                      <span className="text-amber-400 mr-2">{items.length} opções</span>
                      <ChevronDown 
                        className={`h-5 w-5 text-amber-400 transition-transform ${openCategory === category ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </div>
                  <AnimatePresence>
                    {openCategory === category && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-zinc-300 text-sm pl-4 space-y-1"
                      >
                        {items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}