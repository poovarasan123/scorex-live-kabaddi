import { motion } from "framer-motion";
import { Download, Play, Trophy, Timer, Zap } from "lucide-react";
import PhoneMockup from "./PhoneMockup.jsx";

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute -top-32 -left-32 w-[520px] h-[520px] radial-glow opacity-60 pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] radial-glow opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-brand-400">
            <Zap className="w-3.5 h-3.5" /> Built for Kabaddi
          </span>

          <h1 className="mt-5 font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Live Kabaddi Scoring <br className="hidden sm:block" />
            <span className="brand-text">Made Simple</span>
          </h1>

          <p className="mt-6 text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
            ScoreX helps officials and organizers manage Kabaddi matches with real-time score tracking,
            substitutions, cards, raid actions and complete match control.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#cta" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-gradient text-white font-semibold shadow-glow hover:scale-[1.03] transition-transform">
              <Download className="w-4 h-4" /> Download App
            </a>
            <a href="#how" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass text-white font-semibold hover:bg-white/10 transition-colors">
              <Play className="w-4 h-4" /> Watch Demo
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2"><Trophy className="w-4 h-4 text-brand-400" /> Tournament Ready</div>
            <div className="flex items-center gap-2"><Timer className="w-4 h-4 text-brand-400" /> Real-time Sync</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            <motion.div
              className="absolute -left-10 top-10 z-0 opacity-90"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <PhoneMockup index={2} small />
            </motion.div>
            <motion.div
              className="relative z-10"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <PhoneMockup index={1} />
            </motion.div>
            <motion.div
              className="absolute -right-6 bottom-6 z-0 opacity-90 hidden sm:block"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            >
              <PhoneMockup index={3} small />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
