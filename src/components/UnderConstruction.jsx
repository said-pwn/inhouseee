import React from 'react';
import { FaTools } from 'react-icons/fa';

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-900 text-white px-4 text-center">
      <FaTools size={64} className="text-yellow-400 mb-6 animate-bounce" />

      <h1 className="text-4xl md:text-5xl font-semibold mb-4">
        Страница в разработке
      </h1>

      <p className="text-lg text-gray-300 max-w-xl mb-6">
        Разработчик усердно работает над этой страницей. Скоро здесь появится что-то замечательное!
      </p>

      <a
        href="/"
        className="mt-4 inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
      >
        На главную
      </a>
    </div>
  );
};

export default UnderConstruction;
