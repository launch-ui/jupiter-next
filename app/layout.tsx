import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/components/fonts";

export const metadata: Metadata = {
  title: "Mercury",
  description: "Landing page template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-background`}>
        {children}
      </body>
    </html>
  );
}
