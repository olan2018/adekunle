import { GMOY, GMOY_FEATURES } from "../data/gmoy";
import { ArrowUpRightIcon } from "./icons";
import { Reveal } from "./Reveal";

export function NowBuilding() {
  return (
    <section id="gmoy" className="relative overflow-hidden border-y border-ink-700 bg-ink-900/30 py-24 sm:py-32">
      <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-accent-500/10 blur-[120px]" />

      <div className="section relative">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <div className="eyebrow before:hidden">Currently Building</div>
            <span className="flex items-center gap-1.5 rounded-full border border-accent-400/30 bg-accent-400/10 px-2.5 py-1 text-[11px] font-semibold text-accent-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-400" />
              In active development
            </span>
          </div>

          <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl">
            {GMOY.name} — {GMOY.tagline}
          </h2>
          <p className="mt-5 max-w-2xl text-balance text-sm leading-relaxed text-mist-400 sm:text-base">
            {GMOY.pitch}
          </p>

          <a
            href={GMOY.url}
            target="_blank"
            rel="noreferrer"
            className="group mt-6 inline-flex items-center gap-2 rounded-full bg-accent-400 px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
          >
            Visit gMOY
            <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>

        {/* Operating model flow */}
        <Reveal delay={100}>
          <div className="mt-9 flex flex-wrap items-center gap-2.5">
            {GMOY.flow.map((step, i) => (
              <div key={step} className="flex items-center gap-2.5">
                <span className="rounded-full border border-ink-600 bg-ink-850 px-4 py-2 text-sm font-semibold text-mist-100">
                  {step}
                </span>
                {i < GMOY.flow.length - 1 && <span className="text-accent-400">&rarr;</span>}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Feature grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {GMOY_FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 2) * 100}>
              <div className="card h-full p-6 sm:p-7">
                <h3 className="text-base font-semibold text-mist-100">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-400">{f.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {f.points.map((p) => (
                    <li key={p} className="chip">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Impact stats */}
        <Reveal delay={150}>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink-700 bg-ink-700 sm:grid-cols-3">
            {GMOY.stats.map((s) => (
              <div key={s.label} className="bg-ink-900/60 p-7 text-center">
                <p className="font-display text-2xl font-bold text-accent-300 sm:text-3xl">{s.value}</p>
                <p className="mt-2 text-xs leading-relaxed text-mist-400 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
