import { useState, CSSProperties } from 'react';
import centralPlanetImg from '/assets/center.png';

interface PlanetInfo {
  id: string;
  name: string;
  imageUrl: string;
  orbitRadius: number; // in pixels for desktop
  orbitDuration: number; // in seconds
  glowColor: string;
  tagline: string;
}

interface HeroOrbitSystemProps {
  onSelectProgram: (id: string) => void;
}

const PLANETS: PlanetInfo[] = [
  {
    id: 'inteligencia-artificial',
    name: 'Inteligencia Artificial',
    imageUrl:"public/assets/IA.png",
    orbitRadius: 185,
    orbitDuration: 40,
    glowColor: 'rgba(59, 130, 246, 0.65)', // Blue
    tagline: 'Automatizaciones & LLMs'
  },
  {
    id: 'amazon-fba',
    name: 'Amazon FBA',
    imageUrl:"assets/amazon.png",
    orbitRadius: 260,
    orbitDuration: 62,
    glowColor: 'rgba(249, 115, 22, 0.65)', // Orange
    tagline: 'Marca propia digital'
  },
  {
    id: 'trading-inversion',
    name: 'Trading & Inversión',
    imageUrl: "public/assets/tradingInv.png",
    orbitRadius: 310,
    orbitDuration: 28,
    glowColor: 'rgba(34, 197, 94, 0.65)', // Green
    tagline: 'Rendimiento financiero'
  },
  {
    id: 'ecommerce-marca',
    name: 'Ecommerce & Marca',
    imageUrl: "public/assets/Ecommerce.png",
    orbitRadius: 135,
    orbitDuration: 50,
    glowColor: 'rgba(168, 85, 247, 0.65)', // Purple
    tagline: 'Marcas DTC escalables'
  },
  {
    id: 'ciberseguridad',
    name: 'Ciberseguridad',
    imageUrl: "public/assets/ciberseg.png",
    orbitRadius: 220,
    orbitDuration: 34,
    glowColor: 'rgba(6, 182, 212, 0.65)', // Cyan
    tagline: 'Pentesting & Hacking'
  }
];

