import React from 'react';
import image from '../assets/image.PNG';

const Footer = () => {
  const brands = ['Modis', 'Bomonti', 'Akyol', 'Ozzo', 'Togo', 'Verbatex', 'Tisca', 'Balta', 'Yatsan'];
  const catalog = ['Диваны', 'Кровати', 'Шкафы', 'Стулья', 'Столы', 'Консоли', 'Матрасы'];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="flex justify-center py-10">
        <img src={image} alt="Логотип" className="w-48 sm:w-60" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 sm:px-16 md:px-32 py-10">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Бренды</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {brands.map((brand) => (
              <li key={brand}>{brand}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Каталог</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {catalog.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Контакты</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Бишкек, мкр. Улан-2, ул. 7 апреля, 2</li>
            <li>+996 777 020 020</li>
            <li>inhousekyrgyzstan@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 py-6 border-t border-neutral-800">
         2025 
      </div>
    </footer>
  );
};

export default Footer;
