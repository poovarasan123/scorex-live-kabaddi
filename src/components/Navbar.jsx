import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import PlayStoreBadge from "./PlayStoreBadge.jsx";

const links = [
  { href: "#features", label: "Features" },
  { href: "#screenshots", label: "Screenshots" },
  { href: "#how", label: "How it works" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${
        scrolled ? "bg-ink-900/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <img src="/logo.png" alt="ScoreX logo" className="w-9 h-9 rounded-lg" width="36" height="36" />
          <span className="font-display font-bold text-lg tracking-tight">Score<span className="brand-text">X</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-slate-300 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <PlayStoreBadge href="#cta" height={42} />
        </div>

        <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2 text-white" aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-ink-800/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-5 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-slate-200 py-1">
                  {l.label}
                </a>
              ))}
              <div className="mt-2" onClick={() => setOpen(false)}>
                <PlayStoreBadge href="#cta" height={52} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
