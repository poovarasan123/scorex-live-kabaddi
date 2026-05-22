import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionHeading from "./ui/SectionHeading.jsx";

const items = [
  { name: "Rajesh Patel", role: "Tournament Organizer", quote: "ScoreX changed how we run our state league. Real-time scoring with zero paperwork.", initials: "RP" },
  { name: "Anita Sharma", role: "Senior Referee", quote: "I trust it on the mat. Fast, accurate, and the offline mode has saved me twice.", initials: "AS" },
  { name: "Vikram Singh", role: "Federation Coordinator", quote: "The match summaries and tournament tools cut our admin work in half.", initials: "VS" },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-ink-800/30 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Loved on the mat"
          title={<>Trusted by <span className="brand-text">organizers & referees</span></>}
        />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-7"
            >
              <div className="flex gap-1 text-brand-400">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="mt-4 text-slate-200 leading-relaxed">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-brand-gradient flex items-center justify-center font-bold text-white text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
