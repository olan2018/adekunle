export interface SkillGroup {
  title: string;
  items: string[];
}

export const SKILLS: SkillGroup[] = [
  {
    title: "Languages & Frameworks",
    items: ["Golang (Primary)", "TypeScript", "JavaScript", "Node.js"],
  },
  {
    title: "Backend & Architecture",
    items: [
      "Microservices",
      "Distributed Systems",
      "REST APIs",
      "gRPC",
      "WebSockets",
      "API Gateway Design",
      "Clean Architecture",
    ],
  },
  {
    title: "Databases & Storage",
    items: ["PostgreSQL", "MongoDB", "MySQL", "MSSQL", "Database Migration & Optimization"],
  },
  {
    title: "DevOps & Infrastructure",
    items: [
      "Kubernetes (Production)",
      "Docker",
      "CI/CD (GitLab / GitHub Actions)",
      "ArgoCD (GitOps)",
      "Infrastructure as Code",
      "Self-Managed Cloud",
      "Prometheus & Grafana",
    ],
  },
  {
    title: "Cloud Platforms",
    items: ["AWS", "Azure", "On-Premise Infrastructure (Linux & Windows)"],
  },
  {
    title: "Fintech & Domain Expertise",
    items: [
      "Payment Systems",
      "Core Banking",
      "KYC / Identity Verification",
      "Transaction Processing",
      "Financial Compliance (CBN)",
      "Bill Payment Integration",
    ],
  },
  {
    title: "Real-Time & Performance",
    items: [
      "WebRTC",
      "WebSockets",
      "High-Throughput Systems",
      "Concurrency Patterns",
      "Performance Optimization",
    ],
  },
  {
    title: "Leadership & Practices",
    items: ["Technical Leadership", "Code Review & Mentoring"],
  },
];
