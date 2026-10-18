import { personal } from '../data/config';

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const connectLinks = [
  { label: 'Email', href: `mailto:${personal.email}`, placeholder: false },
  {
    label: 'GitHub',
    href: personal.github,
    placeholder: personal.github.includes('YOUR_USERNAME'),
  },
  {
    label: 'LinkedIn',
    href: personal.linkedin,
    placeholder: personal.linkedin.includes('YOUR_USERNAME'),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 mb-12 md:mb-16">
          {/* Identity */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/25 mb-4">Identity</p>
            <p className="text-sm text-white/60 mb-1">{personal.name}</p>
            <p className="text-xs text-white/25">&copy; {year} All rights reserved.</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/25 mb-4">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={e => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/25 mb-4">Connect</p>
            <ul className="space-y-2">
              {connectLinks.map(link => (
                <li key={link.label}>
                  {link.placeholder ? (
                    <span className="text-sm text-white/25 cursor-default" title="Update URL in src/data/config.ts">
                      {link.label} — Add URL
                    </span>
                  ) : (
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/20">
            Built with React · TypeScript · Tailwind CSS
          </p>
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/20">
            {personal.education}
          </p>
        </div>
      </div>
    </footer>
  );
}
