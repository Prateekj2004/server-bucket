"use client";
import React from "react";
import { MessageCircle, CheckCircle } from "lucide-react"; 

export default function RemoteITSupport() {
  const supportPlans = [
    {
      title: "AWS Cloud Support",
      price: "₹2999",
      total: "₹3538.82",
      features: [
        "AWS",
        "EC2",
        "VPC",
        "S3",
        "RDS",
        "Load Balancer",
        "Monitoring",
      ],
      whatsappMsg: "Hi, I am interested in AWS Cloud Support plan.",
      isPopular: false,
    },
    {
      title: "Linux Server Support",
      price: "₹2499",
      total: "₹2948.82",
      features: [
        "Shared Server",
        "Virtual Server",
        "Dedicated Server",
        "Monitoring",
        "Load Balancer",
        "Email Server",
        "Storage Server",
      ],
      whatsappMsg: "Hi, I am interested in Linux Server Support plan.",
      isPopular: true, // Highlights this card in your dark slate theme
    },
    {
      title: "Azure Cloud Support",
      price: "₹2999",
      total: "₹3538.82",
      features: [
        "Azure VM",
        "Networking",
        "Storage",
        "Security",
        "Load Balancer",
        "Blob Account",
        "Azure Database",
      ],
      whatsappMsg: "Hi, I am interested in Azure Cloud Support plan.",
      isPopular: false,
    },
  ];

  // Replace with your actual WhatsApp business number
  const WHATSAPP_NUMBER = "919876543210"; 

  return (
    <div className="min-h-screen bg-slate-50 py-32 font-sans relative">
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Remote IT <span className="text-blue-600">Support</span>
          </h1>
          <p className="mt-4 text-slate-500 font-medium max-w-2xl mx-auto">
            Get expert, round-the-clock management and support for your cloud infrastructure and servers.
          </p>
        </div>

        {/* Pricing Cards Grid (Matched to your VPS theme) */}
        <div className="grid md:grid-cols-3 gap-6 xl:gap-8 items-center">
          {supportPlans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative flex flex-col p-8 xl:p-10 rounded-3xl transition-all duration-300 h-full hover:-translate-y-2 ${
                plan.isPopular 
                  ? "bg-slate-900 text-white shadow-2xl shadow-blue-900/20 border border-slate-800 lg:-mt-4 lg:mb-4" 
                  : "bg-white text-slate-900 shadow-lg shadow-slate-200/50 border border-slate-100"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg whitespace-nowrap">
                  Most Popular
                </div>
              )}
              
              {/* Card Header & Price */}
              <div className="text-center border-b border-slate-200/20 pb-8 mb-8">
                <h3 className="text-2xl font-black mb-6">{plan.title}</h3>
                
                <div className="flex justify-center items-end gap-1">
                  <span className="text-4xl xl:text-5xl font-black tracking-tighter">{plan.price}</span>
                  <span className={`text-sm font-bold mb-2 ${plan.isPopular ? "text-slate-400" : "text-slate-500"}`}>/month</span>
                </div>
                <div className={`text-sm font-bold mt-3 ${plan.isPopular ? "text-slate-400" : "text-slate-500"}`}>
                  Total w/ Tax: {plan.total}
                </div>
              </div>
              
              {/* Features List */}
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-medium text-sm xl:text-base">
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 ${plan.isPopular ? "text-blue-500" : "text-blue-600"}`} /> 
                    <span className={plan.isPopular ? "text-slate-300" : "text-slate-600"}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <a
                href={``}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full mt-auto py-4 rounded-2xl font-black tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.isPopular 
                    ? "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/30" 
                    : "bg-slate-100 text-slate-900 hover:bg-slate-900 hover:text-white"
                }`}
              >
                <MessageCircle size={20} />
                Order on WhatsApp
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}