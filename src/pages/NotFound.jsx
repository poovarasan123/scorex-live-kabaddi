import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ink-900 text-center px-6">
      <div>
        <h1 className="text-7xl font-display font-bold brand-text">404</h1>
        <p className="mt-4 text-slate-300">This page doesn't exist.</p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 rounded-full bg-brand-gradient font-semibold text-white">
          Back home
        </Link>
      </div>
    </div>
  );
}
