import { motion } from "framer-motion";
import { PlusCircle, Users, Activity, Settings2, CheckCircle2 } from "lucide-react";
import SectionHeading from "./ui/SectionHeading.jsx";

const steps = [
  { icon: PlusCircle, title: "Create Match", desc: "Set up your fixture in seconds — name, teams, duration." },
  { icon: Users, title: "Select Teams", desc: "Pick rosters and assign on-court players." },
  { icon: Activity, title: "Track Events", desc: "Log raids, tackles, bonuses and cards with one tap." },
  { icon: Settings2, title: "Manage Match Live", desc: "Substitutions, timeouts and reservations as the action unfolds." },
  { icon: CheckCircle2, title: "Finish and Save", desc: "Auto-generated summary ready to share." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 bg-ink-800/30 border-y border-white/5">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="How it works"
          title={<>From whistle to <span className="brand-text">final score</span></>}
          subtitle="Five tap-driven steps to a fully managed match."
        />

        <div className="mt-14 relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/0 via-brand-500/50 to-brand-500/0 md:-translate-x-1/2" />
          <div className="space-y-12">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className={`relative flex items-start gap-6 md:items-center ${i % 2 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/2 md:px-8 pl-16 md:pl-0">
                  <div className={`glass rounded-2xl p-6 ${i % 2 ? "md:text-right" : ""}`}>
                    <div className="text-xs font-semibold tracking-widest text-brand-400 uppercase">Step {i + 1}</div>
                    <h3 className="mt-2 font-display text-xl font-bold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 md:top-1/2 md:-translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-brand-gradient shadow-glow flex items-center justify-center animate-pulseGlow">
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
