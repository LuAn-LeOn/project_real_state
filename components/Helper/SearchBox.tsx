import React from 'react'
import { t, type Locale } from "@/src/i18n";
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';
import { FaSearch } from 'react-icons/fa';

const locale: Locale = "en";
const msg = t(locale);

const SearchBox = () => {
  return (
    <div className="
        w-full md:w-[80%] 
        mx-auto bg-black/80
        h-16 sm:h-20 
        flex px-4 sm:px-8 
        flex-col justify-center 
        rounded-lg
    "
    >
      <div className="flex items-center justify-between h-full">
        <input
          type="text"
          placeholder={msg.searchBox.placeholder}
          className="
            sm:flex-1
            h-[60%]
            bg-gray-100/10
            block
            rounded-lg
            outline-none
            px-4
            placeholder:text-sm
            placeholder:text-[#F2D675]
            text-[#C9A227]
          "
        />
        <div className="flex items-center ml-8 space-x-6">
            <div className="lg:flex hidden items-center cursor-pointer space-x-2 text-[#C9A227] hover:text-[#F2D675]">
                <HiAdjustmentsHorizontal className="text-[#C9A227] hover:text-[#F2D675]"/>
                <p className="text-[#C9A227] hover:text-[#F2D675] font-semibold">{msg.searchBox.advancedSearch}</p>
            </div>
            <div className="
                w-12 h-12 bg-[#C9A227] 
                hover:bg-[#F2D675] 
                flex items-center 
                justify-center  cursor-pointer
                transition-all duration-150
                text-black/50 rounded-full
            "
            >
                <FaSearch />
            </div>
        </div>
      </div>
    </div>
  )
};

export default SearchBox;