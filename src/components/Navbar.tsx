"use client";
import { useState } from "react";
import Link from "next/link";
import { Server, Menu, X, Globe, Layers, MapPin, Headset } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Linux VPS", href: "/vps", icon: <Globe className="h-4 w-4" /> },
    { name: "Cluster", href: "/cluster", icon: <Layers className="h-4 w-4" /> },
    { name: "Locations", href: "/locations", icon: <MapPin className="h-4 w-4" /> },
    { name: "IT Support", href: "/remote-it-support", icon: <Headset className="h-4 w-4" /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        
        {/* UPDATED LOGO SECTION 👇 */}
        <Link href="/" className="flex items-center group">
          <img 
            src="titlogo.png" 
            alt="Logo" 
            className="h-15 w-auto group-hover:scale-105 transition-transform" 
          />
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
          {/* Replaced Support with Login */}
          <Link href="https://management.titservices.online:10000/" className="hidden md:block text-sm font-bold text-slate-900 px-4 hover:text-blue-600 transition-colors">
            Login
          </Link>
          {/* Replaced Get Started with Billing */}
          <Link href="https://billing.titservices.online/" className="hidden md:block text-sm font-bold text-slate-900 px-4 hover:text-blue-600 transition-colors">
            Billing
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
              {/* Added Mobile Links for Login & Billing */}
              <Link href="https://manage.titservices.online/" onClick={() => setIsOpen(false)}>Login</Link>
              <Link href="https://billing.titservices.online/" onClick={() => setIsOpen(false)}>Billing</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}