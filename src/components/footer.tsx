'use client'

import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            {/* <Image
              src="/images/logo.png"
              alt="Mambo Gastrobar Logo"
              width={150}
              height={50}
              className="mb-6"
            /> */}
            <p className='font-black text-4xl'>MAMBO</p>
            <p className="mb-6">O melhor da gastronomia e entretenimento em Fazenda Rio Grande.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-amber-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-amber-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-amber-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-amber-400 mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 text-amber-400 flex-shrink-0" />
                <span>Em cima do posto patio Nações<br />R. Jacarandá, 410 - Nações<br />Fazenda Rio Grande - PR, 83823-014</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-amber-400 flex-shrink-0" />
                <a href="tel:+5541920014371" className="hover:text-amber-400 transition-colors">(41) 92001-4371</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-amber-400 flex-shrink-0" />
                <a href="mailto:contato@mambogastrobar.com" className="hover:text-amber-400 transition-colors">contato@mambogastrobar.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-amber-400 mb-6">Horário de Funcionamento</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-amber-400 flex-shrink-0" />
                <span>Seg - Qui: 18h - 00h</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-amber-400 flex-shrink-0" />
                <span>Sex - Sáb: 18h - 02h</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-amber-400 flex-shrink-0" />
                <span>Domingo: 16h - 22h</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-amber-400 mb-6">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Início</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Menu</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Reservas</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Eventos</Link></li>
              <li><Link href="#" className="hover:text-amber-400 transition-colors">Sobre Nós</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-700 text-center">
          <p>&copy; 2024 Mambo Gastrobar. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}