import { useRef, useEffect } from 'react';
import { skills } from '../data/config';

function useRevealEls(count: number) {
  const refs = useRef<(HTMLDivElement | null)[]>(Array(count).fill(null));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    refs.current.forEach(el => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('visible');
            obs.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(obs => obs.disconnect());
  }, []);

  return refs;
}

export default function Skills() {
  const headerRef = useRef<HTMLDivElement>(null);
  const groupRefs = useRevealEls(skills.length);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect(); }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="bg-black py-28 md:py-36 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div ref={headerRef} className="reveal mb-16 md:mb-20">
          <span className="block text-[10px] tracking-[0.3em] uppercase text-white/30 mb-4">Capabilities</span>
          <h2
            className="text-5xl md:text-7xl font-light text-white leading-none"
            style={{ fontFamily: 'DM Serif Display, serif' }}
          >
            Skills
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {skills.map((group, gi) => (
            <div
              key={group.group}
              ref={el => { groupRefs.current[gi] = el; }}
              className="reveal"
              style={{ transitionDelay: `${gi * 80}ms` }}
            >
              <h3 className="text-[10px] tracking-[0.25em] uppercase text-white/30 mb-6 pb-4 border-b border-white/10">
                {group.group}
              </h3>
              <ul className="space-y-3">
                {group.items.map(skill => (
                  <li key={skill} className="flex items-center gap-3 group/skill">
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover/skill:bg-white/60 transition-colors duration-200 shrink-0" />
                    <span className="text-sm text-white/55 group-hover/skill:text-white/80 transition-colors duration-200">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
