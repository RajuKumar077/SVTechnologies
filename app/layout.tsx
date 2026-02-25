import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SV Technologies Project-Based Learning & Placement",
  description: "Project-Based Learning & Placement Support Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
