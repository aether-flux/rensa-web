import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const clashDisplay = localFont({
  src: [
    {path: "../public/fonts/clash_display/ClashDisplay-Extralight.otf", weight: "200", style: "normal"},
    {path: "../public/fonts/clash_display/ClashDisplay-Light.otf", weight: "300", style: "normal"},
    {path: "../public/fonts/clash_display/ClashDisplay-Regular.otf", weight: "400", style: "normal"},
    {path: "../public/fonts/clash_display/ClashDisplay-Medium.otf", weight: "500", style: "normal"},
    {path: "../public/fonts/clash_display/ClashDisplay-Semibold.otf", weight: "600", style: "normal"},
    {path: "../public/fonts/clash_display/ClashDisplay-Bold.otf", weight: "700", style: "normal"},
  ],
  variable: "--font-clash-display",
  display: "swap",
});

const clashGrotesk = localFont({
  src: [
    {path: "../public/fonts/clash_grotesk/ClashGrotesk-Extralight.otf", weight: "200", style: "normal"},
    {path: "../public/fonts/clash_grotesk/ClashGrotesk-Light.otf", weight: "300", style: "normal"},
    {path: "../public/fonts/clash_grotesk/ClashGrotesk-Regular.otf", weight: "400", style: "normal"},
    {path: "../public/fonts/clash_grotesk/ClashGrotesk-Medium.otf", weight: "500", style: "normal"},
    {path: "../public/fonts/clash_grotesk/ClashGrotesk-Semibold.otf", weight: "600", style: "normal"},
    {path: "../public/fonts/clash_grotesk/ClashGrotesk-Bold.otf", weight: "700", style: "normal"},
  ],
  variable: "--font-clash-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ['300', '400', '500'],
  variable: "--font-jetbrains-mono",
  display: 'swap',
  subsets: ['latin'],
});


export const metadata = {
  title: "Rensa - The Minimal Backend",
  description: "Rensa is a powerful yet lightweight backend framework designed for developers who value speed and simplicity.",
  keywords: "rensa, backend, framework, Node.js, node, web, server, fast, performance, scalable, minimal, efficient, middlewares, optimized, routing, trie, javascript, http, router",
  icons: {
    icon: "/images/metadata/rensa-icon.png",
    shortcut: "/images/metadata/rensa-icon.png",
    apple: "/images/metadata/rensa-icon.png"
  },
  openGraph: {
  title: "Rensa - The Minimal Backend Framework",
  description: "Rensa is a powerful yet lightweight backend framework designed for developers who value speed and simplicity.",
  url: "https://rensa.vercel.app",
  siteName: "Rensa",
  images: [
    {
      url: "/images/metadata/og-image.jpg",
      width: 1200,
      height: 360,
      alt: "Rensa - The Minimal Backend Framework"
    }
  ],
  type: "website",
},
twitter: {
  card: "summary_large_image",
  title: "Rensa - The Minimal Backend Framework",
  description: "Rensa is a powerful yet lightweight backend framework designed for developers who value speed and simplicity.",
  images: ["/images/metadata/twitter-image.jpg"],
},
  robots: "index, follow",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Rensa",
      "url": "https://rensa.vercel.app",
      "description": "Rensa is a powerful yet lightweight backend framework designed for developers who value speed and simplicity.",
      "publisher": {
        "@type": "Organization",
        "name": "Rensa",
      }
    })
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="wHBP3UY22MdwxHj2dr8PMLMDNjB3UOYFWdnziByyppg" />
      </head>
      <body
        className={`${clashDisplay.variable} ${clashGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >

        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-87K6WYLCJY`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-87K6WYLCJY', {
              page_path: window.location.pathname,
            });
          `}
        </Script>


        {children}
      </body>
    </html>
  );
}
