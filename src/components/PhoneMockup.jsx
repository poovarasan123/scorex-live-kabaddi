import { motion } from "framer-motion";

export default function PhoneMockup({ index = 1, small = false, alt }) {
  const w = small ? 180 : 260;
  const h = small ? 360 : 540;
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="relative rounded-[2.2rem] p-2 bg-gradient-to-b from-slate-700 to-slate-900 shadow-2xl shadow-black/50"
      style={{ width: w, height: h }}
    >
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 rounded-full bg-black z-10" />
      <div className="w-full h-full rounded-[1.9rem] overflow-hidden bg-ink-800 relative">
        <img
          src={`/screenshots/${index}.png`}
          alt={alt || `ScoreX app screenshot ${index}`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-brand-500/10 via-transparent to-transparent" />
      </div>
    </motion.div>
  );
}
