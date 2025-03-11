import Script from 'next/script'

import Footer from "./components/layout/footer";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/react"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Volumize AI",
  description: "3D model by AI for free in less that 3 minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-BRGM3T2Y3K"
          />

          <Script id="google-analytics">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-BRGM3T2Y3K');
            `}
          </Script>

      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <Footer></Footer>
      </body>
    </html>
  );
}
