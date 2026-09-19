export function SectionHeading({ eyebrow, title, description, align = "left" }: { eyebrow: string; title: string; description?: string; align?: "left" | "center" }) {
  return <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2>{description && <p className="section-description">{description}</p>}</div>;
}
