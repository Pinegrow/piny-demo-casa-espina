export function SectionHeading({eyebrow, title, description}: {eyebrow: string; title: string; description: string}) {
  return <div className="max-w-2xl">
    <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-clay">{eyebrow}</p>
    <h2 className="font-display text-4xl leading-[1.08] tracking-tight md:text-5xl">{title}</h2>
    <p className="mt-5 max-w-xl text-sm leading-7 text-moss">{description}</p>
  </div>;
}
