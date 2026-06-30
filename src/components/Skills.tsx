import { SKILLS } from "../data/skills";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="border-y border-ink-700 bg-ink-900/30 py-24 sm:py-32">
      <div className="section">
        <Reveal>
          <div className="eyebrow">Skills</div>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-bold sm:text-4xl">
            A toolkit built around reliability at scale.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((group, i) => (
            <Reveal key={group.title} delay={(i % 4) * 80}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-400">{group.title}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-mist-300">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-mist-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
