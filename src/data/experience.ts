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
      "Architected a highly scalable Golang backend leveraging goroutines and channel-based concurrency patterns to handle high traffic volumes, real-time WebSocket connections for live chat, and WebRTC video streaming for interactive tutoring.",
      "Designed and built real-time learning features including live chat messaging, tutor video sessions, and lesson booking workflows using Golang with WebSocket implementation for low-latency communication and PostgreSQL for state management.",
      "Integrated WebRTC protocols in Golang for peer-to-peer video streaming, implementing signaling server logic and connection quality monitoring ensuring smooth live lesson delivery with sub-200ms latency.",
      "Implemented CI/CD pipelines with GitLab CI and Docker containerization, automating Golang application builds, integration testing, and deployments — reducing release cycles from days to hours.",
      "Introduced centralized logging with the ELK stack, custom Prometheus metrics for Golang applications, and Grafana dashboards, improving observability and reducing incident response time by 60%.",
      "Mentored 3 backend engineers on Golang best practices, conducted code and architecture reviews, and established backend engineering standards across security, performance, and scalability.",
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
      "Architected and developed Node.js-based KYC, identity verification, and payment processing systems integrating multiple partner APIs (BVN, NIN, Interswitch, Providus) with OAuth authentication, intelligent failover strategies, and comprehensive retry mechanisms achieving 99.9% uptime.",
      "Designed and executed secure, auditable customer data migration pipelines using Node.js for a bank acquisition, successfully onboarding 5,000+ customers with PostgreSQL database optimization, idempotent transaction handling, and zero data loss.",
      "Built production-grade fintech partner API integrations in Node.js implementing rate limiting, webhook processing, circuit breaker patterns, and automated failover logic to maintain system availability during third-party service disruptions.",
      "Owned incident response and root-cause analysis for critical payment systems, implementing permanent fixes using Node.js async concurrency patterns (Promise.all, worker threads, event-driven architecture) that improved system reliability by 40% and reduced transaction failure rates from 5% to 0.3%.",
      "Architected secure RBAC systems with Node.js and PostgreSQL for sensitive financial data, implementing audit logging and compliance controls meeting CBN regulatory requirements.",
      "Developed internal admin and operations tooling using Node.js REST APIs that automated customer support workflows, reducing manual intervention by 80% and improving operational efficiency.",
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
    company: "Collab Cards",
    location: "United Kingdom",
    role: "Backend Engineer",
    period: "2020 — 2021",
    initials: "CC",
    bullets: [
      "Architected and built a robust Node.js backend for a social media platform connecting writers, fiction enthusiasts, and poets, featuring content posting, likes, comments, and idea sharing using PostgreSQL, Docker, and AWS.",
      "Designed and implemented core features including real-time chat, live video lessons with tutors, and a lesson booking system to deliver an interactive learning experience using Node.js.",
      "Architected a highly scalable Node.js backend, leveraging its event-driven, non-blocking I/O and worker threads to handle high traffic and real-time interactions efficiently.",
      "Developed lightweight, high-performance REST APIs with Express.js for user management, bookings, and chat services, following clean architecture principles.",
      "Integrated Socket.io for low-latency, real-time communication and WebRTC for peer-to-peer video streaming, ensuring smooth live lesson experiences.",
      "Implemented CI/CD pipelines using GitLab for automated testing, containerization with Docker, and deployments to cloud environments for faster release cycles.",
      "Introduced observability practices with centralized logging (Winston/Pino), metrics, and alerting to monitor system health and improve incident response times.",
      "Optimized PostgreSQL query performance and Redis caching strategies to reduce latency and improve system performance across multiple regions.",
      "Mentored junior engineers, established Node.js backend development standards, and drove adoption of best practices in security, performance, and scalability.",
      "Developed comprehensive automated testing suites using Jest and Supertest to guarantee system reliability, maintainability, and performance at scale.",
    ],
  },
  {
    company: "Khaime AI",
    location: "Texas, USA",
    role: "Team Lead (Backend)",
    period: "2019 — 2020",
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
];
