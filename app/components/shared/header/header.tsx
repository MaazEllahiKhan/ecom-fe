'use client'
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-full flex justify-center items-center bg-transparent p-4 z-50">
      {/* <div className="text-xl font-bold">RS</div> */}
      <nav className="hidden md:flex space-x-4">
        <a href="/" className="bg-primary min-w-28 text-center bg-opacity-75 rounded-full px-4 py-2 text-white shadow-md hover:bg-opacity-100 transition duration-300 hover:shadow-lg transition duration-300">
          Home
        </a>
        <a href="#about" className="bg-primary min-w-28 text-center bg-opacity-75 rounded-full px-4 py-2 text-white shadow-md hover:bg-opacity-100 transition duration-300 hover:shadow-lg transition duration-300">
          About
        </a>
        <a href="/auth/login" className="bg-primary min-w-28 text-center bg-opacity-75 rounded-full px-4 py-2 text-white shadow-md hover:bg-opacity-100 transition duration-300 hover:shadow-lg transition duration-300">
          Login
        </a>
        <a href="#contact" className="bg-primary min-w-28 text-center bg-opacity-75 rounded-full px-4 py-2 text-white shadow-md hover:bg-opacity-100 transition duration-300 hover:shadow-lg transition duration-300">
          Contact
        </a>
      </nav>
      <button className="md:hidden text-gray-800" onClick={toggleMenu}>
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-transparent bg-opacity-75 flex flex-col items-center space-y-4 py-4 shadow-lg">
          <a href="#home" className="bg-white bg-opacity-75 rounded-full px-4 py-2 text-gray-800 shadow-md hover:bg-opacity-100 transition duration-300">
            Home
          </a>
          <a href="#about" className="bg-white bg-opacity-75 rounded-full px-4 py-2 text-gray-800 shadow-md hover:bg-opacity-100 transition duration-300">
            About
          </a>
          <a href="#services" className="bg-white bg-opacity-75 rounded-full px-4 py-2 text-gray-800 shadow-md hover:bg-opacity-100 transition duration-300">
            Services
          </a>
          <a href="#contact" className="bg-white bg-opacity-75 rounded-full px-4 py-2 text-gray-800 shadow-md hover:bg-opacity-100 transition duration-300">
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
