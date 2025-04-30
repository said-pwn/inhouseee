import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/photo.PNG';

const BrandPage = () => {
  const cards = [
    { id: 1, image: image, title: 'Modis', hoverText: 'Подробнее', href: '/construction' },
    { id: 2, image: image, title: 'Bomonti', hoverText: 'Подробнее', href: '/construction' },
    { id: 3, image: image, title: 'Akyol', hoverText: 'Подробнее', href: '/construction' },
    { id: 4, image: image, title: 'Ozzo', hoverText: 'Подробнее', href: '/construction' },
    { id: 5, image: image, title: 'Togo', hoverText: 'Подробнее', href: '/construction' },
    { id: 6, image: image, title: 'Verbatex', hoverText: 'Подробнее', href: '/construction' },
  ];

  return (
    <div className="bg-neutral-900">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5 bg-neutral-900/90">
        {cards.map((card) => (
          <Link to={card.href} key={card.id}>
  <div className="relative group overflow-hidden cursor-pointer">
    <img
      className="w-full h-full object-cover bg-gray-700/50"
      src={card.image}
      alt={card.title}
    />


    <div className="absolute inset-0 bg-neutral-700/60" />


    <div className="absolute bottom-6 left-0 w-full text-white text-center text-2xl font-bold z-10 transition-all duration-700 group-hover:translate-y-[-20px]">
      {card.title}
    </div>


    <div className="absolute top-[-100%] left-0 w-full text-white text-center py-6 text-xl ease-in-out group-hover:top-40 font-bold z-10 ">
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
