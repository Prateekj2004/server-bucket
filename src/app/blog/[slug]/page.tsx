"use client";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BlogPost() {
  const { slug } = useParams();

  return (
    <article className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 mb-12 hover:translate-x-1 transition-transform">
          <ArrowLeft size={16} /> Back to Knowledge Base
        </Link>

        {/* Post Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
            Server Guides
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-6 leading-tight">
            How to Scale Your Infrastructure with {slug?.toString().replace(/-/g, ' ')}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 mt-8 text-slate-400 text-sm border-b border-slate-100 pb-8">
            <div className="flex items-center gap-2"><User size={16} /> By Server Bucket Team</div>
            <div className="flex items-center gap-2"><Calendar size={16} /> March 2026</div>
            <button className="flex items-center gap-2 ml-auto text-blue-600 font-bold"><Share2 size={16} /> Share Post</button>
          </div>
        </motion.div>

        {/* Content Placeholder */}
        <div className="prose prose-lg prose-slate max-w-none text-slate-600 leading-relaxed space-y-8">
          <p className="text-xl text-slate-500 italic">
            Expanding your digital footprint requires more than just hardware; it requires a strategy that ensures uptime and low latency for your users globally.
          </p>
          <p>
            Deploying a high-performance environment starts with choosing the right base. Whether you are using our <strong>NVMe VPS</strong> or <strong>Bare Metal Servers</strong>, the principles of security and scalability remain the same.
          </p>
          <h3 className="text-2xl font-bold text-slate-900 mt-12">Step 1: Resource Auditing</h3>
          <p>
            Before scaling, audit your current CPU and RAM usage. Server Bucket provides real-time metrics in your dashboard to help you identify bottlenecks before they affect your users.
          </p>
          <div className="bg-slate-900 text-white p-8 rounded-[32px] my-12">
            <h4 className="text-blue-400 font-bold mb-4 uppercase tracking-widest text-xs">Pro Tip</h4>
            <p className="text-slate-300">Always keep at least 20% overhead in your RAM allocation to handle sudden traffic spikes without service interruption.</p>
          </div>
        </div>
      </div>
    </article>
  );
}