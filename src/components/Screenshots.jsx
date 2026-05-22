import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PhoneMockup from "./PhoneMockup.jsx";
import SectionHeading from "./ui/SectionHeading.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { i: 1, title: "Live Match Dashboard", desc: "All match metrics at a glance — score, timer, raids and tackles in one screen." },
  { i: 2, title: "Raid Action Capture", desc: "Tap to log Bonus, Out, Super Raid or Lona. Stats update instantly." },
  { i: 3, title: "Player Roster", desc: "Manage substitutions, reservations and on-court players in real time." },
  { i: 4, title: "Card & Penalty Logs", desc: "Issue cards, timeouts and warnings with a clear audit trail." },
  { i: 5, title: "Match History", desc: "Every action is timestamped and reviewable post-game." },
  { i: 6, title: "Tournament Mode", desc: "Manage brackets, schedules and team standings end-to-end." },
  { i: 7, title: "Offline Scoring", desc: "Keep scoring even when you lose connection. Sync resumes automatically." },
  { i: 8, title: "Match Summary", desc: "Auto-generated reports ready to share with teams and organizers." },
];

export default function Screenshots() {
  const [idx, setIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="screenshots" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] radial-glow opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <SectionHeading
          eyebrow="Inside the App"
          title={<>A look at <span className="brand-text">ScoreX</span></>}
          subtitle="Crafted for speed, clarity and zero-lag scoring."
        />

        {!isMobile ? (
          <div className="mt-16 space-y-24">
            {slides.map((s, i) => (
              <motion.div
                key={s.i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="flex justify-center">
                  <PhoneMockup index={s.i} alt={s.title} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-brand-400 tracking-widest uppercase">Step {s.i}</div>
                  <h3 className="mt-3 font-display text-3xl font-bold text-white">{s.title}</h3>
                  <p className="mt-4 text-slate-400 leading-relaxed max-w-md">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="mt-12">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${idx * 100}%` }}
                transition={{ type: "spring", stiffness: 180, damping: 24 }}
              >
                {slides.map((s) => (
                  <div key={s.i} className="min-w-full flex flex-col items-center px-4">
                    <PhoneMockup index={s.i} alt={s.title} />
                    <div className="mt-6 text-center">
                      <h3 className="font-display text-xl font-bold text-white">{s.title}</h3>
                      <p className="mt-2 text-sm text-slate-400 max-w-xs mx-auto">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4">
              <button onClick={() => setIdx((v) => Math.max(0, v - 1))} className="p-2 rounded-full glass" aria-label="Previous">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`w-2 h-2 rounded-full transition-colors ${i === idx ? "bg-brand-500 w-6" : "bg-white/20"}`}
                  />
                ))}
              </div>
              <button onClick={() => setIdx((v) => Math.min(slides.length - 1, v + 1))} className="p-2 rounded-full glass" aria-label="Next">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
