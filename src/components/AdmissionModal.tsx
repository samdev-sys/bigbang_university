import React, { useState } from 'react';
import { Program, AdmissionApplication } from '../types';
import { PROGRAMS_DATA } from '../data';
import { X, CheckCircle, ArrowRight, User, Compass, HelpCircle, FileCheck, Phone, Mail } from 'lucide-react';

interface AdmissionModalProps {
  initialProgramId?: string;
  onClose: () => void;
  onSubmitApplication: (application: Omit<AdmissionApplication, 'id' | 'createdAt' | 'status'>) => void;
}

export default function AdmissionModal({
  initialProgramId,
  onClose,
  onSubmitApplication
}: AdmissionModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [programId, setProgramId] = useState(initialProgramId || PROGRAMS_DATA[0].id);
  const [currentProfile, setCurrentProfile] = useState('Empleado / Corporativo');
  const [motivation, setMotivation] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Final Submit
      onSubmitApplication({
        fullName,
        email,
        phone,
        programId,
        currentProfile,
        motivation
      });
      setIsSuccess(true);
    }
  };

  const handleBackStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="admission-modal-wrapper">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Main Form container */}
      <div className="relative bg-neutral-950 border border-white/10 rounded-2xl w-full max-w-lg overflow-hidden flex flex-col z-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] text-white">
        
        {/* Blue top indicator */}
        <div className="h-1 bg-gradient-to-r from-edibs-blue-dark via-edibs-primary to-edibs-blue-light w-full" />

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white p-2 rounded-full cursor-pointer transition-colors z-20"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Banner */}
        <div className="px-6 pt-8 pb-4 border-b border-white/5 bg-neutral-900/40">
          <span className="text-[10px] font-mono tracking-widest text-edibs-primary uppercase">
            CONVOCATORIA DE INGRESO 2026
          </span>
          <h3 className="text-xl md:text-2xl font-display font-bold tracking-tight mt-1 text-white">
            Solicitud de Admisión
          </h3>
          <p className="text-xs text-gray-400 mt-0.5 leading-relaxed font-mono">
            Filtración activa para asegurar grupos mentorizados reducidos.
          </p>
        </div>

        {/* Form Body / Step Indicators */}
        {!isSuccess ? (
          <form onSubmit={handleNextStep} className="p-6 flex-1 flex flex-col">
            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-6">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold border transition-all ${
                    currentStep === step 
                      ? 'border-edibs-primary bg-edibs-primary/10 text-edibs-primary shadow-[0_0_10px_rgba(21,145,220,0.2)]' 
                      : currentStep > step 
                      ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400' 
                      : 'border-white/10 text-gray-500 bg-transparent'
                  }`}>
                    {currentStep > step ? '✓' : `0${step}`}
                  </div>
                  {step < 3 && (
                    <div className={`h-[1px] flex-1 mx-2 transition-all ${
                      currentStep > step ? 'bg-emerald-500/40' : 'bg-white/5'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            {/* STEP 1: IDENTITY */}
            {currentStep === 1 && (
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-2 mb-2 text-xs font-mono text-gray-400 uppercase tracking-widest">
                  <User className="w-4 h-4 text-edibs-primary" />
                  <span>Tus datos de contacto</span>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-gray-300 font-mono">Nombre completo*</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Ej. Juan Pérez"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-neutral-900 border border-white/10 focus:border-edibs-primary focus:ring-1 focus:ring-edibs-primary/20 rounded px-3 py-2 text-sm text-white placeholder-gray-600 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-gray-300 font-mono">Email corporativo o personal*</label>
                  <input 
                    type="email" 
                    required
                    placeholder="Ej. juan@correo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-neutral-900 border border-white/10 focus:border-edibs-primary focus:ring-1 focus:ring-edibs-primary/20 rounded px-3 py-2 text-sm text-white placeholder-gray-600 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-gray-300 font-mono">Número de Teléfono (WhatsApp)*</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="Ej. +34 600 000 000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-neutral-900 border border-white/10 focus:border-edibs-primary focus:ring-1 focus:ring-edibs-primary/20 rounded px-3 py-2 text-sm text-white placeholder-gray-600 outline-none transition-all"
                  />
                </div>
                <p className="text-[10px] text-gray-500 font-mono leading-relaxed mt-2">
                  *Es estrictamente necesario para coordinar la llamada de entrevista telefónica 1 a 1 de admisión.
                </p>
              </div>
            )}

            {/* STEP 2: PROGRAM & FOCUS */}
            {currentStep === 2 && (
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-2 mb-2 text-xs font-mono text-gray-400 uppercase tracking-widest">
                  <Compass className="w-4 h-4 text-edibs-primary" />
                  <span>Tu Foco y Programa</span>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-gray-300 font-mono font-bold">Máster al que aplicas</label>
                  <select 
                    value={programId}
                    onChange={(e) => setProgramId(e.target.value)}
                    className="w-full bg-neutral-900 border border-white/10 focus:border-edibs-primary rounded px-3 py-2 text-sm text-white outline-none transition-all cursor-pointer"
                  >
                    {PROGRAMS_DATA.map((prog) => (
                      <option key={prog.id} value={prog.id}>
                        {prog.name} (Soporte 12 Meses)
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-gray-300 font-mono">Tu situación profesional actual</label>
                  <div className="grid grid-cols-2 gap-2 pt-1 font-mono">
                    {[
                      'Corporativo / Empleado',
                      'Autónomo / Freelance',
                      'Estudiante Universitario',
                      'Buscando Reinversión'
                    ].map((prof) => (
                      <button
                        key={prof}
                        type="button"
                        onClick={() => setCurrentProfile(prof)}
                        className={`text-left p-2.5 rounded border text-xs transition-all ${
                          currentProfile === prof 
                            ? 'border-edibs-primary bg-edibs-primary/10 text-edibs-primary font-semibold' 
                            : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.03] text-gray-400'
                        }`}
                      >
                        {prof}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: MOTIVATION */}
            {currentStep === 3 && (
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-2 mb-2 text-xs font-mono text-gray-400 uppercase tracking-widest">
                  <HelpCircle className="w-4 h-4 text-edibs-primary" />
                  <span>¿Por qué conectas con nosotros?</span>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-gray-200 font-mono">
                    ¿Cuál es tu principal motivación para unirte a Big Bang University y por qué consideras que la libertad es tu meta fundamental?
                  </label>
                  <textarea 
                    required
                    rows={4}
                    value={motivation}
                    onChange={(e) => setMotivation(e.target.value)}
                    placeholder="Introduce brevemente qué esperas construir, tus metas o tu situación..."
                    className="w-full bg-neutral-900 border border-white/10 focus:border-edibs-primary focus:ring-1 focus:ring-edibs-primary/20 rounded px-3 py-2 text-xs text-white placeholder-gray-600 outline-none transition-all resize-none"
                  />
                </div>
                <p className="text-[10px] text-gray-500 font-mono leading-relaxed bg-white/[0.01] border border-white/[0.04] p-3 rounded-lg">
                  💡 <strong>Nota del Board:</strong> Prestamos especial atención a las respuestas detalladas. Buscamos estudiantes comprometidos con fundar su propio camino industrial.
                </p>
              </div>
            )}

            {/* Footer Buttons */}
            <div className="flex justify-between items-center mt-8 pt-4 border-t border-white/5">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBackStep}
                  className="px-4 py-2 text-xs uppercase font-mono tracking-wider text-gray-400 hover:text-white"
                >
                  Atrás
                </button>
              ) : (
                <div />
              )}

              <button
                type="submit"
                className="bg-edibs-primary hover:bg-white text-black font-bold text-xs uppercase font-mono tracking-wider px-6 py-2.5 rounded cursor-pointer transition-all flex items-center gap-1 shadow-[0_0_15px_rgba(21,145,220,0.2)]"
              >
                <span>{currentStep === 3 ? 'Enviar Solicitud ✓' : 'Siguiente'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : (
          /* SUCCESS SCREEN */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto animate-bounce">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-display font-bold">¡Solicitud Procesada con Éxito!</h4>
              <p className="text-xs text-gray-400 leading-relaxed max-w-sm mx-auto font-mono">
                Hemos registrado tus datos bajo el identificador <span className="text-edibs-primary font-semibold">BBU-{Math.floor(1000 + Math.random() * 9000)}-2026</span>.
              </p>
            </div>

            <div className="bg-white/[0.01] border border-white/5 rounded-xl p-4 text-left space-y-2 font-mono text-xs">
              <div className="flex items-center gap-2 text-gray-300">
                <FileCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Estado actual: <strong>En Revisión Prioritaria 🕒</strong></span>
              </div>
              <p className="text-[10px] text-gray-500 leading-relaxed pl-6">
                Te enviaremos un mensaje de confirmación inicial a <strong>{email}</strong> y nos pondremos en contacto vía WhatsApp o llamada telefónica al número <strong>{phone}</strong> en un lapso inferior a 24 horas laborables.
              </p>
            </div>

            <button
              onClick={onClose}
              className="bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 hover:border-edibs-primary text-white font-mono text-xs uppercase tracking-wider px-6 py-3 rounded w-full cursor-pointer transition-all"
            >
              Cerrar y seguir navegando
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
