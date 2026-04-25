"use client";
import { User } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="bg-white">

      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tighter uppercase">
            Our <span className="text-blue-500">Team</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto">
            We take pride in our team of highly skilled and dedicated professionals — the true heroes behind our success. Their expertise, commitment, and innovative approach help us deliver faster, smarter, and more efficient solutions for our clients.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Jitendra Sharma", role: "Founder and Proprietor" },
              { name: "Harish Mishra", role: "Head of IT Infrastructure" },
              { name: "Deepak Sharma", role: "Head of Business Development" },
              { name: "Manisha Sharma", role: "Co-Founder and Administrator" }
            ].map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center group bg-slate-50 p-8 rounded-[32px] border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center mb-5 overflow-hidden border border-slate-200 shadow-sm">
                  <User className="w-12 h-12 text-slate-300" />
                </div>
                <h3 className="text-xl font-black text-slate-900">{member.name}</h3>
                <p className="text-sm font-bold text-blue-600 mt-2 uppercase tracking-wide">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}