import { useEffect, useRef } from 'react';
import { Download } from 'lucide-react';
import { personal } from '../data/config';

export default function Hero() {
  const firstRef = useRef<HTMLSpanElement>(null);
  const lastRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [firstRef.current, lastRef.current, lineRef.current, metaRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px)';
      setTimeout(() => {
        if (!el) return;
        el.style.transition = 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 200 + i * 150);
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end bg-black overflow-hidden"
      aria-label="Hero"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Name block — bottom-left */}
      <div className="relative z-10 px-6 md:px-12 pb-20 md:pb-28 max-w-[1600px] mx-auto w-full">
        <h1
          className="font-serif font-normal leading-none tracking-tight text-white select-none"
          style={{
            fontFamily: 'DM Serif Display, serif',
            fontSize: 'clamp(3.5rem, 8vw, 9rem)',
            lineHeight: 0.9,
          }}
          aria-label={personal.name}
        >
          <span ref={firstRef} className="block">{personal.nameFirst}</span>
          <span ref={lastRef} className="block">{personal.nameLast}</span>
        </h1>

        {/* Thin rule */}
        <div
          ref={lineRef}
          className="mt-10 md:mt-14"
          style={{ width: 'clamp(40px, 6vw, 80px)', height: '1px', background: 'rgba(255,255,255,0.25)' }}
        />

        {/* Bottom meta row */}
        <div ref={metaRef} className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
          <span className="text-xs tracking-[0.18em] uppercase text-white/30">
            {personal.education}
          </span>
          <span className="text-white/15 text-xs">—</span>
          <a
            href="#projects"
            onClick={e => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-xs tracking-[0.18em] uppercase text-white/30 hover:text-white transition-colors duration-300"
          >
            View Work ↓
          </a>
          <a
            href="/resume.pdf"
            download="Deepan_Prasath_Resume.pdf"
            className="flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-white/50 hover:text-white transition-colors duration-300"
          >
            <Download size={14} aria-hidden="true" />
            Download Resume
          </a>
        </div>
      </div>

      {/* Bottom thin border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
    </section>
  );
}
