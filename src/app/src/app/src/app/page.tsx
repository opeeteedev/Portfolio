"use client";

import AiScoper from "@/components/AiScoper";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex-grow pt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        
        {/* HEADER */}
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <a href="/" className="font-mono font-bold tracking-wider text-emerald-400 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              OO.SYS_ARCH
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
              <a href="#solutions" className="hover:text-emerald-400 transition-colors">Solutions</a>
              <a href="#case-studies" className="hover:text-emerald-400 transition-colors">Case Studies</a>
              <a href="#labs" className="hover:text-emerald-400 transition-colors">Labs</a>
              <a href="/contact" className="hover:text-emerald-400 transition-colors">Contact</a>
            </nav>
            <div className="flex items-center gap-4">
              <Link href="/contact" className="px-4 py-2 text-xs font-mono uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-lg hover:bg-emerald-500/20 transition-all">
                Initialize Brief
              </Link>
            </div>
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              SYSTEM ONLINE // AGENTIC ENGINE ACTIVE
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-none">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-violet-500">Autonomous</span> Software & Scale.
            </h1>
            <p className="text-slate-400 text-lg max-w-xl font-light">
              High-performance web architecture, fault-tolerant Shopify pipelines, and enterprise automation engineered by Opeyemi Omotayo for permanent generational value.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/contact" className="px-6 py-3 bg-emerald-500 text-slate-950 font-mono text-sm font-bold rounded-xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20">
                Deploy Project
              </Link>
              <a href="#solutions" className="px-6 py-3 bg-slate-900 border border-slate-800 text-slate-200 font-mono text-sm rounded-xl hover:border-slate-700 transition-all">
                Explore Solutions
              </a>
            </div>
          </div>

          {/* TERMINAL */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              </div>
              <span className="text-xs font-mono text-slate-500">opeyemi@core-engine:~</span>
            </div>
            <div className="space-y-3 font-mono text-xs text-slate-300">
              <p className="text-emerald-400">&gt; initializing system protocols...</p>
              <p className="text-slate-400">&gt; loading Supabase RLS policies &amp; Next.js 15 App Router...</p>
              <p className="text-violet-400">&gt; connecting Vercel AI SDK stream...</p>
              <div className="pt-2 flex items-center gap-2 border-t border-slate-800/80 mt-4">
                <span className="text-emerald-500">$</span>
                <input type="text" defaultValue="deploy --prod --scale=max" className="bg-transparent border-none outline-none text-slate-100 font-mono w-full" readOnly />
              </div>
            </div>
          </div>
        </section>

        {/* BENTO GRID */}
        <section id="solutions" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800/80 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/40 transition-all">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all"></div>
            <div className="space-y-4 relative z-10">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Core Infrastructure</span>
              <h3 className="text-2xl font-bold text-white">Autonomous Workflow Automation</h3>
              <p className="text-slate-400 text-sm">
                Custom agentic loops, webhook event queues, and self-healing backend scripts designed to remove human bottlenecks entirely.
              </p>
            </div>
            <div className="pt-8 relative z-10 flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300">Node.js</span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300">Python</span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300">Webhooks</span>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800/80 rounded-3xl p-8 flex flex-col justify-between hover:border-violet-500/40 transition-all">
            <div className="space-y-4">
              <span className="text-xs font-mono text-violet-400 uppercase tracking-widest">E-Commerce Scaling</span>
              <h3 className="text-xl font-bold text-white">Enterprise Shopify Engines</h3>
              <p className="text-slate-400 text-sm">
                High-converting storefronts, headless architectures, and custom app extensions built for extreme throughput.
              </p>
            </div>
            <div className="pt-6 font-mono text-xs text-violet-400">
              <span>&rarr; Liquid &amp; React UI</span>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800/80 rounded-3xl p-8 flex flex-col justify-between hover:border-teal-500/40 transition-all">
            <div className="space-y-4">
              <span className="text-xs font-mono text-teal-400 uppercase tracking-widest">Security &amp; Data</span>
              <h3 className="text-xl font-bold text-white">PostgreSQL &amp; RLS</h3>
              <p className="text-slate-400 text-sm">
                Bulletproof database architectures paired with rigorous Row-Level Security parameters.
              </p>
            </div>
            <div className="pt-6 font-mono text-xs text-teal-400">
              <span>&rarr; Zero Vulnerabilities</span>
            </div>
          </div>
        </section>

        {/* AI SCOPER COMPONENT */}
        <section className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 rounded-3xl p-8 lg:p-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-3 mb-8">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">AI-Powered Scoping</span>
              <h2 className="text-3xl font-bold text-white">Intelligent Project Analysis</h2>
              <p className="text-slate-400 text-sm">
                Our AI Scoper analyzes your requirements in real-time to provide accurate estimations and technical recommendations.
              </p>
            </div>
            <AiScoper />
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/50 bg-slate-950/90 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-slate-500">
          <div>
            © 2026 Opeyemi Omotayo. All rights reserved. Delivery-focused. Production-grade.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://t.me/opeetee1" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">Telegram: @opeetee1</a>
            <a href="mailto:opeyemi@opeyemiomotayo.work.gd" className="hover:text-emerald-400 transition-colors">opeyemi@opeyemiomotayo.work.gd</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
