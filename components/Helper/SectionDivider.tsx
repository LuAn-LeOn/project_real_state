import React from "react";

type Props = {
  from?: string; // color arriba
  to?: string;   // color abajo
  height?: string;
};

const SectionDivider = ({
  from = "rgba(0,0,0,0.00)",
  to = "#0b0f14",
  height = "h-24",
}: Props) => {
  return (
    <div
      className={`pointer-events-none absolute left-0 right-0 top-0 ${height}`}
      style={{
        background: `linear-gradient(to bottom, ${from}, ${to})`,
      }}
    />
  );
};

export default SectionDivider;