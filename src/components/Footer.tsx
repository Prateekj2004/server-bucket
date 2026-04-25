import Link from "next/link";
import { Twitter, Github, Linkedin, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-24 pb-12 border-t border-slate-800 text-white">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        
        <div className="lg:col-span-2 space-y-6">
          <Link href="/" className="flex items-center">
            <img 
              src="titlogo.png" 
              alt="Titservices Logo" 
              className="h-12 w-auto" 
            />
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            Titservices | Enterprise Hosting and IT Solutions
          </p>
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

        <div>
          <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Services</h4>
          <ul className="space-y-4 text-sm font-medium text-slate-400">
            <li><Link href="/vps" className="hover:text-blue-500 transition-colors">Linux VPS</Link></li>
            <li><Link href="/cluster" className="hover:text-blue-500 transition-colors">High-Availability Nodes</Link></li>
            <li><Link href="/remote-it-support" className="hover:text-blue-500 transition-colors">Remote IT Support</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Company</h4>
          <ul className="space-y-4 text-sm font-medium text-slate-400">
            <li><Link href="/about" className="hover:text-blue-500 transition-colors">Our Team</Link></li>
            <li><Link href="/locations" className="hover:text-blue-500 transition-colors">Data Centers</Link></li>
            <li><Link href="/contact" className="hover:text-blue-500 transition-colors">Contact Us</Link></li>
            <li><Link href="/blog" className="hover:text-blue-500 transition-colors">Knowledge Base</Link></li>
            <li><Link href="#" className="hover:text-blue-500 transition-colors">System Status</Link></li>
          </ul>
        </div>
<div>
          <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Legal</h4>
          <ul className="space-y-4 text-sm font-medium text-slate-400">
            <li><Link href="/privacy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-blue-500 transition-colors">Terms & Conditions</Link></li>
            <li><Link href="/spam" className="hover:text-blue-500 transition-colors">Anti Spam Policy</Link></li>
            <li><Link href="/gdpr" className="hover:text-blue-500 transition-colors">GDPR</Link></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex-1">
           <p className="text-xs text-slate-500 font-bold">© 2026 Titservices. All rights reserved.</p>
        </div>
        <div className="flex-1 text-center">
           <p className="text-xs text-slate-400 font-bold bg-slate-800/50 inline-block px-4 py-1.5 rounded-full border border-slate-700">GSTIN - 08CODPS5125M1ZI</p>
        </div>
        <div className="flex-1 flex justify-end gap-4">
           <Link href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={20} /></Link>
           <Link href="#" className="text-slate-500 hover:text-white transition-colors"><Github size={20} /></Link>
           <Link href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></Link>
        </div>
      </div>
    </footer>
  );
}