import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import imag from '../assets/photto.PNG';
import axios from 'axios';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Carousel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(null);
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const defaultCountry = 'KG';

  const slides = [
    { id: 1, image: {imag}, title: 'БЕСПЛАТНАЯ ДОСТАВКА КОВРОВ ПО ВСЕМУ КЫРГЫЗСТАНУ' },
    { id: 2, image: {imag}, title: 'СКИДКИ ДО 50% НА ВСЮ ПРОДУКЦИЮ' },
    { id: 3, image: {imag}, title: 'НОВЫЕ ПОСТУПЛЕНИЯ' },
    { id: 4, image: {imag}, title: 'СКИДКИ НА 3D КОВРЫ' },
  ];

  const openModal = (slide) => {
    setSelectedSlide(slide);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSlide(null);
    setUserName('');
    setUserPhone('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/send-data', {
        userName,
        userPhone,
      });

      if (response.status === 200) {
        toast.success('Сообщение отправлено!');
        closeModal();
      } else {
        toast.error('Что-то пошло не так...');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      toast.error('Ошибка при отправке данных');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-neutral-900">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-neutral-700/60 w-full h-full text-center flex flex-col items-center justify-center p-4">
                <h2 className="text-white text-3xl md:text-6xl font-extrabold mb-6 leading-tight">
                  {slide.title}
                </h2>
                <button
                  onClick={() => openModal(slide)}
                  className="bg-white text-black py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all duration-300"
                >
                  ПОДРОБНЕЕ
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {isModalOpen && selectedSlide && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-neutral-900 rounded-lg shadow-lg max-w-md w-full p-8 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-red-500 text-3xl font-bold transition"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center text-white">{selectedSlide.title}</h2>

            <p className="text-center text-gray-400 mb-6">
              Оставьте ваши данные и наши менеджеры свяжутся с вами в течение 10 минут
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                className="border border-gray-700 bg-neutral-800 text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-neutral-500"
                placeholder="Ваше имя"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />

              <PhoneInput
                international
                defaultCountry={defaultCountry}
                value={userPhone}
                onChange={setUserPhone}
                className="border border-gray-700 bg-neutral-800 text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-neutral-500"
                required
              />

              <button
                type="submit"
                className="bg-white text-black py-3 rounded hover:bg-gray-300 transition"
                disabled={isLoading}
              >
                {isLoading ? 'Отправка...' : 'Отправить'}
              </button>
            </form>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}
