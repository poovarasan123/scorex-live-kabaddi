import { motion } from "framer-motion";
import { Activity, Target, ShieldAlert, WifiOff, Zap, Trophy, Layers, Users } from "lucide-react";
import SectionHeading from "./ui/SectionHeading.jsx";

const features = [
  { icon: Activity, title: "Real-time Scoring", desc: "Instant score updates and live broadcasting to every connected device." },
  { icon: Target, title: "Complete Raid Actions", desc: "Track Out, Bonus, Lona, Super Raid and Super Tackle with one tap." },
  { icon: ShieldAlert, title: "Match Controls", desc: "Timeouts, official timeouts, card warnings and player reservations." },
  { icon: Users, title: "Substitutions", desc: "Fluid player swaps with full history and roster awareness." },
  { icon: WifiOff, title: "Offline-First", desc: "No network? No problem. Scoring keeps running and syncs later." },
  { icon: Zap, title: "Fast Scoring Workflow", desc: "Designed for speed — purpose-built for the pace of Kabaddi." },
  { icon: Trophy, title: "Pro Match Management", desc: "Tournament-grade controls trusted by referees and organizers." },
  { icon: Layers, title: "Reusable Compose Architecture", desc: "Built on a modular foundation that scales with your event." },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Features"
          title={<>Everything you need to <span className="brand-text">run a match</span></>}
          subtitle="Purpose-built tools for officials, organizers and federations."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative glass rounded-2xl p-6 overflow-hidden"
            >
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity bg-brand-gradient blur-2xl -z-10" style={{ opacity: 0.12 }} />
              <div className="w-11 h-11 rounded-xl bg-brand-gradient flex items-center justify-center shadow-glow">
                <f.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="mt-5 font-display font-semibold text-lg text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
