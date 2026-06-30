import { PROJECTS } from "../data/projects";
import { ArrowUpRightIcon } from "./icons";
import { Reveal } from "./Reveal";
import { Thumbnail } from "./Thumbnail";

export function Projects() {
  return (
    <section id="projects" className="border-y border-ink-700 bg-ink-900/30 py-24 sm:py-32">
      <div className="section">
        <Reveal>
          <div className="eyebrow">Projects</div>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-bold sm:text-4xl">
            Products shipped to real users in production.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 100}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="card group relative flex h-full flex-col p-7 transition-colors hover:border-accent-400/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-4">
                    <Thumbnail label={p.name} initials={p.initials} logo={p.logo} index={i} size="sm" />
                    <h3 className="text-lg font-semibold text-mist-100">{p.name}</h3>
                  </div>
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-ink-600 text-mist-400 transition-all group-hover:border-accent-400/50 group-hover:text-accent-300">
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist-400">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
