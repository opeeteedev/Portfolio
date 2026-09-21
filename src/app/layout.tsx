import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";
const display = Manrope({ subsets: ["latin"], variable: "--font-display", weight: ["400","500","600","700","800"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400","500","600","700"] });
export const metadata: Metadata = {
  metadataBase: new URL("https://tayo-opeyemi.com"),
  title: "Tayo Opeyemi | Lead Systems Architect",
  description: "I architect the systems that power high-performance SaaS, AI-driven web applications, and enterprise ecosystems.",
  keywords: ["systems architect","lead systems architect","SaaS architecture","AI integration","enterprise integration","London systems architect"],
  authors: [{ name: "Tayo Opeyemi" }], creator: "Tayo Opeyemi",
  openGraph: { type: "website", locale: "en_GB", url: "https://tayo-opeyemi.com", title: "Tayo Opeyemi | Lead Systems Architect", description: "I architect the systems that power high-performance SaaS, AI-driven web applications, and enterprise ecosystems.", siteName: "Tayo Opeyemi", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Tayo Opeyemi — Lead Systems Architect" }] },
  twitter: { card: "summary_large_image", title: "Tayo Opeyemi | Lead Systems Architect", description: "I architect the systems that power high-performance SaaS, AI-driven web applications, and enterprise ecosystems.", images: ["/og-image.png"] }
};
export const viewport: Viewport = { themeColor: "#0A0A0B" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning className={`${display.variable} ${mono.variable}`}><body>{children}</body></html>; }
