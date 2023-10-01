import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Starman",
  description: "Gallery for NASA Image of the Day.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${serif.variable}`}>
      <body className="h-full w-full">{children}</body>
    </html>
  );
}
