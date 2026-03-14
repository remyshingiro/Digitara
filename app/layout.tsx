import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll"; 
import { ThemeProvider } from "@/components/ThemeProvider"; // 🚀 Added this
import "./globals.css";

export const metadata: Metadata = {
  title: "Digitara | Premium Software Engineering & Digital Strategy",
  description: "Digitara is a world-class digital agency in Rwanda specializing in high-performance React applications, Go backends, and scalable SaaS solutions for global startups.",
  keywords: ["Software Engineering Rwanda", "SaaS Development", "React Agency", "Go Backend", "Digital Transformation", "Digitara"],
  openGraph: {
    title: "Digitara | Build Your Digital Vision",
    description: "Modern software engineering and design for the next generation of innovators.",
    url: "https://digitara.com", 
    siteName: "Digitara",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitara | Premium Digital Services",
    description: "High-performance applications built with React, Go, and Tailwind CSS.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 🚀 CRITICAL: Added suppressHydrationWarning to stop the "flicker" error
    <html lang="en" suppressHydrationWarning>
      <body className="bg-dark-bg text-text-primary antialiased selection:bg-accent-cyan selection:text-dark-bg md:cursor-none transition-colors duration-300">
        
        {/* 🚀 THE FIX: ThemeProvider must wrap everything */}
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={false}
        >
          <SmoothScroll>
            <CustomCursor />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>

      </body>
    </html>
  );
}