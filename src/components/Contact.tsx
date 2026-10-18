import { Mail, ArrowUpRight } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import { personal } from '../data/config';
import { useReveal } from '../hooks/useReveal';

interface LinkItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  isPlaceholder: boolean;
}

export default function Contact() {
  const headingRef = useReveal<HTMLDivElement>();
  const linksRef = useReveal<HTMLDivElement>();

  const links: LinkItem[] = [
    {
      icon: <Mail size={14} />,
      label: personal.email,
      href: `mailto:${personal.email}`,
      isPlaceholder: false,
    },
    {
      icon: <GitHubIcon size={14} />,
      label: 'GitHub',
      href: personal.github,
      isPlaceholder: personal.github.includes('YOUR_USERNAME'),
    },
    {
      icon: <LinkedInIcon size={14} />,
      label: 'LinkedIn',
      href: personal.linkedin,
      isPlaceholder: personal.linkedin.includes('YOUR_USERNAME'),
    },
  ];

  return (
    <section id="contact" className="bg-black py-28 md:py-36 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section label */}
        <div ref={headingRef} className="reveal mb-16 md:mb-24">
          <span className="block text-[10px] tracking-[0.3em] uppercase text-white/30 mb-6">Contact</span>
          <h2
            className="text-5xl md:text-8xl font-light text-white leading-none"
            style={{ fontFamily: 'DM Serif Display, serif' }}
          >
            Let's connect.
          </h2>
        </div>

        {/* Links */}
        <div
          ref={linksRef}
          className="reveal space-y-0"
          style={{ transitionDelay: '150ms' }}
        >
          {links.map((link, i) => (
            <div key={link.label}>
              {link.isPlaceholder ? (
                <div
                  className="flex items-center justify-between py-6 md:py-8 opacity-40"
                  title="Update URL in src/data/config.ts"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-white/30">{link.icon}</span>
                    <span
                      className="text-xl md:text-3xl font-light text-white"
                      style={{ fontFamily: 'DM Serif Display, serif' }}
                    >
                      {link.label}
                      <span className="ml-3 text-xs tracking-widest uppercase text-white/30 align-middle">— Add URL</span>
                    </span>
                  </div>
                </div>
              ) : (
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-6 md:py-8 hover:text-white/60 transition-colors duration-300"
                  aria-label={link.label}
                >
                  <div className="flex items-center gap-5">
                    <span className="text-white/30 group-hover:text-white/70 transition-colors duration-300">{link.icon}</span>
                    <span
                      className="text-xl md:text-3xl font-light text-white group-hover:text-white/60 transition-colors duration-300"
                      style={{ fontFamily: 'DM Serif Display, serif' }}
                    >
                      {link.label}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-white/30 group-hover:text-white/70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                  />
                </a>
              )}
              {i < links.length - 1 && <div className="h-px bg-white/[0.08]" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
