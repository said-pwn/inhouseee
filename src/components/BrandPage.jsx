import React from 'react'
import imag from '../assets/imagg.jpg'

const BrandPage = () => {
    const cards = [
      { id: 1, image: imag, title: 'Modis', hoverText: 'Подробнее' },
      { id: 2, image: imag, title: 'Bomonti', hoverText: 'подробнее' },
      { id: 3, image: imag, title: 'Akyol', hoverText: 'Подробнее'},
       { id: 4, image: imag, title: 'Ozzo', hoverText: 'Подробнее'},
       { id: 5, image: imag, title: 'Togo', hoverText: 'Подробнее'},
       { id: 6, image: imag, title: 'Verbatex', hoverText: 'Подробнее'},
      
    ];
  return (
    <div className=' bg-neutral-900' >
  
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5 bg-neutral-900/90">
  
  {cards.map((card) => (
   
    <div key={card.id} className="relative group overflow-hidden cursor-pointer bg-neutral-900/90">
      <img
        src={card.image}
        alt="Фото"
        className="w-full h-full object-cover bg-gray-700/50"
      />
   
      <div className="absolute inset-0 flex  bg-neutral-700/60 text-white  items-end justify-center transition-all duration-500  group-hover:bottom-10 text-2xl font-bold pointer-events-none">
        {card.title}
      </div>

     
      <div className="absolute top-[-100%] left-0 w-full text-white   text-center py-6 text-xl  ease-in-out group-hover:top-40 pointer-events-none font-bold">
        {card.hoverText}
      </div>
    </div>
 
  ))}
  
</div>

</div>
  )
}

export default BrandPage