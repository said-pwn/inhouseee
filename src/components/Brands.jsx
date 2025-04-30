import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import image from '../assets/photo.PNG';

const Brands = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-30 py-10">
      <div className="text-2xl sm:text-3xl py-10 text-center font-semibold">
        Представленные бренды
      </div>

      <div className="w-full max-w-full mx-auto py-10">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide className="flex justify-center items-center pb-5 pl-20">
            <img
              src={image}
              alt="Slide 1"
              className="w-28 h-auto object-cover rounded-full md:w-40  lg:w-44 xl:w-48"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center pb-10">
            <img
              src={image}
              alt="Slide 2"
              className="w-28 h-auto object-cover rounded-full md:w-40 lg:w-44 xl:w-48"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center pb-10">
            <img
              src={image}
              alt="Slide 3"
              className="w-28 h-auto object-cover rounded-full md:w-40 lg:w-44 xl:w-48"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center pb-10">
            <img
              src={image}
              alt="Slide 3"
              className="w-28 h-auto object-cover rounded-full md:w-40 lg:w-44 xl:w-48"
            />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center pb-10">
            <img
              src={image}
              alt="Slide 3"
              className="w-28 h-auto object-cover rounded-full md:w-40 lg:w-44 xl:w-48"
            />
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default Brands;
