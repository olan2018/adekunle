interface ThumbnailProps {
  label: string;
  initials: string;
  logo?: string;
  index?: number;
  size?: "md" | "sm";
}

const VARIANTS = [
  "bg-gradient-to-br from-ink-800 to-ink-900",
  "bg-gradient-to-tr from-ink-900 via-ink-800 to-ink-900",
  "bg-gradient-to-bl from-ink-800 to-ink-900",
  "bg-gradient-to-tl from-ink-900 via-ink-800 to-ink-900",
];

export function Thumbnail({ label, initials, logo, index = 0, size = "md" }: ThumbnailProps) {
  const isSm = size === "sm";

  if (logo) {
    return (
      <div
        className={
          isSm
            ? "flex h-14 w-14 flex-none items-center justify-center overflow-hidden rounded-xl border border-ink-700 bg-white p-2"
            : "flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl border border-ink-700 bg-white p-7"
        }
      >
        <img src={logo} alt={label} className="max-h-full max-w-full object-contain" />
      </div>
    );
  }

  return (
    <div
      className={`relative flex flex-none items-center justify-center overflow-hidden rounded-xl border border-ink-700 ${
        isSm ? "h-14 w-14" : "aspect-[4/3] w-full"
      } ${VARIANTS[index % VARIANTS.length]}`}
    >
      <span
        aria-hidden
        className={`absolute rounded-full bg-accent-400/10 blur-xl ${
          isSm ? "-bottom-2 -right-2 h-8 w-8" : "-bottom-3 -right-2 h-16 w-16"
        }`}
      />
      <span className={`relative font-display italic text-accent-300 ${isSm ? "text-sm" : "text-3xl"}`}>
        {initials}
      </span>
    </div>
  );
}
