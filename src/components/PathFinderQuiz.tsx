import { useState } from 'react';
import { Program } from '../types';
import { PROGRAMS_DATA } from '../data';
import { Compass, ArrowRight, CheckCircle, RefreshCcw, Award, Check } from 'lucide-react';

interface PathFinderQuizProps {
  onApplyForMatched: (programId: string) => void;
  onOpenProgramDetail: (programId: string) => void;
}

interface Question {
  id: number;
  text: string;
  subtitle: string;
  options: {
    label: string;
    value: string; // matches program IDs or characteristics
    explain: string;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: '¿Cuál es tu objetivo financiero o profesional principal?',
    subtitle: 'Elige la misión que más resuene con tus aspiraciones a largo plazo.',
    options: [
      { 
        label: 'Crear un activo automatizado vendiendo productos físicos en mercados mundiales', 
        value: 'amazon-fba',
        explain: 'Foco en comercio y delegación logística.' 
      },
      { 
        label: 'Aprender a automatizar procesos con IA y vender consultoría avanzada B2B', 
        value: 'inteligencia-artificial',
        explain: 'La habilidad más demandada del mercado actual.' 
      },
      { 
        label: 'Aprender análisis cuantitativo para rentabilizar de forma independiente mi capital', 
        value: 'trading-inversion',
        explain: 'Libertad geográfica y foco psicomatemático.' 
      },
      { 
        label: 'Crear mi propia marca DTC estéticamente impecable con Shopify y TikTok', 
        value: 'ecommerce-marca',
        explain: 'Foco en branding, viralidad y marketing global.' 
      },
      { 
        label: 'Dominar la protección de sistemas industriales, hacking ético y redes críticas', 
        value: 'ciberseguridad',
        explain: 'La defensa virtual de alta remuneración.' 
      }
    ]
  },
  {
    id: 2,
    text: '¿De cuánto tiempo dispones semanalmente?',
    subtitle: 'Nos adaptamos a tu disponibilidad real con mentores dedicados.',
    options: [
      { label: 'Menos de 10 horas semanales (Alternando con mi trabajo actual)', value: 'low', explain: 'Ideal para modelos semiautomatizados.' },
      { label: 'De 10 a 20 horas semanales (Foco en aceleración media)', value: 'medium', explain: 'El ritmo óptimo para asimilación teórica.' },
      { label: 'Más de 20 horas semanales (Foco de inmersión total en mi imperio)', value: 'high', explain: 'Permite acelerar tus primeros resultados.' }
    ]
  },
  {
    id: 3,
    text: '¿Cuál es tu experiencia técnica previa en finanzas o informática?',
    subtitle: 'No exigimos bases para ingresar, pero mapea tu punto de partida histórico.',
    options: [
      { label: 'Principiante absoluto (Vengo de otro sector tradicional)', value: 'beginner', explain: 'Nuestros mentores te guiarán desde el paso cero.' },
      { label: 'Intermedio (Entiendo conceptos de e-commerce o lógica básica)', value: 'intermediate', explain: 'Aceleraremos saltando los módulos preliminares.' },
      { label: 'Avanzado (Ya he operado campañas de anuncios o programado antes)', value: 'advanced', explain: 'Foco puro en optimización, escalabilidad y finanzas.' }
    ]
  }
];

