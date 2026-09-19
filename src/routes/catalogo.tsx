import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check, FileText, FlaskConical, Gauge, Layers3, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { PageIntro, WHATSAPP_URL } from "@/components/site-layout";
import automationImage from "@/assets/automation-lab.jpg";
import scienceImage from "@/assets/science-lab.jpg";
import instrumentImage from "@/assets/instrumentation.jpg";

const searchSchema = z.object({ category: z.enum(["modulos", "ciencias", "instrumentacion", "software"]).optional().catch(undefined) });
type Category = "todos" | "modulos" | "ciencias" | "instrumentacion" | "software";
const filters: { id: Category; label: string; icon: typeof Layers3 }[] = [
  { id: "todos", label: "Todo el catálogo", icon: Layers3 }, { id: "modulos", label: "Módulos técnicos", icon: Layers3 },
  { id: "ciencias", label: "Ciencias básicas", icon: FlaskConical }, { id: "instrumentacion", label: "Instrumentación", icon: Gauge }, { id: "software", label: "Software técnico", icon: SlidersHorizontal },
];
const products = [
  { category:"modulos", name:"Entrenador de automatización y PLC", code:"EDU-AUT-01", image:automationImage, specs:["PLC modular y HMI","Sensores y actuadores industriales","Prácticas escalables"] },
  { category:"modulos", name:"Banco de neumática e hidráulica", code:"EDU-PNE-02", image:automationImage, specs:["Panel didáctico modular","Válvulas y cilindros de práctica","Guías de experimentación"] },
  { category:"ciencias", name:"Laboratorio integral de ciencias", code:"EDU-LAB-01", image:scienceImage, specs:["Configuración por disciplina","Instrumental de laboratorio","Mobiliario técnico compatible"] },
  { category:"ciencias", name:"Sistema de microscopía digital", code:"EDU-BIO-03", image:scienceImage, specs:["Captura digital de muestras","Óptica para docencia","Visualización colaborativa"] },
  { category:"instrumentacion", name:"Estación de medición electrónica", code:"EDU-INS-01", image:instrumentImage, specs:["Osciloscopio digital","Fuente de poder regulada","Generador de funciones"] },
  { category:"instrumentacion", name:"Banco de pruebas eléctricas", code:"EDU-INS-04", image:instrumentImage, specs:["Medición de variables eléctricas","Protección integrada","Configuración para prácticas"] },
  { category:"software", name:"Suite de simulación industrial", code:"EDU-SOF-01", image:automationImage, specs:["Simulación de procesos","Licenciamiento académico","Implementación institucional"] },
  { category:"software", name:"Herramientas de diseño en ingeniería", code:"EDU-SOF-02", image:instrumentImage, specs:["Diseño y análisis técnico","Gestión centralizada de licencias","Orientación de implementación"] },
] as const;

export const Route = createFileRoute("/catalogo")({ validateSearch: (search) => searchSchema.parse(search), head: () => ({ meta: [
  { title: "Catálogo de equipamiento | Eduland Technology" }, { name:"description", content:"Explore módulos educativos, laboratorios de ciencias, instrumentación y software técnico para instituciones del Perú." }, { property:"og:title", content:"Catálogo técnico | Eduland Technology" }, { property:"og:description", content:"Equipamiento organizado por áreas técnicas, con soporte local y asesoramiento especializado." }, { property:"og:type", content:"website" }, { property:"og:url", content:"/catalogo" }, { name:"twitter:card", content:"summary_large_image" },
], links:[{rel:"canonical",href:"/catalogo"}] }), component: CatalogPage });

function CatalogPage(){const search=Route.useSearch(); const [active,setActive]=useState<Category>(search.category ?? "todos"); const visible=active==="todos"?products:products.filter(p=>p.category===active); return <><PageIntro eyebrow="Catálogo de equipamiento" title="Tecnología configurada para enseñar, medir y experimentar" description="Explore soluciones organizadas por área. Cada configuración final se define según el alcance técnico y académico de su institución."/>
<section className="py-20"><div className="page-shell"><div className="flex gap-2 overflow-x-auto pb-3" role="tablist" aria-label="Filtrar catálogo">{filters.map(({id,label,icon:Icon})=><Button key={id} variant={active===id?"default":"outline"} onClick={()=>setActive(id)} className="shrink-0" role="tab" aria-selected={active===id}><Icon/>{label}</Button>)}</div><p className="mt-5 text-sm text-muted-foreground">{visible.length} soluciones de referencia</p><div className="mt-8 grid gap-6 md:grid-cols-2">{visible.map((product)=><article key={product.code} className="group overflow-hidden rounded-md border border-border bg-card"><div className="relative aspect-[16/9] overflow-hidden bg-panel"><img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" loading="lazy" width="1408" height="912"/><span className="absolute left-4 top-4 rounded-sm bg-ink px-3 py-1 font-mono text-[11px] text-primary-foreground">{product.code}</span></div><div className="p-6 sm:p-8"><h2 className="text-xl font-bold text-ink">{product.name}</h2><ul className="mt-5 grid gap-2">{product.specs.map(spec=><li key={spec} className="flex items-center gap-2 text-sm text-muted-foreground"><Check className="size-4 text-primary"/>{spec}</li>)}</ul><div className="mt-6 flex items-center gap-2 border-t border-border pt-5 text-xs font-semibold text-primary"><span className="size-2 rounded-full bg-sky"/>Soporte técnico local disponible</div><Button asChild className="mt-6 w-full"><a href={`${WHATSAPP_URL}%0AEquipo:%20${encodeURIComponent(product.name)}`} target="_blank" rel="noreferrer"><FileText/>Solicitar ficha técnica / Cotización <ArrowUpRight/></a></Button></div></article>)}</div></div></section></>}
