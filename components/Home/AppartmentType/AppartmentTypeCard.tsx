import React from "react";
import { t, type Locale } from "@/src/i18n";

import {
  FaBuilding,
  FaHome,
  FaCity,
  FaDoorOpen,
  FaWarehouse,
} from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import type { IconType } from "react-icons";

const locale: Locale = "en";
const msg = t(locale);

type Props = {
  type: {
    id: number;
    // ya NO necesitas icon:string si usarás íconos
    type: string;
    number: number;
  };
};

const ICONS: Record<string, IconType> = {
  Apartment: MdApartment,
  House: FaHome,
  Condo: FaBuilding,
  Studio: FaDoorOpen,
  Loft: FaWarehouse,
};

const AppartmentTypeCard = ({ type }: Props) => {
  const Icon = ICONS[type.type] ?? FaCity;

  return (
    <div
      className="
        group rounded-xl border border-black/5 bg-marble
        shadow-[0_8px_24px_rgba(0,0,0,0.08)]
        p-6 transition-all duration-300
        hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.12)]
        hover:border-[#C9A227]/40
      "
    >
      {/* Icon container */}
      <div
        className="
          w-24 h-24 rounded-xl flex items-center justify-center
          bg-black/5 border border-black/5
          transition-all duration-300
          group-hover:border-[#C9A227]/40
          group-hover:bg-[#C9A227]/10
        "
      >
        <Icon
          className="
            w-16 h-16 text-[#C9A227]
            transition-all duration-300
            group-hover:text-[#F2D675]
            group-hover:drop-shadow-[0_0_18px_rgba(255,200,80,0.35)]
          "
        />
      </div>

      <div className="mt-10">
        <h3 className="text-lg font-bold text-black/90">{type.type}</h3>
        <p className="mt-2 text-sm text-black/60">
          {type.number} {msg.appartmentTypeCard.available}
        </p>
      </div>
    </div>
  );
};

export default AppartmentTypeCard;