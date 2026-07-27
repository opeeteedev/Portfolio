"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    scope: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.scope) {
      alert("Please fill in all fields");
      return;
    }

    if (formData.scope.length < 20) {
      alert("Project scope must be at least 20 characters");
      return;
    }

    console.log("Form submitted:", formData);

    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", scope: "" });
    }, 5000);
  };

  return (
    <main className="flex-grow pt-24">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* HEADER */}
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="font-mono font-bold tracking-wider text-emerald-400 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              OO.SYS_ARCH
            </Link>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
              <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
              <a href="/#solutions" className="hover:text-emerald-400 transition-colors">Solutions</a>
              <Link href="/" className="hover:text-emerald-400 transition-colors">Labs</Link>
              <Link href="/contact" className="text-emerald-400">Contact</Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link href="/" className="px-4 py-2 text-xs font-mono uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-lg hover:bg-emerald-500/20 transition-all">
                Back Home
              </Link>
            </div>
          </div>
        </header>

        {/* CONTACT SECTION */}
        <section className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 rounded-3xl p-8 lg:p-12 mt-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-3 mb-8">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Project Scoping</span>
              <h1 className="text-4xl font-bold text-white">Initialize Your Brief</h1>
              <p className="text-slate-400 text-sm">
                Fill out your project requirements below and our team will route your brief directly to Opeyemi Omotayo's engineering queue.
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-2xl backdrop-blur-md">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">Your Name / Identity</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Enterprise Partner"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-emerald-500 transition-colors font-mono"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">Business Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="partner@domain.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-emerald-500 transition-colors font-mono"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-300 uppercase tracking-wider">Project Scope &amp; Architecture</label>
                  <textarea
                    name="scope"
                    value={formData.scope}
                    onChange={handleChange}
                    placeholder="Describe technical stacks, automation needs, or scaling objectives..."
                    rows={5}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-white outline-none focus:border-emerald-500 transition-colors font-mono resize-none"
                  />
                </div>

                <button
                  type="submit*

