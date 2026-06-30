import { useEffect, useState } from "react";
import { PROFILE } from "../data/profile";
import { CloseIcon, DownloadIcon, MenuIcon } from "./icons";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "gMOY", href: "#gmoy" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "border-b border-ink-700 bg-ink-950/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="section flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="flex items-center gap-2.5 font-display text-sm font-bold tracking-wide text-mist-100">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent-400/40 bg-accent-400/10 text-accent-400">
            OA
          </span>
          <span className="hidden sm:inline">Olanipekun&nbsp;Adekunle</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-mist-400 transition-colors hover:text-mist-100">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex">
          <a
            href={PROFILE.resumeUrl}
            download
            className="flex items-center gap-2 rounded-full border border-accent-400/40 bg-accent-400/10 px-4 py-2 text-sm font-semibold text-accent-300 transition-colors hover:bg-accent-400/20"
          >
            <DownloadIcon className="h-4 w-4" />
            Resume
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-600 text-mist-200 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-700 bg-ink-950 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-mist-300 hover:text-mist-100"
              >
                {l.label}
              </a>
            ))}
            <a
              href={PROFILE.resumeUrl}
              download
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-accent-400/15 px-4 py-2.5 text-sm font-semibold text-accent-300"
            >
              <DownloadIcon className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
