import { useState, useEffect } from 'react';
import { AdmissionApplication } from '../types';
import { Award, FileText, ChevronRight } from 'lucide-react';

interface MainHeaderProps {
  onOpenAdmission: () => void;
  applications: AdmissionApplication[];
  onOpenDashboard: () => void;
  onScrollToSection: (elementId: string) => void;
}

export default function MainHeader({
  onOpenAdmission,
  applications,
  onOpenDashboard,
  onScrollToSection
}: MainHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const latestPendingApp = applications.find(app => app.status === 'pending' || app.status === 'reviewing');

  return (
    <header 
      id="main-nav-header"
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 ${
        isScrolled ? 'glass bg-black/60 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-8">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 bg-edibs-primary rounded-sm flex items-center justify-center font-display font-bold text-black text-xl transition-transform group-hover:scale-105">
              B
            </div>
            <div className="leading-none">
              <span className="block text-xl font-display font-bold tracking-widest uppercase text-white group-hover:text-edibs-blue-light transition-colors">
                Big Bang University
              </span>
              <span className="text-[8px] tracking-[0.2em] uppercase text-gray-400 font-mono">
                Escuela de Negocios
              </span>
            </div>
          </div>
 
          {/* Navigation links */}
          <ul className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-300">
            <li>
              <button 
                onClick={() => onScrollToSection('programas-section')}
                className="hover:text-edibs-blue-light text-gray-300 cursor-pointer transition-colors"
                id="nav-link-programas"
              >
                Programas
              </button>
            </li>
            <li>
              <button 
                onClick={() => onScrollToSection('pathfinder-section')}
                className="hover:text-edibs-blue-light text-gray-300 cursor-pointer transition-colors font-semibold text-edibs-primary/90"
                id="nav-link-pathfinder"
              >
                Business Path Finder ★
              </button>
            </li>
            <li>
              <button 
                onClick={() => onScrollToSection('metodologia-section')}
                className="hover:text-edibs-blue-light text-gray-300 cursor-pointer transition-colors"
                id="nav-link-metodos"
              >
                Metodología
              </button>
            </li>
            <li>
              <button 
                onClick={() => onScrollToSection('mentores-section')}
                className="hover:text-edibs-blue-light text-gray-300 cursor-pointer transition-colors"
                id="nav-link-mentores"
              >
                Mentores
              </button>
            </li>
            <li>
              <button 
                onClick={() => onScrollToSection('stats-section')}
                className="hover:text-edibs-blue-light text-gray-300 cursor-pointer transition-colors"
                id="nav-link-resultados"
              >
                Resultados
              </button>
            </li>
          </ul>
        </div>
 
        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          {applications.length > 0 && (
            <button
              onClick={onOpenDashboard}
              className="hidden md:flex items-center gap-2 bg-neutral-900/80 border border-neutral-700 hover:border-edibs-primary/60 text-xs px-3 py-2 rounded-md font-mono text-gray-200 transition-all hover:bg-neutral-800"
              id="header-btn-dashboard"
            >
              <FileText className="w-3.5 h-3.5 text-edibs-primary" />
              <span>Mi Solicitud</span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            </button>
          )}
 
          <button 
            onClick={onOpenAdmission}
            className="bg-edibs-primary hover:bg-white text-black font-semibold px-5 py-2.5 rounded-md text-sm cursor-pointer transition-all hover:scale-[1.02] shadow-[0_0_15px_rgba(21,145,220,0.25)] flex items-center gap-1"
            id="header-btn-apply"
          >
            <span>Solicitar admisión</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </nav>
    </header>
  );
}
