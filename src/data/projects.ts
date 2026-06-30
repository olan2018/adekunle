import beastmoodLogo from "../assets/logos/beastmood.png";
import gomoneyLogo from "../assets/logos/gomoney.png";
import kreltixLogo from "../assets/logos/kreltix.png";
import neptuneLogo from "../assets/logos/neptune.jpg";
import nvaultLogo from "../assets/logos/nvault.png";
import slocxLogo from "../assets/logos/slocx.png";
import zeropayLogo from "../assets/logos/zeropay.png";

export interface Project {
  name: string;
  description: string;
  tags: string[];
  url?: string;
  initials: string;
  logo?: string;
}

export const PROJECTS: Project[] = [
  {
    name: "Kreltix",
    description:
      "Built and run an identity verification API platform offering face verification, passive and active liveness detection, and combined identity checks over a REST API with webhooks, an API-key/wallet billing model, and JS and Flutter SDKs for drop-in client integration.",
    tags: ["FastAPI", "Identity Verification", "Webhooks", "SDKs"],
    url: "https://kreltix.com",
    initials: "KX",
    logo: kreltixLogo,
  },
  {
    name: "Neptune eBusiness — Web Banking Platform",
    description:
      "Team Lead on Neptune Microfinance Bank's corporate web banking platform — a robust Golang-backed system handling transactions, loans, investments, bills payment, and utilities for corporate customers, with KYC compliance workflows and role-based access control serving 500+ corporate accounts.",
    tags: ["Golang", "Web Banking", "KYC", "Team Lead"],
    url: "https://ebusiness.neptunemfbank.com",
    initials: "NE",
    logo: neptuneLogo,
  },
  {
    name: "nVAULT",
    description:
      "Cutting-edge fintech app at Neptune Microfinance Bank revolutionizing traditional banking with an all-in-one digital platform for payments, savings, and investments. Played a key role in designing a streamlined digital onboarding process and optimizing savings and investment features to drive user engagement.",
    tags: ["Node.js", "PostgreSQL", "Fintech", "KYC"],
    url: "https://play.google.com/store/apps/details?id=com.neptune.nvault&hl=en",
    initials: "NV",
    logo: nvaultLogo,
  },
  {
    name: "Slocx",
    description:
      "Led a team of 9 building an online language-learning platform spanning five countries, with live chat, live video lessons with tutors, and lesson booking. Backend built in Golang with the Chi router for lightweight, fast REST APIs; WebSockets power real-time messaging and lessons, while WebRTC enables peer-to-peer video on the frontend.",
    tags: ["Golang", "Chi", "WebSockets", "WebRTC"],
    url: "https://slocx.com",
    initials: "SL",
    logo: slocxLogo,
  },
  {
    name: "Gomoney",
    description:
      "Modern fintech app offering seamless bill payments, peer-to-peer transfers, virtual cards, budgeting tools, transaction categorization, spending analytics, and in-app customer support.",
    tags: ["Fintech", "Payments", "Mobile"],
    url: "https://play.google.com/store/apps/details?id=com.global.gomoney",
    initials: "GM",
    logo: gomoneyLogo,
  },
  {
    name: "QuizMeApp",
    description:
      "Rewards-based gaming app where users earn by answering questions, gaining points, and competing on a leaderboard. Features cash withdrawals, point redemption for airtime and data, and real-time performance tracking.",
    tags: ["Node.js", "Real-time", "Gamification"],
    url: "https://play.google.com/store/apps/details?id=com.quizme.quizme",
    initials: "QM",
  },
  {
    name: "Zero Pay",
    description:
      "Real estate application with flexible installment payments, secure wallet integration, and automated direct debit mandates. Also supports utility payments (airtime, data, electricity) for a seamless property-purchase and financial-management experience.",
    tags: ["Fintech", "Payments", "PropTech"],
    url: "https://play.google.com/store/apps/details?id=com.myzeropayy.app",
    initials: "ZP",
    logo: zeropayLogo,
  },
  {
    name: "Beast Mood",
    description:
      "Anime streaming platform offering real-time video streaming, user comments, and likes. Built with Node.js and Express for server-side logic, MongoDB for flexible data storage, and hosted on AWS.",
    tags: ["Node.js", "Express", "MongoDB", "AWS"],
    url: "https://beastmood-anime.vercel.app",
    initials: "BM",
    logo: beastmoodLogo,
  },
];
