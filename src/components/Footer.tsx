import Link from "next/link";
import { Server, Twitter, Github, Linkedin, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-24 pb-12 border-t border-slate-800 text-white">
      {/* Changed lg:grid-cols-6 to lg:grid-cols-5 because we removed the Solutions column */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-xl text-white"><Server size={24} /></div>
            <span className="text-2xl font-black tracking-tighter">SERVER<span className="text-blue-600">BUCKET</span></span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            Enterprise infrastructure for the next generation of developers. 
            High-performance VPS and Dedicated servers with 99.99% uptime, powered by NVMe Gen5.
          </p>
          {/* IMAGE WALA DATA YAHAN UPDATE KIYA HAI */}
          <div className="space-y-3 pt-4">
             <div className="flex items-center gap-3 text-slate-300 text-sm">
               <Phone size={16} className="text-blue-500"/> +91 9799116204
             </div>
             <div className="flex items-center gap-3 text-slate-300 text-sm">
               <Mail size={16} className="text-blue-500"/> info@titservices.online
             </div>
             <div className="flex items-center gap-3 text-slate-300 text-sm">
               <MapPin size={16} className="text-blue-500"/> Dausa, Rajasthan, India
             </div>
          </div>
        </div>

        {/* Links Column 1: Services (Updated) */}
        <div>
          <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Services</h4>
          <ul className="space-y-4 text-sm font-medium text-slate-400">
            <li><Link href="/vps" className="hover:text-blue-500 transition-colors">Linux NVMe VPS</Link></li>
            <li><Link href="/cluster" className="hover:text-blue-500 transition-colors">High-Availability Nodes</Link></li>
            <li><Link href="/remote-it-support" className="hover:text-blue-500 transition-colors">Remote IT Support</Link></li>
          </ul>
        </div>

        {/* Links Column 2: Company */}
        <div>
          <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Company</h4>
          <ul className="space-y-4 text-sm font-medium text-slate-400">
            <li><Link href="/about" className="hover:text-blue-500 transition-colors">Our Story</Link></li>
            <li><Link href="/locations" className="hover:text-blue-500 transition-colors">Data Centers</Link></li>
            <li><Link href="/contact" className="hover:text-blue-500 transition-colors">Contact Us</Link></li>
            <li><Link href="/blog" className="hover:text-blue-500 transition-colors">Knowledge Base</Link></li>
            <li><Link href="#" className="hover:text-blue-500 transition-colors">System Status</Link></li>
          </ul>
        </div>

        {/* Links Column 3: Legal (Updated) */}
        <div>
          <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Legal</h4>
          <ul className="space-y-4 text-sm font-medium text-slate-400">
            <li><Link href="https://titservices.online/privacy.html" className="hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
            <li><Link href="https://titservices.online/terms.html" className="hover:text-blue-500 transition-colors">Terms & Conditions</Link></li>
            <li><Link href="https://titservices.online/spam.html" className="hover:text-blue-500 transition-colors">Anti Spam Policy</Link></li>
            <li><Link href="https://titservices.online/gdpr.html" className="hover:text-blue-500 transition-colors">GDPR</Link></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-slate-500 font-bold">© 2026 Server Bucket Inc. All rights reserved.</p>
        <div className="flex gap-4">
           <Link href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={20} /></Link>
           <Link href="#" className="text-slate-500 hover:text-white transition-colors"><Github size={20} /></Link>
           <Link href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></Link>
        </div>
      </div>
    </footer>
  );
}