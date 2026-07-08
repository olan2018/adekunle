import { PROFILE } from "../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-ink-700 py-8">
      <div className="section flex flex-col items-center justify-between gap-3 text-xs text-mist-500 sm:flex-row">
        <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
        {/* <p>Built with React, TypeScript & Tailwind CSS.</p> */}
      </div>
    </footer>
  );
}
