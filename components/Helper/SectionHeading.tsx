import React from 'react'
import { t, type Locale } from "@/src/i18n";

const locale: Locale = "en";
const msg = t(locale);

type Props = {
    heading: string;
}

const SectionHeading = ({ heading }: Props) => {
  return <div>
    <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">{heading}</h1>
    <p className="text-sm text-gray-700">{msg.sectionHeading.sectionHeading}</p>
  </div>
}

export default SectionHeading
