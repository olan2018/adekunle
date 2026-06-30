import { EDUCATION, AFFILIATIONS } from "../data/education";
import { Reveal } from "./Reveal";

const FOCUS_AREAS = [
  {
    title: "Fintech & Core Banking",
    body: "Authentication, transactions, loans, investments — designed and shipped microservices powering real banking products used by thousands.",
  },
  {
    title: "Identity & Compliance",
    body: "BVN/NIN verification, KYC workflows, and CBN-compliant audit trails with intelligent provider failover for partner reliability.",
  },
  {
    title: "Cloud-Native Infrastructure",
    body: "Self-managed Kubernetes, GitOps with ArgoCD, and observability stacks (Prometheus/Grafana/ELK) that cut incident response time significantly.",
  },
];

export function About() {
  return (
    <section id="about" className="section py-24 sm:py-32">
      <Reveal>
        <div className="eyebrow">About</div>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-bold sm:text-4xl">
          Owning backend architecture end-to-end, from first commit to production scale.
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {FOCUS_AREAS.map((f, i) => (
          <Reveal key={f.title} delay={i * 100}>
            <div className="card h-full p-7">
              <span className="font-mono text-xs text-accent-400">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold text-mist-100">{f.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-mist-400">{f.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={150}>
        <div className="mt-5 flex flex-col gap-6 rounded-2xl border border-ink-700 bg-ink-900/40 p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-mist-500">Education</p>
            <p className="mt-1.5 text-base font-semibold text-mist-100">{EDUCATION.degree}</p>
            <p className="text-sm text-mist-400">
              {EDUCATION.school} · {EDUCATION.year}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {AFFILIATIONS.map((a) => (
              <span key={a} className="chip">
                {a}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
