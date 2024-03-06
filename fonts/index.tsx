import { Antonio, Poppins, Inter, Manrope } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["devanagari"],
});

export const antonio = Antonio({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const manrope = Manrope({
  weight: ["800"],
  subsets: ["latin"],
});