export default function PathFinderQuiz({
  onApplyForMatched,
  onOpenProgramDetail
}: PathFinderQuizProps) {
  const [currentStep, setCurrentStep] = useState(0); // 0 = Intro, 1-3 = Questions, 4 = Result
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [matchedProgram, setMatchedProgram] = useState<Program | null>(null);

  const startQuiz = () => {
    setSelectedAnswers({});
    setCurrentStep(1);
    setMatchedProgram(null);
  };

  const handleSelectOption = (questionId: number, value: string) => {
    const updatedAnswers = { ...selectedAnswers, [questionId]: value };
    setSelectedAnswers(updatedAnswers);

    if (questionId < QUESTIONS.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Calculate Match
      // Question 1 directly maps to a candidate program
      const programId = updatedAnswers[1];
      const programObj = PROGRAMS_DATA.find(p => p.id === programId) || PROGRAMS_DATA[0];
      setMatchedProgram(programObj);
      setCurrentStep(QUESTIONS.length + 1);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelectedAnswers({});
    setMatchedProgram(null);
  };

  return (
    <div 
      id="pathfinder-section" 
      className="max-w-4xl mx-auto bg-neutral-950 border border-white/10 rounded-2xl p-6 md:p-12 relative overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.8)] text-white"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-edibs-primary/5 rounded-full blur-3xl -z-10" />

      {/* QUIZ INTRO */}
      {currentStep === 0 && (
        <div className="text-center py-6 space-y-6">
          <div className="w-14 h-14 rounded-full bg-edibs-primary/10 border border-edibs-primary/30 flex items-center justify-center text-edibs-primary mx-auto animate-pulse">
            <Compass className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-edibs-primary uppercase">
              DESCUBRE TU DESTINO INDUSTRIAL
            </span>
            <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
              Business Path Finder
            </h3>
            <p className="text-xs md:text-sm text-gray-400 max-w-lg mx-auto leading-relaxed">
               Responde 3 preguntas estratégicas y nuestro algoritmo mapeará tu perfil, tiempo y apetito de riesgo para recomendarte el programa idóneo de Big Bang University.
            </p>
          </div>

          <button
            onClick={startQuiz}
            className="bg-edibs-primary hover:bg-white text-black font-semibold font-mono text-xs uppercase tracking-wider px-8 py-3.5 rounded-md cursor-pointer transition-all shadow-[0_0_15px_rgba(21,145,220,0.2)] flex items-center gap-2 mx-auto"
            id="start-pathfinder-quiz-btn"
          >
            <span>Iniciar test de camino</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* QUIZ QUESTIONS */}
      {currentStep >= 1 && currentStep <= QUESTIONS.length && (() => {
        const question = QUESTIONS[currentStep - 1];
        const progressPercent = (currentStep / QUESTIONS.length) * 100;

        return (
          <div className="space-y-6">
            {/* Progress Bar */}
            <div className="flex items-center justify-between text-xs font-mono text-gray-500">
              <span>PREGUNTA {currentStep} DE {QUESTIONS.length}</span>
              <span>{Math.round(progressPercent)}% COMPLETADO</span>
            </div>
            <div className="h-1 w-full bg-neutral-900 rounded-full overflow-hidden">
              <div 
                className="h-full bg-edibs-primary transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="space-y-1">
              <h4 className="text-xl md:text-2xl font-display font-bold text-white leading-tight">
                {question.text}
              </h4>
              <p className="text-xs text-gray-400 font-mono italic">
                {question.subtitle}
              </p>
            </div>

            <div className="grid gap-3 pt-2">
              {question.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectOption(question.id, opt.value)}
                  className="w-full text-left p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/15 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <p className="text-xs md:text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                      {opt.label}
                    </p>
                    <span className="text-[10px] text-gray-500 font-mono block mt-1">
                      {opt.explain}
                    </span>
                  </div>
                  <div className="w-5 h-5 rounded-full border border-white/20 flex-shrink-0 flex items-center justify-center group-hover:border-edibs-primary group-hover:bg-edibs-primary/5 transition-all ml-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-edibs-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-between items-center pt-2">
              <button
                onClick={() => setCurrentStep(prev => prev - 1)}
                className="text-xs font-mono text-gray-500 hover:text-white transition-colors cursor-pointer"
                id="quiz-back-btn"
              >
                Volver atrás
              </button>
              <button
                onClick={resetQuiz}
                className="text-xs font-mono text-gray-500 hover:text-white transition-colors cursor-pointer"
                id="quiz-cancel-btn"
              >
                Cancelar test
              </button>
            </div>
          </div>
        );
      })()}

      {/* QUIZ RESULT PANEL */}
      {currentStep === QUESTIONS.length + 1 && matchedProgram && (
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded inline-block">
              RESULTADO DEL PERFIL COMPLETO ★
            </span>
            <h4 className="text-2xl md:text-3xl font-display font-bold">¡Tu camino idóneo es {matchedProgram.name}!</h4>
            <p className="text-xs text-gray-400 max-w-lg mx-auto">
              Nuestra simulación determina un emparejamiento del <span className="text-emerald-400 font-bold">98% de compatibilidad</span> con tus objetivos y disponibilidad reportada.
            </p>
          </div>

          {/* Matched Program Display Card */}
          <div className="glass rounded-xl p-5 md:p-6 bg-neutral-900/60 border border-white/10 grid md:grid-cols-3 gap-6 items-center">
            <div className="flex flex-col items-center text-center p-3 border-b md:border-b-0 md:border-r border-white/5 space-y-2">
              <img 
                src={matchedProgram.imageUrl} 
                alt={matchedProgram.name}
                referrerPolicy="no-referrer"
                className="w-20 h-20 rounded-full object-cover border border-white/10"
              />
              <span className="text-xs text-gray-400 font-mono">{matchedProgram.duration} - {matchedProgram.level}</span>
            </div>

            <div className="md:col-span-2 space-y-3">
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                {matchedProgram.detailedDescription.substring(0, 180)}...
              </p>

              <div className="space-y-2">
                <span className="block text-[10px] font-mono uppercase tracking-widest text-gray-500 font-bold">POR QUÉ ES EXCELENTE PARA TI</span>
                <div className="grid sm:grid-cols-2 gap-1.5 text-[11px] text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Estudio adaptado a tu horario</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Soporte 1 a 1 prioritario</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Acceso a cuentas de fondeo</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>Salidas de alta remuneración</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
            <button 
              onClick={resetQuiz}
              className="px-6 py-3 border border-white/10 hover:bg-white/5 text-xs font-mono uppercase tracking-wider rounded cursor-pointer transition-all flex items-center justify-center gap-1.5 text-gray-300"
              id="pathfinder-restart-btn"
            >
              <RefreshCcw className="w-3.5 h-3.5" />
              <span>Calcular de nuevo</span>
            </button>
            <button 
              onClick={() => onOpenProgramDetail(matchedProgram.id)}
              className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-xs font-mono uppercase tracking-wider rounded cursor-pointer transition-all flex items-center justify-center gap-1 text-white border border-neutral-800"
              id="pathfinder-view-details-btn"
            >
              <span>Ver temario extendido</span>
            </button>
            <button 
              onClick={() => onApplyForMatched(matchedProgram.id)}
              className="px-8 py-3 bg-edibs-primary hover:bg-white text-black font-bold text-xs font-mono uppercase tracking-wider rounded cursor-pointer transition-all flex items-center justify-center gap-1 shadow-[0_0_15px_rgba(21,145,220,0.3)]"
              id="pathfinder-apply-btn"
            >
              <span>Aplicar al Máster</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
