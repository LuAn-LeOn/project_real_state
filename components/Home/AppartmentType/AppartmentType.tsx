import SectionHeading from '@/components/Helper/SectionHeading';
import { appartmentTypeData } from '@/data/data';
import React from 'react'
import AppartmentTypeCard from './AppartmentTypeCard';
import { t, type Locale } from "@/src/i18n";
import Link from 'next/link';

const locale: Locale = "en";
const msg = t(locale);

const AppartmentType = () => {
  return (
    <div className="pt-24 md:pt-32 pb-16">
        <div className="w-[80%] mx-auto">
            <SectionHeading heading={msg.apprtmentType.sectionHeading} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-10 md:mt-20 gap-8 items-center">
                {appartmentTypeData.map((type) => {
                    return <div key={type.id}>
                        <AppartmentTypeCard type={type} />
                    </div>
                })}
            </div>
            {/* CTA */}
            <div className="mt-10 flex justify-center md:justify-end">
              <Link
                href="/properties"
                className="
                  group
                  inline-flex items-center gap-2
                  text-sm sm:text-base font-medium
                  text-black
                  hover:text-[#F2D675]
                  transition-colors
                  relative
                "
              >
                {msg.apprtmentType.ctaProperties} <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>

                {/* animated underline */}
                <span
                  className="
                    absolute left-0 -bottom-1
                    h-0.5 w-0
                    bg-linear-to-r from-[#C9A227] via-[#F2D675] to-[#B8860B]
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </Link>
            </div>
        </div>
    </div>
  )
};

export default AppartmentType;
