// About-page content. Editorial and human, sourced from the reconciled timeline
// across both CVs and the LinkedIn export. No skills-grid theatre — capabilities
// are described as things done, and the full stack is inventoried honestly.

export const bio = [
  "I'm a software engineer in Islamabad, four years in, and my work lives in the middle of three things: a service that has to stay up, a cloud account that has to be reproducible, and a model doing something a plain API can't.",
  "That middle is where I'm most useful. Plenty of engineers write good backend code. Fewer are comfortable writing the cloud account underneath it as Terraform, and fewer still are wiring an LLM or a vision model into the same system and keeping it running. I sit at that intersection, and I've been deliberate about getting there.",
  "I like the unglamorous parts, because they're what actually breaks in production: queues instead of blocking calls, passwordless auth and real access control, caching that matches how the data gets read. I'd rather ship two things I can defend at 3 a.m. than ten I can't.",
];

export const approach = [
  {
    title: "Own the whole line",
    body: "The best bugs I've fixed were ones I could only see because I owned the layer above and below them. When a service can't reach another service, reading the Terraform, the security groups, and the application code as one system is the difference between a day lost and an hour.",
  },
  {
    title: "Move slow work off the request path",
    body: "When something gets slow, my first instinct isn't a bigger machine. It's a queue. Media checks, transcription, PDF work, generation — none of it needs to block the caller. The API stays fast because the heavy things happen somewhere the user isn't waiting.",
  },
  {
    title: "The demo is easy; production is the job",
    body: "Every domain I've worked in — insurance, cyber-risk, marketplaces, live events, a medical CV model — taught the same lesson. The version that works once is an afternoon. The version that survives flaky connections, real load, and the case you didn't think of is the actual work.",
  },
];

// A reconciled career timeline. LinkedIn treated as canonical for dates.
export const timeline = [
  {
    period: "Apr 2026 — now",
    role: "Software Engineer II",
    org: "Futurenostics",
    note: "Solo owner of TinyMightyNews: a 3-tier AWS VPC in Terraform, NestJS and Python/FastAPI services, and a voice-to-story AI pipeline (OpenAI Realtime, Whisper, GPT-4.1, LangChain).",
    tags: ["Terraform", "AWS", "NestJS", "FastAPI", "LangChain"],
  },
  {
    period: "May 2025 — Apr 2026",
    role: "Software Engineer I",
    org: "Futurenostics",
    note: "TrueClaim (AI insurance claims — RAG, a JSON-schema form engine, and a full sub-stack removed) and Casper (enterprise cyber-risk scoring across an ownership hierarchy on Azure).",
    tags: ["Azure OpenAI", "RAG", "React Native", "Microsoft Graph"],
  },
  {
    period: "Dec 2024 — May 2025",
    role: "Software Engineer Intern",
    org: "Futurenostics",
    note: "DialedN (a marketplace with a 35+ carrier shipping optimizer and decimal-precise money math) and BOLT POS (mobile point-of-sale with barcode, thermal printing, and payments).",
    tags: ["NestJS", "Stripe", "React Native", "PostgreSQL"],
  },
  {
    period: "Jan 2024 — Jan 2025",
    role: "Backend Engineer",
    org: "Clouditecture · remote",
    note: "Backend for an AI tool that designs cloud architecture. Split a Node monolith into eight microservices; multi-tenant isolation enforced at the query layer; bursty work on Lambda.",
    tags: ["Microservices", "AWS Lambda", "GraphQL", "Multi-tenant"],
  },
  {
    period: "Jun 2024 — Sep 2024",
    role: "ML / DL Fellow",
    org: "Bytewise Limited",
    note: "NLP and transformer embeddings, classical ML with scikit-learn, and a CNN that detects pneumonia from chest X-rays.",
    tags: ["Python", "CNNs", "scikit-learn", "NLP"],
  },
  {
    period: "Sep 2022 — now",
    role: "Independent Software Engineer",
    org: "Freelance / contract",
    note: "Full-cycle web and mobile products for international clients — Spatial (immersive 3D collaboration), Aloompa (festival-scale live-event apps), Teamly (remote-team SaaS), and Memento (payments).",
    tags: ["MERN", "Flutter", "WebSockets", "Stripe"],
  },
  {
    period: "Jun 2023 — Dec 2023",
    role: "Junior Software Engineer",
    org: "Mercurial Minds",
    note: "MERN systems for internal operations, plus a time-tracking automation (Google Apps Script + Clockify) that cut manual reporting by around 70%.",
    tags: ["MERN", "Express", "Automation"],
  },
];

