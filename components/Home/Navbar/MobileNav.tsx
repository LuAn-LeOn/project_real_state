import React from 'react'
import Link from 'next/link';
import { navLinks } from '@/constant/constant';
import { CgClose } from 'react-icons/cg';
import { t, type Locale } from "@/src/i18n";

const locale: Locale = "es";
const msg = t(locale);

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/* Overlay */}
      <div className={`transform ${navOpen} fixed transition-all duration-500 inset-0 z-1000 bg-black opacity-70 w-full h-screen`}>
      </div>
      {/* NavLinks */}
      <div className={`text-yellow-500 ${navOpen} transform transition-all duration-500 delay-300 fixed flex justify-center 
        flex-col h-full w-[80%] sm:w-[60%] bg-black space-y-6 z-1000`}>
        {navLinks.map((navLink) => {
          return (
            <Link 
              key={navLink.id}
              href={navLink.url}
              className="text-[20px] ml-12 border-b-[1.5px] pd-1 w-fit border-yellow-500 sm:text-[30px] font-medium hover:text-yellow-300 transition-colors"
            >
              {msg.nav[navLink.key] as keyof typeof msg.nav}
            </Link>
          )
        })}
        {/* Close area */}
        <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-yellow-500"/>
      </div>
    </div>
  )
};

export default MobileNav;