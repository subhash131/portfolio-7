import type { Metadata } from "next";
import "./globals.css";
import { SparklesCore } from "@/components/hero/particles-container";
import { inter } from "@/fonts";

export const metadata: Metadata = {
  title: "Subhash Portfolio",
  description: "Project by Subhash Nayak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black overflow-y-scroll overflow-x-hidden min-h-[200vh] relative text-white`}
      >
        <SparklesCore
          className="w-full h-full absolute"
          particleDensity={5}
          linkDistance={250}
        />
        {children}
      </body>
    </html>
  );
}
