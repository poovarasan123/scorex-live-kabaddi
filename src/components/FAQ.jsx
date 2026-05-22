import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "./ui/SectionHeading.jsx";

const faqs = [
  { q: "Can ScoreX work offline?", a: "Yes. All match events are stored locally on the device. Scoring continues even with no connection and syncs when you're back online." },
  { q: "Can I manage tournaments?", a: "Absolutely. ScoreX supports full tournament setup including brackets, schedules and team standings." },
  { q: "Can substitutions be tracked?", a: "Every substitution, reservation and roster change is timestamped and reviewable in the match log." },
  { q: "Can I undo match actions?", a: "Yes. Any scoring event can be undone or corrected, and the full audit trail is preserved." },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="FAQ" title={<>Common <span className="brand-text">questions</span></>} />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = i === open;
            return (
              <div key={f.q} className="glass rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-white">{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-brand-400">
                    <Plus className="w-5 h-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
