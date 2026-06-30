export const GMOY = {
  name: "gMOY",
  tagline: "The Workforce Accountability & Execution Platform",
  url: "https://gmoy.onrender.com",
  pitch:
    "Work is happening — but businesses can't see it, verify it, or enforce it. Disengaged employees cost the global economy $8.8 trillion a year. gMOY is a real-time workforce accountability platform that makes sure tasks don't just get assigned — they get done, verified, and measured.",
  flow: ["Assign", "Track", "Verify", "Enforce"],
  stats: [
    { value: "$8.8T", label: "Lost globally each year to disengaged work" },
    { value: "$282M", label: "Median annual loss for an S&P 500 company" },
    { value: "20–40%", label: "Productivity loss gMOY targets eliminating" },
  ],
};

export interface GmoyFeature {
  title: string;
  description: string;
  points: string[];
}

export const GMOY_FEATURES: GmoyFeature[] = [
  {
    title: "Proof-of-Work Task System",
    description: "Every task requires verifiable output — no more \"task completed\" without evidence.",
    points: ["Image proof", "Link submissions", "Location check-ins", "Time-stamped responses"],
  },
  {
    title: "Real-Time Monitoring",
    description: "Live visibility into the workforce, instead of waiting for weekly reports to discover failures.",
    points: ["Task progress", "Delays and inactivity", "Workforce availability"],
  },
  {
    title: "Automated Accountability",
    description: "Management moves from guesswork to data-driven decisions.",
    points: ["Flags missed or ignored tasks", "Tracks response times", "Identifies repeat offenders"],
  },
  {
    title: "Presence & Availability Enforcement",
    description: "Know who is actually working — not just \"online.\"",
    points: ["Scheduled and triggered check-ins", "Task acknowledgment tracking", "Activity-based engagement signals"],
  },
];
