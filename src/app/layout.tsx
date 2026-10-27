import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://manivada.com"),
  title: "മണിവട | ചൂട് ചൂട് വടേ — South Indian Tea & Vada",
  description:
    "നല്ല ചായയും തമിഴ് ശൈലിയിലുള്ള രുചികരമായ വടയും. മണിവട - ചൂട് ചൂട് വടേ! Authentic South Indian tea-kadai snacks and piping hot chai.",
  keywords: [
    "Mani Vada",
    "മണിവട",
    "ചൂട് ചൂട് വടേ",
    "tea shop",
    "vada",
    "kerala tea kadai",
    "tamil tea stall",
    "idli",
    "medu vada",
    "pazham pori",
    "chai",
  ],
  authors: [{ name: "Mani Vada" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    title: "മണിവട | ചൂട് ചൂട് വടേ",
    description:
      "നല്ല ചായയും തമിഴ് ശൈലിയിലുള്ള രുചികരമായ വടയും. ഓരോ ദിവസവും നിങ്ങളുടെ ചായസമയത്തിന് ഒരു നാടൻ സന്തോഷം.",
    images: [
      {
        url: "/images/mani-vada-logo.png",
        width: 600,
        height: 600,
        alt: "മണിവട ലോഗോ",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#123D2C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ml">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body id="home">{children}</body>
    </html>
  );
}
