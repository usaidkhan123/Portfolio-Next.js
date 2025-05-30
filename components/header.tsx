"use client"
import codeimage from "@/public/images/img.jpg";
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black/20 backdrop-blur-lg border-b border-white/10 bg-slate-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0 flex">
          <Image
                className="bg-blend-color-burn mt-1"
                src={codeimage}
                width={35}
                height={35}
                alt="logo"
            />
            <a href="/" className="pl-2 pt-2 font-bold text-purple-700">
            MU
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 ">
            <Link
              href="#about" 
              className="text-black hover:text-purple-700 transition-all duration-300 font-medium relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="#project" 
              className="text-black hover:text-purple-700 transition-all duration-300 font-medium relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="#exp" 
              className="text-black hover:text-white transition-all duration-300 font-medium relative group"
            >
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <a 
              href="#contact" 
              className="text-black hover:text-white transition-all duration-300 font-medium relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-purple-100 hover:text-white focus:outline-none focus:text-white transition-colors duration-300"
            >
              <svg className="h-6 w-6 transform transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/30 backdrop-blur-lg border-t border-white/10 rounded-b-lg">
            <a 
              href="#about" 
              className="block px-3 py-2 text-purple-100 hover:text-white hover:bg-white/10 rounded-md font-medium transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="block px-3 py-2 text-purple-100 hover:text-white hover:bg-white/10 rounded-md font-medium transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="block px-3 py-2 text-purple-100 hover:text-white hover:bg-white/10 rounded-md font-medium transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 text-purple-100 hover:text-white hover:bg-white/10 rounded-md font-medium transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
             
            <button className="text-purple-700 flex md:hidden focus:outline-none" >
                ☰
            </button>
        
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
