import React from 'react';
import imag from '../assets/imag.png';

function Collaboration() {
  const slides = [
    {
      id: 1,
      image: {imag},
      title: 'СОТРУДНИЧЕСТВО С\nINHOUSE',
      description: 'Мебель и ковры от лучших мировых производителей',
    },
  ];

  return (
    <div className="relative w-full h-screen   bg-neutral-900">
      {slides.map((slide) => (
        <div key={slide.id} className="w-full h-full bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="bg-neutral-700/60 w-full h-full text-center flex flex-col font-light items-center justify-center p-4">
            <h2 className="text-white text-3xl md:text-7xl  font-light pr-70 mb-6 leading-tight">
              {slide.title}
            </h2>
            <h2 className="text-white text-3xl md:text-2xl  font-light pr-150 mb-6 leading-tight">
              {slide.description}
            </h2>
          </div>
        </div>


        
      ))}

     
      <section className="grid md:grid-cols-2 gap-8 items-center px-6 py-12 bg-neutral-900 text-white">

<div>
  <h2 className="text-3xl md:text-4xl font-light mb-4">
    Приглашаем к сотрудничеству <br /> в сфере HoReCa
  </h2>
  <p className="text-base md:text-lg font-light text-gray-300">
    Гармоничный и уютный интерьер кафе или ресторана — лучший способ расположить гостей.
  </p>
</div>

<div className="w-full h-full flex justify-center">
  <img
    src=''
    alt="HoReCa"
    className="object-cover rounded-lg max-h-[400px] w-full md:w-auto"
  />
</div>
</section>

    </div>
    
  );
}

export default Collaboration;
