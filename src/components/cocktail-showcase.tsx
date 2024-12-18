'use client'

import React, { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'

const cocktails = [
  { src: '/images/drinks/1.jpg', alt: 'Passion Fruit Cocktail' },
  { src: '/images/drinks/2.jpg', alt: 'Strawberry Cream Cocktail' },
  { src: '/images/drinks/3.jpg', alt: 'Miden Orange Cocktail' },
  { src: '/images/drinks/4.jpg', alt: 'Mojito' },
  { src: '/images/drinks/6.jpg', alt: 'Margarita' },
  { src: '/images/drinks/7.jpg', alt: 'Margarita' },
  { src: '/images/drinks/10.jpg', alt: 'Margarita' },
  { src: '/images/drinks/11.jpg', alt: 'Margarita' },
  { src: '/images/drinks/13.jpg', alt: 'Margarita' },
]

export default function CocktailShowcase() {
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
    <section className="py-12 md:py-24 bg-black overflow-x-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-serif text-center mb-8 md:mb-16 text-amber-400"
        >
          Nossos Coquetéis Exclusivos
        </motion.h2>

        <div className="relative">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={true}
            loop={true}
            navigation={true}
            modules={[FreeMode, Navigation]}
            onSlideChange={handleSlideChange}
            className="cocktail-swiper"
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
            {cocktails.map((cocktail, index) => (
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
                    src={cocktail.src}
                    alt={cocktail.alt}
                    fill
                    quality={100}
                    className="object-cover rounded-lg"
                    sizes="(max-width: 640px) 80vw, (max-width: 768px) 40vw, 33vw"
                  />
                </motion.div>
              </SwiperSlide>
            ))}

            <button onClick={() => swiperRef.current?.slidePrev()} className="swiper-button-prev"></button>
            <button onClick={() => swiperRef.current?.slideNext()} className="swiper-button-next"></button>
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .cocktail-swiper {
          padding: 40px 0;
        }
        .cocktail-swiper .swiper-slide {
          transition: all 300ms ease;
        }
        .cocktail-swiper .swiper-slide-active {
          z-index: 10;
        }
        .cocktail-swiper .swiper-button-next,
        .cocktail-swiper .swiper-button-prev {
          color: #fbbf24;
          cursor: pointer;
        }
        .cocktail-swiper .swiper-button-next::after,
        .cocktail-swiper .swiper-button-prev::after {
          font-size: 24px;
        }
        @media (max-width: 767px) {
          .cocktail-swiper .swiper-button-next,
          .cocktail-swiper .swiper-button-prev {
            width: 30px;
            height: 30px;
          }
          .cocktail-swiper .swiper-button-next::after,
          .cocktail-swiper .swiper-button-prev::after {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  )
}