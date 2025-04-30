import React, { useRef, useLayoutEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import image from '../assets/photo.PNG';

const Ready = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: image,
      title: 'Спальня Adessa - Akyol',
      description: 'Сочетая естественную эстетику дерева...',
      href: '/Collaboration',
    },
    {
      id: 2,
      image: image,
      title: 'Спальня Antik - Akyol',
      description: 'Спальный гарнитур Antik, создающий...',
    },
    {
      id: 3,
      image: image,
      title: 'Спальня Defne - Akyol',
      description: 'Благодаря современному дизайну...',
    },
  ];

  useLayoutEffect(() => {
    // Ждём, пока рефы будут инициализированы до Swiper
  }, []);

  return (
    <div className="relative bg-neutral-900 py-10 px-4 md:px-20 text-white">
      <h2 className="text-3xl md:text-4xl font-semibold mb-8">Готовые комплекты</h2>

      {/* Навигационные кнопки */}
      <div ref={prevRef} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-neutral-800 rounded-full cursor-pointer hover:bg-neutral-700">
        <FaChevronLeft className="text-blue-400 text-2xl" />
      </div>
      <div ref={nextRef} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-neutral-800 rounded-full cursor-pointer hover:bg-neutral-700">
        <FaChevronRight className="text-blue-400 text-2xl" />
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        loop
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="bg-neutral-800 rounded-lg shadow-md overflow-hidden flex flex-col h-full">
              <img src={slide.image} alt={slide.title} className="h-60 w-full object-cover" />
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{slide.title}</h3>
                  <p className="text-sm text-gray-300">{slide.description}</p>
                </div>
                <div className="mt-4 space-y-2">
                  <a className="w-full bg-white text-black py-2 rounded-full hover:bg-gray-200 transition">Подробнее</a>
                  <a  className="w-full bg-white text-black py-2 rounded-full hover:bg-gray-200 transition">Другие комплекты</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Ready;
