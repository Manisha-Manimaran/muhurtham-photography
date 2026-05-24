import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhurtham Photography | Best Wedding Photography & Cinematic Films",
  description:
    "Premium wedding photography studio in Sirkali, Tamil Nadu. Capturing emotions, rituals, candid moments and timeless love stories. Baby shoot, maternity, pre-wedding photography.",
  keywords: [
    "wedding photography",
    "cinematic wedding films",
    "south indian wedding photographer",
    "candid photography",
    "pre-wedding shoot",
    "tamil wedding photographer",
    "muhurtham photography",
    "baby shoot",
    "maternity photography",
    "sirkali photographer",
  ],
  openGraph: {
    title: "Muhurtham Photography | Best Wedding Photography & Cinematic Films",
    description:
      "Capturing emotions, rituals, candid moments and timeless love stories. Based in Sirkali, Tamil Nadu.",
    type: "website",
    locale: "en_IN",
    siteName: "Muhurtham Photography",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-charcoal">
        {children}
      </body>
    </html>
  );
}
