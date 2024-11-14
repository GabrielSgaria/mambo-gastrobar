'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function LocationSection() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/20 to-transparent" />
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-center mb-12 text-zinc-800"
        >
          Nossa Localização
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-zinc-800">Endereço</p>
                <p className="text-zinc-600">
                  Em cima do posto patio Nações<br />
                  R. Jacarandá, 410 - Nações<br />
                  Fazenda Rio Grande - PR, 83823-014
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-amber-500 flex-shrink-0" />
              <div>
                <p className="font-semibold text-zinc-800">Telefone</p>
                <a href="tel:+5541920014371" className="text-zinc-600 hover:text-amber-500 transition-colors">
                  (41) 92001-4371
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-amber-500 flex-shrink-0" />
              <div>
                <p className="font-semibold text-zinc-800">E-mail</p>
                <a href="mailto:contato@mambogastrobar.com" className="text-zinc-600 hover:text-amber-500 transition-colors">
                  contato@mambogastrobar.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-zinc-800">Horário de Funcionamento</p>
                <p className="text-zinc-600">Segunda - Quinta: 18h - 00h</p>
                <p className="text-zinc-600">Sexta - Sábado: 18h - 02h</p>
                <p className="text-zinc-600">Domingo: 16h - 22h</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3 w-full h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.3562639098745!2d-49.30840932374034!3d-25.465945077518743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfb2a8a9f7f9d%3A0x4b95c1f0f1f9e0b0!2sR.%20Jacarand%C3%A1%2C%20410%20-%20Na%C3%A7%C3%B5es%2C%20Fazenda%20Rio%20Grande%20-%20PR%2C%2083823-014!5e0!3m2!1sen!2sbr!4v1700000000000!5m2!1sen!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Mambo Gastrobar"
            ></iframe>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://goo.gl/maps/your-google-maps-link-here"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-600 transition-colors shadow-md hover:shadow-lg"
          >
            Como Chegar
          </a>
        </motion.div>
      </div>
    </section>
  )
}