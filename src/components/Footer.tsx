import Link from "next/link";
import { Server, Twitter, Github, Linkedin, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-24 pb-12 border-t border-slate-800 text-white">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
        
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
          <div className="space-y-3 pt-4">
             <div className="flex items-center gap-3 text-slate-300 text-sm"><Phone size={16} className="text-blue-500"/> +91 90156 81102</div>
             <div className="flex items-center gap-3 text-slate-300 text-sm"><Mail size={16} className="text-blue-500"/> support@serverbucket.com</div>
             <div className="flex items-center gap-3 text-slate-300 text-sm"><MapPin size={16} className="text-blue-500"/> Delhi, India (Headquarters)</div>
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Servers</h4>
          <ul className="space-y-4 text-sm font-medium text-slate-400">
            <li><Link href="/vps" className="hover:text-blue-500 transition-colors">Linux NVMe VPS</Link></li>
            <li><Link href="/vps" className="hover:text-blue-500 transition-colors">Windows RDP VPS</Link></li>
            <li><Link href="/dedicated" className="hover:text-blue-500 transition-colors">Bare Metal Servers</Link></li>
            <li><Link href="/cluster" className="hover:text-blue-500 transition-colors">High-Availability Nodes</Link></li>
            <li><Link href="/colocation" className="hover:text-blue-500 transition-colors">Rack Colocation</Link></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Solutions</h4>
          <ul className="space-y-4 text-sm font-medium text-slate-400">
            <li><Link href="#" className="hover:text-blue-500 transition-colors">E-Commerce Hosting</Link></li>
            <li><Link href="#" className="hover:text-blue-500 transition-colors">Database Clusters</Link></li>
            <li><Link href="#" className="hover:text-blue-500 transition-colors">Gaming Servers</Link></li>
            <li><Link href="#" className="hover:text-blue-500 transition-colors">Forex VPS</Link></li>
            <li><Link href="#" className="hover:text-blue-500 transition-colors">Storage Servers</Link></li>
          </ul>
        </div>

        {/* Links Column 3 */}
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

        {/* Links Column 4 */}
        <div>
          <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Legal</h4>
          <ul className="space-y-4 text-sm font-medium text-slate-400">
            <li><Link href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-blue-500 transition-colors">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-blue-500 transition-colors">Refund Policy</Link></li>
            <li><Link href="#" className="hover:text-blue-500 transition-colors">SLA Agreement</Link></li>
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