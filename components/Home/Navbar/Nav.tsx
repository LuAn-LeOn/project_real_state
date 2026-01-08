"use client";
import Link from 'next/link';
import React, { use, useEffect, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { cinzelFont } from "@/app/fonts";
import { navLinks } from '@/constant/constant';

type Props = {
  openNav: () => void;
};


const Nav = ({ openNav }: Props) => {

  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90)
        setNavBg(true);
      if (window.scrollY < 90)
        setNavBg(false);
    };

    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return (
    <div 
    className={`${cinzelFont.className} fixed ${navBg ? "bg-black/50 backdrop-blur-md border-b border-white/10" : "bg-black/50"} top-0 left-0 h-[10vh] z-100 w-full transition-all duration-200`}>
        <div className="flex items-center justify-between gap-2 w-[95%] sm:w-[90%] xl:w-[80%] mx-auto h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <img
                src="/images/logo_sin_eslogan.png"
                alt="Puerta Norte"
                className="
                  h-14
                  w-auto
                  object-contain
                  scale-110
                  origin-left
                "
              />
            </Link>

            {/* Nav Links */}
            <div className="hidden lg:flex items-center space-x-14 uppercase tracking-widest">
              {navLinks.map((navLink) => (
                <Link key={navLink.id} href={navLink.url} 
                  className="
                    font-medium
                    text-[#C9A227]            
                    hover:text-[#F2D675]      
                    gold-glow-hover
                    transition-all duration-200
                    relative
                    after:content-['']
                    after:absolute after:left-0 after:-bottom-1
                    after:h-0.5 after:w-0
                    after:bg-[#F2D675]
                    after:transition-all after:duration-200
                    hover:after:w-full
                  ">
                  {navLink.label}
                </Link>
              ))}
            </div>
            <div>
              {/* Login and bugermenu */}
              <div className="flex items-center space-x-4">
                {/* Login button */}
                <Link
                  href="/login"
                  className="
                    flex items-center gap-2
                    border-2 border-[#D4AF37]
                    px-3 sm:px-4 py-2
                    rounded-full
                    text-[#D4AF37]
                    hover:bg-[#D4AF37] hover:text-black
                    transition-all duration-200
                    font-cinzel
                    shrink-0
                  "
                >
                  <FaUserCircle className="w-5 h-5" />
                  <span className="hidden sm:inline text-sm sm:text-base">
                    Login / Register
                  </span>
                </Link>
                {/* Burger menu */}
                <HiBars3BottomRight onClick={openNav} className="sm:w-8 sm:h-8 w-6 h-6 cursor-pointer text-yellow-400 lg:hidden"/>
              </div>
            </div>
        </div>
    </div>
  )
};

export default Nav;