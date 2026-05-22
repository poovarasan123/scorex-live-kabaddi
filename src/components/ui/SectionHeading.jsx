export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {eyebrow && (
        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-400">{eyebrow}</div>
      )}
      <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1]">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-slate-400">{subtitle}</p>}
    </div>
  );
}
