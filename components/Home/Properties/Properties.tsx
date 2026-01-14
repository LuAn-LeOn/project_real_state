import React from "react";
import PropertyCard from "./PropertyCard";
import { properties } from "@/data/data";
import SectionDivider from "@/components/Helper/SectionDivider";

const Properties = () => {
  return (
    <section
      id="properties"
      className="relative overflow-hidden py-16 lg:py-24 bg-[#0B0F14]"
    >
      <SectionDivider from="rgba(0,0,0,0)" to="#0B0F14" height="h-28"/>

      <div className="relative w-[90%] xl:w-[80%] mx-auto">
        {/* Header alineado y con CTA */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F2D675]">
              Discover Our Properties
            </h2>
            <p className="mt-3 text-white/70 text-sm md:text-base">
              Explore our curated selection of properties. Premium locations,
              elegant finishes, and a smooth buying experience.
            </p>
            <div className="mt-4 h-px w-28 bg-linear-to-r from-[#C9A227] to-transparent" />
          </div>

          <a
            href="#"
            className="w-fit inline-flex items-center gap-2
              border border-[#C9A227]/60 text-[#C9A227]
              px-4 py-2 rounded-full text-sm tracking-wide
              hover:bg-[#C9A227]/10 hover:border-[#F2D675]/70 hover:text-[#F2D675]
              transition-all duration-200"
          >
            See all properties <span aria-hidden>→</span>
          </a>
        </div>

        <div className="mt-10 lg:mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10 items-stretch">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;