import { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";
export default function sitemap(): MetadataRoute.Sitemap { const base="https://tayo-opeyemi.com"; return [{url:base,lastModified:new Date(),priority:1},{url:`${base}/case-studies`,lastModified:new Date(),priority:.9},...caseStudies.map(s=>({url:`${base}/case-studies/${s.slug}`,lastModified:new Date(),priority:.8}))]; }
