import profile from "../assets/profile.jpg";
import { PROFILE, STATS } from "../data/profile";
import { ArrowUpRightIcon, DownloadIcon, GithubIcon, LinkedinIcon, PinIcon } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent-500/10 blur-[120px]" />

      <div className="section relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-fade-up">
          <div className="eyebrow">Available for select engagements</div>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Backend systems that move{" "}
            <span className="italic bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
              money, identity, and trust
            </span>{" "}
            — at scale.
          </h1>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-mist-400 sm:text-lg">
            {PROFILE.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-accent-400 px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
            >
              Let's talk
              <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={PROFILE.resumeUrl}
              download
              className="flex items-center gap-2 rounded-full border border-ink-600 px-6 py-3 text-sm font-semibold text-mist-200 transition-colors hover:border-ink-500 hover:bg-ink-900"
            >
              <DownloadIcon className="h-4 w-4" />
              Download CV
            </a>

            <div className="ml-1 flex items-center gap-2">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-600 text-mist-300 transition-colors hover:border-accent-400/50 hover:text-accent-300"
                aria-label="GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-600 text-mist-300 transition-colors hover:border-accent-400/50 hover:text-accent-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-ink-700 pt-9 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-bold text-mist-100 sm:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-xs text-mist-500 sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-up [animation-delay:150ms] lg:max-w-none">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent-400/20 via-transparent to-transparent blur-2xl" />
          <div className="relative animate-float rounded-[2rem] border border-ink-700 bg-ink-900/60 p-3 shadow-2xl shadow-black/10 backdrop-blur-sm">
            <img
              src={profile}
              alt={PROFILE.name}
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
            />
            <div className="absolute -bottom-5 left-1/2 flex w-[88%] -translate-x-1/2 items-center justify-between gap-3 rounded-2xl border border-ink-700 bg-ink-850/95 px-5 py-3.5 shadow-xl shadow-black/10 backdrop-blur">
              <div>
                <p className="text-sm font-semibold text-mist-100">{PROFILE.name}</p>
                <p className="flex items-center gap-1 text-xs text-mist-500">
                  <PinIcon className="h-3 w-3" />
                  {PROFILE.location}
                </p>
              </div>
              <span className="flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-accent-400 shadow-[0_0_0_4px_rgba(200,57,43,0.18)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
