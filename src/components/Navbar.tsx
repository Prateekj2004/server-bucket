"use client";
import { useState } from "react";
import Link from "next/link";
import { Server, Menu, X, Globe, Layers, MapPin, Headset } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "VPS", href: "/vps", icon: <Globe className="h-4 w-4" /> },
    { name: "Cluster", href: "/cluster", icon: <Layers className="h-4 w-4" /> },
    { name: "Locations", href: "/locations", icon: <MapPin className="h-4 w-4" /> },
    // NAYA LINK ADD KIYA HAI YAHAN 👇
    { name: "IT Support", href: "/remote-it-support", icon: <Headset className="h-4 w-4" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-12 transition-transform">
            <Server className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">
            Server<span className="text-blue-600">Bucket</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-[14px] font-bold text-slate-600">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-blue-600 transition-colors flex items-center gap-1.5">
              {link.icon} {link.name}
            </Link>
          ))}
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden md:block text-sm font-bold text-slate-900 px-4">Support</Link>
          <Link href="/vps" className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-blue-100 hover:bg-slate-900 transition-all">
            Get Started
          </Link>
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 font-bold text-slate-600">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                  {link.icon} {link.name}
                </Link>
              ))}
              <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Support</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}