"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageCircle, CheckCircle, Star, Quote, 
  ChevronLeft, ChevronRight, TrendingUp 
} from "lucide-react"; 

interface SupportPlan {
  title: string;
  basePrice: number;
  features: string[];
  whatsappMsg: string;
  isPopular?: boolean;
}

interface Testimonial {
  quote: string;
  author: string;
  avatar: string;
}

export default function RemoteITSupport() {
  const WHATSAPP_NUMBER: string = "919876543210";
  const GST_RATE: number = 0.18;

  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [includeGST, setIncludeGST] = useState<boolean>(false);
  const [exchangeRate, setExchangeRate] = useState<number>(83.50);
  const [isRateLive, setIsRateLive] = useState<boolean>(false);
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  const supportPlans: SupportPlan[] = [
    {
      title: "AWS Cloud Support",
      basePrice: 3199,
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
      basePrice: 2699,
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
      isPopular: true,
    },
    {
      title: "Azure Cloud Support",
      basePrice: 3199,
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

  const testimonials: Testimonial[] = [
    {
      quote: "Titservices Support has helped me on many occasions in configuring and troubleshooting our application server. Every time I have asked him for help, he has done an excellent job. He is quite knowledgeable and very responsive and timely in executing the jobs given. We will be using him in the future as well.",
      author: "Ajay Mandal - Owner, intellixion",
      avatar: "https://i.pravatar.cc/150?img=11" 
    },
    {
      quote: "Managing Linux servers used to be a huge headache for us, but this team automated and secured everything. The best IT support out there.",
      author: "Sunil Kumar - IT Head,  SWISS UMEF",
      avatar: "https://i.pravatar.cc/150?img=68"
    },
    {
      quote: "Their response time in resolving IT infrastructure issues is amazing. The pricing is also very affordable for small businesses like ours.",
      author: "Ashish Saxena - Owner, Nirvign Web Solutions",
      avatar: "https://i.pravatar.cc/150?img=47"
    }
  ];

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

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(testimonialTimer);
  }, [testimonials.length]);

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

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-[#Fff] py-32 font-sans relative">
      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Remote IT <span className="text-blue-600">Support</span>
          </h1>
          <p className="mt-4 text-slate-500 font-medium max-w-2xl mx-auto">
            Get expert, round-the-clock management and support for your cloud infrastructure and servers.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6 bg-slate-50 p-3 rounded-3xl shadow-sm border border-slate-200 max-w-3xl mx-auto">
          <div className="flex items-center bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100">
            <button 
              onClick={() => setCurrency("INR")}
              className={`px-5 py-2 rounded-xl font-bold text-sm transition-all ${currency === "INR" ? "bg-slate-900 text-white shadow-md" : "text-slate-500 hover:text-slate-900"}`}
            >
              INR 
            </button>
            <button 
              onClick={() => setCurrency("USD")}
              className={`px-5 py-2 rounded-xl font-bold text-sm transition-all ${currency === "USD" ? "bg-slate-900 text-white shadow-md" : "text-slate-500 hover:text-slate-900"}`}
            >
              USD
            </button>
          </div>

          <div className="hidden md:block w-px h-6 bg-slate-200"></div>

          <div className="flex items-center bg-white p-1.5 rounded-2xl shadow-sm border border-slate-100">
            <button 
              onClick={() => setIncludeGST(false)}
              className={`px-5 py-2 rounded-xl font-bold text-sm transition-all ${!includeGST ? "bg-slate-900 text-white shadow-md" : "text-slate-500 hover:text-slate-900"}`}
            >
              Exclude GST
            </button>
            <button 
              onClick={() => setIncludeGST(true)}
              className={`px-5 py-2 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${includeGST ? "bg-blue-600 text-white shadow-md" : "text-slate-500 hover:text-slate-900"}`}
            >
              Include 18% GST
            </button>
          </div>
        </div>

        <div className="text-center mb-16 h-6">
          {currency === "USD" && isRateLive && (
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              <TrendingUp size={14} /> Live Rate: 1 USD = ₹{exchangeRate.toFixed(2)}
            </span>
          )}
        </div>

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
              
              <div className="text-center border-b border-slate-200/20 pb-8 mb-8">
                <h3 className="text-2xl font-black mb-6">{plan.title}</h3>
                
                <div className="flex justify-center items-end gap-1">
                  <span className="text-4xl xl:text-5xl font-black tracking-tighter">{calculatePrice(plan.basePrice)}</span>
                  <span className={`text-sm font-bold mb-2 ${plan.isPopular ? "text-slate-400" : "text-slate-500"}`}>/month</span>
                </div>
                <div className={`text-xs font-medium mt-3 ${plan.isPopular ? "text-slate-400" : "text-slate-400"}`}>
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
              
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`${plan.whatsappMsg} Price: ${calculatePrice(plan.basePrice)} (${currency}, ${includeGST ? 'including GST' : 'excluding GST'}).`)}`}
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

        <div className="mt-32 py-20 bg-white rounded-[40px] border border-slate-200 shadow-sm">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
              Client Feedback
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-slate-500 font-medium mb-16 text-lg">
              Do not just take our word for it. Here is what our partners have to say about our remote support services.
            </p>

            <div className="flex justify-center items-center gap-4 mb-12">
              {testimonials.map((test, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`relative rounded-full overflow-hidden transition-all duration-300 ${
                    activeTestimonial === i 
                      ? "w-24 h-24 border-4 border-[#F0EEE9] shadow-xl shadow-slate-300/50 z-10 scale-110 grayscale-0" 
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

              <div className="bg-[#F0EEE9] p-10 md:p-14 rounded-[40px] border border-slate-100 relative shadow-inner mx-4 md:mx-0 overflow-hidden">
                <Quote className="absolute top-6 left-6 text-slate-300/50 w-20 h-20 z-0" />
                <div className="relative z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTestimonial}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed mb-8">
                        {testimonials[activeTestimonial].quote}
                      </p>
                      <div className="font-bold text-slate-900 tracking-wider">
                        {testimonials[activeTestimonial].author}
                      </div>
                      <div className="flex justify-center gap-1 text-blue-500 mt-3">
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
        </div>

      </div>
    </div>
  );
}