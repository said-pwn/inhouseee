import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import image from '../assets/photo.PNG'




const Main = () => {

 const cards = [
    { id: 1, image: image, title: 'Диваны', hoverText: 'More details', href: '/construction' },
    { id: 2, image: image, title: 'Кровати', hoverText: 'More details', href: '/construction' },
    { id: 3, image: image, title: 'Шкафы', hoverText: 'More details', href: '/construction' },
    { id: 4, image: image, title: 'Комоды', hoverText: 'More details', href: '/construction' },
    { id: 5, image: image, title: 'Столы', hoverText: 'More details', href: '/construction' },
    { id: 6, image: image, title: 'Стулья', hoverText: 'More details', href: '/construction' },
  ];

  return (
    <div className="bg-neutral-900">
    <div className='bg-neutral-900 text-3xl lg:h-50    flex justify-start  p-15'>То, что мы подготовили для вас</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5 bg-neutral-900/90">
      {cards.map((card) => (
        <Link to={card.href} key={card.id}>
  <div className="relative group overflow-hidden cursor-pointer">
    <img
      className="w-full h-full object-cover bg-gray-700/50"
      src={card.image}
      alt={card.title}
    />

    {/* Постоянный серый фон поверх картинки */}
    <div className="absolute inset-0 bg-neutral-700/60" />

    {/* Основной текст — немного поднимается при hover */}
    <div className="absolute bottom-6 left-0 w-full text-white text-center text-2xl font-bold z-10 transition-all duration-700 group-hover:translate-y-[-20px]">
      {card.title}
    </div>

    {/* Hover-текст — появляется сверху при hover */}
    <div className="absolute top-[-100%] left-0 w-full text-white text-center py-6 text-xl ease-in-out group-hover:top-40 font-bold z-10 ">
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
