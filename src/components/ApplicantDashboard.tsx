import React, { useState } from 'react';
import { AdmissionApplication } from '../types';
import { PROGRAMS_DATA } from '../data';
import { X, Calendar, ClipboardCheck, PhoneCall, Award, FileText, Send, UserCheck, ShieldCheck, Upload, Trash2 } from 'lucide-react';

interface ApplicantDashboardProps {
  applications: AdmissionApplication[];
  onClose: () => void;
  onClearApplications: () => void;
}

export default function ApplicantDashboard({
  applications,
  onClose,
  onClearApplications
}: ApplicantDashboardProps) {
  const [messages, setMessages] = useState<{ sender: 'user' | 'admin'; text: string; time: string }[]>([
    { sender: 'admin', text: '¡Hola! Tu solicitud de admisión ha sido recibida de forma correcta. Nuestro comité de admisiones está revisando tu perfil. El siguiente paso consiste en agendar tu entrevista telefónica de 15 min.', time: 'Hace unos instantes' }
  ]);
  const [inputText, setInputText] = useState('');
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const activeApp = applications[applications.length - 1]; // Latest Application

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg = { sender: 'user' as const, text: inputText, time: 'Ahora' };
    setMessages(prev => [...prev, newMsg]);
    setInputText('');

    // Simulate auto response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        sender: 'admin' as const,
        text: 'Hemos recibido tu mensaje. Un asesor académico asignado lo tendrá en cuenta para tu llamada de valoración de libertad.',
        time: 'Ahora'
      }]);
    }, 1200);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadedFile(e.target.files[0].name);
    }
  };

  const matchedProgram = PROGRAMS_DATA.find(p => p.id === activeApp?.programId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-neutral-950 border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col z-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] text-white">
        
        {/* Top bar accent */}
        <div className="h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 w-full" />

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white p-2 rounded-full cursor-pointer transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Panel Header */}
        <div className="px-6 md:px-8 pt-8 pb-5 border-b border-white/5 bg-neutral-900/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-edibs-primary uppercase bg-edibs-primary/10 px-2.5 py-0.5 rounded border border-edibs-primary/20 font-bold">
              PORTAL DEL CANDIDATO ★
            </span>
            <h3 className="text-xl md:text-2xl font-display font-bold tracking-tight mt-1.5 text-white flex items-center gap-1.5">
              <span>Mi Solicitud de Admisión</span>
            </h3>
          </div>
          
          <button
            onClick={onClearApplications}
            className="text-[10px] font-mono uppercase tracking-wider text-red-400 hover:text-white hover:bg-red-500/10 px-3 py-1.5 rounded border border-red-500/20 cursor-pointer transition-all self-start sm:self-center flex items-center gap-1"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Eliminar Solicitud</span>
          </button>
        </div>

        {/* Dashboard Grid Content */}
        {activeApp ? (
          <div className="flex-1 overflow-y-auto p-4 md:p-8 grid md:grid-cols-5 gap-8">
            
            {/* COLUMN 1: Visual timeline of application stages (Col span 3) */}
            <div className="md:col-span-3 space-y-6">
              
              {/* Profile Summary Card */}
              <div className="bg-neutral-900/50 border border-white/5 rounded-xl p-5 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500/15 border border-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-mono text-lg font-bold flex-shrink-0">
                    {activeApp.fullName.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">{activeApp.fullName}</h4>
                    <span className="text-xs text-gray-400 font-mono italic block">{activeApp.email} • {activeApp.phone}</span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono pt-2 border-t border-white/5">
                  <div className="space-y-1">
                    <span className="text-gray-500 uppercase text-[9px] block">Programa Aplicado</span>
                    <span className="text-white font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      {matchedProgram?.name || 'Cargando Master...'}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-gray-500 uppercase text-[9px] block">Perfil Actual</span>
                    <span className="text-white font-semibold">{activeApp.currentProfile}</span>
                  </div>
                </div>
              </div>

              {/* TIMELINE ACCENT */}
              <div className="space-y-4">
                <h5 className="text-xs font-mono text-gray-400 uppercase tracking-widest font-bold">Línea de Proceso de Admisión</h5>
                
                <div className="space-y-4 relative pl-8 before:absolute before:top-2 before:bottom-2 before:left-[15px] before:w-[1px] before:bg-white/10">
                  
                  {/* Phase 1 */}
                  <div className="relative">
                    <div className="absolute left-[-24px] top-1 w-4 h-4 rounded-full bg-emerald-500 border border-black flex items-center justify-center text-[10px] text-black font-bold">
                      ✓
                    </div>
                    <div>
                      <h6 className="text-xs font-bold text-white">Paso 1: Solicitud inicial recibida</h6>
                      <p className="text-[11px] text-gray-500 leading-relaxed font-mono">
                        Completado el {new Date(activeApp.createdAt).toLocaleDateString()} a las {new Date(activeApp.createdAt).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>

                  {/* Phase 2 */}
                  <div className="relative">
                    <div className="absolute left-[-24px] top-1 w-4 h-4 rounded-full bg-cyan-400 border border-black flex items-center justify-center text-[8px] animate-pulse">
                      🕒
                    </div>
                    <div>
                      <h6 className="text-xs font-bold text-edibs-primary">Paso 2: Filtro inicial académico</h6>
                      <p className="text-[11px] text-gray-400 leading-relaxed">
                        Nuestros directores y el director académico están evaluando su motivación redactada para dar pase a la ronda de entrevistas.
                      </p>
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div className="relative opacity-65">
                    <div className="absolute left-[-24px] top-1 w-4 h-4 rounded-full bg-neutral-800 border border-white/15 flex items-center justify-center">
                    </div>
                    <div>
                      <h6 className="text-xs font-bold text-gray-300">Paso 3: Entrevista Telefónica de Libertad "1 a 1" (15 min)</h6>
                      <p className="text-[11px] text-gray-500 leading-relaxed font-mono">
                        Pendiente de agendar tras superar el filtro académico del Paso 2.
                      </p>
                    </div>
                  </div>

                  {/* Phase 4 */}
                  <div className="relative opacity-65">
                    <div className="absolute left-[-24px] top-1 w-4 h-4 rounded-full bg-neutral-800 border border-white/15 flex items-center justify-center">
                    </div>
                    <div>
                      <h6 className="text-xs font-bold text-gray-300">Paso 4: Decisión Final del Board / Admisión</h6>
                      <p className="text-[11px] text-gray-500 leading-relaxed">
                        Emisión del número de expediente y reserva formal de plaza física con mentor asignado.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* COLUMN 2: Upload CV and Interactive Messenger with Admin (Col span 2) */}
            <div className="md:col-span-2 flex flex-col space-y-4">
              
              {/* Document upload sector */}
              <div className="bg-white/[0.01] border border-white/5 rounded-xl p-4 space-y-3 font-mono text-[11px]">
                <h5 className="text-xs font-bold text-gray-300 uppercase tracking-widest flex items-center gap-1.5">
                  <Upload className="w-4 h-4 text-emerald-400" />
                  <span>Subir CV o Portfolio (Opcional)</span>
                </h5>
                <p className="text-gray-500 leading-relaxed text-[10px]">
                  Sube tu trayectoria profesional para que el asesor la estudie con detenimiento antes de llamarte.
                </p>

                {!uploadedFile ? (
                  <label className="flex flex-col items-center justify-center border border-dashed border-white/15 rounded-lg p-4 bg-neutral-900/30 hover:bg-neutral-900 cursor-pointer transition-all text-center">
                    <FileText className="w-6 h-6 text-edibs-primary mb-1.5" />
                    <span className="text-xs font-medium text-gray-300">Seleccionar archivo PDF o DOCX</span>
                    <span className="text-[9px] text-gray-600 mt-1">Máx. 5MB</span>
                    <input 
                      type="file" 
                      accept=".pdf,.docx,.doc"
                      onChange={handleFileUpload}
                      className="hidden" 
                    />
                  </label>
                ) : (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded p-2.5 flex items-center justify-between text-emerald-400">
                    <div className="flex items-center gap-1.5 truncate">
                      <ClipboardCheck className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{uploadedFile}</span>
                    </div>
                    <button 
                      onClick={() => setUploadedFile(null)}
                      className="text-gray-400 hover:text-white transition-colors ml-2"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Chat Support component */}
              <div className="flex-1 bg-neutral-900/30 border border-white/5 rounded-xl p-4 flex flex-col min-h-[220px]">
                <div className="flex items-center justify-between pb-2 border-b border-white/5 mb-3 font-mono text-[10px] text-gray-500">
                  <span>CANAL DIRECTO DE ADMISIÓN</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                </div>

                {/* Messages stream */}
                <div className="flex-1 overflow-y-auto space-y-3 pb-3 max-h-[160px] text-xs">
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex flex-col ${
                      msg.sender === 'user' ? 'items-end' : 'items-start'
                    }`}>
                      <div className={`p-2.5 rounded-lg max-w-[85%] leading-relaxed ${
                        msg.sender === 'user' 
                          ? 'bg-neutral-800 text-white rounded-br-none' 
                          : 'bg-white/[0.04] border border-white/5 text-gray-300 rounded-bl-none'
                      }`}>
                        {msg.text}
                      </div>
                      <span className="text-[9px] text-gray-600 font-mono mt-1 px-1">{msg.time}</span>
                    </div>
                  ))}
                </div>

                {/* Send action form */}
                <form onSubmit={handleSendMessage} className="flex bg-neutral-950 border border-white/10 rounded overflow-hidden p-0.5">
                  <input 
                    type="text" 
                    required
                    placeholder="Escribe tu duda u observación..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="bg-transparent border-none text-[11px] flex-1 px-3 outline-none text-white font-mono h-9"
                  />
                  <button 
                    type="submit"
                    className="bg-edibs-primary hover:bg-white text-black p-2 transition-colors cursor-pointer flex items-center justify-center rounded-sm"
                    aria-label="Enviar mensaje"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>

            </div>

          </div>
        ) : (
          /* NO APPLICATION IN STORAGE */
          <div className="p-12 text-center space-y-6 flex flex-col items-center">
            <ClipboardCheck className="w-14 h-14 text-gray-600" />
            <div className="space-y-2">
              <h4 className="text-lg font-bold">No se registran solicitudes</h4>
              <p className="text-xs text-gray-500 font-mono leading-relaxed max-w-sm">
                Actualmente no tienes ninguna solicitud activa para ingresar en Big Bang University Escuela de Negocios en este navegador. Elija un programa y complete los pasos.
              </p>
            </div>
            <button
              onClick={onClose}
              className="bg-edibs-primary border border-none text-sm text-black font-semibold font-mono tracking-wider uppercase px-6 py-2.5 rounded hover:bg-white cursor-pointer transition-all"
            >
              Comenzar Aplicación
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
