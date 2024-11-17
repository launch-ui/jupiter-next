import type { Metadata } from "next";
import "@/app/globals.css";
import { inter } from "@/lib/fonts";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.getStartedUrl),
  description: siteConfig.description,
  keywords: [
    "Landing page template",
    "Components",
    "Shadcn",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Radix UI",
  ],
  authors: [
    {
      name: "Mikolaj Dobrucki",
      url: "https://mikolajdobrucki.com",
    },
  ],
  creator: "mikolajdobrucki",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.getStartedUrl,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@mikolajdobrucki",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
