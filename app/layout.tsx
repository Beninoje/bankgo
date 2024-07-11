import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable:'--font-inter' });
const imbPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight:['400','700'],
  variable:'--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "bankgo",
  description: "bankgo is a modern banking platform for everyone",
  icons:{
    icon:'/icons/bankgo_logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${imbPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
