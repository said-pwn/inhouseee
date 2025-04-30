import image from '../assets/photo.PNG';

const Special = () => {
  const cards = [
    { id: 1, image: image, title: 'Диваны', description: 'До 30%' },
    { id: 2, image: image, title: 'Кровати', description: 'Выбирайте лучшее для себя' },
    { id: 3, image: image, title: 'Шкафы', description: 'Берите лучшее' },
  ];

  return (
    <div className="bg-neutral-900 text-white py-10 px-4">
      <div className="max-w-screen-xl mx-auto">
        
        {/* Заголовок */}
        <h2 className="text-3xl font-semibold mb-8">Специальные предложения</h2>

        {/* Карточки */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.id} className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Заголовок поверх изображения */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl font-semibold">
                {card.title}
              </div>

              {/* Описание снизу */}
              <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-60 py-3 text-sm font-medium">
                {card.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Special;
