import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/eduland-technology-logo.svg.asset.json";

export const WHATSAPP_URL = "https://wa.me/51933309204?text=Hola%20Eduland%20Technology,%20deseo%20solicitar%20una%20cotización.";

const navigation = [
  { to: "/" as const, label: "Inicio" },
  { to: "/nosotros" as const, label: "Nosotros" },
  { to: "/catalogo" as const, label: "Catálogo" },
  { to: "/servicios" as const, label: "Servicios" },
  { to: "/contacto" as const, label: "Contacto" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="page-shell flex h-20 items-center justify-between gap-6">
        <Link to="/" aria-label="Eduland Technology - Inicio" onClick={() => setOpen(false)}>
          <img src={logo.url} alt="Eduland Technology" className="h-11 w-auto max-w-[220px]" width="1301" height="408" />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {navigation.map((item) => (
            <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Button asChild size="lg" className="hidden lg:inline-flex">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle />Cotizar por WhatsApp</a>
        </Button>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="page-shell flex flex-col py-4" aria-label="Navegación móvil">
            {navigation.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="border-b border-border py-3 text-sm font-semibold text-foreground">{item.label}</Link>)}
            <Button asChild className="mt-4 w-full"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle />Cotizar por WhatsApp</a></Button>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-primary-foreground">
      <div className="page-shell grid gap-10 py-14 md:grid-cols-[1.35fr_0.65fr_1fr]">
        <div><img src={logo.url} alt="Eduland Technology" className="h-12 w-auto brightness-0 invert" width="1301" height="408" /><p className="mt-5 max-w-md text-sm leading-6 text-primary-foreground/70">Soluciones educativas, científicas e industriales alineadas a los requerimientos técnicos de instituciones públicas y privadas.</p></div>
        <div><h2 className="footer-title">Navegación</h2><div className="mt-4 grid gap-3">{navigation.map((item) => <Link key={item.to} to={item.to} className="footer-link">{item.label}</Link>)}</div></div>
        <div><h2 className="footer-title">Contacto directo</h2><div className="mt-4 grid gap-3 text-sm text-primary-foreground/75"><span className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-sky" />San Isidro, Lima - Perú</span><a className="flex gap-3 hover:text-sky" href="mailto:ventas@edulandtech.com"><Mail className="mt-0.5 size-4 shrink-0 text-sky" />ventas@edulandtech.com</a><a className="flex gap-3 hover:text-sky" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><Phone className="mt-0.5 size-4 shrink-0 text-sky" />+51 933 309 204</a></div></div>
      </div>
      <div className="border-t border-primary-foreground/10"><div className="page-shell flex flex-col gap-2 py-5 text-xs text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Eduland Technology S.R.L.</span><span>Cumplimiento de especificaciones técnicas para contrataciones públicas y privadas.</span></div></div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="page-intro"><div className="page-shell"><p className="eyebrow">{eyebrow}</p><h1 className="page-title">{title}</h1><p className="page-description">{description}</p></div></section>;
}

export function QuoteBand({ title = "¿Está planificando una licitación o nuevo laboratorio?", text = "Nuestro equipo revisa especificaciones, alcance y compatibilidad para proponer una solución técnicamente sustentada." }: { title?: string; text?: string }) {
  return <section className="bg-primary"><div className="page-shell flex flex-col gap-7 py-12 text-primary-foreground md:flex-row md:items-center md:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-sky">Atención institucional</p><h2 className="mt-3 max-w-3xl text-2xl font-bold md:text-3xl">{title}</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-primary-foreground/75">{text}</p></div><Button asChild size="lg" variant="secondary" className="shrink-0"><Link to="/contacto">Solicitar cotización <ArrowUpRight /></Link></Button></div></section>;
}
