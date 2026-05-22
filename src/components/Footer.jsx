import { Twitter, Instagram, Youtube, Github } from "lucide-react";

const links = [
  { href: "#features", label: "Features" },
  { href: "#screenshots", label: "Screenshots" },
  { href: "#how", label: "How it works" },
  { href: "#faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-800/40 mt-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <a href="#top" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="ScoreX" className="w-9 h-9 rounded-lg" width="36" height="36" />
            <span className="font-display font-bold text-lg">Score<span className="brand-text">X</span></span>
          </a>
          <p className="mt-4 text-sm text-slate-400 max-w-xs">Premium Kabaddi live scoring and match management — built for officials, organizers and federations.</p>
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Quick Links</div>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            {links.map((l) => (
              <li key={l.href}><a href={l.href} className="hover:text-white transition-colors">{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Follow</div>
          <div className="mt-4 flex items-center gap-3">
            {[Twitter, Instagram, Youtube, Github].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link" className="w-9 h-9 rounded-full glass flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} ScoreX. All rights reserved.
      </div>
    </footer>
  );
}
