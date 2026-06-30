import { PROFILE } from "../data/profile";
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "./icons";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="section py-24 sm:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-ink-700 bg-ink-900/60 px-7 py-14 text-center sm:px-14">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-500/15 blur-[100px]" />

          <div className="eyebrow mx-auto w-fit before:hidden">Contact</div>
          <h2 className="mx-auto mt-4 max-w-xl text-balance text-3xl font-bold sm:text-4xl">
            Building something that needs to be reliable, fast, and secure?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-balance text-sm text-mist-400 sm:text-base">
            Open to senior backend, infrastructure, and engineering leadership roles. Based in Lagos — working with teams everywhere.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${PROFILE.email}`}
              className="group flex items-center gap-2 rounded-full bg-accent-400 px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
            >
              <MailIcon className="h-4 w-4" />
              {PROFILE.email}
            </a>
            <a
              href={`tel:${PROFILE.phone}`}
              className="flex items-center gap-2 rounded-full border border-ink-600 px-6 py-3 text-sm font-semibold text-mist-200 transition-colors hover:border-ink-500 hover:bg-ink-850"
            >
              <PhoneIcon className="h-4 w-4" />
              {PROFILE.phone}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-mist-400 transition-colors hover:text-accent-300"
            >
              <GithubIcon className="h-4 w-4" />
              github.com/kunle001
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
            <span className="h-1 w-1 rounded-full bg-ink-600" />
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-mist-400 transition-colors hover:text-accent-300"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
