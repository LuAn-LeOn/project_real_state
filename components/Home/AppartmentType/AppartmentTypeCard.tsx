import Image from 'next/image';
import React from 'react'
import { t, type Locale } from "@/src/i18n";

const locale: Locale = "en";
const msg = t(locale);

type Props = {
    type: {
        id: number;
        icon: string;
        type: string;
        number: number;
    };
};

const AppartmentTypeCard = ({ type }: Props) => {
  return (
    <div className="
      group
      rounded-xl
      bg-white
      p-6
      shadow-md
      ring-1 ring-black/5
      transition-all duration-300
      hover:-translate-y-1
      hover:shadow-xl
      hover:ring-[#C9A227]/40  
      "
    >
      {/* Icon / Image wrapper (same size always) */}
      <div
        className="
          relative
          w-40 h-40
          rounded-lg
          overflow-hidden
          bg-black/5
          ring-1 ring-black/5
          transition-all duration-300
          group-hover:ring-[#C9A227]/40
          group-hover:shadow-[0_0_18px_rgba(201,162,39,0.18)]
        "
      >
        <Image
          src={type.icon}
          alt={type.type}
          fill
          className="object-cover"
          sizes="56px"
          priority={false}
        />
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-950">
          {type.type}
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          {type.number} {msg.appartmentTypeCard.available}
        </p>
      </div>
    </div>
  );
};

export default AppartmentTypeCard;
