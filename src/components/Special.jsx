
import imag from '../assets/imagg.png'
const Special = () => {
    const cards = [
        { id: 1, image: imag, title: 'Диваны', description: 'До 30%' },
        { id: 2, image: imag, title: 'Кровати', description: 'Выбирайте лучшее для себя' },
        { id: 3, image: imag, title: 'Шкафы', description: 'Берите лучшее'},

        
      ];

  return (
    <div className=' bg-neutral-900' >
    <div className='bg-neutral-900 text-3xl lg:h-50    flex justify-start  p-15'>Специальные предложения</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5">
  
  {cards.map((card) => (
   
    <div key={card.id} className="relative group overflow-hidden cursor-pointer ">
      <img
        src={card.image}
        alt="Фото"
        className="w-full h-full object-cover"  
      />
   
      <div className="absolute inset-0 flex bg-netural-700/60 text-white  items-center justify-center  text-2xl pointer-events-none">
        {card.title}
      </div>
      <div className="absolute inset-0 flex bg-neutral-700/60 text-white  items-end justify-center pb-10  text-1xl font-bold pointer-events-none">
        {card.description}
      </div>

     
      <div className="absolute top-[-100%] left-0 w-full text-white  font-normal	 text-center py-6 text-xl  ease-in-out  ">
        {card.hoverText}
      </div>
    </div>
 
  ))}
  
</div>

</div>
  );
};

export default Special;
