import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "happy birthday paru !",
  description: "a whole year older. still hasn't disclosed the fitness function.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={caveat.variable}>
      <body className="bg-cream text-ink font-hand antialiased">{children}</body>
    </html>
  );
}
