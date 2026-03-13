import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll"; // Import Lenis Provider
import "./globals.css";

export const metadata: Metadata = {
  title: "Digitara | Premium Web Development & Digital Strategy",
  description: "Digitara is a world-class digital agency in Rwanda specializing in Next.js web applications, SaaS products, and e-commerce solutions for global startups.",
  keywords: ["Web Development Rwanda", "SaaS Development", "Next.js Agency", "Digital Transformation", "Digitara"],
  openGraph: {
    title: "Digitara | Build Your Digital Vision",
    description: "Modern web development and design for the next generation of innovators.",
    url: "https://digitara.com", 
    siteName: "Digitara",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitara | Premium Digital Services",
    description: "High-performance web applications built with React and Tailwind CSS.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-darkBg text-textPrimary antialiased selection:bg-accentCyan selection:text-darkBg md:cursor-none">
        {/* Wrap everything in SmoothScroll for the inertia effect */}
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}