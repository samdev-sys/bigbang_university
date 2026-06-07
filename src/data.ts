import { Program, Mentor } from './types';

export const PROGRAMS_DATA: Program[] = [
  {
    id: 'amazon-fba',
    name: 'Amazon FBA',
    shortDescription: 'Construye un negocio global vendiendo en Amazon.',
    detailedDescription: 'Aprende el modelo de negocio más rentable del comercio electrónico. Te guiamos de la mano desde la búsqueda de productos ganadores y la negociación con proveedores internacionales hasta el lanzamiento automatizado de tu propia marca en los almacenes de Amazon FBA en Europa y EE.UU.',
    duration: '12 Meses',
    level: 'Avanzado',
    imageUrl: "public/assets/amFBA.png",
    syllabus: [
      'Módulo 1: Fundamentos y mentalidad de un e-commerce millonario',
      'Módulo 2: Herramientas de análisis y búsqueda científica de productos',
      'Módulo 3: Negociación con proveedores en Asia y logística internacional',
      'Módulo 4: Creación de listados optimizados con Copywriting de alto impacto',
      'Módulo 5: Estrategias avanzadas de lanzamiento y campañas PPC en Amazon Ads',
      'Módulo 6: Escalado de marca, contabilidad y automatización operativa'
    ],
    certification: 'Certificación Profesional en Amazon FBA Logistics & Brand Creation by Big Bang University',
    salaryExpectation: 'Facturación estimada de 5K€ - 50K€ mensuales tras lanzar marca propia',
    targetProfile: 'Emprendedores que buscan ingresos pasivos semimanuales y escalado de producto físico sin gestionar envíos unitarios.',
    colorTheme: 'orange',
    accentGradient: 'from-orange-500/20 to-transparent'
  },
  {
    id: 'inteligencia-artificial',
    name: 'Inteligencia Artificial',
    shortDescription: 'Domina la IA y automatiza procesos para escalar.',
    detailedDescription: 'Conviértete en el perfil más demandado del siglo XXI. Aprende a integrar agentes de IA autónomos, LLMs de última generación y flujos automatizados complejos con herramientas no-code y Python para ahorrar miles de horas de trabajo y crear agencias de automatización altamente lucrativas.',
    duration: '12 Meses',
    level: 'Avanzado',
    imageUrl: "public/assets/IAload.png",
    syllabus: [
      'Módulo 1: Prompt Engineering profesional y arquitectura de LLMs',
      'Módulo 2: Automatización avanzada con Make, Zapier y n8n',
      'Módulo 3: Creación de Asistentes y Agentes Inteligentes con voz e imagen',
      'Módulo 4: Integración de APIs de OpenAI, Gemini y Antropic en procesos de negocio',
      'Módulo 5: Modelado de soluciones IA personalizadas para clientes y consultoría B2B',
      'Módulo 6: El modelo de negocio AAA: Inteligencia Artificial Automation Agency'
    ],
    certification: 'Especialista Máster en IA Aplicada y Automatización Industrial de Negocios por Big Bang University',
    salaryExpectation: 'Salario medio de 65.000€ - 120.000€ o contratos por agencia desde 3K€/mes',
    targetProfile: 'Profesionales hambrientos, directivos de innovación, consultores e integradores de tecnología que quieren optimizar empresas al 10x.',
    colorTheme: 'blue',
    accentGradient: 'from-blue-500/20 to-transparent'
  },
  {
    id: 'trading-inversion',
    name: 'Trading & Inversión',
    shortDescription: 'Aprende a invertir en los mercados como un profesional.',
    detailedDescription: 'Domina el arte de rentabilizar tu propio dinero fomentando la frialdad y el análisis matemático. Desarrolla un profundo conocimiento en análisis técnico, gestión algorítmica del riesgo, psicología bursátil, y obtén financiación compartida mediante cuentas de fondeo profesionales.',
    duration: '12 Meses',
    level: 'Avanzado',
    imageUrl: "public/assets/tradingE.png",
    syllabus: [
      'Módulo 1: Macroeconomía bursátil y estructura de mercados financieros',
      'Módulo 2: Análisis Técnico Cuantitativo e identificadores de liquidez institucional',
      'Módulo 3: Gestión estricta del riesgo y dimensionamiento de carteras de inversión',
      'Módulo 4: Psicología del Trader (Psicotrading) y control emocional',
      'Módulo 5: Operativa y superación de exámenes en Empresas de Fondeo (Prop Firms)',
      'Módulo 6: Finanzas Descentralizadas (DeFi) y Portafolios Multiactivos'
    ],
    certification: 'Chartered Financial Trader & Private Cryptoportfolio Analyst by Big Bang University',
    salaryExpectation: 'Gestión de cuentas fondeadas de 100K€ - 300K€ con reparto del 80% de ganancias',
    targetProfile: 'Personas analíticas, interesadas en finanzas y control numérico, que buscan independencia geográfica absoluta operando mercados mundiales.',
    colorTheme: 'green',
    accentGradient: 'from-green-500/20 to-transparent'
  },
  {
    id: 'ecommerce-marca',
    name: 'Ecommerce & Marca',
    shortDescription: 'Crea tu marca y escala tu tienda online al siguiente nivel.',
    detailedDescription: 'Deja de hacer dropshipping básico y construye un activo genuino y vendible. Domina los secretos de la creación de marcas DTC (Direct to Consumer). Desde la ingeniería web en Shopify hasta la adquisición hiper-agresiva mediante TikTok Ads y el diseño de packaging premium que fideliza clientes.',
    duration: '12 Meses',
    level: 'Avanzado',
    imageUrl: "public/assets/commerceE.png",
    syllabus: [
      'Módulo 1: Estudio de nichos emocionales y validación de productos de alto margen',
      'Módulo 2: Diseño interactivo de la experiencia de cliente (UX) en Shopify',
      'Módulo 3: Marketing viral y compra de tráfico en Meta Ads, TikTok Ads y Pinterest',
      'Módulo 4: Alianzas estratégicas con Influencers y embajadores de marca',
      'Módulo 5: Email Marketing de alto retorno (Klaviyo) y retención omnicanal',
      'Módulo 6: Cadena de suministro internacional y preparación de la marca para su venta (Exit)'
    ],
    certification: 'Máster Profesional en Dirección y Crecimiento de Marcas Digitales (DTC) por Big Bang University',
    salaryExpectation: 'Negocios con valoración de mercado escalables por encima del millón de euros',
    targetProfile: 'Marcas tradicionales necesitadas de digitalización, creadores de contenidos y emprendedores con foco en el branding estético.',
    colorTheme: 'purple',
    accentGradient: 'from-purple-500/20 to-transparent'
  },
  {
    id: 'ciberseguridad',
    name: 'Ciberseguridad',
    shortDescription: 'Conviértete en experto en seguridad digital.',
    detailedDescription: 'Protege la infraestructura digital global y conviértete en un activo defensivo impenetrable. Este programa integral te entrena desde las bases de redes, criptografía y sistemas hasta el Pentesting ofensivo avanzado, asegurando que puedas analizar vulnerabilidades críticas en grandes corporaciones de forma legal.',
    duration: '12 Meses',
    level: 'Avanzado',
    imageUrl: "public/assets/ciber.png",
    syllabus: [
      'Módulo 1: Fundamentos de Redes seguras, arquitectura Linux y Windows',
      'Módulo 2: Criptografía avanzada y análisis de protocolos sensibles',
      'Módulo 3: Hacking Ético I: Reconocimiento pasivo y escaneo de vulnerabilidades',
      'Módulo 4: Hacking Ético II: Explotación Web, de Redes e ingeniería social',
      'Módulo 5: Ciberseguridad Defensiva y monitorización de eventos (SIEM/SOC)',
      'Módulo 6: Auditoría Industrial, cumplimiento normativo (ISO 27001) y reportes ejecutivos'
    ],
    certification: 'Analista de Seguridad Digital & Auditor de Penetración de Sistemas Licenciado (Big Bang University Security)',
    salaryExpectation: 'Salario inicial de 45.000€ - 85.000€ anuales como consultor o Pentester',
    targetProfile: 'Amantes del software técnico, profesionales del IT que quieren reinventar su estatus, y apasionados de los desafíos y sistemas rigurosos.',
    colorTheme: 'cyan',
    accentGradient: 'from-cyan-500/20 to-transparent'
  }
];

