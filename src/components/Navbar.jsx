import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaWhatsapp, FaTelegramPlane, FaFacebookF, FaYoutube } from 'react-icons/fa';
import img from '../assets/image.PNG';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = [
    { label: 'Бренды', href: './BrandPage' },
    { label: 'Каталог', href: '/construction' },
    { label: 'Сотрудничество', href: './Collaboration' },
    { label: 'Специальные предложения', href: '/construction' },
    { label: 'О нас', href: '/about' },
    { label: '3D-модели', href: 'https://drive.google.com/drive/folders/1ESCBe5frD840JlwRwLKqV_FgtS9KUdu_' },
    { label: 'Виртуальный тур', href: 'https://kuula.co/share/collection/7XWWs...' },
  ];

  return (
    <>
    <header className="bg-neutral-900 text-white px-6 py-4 flex items-center justify-between fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="flex items-center gap-2">
        <a href='/'><img src={img} alt="Logo" className="h-8 md:h-10" /></a>
      </div>

      <nav className="hidden md:flex gap-6 font-medium">
        {menuItems.map((item) => (
          <a key={item.label} href={item.href} className="hover:text-gray-400 transition whitespace-nowrap">
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <a href="https://wa.me/your_number" target="_blank" className="text-white hover:text-green-400 transition">
          <FaWhatsapp size={22} />
        </a>
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>
    </header>

    {/* Оверлей и бургер меню вне header */}
    {menuOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        onClick={toggleMenu}
      />
    )}

    <div
      className={`fixed top-0 left-0 h-full w-72 bg-black text-white z-50 flex flex-col justify-between p-6 transition-transform duration-300 ease-in-out ${
        menuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center mb-6">
        <img src={img} alt="Logo" className="h-8" />
        <button onClick={toggleMenu}>
          <HiX size={28} />
        </button>
      </div>

      <nav className="flex flex-col gap-4 text-base font-medium">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="hover:text-gray-400 transition"
            onClick={toggleMenu}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="mt-8 space-y-4">
        <div className="flex gap-4 justify-center">
          <a href="#" className="bg-white text-black p-2 rounded-full hover:scale-110 transition">
            <FaTelegramPlane size={16} />
          </a>
          <a href="#" className="bg-white text-black p-2 rounded-full hover:scale-110 transition">
            <FaFacebookF size={16} />
          </a>
          <a href="#" className="bg-white text-black p-2 rounded-full hover:scale-110 transition">
            <FaYoutube size={16} />
          </a>
        </div>

        <a
          href="tel:+996..."
          className="block bg-blue-600 text-white text-center py-2 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Позвонить
        </a>
        <a
          href="https://wa.me/your_number"
          className="block border border-white text-white text-center py-2 rounded-full font-semibold hover:bg-white hover:text-black transition"
        >
          WhatsApp
        </a>
      </div>
    </div>
  </>
  );
};

export default Navbar;
