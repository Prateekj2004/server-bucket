import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Server Bucket | Enterprise Hosting Solutions",
    template: "%s | Server Bucket"
  },
  description: "High-performance VPS, Bare Metal Dedicated Servers, and Cloud solutions powered by NVMe Gen5 and 10Gbps uplinks.",
  keywords: ["VPS Hosting", "Dedicated Servers", "Server Bucket", "Cloud Hosting India", "Serverwala Alternative"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} selection:bg-blue-100 selection:text-blue-600 antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}