export const MENTORS_DATA: Mentor[] = [
  {
    id: 'jorge-morcuende',
    name: 'Jorge Morcuende',
    title: 'Founder & CEO +8 Negocios Online',
    description: 'Emprendedor en serie con un portfolio de negocios automatizados y pasión por la libertad y el estilo de vida del nómada digital.',
    longBio: 'Con más de 12 años fundando iniciativas en la red, Jorge es un referente nacional. Ha creado 8 empresas digitales de éxito que superan conjuntamente la facturación de 7 de forma autónoma. El alma detrás del concepto "Construye tu imperio."',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7BZIHnLSaNrJ8UpQgKofOzfLEXkjyTa2MBw13ybJZZNo89WoSUvZFEX1QZvymfaVOTxEZxpBcvNw79M0YHFTU4pYMo28HvlNQNP8TsMl3ImfATCZGlE9okO-a6WvajIxPx6ivqM2bdBbnAwn1CYKn4vZHTOlb3_scmKWy2sbzl3mZ7GvjQpBuyJZts6xKP6qCjiNZ520nsPqOaEZVUlWzQ5mKfYMZPA1BqtlYHsLp1WP1nOYwwd_fEUvUfJMQj19SY5DCake4ox0',
    linkedinUrl: 'https://linkedin.com/in/jorge-morcuende-bbu',
    specialty: ['Estrategia Empresarial', 'Nómadismo Digital', 'Modelos SaaS', 'Estructuración fiscal']
  },
  {
    id: 'rafa-vilches',
    name: 'Rafa Vilches',
    title: 'Ecommerce Expert +7 Figuras en Amazon',
    description: 'Especialista en estructuración de productos físicos en Amazon FBA Internacional con miles de unidades mensuales vendidas.',
    longBio: 'Rafa cuenta con una dilatada experiencia en logística china y posicionamiento de listados mediante algoritmos orgánicos de Amazon. Su habilidad radica en encontrar nichos sin explotar que conllevan una rentabilidad brutal.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy7mPRBU270JGC0JeujuP0ftIizW_yPtGTg2YvkulbOSmt4EwuUFtn0qaJF_s8_MnHjCvDQ3eR8phU5_FUwn3Bgr1meg2LsHK_fxAd6nEs5YL7nGCZdGaCf895Jvwp5mzVZAx_e3czAVxwr1PpQ3OPjltEmZ0Z5p6FRFrND34THic9iQBnVp9CjPJxUDMerm7TMal5JQZfq0VDu0MGHv_rPC-LWlGcE5fb6-1yOZA1rOUmN9PDQGoPRe8kGdDmog8sJ2-3P129Fxk',
    linkedinUrl: 'https://linkedin.com/in/rafa-vilches-fba',
    specialty: ['Amazon FBA', 'Logística China', 'JungleScout / Helium10', 'Estrategia PPC']
  },
  {
    id: 'adrian-saenz',
    name: 'Adrián Sáenz',
    title: 'Trading Expert Gestor de +50M €',
    description: 'Gestor y analista financiero en firmas de capital riesgo internacionales, enfocado en el dominio técnico y el psicotrading.',
    longBio: 'Adrián ha supervisado carteras masivas de inversión de clientes corporativos e institucionales. Se ha vuelto un icono de consistencia enseñando a los nuevos traders a sobrevivir y sobresalir en los sistemas de fondeo.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOEIbXNDOlcT1_j1JKGQWSjzLinrqcBgGzPl2NA3Q_MCxl27ZybR0oxp07f3fFRV0i2rDcHfP2NzXBh_NHlU-c3pPASMetnBnC1Vd1Fg1QzVNgVQuTmUvWGnF6AXVFix1MIwqpG4mU7g4RG6WY4q6vgx-P_g2xn-PEHdjCBUjoVNER_rDnRZodkGe_oszEl4h37f6UTplyTsaW0wlwGssIy4haxMw5JqwxnrearX8_QdvlHQEBIuRz-RBibM0fNOP6vkeSa2P_ZrM',
    linkedinUrl: 'https://linkedin.com/in/adrian-saenz-trader',
    specialty: ['Análisis Macro', 'Empresas de Fondeo', 'Psicotrading', 'Gestión del Riesgo']
  },
  {
    id: 'alvaro-fontela',
    name: 'Álvaro Fontela',
    title: 'IA & Automatización Fundador de IA Labs',
    description: 'Consultor de automatizaciones no-code para multinacionales y apasionado por los flujos sin fricciones impulsados por IA.',
    longBio: 'Álvaro fundó IA Labs para responder a la ingente demanda corporativa de eficiencia de procesos. Es el encargado de enseñarte cómo configurar agentes avanzados con IA para que trabajen por ti las 24 horas.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvWrlrT_XnN-VJOOTK5HgmbwWc8hb2iF1NFezM0ENHALbg1b1Yr4H47XQBbj47cR5Ln4VKUcu6nVyeL3XlH44DhBOSNVQpN8fZZ3XLmG1D7lvGDnEV41bLPjrb244bQ69IaFNIqhCspCgjaem1UGbd9lAcLeXdTpnT-Cagw9I3-LnM5xFGtGXz9GZN7YM_c1ibqQIR8siZv32u66ntSLslbvCnP9mxMKSPb5EjFCsGD0zWAvueIQel0FPOfgWG_lvHO0xB2Xxe4gw',
    linkedinUrl: 'https://linkedin.com/in/alvaro-fontela-ia',
    specialty: ['Integraciones n8n/Make', 'Modelos GPT-4 y Gemini', 'Automatización B2B', 'Sistemas Operativos']
  },
  {
    id: 'andres-vera',
    name: 'Andrés Vera',
    title: 'Ciberseguridad Pentester & Consultor',
    description: 'Auditor de seguridad ofensiva para sectores bancarios y arquitecto de sistemas defensivos contra vulneraciones extremas.',
    longBio: 'Andrés es un hacker ético veterano. Conoce al detalle de qué manera piensan los ciberdelincuentes reales y entrena a los estudiantes de Big Bang University con las herramientas y marcos más exigentes de la industria actual.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcqiTSbAJGxNvoKgFX46n1FDl7JEL4pHQVsTkPDip13lS8o8Mif5qI-lv4kWYBRzGTWHAABS6-cznyrFWTZkL5LnB_V6Zmh64v6_cmTBo8oby1ineBP-1HvFzv-9oeDtL8sqkDYYQjvX_I3bpg0Uxh_WAkfonubfX4e86mRwIEi5Fswt-hOkzDBAI9cV2ZUkOlb1lu9NcVEy9gW--zg8RrXjJCcrtByD04OtKrYONyMjw-SoSNPK8p6a9uieFzQQZXdZJHIeWgm4U',
    linkedinUrl: 'https://linkedin.com/in/andres-vera-cyber',
    specialty: ['Pentesting Ofensivo', 'Auditoría Web', 'Kali Linux & OWASP Top 10', 'Ingeniería Social']
  }
];
