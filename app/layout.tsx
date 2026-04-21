import type { Metadata } from "next";
import { Anton, Condiment } from "next/font/google";
import "./globals.css";
import LenisWrapper from "@/components/LenisWrapper";

import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import SoundManager from "@/components/SoundManager";
import { LoadingProvider } from "@/context/LoadingContext";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-grotesk",
});

const condiment = Condiment({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-condiment",
});

export const metadata: Metadata = {
  title: "Abhinav · Portfolio",
  description: "Beyond earth and familiar boundaries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${condiment.variable} antialiased bg-bg-main text-cream flex min-h-screen flex-col`}
      >
        <LoadingProvider>
          <LoadingScreen />
          <SoundManager />
          <CustomCursor />
          <div className="fixed inset-0 z-50 pointer-events-none mix-blend-lighten opacity-60 bg-[url('/texture.png')] bg-cover bg-center" />
          <LenisWrapper>{children}</LenisWrapper>
        </LoadingProvider>
      </body>
    </html>
  );
}
