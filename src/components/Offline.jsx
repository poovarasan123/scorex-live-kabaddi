import { motion } from "framer-motion";
import { Smartphone, Database, Cloud, ArrowRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading.jsx";

const nodes = [
  { icon: Smartphone, label: "Device", desc: "Score on the field" },
  { icon: Database, label: "Local Storage", desc: "Saved instantly" },
  { icon: Cloud, label: "Sync", desc: "When you're back online" },
];

export default function Offline() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] radial-glow opacity-30 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
        <SectionHeading
          eyebrow="Offline-First"
          title={<>Scoring that <span className="brand-text">never stops</span></>}
          subtitle="ScoreX works even without internet. Match events stay safely stored locally and sync the moment you reconnect."
        />

        <div className="mt-14 glass rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {nodes.map((n, i) => (
              <div key={n.label} className="flex items-center gap-6 md:flex-col md:gap-4 md:text-center">
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-brand-gradient flex items-center justify-center shadow-glow animate-pulseGlow"
                >
                  <n.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </motion.div>
                <div className="md:mt-2">
                  <div className="font-display font-bold text-white">{n.label}</div>
                  <div className="text-sm text-slate-400">{n.desc}</div>
                </div>
                {i < nodes.length - 1 && (
                  <ArrowRight className="hidden md:block w-6 h-6 text-brand-400 absolute" style={{ position: "static" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
