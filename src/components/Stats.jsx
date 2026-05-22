import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: 5000, suffix: "+", label: "Matches Managed" },
  { value: 1200, suffix: "+", label: "Teams Scored" },
  { value: 150, suffix: "+", label: "Tournaments Supported" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Offline Reliability" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className="py-20 border-y border-white/5 bg-ink-800/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-2xl p-6 text-center"
          >
            <div className="font-display text-3xl sm:text-4xl font-bold brand-text">
              {inView && (
                <CountUp end={s.value} suffix={s.suffix} decimals={s.decimals || 0} duration={2.4} />
              )}
            </div>
            <div className="mt-2 text-sm text-slate-400">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
