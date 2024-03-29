import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const UrbanistF = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skynn",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={UrbanistF.className}>{children}</body>
    </html>
  );
}
