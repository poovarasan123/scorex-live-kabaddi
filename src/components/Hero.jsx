import { motion } from "framer-motion";
import { Trophy, Timer, Zap, Sparkles } from "lucide-react";
import PhoneMockup from "./PhoneMockup.jsx";
import PlayStoreBadge from "./PlayStoreBadge.jsx";

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="aurora aurora-3" />
      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-brand-400">
            <Sparkles className="w-3.5 h-3.5" /> New · Built for Kabaddi
          </span>

          <h1 className="mt-5 font-display font-bold tracking-tight text-5xl sm:text-6xl lg:text-7xl leading-[1.02]">
            Live Kabaddi <br className="hidden sm:block" />
            Scoring <span className="brand-text italic">reimagined.</span>
          </h1>

          <p className="mt-6 text-slate-300/90 text-base sm:text-lg max-w-xl leading-relaxed">
            ScoreX helps officials and organizers manage Kabaddi matches with real-time score tracking,
            substitutions, cards and raid actions — all from your phone.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PlayStoreBadge href="#cta" height={58} />
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <div className="flex -space-x-1.5">
                {[0,1,2,3].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-ink-900 bg-gradient-to-br from-brand-500 to-brand-400" />
                ))}
              </div>
              <span>Loved by referees & organizers</span>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-brand-400" /> Lightning fast</div>
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
