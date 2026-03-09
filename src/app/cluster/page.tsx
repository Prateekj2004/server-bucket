"use client";
import { motion } from "framer-motion";
import { Layers, RefreshCw, Database, Globe, Activity, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ClusterPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="py-24 text-center px-6">
        <span className="text-blue-600 font-black uppercase tracking-widest text-xs bg-blue-100 px-4 py-1.5 rounded-full">100% Uptime Architecture</span>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mt-8 mb-6 tracking-tighter">
          High-Availability <span className="text-blue-600">Clusters</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
          Zero single points of failure. Distribute your application and database across multiple synced nodes to handle massive traffic spikes and ensure continuous operation.
        </p>
      </section>

      <section className="py-12 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* App Cluster Card */}
          <div className="bg-white p-12 rounded-[50px] shadow-xl border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700"><Globe size={200}/></div>
            <Layers className="h-16 w-16 text-blue-600 mb-8 relative z-10" />
            <h2 className="text-3xl font-black text-slate-900 mb-4 relative z-10">Application / Web Cluster</h2>
            <p className="text-slate-500 mb-10 leading-relaxed relative z-10">
              Multiple web servers running behind an enterprise Load Balancer (HAProxy). If one node fails, traffic is instantly routed to healthy nodes.
            </p>
            <ul className="space-y-4 relative z-10 mb-12">
              {[
                "Active-Active Load Balancing",
                "Automated Node Health Checks",
                "Shared Network Storage (NFS/Ceph)",
                "Seamless SSL Offloading"
              ].map((f,i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <CheckCircle className="text-green-500 h-5 w-5"/> {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-colors relative z-10">Deploy Web Cluster</button>
          </div>

          {/* Database Cluster Card */}
          <div className="bg-slate-900 text-white p-12 rounded-[50px] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700"><Database size={200}/></div>
            <RefreshCw className="h-16 w-16 text-blue-400 mb-8 relative z-10" />
            <h2 className="text-3xl font-black text-white mb-4 relative z-10">Database Replication</h2>
            <p className="text-slate-400 mb-10 leading-relaxed relative z-10">
              Synchronous or asynchronous data replication. Master-Slave or Galera Active-Active clusters ensuring zero data loss during hardware failures.
            </p>
            <ul className="space-y-4 relative z-10 mb-12">
              {[
                "MySQL / PostgreSQL Replication",
                "Automatic Primary Failover",
                "Dedicated Private VLAN for Sync",
                "Split-Brain Protection Algorithms"
              ].map((f,i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-300">
                  <CheckCircle className="text-blue-400 h-5 w-5"/> {f}
                </li>
              ))}
            </ul>
            <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-white hover:text-blue-600 transition-colors relative z-10">Deploy DB Cluster</button>
          </div>

        </div>
      </section>
    </div>
  );
}