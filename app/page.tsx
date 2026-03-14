import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    // 🚀 FIXED: Replaced pure black with your standard bg-surface/30 theme
    <div className="relative min-h-screen transition-colors duration-500 bg-white dark:bg-surface/30">
      
      {/* Dynamic Background: Subtle Glow that adapts to theme */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_50%_0%,rgba(0,212,255,0.1),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(0,212,255,0.08),transparent_50%)]" />
        
        {/* Secondary glow for the bottom-right for consistent depth */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_100%_100%,rgba(143,255,0,0.03),transparent_70%)] pointer-events-none" />
      </div>

      <main className="relative z-10 flex flex-col">
        <Hero />
        
        {/* Services & Stats Section */}
        <section className="relative">
          <Services />
          <Stats />
        </section>

        <Process />

        {/* Pricing & FAQ Section */}
        <section className="bg-surface/10 dark:bg-transparent">
          <Pricing />
          <FAQ />
        </section>

        <Contact />
      </main>
    </div>
  );
}