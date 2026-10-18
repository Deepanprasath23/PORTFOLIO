import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personal } from '../data/config';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'border-b border-white/10' : ''
        }`}
        style={{ background: scrolled ? 'rgba(0,0,0,0.92)' : 'transparent', backdropFilter: scrolled ? 'blur(12px)' : 'none' }}
      >
        <nav className="flex items-center justify-between px-6 py-5 md:px-12 max-w-[1600px] mx-auto">
          {/* Logo / Name */}
          <a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-xs font-medium tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors duration-300"
            style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.2em' }}
          >
            {personal.nameFirst}
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={e => { e.preventDefault(); handleNav(link.href); }}
                  className="text-xs tracking-[0.15em] uppercase text-white/50 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden text-white/70 hover:text-white transition-colors duration-200 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile Fullscreen Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black flex flex-col justify-center px-8 transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col gap-8">
          {navLinks.map((link, i) => (
            <li key={link.label} style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
              className={`transition-all duration-500 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <a
                href={link.href}
                onClick={e => { e.preventDefault(); handleNav(link.href); }}
                className="text-4xl font-light text-white hover:text-white/50 transition-colors duration-300"
                style={{ fontFamily: 'DM Serif Display, serif' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-xs tracking-[0.2em] uppercase text-white/30">{personal.email}</p>
        </div>
      </div>
    </>
  );
}
