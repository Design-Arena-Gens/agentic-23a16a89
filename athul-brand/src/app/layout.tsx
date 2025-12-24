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
  title: "InkBridge Studio | Athul's Design-to-Print Lab",
  description:
    "Athul's online-first design and print studio built on Crystal Kolors' production power. Explore offers, brand positioning, and social media playbooks tailored for Kerala's creators.",
  openGraph: {
    title: "InkBridge Studio | Athul's Design-to-Print Lab",
    description:
      "High-impact brand identity, packaging, and print solutions from Kochi's Crystal Kolors designer Athul. View the launch roadmap, signature offers, and social growth plan.",
    url: "https://agentic-23a16a89.vercel.app",
    siteName: "InkBridge Studio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InkBridge Studio | Athul's Design-to-Print Lab",
    description:
      "Online-first brand and print studio blueprint crafted by Athul at Crystal Kolors. Get the offers, strategy, and launch plan.",
  },
  keywords: [
    "Athul",
    "Crystal Kolors",
    "Kochi designer",
    "print design Kerala",
    "brand identity Kochi",
    "printing studio online",
    "social media strategy",
  ],
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
        {children}
      </body>
    </html>
  );
}
