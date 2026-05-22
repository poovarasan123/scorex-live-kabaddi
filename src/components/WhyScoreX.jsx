import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import SectionHeading from "./ui/SectionHeading.jsx";

const manual = ["Slow paper-based logging", "Error-prone manual math", "No real-time visibility", "Hard to share results", "No history or audit trail"];
const scorex = ["Lightning-fast tap scoring", "Automatic, accurate stats", "Live updates in real time", "Instant shareable summary", "Full timestamped event log"];

function Card({ title, items, isPro }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-3xl p-8 ${isPro ? "bg-brand-gradient text-white shadow-glow" : "glass"}`}
    >
      <h3 className={`font-display text-2xl font-bold ${isPro ? "text-white" : "text-white"}`}>{title}</h3>
      <ul className="mt-6 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-3">
            <span className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center ${isPro ? "bg-white/20" : "bg-red-500/20"}`}>
              {isPro ? <Check className="w-4 h-4 text-white" /> : <X className="w-4 h-4 text-red-400" />}
            </span>
            <span className={isPro ? "text-white/95" : "text-slate-300"}>{it}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function WhyScoreX() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why ScoreX"
          title={<>The professional <span className="brand-text">upgrade</span></>}
          subtitle="See how ScoreX changes the way Kabaddi matches are managed."
        />
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Card title="Manual Scoring" items={manual} />
          <Card title="ScoreX" items={scorex} isPro />
        </div>
      </div>
    </section>
  );
}
