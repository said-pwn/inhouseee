import React from 'react';
import photo from '../assets/photo.PNG'; 
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-neutral-900 text-white px-4 md:px-20 py-10 gap-10">

      <div className="w-full md:w-1/2">
        <img src={photo} alt="inhouse" className="rounded-lg shadow-lg " />
      </div>


      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
          <span className="text-gray-300">IN</span>HOUSE это -
        </h2>
        <p className="text-lg mb-4 leading-relaxed text-gray-300">
          Дизайн, стиль, удобство мебели и интерьера.
          Мы объединили всё самое лучшее, качественное и привлекательное для вас и вашего любимого дома.
          Сейчас рады представить вам лучшее из лучших.
        </p>
        <p className="text-lg mb-6 leading-relaxed text-gray-300">
          Мебель и ковры от лучших мировых производителей теперь доступна.
          С уверенностью можем гарантировать, что вы не будете разочарованы —
          это всё будет радовать вас своим комфортом и красотой долгие годы.
          Будем рады видеть вас в наших шоу-румах!
        </p>

        
      </div>
    </div>
  );
};

export default About;
