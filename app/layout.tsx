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
  title: "Satellite",
  description: "View beautiful images of outerspace.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${serif.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
