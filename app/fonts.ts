import localFont from "next/font/local";

export const cinzelFont = localFont({
  src: [
    { path: "../public/Fonts/Cinzel-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/Fonts/Cinzel-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/Fonts/Cinzel-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-cinzel",
  display: "swap",
});
