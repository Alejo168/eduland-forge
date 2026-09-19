import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, BookOpenCheck, CheckCircle2, FlaskConical, Gauge, Globe2, Headphones, Layers3, ShieldCheck, SlidersHorizontal, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteBand } from "@/components/site-layout";
import { SectionHeading } from "@/components/section-heading";
import heroImage from "@/assets/automation-lab.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Eduland Technology | Equipamiento educativo y científico en Perú" },
    { name: "description", content: "Módulos didácticos, laboratorios científicos, instrumentación y soluciones tecnológicas para universidades e institutos del Perú." },
    { property: "og:title", content: "Eduland Technology | Equipamiento educativo y científico" },
    { property: "og:description", content: "Soluciones integrales para formación técnica, ciencia e industria con soporte local y cobertura nacional." },
    { property: "og:type", content: "website" }, { property: "og:url", content: "/" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/" }] }), component: HomePage,
});

const categories = [
  { icon: Layers3, n: "01", title: "Módulos educativos técnicos", text: "Electricidad, electrónica, PLC, automatización, neumática e hidráulica.", category: "modulos" },
  { icon: FlaskConical, n: "02", title: "Laboratorios de ciencias", text: "Soluciones para física, química, biología y ensayos de materiales.", category: "ciencias" },
  { icon: Gauge, n: "03", title: "Instrumentación y medición", text: "Equipos de prueba, generación y medición de precisión.", category: "instrumentacion" },
  { icon: SlidersHorizontal, n: "04", title: "Software técnico", text: "Simulación, diseño de ingeniería y licenciamiento académico.", category: "software" },
] as const;

function HomePage() {
  return <>
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-ink text-primary-foreground">
      <img src={heroImage} alt="Módulo educativo de automatización industrial" className="absolute inset-0 h-full w-full object-cover opacity-40" width="1408" height="912" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/20" />
      <div className="technical-grid absolute inset-0 opacity-[0.06]" />
      <div className="page-shell relative flex min-h-[calc(100vh-5rem)] items-center py-16">
        <div className="max-w-4xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-sky"><span className="h-px w-10 bg-sky" />Tecnología para aprender, investigar y transformar</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.04] sm:text-6xl lg:text-7xl">Soluciones Integrales y Equipamiento Educativo de Vanguardia</h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-primary-foreground/78 sm:text-lg">Importación, distribución e integración de módulos didácticos, laboratorios científicos y equipamiento especializado para universidades, institutos y centros de investigación.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button asChild variant="sky" size="lg"><Link to="/catalogo">Ver catálogo completo <ArrowRight /></Link></Button><Button asChild variant="inverse" size="lg"><Link to="/contacto">Contacto directo</Link></Button></div>
        </div>
      </div>
      <div className="relative border-t border-primary-foreground/15 bg-ink/70"><div className="page-shell grid md:grid-cols-3">{[{icon:ShieldCheck,label:"Garantía y soporte local"},{icon:BookOpenCheck,label:"Cumplimiento normativo"},{icon:Globe2,label:"Cobertura nacional"}].map(({icon:Icon,label})=><div key={label} className="flex items-center gap-3 border-primary-foreground/15 py-5 md:border-r md:px-7 first:md:pl-0 last:md:border-0"><Icon className="size-5 text-sky" /><span className="text-sm font-semibold">{label}</span></div>)}</div></div>
    </section>

    <section className="py-24"><div className="page-shell"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionHeading eyebrow="Portafolio técnico" title="Equipamiento para cada etapa de la formación" description="Una oferta organizada para facilitar la evaluación técnica, selección y puesta en operación de cada solución."/><Button asChild variant="outline"><Link to="/catalogo">Explorar todo <ArrowRight /></Link></Button></div><div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 lg:grid-cols-4">{categories.map(({icon:Icon,...item})=><Link key={item.n} to="/catalogo" search={{ category: item.category }} className="group bg-card p-7 transition-colors hover:bg-secondary"><div className="flex items-start justify-between"><Icon className="size-7 text-primary"/><span className="font-mono text-xs text-muted-foreground">{item.n}</span></div><h3 className="mt-12 text-lg font-bold text-ink">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p><ArrowRight className="mt-7 size-5 text-primary transition-transform group-hover:translate-x-1"/></Link>)}</div></div></section>

    <section className="border-y border-border bg-panel py-24"><div className="page-shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr]"><SectionHeading eyebrow="Ventaja Eduland" title="Decisiones técnicas con respaldo local" description="Acompañamos el proceso desde la definición del requerimiento hasta la continuidad operativa del laboratorio."/><div className="grid gap-8 sm:grid-cols-2">{[{icon:Award,title:"Inversión eficiente",text:"Alternativas competitivas evaluadas según desempeño y necesidad institucional."},{icon:BookOpenCheck,title:"Enfoque curricular",text:"Módulos configurables según competencias, planes de estudio y resultados de aprendizaje."},{icon:Headphones,title:"Soporte especializado",text:"Orientación local para instalación, operación, mantenimiento y continuidad de uso."},{icon:CheckCircle2,title:"Atención integral",text:"Un solo equipo para coordinar producto, logística, puesta en marcha y capacitación."}].map(({icon:Icon,title,text})=><div key={title} className="border-l-2 border-sky pl-5"><Icon className="size-6 text-primary"/><h3 className="mt-4 font-bold text-ink">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div>)}</div></div></section>
    <QuoteBand />
  </>;
}
