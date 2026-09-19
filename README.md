# EduTech Navigator

Actúa como un desarrollador frontend senior y diseñador UI/UX especializado en plataformas B2B para los sectores tecnológico, educativo e industrial.

Crea un sitio web corporativo MULTI-PAGE completo, moderno y de alto impacto para la empresa: "Eduland Technology S.R.L." (dominio: edulandtech.com). 

Toma como referencia de estructura industrial, catálogo técnico y seriedad corporativa los sitios de Andes Technology (andestechnology.com) e Inroprin (inroprin.com), pero con un diseño visual contemporáneo (Next.js, Tailwind CSS, Lucide Icons y shadcn/ui).

1. IDENTIDAD CORPORATIVA Y PARÁMETROS GLOBALES:
- Aplica la paleta de colores corporativos del logo adjunto en formato SVG (azules tecnológicos/marinos, acentos celestes y fondos neutros ultra limpios #F8FAFC / blanco).
- Header global fijo (sticky con backdrop-blur-md) que incluya:
  * Logotipo oficial con enlace a la página principal.
  * Menú de navegación multi-page: Inicio, Nosotros, Catálogo, Servicios y Contacto.
  * Botón CTA destacado: "Cotizar por WhatsApp" que enlace directamente a: https://wa.me/51933309204?text=Hola%20Eduland%20Technology,%20deseo%20solicitar%20una%20cotización.
- Footer global profesional que incluya:
  * Razón social: Eduland Technology S.R.L.
  * Dirección: San Isidro, Lima - Perú.
  * Correo: ventas@edulandtech.com | WhatsApp: +51 933309204.
  * Enlaces a cada página del sitio, aviso de copyright 2026 y mención de cumplimiento de especificaciones técnicas para contrataciones públicas y privadas.

2. ARQUITECTURA Y PÁGINAS A GENERAR (MULTI-PAGE):

PÁGINA 1: INICIO (HOME - `/`)
- Hero Section:
  * Titular: "Soluciones Integrales y Equipamiento Educativo de Vanguardia".
  * Bajada: "Importación, distribución e integración de módulos didácticos, laboratorios científicos y equipamiento especializado para universidades, institutos y centros de investigación."
  * Botones CTA: "Ver Catálogo Completo" y "Contacto Directo".
  * Barra de sellos de confianza: Garantía y Soporte Local | Cumplimiento Normativo | Cobertura Nacional.
- Resumen de Categorías Destacadas: 4 tarjetas interactivas que lleven a la sección del catálogo.
- Por Qué Elegirnos: Cuadrícula destacando precios competitivos, módulos adaptados a currículos formativos y soporte postventa especializado.
- Llamado a la acción institucional: Banner enfocado en licitaciones y proyectos formativos con botón para cotizar.

PÁGINA 2: NOSOTROS (`/nosotros`)
- Quiénes Somos: Presentación formal de Eduland Technology S.R.L. como socio estratégico en tecnología educativa y científica.
- Misión: "Importar y comercializar módulos educativos innovadores y equipamiento de alta calidad para laboratorios, destinados a instituciones educativas y empresas, con el fin de apoyar la educación práctica y el desarrollo científico."
- Visión: "Ser la empresa líder en el suministro de soluciones educativas y científicas en Perú, destacándose por la calidad de nuestros productos, un excelente servicio al cliente y el impulso a la educación tecnológica y científica."
- Objetivos Estratégicos: Alianzas internacionales con fabricantes líderes, cobertura nacional y soporte técnico de primer nivel.
- Compromiso de Calidad: Mención al asesoramiento técnico personalizado según los requerimientos de cada cliente.

PÁGINA 3: CATÁLOGO DE EQUIPAMIENTO (`/catalogo`)
- Sistema de visualización técnica estructurado en 4 grandes áreas con filtros interactivos:
  1. Módulos Educativos Técnicos: Entrenadores de electricidad, electrónica, automatización industrial, PLC, neumática e hidráulica.
  2. Laboratorios de Ciencias Básicas: Equipamiento para física, química, biología y ensayos de materiales.
  3. Instrumentación y Medición: Osciloscopios, fuentes de poder, generadores de funciones, multímetros de precisión y bancos de pruebas.
  4. Software y Licenciamiento Técnico: Herramientas de simulación, diseño en ingeniería y licencias académicas institucionales.
- Cada ítem del catálogo debe mostrar: Imagen técnica de referencia, especificaciones clave, disponibilidad de soporte local y un botón: "Solicitar Ficha Técnica / Cotización" que abra el formulario o redirija al WhatsApp institucional (+51 933309204).

PÁGINA 4: SERVICIOS Y POSTVENTA (`/servicios`)
Detalle exhaustivo de las capacidades operativas (inspirado en Inroprin y Andes Tech):
- Importación Directa y Gestión Logística: Suministro de equipamiento desde fabricantes globales certificados.
- Instalación y Puesta en Marcha: Montaje y pruebas operativas en los laboratorios del cliente.
- Capacitación y Transferencia Tecnológica: Entrenamiento práctico para docentes, laboratoristas y personal técnico.
- Calibración, Mantenimiento y Repuestos: Planes de mantenimiento preventivo y correctivo con repuestos originales para garantizar la vida útil de los equipos.

PÁGINA 5: CONTACTO Y COTIZACIONES (`/contacto`)
- Formulario de requerimientos B2B:
  * Campos: Nombre completo, Institución/Empresa, Correo corporativo (ej. ventas@edulandtech.com), Teléfono/Celular, Área o equipo de interés (menú desplegable con las áreas del catálogo) y Detalle del requerimiento.
  * Mensaje de éxito al enviar la cotización.
- Tarjeta lateral de datos directos:
  * Dirección fiscal/operativa: San Isidro, Lima - Perú.
  * Correo institucional: ventas@edulandtech.com
  * Teléfono / WhatsApp: +51 933309204 (con botón para iniciar chat de inmediato).
  * Horario de atención comercial.

3. REQUISITOS TÉCNICOS:
- La navegación entre páginas debe ser completamente funcional mediante el menú superior.
- Código limpio, semántico, modular y optimizado para SEO técnico.
- Totalmente responsive para computadoras, tablets y smartphones.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d23ed72d-b81b-4456-b5f5-0dd46f2868f9).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
