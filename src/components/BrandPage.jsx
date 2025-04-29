import React from 'react';
import { Link } from 'react-router-dom';
import imag from '../assets/imag.PNG';

const BrandPage = () => {
  const cards = [
    { id: 1, image: imag, title: 'Modis', hoverText: 'Подробнее', href: '/construction' },
    { id: 2, image: imag, title: 'Bomonti', hoverText: 'Подробнее', href: '/construction' },
    { id: 3, image: imag, title: 'Akyol', hoverText: 'Подробнее', href: '/construction' },
    { id: 4, image: imag, title: 'Ozzo', hoverText: 'Подробнее', href: '/construction' },
    { id: 5, image: imag, title: 'Togo', hoverText: 'Подробнее', href: '/construction' },
    { id: 6, image: imag, title: 'Verbatex', hoverText: 'Подробнее', href: '/construction' },
  ];

  return (
    <div className="bg-neutral-900">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5 bg-neutral-900/90">
        {cards.map((card) => (
          <Link to={card.href} key={card.id}>
            <div className="relative group overflow-hidden cursor-pointer bg-neutral-900/90">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover bg-gray-700/50"
              />

              <div className="absolute inset-0 flex bg-neutral-700/60 text-white items-end justify-center transition-all duration-500 group-hover:bottom-10 text-2xl font-bold pointer-events-none">
                {card.title}
              </div>

              <div className="absolute top-[-100%] left-0 w-full text-white text-center py-6 text-xl ease-in-out group-hover:top-40 font-bold">
                {card.hoverText}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
