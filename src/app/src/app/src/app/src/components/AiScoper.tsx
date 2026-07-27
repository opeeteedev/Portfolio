"use client";

import React, { useState } from "react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function AiScoper() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hello! I'm Opeyemi's AI Scoper. I can help you outline your project architecture, estimate timelines, and identify technical requirements. What's your primary use case?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      const responses = [
        "That sounds like an interesting project. Are you looking for a custom solution or integration with existing platforms?",
        "I'd recommend a microservices architecture for that use case. What's your expected traffic volume?",
        "Your requirements align well with our core infrastructure specialization. Would you like a detailed breakdown?",
        "We can definitely handle that scale. When are you looking to launch?",
        "Based on what you've shared, I'm estimating a 4-8 week delivery timeline with our team. Interested in scheduling a detailed scope session?",
      ];

      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: randomResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-slate-950/60 border border-slate-800 rounded-2xl overflow-hidden flex flex-col h-[500px] shadow-xl">
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-3 rounded-xl text-sm ${
                message.role === "user"
                  ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-100"
                  : "bg-slate-900 border border-slate-800 text-slate-200"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="px-4 py-3 rounded-xl bg-slate-900 border border-slate-800">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-slate-600 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-slate-600 animate-pulse delay-100"></div>
                <div className="w-2 h-2 rounded-full bg-slate-600 animate-pulse delay-200"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <form
        onSubmit={handleSendMessage}
        className="border-t border-slate-800 bg-slate-950/80 p-4 flex gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your project needs..."
          disabled={isLoading}
          className="flex-1 bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white outline-none focus:border-emerald-500 transition-colors font-mono disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="px-4 py-2 bg-emerald-500 text-slate-950 font-mono text-xs font-bold rounded-lg hover:bg-emerald-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send
        </button>
      </form>
    </div>
  );
}
