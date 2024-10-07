import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
// import { DesignSystemProvider } from '@teamsparta/design-system';
// import { designSystemTheme } from '@/app/components/common.style';

// import Navbar from "./components/navbar/navbar";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "myfront",
  description: "팀스파르타 프론트 온보딩",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>
          {children}
        </body>
    </html>
  );
}
