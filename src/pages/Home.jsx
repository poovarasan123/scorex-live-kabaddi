import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Stats from "../components/Stats.jsx";
import Features from "../components/Features.jsx";
import Screenshots from "../components/Screenshots.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Offline from "../components/Offline.jsx";
import WhyScoreX from "../components/WhyScoreX.jsx";
import Testimonials from "../components/Testimonials.jsx";
import FAQ from "../components/FAQ.jsx";
import CTA from "../components/CTA.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-ink-900 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Screenshots />
        <HowItWorks />
        <Offline />
        <WhyScoreX />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
