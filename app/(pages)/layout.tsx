'use client'
import Navbar from "@/app/components/navbar/navbar";
import { DesignSystemProvider } from "@teamsparta/design-system";
import { designSystemTheme } from "@/app/components/common.style";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DesignSystemProvider
      breakpoints={designSystemTheme.breakpoints}
      theme={{
        colors: designSystemTheme.colors,
        mode: 'light',
      }}>
      <Navbar />
      {children}
    </DesignSystemProvider>
  );
}
