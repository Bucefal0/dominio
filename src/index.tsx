import React, { useEffect, useRef } from 'react';

/**
 * Dominio Cycling Club — Fullscreen Coming Soon / En Construcción Page
 * Tone: Energético, oscuro, premium (indoor cycling nocturno con neón púrpura #9D4EDD)
 */
export default function ComingSoonPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Subtle floating neon energy particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      color: string;
      pulse: number;
      pulseSpeed: number;
    }> = [];

    const PARTICLE_COUNT = 36;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.6,
        speedY: -(Math.random() * 0.4 + 0.15),
        speedX: (Math.random() - 0.5) * 0.25,
        opacity: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.4 ? '#9D4EDD' : '#C77DFF',
        pulse: Math.random() * Math.PI,
        pulseSpeed: Math.random() * 0.02 + 0.008,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.pulse += p.pulseSpeed;
        const currentOpacity = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));

        if (p.y < -10 || p.x < -10 || p.x > width + 10) {
          p.x = Math.random() * width;
          p.y = height + 10;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.globalAlpha = Math.max(0, currentOpacity);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#000000] text-white flex flex-col justify-between items-center px-4 py-8 md:py-10 overflow-hidden font-['Work_Sans',sans-serif]">
      {/* Inline styles for custom animations and typography */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&display=swap');

        @keyframes heartBeatGlow {
          0% {
            transform: translate(-50%, -50%) scale(0.92);
            opacity: 0.42;
          }
          22% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.88;
          }
          38% {
            transform: translate(-50%, -50%) scale(1.02);
            opacity: 0.65;
          }
          52% {
            transform: translate(-50%, -50%) scale(1.24);
            opacity: 0.95;
          }
          75% {
            transform: translate(-50%, -50%) scale(0.98);
            opacity: 0.52;
          }
          100% {
            transform: translate(-50%, -50%) scale(0.92);
            opacity: 0.42;
          }
        }

        @keyframes logoBreathe {
          0% {
            filter: drop-shadow(0 0 20px rgba(157, 78, 221, 0.55)) drop-shadow(0 0 50px rgba(157, 78, 221, 0.25));
            transform: scale(1);
          }
          50% {
            filter: drop-shadow(0 0 38px rgba(157, 78, 221, 0.9)) drop-shadow(0 0 85px rgba(199, 125, 255, 0.45));
            transform: scale(1.015);
          }
          100% {
            filter: drop-shadow(0 0 20px rgba(157, 78, 221, 0.55)) drop-shadow(0 0 50px rgba(157, 78, 221, 0.25));
            transform: scale(1);
          }
        }

        @keyframes sheenSweep {
          0%, 65% {
            left: -100%;
          }
          100% {
            left: 200%;
          }
        }

        .animate-heartbeat {
          animation: heartBeatGlow 4.5s ease-in-out infinite;
        }

        .animate-logo-glow {
          animation: logoBreathe 4.5s ease-in-out infinite;
        }

        .sheen-effect {
          position: relative;
          overflow: hidden;
        }
        .sheen-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(199, 125, 255, 0.25), transparent);
          transform: skewX(-25deg);
          animation: sheenSweep 6s infinite ease-in-out;
        }
      `}</style>

      {/* Heartbeat Radial Purple Glow behind the logo */}
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full pointer-events-none z-[1] animate-heartbeat blur-[65px]"
        style={{
          background:
            'radial-gradient(circle, rgba(157, 78, 221, 0.35) 0%, rgba(123, 44, 191, 0.16) 45%, rgba(36, 0, 70, 0.05) 70%, transparent 80%)',
        }}
      />
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full pointer-events-none z-[2] blur-[45px]"
        style={{
          background:
            'radial-gradient(circle, rgba(199, 125, 255, 0.32) 0%, rgba(157, 78, 221, 0.15) 55%, transparent 75%)',
        }}
      />

      {/* Speed Lines / Cycling Velodrome Decorative Track Lines */}
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none z-[3] opacity-20"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100 200 C 400 150, 800 350, 1540 250"
          stroke="url(#trackPurpleGrad)"
          strokeWidth="1.2"
          strokeDasharray="10 18"
        />
        <path
          d="M-100 700 C 500 850, 950 650, 1540 800"
          stroke="url(#trackPurpleGrad)"
          strokeWidth="1"
          strokeDasharray="8 14"
        />
        <defs>
          <linearGradient id="trackPurpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9D4EDD" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#C77DFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#9D4EDD" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Sparkles Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-[4]" />

      {/* TOP: Small Tagline — "DOMINIO CYCLING CLUB" in spaced caps, muted purple */}
      <header className="relative z-10 animate-fade-in-down">
        <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full bg-[#9D4EDD]/10 border border-[#9D4EDD]/30 backdrop-blur-md shadow-[0_0_20px_rgba(157,78,221,0.15)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9D4EDD] shadow-[0_0_8px_#9D4EDD]" />
          <span className="text-xs font-semibold tracking-[0.42em] uppercase text-[#C77DFF]">
            DOMINIO CYCLING CLUB
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#9D4EDD] shadow-[0_0_8px_#9D4EDD]" />
        </div>
      </header>

      {/* CENTER: Hero Content */}
      <section className="relative z-10 max-w-4xl w-full my-auto flex flex-col items-center text-center px-2">
        {/* CENTER: Logo image with purple neon glow effect */}
        <div className="w-full max-w-[560px] mb-8 transition-transform duration-300 hover:scale-[1.02]">
          <img
            src="/airo-assets/images/logo/horizontal"
            alt="Dominio Cycling Club Logo"
            className="w-full h-auto max-h-[220px] object-contain mx-auto rounded-xl animate-logo-glow"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.includes('horizontal.jpg')) {
                target.src = './airo-assets/images/logo/horizontal.jpg';
              } else if (!target.src.includes('dominio_logo_horizontal.jpg')) {
                target.src = './assets/dominio_logo_horizontal.jpg';
              }
            }}
          />
        </div>

        {/* BELOW LOGO: Large "PRÓXIMAMENTE" in Bebas Neue, white, massive tracking */}
        <div className="mb-3 animate-slide-up">
          <h1
            className="text-white text-5xl sm:text-7xl md:text-8xl tracking-[0.24em] font-['Bebas_Neue',sans-serif] uppercase leading-none"
            style={{
              textShadow:
                '0 0 25px rgba(255,255,255,0.25), 0 0 50px rgba(157,78,221,0.65), 0 0 95px rgba(157,78,221,0.3)',
            }}
          >
            PRÓXIMAMENTE
          </h1>
        </div>

        {/* SUBTITLE: "Nuestro sitio está en construcción. Algo grande se acerca." — Work Sans, muted white */}
        <p className="text-[#f0f0f5]/75 font-light text-base sm:text-lg md:text-xl tracking-wide max-w-xl mx-auto mb-10 leading-relaxed">
          Nuestro sitio está en construcción.{' '}
          <span className="text-white font-medium">Algo grande se acerca.</span>
        </p>

        {/* CREDENTIAL BADGE: Styled card/badge with cyclist icon + "OFFICIAL SPINNING® FACILITY" text in purple neon style */}
        <div className="animate-slide-up-delay">
          <div className="sheen-effect group inline-flex items-center gap-4 sm:gap-5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#1c0b2e]/85 to-[#0e0518]/90 border border-[#9D4EDD]/45 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_25px_rgba(157,78,221,0.25)] hover:border-[#C77DFF]/80 hover:shadow-[0_0_35px_rgba(157,78,221,0.5)] transition-all duration-300">
            {/* Cyclist / Flywheel Neon Icon */}
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#9D4EDD]/35 to-[#240046]/70 border border-[#9D4EDD]/55 flex items-center justify-center text-[#C77DFF] shadow-[0_0_15px_rgba(157,78,221,0.45)] shrink-0">
              <svg
                className="w-6 h-6 stroke-current fill-none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ filter: 'drop-shadow(0 0 5px #C77DFF)' }}
              >
                <circle cx="5.5" cy="17.5" r="3.5" />
                <circle cx="18.5" cy="17.5" r="3.5" />
                <circle cx="18.5" cy="17.5" r="1.5" fill="currentColor" />
                <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="currentColor" />
                <path d="m12 17.5 3-6.5-3-3h-2.5l-3 3.5" />
                <path d="m5.5 17.5 3-4 3.5 4" />
                <path d="M18.5 17.5 16 11l2.5-3" />
              </svg>
            </div>

            <div className="text-left flex flex-col">
              <span className="text-[0.68rem] tracking-[0.22em] uppercase font-semibold text-[#C77DFF]">
                CERTIFICACIÓN INTERNACIONAL
              </span>
              <div
                className="font-['Bebas_Neue',sans-serif] text-xl sm:text-2xl tracking-[0.12em] text-white leading-none"
                style={{ textShadow: '0 0 10px rgba(157,78,221,0.6)' }}
              >
                OFFICIAL <span className="text-[#C77DFF]">SPINNING®</span> FACILITY
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM: Minimal social / contact hint & Copyright */}
      <footer className="relative z-10 w-full max-w-3xl flex flex-col items-center gap-3 pt-6 text-center">
        <div className="flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-white/60">
          <span className="w-2 h-2 rounded-full bg-[#C77DFF] shadow-[0_0_10px_#C77DFF] animate-ping" />
          <span>SISTEMA EN PREPARACIÓN • FASE FINAL</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#f0f0f5]/75">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#9D4EDD]/50 hover:bg-[#9D4EDD]/15 transition-all">
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span>Síguenos pronto en redes</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#9D4EDD]/50 hover:bg-[#9D4EDD]/15 transition-all">
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Indoor Cycling Studio</span>
          </div>
        </div>

        <p className="text-[0.72rem] text-white/35 tracking-wider mt-1">
          &copy; 2026 Dominio Cycling Club. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
