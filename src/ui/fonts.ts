import { Inter, Lusitana } from "next/font/google";

export const lustiana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});
