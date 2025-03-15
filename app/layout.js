import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast"

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TT Fast",
  description: "Gerencie todas suas contas em um só lugar!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="fantasy" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <Toaster />
        </div>
        {children}
      </body>
    </html>
  );
}
