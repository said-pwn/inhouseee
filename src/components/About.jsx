import React from 'react'
import image from '../assets/imag.png'

const About = () => {
   
  return (
    <div className='flex  bg-neutral-900 text-white'>    <img src={image} className='w-170 mt-20 '></img>
    <div className=''>
    <div className='mt-50  text-4xl m-20 '>INHOUSE это -</div>
    <div className='mt-80 text-1xl '> 
Дизайн, стиль, удобство мебели и интерьера.
Мы объединили всё самое лучшее, качественное и привлекательное для вас и вашего любимого дома. Сейчас рады представить вам лучшее из лучших.

Мебель и ковры от лучших мировых производителей теперь доступна. С уверенностью можем гарантировать, что вы не будете разочарованы и это всё будет радовать вас своим комфортом и красотой долгие годы. Будем рады видеть вас в наших шоу-румах!</div>
    </div>
    
       </div>
    
  )
}

export default About