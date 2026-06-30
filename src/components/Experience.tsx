import { useState } from "react";
import { EXPERIENCE } from "../data/experience";
import { Reveal } from "./Reveal";
import { Thumbnail } from "./Thumbnail";

const COLLAPSED_COUNT = 4;

function JobCard({ job, index }: { job: (typeof EXPERIENCE)[number]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = job.bullets.length > COLLAPSED_COUNT;
  const visibleBullets = expanded ? job.bullets : job.bullets.slice(0, COLLAPSED_COUNT);

  return (
    <Reveal delay={index * 80}>
      <div className="relative pl-9 sm:pl-12">
        <span className="absolute left-0 top-1.5 flex h-5 w-5 items-center justify-center sm:left-0.5">
          <span className="absolute h-5 w-5 rounded-full bg-accent-400/15" />
          <span className="h-2 w-2 rounded-full bg-accent-400" />
        </span>

        <div className="card p-6 sm:p-7">
          <div className="flex items-start gap-4">
            <Thumbnail label={job.company} initials={job.initials} logo={job.logo} index={index} size="sm" />
            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-lg font-semibold text-mist-100">{job.company}</h3>
                <span className="font-mono text-xs text-mist-500">{job.period}</span>
              </div>
              <p className="mt-1 text-sm text-mist-400">
                {job.role} · {job.location}
              </p>
            </div>
          </div>

          <ul className="mt-5 flex flex-col gap-2.5">
            {visibleBullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-mist-300">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent-400/70" />
                {b}
              </li>
            ))}
          </ul>

          {hasMore && (
            <button
              onClick={() => setExpanded((e) => !e)}
              className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent-400 transition-colors hover:text-accent-300"
            >
              {expanded ? "Show less" : `Show ${job.bullets.length - COLLAPSED_COUNT} more`}
            </button>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section py-24 sm:py-32">
      <Reveal>
        <div className="eyebrow">Experience</div>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-bold sm:text-4xl">
          Six years of shipping the systems banks and platforms run on.
        </h2>
      </Reveal>

      <div className="relative mt-14 flex flex-col gap-6 before:absolute before:left-2 before:top-2 before:hidden before:h-[calc(100%-1rem)] before:w-px before:bg-ink-700 sm:before:block sm:before:left-[11px]">
        {EXPERIENCE.map((job, i) => (
          <JobCard key={job.company + job.period} job={job} index={i} />
        ))}
      </div>
    </section>
  );
}
