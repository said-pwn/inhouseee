import React from 'react'
import { NavLink as Link } from 'react-router-dom'
// import {imag} from '../assets/imag.png'




const Main = () => {

 const cards = [
    { id: 1, image: '', title: 'Диваны', hoverText: 'Подробнее', href: '/construction' },
    { id: 2, image: '', title: 'Кровати', hoverText: 'Подробнее', href: '/construction' },
    { id: 3, image: '', title: 'Шкафы', hoverText: 'Подробнее', href: '/construction' },
    { id: 4, image: '', title: 'Комоды', hoverText: 'Подробнее', href: '/construction' },
    { id: 5, image: '', title: 'Столы', hoverText: 'Подробнее', href: '/construction' },
    { id: 6, image: '', title: 'Стулья', hoverText: 'Подробнее', href: '/construction' },
  ];

  return (
    <div className="bg-neutral-900">
    <div className='bg-neutral-900 text-3xl lg:h-50    flex justify-start  p-15'>То, что мы для Вас подготовили</div>
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
  )
}

export default Main
