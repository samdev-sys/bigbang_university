import { useState } from 'react';
import { Program, Mentor } from '../types';
import { X, Clock, Award, TrendingUp, CheckCircle, GraduationCap, ChevronRight, Compass } from 'lucide-react';
import { MENTORS_DATA } from '../data';

interface ProgramDetailsModalProps {
  program: Program;
  onClose: () => void;
  onApplyProgram: (programId: string) => void;
}

export default function ProgramDetailsModal({
  program,
  onClose,
  onApplyProgram
}: ProgramDetailsModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'syllabus' | 'mentors'>('overview');

  // Find mentors who specialize in this specific program
  const specializedMentors = MENTORS_DATA.filter(mentor => 
    mentor.specialty.some(spec => spec.toLowerCase().includes(program.name.toLowerCase()) || program.name.toLowerCase().includes(spec.toLowerCase()))
    || mentor.id === 'jorge-morcuende' // Jorge is mentor/director for all
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-neutral-950 border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col z-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] text-white">
        
        {/* Glow Header Accent based on program theme */}
        <div className={`h-1 w-full bg-gradient-to-r ${
          program.colorTheme === 'orange' ? 'from-orange-500 to-amber-500' :
          program.colorTheme === 'blue' ? 'from-blue-500 to-indigo-500' :
          program.colorTheme === 'green' ? 'from-green-500 to-emerald-500' :
          program.colorTheme === 'purple' ? 'from-purple-500 to-fuchsia-500' :
          'from-cyan-500 to-teal-500'
        }`} />

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white p-2 rounded-full cursor-pointer transition-colors z-20 border border-white/10"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Banner */}
        <div className="px-6 md:px-8 pt-8 pb-6 border-b border-white/5 relative overflow-hidden bg-neutral-900/40">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.01] rounded-full blur-2xl -z-10" />
          
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            {/* Logo Cover */}
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-neutral-800 flex-shrink-0 border border-white/10 p-1 flex items-center justify-center">
              <img 
                src={program.imageUrl} 
                alt={program.name} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
            
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-[10px] uppercase font-mono tracking-widest text-edibs-primary border border-edibs-primary/35 bg-edibs-primary/10 px-2 py-0.5 rounded">
                  PROGRAMA PROFESIONAL
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 rounded">
                  {program.duration}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-purple-400 border border-purple-500/20 bg-purple-500/10 px-2 py-0.5 rounded">
                  NIVEL: {program.level}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white mb-1">
                {program.name}
              </h2>
              <p className="text-xs text-gray-400 font-mono tracking-wide max-w-2xl">
                {program.shortDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex border-b border-white/5 bg-neutral-900/20 px-6 md:px-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-4 text-xs font-mono uppercase tracking-wider font-semibold border-b-2 transition-all ${
              activeTab === 'overview' 
                ? 'border-edibs-primary text-edibs-primary' 
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            Detalles
          </button>
          <button
            onClick={() => setActiveTab('syllabus')}
            className={`py-3 px-4 text-xs font-mono uppercase tracking-wider font-semibold border-b-2 transition-all ${
              activeTab === 'syllabus' 
                ? 'border-edibs-primary text-edibs-primary' 
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            Plan de Estudios ({program.syllabus.length})
          </button>
          <button
            onClick={() => setActiveTab('mentors')}
            className={`py-3 px-4 text-xs font-mono uppercase tracking-wider font-semibold border-b-2 transition-all ${
              activeTab === 'mentors' 
                ? 'border-edibs-primary text-edibs-primary' 
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            Board de Mentores
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animation-fade-in">
              <div>
                <h3 className="text-sm uppercase font-mono tracking-wider text-gray-400 mb-3">Descripción General</h3>
                <p className="text-sm text-gray-300 leading-relaxed max-w-3xl">
                  {program.detailedDescription}
                </p>
              </div>

              {/* Grid properties */}
              <div className="grid md:grid-cols-2 gap-4 pt-4">
                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-edibs-primary/10 flex items-center justify-center text-edibs-primary flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">Certificación Oficial</h4>
                    <p className="text-xs text-white leading-relaxed font-semibold">
                      {program.certification}
                    </p>
                  </div>
                </div>

                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">Rendimiento Estimado / Salidas</h4>
                    <p className="text-xs text-white leading-relaxed font-semibold">
                      {program.salaryExpectation}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.01] border border-white/5 rounded-xl p-5 mt-4">
                <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-edibs-primary" />
                  <span>Perfil del estudiante ideal</span>
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {program.targetProfile}
                </p>
              </div>

              {/* Unique Highlights */}
              <div className="pt-2">
                <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">¿Qué incluye este máster?</h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {[
                    'Soporte diario 1 a 1 via chat de mentoría activa',
                    'Acceso de por vida a la comunidad exclusiva global',
                    'Acompañamiento semanal en sesiones grupales en directo',
                    'Acceso a herramientas de análisis premium pre-pagadas',
                    'Bolsa de empleo y networking de inversores privados'
                  ].map((hi, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{hi}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SYLLABUS */}
          {activeTab === 'syllabus' && (
            <div className="space-y-4 animation-fade-in">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm uppercase font-mono tracking-wider text-gray-400">Plan de Estudios Estructurado</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Diseño por bloques de 2 meses cada uno para garantizar la asimilación real.</p>
                </div>
                 <div className="flex items-center gap-1.5 text-xs text-edibs-primary font-mono bg-edibs-primary/10 px-2.5 py-1 rounded border border-edibs-primary/20">
                  <GraduationCap className="w-4 h-4" />
                  <span>6 Bloques Críticos</span>
                </div>
              </div>

              <div className="space-y-3">
                {program.syllabus.map((item, index) => (
                  <div 
                    key={index} 
                    className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all flex items-start gap-4"
                  >
                     <span className="w-6 h-6 rounded-full bg-neutral-800 text-edibs-primary border border-edibs-primary/20 flex items-center justify-center font-mono text-xs font-bold flex-shrink-0">
                      0{index + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-white tracking-tight">
                        {item.split(':')[0]}
                      </h4>
                      <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                        {item.split(':')[1] || 'Profundización y asimilación de estrategias de mercado avanzadas y simulaciones de campo con mentores asignados.'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: MENTORS */}
          {activeTab === 'mentors' && (
            <div className="space-y-4 animation-fade-in">
              <div>
                <h3 className="text-sm uppercase font-mono tracking-wider text-gray-400 mb-2">Mentores Asignados al Programa</h3>
                <p className="text-xs text-gray-500">Expertos en activo garantizando soporte diario y feedback personalizado en tus proyectos.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {specializedMentors.map((mentor) => (
                  <div 
                    key={mentor.id}
                    className="glass rounded-xl p-4 flex gap-4 bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-all"
                  >
                    <img 
                      src={mentor.imageUrl} 
                      alt={mentor.name} 
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-lg object-cover grayscale border border-white/10 flex-shrink-0"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white">{mentor.name}</h4>
                       <p className="text-[10px] text-edibs-primary font-mono leading-tight mb-1.5">{mentor.title}</p>
                      <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed">
                        {mentor.description}
                      </p>
                      
                      <div className="mt-2 flex flex-wrap gap-1">
                        {mentor.specialty.slice(0, 2).map((sp, idx) => (
                          <span key={idx} className="text-[9px] bg-white/5 px-2 py-0.5 rounded text-gray-300 font-mono">
                            {sp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {specializedMentors.length === 0 && (
                  <p className="text-xs text-gray-500 font-mono py-4">Cargando board general...</p>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer with Enrollment CTAs */}
        <div className="px-6 md:px-8 py-5 border-t border-white/5 bg-neutral-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="block text-[10px] font-mono uppercase tracking-widest text-gray-500">CONVOCATORIA ABIERTA</span>
            <span className="text-xs text-gray-300 font-semibold">Plazas estrictamente limitadas por mentor asignado</span>
          </div>

          <div className="flex gap-3 w-full sm:w-auto">
            <button 
              onClick={onClose}
              className="flex-1 sm:flex-initial border border-white/15 hover:bg-white/5 px-4 py-2.5 rounded text-xs font-mono uppercase tracking-wider cursor-pointer text-gray-300 transition-all"
            >
              Cancelar
            </button>
             <button 
              onClick={() => onApplyProgram(program.id)}
              className="flex-1 sm:flex-initial bg-edibs-primary hover:bg-white text-black font-bold px-6 py-2.5 rounded text-xs font-mono uppercase tracking-wider cursor-pointer shadow-[0_0_15px_rgba(21,145,220,0.25)] transition-all flex items-center justify-center gap-1.5"
            >
              <span>Solicitar admisión</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
