import { useState, useEffect } from 'react';
import { Program, Mentor, AdmissionApplication } from './types';
import { PROGRAMS_DATA, MENTORS_DATA } from './data';
import MainHeader from './components/MainHeader';
import HeroOrbitSystem from './components/HeroOrbitSystem';
import ProgramDetailsModal from './components/ProgramDetailsModal';
import PathFinderQuiz from './components/PathFinderQuiz';
import AdmissionModal from './components/AdmissionModal';
import MentorDetailsModal from './components/MentorDetailsModal';
import ApplicantDashboard from './components/ApplicantDashboard';
import MainFooter from './components/MainFooter';
import { 
  Package, Cpu, Coins, ShoppingCart, Shield, ArrowRight, Check, Star, 
  MapPin, Globe, Landmark, GraduationCap, Users, ExternalLink, Sparkles 
} from 'lucide-react';

export default function App() {
  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(null);
  const [selectedMentorId, setSelectedMentorId] = useState<string | null>(null);
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [selectedProgramForAdmission, setSelectedProgramForAdmission] = useState<string | undefined>(undefined);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [applications, setApplications] = useState<AdmissionApplication[]>([]);

  // Load registered applications from LocalStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('bbu_applications');
      if (stored) {
        setApplications(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error loading applications:', e);
    }
  }, []);

  // Save registered application to LocalStorage and current state
  const handleAddApplication = (newAppData: Omit<AdmissionApplication, 'id' | 'createdAt' | 'status'>) => {
    const newApp: AdmissionApplication = {
      ...newAppData,
      id: `BBU-${Math.floor(1000 + Math.random() * 9000)}-2026`,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    const updated = [...applications, newApp];
    setApplications(updated);
    try {
      localStorage.setItem('bbu_applications', JSON.stringify(updated));
    } catch (e) {
      console.error('Error saving application:', e);
    }
  };

  const handleClearApplications = () => {
    setApplications([]);
    try {
      localStorage.removeItem('bbu_applications');
    } catch (e) {
      console.error(e);
    }
    setIsDashboardOpen(false);
  };

  const handleApplyFromSyllabus = (programId: string) => {
    setSelectedProgramForAdmission(programId);
    setSelectedProgramId(null);
    setIsAdmissionOpen(true);
  };

  const handleApplyFromMentor = (programId: string) => {
    setSelectedProgramForAdmission(programId);
    setSelectedMentorId(null);
    setIsAdmissionOpen(true);
  };

  const handleTriggerGeneralAdmission = () => {
    setSelectedProgramForAdmission(undefined);
    setIsAdmissionOpen(true);
  };

  const handleScrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Find object details
  const currentSelectedProgram = PROGRAMS_DATA.find(p => p.id === selectedProgramId);
  const currentSelectedMentor = MENTORS_DATA.find(m => m.id === selectedMentorId);

  return (
    <div className="bg-edibs-dark text-white font-sans selection:bg-edibs-primary selection:text-black">
      
      {/* 1. SOLID STELLAR STARFIELD BACKGROUND */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]" id="visual-background-canvas">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-repeat" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-950/15 rounded-full blur-[140px] animate-pulse-subtle" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[140px] animate-pulse-subtle" style={{ animationDelay: '2s' }} />
      </div>

      {/* 2. HEADER NAVIGATION */}
      <MainHeader 
        onOpenAdmission={handleTriggerGeneralAdmission}
        applications={applications}
        onOpenDashboard={() => setIsDashboardOpen(true)}
        onScrollToSection={handleScrollToSection}
      />

      {/* 3. HERO LANDING SECTION */}
      <section 
        className="relative pt-36 pb-20 px-6 min-h-screen flex items-center justify-center overflow-hidden"
        id="hero-section"
      >
        <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-12 items-center gap-12 z-10">
          
          {/* Hero text columns */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-1.5 rounded-full transition-all hover:bg-white/10">
              <span className="w-2 h-2 bg-edibs-primary rounded-full animate-ping"></span>
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-edibs-primary">
                Escuela de Negocios Digital de Elite
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black leading-tight text-white tracking-tight">
              Construye hoy <br /> 
              el negocio que <br /> 
              te dará <span className="text-edibs-primary italic shadow-sm relative inline-block">
                libertad
                <span className="absolute bottom-1 left-0 h-1.5 w-full bg-edibs-primary/25 -skew-x-12 z-[-1]"></span>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-400 font-sans max-w-lg leading-relaxed font-light">
              Formación 100% práctica de orientación industrial, mentorías personalizadas de alta fidelidad 1 a 1 y comunidad internacional de emprendedores digitales para crear, optimizar y escalar negocios sumamente lucrativos.
            </p>

            {/* Core CTA */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => handleScrollToSection('programas-section')}
                className="bg-edibs-primary hover:bg-white text-black font-semibold font-mono text-xs uppercase tracking-wider px-8 py-4 rounded-md cursor-pointer transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(21,145,220,0.25)] flex items-center gap-2 group"
                id="hero-explore-btn"
              >
                <span>Explorar programas</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </button>
              <button 
                onClick={() => handleScrollToSection('pathfinder-section')}
                className="border border-white/15 bg-white/5 px-8 py-4 rounded-md font-mono text-xs uppercase tracking-wide cursor-pointer transition-all hover:bg-white/10 text-gray-100"
                id="hero-pathfinder-btn"
              >
                Business Path Finder ★
              </button>
            </div>

            {/* Authentic students testimonial block */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-6 border-t border-white/5">
              <div className="flex -space-x-3">
                <img 
                  alt="Estudiante Big Bang University 1" 
                  className="w-10 h-10 rounded-full border-2 border-edibs-dark object-cover" 
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTI_ItZp2dTxsYxVrw4b3N5l94ofN3RyyyxetLHFhwREDeoWHOMjyZ-jluaUX51JtHXw6w8w4tugXjVH4vI5uXEml6_loWL_35t9MhSqGVrZElr1-GvtJeO7YEe0lRS7EpOzLDbcv73hiQstrEP_q33pxhCscB64VwCc_uaud9aI_T4N3GgOlqaoS9EHs5KPF-zUVehou994Zs7wxhTFqCwdpT6GWIK7stPgC7VIm0bkSlPhDTUqHzumD7yAwLaXG5ZJFLg2EboKA" 
                />
                <img 
                  alt="Estudiante Big Bang University 2" 
                  className="w-10 h-10 rounded-full border-2 border-edibs-dark object-cover" 
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG7F5gtCMjjknhADAKvTSWCk1-s08azHmM0ExPNH6aCNsZ1e4aAo76b1KfKWYH9-6jDfsH5sN5wDNsfaoecWYw9h-QXDDHz_ZaD5iyJthSYY1jvVM_fzX_0LC7sLWL-U00NAdCISbcE_HjDpYX30LAKRTNp4SPFnyUDycVOj-Hrz-j2psgjF3dl3laI7e8bokR1qA4B2NVl5qvoO4hYtmAPPc0Dm6vMN7oBBZKV20fyVDX2MpG1hvUZ6TCEzY49RBRVEyI1_MDQQQ" 
                />
                <img 
                  alt="Estudiante Big Bang University 3" 
                  className="w-10 h-10 rounded-full border-2 border-edibs-dark object-cover" 
                  referrerPolicy="no-referrer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpM0mSYSO3UF7VQ0kSGzATSaC9T7syexzbG-ia5QefwlVKi9bIBhfz90PNpeCFFF4JL2M9LqA2m5fjJqvRh7cG1D61xDXtYdBsPKsMAdxk5KgVHwUDtfWxsKBwhPyn9LwOxYJpmJOY7Vn9WhH4quTmlQaEGVLtN6PzpDj0m9Vurs-Lm0_3lVflwaBBfpTf2KXweKiobfouok0voqlNEXwt_0A07AZnr8fcdcPwYbPTwM8BJ2o3xwy9lnkVlTsE9szHNBGMwVr6Bv8" 
                />
                <div className="w-10 h-10 rounded-full bg-neutral-900 border-2 border-edibs-dark font-mono text-[9px] font-bold flex items-center justify-center text-edibs-primary">
                  +10K
                </div>
              </div>
              <div className="text-xs space-y-1 font-mono">
                <span className="block text-gray-400 font-semibold">+10.000 alumnos activos e ingresados en 40+ países</span>
                <span className="flex items-center gap-1.5 text-edibs-primary">
                  ★★★★★ <span className="text-white font-bold ml-1">4.9 / 5</span> 
                  <span className="text-gray-500 font-normal">(+2.500 reseñas verificadas en Trustpilot)</span>
                </span>
              </div>
            </div>

          </div>

          {/* Orbit System Column */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[480px]">
            <HeroOrbitSystem onSelectProgram={(id) => setSelectedProgramId(id)} />
          </div>

        </div>

        {/* Scroll helper indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-center pointer-events-none select-none">
          <div className="w-6 h-10 border-2 border-white/10 rounded-full relative bg-neutral-950/20">
            <div className="w-1 h-2.5 bg-edibs-primary absolute top-2 left-1/2 -translate-x-1/2 rounded-full animate-bounce"></div>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gray-500 font-bold">
            Scroll para descubrir
          </span>
        </div>
      </section>

      {/* 4. CLINICAL PROGRAMS EXPLORER SECTION */}
      <section className="py-28 px-6 relative bg-neutral-950/30 border-y border-white/[0.03]" id="programas-section">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-edibs-primary text-xs font-mono font-bold uppercase tracking-widest bg-edibs-primary/10 px-2.5 py-1 rounded inline-block">
                MÁSTERS DE ALTA REMUNERACIÓN
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mt-3">
                Elige tu camino. Construye tu imperio.
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 max-w-xl mt-2 font-light">
                Cada programa profesional te entrena durante 12 meses para dominar habilidades y crear un activo empresarial delegable.
              </p>
            </div>
            
            <button 
              onClick={() => handleScrollToSection('pathfinder-section')}
              className="text-edibs-primary hover:text-white font-mono text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer self-start md:self-end border border-edibs-primary/30 hover:border-white px-3.5 py-2 rounded bg-edibs-primary/5"
            >
              <span>Encontrar mi programa ideal</span>
              <Sparkles className="w-4 h-4 ml-0.5" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4" id="programs-explorer-grid">
            {PROGRAMS_DATA.map((prog, index) => {
              // Icon mapping corresponding to index
              const icons = [
                <Package className="w-8 h-8 text-orange-400" />,
                <Cpu className="w-8 h-8 text-blue-400" />,
                <Coins className="w-8 h-8 text-green-400" />,
                <ShoppingCart className="w-8 h-8 text-purple-400" />,
                <Shield className="w-8 h-8 text-cyan-400" />
              ];

              return (
                <div 
                  key={prog.id}
                  onClick={() => setSelectedProgramId(prog.id)}
                  className="glass p-6 rounded-xl hover:scale-[1.02] hover:border-edibs-primary/45 cursor-pointer group transition-all duration-300 relative overflow-hidden h-[380px] flex flex-col justify-end bg-neutral-900/30"
                >
                  {/* Decorative background radial gradient corresponding to colorTheme */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${prog.accentGradient} opacity-30 group-hover:opacity-45 transition-all duration-350 pointer-events-none`} />
                  
                  {/* Blue star highlight for Amazon FBA */}
                  {prog.id === 'amazon-fba' && (
                    <span className="absolute top-4 left-4 bg-edibs-primary text-black text-[9px] font-mono font-black uppercase tracking-widest px-2.5 py-0.5 rounded shadow">
                      ★ MÁS POPULAR
                    </span>
                  )}

                  {/* Icon Representation container */}
                  <div className="absolute top-6 right-6 p-2 rounded-lg bg-white/[0.02] border border-white/5 group-hover:border-white/15 transition-all">
                    {icons[index]}
                  </div>

                  {/* Program contents */}
                  <div className="space-y-4">
                    
                    {/* Tiny custom graphic logo inside */}
                    <div className="w-50 h-50 flex items-center justify-center p-1.5  shadow -mt-40">
                      <img 
                        src={prog.imageUrl} 
                        alt={prog.name} 
                        referrerPolicy="no-referrer"
                       
                      />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-display font-bold text-white group-hover:text-edibs-primary transition-colors leading-tight">
                        {prog.name}
                      </h3>
                      <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                        {prog.shortDescription}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-gray-500 font-bold uppercase tracking-wider">
                      <span className="flex items-center gap-1">🕒 {prog.duration}</span>
                      <span className="flex items-center gap-1">📈 {prog.level}</span>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Simple custom dot navigations */}
          <div className="flex justify-center gap-2 pt-2">
            <span className="w-2.5 h-2.5 rounded-full bg-edibs-primary shadow-[0_0_5px_rgba(21,145,220,0.7)]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
          </div>

        </div>
      </section>

      {/* 5. PATH FINDER ACTIONABLE PREVIEW */}
      <section className="py-24 px-6 relative" id="pathfinder-section">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-edibs-primary text-xs font-mono font-bold uppercase tracking-[0.2em]">SISTEMA DE MATCHING INTELIGENTE</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold">¿Tienes dudas sobre por dónde arrancar de cero?</h2>
            <p className="text-xs text-gray-400">Nuestro test interactivo te dará el veredicto en tan solo un minuto procesando las variables operativas de tu perfil.</p>
          </div>

          <PathFinderQuiz 
            onApplyForMatched={handleApplyFromSyllabus}
            onOpenProgramDetail={(id) => setSelectedProgramId(id)}
          />

        </div>
      </section>

      {/* 6. TU RUTA AL EXITO METHODOLOGY COMPONENT */}
      <section className="py-28 px-6 border-t border-white/[0.03] bg-neutral-950/20 relative" id="metodologia-section">
        <div className="max-w-7xl mx-auto space-y-20">
          
          <div className="grid lg:grid-cols-12 items-center gap-12">
            <div className="lg:col-span-4 space-y-6 text-left">
              <span className="text-edibs-primary text-xs font-mono font-bold uppercase tracking-widest bg-edibs-primary/10 px-2.5 py-1 rounded inline-block">
                EL PROCESO PROBADO
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold leading-tight">
                Un método comprobado para resultados reales.
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
                Nuestra filosofía parte de la práctica absoluta. Desestimamos la teoría tradicional pesada de escuela clásica y te empujamos a la construcción de flujo desde las primeras semanas.
              </p>
              
              <button 
                onClick={handleTriggerGeneralAdmission}
                className="bg-transparent hover:bg-white/5 text-gray-200 border border-white/15 hover:border-edibs-primary font-mono text-xs uppercase tracking-wider px-6 py-3 rounded-md cursor-pointer transition-all flex items-center gap-1.5"
              >
                <span>Solicitar mi entrevista de admisión</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Methodology nodes list columns */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-5 gap-4 relative">
              
              {/* Connection Guide line */}
              <div className="absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-white/10 -z-10 hidden md:block"></div>

              {[
                { step: '01', title: 'Aprende', desc: 'Formación práctica guiada con estrategias que funcionan en el mercado real.', delay: '0s' },
                { step: '02', title: 'Implementa', desc: 'Aplica lo aprendido inmediatamente con el acompañamiento de mentores asignados.', delay: '0.2s' },
                { step: '03', title: 'Genera ingresos', desc: 'Consigue tus primeros clientes piloto y valida tu modelo de negocio de inmediato.', delay: '0.4s' },
                { step: '04', title: 'Escala', desc: 'Estructura procesos, automatiza tareas con IA y escala tu negocio a otro nivel.', delay: '0.6s' },
                { step: '05', title: 'Libertad', desc: 'Disfruta de tiempo, independencia geográfica e impacto personal duradero.', delay: '0.8s' }
              ].map((m, idx) => (
                <div 
                  key={idx} 
                  className="bg-neutral-900/40 border border-white/5 rounded-xl p-4 text-center space-y-4 hover:border-edibs-primary/30 hover:bg-neutral-900/80 transition-all cursor-pointer group"
                >
                  <div className="w-16 h-16 rounded-full border border-white/10 group-hover:border-edibs-primary flex items-center justify-center mx-auto bg-neutral-950 text-edibs-primary transition-all duration-300 shadow shadow-blue-500/5 group-hover:shadow-edibs-primary/10">
                    <span className="font-display font-black text-lg text-white group-hover:text-edibs-primary">{m.step}</span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-gray-200 group-hover:text-white font-mono">{m.title}</h4>
                    <p className="text-[10px] text-gray-500 font-sans leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* SECURE METRIC STATS BLOCK */}
          <div 
            id="stats-section"
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-neutral-900/40 border border-white/5 rounded-2xl p-8 md:p-12"
          >
            <div className="flex items-center gap-4 border-r border-white/5 last:border-none pr-4">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/15 flex items-center justify-center font-bold text-lg text-orange-400">
                🎓
              </div>
              <div>
                <span className="block text-2xl font-display font-black tracking-tight text-white">+10.000</span>
                <span className="block text-[8px] sm:text-[10px] text-gray-400 uppercase font-mono tracking-wider font-bold">ALUMNOS FORMADOS</span>
              </div>
            </div>

            <div className="flex items-center gap-4 border-none lg:border-r border-white/5 last:border-none pr-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center font-bold text-lg text-blue-400">
                🌍
              </div>
              <div>
                <span className="block text-2xl font-display font-black tracking-tight text-white">40+</span>
                <span className="block text-[8px] sm:text-[10px] text-gray-400 uppercase font-mono tracking-wider font-bold">PAÍSES DE ORIGEN</span>
              </div>
            </div>

            <div className="flex items-center gap-4 border-r border-white/5 last:border-none pr-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center font-bold text-lg text-emerald-400">
                📈
              </div>
              <div>
                <span className="block text-2xl font-display font-black tracking-tight text-white">+120M €</span>
                <span className="block text-[8px] sm:text-[10px] text-gray-400 uppercase font-mono tracking-wider font-bold">GENERADOS POR ALUMNOS</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-edibs-primary/10 border border-edibs-primary/15 flex items-center justify-center font-bold text-lg text-edibs-primary">
                ⭐
              </div>
              <div>
                <span className="block text-2xl font-display font-black tracking-tight text-white">4.9 / 5</span>
                <span className="block text-[8px] sm:text-[10px] text-gray-400 uppercase font-mono tracking-wider font-bold">VALORACIÓN EXCEPCIONAL</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. BOARD DE MENTORES SECTION */}
      <section 
        className="py-28 px-6 border-t border-white/[0.03] select-none" 
        id="mentores-section"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-12">
          
          {/* Biography summary lead */}
          <div className="lg:w-1/4 flex flex-col justify-center space-y-6 text-left">
            <div>
              <span className="text-edibs-primary text-xs font-mono font-bold uppercase tracking-widest bg-edibs-primary/10 px-2.5 py-1 rounded inline-block">
                BOARD DE MENTORES
              </span>
              <h2 className="text-3xl font-display font-bold leading-tight mt-3">
                Aprende de quienes ya han hecho.
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed mt-2">
                Nuestros tutores y mentores son inversores privados y fundadores activos que dirigen empresas en el mundo real, no catedráticos teóricos.
              </p>
            </div>

            <button 
              onClick={handleTriggerGeneralAdmission}
              className="text-edibs-primary hover:text-white font-mono text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer self-start border border-edibs-primary/25 hover:border-white px-4 py-2.5 bg-edibs-primary/5 rounded"
            >
              <span>Conocer a todos los mentores</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mentors grid slider */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-5 gap-4" id="mentors-grids-wrapper">
            {MENTORS_DATA.map((mentor) => (
              <div 
                key={mentor.id}
                onClick={() => setSelectedMentorId(mentor.id)}
                className="glass p-2.5 rounded-xl bg-neutral-900/20 border border-white/5 hover:border-edibs-primary/35 transition-all duration-300 cursor-pointer group flex flex-col h-full hover:scale-[1.01]"
              >
                {/* Image Portrait frame */}
                <div className="relative overflow-hidden rounded-lg bg-neutral-950 aspect-[4/5] object-cover mb-4 flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent opacity-40 group-hover:opacity-10 transition-opacity z-10" />
                  <img 
                    src={mentor.imageUrl} 
                    alt={mentor.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                <div className="px-2 pb-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-sm text-white group-hover:text-edibs-primary transition-colors tracking-tight leading-tight">
                      {mentor.name}
                    </h3>
                    <p className="text-[10px] text-gray-400 font-sans mt-1 leading-normal line-clamp-2">
                      {mentor.title}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-edibs-primary hover:underline group-hover:text-white">
                      Ver perfil
                    </span>
                    <span className="text-cyan-400 font-mono text-xs font-bold font-italic">in</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. HIGH INTENSITY CTA PORTFOLIO BANNER */}
      <section className="py-24 px-6 relative" id="cta-admission-section">
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-3xl p-8 md:p-16 lg:p-20 border border-white/10 bg-radial from-neutral-900 to-black">
          
          <div className="absolute inset-0 bg-[url('https://placehold.co/1200x500/080808/1591DC?text=Earth+Horizon')] bg-cover bg-center opacity-10 mix-blend-overlay" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center lg:text-left space-y-4">
              <span className="text-edibs-primary text-xs font-mono font-bold uppercase tracking-widest border border-edibs-primary/25 bg-edibs-primary/10 px-3 py-1 rounded inline-block">
                ¿LISTO PARA CONSTRUIR TU LIBERTAD?
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-white tracking-tight leading-none">
                Únete a la comunidad que está construyendo el futuro.
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
                Solicita tu admisión formal hoy. Rellena tus datos, cuéntanos tu motivación y agenda una entrevista telefónica personal de 15 minutos con un coordinador para validar tu caso.
              </p>
            </div>

            <button 
              onClick={handleTriggerGeneralAdmission}
              className="bg-edibs-primary hover:bg-white text-black font-semibold font-mono text-xs uppercase tracking-widest px-8 py-4 rounded shadow-[0_0_20px_rgba(21,145,220,0.3)] transition-all transform hover:scale-105 cursor-pointer flex items-center gap-1.5 shrink-0"
              id="bottom-cta-apply-btn"
            >
              <span>Solicitar admisión</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 9. GLOBAL FOOTER */}
      <MainFooter 
        onScrollToSection={handleScrollToSection}
        onSelectProgram={(id) => setSelectedProgramId(id)}
      />

      {/* 10. SYSTEM POPUPS & MODALS */}
      {selectedProgramId && currentSelectedProgram && (
        <ProgramDetailsModal 
          program={currentSelectedProgram}
          onClose={() => setSelectedProgramId(null)}
          onApplyProgram={handleApplyFromSyllabus}
        />
      )}

      {selectedMentorId && currentSelectedMentor && (
        <MentorDetailsModal 
          mentor={currentSelectedMentor}
          onClose={() => setSelectedMentorId(null)}
          onApplyProgram={handleApplyFromMentor}
        />
      )}

      {isAdmissionOpen && (
        <AdmissionModal 
          initialProgramId={selectedProgramForAdmission}
          onClose={() => setIsAdmissionOpen(false)}
          onSubmitApplication={handleAddApplication}
        />
      )}

      {isDashboardOpen && (
        <ApplicantDashboard 
          applications={applications}
          onClose={() => setIsDashboardOpen(false)}
          onClearApplications={handleClearApplications}
        />
      )}

    </div>
  );
}
