import { useReveal } from '../hooks/useReveal';
import { about } from '../data/config';

export default function About() {
  const imageRef = useReveal<HTMLImageElement>();
  const colRef = useReveal<HTMLDivElement>();
  const textRef = useReveal<HTMLDivElement>();
  const bodyRef = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="bg-black py-28 md:py-36 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-12 md:gap-0">
          <div className="md:col-span-4 md:pr-12">
            <img
              ref={imageRef}
              src="/profile.jpeg"
              alt="Deepan Prasath"
              loading="lazy"
              decoding="async"
              className="reveal aspect-[4/5] w-full max-w-sm border border-white/10 object-cover"
            />
          </div>

          <div className="md:col-span-8 md:pl-8 flex flex-col justify-center">
            <div
              ref={colRef}
              className="reveal mb-10"
            >
              <span className="block text-[10px] tracking-[0.3em] uppercase text-white/30 mb-4">About</span>
              <h2
                className="text-5xl md:text-6xl font-light text-white leading-tight"
                style={{ fontFamily: 'DM Serif Display, serif' }}
              >
                A bit <em>about me.</em>
              </h2>
            </div>
            <div
              ref={textRef}
              className="reveal"
              style={{ transitionDelay: '100ms' }}
            >
              <p
                className="text-xl md:text-2xl text-white/70 leading-relaxed font-light mb-8"
                style={{ fontFamily: 'DM Serif Display, serif' }}
              >
                {about.intro}
              </p>
            </div>

            <div
              ref={bodyRef}
              className="reveal"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="w-12 h-px bg-white/20 mb-8" />
              <p className="text-sm md:text-base text-white/45 leading-relaxed max-w-xl">
                {about.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
