"use client";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

const posts = [
  { id: 1, title: "How to Secure Your Linux VPS", category: "Security", date: "March 2026", slug: "secure-linux-vps" },
  { id: 2, title: "Next.js Deployment on Dedicated Servers", category: "Development", date: "Feb 2026", slug: "nextjs-dedicated-server" },
  { id: 3, title: "Moving from Shared Hosting to VPS", category: "Guides", date: "Jan 2026", slug: "migrate-to-vps" },
];

export default function BlogPage() {
  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-black text-slate-900 mb-12">Knowledge <span className="text-blue-600">Base</span></h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="group">
              <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm group-hover:shadow-2xl transition-all h-full flex flex-col">
                <span className="text-xs font-black text-blue-600 uppercase tracking-widest">{post.category}</span>
                <h3 className="text-xl font-bold text-slate-900 mt-4 flex-grow">{post.title}</h3>
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center gap-2"><Clock className="h-3 w-3" /> {post.date}</span>
                  <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}