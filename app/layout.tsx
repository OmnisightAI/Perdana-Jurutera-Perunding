import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Perdana Jurutera Perunding",
  description: "Engineering consulting across Sabah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="border-b border-zinc-200 bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:px-6 md:py-6">
            <a href="/" className="flex shrink-0 items-center">
              <img
                src="/images/Logo/PJPLogoVector.svg"
                alt="Perdana Jurutera Perunding logo"
                className="h-14 w-auto md:h-16"
              />
            </a>

            <nav className="hidden gap-8 text-sm font-medium text-zinc-900 md:flex">
              <a href="/#about" className="transition hover:opacity-60">
                About
              </a>
              <a href="/#expertise" className="transition hover:opacity-60">
                Expertise
              </a>
              <a href="/#projects" className="transition hover:opacity-60">
                Projects
              </a>
              <a href="/#contact" className="transition hover:opacity-60">
                Contact
              </a>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