export default function HeroOrbitSystem({ onSelectProgram }: HeroOrbitSystemProps) {
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null);

  return (
    <div className="relative flex items-center justify-center h-[520px] md:h-[600px] w-full select-none" id="orbiter-root">
      
      {/* 3D Cosmic Space and Orbits Tracks (Desktop only) */}
      <div className="absolute inset-0 hidden md:block overflow-visible" id="desktop-3d-system">
        <div className="orbits-container-3d">
          
          {/* Concentric Elliptical Orbit Track Guides */}
          {PLANETS.map((planet) => (
            <div
              key={`track-${planet.id}`}
              style={{
                width: `${planet.orbitRadius * 2}px`,
                height: `${planet.orbitRadius * 2}px`,
              }}
              className="orbit-track-3d"
            />
          ))}

          {/* Independent Golden Orbit Track for the Satellite */}
          <div
            style={{
              width: '320px',
              height: '320px',
            }}
            className="orbit-track-3d border-edibs-primary/5"
          />

          {/* Tiny Blue Moon / Satellite */}
          <div
            className="planet-orbiting-node pointer-events-none"
            style={{
              // @ts-ignore
              '--duration': '18s',
              '--delay': '-4s',
              '--radius': '160px'
            } as CSSProperties}
          >
            <div className="planet-upright-wrapper">
              <div 
                className="w-3.5 h-3.5 rounded-full bg-linear-to-tr from-edibs-primary to-[#FFF] shadow-[0_0_15px_rgba(75,184,250,0.85),inset_-1px_-1px_3px_rgba(0,0,0,0.85)] planet-sphere-countertilt"
              />
            </div>
          </div>

          {/* Interactive Orbiting Planetary Nodes */}
          {PLANETS.map((planet, index) => {
            const delay = -(index * 9.5);

            return (
              <div
                key={planet.id}
                className="planet-orbiting-node"
                style={{
                  // @ts-ignore
                  '--duration': `${planet.orbitDuration}s`,
                  '--delay': `${delay}s`,
                  '--radius': `${planet.orbitRadius}px`,
                  animationPlayState: hoveredPlanet === planet.id ? 'paused' : 'running'
                } as CSSProperties}
              >
                <div 
                  className="planet-upright-wrapper"
                  style={{
                    animationPlayState: hoveredPlanet === planet.id ? 'paused' : 'running'
                  }}
                >
                  <div className="planet-sphere-container">
                    
                    {/* Interactive Planet Spheroid */}
                    <div 
                      className="relative flex items-center group cursor-pointer"
                      onClick={() => onSelectProgram(planet.id)}
                      onMouseEnter={() => setHoveredPlanet(planet.id)}
                      onMouseLeave={() => setHoveredPlanet(null)}
                    >
                      {/* 3D Sphere Visual */}
                      <div 
                        className="relative rounded-full transition-all duration-500 ease-out shrink-0"
                        style={{
                          width: '56px',
                          height: '56px',
                          boxShadow: hoveredPlanet === planet.id 
                            ? `0 0 35px ${planet.glowColor}, 0 0 70px ${planet.glowColor}77, inset -5px -5px 12px rgba(0,0,0,0.9), inset 5px 5px 12px rgba(255,255,255,0.45)`
                            : `0 0 16px ${planet.glowColor}aa, inset -4px -4px 10px rgba(0,0,0,0.95), inset 4px 4px 8px rgba(255,255,255,0.35)`,
                          transform: hoveredPlanet === planet.id ? 'scale(1.18)' : 'scale(1)'
                        }}
                      >
                        {/* Atmosphere Ring Overlay */}
                        <div 
                          className="absolute -inset-1.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                          style={{
                            border: `1.5px solid ${planet.glowColor}55`,
                            boxShadow: `inset 0 0 12px ${planet.glowColor}33`,
                            transform: hoveredPlanet === planet.id ? 'scale(1.04)' : 'scale(1)'
                          }}
                        />

                        {/* Planet texture image (no grayscale!) */}
                        <img 
                          src={planet.imageUrl} 
                          alt={planet.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full rounded-full object-cover relative z-10 transition-transform duration-700 ease-out group-hover:rotate-20"
                        />

                        {/* Spherical shadows and light diffusion */}
                        <div 
                          className="absolute inset-0 rounded-full pointer-events-none z-20"
                          style={{
                            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.85) 85%, rgba(0,0,0,0.98) 100%)'
                          }}
                        />
                        
                        {/* Specular high-intensity rim reflection */}
                        <div 
                          className="absolute inset-0 rounded-full pointer-events-none z-20 opacity-40 mix-blend-overlay"
                          style={{
                            background: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 45%)'
                          }}
                        />

                        {/* Tiny active beacon indicator */}
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-edibs-primary rounded-full border border-black z-30 flex items-center justify-center">
                          <span className="w-1.5 h-1.5 bg-black rounded-full animate-ping"></span>
                        </div>
                      </div>

                      {/* Realistic Labels aligned to the right */}
                      <div 
                        className={`ml-4 flex flex-col items-start pointer-events-none transition-all duration-300 whitespace-nowrap z-40 ${
                          hoveredPlanet === planet.id 
                            ? 'opacity-100 translate-x-0 scale-100' 
                            : 'opacity-80 -translate-x-1 scale-95'
                        }`}
                      >
                        <span className="text-xs font-display font-bold uppercase tracking-wider text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
                          {planet.name}
                        </span>
                        <span className="text-[9px] text-edibs-primary font-mono mt-0.5 uppercase tracking-widest bg-black/60 backdrop-blur-[2px] px-2 py-0.5 rounded border border-white/5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                          {planet.tagline}
                        </span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>

      {/* Central Planet / Big Bang University Core (Desktop only) */}
      <div className="absolute z-30 hidden md:flex flex-col items-center justify-center select-none pointer-events-none">
        
        {/* Core Planet Spheroid */}
        <div 
          className="relative rounded-full flex items-center justify-center"
          style={{
            width: '155px',
            height: '155px',
            boxShadow: '0 0 55px rgba(21,145,220,0.28), inset -8px -8px 20px rgba(0,0,0,0.98), inset 8px 8px 15px rgba(255,255,255,0.22)'
          }}
        >
          {/* Atmosphere Halo Ring */}
          <div className="absolute -inset-2.5 rounded-full border-2 border-edibs-primary/35 shadow-[inset_0_0_24px_rgba(21,145,220,0.18)] animate-pulse-subtle" />

          {/* Blue dust / nebula glow behind the central planet */}
          <div className="absolute inset-0 bg-edibs-primary/5 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '6s' }} />
          {/* Central Planet Image */}
          <img 
            src={centralPlanetImg} 
            alt="Big Bang University Central Planet"
            className="w-full h-full rounded-full object-cover relative z-10 animate-float"
            style={{ animationDuration: '9s' }}
          />

          {/* Spherical lighting shader overlay */}
          <div 
            className="absolute inset-0 rounded-full pointer-events-none z-20"
            style={{
              background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.05) 45%, rgba(0,0,0,0.75) 80%, rgba(0,0,0,0.95) 100%)'
            }}
          />

          {/* Specular high-intensity rim light */}
          <div 
            className="absolute inset-0 rounded-full pointer-events-none z-20 opacity-30 mix-blend-overlay"
            style={{
              background: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 45%)'
            }}
          />
        </div>
      </div>

      {/* Styled Responsive Container (Mobile Fallback) */}
      <div 
        className="grid grid-cols-2 gap-3 min-w-full md:hidden px-4 z-20 absolute"
        id="mobile-planets-grid"
      >
        {PLANETS.map((planet) => (
          <button
            key={`mobile-${planet.id}`}
            onClick={() => onSelectProgram(planet.id)}
            className="glass p-3.5 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 transition-all flex flex-col items-center justify-center border border-white/10 hover:border-edibs-primary text-center group"
          >
            <div className="relative mb-2">
              <div 
                className="w-12 h-12 rounded-full overflow-hidden relative"
                style={{
                  boxShadow: `0 0 15px ${planet.glowColor}aa, inset -3px -3px 6px rgba(0,0,0,0.85), inset 3px 3px 5px rgba(255,255,255,0.2)`
                }}
              >
                <img 
                  src={planet.imageUrl} 
                  alt={planet.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                {/* 3D overlay shadow */}
                <div 
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.8) 85%)'
                  }}
                />
              </div>
              <span 
                className="absolute bottom-0 right-0 block w-2.5 h-2.5 rounded-full ring-2 ring-neutral-900 animate-pulse"
                style={{ backgroundColor: planet.glowColor }}
              />
            </div>
            <h3 className="text-xs font-display font-semibold text-white tracking-tight group-hover:text-edibs-blue-light transition-colors">
              {planet.name}
            </h3>
            <span className="text-[8px] text-gray-400 font-mono mt-1 uppercase tracking-widest leading-none">
              {planet.tagline}
            </span>
          </button>
        ))}
      </div>

      {/* Core Inline Styles for 3D Perspectives, Rotations and Keyframes */}
      <style>{`
        /* 3D orbits container, rotated around X and Z for a realistic flat plane perspective */
        .orbits-container-3d {
          position: absolute;
          width: 100%;
          height: 100%;
          perspective: 1200px;
          transform-style: preserve-3d;
          transform: rotateX(66deg) rotateZ(-16deg);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Tilted orbital ring guides styled in premium blue glow */
        .orbit-track-3d {
          position: absolute;
          border: 1.5px solid rgba(21, 145, 220, 0.12);
          border-radius: 50%;
          transform-style: preserve-3d;
          box-shadow: inset 0 0 25px rgba(21, 145, 220, 0.02), 0 0 15px rgba(21, 145, 220, 0.02);
          pointer-events: none;
        }

        /* Rotating node along the 3D-tilted orbit */
        .planet-orbiting-node {
          position: absolute;
          top: 50%;
          left: 50%;
          transform-style: preserve-3d;
          animation: orbit-animation var(--duration) linear infinite;
          animation-delay: var(--delay);
        }

        /* Counter-rotates the node so children stay perfectly upright */
        .planet-upright-wrapper {
          position: absolute;
          transform-style: preserve-3d;
          animation: counter-orbit-animation var(--duration) linear infinite;
          animation-delay: var(--delay);
        }

        /* Counteracts the 66deg X tilt and -16deg Z tilt of the orbit system */
        .planet-sphere-container {
          transform: rotateZ(16deg) rotateX(-66deg);
          transform-style: preserve-3d;
          display: flex;
          align-items: center;
        }

        /* Static counter-tilt for simple items like the satellite */
        .planet-sphere-countertilt {
          transform: rotateZ(16deg) rotateX(-66deg);
        }

        /* Standard circular orbit animations handled smoothly via hardware acceleration */
        @keyframes orbit-animation {
          from {
            transform: translate(-50%, -50%) rotate(0deg) translateX(var(--radius)) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg) translateX(var(--radius)) rotate(0deg);
          }
        }

        @keyframes counter-orbit-animation {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}

