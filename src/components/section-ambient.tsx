'use client'

import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'

const images = [
  { src: "/images/bar/1.jpg", alt: "Área de jogos do Mambo Bar" },
  { src: "/images/bar/2.jpg", alt: "Iluminação decorativa e cortinas" },
  { src: "/images/bar/3.jpg", alt: "Vista do ambiente com decoração em tecidos" },
  { src: "/images/bar/4.jpg", alt: "Área de estar com móveis em madeira" },
  { src: "/images/bar/5.jpg", alt: "Detalhes da iluminação ambiente" },
  { src: "/images/bar/6.jpg", alt: "Área do bar com iluminação aconchegante" },
  { src: "/images/bar/7.jpg", alt: "Espaço para refeições com decoração rústica" },
]

export default function AmbienteSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef<SwiperType | null>(null)

  const handleImageClick = useCallback((index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index)
    }
  }, [])

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex)
  }

  return (
    <section className="py-12 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-serif text-center mb-8 md:mb-16 text-amber-400"
        >
          Nosso Ambiente
        </motion.h2>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[FreeMode, Navigation]}
          onSlideChange={handleSlideChange}
          className="ambiente-swiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="swiper-slide-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0.6,
                  scale: activeIndex === index ? 1 : 0.8,
                }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[3/4] cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 640px) 80vw, (max-width: 768px) 40vw, 33vw"
                />
              </motion.div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>

      <style jsx global>{`
        .ambiente-swiper {
          padding: 40px 0;
        }
        .ambiente-swiper .swiper-slide {
          transition: all 300ms ease;
        }
        .ambiente-swiper .swiper-slide-active {
          z-index: 10;
        }
        .ambiente-swiper .swiper-button-next,
        .ambiente-swiper .swiper-button-prev {
          color: #fbbf24;
        }
        @media (max-width: 767px) {
          .ambiente-swiper .swiper-button-next,
          .ambiente-swiper .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}