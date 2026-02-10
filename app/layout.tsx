import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Automation Agency",
  description: "Premium AI automation systems for scaling high-growth businesses"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
