import React from 'react'
import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {imag} from '../assets/imag.png'


const Ready = () => {
    const prevRef = useRef(null);
      const nextRef = useRef(null);
    
      const slides = [
        {
          id: 1,
          image: imag,
          title: 'Спальня Adessa - Akyol',
          description: 'Сочетая естественную эстетику дерева...',
        },
        {
          id: 2,
          image: imag,
          title: 'Спальня Antik - Akyol',
          description: 'Спальный гарнитур Antik, создающий...',
        },
        {
          id: 3,
          image: imag,
          title: 'Спальня Defne - Akyol',
          description: 'Благодаря современному дизайну...',
        },
      ];
    
      useEffect(() => {
        if (prevRef.current && nextRef.current) {
          prevRef.current.addEventListener('click', () => {
            if (prevRef.current) {
              prevRef.current.click();
            }
          });
          nextRef.current.addEventListener('click', () => {
            if (nextRef.current) {
              nextRef.current.click();
            }
          });
        }
      }, []);
  return (
    <div className="relative bg-neutral-900 py-10 px-20 ">
          <div className=' text-4xl'>Готовые комплекты</div>
          <div ref={prevRef} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 cursor-pointer">
            <FaChevronLeft className="text-blue-500 text-3xl" />
          </div>
          <div ref={nextRef} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 cursor-pointer">
            <FaChevronRight className="text-blue-500 text-3xl" />
          </div>
    
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{ clickable: true }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            spaceBetween={30}
            slidesPerView={3}
            loop
            className="relative"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="bg-neutral-800 text-white rounded-lg overflow-hidden shadow-lg flex flex-col h-full">
                  <img src={slide.image} alt={slide.title} className="h-60 w-full object-cover" />
                  <div className="p-5 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{slide.title}</h3>
                      <p className="text-sm">{slide.description}</p>
                    </div>
                    <div className="mt-4 space-y-2">
                      <button className="w-full bg-white text-black py-2 rounded-full">Подробнее</button>
                      <button className="w-full bg-white text-black py-2 rounded-full">Другие комплекты</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
        </div>
  )
}

export default Ready