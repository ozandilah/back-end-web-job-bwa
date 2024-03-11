import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/layouts/Sidebar";
import Header from "@/components/layouts/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
