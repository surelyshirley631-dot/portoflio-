export default function SectionHeader({ eyebrow, title, description, className = "" }) {
  return (
    <div className={`mb-8 ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance text-2xl font-semibold md:text-3xl">{title}</h2>
      {description ? <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{description}</p> : null}
    </div>
  );
}
