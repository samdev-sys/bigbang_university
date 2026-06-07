import React, { useState } from 'react';
import { Mentor } from '../types';
import { PROGRAMS_DATA } from '../data';
import { X, Calendar, MessageSquare, Linkedin, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';

interface MentorDetailsModalProps {
  mentor: Mentor;
  onClose: () => void;
  onApplyProgram: (programId: string) => void;
}

export default function MentorDetailsModal({
  mentor,
  onClose,
  onApplyProgram
}: MentorDetailsModalProps) {
  const [reserved, setReserved] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [selectedDay, setSelectedDay] = useState('Mañana');

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (applicantName && applicantEmail) {
      setReserved(true);
    }
  };

  // Match mentor specialties to a program so they can apply immediately to their direct program!
  // If Jorge, default is Amazon FBA or direct list; for others we prioritize
  let suggestedProgramId = 'amazon-fba';
  if (mentor.id === 'rafa-vilches') suggestedProgramId = 'amazon-fba';
  else if (mentor.id === 'alvaro-fontela') suggestedProgramId = 'inteligencia-artificial';
  else if (mentor.id === 'adrian-saenz') suggestedProgramId = 'trading-inversion';
  else if (mentor.id === 'andres-vera') suggestedProgramId = 'ciberseguridad';

  const matchedProgramName = PROGRAMS_DATA.find(p => p.id === suggestedProgramId)?.name || 'Big Bang University Master';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="mentor-modal-wrapper">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Container */}
      <div className="relative bg-neutral-950 border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row z-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] text-white">
        
        {/* Blue Left Border Indicator on Desktop */}
        <div className="md:w-1 bg-gradient-to-b from-edibs-primary via-edibs-blue-dark to-transparent w-full h-1 md:h-auto" />

        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white p-2 rounded-full cursor-pointer transition-colors z-20"
        >
          <X className="w-4 h-4" />
        </button>

        {/* MENTOR PHOTOS & META info */}
        <div className="md:w-2/5 md:border-r border-white/5 bg-neutral-900/40 relative overflow-hidden flex flex-col items-center justify-center p-6 text-center">
          <div className="relative mb-4 group mt-4 md:mt-0">
            <div className="absolute inset-0 bg-edibs-primary/10 rounded-xl blur-xl transition-all opacity-40 group-hover:opacity-100" />
            <img 
              src={mentor.imageUrl} 
              alt={mentor.name} 
              referrerPolicy="no-referrer"
              className="w-40 h-40 md:w-48 md:h-48 rounded-xl object-cover grayscale hover:grayscale-0 transition-all border border-white/10 relative z-10 shadow-lg"
            />
          </div>

          <h3 className="text-xl font-display font-bold text-white mb-1">{mentor.name}</h3>
          <p className="text-xs text-edibs-primary font-mono uppercase tracking-widest font-semibold mb-4">{mentor.title}</p>
          
          <a 
            href={mentor.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-white transition-colors bg-white/5 hover:bg-cyan-500/10 border border-white/10 rounded px-3 py-1.5 font-mono"
          >
            <Linkedin className="w-3.5 h-3.5 fill-cyan-400 stroke-none" />
            <span>Ver perfil en Linkedin</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* BIOGRAPHY & SCHEDULING INTERACTIVE FLOW */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
          
          {/* Bio section */}
          <div>
            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">Biografía & Acompañamiento</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              {mentor.longBio}
            </p>
          </div>

          {/* Specialties items */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest">Especialidades Técnicas</h4>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {mentor.specialty.map((sp, i) => (
                <span 
                  key={i} 
                  className="text-xs font-mono bg-edibs-primary/10 border border-edibs-primary/20 text-edibs-primary px-2.5 py-1 rounded"
                >
                  {sp}
                </span>
              ))}
            </div>
          </div>

          {/* Booking module */}
          <div className="border border-white/10 bg-white/[0.01] rounded-xl p-5 space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <h5 className="text-xs font-mono text-gray-300 uppercase tracking-widest font-bold">Reserva llamada informativa inicial con {mentor.name.split(' ')[0]}</h5>
            </div>

            {!reserved ? (
              <form onSubmit={handleBookingSubmit} className="space-y-3 font-mono text-xs">
                <p className="text-gray-400 leading-relaxed text-[11px]">
                  Reserva una sesión telefónica privada de 15 minutos para resolver dudas sobre el máster de <strong>{matchedProgramName}</strong> y estructurar tus metas.
                </p>

                <div className="grid sm:grid-cols-2 gap-2">
                  <input 
                    type="text" 
                    required
                    placeholder="Tu nombre completo"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full bg-neutral-900 border border-white/5 focus:border-edibs-primary p-2 rounded outline-none text-white text-[11px]"
                  />
                  <input 
                    type="email" 
                    required
                    placeholder="Tu correo electrónico"
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    className="w-full bg-neutral-900 border border-white/5 focus:border-edibs-primary p-2 rounded outline-none text-white text-[11px]"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 pt-1.5">
                  <div className="flex gap-1.5">
                    {['Mañana', 'Tarde'].map((day) => (
                      <button
                        key={day}
                        type="button"
                        onClick={() => setSelectedDay(day)}
                        className={`px-2.5 py-1 rounded text-[10px] uppercase font-bold border transition-all cursor-pointer ${
                          selectedDay === day 
                            ? 'border-emerald-500 bg-emerald-500/15 text-emerald-400' 
                            : 'border-white/5 bg-transparent text-gray-400 hover:text-white'
                        }`}
                      >
                        En la {day}
                      </button>
                    ))}
                  </div>

                  <button
                    type="submit"
                    className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-4 py-2 rounded text-[10px] uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <span>Reservar cita</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-4 space-y-2 animation-fade-in font-mono text-xs text-slate-200">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                  <ShieldCheck className="w-5 h-5 animate-bounce" />
                </div>
                <h6 className="font-bold text-white text-sm">¡Llamada reservada con {mentor.name.split(' ')[0]}!</h6>
                <p className="text-[10px] text-gray-400 max-w-sm mx-auto">
                  Revisaremos tu perfil y te enviaremos la confirmación por correo y WhatsApp. Prepárate el bloque horario de <strong>{selectedDay}</strong>.
                </p>
              </div>
            )}
          </div>

          {/* Quick program apply */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 text-xs font-mono">
            <span className="text-gray-500 text-[10px]">¿Te interesa el programa {matchedProgramName}?</span>
            <button
              onClick={() => onApplyProgram(suggestedProgramId)}
              className="bg-edibs-primary hover:bg-white text-black font-bold text-[10px] uppercase tracking-widest px-4 py-2.5 rounded cursor-pointer transition-all w-full sm:w-auto text-center"
            >
              Aplicar al Máster Directamente
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
