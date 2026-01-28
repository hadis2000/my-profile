import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const myFont = localFont({ src: "./asset/font/KaushanScript-Regular.otf" });

export const metadata: Metadata = {
  title: "پروفایل من",
  description: "رزومه ی من",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body className={`bg-gradient-pink-blue ${myFont.className}`}>
        {children}
      </body>
    </html>
  );
}
