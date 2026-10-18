import { useState, useEffect } from 'react';
import { ExternalLink, X, ChevronRight } from 'lucide-react';
import { GitHubIcon } from './BrandIcons';
import { projects, type Project, type ProjectCategory } from '../data/config';
import { useReveal } from '../hooks/useReveal';

const FILTERS: { label: string; value: 'All' | ProjectCategory }[] = [
  { label: 'All', value: 'All' },
  { label: 'AI/ML', value: 'AI/ML' },
  { label: 'Backend', value: 'Backend' },
  { label: 'Web', value: 'Web' },
];

// ─── Modal ──────────────────────────────────────────────────
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/90 backdrop-blur-sm p-0 md:p-6"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className="relative w-full md:max-w-3xl max-h-[92vh] overflow-y-auto bg-[#0d0d0d] border border-white/10">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 text-white/40 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>



        {/* Content */}
        <div className="p-8 md:p-10">
          <div className="flex items-start gap-4 mb-6">
            <span className="text-xs text-white/30 tracking-[0.2em] mt-1">{project.number}</span>
            <h2
              className="text-2xl md:text-3xl font-light text-white leading-snug"
              style={{ fontFamily: 'DM Serif Display, serif' }}
            >
              {project.title}
            </h2>
          </div>

          <p className="text-white/60 text-sm leading-relaxed mb-8">{project.description}</p>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-[10px] tracking-[0.25em] uppercase text-white/30 mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="text-[11px] tracking-[0.1em] uppercase text-white/50 border border-white/15 px-3 py-1.5">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-10">
            <h3 className="text-[10px] tracking-[0.25em] uppercase text-white/30 mb-4">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map(feat => (
                <li key={feat} className="flex items-start gap-3 text-sm text-white/55">
                  <ChevronRight size={14} className="mt-0.5 shrink-0 text-white/25" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 border-t border-white/10 pt-8">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-white hover:text-white/60 transition-colors"
              >
                <GitHubIcon size={14} /> GitHub
              </a>
            ) : (
              <span
                className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-white/25 cursor-default"
                title="Update github URL in src/data/config.ts"
              >
                <GitHubIcon size={14} /> GitHub — Add URL
              </span>
            )}
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-white hover:text-white/60 transition-colors"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            ) : (
              <span
                className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-white/25 cursor-default"
                title="Update demo URL in src/data/config.ts"
              >
                <ExternalLink size={14} /> Demo — Add URL
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Card ────────────────────────────────────────────────────
function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  const ref = useReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      className="reveal group cursor-pointer"
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
      onClick={() => onOpen(project)}
      tabIndex={0}
      role="button"
      aria-label={`View ${project.title} details`}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onOpen(project); }}
    >
      {/* Meta */}
      <div className="flex items-start justify-between gap-4 pt-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] tracking-[0.2em] text-white/25">{project.number}</span>
            <div className="h-px flex-1 bg-white/10" />
            {project.categories.map(cat => (
              <span
                key={cat}
                className="text-[9px] tracking-[0.18em] uppercase text-white/40 border border-white/15 px-2 py-0.5"
              >
                {cat}
              </span>
            ))}
          </div>
          <h3
            className="text-base md:text-lg font-light text-white leading-snug group-hover:text-white/70 transition-colors duration-300"
            style={{ fontFamily: 'DM Serif Display, serif' }}
          >
            {project.title}
          </h3>
          <p className="mt-2 text-xs text-white/40 leading-relaxed line-clamp-2">{project.description}</p>
        </div>
        <ChevronRight
          size={16}
          className="shrink-0 mt-8 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all duration-300"
        />
      </div>

      {/* Tech pills */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 4).map(tech => (
          <span
            key={tech}
            className="text-[10px] tracking-[0.08em] uppercase text-white/35 border border-white/10 px-2 py-0.5"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="text-[10px] text-white/20 px-2 py-0.5">+{project.technologies.length - 4}</span>
        )}
      </div>
    </article>
  );
}

// ─── Gallery ─────────────────────────────────────────────────
export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<'All' | ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const headerRef = useReveal<HTMLDivElement>();

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter(p => p.categories.includes(activeFilter));

  return (
    <section id="projects" className="bg-black py-28 md:py-36 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div
          ref={headerRef}
          className="reveal mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <span className="block text-[10px] tracking-[0.3em] uppercase text-white/30 mb-4">Selected Work</span>
            <h2
              className="text-5xl md:text-7xl font-light text-white leading-none"
              style={{ fontFamily: 'DM Serif Display, serif' }}
            >
              Projects
            </h2>
          </div>

          {/* Filters */}
          <div className="flex gap-1 flex-wrap" role="group" aria-label="Filter projects">
            {FILTERS.map(f => (
              <button
                key={f.value}
                id={`filter-${f.value.toLowerCase().replace('/', '-')}`}
                onClick={() => setActiveFilter(f.value)}
                className={`text-[10px] tracking-[0.15em] uppercase px-4 py-2 transition-all duration-200 border ${
                  activeFilter === f.value
                    ? 'border-white text-white bg-white/5'
                    : 'border-white/15 text-white/35 hover:border-white/40 hover:text-white/70'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={setSelectedProject}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-white/30 py-20 text-sm tracking-widest uppercase">
            No projects in this category
          </p>
        )}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
