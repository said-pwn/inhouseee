import React, { useState } from 'react';
import axios from 'axios';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Request = () => {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const defaultCountry = 'KG';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('https://bot-1-ilyj.onrender.com/send-data', {
        userName,
        userPhone,
      });

      if (response.status === 200) {
        toast.success('Сообщение отправлено!');
        setUserName('');
        setUserPhone('');
      } else {
        toast.error('Что-то пошло не так.');
      }
    } catch (error) {
      console.error('Ошибка:', error.response ? error.response.data : error.message);
      toast.error('Ошибка при отправке данных');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 border-4 border-neutral-800 rounded-lg mt-10 mx-auto max-w-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Оставьте ваши данные, и наши менеджеры свяжутся с вами в течение 10 минут
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        <input
          className="border border-neutral-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-neutral-800"
          type="text"
          placeholder="Ваше имя"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />

        <PhoneInput
          className="border border-neutral-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-neutral-800"
          international
          defaultCountry={defaultCountry}
          value={userPhone}
          onChange={setUserPhone}
          required
        />

        <button
          type="submit"
          className="bg-neutral-800 text-white py-3 rounded hover:bg-neutral-700 transition"
          disabled={isLoading}
        >
          {isLoading ? 'Отправка...' : 'Отправить'}
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Request;
