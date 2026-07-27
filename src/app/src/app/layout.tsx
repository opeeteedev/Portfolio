import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Opeyemi Omotayo | Full-Stack Systems Architect & Agentic Agency",
  description: "Ultra-premium bento grid portfolio and agentic platform specializing in high-performance web applications, Shopify ecosystems, and autonomous automation pipelines.",
  keywords: "systems architect, web development, Shopify, automation, Next.js",
  authors: [{ name: "Opeyemi Omotayo" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://opeyemiomotayo.work.gd",
    title: "Opeyemi Omotayo | Full-Stack Systems Architect",
    description: "Architecting autonomous software & scale",
    siteName: "Opeyemi Omotayo Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
