"use client";
import Link from 'next/link';
import React, { use, useEffect, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { HiBars3BottomRight } from 'react-icons/hi2';

const navLinks = [
  {
    id: 1,
    title: "Home",
    url: "#",
    label: "Home",
  },
  {
    id: 2,
    title: "Listing",
    url: "#listing",
    label: "Listing",
  },
  {
    id: 3,
    title: "Property",
    url: "#property",
    label: "Property",
  },
  {
    id: 4,
    title: "Blog",
    url: "#blog",
    label: "Blog",
  },
  {
    id: 5,
    title: "Contact",
    url: "#contact",
    label: "Contact",
  },

];

const Nav = () => {

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
    className={`fixed ${navBg ? "bg-gray-500" : "bg-black"} top-0 left-0 h-[10vh] z-[100] w-full transition-all duration-200`}>
        <div className="flex items-center justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center">
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
            <div className="hidden lg:flex items-center space-x-14 text-yellow-400 uppercase tracking-widest">
              {navLinks.map((navLink) => {
                return <Link key={navLink.id} href={navLink.url} >
                  <p className="font-medium hover:text-yellow-300 transition-colors">
                    {navLink.label}
                  </p>
                </Link>
              })}
            </div>
            <div>
              {/* Login and bugermenu */}
              <div className="flex items-center space-x-4">
                {/* Login button */}
                <div 
                  className="flex items-center 
                    space-x-2 
                    border-2 
                    border-yellow-400
                    px-4 py-2 
                    rounded-full 
                    hover:bg-yellow-400 
                    text-yellow-400
                    hover:text-black cursor-pointer
                    transition-all 
                    duration-200
                    font-cinzel">
                    <FaUserCircle className="w-5 h-5" />
                    <p className="font-cinzel text-xs sm:text-base">Login / Register</p>
                </div>
                {/* Burger menu */}
                <HiBars3BottomRight className="sm:w-8 sm:h-8 w-6 h-6 cursor-pointer text-yellow-400 lg:hidden"/>
              </div>
            </div>
        </div>
    </div>
  )
};

export default Nav;