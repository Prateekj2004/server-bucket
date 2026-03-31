"use client";
import { motion } from "framer-motion";
import { 
  Mail, PhoneCall, MapPin, MessageSquare, Send, 
  ShieldCheck, Clock, LifeBuoy, Server 
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* --- HERO --- */}
      <section className="bg-slate-50 py-24 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5"><LifeBuoy size={250}/></div>
        <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
          <span className="text-blue-600 font-black uppercase tracking-widest text-xs bg-blue-100 px-4 py-1.5 rounded-full">24/7/365 NOC Support</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mt-8 tracking-tighter">
            We're Here to <span className="text-blue-600">Help.</span>
          </h1>
          <p className="mt-6 text-slate-500 text-xl font-medium leading-relaxed">
            Whether you need to migrate a massive database cluster or have a billing question, our Level 3 engineers are always on standby.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 -mt-12 relative z-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* --- LEFT: SLA & CONTACT INFO --- */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/50">
               <h3 className="text-2xl font-black text-slate-900 mb-8">Direct Lines</h3>
               <div className="space-y-6">
                 
                 {/* Updated Phone */}
                 <div className="flex gap-4 items-start">
                   <div className="bg-blue-50 text-blue-600 p-3 rounded-2xl"><PhoneCall size={20}/></div>
                   <div>
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</p>
                     <p className="text-lg font-black text-slate-900">+91 9799116204</p>
                   </div>
                 </div>

                 {/* Updated Email */}
                 <div className="flex gap-4 items-start border-t border-slate-100 pt-6">
                   <div className="bg-green-50 text-green-600 p-3 rounded-2xl"><Mail size={20}/></div>
                   <div>
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                     <p className="text-lg font-black text-slate-900">info@titservices.online</p>
                     <p className="text-xs text-green-500 font-bold mt-1">Avg Response: &lt; 2 hours</p>
                   </div>
                 </div>

                 {/* Updated Address */}
                 <div className="flex gap-4 items-start border-t border-slate-100 pt-6">
                   <div className="bg-orange-50 text-orange-600 p-3 rounded-2xl"><MapPin size={20}/></div>
                   <div>
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Address</p>
                     <p className="text-sm font-bold text-slate-700 leading-relaxed">Dausa, Rajasthan,<br/>India</p>
                   </div>
                 </div>

               </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-[40px] text-white shadow-2xl">
               <ShieldCheck className="text-blue-500 h-10 w-10 mb-6" />
               <h3 className="text-xl font-black mb-4">Enterprise SLA</h3>
               <p className="text-sm text-slate-400 leading-relaxed mb-6">
                 All Dedicated and Cluster plans include our premium SLA, guaranteeing 99.99% network uptime and hardware replacement within 4 hours.
               </p>
               <button className="w-full py-3 border border-white/20 rounded-2xl text-sm font-bold hover:bg-white hover:text-slate-900 transition-colors">Download SLA Document</button>
            </div>
          </div>

          {/* --- RIGHT: ENTERPRISE FORM --- */}
          <div className="lg:w-2/3">
            <div className="bg-white p-10 md:p-14 rounded-[50px] border border-slate-100 shadow-sm hover:shadow-2xl transition-shadow duration-500">
              <h3 className="text-3xl font-black text-slate-900 mb-2">Open a Ticket</h3>
              <p className="text-slate-500 mb-10 font-medium">Fill out the form below and an expert will get back to you immediately.</p>
              
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-2">Full Name</label>
                    <input type="text" placeholder="Prateek Jain" className="w-full p-5 bg-slate-50 border border-slate-100 rounded-3xl outline-none focus:border-blue-600/30 focus:bg-white transition-all text-slate-900 font-medium" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-2">Corporate Email</label>
                    <input type="email" placeholder="admin@yourcompany.com" className="w-full p-5 bg-slate-50 border border-slate-100 rounded-3xl outline-none focus:border-blue-600/30 focus:bg-white transition-all text-slate-900 font-medium" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-2">Department</label>
                    <select className="w-full p-5 bg-slate-50 border border-slate-100 rounded-3xl outline-none focus:border-blue-600/30 focus:bg-white transition-all text-slate-900 font-medium appearance-none">
                      <option>Sales & Migrations</option>
                      <option>Technical Support</option>
                      <option>Billing & Upgrades</option>
                      <option>Report Abuse (DMCA)</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-2">Priority Level</label>
                    <select className="w-full p-5 bg-slate-50 border border-slate-100 rounded-3xl outline-none focus:border-blue-600/30 focus:bg-white transition-all text-slate-900 font-medium appearance-none">
                      <option>Low (General Query)</option>
                      <option>Medium (Configuration)</option>
                      <option>High (Service Degraded)</option>
                      <option className="text-red-600 font-bold">Emergency (Server Down)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-2">Message Description</label>
                  <textarea rows={6} placeholder="Include IP addresses, error logs, or specific requirements..." className="w-full p-5 bg-slate-50 border border-slate-100 rounded-3xl outline-none focus:border-blue-600/30 focus:bg-white transition-all text-slate-900 font-medium resize-none" />
                </div>

                <button type="button" className="w-full py-6 bg-blue-600 text-white rounded-3xl font-black text-xl shadow-xl shadow-blue-200 hover:bg-slate-900 hover:shadow-none transition-all flex items-center justify-center gap-3">
                  Submit Secure Ticket <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}