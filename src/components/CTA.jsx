import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-10 md:p-16 text-center overflow-hidden bg-gradient-to-br from-ink-700 to-ink-800 border border-white/10"
        >
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] radial-glow opacity-60 pointer-events-none" />
          <h2 className="relative font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Run Kabaddi Matches <br className="hidden sm:block" /> <span className="brand-text">Like a Pro</span>
          </h2>
          <p className="relative mt-5 text-slate-300 max-w-xl mx-auto">
            Join organizers and referees using ScoreX to manage matches with confidence.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-gradient text-white font-semibold shadow-glow hover:scale-[1.03] transition-transform">
              <Download className="w-4 h-4" /> Download
            </a>
            <a href="mailto:hello@scorex.app" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass text-white font-semibold hover:bg-white/10 transition-colors">
              <Mail className="w-4 h-4" /> Contact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
