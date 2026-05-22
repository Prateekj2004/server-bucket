"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, HardDrive, Network, Zap, 
  Monitor, Settings, RefreshCw, BarChart, CheckCircle2, MessageCircle, TrendingUp, X
} from "lucide-react";

interface VPSPlan {
  name: string;
  cpu: string;
  ram: string;
  ssd: string;
  bw: string;
  basePrice: number;
  popular?: boolean;
}

const vpsPlans: VPSPlan[] = [
  { name: "KVM VPS-1", cpu: "2 Cores", ram: "4GB", ssd: "100GB NVMe", bw: "Unlimited", basePrice: 1499 },
  { name: "KVM VPS-2", cpu: "4 Cores", ram: "8GB", ssd: "150GB NVMe", bw: "Unlimited", basePrice: 1999, popular: true },
  { name: "KVM VPS-3", cpu: "6 Cores", ram: "16GB", ssd: "200GB NVMe", bw: "Unlimited", basePrice: 2499 },
  { name: "KVM VPS-4", cpu: "8 Cores", ram: "32GB", ssd: "250GB NVMe", bw: "Unlimited", basePrice: 2999 },
];

export default function VPSPage() {
  const WHATSAPP_NUMBER: string = "919876543210";
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [includeGST, setIncludeGST] = useState<boolean>(false);
  const [exchangeRate, setExchangeRate] = useState<number>(83.50);
  const [isRateLive, setIsRateLive] = useState<boolean>(false);

  // Modal States
  const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<VPSPlan | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    domain: "",
    country: "",
    serverLocation: "INDIA", // Default selection
    comment: ""
  });

  useEffect(() => {
    const fetchLiveRate = async () => {
      try {
        const response = await fetch("/api/rate");
        const data = await response.json();
        if (data.rate) {
          setExchangeRate(data.rate);
          setIsRateLive(true);
        }
      } catch (err) {
        console.error("Failed to fetch live rate");
      }
    };
    fetchLiveRate();
  }, []);

  const GST_RATE: number = 0.18;

  const calculatePrice = (basePrice: number): string => {
    let finalPrice = basePrice;
    if (includeGST) {
      finalPrice = finalPrice + (finalPrice * GST_RATE);
    }
    
    if (currency === "USD") {
      finalPrice = finalPrice / exchangeRate;
      return "$" + finalPrice.toFixed(2);
    }
    
    return "₹" + Math.round(finalPrice).toString();
  };

  // Handlers for the Modal and Form
  const handleOrderClick = (plan: VPSPlan) => {
    setSelectedPlan(plan);
    setIsOrderModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsOrderModalOpen(false);
    setSelectedPlan(null);
    setFormData({ 
      firstName: "", 
      lastName: "", 
      email: "", 
      phone: "", 
      domain: "", 
      country: "", 
      serverLocation: "INDIA", 
      comment: "" 
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlan) return;

    const price = calculatePrice(selectedPlan.basePrice);
    const gstText = includeGST ? "including GST" : "excluding GST";

    const message = `*NEW ORDER REQUEST*%0A%0A` +
      `*PLAN DETAILS:*%0A` +
      `- Plan: ${selectedPlan.name}%0A` +
      `- Server Location: ${formData.serverLocation}%0A` +
      `- Price: ${price} (${currency}, ${gstText})%0A%0A` +
      `*CUSTOMER DETAILS:*%0A` +
      `- Name: ${formData.firstName} ${formData.lastName}%0A` +
      `- Email: ${formData.email}%0A` +
      `- Mobile: ${formData.phone}%0A` +
      `- Country: ${formData.country}%0A` +
      `- Company/Domain: ${formData.domain}%0A` +
      `- Comment: ${formData.comment ? formData.comment : 'None'}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    handleCloseModal();
  };

  return (
    <div className="bg-[#F0EEE9]">
      
      <section className="py-12 border-b border-slate-200/50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <span className="text-blue-600 font-black uppercase tracking-widest text-xs bg-blue-100 px-4 py-1.5 rounded-full">High Density Compute</span>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mt-4 leading-tight tracking-tighter">
            Next-Gen <span className="text-blue-600">NVMe VPS</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed font-medium">
            Unleash the full potential of KVM virtualization. Optimized for high-traffic websites, databases, and heavy enterprise applications.
          </p>
        </div>
      </section>

      <section className="py-12 container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6 bg-white p-3 rounded-3xl shadow-sm border border-slate-200 max-w-3xl mx-auto">
          
          <div className="flex items-center bg-slate-100 p-1.5 rounded-2xl">
            <button 
              onClick={() => setCurrency("INR")}
              className={`px-5 py-2 rounded-xl font-bold text-sm transition-all ${currency === "INR" ? "bg-white text-slate-900 shadow-md" : "text-slate-500 hover:text-slate-900"}`}
            >
              INR 
            </button>
            <button 
              onClick={() => setCurrency("USD")}
              className={`px-5 py-2 rounded-xl font-bold text-sm transition-all ${currency === "USD" ? "bg-white text-slate-900 shadow-md" : "text-slate-500 hover:text-slate-900"}`}
            >
              USD
            </button>
          </div>

          <div className="hidden md:block w-px h-6 bg-slate-200"></div>

          <div className="flex items-center bg-slate-100 p-1.5 rounded-2xl">
            <button 
              onClick={() => setIncludeGST(false)}
              className={`px-5 py-2 rounded-xl font-bold text-sm transition-all ${!includeGST ? "bg-white text-slate-900 shadow-md" : "text-slate-500 hover:text-slate-900"}`}
            >
              Exclude GST
            </button>
            <button 
              onClick={() => setIncludeGST(true)}
              className={`px-5 py-2 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${includeGST ? "bg-white text-blue-600 shadow-md" : "text-slate-500 hover:text-slate-900"}`}
            >
              Include 18% GST
            </button>
          </div>
        </div>

        <div className="text-center mb-10 h-6">
          {currency === "USD" && isRateLive && (
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              <TrendingUp size={14} /> Live Rate: 1 USD = ₹{exchangeRate.toFixed(2)}
            </span>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vpsPlans.map((plan, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className={`relative p-6 rounded-[24px] border-2 pt-10 ${plan.popular ? 'border-blue-600 bg-blue-50/20 shadow-xl shadow-blue-100' : 'border-slate-100 bg-white shadow-sm hover:shadow-lg'} transition-all flex flex-col`}
            >
              <div className="absolute -top-3.5 right-0 left-0 flex justify-center">
                 <span className="bg-emerald-100 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1 shadow-sm">
                    <Settings size={12} /> Managed Service
                 </span>
              </div>
              
              <div>
                <div className="h-6 mb-2 text-center">
                  {plan.popular && <span className="bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase inline-block">Most Recommended</span>}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-1 text-center">{plan.name}</h3>
                <div className="text-3xl font-black text-slate-900 mt-2 mb-1 text-center">
                  {calculatePrice(plan.basePrice)}
                  <span className="text-sm font-medium text-slate-400">/mo</span>
                </div>
                <div className="text-xs font-medium text-slate-400 mb-4 h-4 text-center">
                  {includeGST ? "Including 18% GST" : "Excluding GST"}
                </div>
                
                <div className="space-y-3 mb-6 border-t border-slate-100 pt-6">
                  <div className="flex items-center justify-between text-sm font-bold">
                    <span className="text-slate-500 flex items-center gap-2"><Cpu size={16} className="text-blue-600"/> vCPU</span>
                    <span className="text-slate-900">{plan.cpu}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-bold">
                    <span className="text-slate-500 flex items-center gap-2"><Network size={16} className="text-blue-600"/> RAM</span>
                    <span className="text-slate-900">{plan.ram}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-bold">
                    <span className="text-slate-500 flex items-center gap-2"><HardDrive size={16} className="text-blue-600"/> Storage</span>
                    <span className="text-slate-900">{plan.ssd}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-bold">
                    <span className="text-slate-500 flex items-center gap-2"><Zap size={16} className="text-blue-600"/> Bandwidth</span>
                    <span className="text-slate-900">{plan.bw}</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => handleOrderClick(plan)}
                className={`w-full py-3 rounded-xl font-black text-sm shadow-md transition-all mt-auto flex items-center justify-center gap-2 ${plan.popular ? 'bg-blue-600 text-white hover:bg-slate-900' : 'bg-slate-900 text-white hover:bg-blue-600'}`}
              >
                Order Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-12 border-t border-slate-200/50">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-4">Advanced Server <br /><span className="text-blue-600">Control Panel</span></h2>
            <p className="text-slate-600 mb-8 text-base">Manage your infrastructure effortlessly with our custom-built dashboard or via our robust developer API.</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Monitor />, title: "Remote Console", desc: "Full VNC/SSH access directly from your browser." },
                { icon: <RefreshCw />, title: "Instant OS Reload", desc: "Change OS with one click." },
                { icon: <BarChart />, title: "Usage Analytics", desc: "Monitor bandwidth, CPU, and RAM in real-time." },
                { icon: <Settings />, title: "API Control", desc: "Full infrastructure control via our RESTful API." },
              ].map((f, i) => (
                <div key={i} className="space-y-2 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="h-10 w-10 bg-blue-50 text-blue-600 flex items-center justify-center rounded-lg">{f.icon}</div>
                  <h4 className="font-bold text-slate-900 text-sm">{f.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-8 bg-[#0f172a] rounded-[32px] shadow-xl relative">
             <div className="absolute top-4 left-5 flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
             </div>
             <div className="mt-4 font-mono text-xs leading-loose">
                <p className="text-blue-400">$ serverbucket login --api-key=xxxxxxxx</p>
                <p className="text-slate-300">Authenticated as: admin@serverbucket.com</p>
                <br />
                <p className="text-white">$ serverbucket deploy --plan=Linux-Server-2</p>
                <p className="text-slate-400">Provisioning node... [████████████████] 100%</p>
                <p className="text-green-400 flex items-center gap-2"><CheckCircle2 size={14}/> SUCCESS: Instance deployed in 52s.</p>
                <br />
                <p className="text-white">$ serverbucket status</p>
                <p className="text-blue-300">ID: 9841 | IP: 103.22.XX.XX | STATUS: ACTIVE</p>
             </div>
          </div>
        </div>
      </section>

      {/* Expanded Order Modal */}
      <AnimatePresence>
        {isOrderModalOpen && selectedPlan && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-900/60 backdrop-blur-sm py-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors z-10"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              
              <div className="p-8 overflow-y-auto">
                <h3 className="text-2xl font-black text-slate-900 mb-2">Complete Your Order</h3>
                <p className="text-slate-500 mb-6 text-sm">
                  You are ordering <span className="font-bold text-blue-600">{selectedPlan.name}</span> for {calculatePrice(selectedPlan.basePrice)}
                </p>

                <form onSubmit={handleOrderSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">First Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Last Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Mobile No <span className="text-red-500">*</span></label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm"
                        placeholder="+91..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Email <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Company / Domain Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="domain"
                      required
                      value={formData.domain}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm"
                      placeholder="example.com"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Country <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm"
                        placeholder="India"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1">Server Location <span className="text-red-500">*</span></label>
                      <select
                        name="serverLocation"
                        required
                        value={formData.serverLocation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm bg-white"
                      >
                        <option value="INDIA">India</option>
                        <option value="US">United States (US)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Comment (if any)</label>
                    <textarea
                      name="comment"
                      rows={2}
                      value={formData.comment}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm resize-none"
                      placeholder="Any specific requirements..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full mt-4 py-4 rounded-xl font-black tracking-wide bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    Send Order via WhatsApp
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}