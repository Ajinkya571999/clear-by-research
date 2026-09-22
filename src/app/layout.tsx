import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

// Load the modern Sans font for body text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Load the elegant Serif font for headings
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clearby Research | PhD Research Guidance",
  description: "Premier academic advisory firm for PhD and Master's students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body 
        className="min-h-full flex flex-col bg-brand-light text-brand-dark font-sans"
        suppressHydrationWarning={true}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}