// Full, grouped tech-stack inventory — the whole CV, de-duplicated and honest.
export const stack = [
  {
    area: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Dart", "SQL"],
  },
  {
    area: "Backend & APIs",
    items: [
      "Node.js", "NestJS", "Express.js", "FastAPI", "Ruby on Rails", "RedwoodJS", "MedusaJS",
      "REST", "GraphQL", "WebSockets", "SSE", "Webhooks", "gRPC-style RPC",
      "JWT", "OAuth 2.0", "RBAC", "Prisma", "Sequelize",
      "Microservices", "Event-driven architecture", "Background workers", "Cron jobs",
    ],
  },
  {
    area: "AI & RAG",
    items: [
      "OpenAI Realtime", "Whisper", "GPT-4.1 vision", "Azure OpenAI", "LangChain", "LangGraph",
      "RAG pipelines", "Embeddings", "pgvector", "HNSW", "AWS Rekognition",
      "LLM integrations", "Recommendation systems", "scikit-learn", "CNNs", "Transformers / NLP",
    ],
  },
  {
    area: "Cloud & DevOps",
    items: [
      "AWS", "ECS Fargate", "Lambda", "EC2", "S3", "RDS", "VPC", "SQS / SNS", "CloudMap",
      "Cognito", "ElastiCache", "Route 53", "ECR", "CloudFront", "API Gateway",
      "Terraform", "Docker", "Kubernetes", "Azure", "Key Vault",
      "GitHub Actions", "GitLab CI", "Nginx", "Linux", "CI/CD",
    ],
  },
  {
    area: "Data & caching",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "ElastiCache", "DynamoDB", "pgvector", "Decimal.js (money math)"],
  },
  {
    area: "Frontend & mobile",
    items: [
      "React", "Next.js", "Vue", "Nuxt", "Redux", "Context API", "Tailwind CSS",
      "React Native", "Expo", "Flutter", "Bloc", "Native Modules",
      "WCAG / accessibility", "Three.js", "Babylon.js",
    ],
  },
  {
    area: "Payments & integrations",
    items: ["Stripe", "Tyro", "PayPal", "Multi-carrier shipping APIs", "Twilio", "SendGrid", "Microsoft Graph", "FCM"],
  },
  {
    area: "Practices",
    items: ["Clean architecture", "System design", "Multi-tenant modeling", "Testing (Jest, Cypress)", "Structured logging", "Monitoring", "Code reviews", "Agile / Scrum"],
  },
];

// Engineering strengths — described as behaviors, not badges.
export const strengths = [
  {
    title: "Production ownership",
    body: "Comfortable taking an ambiguous product requirement from scoping through architecture, implementation, deployment, and the post-release debugging nobody volunteers for.",
  },
  {
    title: "Integration engineering",
    body: "REST, webhooks, auth flows, payment gateways, and third-party services — with the retries, idempotency, and payload normalization that real-world APIs demand.",
  },
  {
    title: "Reliability focus",
    body: "Caching, queues, background workers, structured logging, validation, and database tuning to keep backends stable when production load shows up.",
  },
  {
    title: "Remote execution",
    body: "Works cleanly with distributed teams and clients through clear writing, iterative delivery, pull requests, and honest technical tradeoffs.",
  },
];

export const now = [
  "Right now most of my attention is on TinyMightyNews — keeping the AWS account clean in Terraform and making the AI pipeline fast and boring in the good way.",
  "Outside client work I'm writing more about infrastructure and getting AI features to actually run and stay running. Some how-to, some opinions you're welcome to argue with.",
];

// Certifications and learning, from the record.
export const credentials = [
  "Introduction to Generative AI",
  "AI for Everyone",
  "Bytewise ML / DL Fellowship (2024)",
  "Dart & Flutter (Complete)",
  ".NET Full Stack Foundation",
  "BS Computer Science — Air University, Islamabad",
];
