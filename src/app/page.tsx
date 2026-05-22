"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Server, Terminal, Database, ChevronDown, Activity, 
  CheckCircle, Zap, Shield, Cpu, HardDrive, Globe, Star, Quote, MessageCircle, Settings,
  ChevronLeft, ChevronRight, TrendingUp, X
} from "lucide-react";

interface HeroSlide {
  badge: string;
  badgeIcon: React.ReactNode;
  title1: string;
  title2: string;
  desc: string;
  cta1: string;
  cta2: string;
}

interface VPSPlan {
  title: string;
  badge: string;
  basePrice: number;
  features: string[];
  isPopular: boolean;
}

interface Testimonial {
  quote: string;
  author: string;
  avatar: string;
}

export default function Home() {
  const WHATSAPP_NUMBER: string = "919876543210";
  
  const heroSlides: HeroSlide[] = [
    {
      badge: "Tier-IV Certified Infrastructure",
      badgeIcon: <Activity size={14} className="animate-pulse" />,
      title1: "Deploy with",
      title2: "Infinite Power.",
      desc: "Enterprise-grade hosting solutions engineered for scale. Deploy Linux, or Custom ISOs on bleeding-edge NVMe Gen5 hardware in under 60 seconds.",
      cta1: "Deploy Server",
      cta2: "Talk to an Expert"
    },
    {
      badge: "100Gbps DDoS Protection",
      badgeIcon: <Shield size={14} />,
      title1: "Unbreakable",
      title2: "Security.",
      desc: "Military-grade network protection standard on all plans. Keep your applications online through the most aggressive volumetric attacks automatically.",
      cta1: "View Security Specs",
      cta2: "Contact Sales"
    },
    {
      badge: "Global Edge Network",
      badgeIcon: <Globe size={14} />,
      title1: "Scale",
      title2: "Globally.",
      desc: "Reach your users with sub-millisecond latency. Our strategically positioned datacenters ensure your project is instantly accessible worldwide.",
      cta1: "Explore Locations",
      cta2: "Test Network"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [includeGST, setIncludeGST] = useState<boolean>(false);
  const [exchangeRate, setExchangeRate] = useState<number>(83.50);
  const [isRateLive, setIsRateLive] = useState<boolean>(false);

  // New states for the expanded order modal
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
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  useEffect(() => {
    const fetchLiveRate = async () => {
      try {
        const response = await fetch("/api/rate");
        
        if (!response.ok) {
          throw new Error("API Route not responding");
        }

        const data = await response.json();
        
        if (data.rate) {
          setExchangeRate(data.rate);
          setIsRateLive(true);
        }
      } catch (err) {
        console.error("Live rate fetch failed. Using fallback.");
        setIsRateLive(false); 
      }
    };

    fetchLiveRate();
  }, []);

  const GST_RATE: number = 0.18;

  const vpsPlans: VPSPlan[] = [
    {
      title: "KVM VPS-1",
      badge: "Save 70%",
      basePrice: 1499,
      features: ["2 Core vCPU", "4 GB RAM", "100 GB NVMe", "Unlimited Bandwidth"],
      isPopular: false,
    },
    {
      title: "KVM VPS-2",
      badge: "Save 70%",
      basePrice: 1999,
      features: ["4 Core vCPU", "8 GB RAM", "150 GB NVMe", "Unlimited Bandwidth"],
      isPopular: true,
    },
    {
      title: "KVM VPS-3",
      badge: "Save 70%",
      basePrice: 2499,
      features: ["6 Core vCPU", "16 GB RAM", "200 GB NVMe", "Unlimited Bandwidth"],
      isPopular: false,
    },
    {
      title: "KVM VPS-4",
      badge: "Save 70%",
      basePrice: 2999,
      features: ["8 Core vCPU", "32 GB RAM", "250 GB NVMe", "Unlimited Bandwidth"],
      isPopular: false,
    },
  ];

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

  const testimonials: Testimonial[] = [
    {
      quote: "Titservices provided a seamless deployment for our chat application. The uptime and response time are top-notch!",
      author: "Chatherr",
      avatar: "https://i.pravatar.cc/150?img=11" 
    },{
      quote: "Titservices Great hosting service with stable performance and minimal downtime. My website loads fast, especially for Indian users, and overall reliability has been excellent. Support team is responsive and helpful whenever needed.",
      author: "DreamAcco",
      avatar: "https://i.pravatar.cc/150?img=47" 
    },
    {
      quote: "Titservices Reliable hosting with good uptime and smooth performance for my website. Setup was easy, and I’ve had a hassle-free experience so far. Support is quick to respond and resolves issues efficiently.",
      author: "ProtoMart",
      avatar: "https://i.pravatar.cc/150?img=68"
    }
  ];
  
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(testimonialTimer);
  }, [testimonials.length]);

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
      `- Plan: ${selectedPlan.title}%0A` +
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
    <div className="relative font-sans bg-white overflow-x-hidden text-slate-900">
      
      <section className="relative pt-32 pb-40 min-h-[90vh] flex items-center bg-[#0B0F19] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
        
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
            
            <div className="flex-1 text-center lg:text-left relative h-[450px] w-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentSlide}
                  initial={{ opacity: 0, y: 30 }} 
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute w-full"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-black uppercase tracking-widest mb-8 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2 mr-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    {heroSlides[currentSlide].badgeIcon} {heroSlides[currentSlide].badge}
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[1.05] tracking-tighter mb-6">
                    {heroSlides[currentSlide].title1} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-600">
                      {heroSlides[currentSlide].title2}
                    </span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium mb-10">
                    {heroSlides[currentSlide].desc}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <Link href="#plans" className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-500 transition-all shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_-5px_rgba(37,99,235,0.6)] flex items-center justify-center group">
                      {heroSlides[currentSlide].cta1}
                      <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Link>
                    <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-slate-700 text-white font-bold text-lg hover:bg-slate-800 hover:border-slate-600 transition-all flex items-center justify-center">
                      {heroSlides[currentSlide].cta2}
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute -bottom-4 left-0 right-0 lg:right-auto flex justify-center lg:justify-start gap-3">
                {heroSlides.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === idx ? "w-8 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" : "w-2 bg-slate-700 hover:bg-slate-500"}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="flex-1 hidden lg:flex justify-center items-center relative perspective-1000 mt-10 lg:mt-0">
              <div className="relative w-full max-w-[500px] h-[400px]">
                <motion.div 
                  initial={{ opacity: 0, y: -50, rotateX: 20, rotateZ: -10 }}
                  animate={{ opacity: 1, y: 0, rotateX: 20, rotateZ: -10 }}
                  transition={{ duration: 1, delay: 0.2, type: "spring" }}
                  className="absolute top-0 left-10 right-10 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-6 rounded-2xl shadow-2xl z-30"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-xs font-bold text-blue-400 bg-blue-900/30 px-2 py-1 rounded">NODE_01</span>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <Cpu className="text-blue-500" size={32} />
                    <div>
                      <p className="font-black text-lg">AMD EPYC Gen 4</p>
                      <p className="text-xs text-slate-400">Load: 14% | Temps: 32°C</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 0, rotateX: 20, rotateZ: -10 }}
                  animate={{ opacity: 1, y: 80, rotateX: 20, rotateZ: -10 }}
                  transition={{ duration: 1, delay: 0.4, type: "spring" }}
                  className="absolute top-0 left-10 right-10 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-6 rounded-2xl shadow-[0_30px_50px_-10px_rgba(0,0,0,0.5)] z-20"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div animate={{ width: ["10%", "90%", "30%"] }} transition={{ duration: 4, repeat: Infinity }} className="h-full bg-indigo-500" />
                    </div>
                    <span className="text-xs font-bold text-indigo-400 bg-indigo-900/30 px-2 py-1 rounded">NVMe_ARRAY</span>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <HardDrive className="text-indigo-500" size={32} />
                    <div>
                      <p className="font-black text-lg">Samsung Gen5 SSD</p>
                      <p className="text-xs text-slate-400">Read: 12GB/s | Write: 10GB/s</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 50, rotateX: 20, rotateZ: -10 }}
                  animate={{ opacity: 1, y: 160, rotateX: 20, rotateZ: -10 }}
                  transition={{ duration: 1, delay: 0.6, type: "spring" }}
                  className="absolute top-0 left-10 right-10 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-6 rounded-2xl shadow-[0_50px_50px_-10px_rgba(0,0,0,0.7)] z-10"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-green-400"><Shield size={14}/> SECURE</div>
                    <span className="text-xs font-bold text-green-400 bg-green-900/30 px-2 py-1 rounded">NETWORK</span>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <Activity className="text-green-500" size={32} />
                    <div>
                      <p className="font-black text-lg">100Gbps Uplink</p>
                      <p className="text-xs text-slate-400">0 Packet Loss | Anti-DDoS Active</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-4 top-20 text-blue-500 opacity-50"><Server size={24} /></motion.div>
                <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -left-8 bottom-10 text-indigo-500 opacity-50"><Database size={32} /></motion.div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section id="plans" className="py-32 bg-slate-50 relative">
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">High-Performance <span className="text-blue-600">VPS Plans</span></h2>
            <p className="mt-4 text-slate-500 font-medium max-w-2xl mx-auto">Scalable resources tailored for your projects. Upgrade anytime with zero downtime.</p>
          </div>

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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 items-center">
            {vpsPlans.map((plan, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className={`relative flex flex-col p-8 xl:p-10 rounded-3xl transition-all duration-300 h-full ${
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
                
                <div className="text-center border-b border-slate-200/20 pb-8 mb-8 relative pt-2">
                  <div className="absolute -top-4 right-0 left-0 flex justify-center">
                    <span className="bg-emerald-100 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1 shadow-sm">
                      <Settings size={12} /> Managed Service
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-black mb-3 mt-6">{plan.title}</h3>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-6 ${plan.isPopular ? "bg-slate-800 text-blue-400" : "bg-blue-50 text-blue-600"}`}>
                     {plan.badge}
                  </div>
                  <div className="flex justify-center items-end gap-1">
                    <span className="text-4xl xl:text-5xl font-black tracking-tighter">{calculatePrice(plan.basePrice)}</span>
                    <span className={`text-sm font-bold mb-2 ${plan.isPopular ? "text-slate-400" : "text-slate-500"}`}>/month</span>
                  </div>
                  <div className="mt-2 text-xs font-medium text-slate-400">
                    {includeGST ? "Including 18% GST" : "Excluding GST"}
                  </div>
                </div>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-medium text-sm xl:text-base">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 ${plan.isPopular ? "text-blue-500" : "text-blue-600"}`} /> 
                      <span className={plan.isPopular ? "text-slate-300" : "text-slate-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleOrderClick(plan)}
                  className={`w-full mt-auto py-4 rounded-2xl font-black tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.isPopular 
                      ? "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/30" 
                      : "bg-slate-100 text-slate-900 hover:bg-slate-900 hover:text-white"
                  }`}
                >
                  Order Now
                </button>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 container mx-auto px-6 border-t border-slate-100">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-black text-slate-900 mb-10 leading-tight">Built by Engineers, <br /> For <span className="text-blue-600">Engineers.</span></h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4 p-8 bg-blue-50/50 rounded-3xl border border-blue-100/50 transition-colors hover:bg-blue-50">
                <div className="h-12 w-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-md"><Terminal size={20} /></div>
                <h4 className="font-extrabold text-xl text-slate-900">Full API Access</h4>
                <p className="text-sm text-slate-500 leading-relaxed">Automate your infrastructure with our RESTful API. Deploy, reboot, and scale using code.</p>
              </div>
              <div className="space-y-4 p-8 bg-slate-50/50 rounded-3xl border border-slate-100 transition-colors hover:bg-slate-50">
                <div className="h-12 w-12 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-md"><Database size={20} /></div>
                <h4 className="font-extrabold text-xl text-slate-900">Object Storage</h4>
                <p className="text-sm text-slate-500 leading-relaxed">S3-compatible storage for your backups, media assets, and large data clusters.</p>
              </div>
            </div>
            <div className="mt-10 p-8 bg-white border-2 border-slate-100 rounded-3xl shadow-sm">
               <h4 className="font-black text-slate-900 mb-6">Standard with every deployment:</h4>
               <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                  {["Instant Setup", "100Gbps DDoS", "Full Root Access", "Automated Backups", "Custom ISOs", "24/7/365 Support"].map(t => (
                    <div key={t} className="flex items-center gap-2 text-sm font-bold text-slate-600">
                      <CheckCircle className="text-blue-600 h-4 w-4" /> {t}
                    </div>
                  ))}
               </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-900 rounded-[40px] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden group">
               <div className="absolute -bottom-20 -right-20 p-10 opacity-10 group-hover:scale-110 transition-transform duration-1000"><Server size={400} /></div>
               <h3 className="text-3xl font-black mb-10 relative z-10 flex items-center gap-3"><Activity className="text-blue-500"/> Technical Specs</h3>
               <div className="space-y-6 relative z-10">
                 {[
                   { label: "Virtualization", val: "KVM (Kernel-based VM)" },
                   { label: "Hardware", val: "AMD EPYC / Intel Xeon" },
                   { label: "Networking", val: "10 Gbps Redundant Uplinks" },
                   { label: "Storage", val: "NVMe Gen5" },
                   { label: "Uptime SLA", val: "99.99% Guaranteed" },
                   { label: "Datacenters", val: "Global Edge Nodes" },
                 ].map(s => (
                   <div key={s.label} className="flex justify-between items-center border-b border-white/10 pb-4">
                     <span className="text-slate-400 font-bold text-sm uppercase tracking-wider">{s.label}</span>
                     <span className="text-white font-black text-sm text-right max-w-[200px]">{s.val}</span>
                   </div>
                 ))}
               </div>
               <button className="mt-12 w-full py-5 bg-blue-600 rounded-2xl font-black tracking-wide hover:bg-white hover:text-slate-900 transition-all shadow-lg shadow-blue-600/20 relative z-10">
                 View Network Status Map
               </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-slate-900 via-[#1e293b] to-slate-900 text-white relative overflow-hidden border-y border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-orange-500/10 opacity-50 mix-blend-overlay pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/10">
            {[
              { num: "20+", label: "Hosting Completed" },
              { num: "15+", label: "Happy Client" },
              { num: "25+", label: "Support Project Completed" },
              { num: "20+", label: "Cup Of Tea" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-4">
                <span className="text-5xl md:text-7xl font-black mb-4 drop-shadow-md">{stat.num}</span>
                <div className="w-8 h-1 bg-orange-500 rounded-full mb-4 opacity-80"></div>
                <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-300">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
            Clients Feedback
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-500 font-medium mb-16 text-lg max-w-2xl mx-auto">
            Here is what our valued clients say about our reliable hosting services and dedicated customer support.
          </p>

          <div className="flex justify-center items-center gap-4 mb-12">
            {testimonials.map((test, i) => (
              <button 
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`relative rounded-full overflow-hidden transition-all duration-300 ${
                  activeTestimonial === i 
                    ? "w-24 h-24 border-4 border-white shadow-xl shadow-slate-300/50 z-10 scale-110 grayscale-0" 
                    : "w-20 h-20 border-2 border-transparent grayscale hover:grayscale-0 opacity-60 hover:opacity-100 cursor-pointer"
                }`}
              >
                <img src={test.avatar} alt={test.author} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          <div className="relative">
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-100 text-slate-400 hover:text-blue-600 hover:scale-110 transition-all"
            >
              <ChevronLeft size={24} />
            </button>

            <button 
              onClick={nextTestimonial}
              className="absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-100 text-slate-400 hover:text-blue-600 hover:scale-110 transition-all"
            >
              <ChevronRight size={24} />
            </button>

            <div className="bg-slate-50 p-10 md:p-14 rounded-[40px] border border-slate-100 relative mx-4 md:mx-0">
              <Quote className="absolute top-6 left-6 text-slate-200/50 w-20 h-20 z-0" />
              <div className="relative z-10 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-relaxed mb-8">
                      {testimonials[activeTestimonial].quote}
                    </p>
                    <div className="font-bold text-slate-900 tracking-wider">
                      {testimonials[activeTestimonial].author}
                    </div>
                    <div className="flex justify-center gap-1 text-orange-400 mt-3">
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-black text-center text-slate-900 mb-20">Frequently Asked <span className="text-blue-600">Questions</span></h2>
          <div className="space-y-4">
            {[
              { q: "What is the difference between Shared and VPS hosting?", a: "Shared hosting limits your resources as they are shared with others. VPS provides dedicated, isolated resources (CPU/RAM) ensuring consistent high performance." },
              { q: "How long does it take to deploy a server?", a: "Our automated provisioning system instantly launches your server. You will receive your root credentials within 60 seconds of payment confirmation." },
              { q: "Can I upgrade my plan later?", a: "Absolutely. You can seamlessly scale your RAM, CPU, and NVMe Storage straight from your client area with zero data loss and minimal downtime." },
              { q: "Do you offer managed support?", a: "By default, our servers are self-managed (full root access). However, we offer comprehensive Managed Support add-ons during checkout if you need our engineers to handle the technical lifting." },
            ].map((f, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 group hover:border-blue-600 transition-colors cursor-pointer shadow-sm hover:shadow-md">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-slate-900 md:text-lg">{f.q}</h4>
                  <ChevronDown className="text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-4" />
                </div>
                <p className="mt-4 text-slate-500 text-sm md:text-base leading-relaxed hidden group-hover:block">{f.a}</p>
              </div>
            ))}
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
                  You are ordering <span className="font-bold text-blue-600">{selectedPlan.title}</span> for {calculatePrice(selectedPlan.basePrice)}
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