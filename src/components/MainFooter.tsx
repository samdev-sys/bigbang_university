import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

interface MainFooterProps {
  onScrollToSection: (elementId: string) => void;
  onSelectProgram: (id: string) => void;
}

export default function MainFooter({
  onScrollToSection,
  onSelectProgram
}: MainFooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-black py-16 px-6 border-t border-white/10" id="main-footer-wrapper">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-white">
        
        {/* Profile and Mission description */}
        <div className="space-y-6">
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 mb-6 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-edibs-primary rounded-sm flex items-center justify-center font-display font-black text-black text-xl transition-transform group-hover:scale-105">
              B
            </div>
            <div className="leading-none">
              <span className="block text-xl font-display font-bold tracking-widest uppercase">Big Bang University</span>
              <span className="text-[8px] tracking-[0.2em] uppercase text-gray-400 font-mono">Escuela de Negocios</span>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
            Big Bang University está formada por expertos en los distintos nichos de negocio que han logrado transformar vidas y negocios a través de la educación.
          </p>
        </div>

        {/* Programs direct navigation */}
        <div>
          <h4 className="text-xs font-mono font-bold text-edibs-primary uppercase tracking-widest mb-6">Programas</h4>
          <ul className="text-xs text-gray-500 space-y-4 font-mono">
            <li>
              <button 
                onClick={() => onSelectProgram('amazon-fba')} 
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Amazon FBA
              </button>
            </li>
            <li>
              <button 
                onClick={() => onSelectProgram('inteligencia-artificial')} 
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Inteligencia Artificial
              </button>
            </li>
            <li>
              <button 
                onClick={() => onSelectProgram('trading-inversion')} 
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Trading & Inversión
              </button>
            </li>
            <li>
              <button 
                onClick={() => onSelectProgram('ecommerce-marca')} 
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Ecommerce & Marca
              </button>
            </li>
            <li>
              <button 
                onClick={() => onSelectProgram('ciberseguridad')} 
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Ciberseguridad
              </button>
            </li>
          </ul>
        </div>

        {/* Resources or useful links */}
        <div>
          <h4 className="text-xs font-mono font-bold text-edibs-primary uppercase tracking-widest mb-6">Recursos</h4>
          <ul className="text-xs text-gray-500 space-y-4 font-mono">
            <li>
              <button onClick={() => onScrollToSection('metodologia-section')} className="hover:text-white transition-colors cursor-pointer text-left">
                Metodología Probada
              </button>
            </li>
            <li>
              <button onClick={() => onScrollToSection('pathfinder-section')} className="hover:text-white transition-colors cursor-pointer text-left font-semibold text-edibs-primary/85">
                Path Finder Quiz
              </button>
            </li>
            <li>
              <button onClick={() => onScrollToSection('mentores-section')} className="hover:text-white transition-colors cursor-pointer text-left">
                Board de Mentores
              </button>
            </li>
            <li>
              <a className="hover:text-white transition-colors" href="#">Guías Gratuita de Libertad</a>
            </li>
          </ul>
        </div>

        {/* Subscriber/newsletter lead machine */}
        <div>
          <h4 className="text-xs font-mono font-bold text-edibs-primary uppercase tracking-widest mb-6">Newsletter</h4>
          <p className="text-xs text-gray-500 mb-6 leading-relaxed font-mono">
            Recibe estrategias empresariales semanales y recursos exclusivos directos a tu bandeja de entrada.
          </p>

          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex bg-neutral-900 border border-white/10 rounded overflow-hidden p-0.5 focus-within:border-edibs-primary transition-colors">
              <input 
                type="email" 
                required
                placeholder="Tu email principal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-none text-xs flex-1 px-4 outline-none text-white font-mono h-11"
              />
              <button 
                type="submit"
                className="bg-edibs-primary hover:bg-white text-black p-3 transition-colors cursor-pointer flex items-center justify-center rounded-sm"
                aria-label="Registrar correo"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-3 rounded-lg text-xs font-mono animation-fade-in">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span>¡Suscrito con éxito! Gracias por tu confianza.</span>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest font-mono">
        <p>© 2026 Big Bang University. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <a className="hover:text-white transition-colors" href="#">Aviso legal</a>
          <a className="hover:text-white transition-colors" href="#">Política de privacidad</a>
        </div>
      </div>
    </footer>
  );
}
