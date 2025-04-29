import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-900 text-white px-4">
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <p className="text-2xl mb-6">Страница не найдена</p>
      <p className="text-gray-400 mb-8 text-center max-w-md">
        Возможно, вы ошиблись в адресе или страница была удалена.
      </p>
      <Link
        to="/"
        className="bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition duration-300"
      >
        Вернуться на главную
      </Link>
    </div>
  );
}
