import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,212,255,0.08),transparent_50%)] pointer-events-none" />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Process />
        <Stats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
}