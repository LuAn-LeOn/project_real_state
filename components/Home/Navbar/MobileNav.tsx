import React from 'react'
import Link from 'next/link';
import { navLinks } from '@/constant/constant';
import { CgClose } from 'react-icons/cg';
import { t, type Locale } from "@/src/i18n";
import { cinzelFont } from '@/app/fonts';

const locale: Locale = "en";
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
      <div className={`
        transform 
        ${navOpen} 
        fixed 
        transition-all 
        duration-500 
        inset-0 z-1000 
        bg-black opacity-70 
        w-full 
        h-screen`
      }>
      </div>
      {/* NavLinks */}
      <div className={`${cinzelFont.className} ${navOpen} transform transition-all duration-500 delay-300 fixed flex justify-center 
        flex-col h-full w-[80%] sm:w-[60%] bg-black/10 backdrop-blur-md border-b border-white/10 space-y-6 z-1000`}>
        {navLinks.map((navLink) => {
          return (
            <Link 
              key={navLink.id}
              href={navLink.url}
              className="
                inline-block w-fit ml-6 pb-2
                font-medium text-[#C9A227]
                transition-colors duration-200
                relative
                after:content-[''] after:block
                after:absolute after:left-0 after:bottom-0
                after:h-0.5 after:w-0
                after:bg-[#F2D675]
                after:transition-all after:duration-200
                after:rounded-full  
                hover:text-[#F2D675] hover:after:w-full
                focus:text-[#F2D675] focus:after:w-full focus:outline-none
                active:text-[#F2D675] active:after:w-full
              "
            >
              {msg.nav[navLink.key as keyof typeof msg.nav]}
            </Link>
          )
        })}
        {/* Close area */}
        <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-[#C9A227]"/>
      </div>
    </div>
  )
};

export default MobileNav;