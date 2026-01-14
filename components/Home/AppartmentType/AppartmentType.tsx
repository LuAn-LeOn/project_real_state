import React from "react";
import Link from "next/link";
import AppartmentTypeCard from "./AppartmentTypeCard";
import { appartmentTypeData } from "@/data/data";
import { t, type Locale } from "@/src/i18n";
import SectionDivider from "@/components/Helper/SectionDivider";

const locale: Locale = "en";
const msg = t(locale);

const AppartmentType = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B0F14]">
      {/* Halo dorado súper sutil (premium) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,162,39,0.14),transparent_60%)]" />

      <div className="relative pt-24 md:pt-32 pb-16">
        <div className="w-[92%] sm:w-[90%] xl:w-[80%] mx-auto">
          {/* Heading + subheading (en dorado/blanco para fondo oscuro) */}
          <div className="mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F2D675]">
              {msg.apprtmentType.sectionHeading}
            </h2>

            <p className="mt-2 text-sm sm:text-base text-white/70 max-w-2xl">
              {msg.sectionHeading.sectionHeading}
            </p>
            <div className="mt-4 h-px w-28 bg-linear-to-r from-[#C9A227] to-transparent" />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-stretch">
            {appartmentTypeData.map((type) => (
              <AppartmentTypeCard key={type.id} type={type} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex justify-center md:justify-end">
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
        </div>
      </div>
    </section>
  );
};

export default AppartmentType;