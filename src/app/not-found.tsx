"use client";
import Link from "next/link";
import { ServerCrash, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-6">
      <div className="text-center">
        <div className="inline-flex items-center justify-center h-32 w-32 bg-red-50 text-red-500 rounded-[40px] mb-8 shadow-inner shadow-red-100">
           <ServerCrash size={64} />
        </div>
        <h1 className="text-6xl font-black text-slate-900 mb-4 tracking-tighter">404: Node <span className="text-red-500">Offline</span></h1>
        <p className="text-lg text-slate-500 max-w-md mx-auto mb-10 font-medium">
          Looks like the server rack you're looking for doesn't exist or has been decommissioned.
        </p>
        <Link href="/" className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black hover:bg-blue-600 transition-colors shadow-xl">
          <ArrowLeft size={20}/> Return to Datacenter
        </Link>
      </div>
    </div>
  );
}