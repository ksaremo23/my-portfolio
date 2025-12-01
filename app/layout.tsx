import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbaseWidget from "@/components/ChatbaseWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leicsha Karen Saremo - Front-End Developer & AI Automation Specialist",
  description: "I help businesses grow using modern web development and no-code AI automations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <ChatbaseWidget />
      </body>
    </html>
  );
}

