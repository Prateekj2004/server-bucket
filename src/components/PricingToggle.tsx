"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function PricingToggle() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="flex flex-col items-center mb-16">
      <div className="flex items-center gap-4 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
        <button 
          onClick={() => setIsYearly(false)}
          className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${!isYearly ? 'bg-white text-blue-600 shadow-md' : 'text-slate-500'}`}
        >
          Monthly
        </button>
        <button 
          onClick={() => setIsYearly(true)}
          className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${isYearly ? 'bg-white text-blue-600 shadow-md' : 'text-slate-500'}`}
        >
          Yearly <span className="ml-1 text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-md">-20%</span>
        </button>
      </div>
      <p className="mt-4 text-xs font-bold text-slate-400 uppercase tracking-tighter">
        {isYearly ? "Billed annually for maximum savings" : "Pay as you go flexibility"}
      </p>
    </div>
  );
}