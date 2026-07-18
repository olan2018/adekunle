import khaimeLogo from "../assets/logos/khaime.svg";
import neptuneLogo from "../assets/logos/neptune.jpg";
import slocxLogo from "../assets/logos/slocx.png";
import sterlingLogo from "../assets/logos/sterling.png";

export interface Job {
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
  initials: string;
  logo?: string;
}

export const EXPERIENCE: Job[] = [
  {
    company: "SLOCX",
    location: "Aberdeen, United Kingdom",
    role: "Engineering Manager",
    period: "2022 — Present",
    initials: "SL",
    logo: slocxLogo,
    bullets: [
      "Led backend architecture and delivery for a multilingual online learning platform using Golang, designing RESTful APIs with Chi router following clean architecture principles and handling 50K+ daily API requests across five countries.",
      "Led the design and roll-out of an in-lesson class-tool (realtime whiteboard, tutor content library, vocabulary practice, live quizzes) turning Slocx from video call + booking into a full teaching workspace, increasing tutor session retention by 80% and reducing per-lesson drop-off by 80%.",
      "Integrated WayForPay end-to-end with idempotent settlement and HMAC-verified webhooks, cutting failed payment reconciliations by 45% and eliminating 100+ monthly manual finance postings.",
      "Executed an AWS s3 bucket → self-hosted MinIO migration of user-generated media via a resumable zero-downtime migrator, reducing third-party media spend by 10% MoM while retaining full data locality.",
      "Re-platformed the ecosystem onto self-hosted Kubernetes with Helm + ArgoCD GitOps, cutting deployment time from 10 to under 2 minutes and enabling deterministic cluster stand-up from a single sync.",
      "Scaled the tutor lifecycle system vetting, scheduling, attendance-driven splits, and payouts to onboard 600+ tutors and 1,000+ students across 6 languages, unlocking multi-region expansion.",
      "Established a supply-chain security program (full-history secret scanning, image vulnerability gates, credential rotation across 5 providers), reducing exposed-secret incidents to zero and blocking HIGH/CRITICAL vulnerabilities from reaching production.",
      "Rebuilt the admin operations surface paginated filtered users, CSV exports, tutor payout workflow, off-channel payment reconciliation reducing admin ticket resolution time by 60% and enabling finance ops without engineering intervention.",
      "Led a 9-engineer team through the transition from single-VM hosting to a GitOps-managed Kubernetes fleet, codifying hiring bar, dependency-addition policy, and cross-service design-review practice.",
    ],
  },
  {
    company: "Sterling Bank (HQ)",
    location: "Marina, Lagos, Nigeria",
    role: "Senior Backend Engineer",
    period: "2025 — 2026",
    initials: "SB",
    logo: sterlingLogo,
    bullets: [
      "Led backend development of KYC, identity verification, and payment workflows for regulated financial products, strengthening fraud prevention and ensuring full regulatory compliance.",
      "Designed and implemented a robust encryption layer for all API communications, enabling secure request/response handling and safeguarding financial transactions.",
      "Redesigned the card transaction service to enforce strict pre-transaction validations, eliminating critical loopholes and preventing significant financial losses.",
      "Spearheaded the migration of customers from Bankly (acquired by Sterling) to Gomoney, delivering a seamless transition and enabling users to effortlessly reclaim their accounts.",
      "Resolved legacy system issues and optimized performance, significantly improving application stability and reliability.",
      "Built internal admin, operations, and compliance tools that automated key workflows, reducing customer issue volume by approximately 80%.",
      "Integrated multiple external fintech vendors with failover and resiliency strategies, improving system availability and operational continuity.",
      "Implemented CBN-compliant address verification (OkHi), reducing onboarding risk and enhancing regulatory adherence.",
      "Collaborated closely with Compliance, Risk, Operations, and Support teams to resolve high-severity production issues and eliminate recurring defects.",
      "Led migration to a new KYC provider, significantly improving onboarding success rates and reducing related issues by ~80%."
    ],
  },
  {
    company: "Neptune Microfinance Bank",
    location: "Ikeja, Lagos, Nigeria",
    role: "Senior Backend / Lead Infrastructure Engineer",
    period: "2023 — 2025",
    initials: "NM",
    logo: neptuneLogo,
    bullets: [
      "Collaborated in the design and development of a microservices Core Banking Application (CBA) covering Authentication, Transactions, Loans, Investments, and Notifications, processing 10K+ daily transactions with PostgreSQL, MongoDB, and Redis.",
      "Architected a production API Gateway in Node.js exposing core banking services via gRPC and RESTful APIs with OAuth 2.0 authentication, rate limiting, and request validation — enabling secure integrations for 15+ external partners.",
      "Designed and implemented an E-Channels service in Golang facilitating secure communication between payment partners and core banking systems with mTLS authentication, webhook processing, and asynchronous message queuing.",
      "Built a high-throughput notification microservice in Golang processing 1,000+ daily alerts via Email, SMS, Push Notifications, and WebSockets with retry logic, dead letter queues, and a 99.8% delivery success rate.",
      "Led infrastructure migration to self-managed on-premise Kubernetes clusters implementing Infrastructure as Code with Terraform, CI/CD pipelines with GitLab CI/GitHub Actions, and monitoring with Prometheus/Grafana — saving $50K+ annually.",
      "Developed identity verification and bill-payment services in Golang integrating BVN, NIN, Interswitch, and Providus APIs with intelligent provider failover and circuit breaker patterns ensuring reliability during partner failures.",
      "Executed customer data migration from legacy banking systems using Golang with PostgreSQL schema optimization and comprehensive data validation, ensuring zero downtime.",
      "Architected a Web Banking platform backend in Golang for corporate customers with KYC compliance workflows, role-based access control, transaction processing, and financial product management serving 500+ corporate accounts.",
    ],
  },
   {
    company: "Khaime AI",
    location: "Texas, USA",
    role: "Team Lead (Backend)",
    period: "2021 — 2022",
    initials: "KA",
    logo: khaimeLogo,
    bullets: [
      "Redesigned data models: fixed major data modeling issues, restructured database schemas, and refactored tables for improved consistency and scalability.",
      "Led data transformation & migration: developed and executed large-scale data transformation scripts and migration processes, ensuring accurate data migration with full backups.",
      "Drove a codebase revamp: refactored a poorly structured backend codebase, introducing a clean, modular architecture optimized for scalability and maintainability.",
      "Built a payment scheduling feature: a recurring payment scheduling system enabling clients to automate payments for goods and services.",
      "Mentored and guided junior developers, promoting best practices in coding, architecture, and project workflow.",
      "Optimized high-traffic endpoints, reducing response times by over 60% and improving overall system performance.",
      "Collaborated with stakeholders in strategic planning meetings to align technical solutions with business objectives.",
      "Led a microservices migration: decomposed a monolithic backend into a scalable microservices architecture, enabling independent service deployment and scaling.",
    ],
  },
  {
    company: "Collab Cards",
    location: "United Kingdom",
    role: "Backend Engineer",
    period: "2019 — 2020",
    initials: "CC",
    bullets: [
      "Architected and collaborated in the development of a scalable Node.js backend for a social content platform (writers, poets, fiction), delivering core features including content publishing, likes, comments, and idea sharing on PostgreSQL, Docker, and AWS.",
      "Designed high-performance REST APIs using Express.js and clean architecture principles, supporting user management, bookings, and real-time chat services with consistent sub-100ms response times.",
      "Engineered a low-latency real-time messaging system using Socket.io, leveraging Node.js event-driven, non-blocking I/O and worker threads to efficiently handle high volumes of concurrent connections.",
      "Optimized PostgreSQL performance and implemented Redis caching strategies, significantly reducing latency and improving throughput under high concurrent, multi-region traffic.",
      "Integrated multiple third-party services (payments, analytics, email) and implemented CI/CD pipelines with GitLab and Docker, automating testing and cloud deployments for faster, reliable releases.",
      "Established centralized observability using structured logging (Winston/Pino), metrics, and alerting systems, improving system visibility and reducing incident response time.",
      "Built comprehensive automated test suites with Jest and Supertest, and collaborated cross-functionally with frontend, product, and QA teams to deliver secure, production-ready features."

    ],
  }
];
