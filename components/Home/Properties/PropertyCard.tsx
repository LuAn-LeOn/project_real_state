import Image from "next/image";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsHeart, BsPlusSquare } from "react-icons/bs";
import { FaBath, FaBed, FaSquare } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";

type Props = {
  property: {
    id: number | string; // (te conviene ya dejarlo así por el backend con UUID)
    propertyName: string;
    location: string;
    bedrooms: number;
    bathrooms: number;
    size: number;
    price: number;
    imageUrl: string;
  };
};

const PropertyCard = ({ property }: Props) => {
  const price = new Intl.NumberFormat("en-US").format(property.price);

  return (
    <div
      className="
        group overflow-hidden rounded-2xl cursor-pointer
        border border-black/5 bg-marble
        shadow-[0_10px_30px_rgba(0,0,0,0.35)]
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.45)]
        hover:border-[#C9A227]/40
      "
    >
      {/* Image */}
      <div className="relative aspect-4/3">
        <Image
          src={property.imageUrl}
          alt={property.propertyName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />

        {/* Featured badge */}
        <div
          className="
            absolute left-4 top-4 inline-flex items-center gap-1
            rounded-md border border-[#C9A227]/40 bg-black/35
            px-3 py-1.5 text-xs font-semibold text-[#F2D675]
            backdrop-blur-md
          "
        >
          <MdElectricBolt />
          <span>Featured</span>
        </div>

        {/* Price pill */}
        <div
          className="
            absolute left-4 bottom-4 rounded-lg
            border border-white/15 bg-black/55
            px-3 py-1.5 text-xs text-white backdrop-blur-md
          "
        >
          <span className="text-sm font-bold text-[#F2D675]">${price}</span>{" "}
          <span className="text-white/80"> USD </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-black/90 group-hover:text-black">
          {property.propertyName}
        </h3>
        <p className="text-sm text-black/55 mt-2">{property.location}</p>

        <div className="mt-5 flex items-center justify-between text-xs text-black/60">
          <div className="flex items-center gap-2">
            <FaBed className="text-[#C9A227]" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <FaBath className="text-[#C9A227]" />
            <span>{property.bathrooms} Bath</span>
          </div>
          <div className="flex items-center gap-2">
            <FaSquare className="text-[#C9A227]" />
            <span>{property.size} m²</span>
          </div>
        </div>

        <div className="my-5 h-px w-full bg-black/10" />

        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-black/60">For Rent</span>

          {/* acciones como botones */}
          <div className="flex items-center gap-2">
            <button
              aria-label="Open"
              className="grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white/80 text-black/60 transition hover:bg-[#C9A227]/15 hover:text-black"
            >
              <BiLinkExternal />
            </button>
            <button
              aria-label="Add"
              className="grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white/80 text-black/60 transition hover:bg-[#C9A227]/15 hover:text-black"
            >
              <BsPlusSquare />
            </button>
            <button
              aria-label="Favorite"
              className="grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white/80 text-black/60 transition hover:bg-[#C9A227]/15 hover:text-black"
            >
              <BsHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;