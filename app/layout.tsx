import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://perdana-jurutera-perunding.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Perdana Jurutera Perunding | Civil & Structural Engineers Sabah",
    template: "%s | Perdana Jurutera Perunding",
  },
  description:
    "Perdana Jurutera Perunding is a Sabah based civil and structural engineering consultancy specialising in bridges, roads, infrastructure, buildings and project advisory services.",
  keywords: [
    "Perdana Jurutera Perunding",
    "PJP",
    "civil engineer Sabah",
    "structural engineer Sabah",
    "bridge engineering Sabah",
    "infrastructure engineering Malaysia",
    "Kota Kinabalu engineering consultant",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Perdana Jurutera Perunding | Civil & Structural Engineers Sabah",
    description:
      "Sabah based civil and structural engineering consultancy specialising in bridges, roads, infrastructure, buildings and project advisory services.",
    url: siteUrl,
    siteName: "Perdana Jurutera Perunding",
    locale: "en_MY",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GPSN3P9KS1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GPSN3P9KS1');
          `}
        </Script>

        <header className="border-b border-zinc-200 bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:px-6 md:py-6">
            <a href="/" className="flex shrink-0 items-center">
              <img src="/images/Logo/PJPLogoVector.svg" alt="Perdana Jurutera Perunding logo" className="h-14 w-auto md:h-16" />
            </a>
            <nav className="hidden gap-8 text-sm font-medium text-zinc-900 md:flex">
              <a href="/#about" className="transition hover:opacity-60">About</a>
              <a href="/#expertise" className="transition hover:opacity-60">Expertise</a>
              <a href="/#projects" className="transition hover:opacity-60">Projects</a>
              <a href="/#contact" className="transition hover:opacity-60">Contact</a>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
