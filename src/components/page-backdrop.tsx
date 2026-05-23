/** Decorative orbs for hero / template areas — complements resume imagery */
export function PageBackdropOrbs({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <div className="absolute -right-16 top-1/4 h-72 w-72 rounded-full bg-forest-500/10 blur-3xl" />
      <div className="absolute -left-20 bottom-1/4 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
      <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-sage-200/40 blur-3xl" />
    </div>
  );
}
