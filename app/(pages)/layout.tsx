import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/app/components/navbar/navbar";

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
