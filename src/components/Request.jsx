import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-phone-number-input/style.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SpinningCircles } from 'react-loading-icons';
import { FaCheckCircle } from 'react-icons/fa';
import {  AnimatePresence } from 'framer-motion';

const Request = () => {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const defaultCountry = 'KG';

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Проверка валидности номера
    if (!isValidPhoneNumber(userPhone)) {
      setPhoneError('Неверный формат номера');
      return;
    }

    setPhoneError('');
    setIsLoading(true);

    try {
      const response = await axios.post('https://bot-1-ilyj.onrender.com/send-data', {
        userName,
        userPhone,
      });

      if (response.status === 200) {
        toast.success('Сообщение отправлено!');
        setIsSubmitted(true);
        setUserName('');
        setUserPhone('');
      } else {
        toast.error('Что-то пошло не так.');
      }
    } catch (error) {
      toast.error('Ошибка при отправке данных');
    } finally {
      setIsLoading(false);
    }
  };

  // Автоматическое скрытие формы через 5 секунд
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => setIsSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center px-6 py-10 bg-neutral-900 border-4 border-neutral-700 rounded-xl mt-10 mx-auto w-full max-w-md sm:max-w-lg shadow-xl text-white"
    >
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="w-full"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
              Оставьте ваши данные
            </h2>
            <p className="text-center text-sm mb-6 text-neutral-300">
              Наш менеджер свяжется с вами в течение 10 минут
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
              <input
                className="bg-neutral-800 border border-neutral-600 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-neutral-500 text-white"
                type="text"
                placeholder="Ваше имя"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />

              <PhoneInput
                className="bg-neutral-800 border border-neutral-600 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-neutral-500 text-white"
                international
                defaultCountry={defaultCountry}
                value={userPhone}
                onChange={setUserPhone}
                required
              />
              {phoneError && (
                <span className="text-red-500 text-sm">{phoneError}</span>
              )}

              <button
                type="submit"
                className="bg-green-600 hover:bg-green-500 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-60"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <SpinningCircles width="24" height="24" />
                    Отправка...
                  </>
                ) : (
                  'Отправить заявку'
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center text-center space-y-4"
          >
            <FaCheckCircle className="text-green-500 text-5xl" />
            <h1 className="text-xl font-bold">Успешно отправлено!</h1>
            <p className="text-neutral-300">
              Мы получили вашу заявку и скоро свяжемся с вами.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <ToastContainer />
    </motion.div>
  );
};

export default Request;
