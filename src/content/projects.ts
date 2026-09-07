import type { Project } from "@/lib/types";

// Every project here is real, reconciled across both CVs and the LinkedIn export.
// Live products link out; client/NDA platforms are marked privateWork. Covers and
// logos were captured from the live sites. Copy is first-person, specific, and
// passes the human-voice / anti-slop guardrail.

export const projects: Project[] = [
  {
    slug: "tmn",
    index: "01",
    title: "TinyMightyNews",
    kind: "AI platform",
    summary:
      "AI-assisted citizen journalism: reporters run real-time voice interviews in the browser, and a pipeline turns the audio into structured, verified articles.",
    role: "Software Engineer II — solo full-stack",
    context: "Futurenostics",
    year: "2026",
    order: 1,
    featured: true,
    pillars: ["AI", "Infrastructure", "Cloud"],
    disciplines: ["Cloud architecture", "Backend", "AI services", "Mobile"],
    tech: ["Terraform", "AWS", "NestJS", "FastAPI", "OpenAI Realtime", "LangChain"],
    motif: "orbit",
    tone: "clay",
    privateWork: true,
    outcomes: [
      { value: "1 engineer", label: "architecture → infra → backend → AI → mobile" },
      { value: "3-tier VPC", label: "AWS provisioned entirely in Terraform" },
      { value: "Realtime → article", label: "voice interview to structured story" },
    ],
    blocks: [
      {
        kind: "prose",
        body: [
          "TinyMightyNews (TMN) is the project where the three things I care about sit in one place: a service that has to stay up, a cloud account that has to be reproducible, and models doing work a plain API can't. I'm the only engineer on it — architecture, the AWS account, the backend, the AI pipeline, and the mobile client are all mine.",
          "A reporter opens the browser and runs a live voice interview. By the time they're done, the system has transcribed it, checked the media, and drafted a structured article ready for editorial review. Everything between those two moments is the interesting part.",
        ],
      },
      {
        kind: "diagram",
        variant: "layers",
        caption: "Three layers, one owner: the AWS account written as Terraform, NestJS and Python services on top, and the model pipeline on top of those.",
      },
      {
        kind: "prose",
        heading: "The voice-to-story pipeline",
        body: [
          "The interview runs over WebRTC straight into OpenAI's Realtime API, so the conversation is genuinely live rather than a record-then-upload flow. When it ends, the audio doesn't block anyone: a message goes on SQS and an async FastAPI worker picks it up, transcribes with Whisper, and drafts the article with GPT-4.1 and LangChain — vision included, so images in the source material are read, not ignored.",
          "This is the AI Audio Booth: autonomous capture, transcription, and retrieval-based story generation from the source. The reporter gets a draft; a human still decides what runs.",
        ],
      },
      {
        kind: "diagram",
        variant: "event-mesh",
        caption: "The request returns fast; the heavy transcription and generation happen on an SQS-driven worker, so a slow model never takes the API down with it.",
      },
      {
        kind: "prose",
        heading: "The cloud, written down",
        body: [
          "The whole environment is a 3-tier AWS VPC provisioned in Terraform — ECS, ALB, RDS, S3, SQS, the networking, all of it as code. I can read the entire system in one repository and bring any piece back the same way every time. Push notifications go out through FCM, live updates over SSE and WebSockets, and CI/CD runs on the same account it deploys to.",
        ],
      },
      {
        kind: "stack",
        groups: [
          { label: "Cloud / IaC", items: ["Terraform", "AWS ECS", "ALB", "VPC (3-tier)", "RDS", "S3", "SQS", "Docker"] },
          { label: "Backend", items: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Redis", "WebSockets", "SSE"] },
          { label: "AI / async", items: ["Python", "FastAPI", "OpenAI Realtime", "Whisper", "GPT-4.1 (vision)", "LangChain"] },
          { label: "Mobile", items: ["React Native", "FCM push"] },
        ],
      },
      {
        kind: "aside",
        label: "What actually broke",
        body: [
          "I lost most of a day sure that service discovery was broken because one service couldn't reach another. It wasn't the discovery layer. It was a security-group rule I'd written myself that quietly denied the traffic. The infra was fine; my own Terraform had the bug. That's the tax on owning the whole line, and I'll take it over not being able to see the whole line.",
        ],
      },
    ],
  },

  {
    slug: "trueclaim",
    index: "02",
    title: "TrueClaim AI",
    kind: "Insurance platform",
    summary:
      "AI-powered vehicle damage estimation and insurance-claims automation, with a mobile app shipped to both stores and a form engine that turns LLM Q&A into guided flows.",
    role: "Full-stack / AI Engineer",
    context: "Futurenostics",
    year: "2025",
    order: 2,
    featured: true,
    pillars: ["AI", "Infrastructure"],
    disciplines: ["Backend", "AI / RAG", "Mobile", "Real-time"],
    tech: ["NestJS", "React Native", "FastAPI", "Azure OpenAI", "RAG", "PostgreSQL"],
    motif: "signal",
    tone: "sage",
    liveUrl: "https://trueclaim.ai",
    cover: "/assets/projects/trueclaim/cover.png",
    links: [{ label: "trueclaim.ai", href: "https://trueclaim.ai", kind: "live" }],
    outcomes: [
      { value: "−1 sub-stack", label: "removed a Strapi CMS + iframe layer" },
      { value: "iOS + Android", label: "shipped to App Store and Google Play" },
      { value: "Schema-driven", label: "LLM Q&A rendered as guided forms" },
    ],
    blocks: [
      {
        kind: "prose",
        body: [
          "An insurance claim is a conversation between people who don't trust each other yet — the customer, the garage, the adjuster — plus a lot of photos of a damaged car. TrueClaim runs that conversation and automates the parts that don't need a human to click through them.",
          "I worked across the backend, the AI, and the mobile app. Two things I'm proud of here are structural, not flashy.",
        ],
      },
      {
        kind: "prose",
        heading: "Deleting a whole sub-stack",
        body: [
          "The customer app was built on a Strapi CMS behind an iframe layer. I re-architected it to talk natively to the core NestJS platform and removed the CMS and the iframe entirely. That took a full sub-stack out of the deploy path — fewer moving parts to fail, one less thing to keep in sync, a faster app.",
        ],
      },
      {
        kind: "prose",
        heading: "Forms instead of chat",
        body: [
          "LLMs love to answer in prose. Insurance intake needs structure. I built a JSON-schema-driven form renderer that turns LLM question-and-answer into interactive guided flows, so claimants fill out something that behaves like a real form rather than a chat window they have to interpret. Behind it: RAG and Azure OpenAI over claim documents, real-time chat, and SQL that I re-indexed and rewrote to keep high-cardinality search fast.",
        ],
      },
      {
        kind: "diagram",
        variant: "request-path",
        caption: "Real-time chat and image sharing move over WebSockets between the mobile app and the support side, with Redis holding the live state.",
      },
      {
        kind: "stack",
        groups: [
          { label: "Backend", items: ["NestJS", "TypeScript", "PostgreSQL", "Redis"] },
          { label: "AI", items: ["Python", "FastAPI", "Azure OpenAI", "RAG", "Embeddings"] },
          { label: "Clients", items: ["React", "React Native", "Docker", "CI/CD", "AWS"] },
        ],
      },
    ],
  },

  {
    slug: "dialedn",
    index: "03",
    title: "DialedN",
    kind: "Marketplace",
    summary:
      "A multi-vendor fly-fishing marketplace where the interesting engineering was a shipping optimizer over 35+ carriers and getting the money math exactly right.",
    role: "Full-stack Developer",
    context: "Futurenostics",
    year: "2025",
    order: 3,
    featured: true,
    pillars: ["Infrastructure", "AI"],
    disciplines: ["Backend", "Payments", "Marketplace"],
    tech: ["NestJS", "React", "PostgreSQL", "Stripe", "Shipping APIs", "RAG"],
    motif: "current",
    tone: "slate",
    liveUrl: "https://dialedn.com",
    cover: "/assets/projects/dialedn/cover.png",
    logo: "/assets/projects/dialedn/logo.png",
    links: [{ label: "dialedn.com", href: "https://dialedn.com", kind: "live" }],
    outcomes: [
      { value: "35+ carriers", label: "fan-out to pick the cheapest ship option" },
      { value: "Decimal money", label: "arbitrary-precision, no float rounding" },
      { value: "Multi-vendor", label: "retailers run their own storefronts" },
    ],
    blocks: [
      {
        kind: "prose",
        body: [
          "DialedN is a marketplace built by anglers, for anglers — retailers set up their own storefronts alongside bookings and content. Two problems on it were genuinely hard, and neither is the kind of thing a demo ever shows you.",
        ],
      },
      {
        kind: "prose",
        heading: "Cheapest-box routing across 35+ carriers",
        body: [
          "Every order has to be shipped, and the cheapest way to ship it depends on box size, weight, distance, and whether a given carrier prices by fixed rate or by weight. I built a shipping-optimization service that fans out to more than 35 carrier APIs and picks the cheapest valid option per package. It's a small system-design problem hiding inside a checkout button.",
        ],
      },
      {
        kind: "diagram",
        variant: "pipeline",
        caption: "A checkout fans out to carrier APIs in parallel, normalizes the quotes, and returns the cheapest valid option per package.",
      },
      {
        kind: "prose",
        heading: "Money is not a float",
        body: [
          "There was a class of financial bugs coming from doing money math on native floating-point numbers — the kind of rounding error that leaves a balance a cent off and a customer annoyed. I moved the money math to arbitrary-precision decimals and added guard and reconciliation checks around the payment and refund flows so balances can't get stuck. Stripe for payments, plus RAG-based search so people can actually find gear.",
        ],
      },
      {
        kind: "stack",
        groups: [
          { label: "Backend", items: ["Node.js", "NestJS", "TypeScript", "PostgreSQL", "Redis", "Decimal.js"] },
          { label: "Commerce", items: ["Stripe", "Multi-carrier shipping APIs", "reconciliation"] },
          { label: "Search / infra", items: ["RAG", "Embeddings", "AWS", "Docker"] },
        ],
      },
    ],
  },

  {
    slug: "clouditecture",
    index: "04",
    title: "Clouditecture",
    kind: "SaaS backend",
    summary:
      "Backend for an AI tool that designs cloud architecture visually — including breaking a Node monolith into eight independently deployable microservices.",
    role: "Backend Engineer",
    context: "Clouditecture · remote",
    year: "2024",
    order: 4,
    featured: true,
    pillars: ["Cloud", "Infrastructure"],
    disciplines: ["Backend", "Microservices", "Multi-tenant"],
    tech: ["NestJS", "PostgreSQL", "Redis", "AWS Lambda", "GraphQL", "Docker"],
    motif: "strata",
    tone: "clay",
    privateWork: true,
    outcomes: [
      { value: "8 services", label: "one monolith split by domain boundary" },
      { value: "Multi-tenant", label: "isolation enforced at the query layer" },
      { value: "Lambda + ECS", label: "bursty work goes serverless" },
    ],
    blocks: [
      {
        kind: "prose",
        body: [
          "Clouditecture is a visual tool for planning cloud architecture — you draw the system you want and it helps you reason about it. I built the backend, which means I spent a year building cloud infrastructure for a product whose entire subject is cloud infrastructure. That recursion taught me more about the domain than any course could.",
        ],
      },
      {
        kind: "prose",
        heading: "One monolith into eight services",
        body: [
          "The platform started as a Node.js monolith. I drove its migration into eight NestJS microservices — IAM, Inventory, Order, Payment, Notification, AI, Recommendation, and Profanity — split along real domain boundaries so each one deploys and fails on its own. The goal was never microservices for their own sake; it was fault isolation and independent deploys where the domains actually pulled apart.",
        ],
      },
      {
        kind: "diagram",
        variant: "pipeline",
        caption: "REST and GraphQL on NestJS, state in PostgreSQL and Redis, and bursty background work offloaded to Lambda.",
      },
      {
        kind: "prose",
        heading: "Multi-tenant, enforced low",
        body: [
          "A planning tool is worthless if one company's architecture leaks into another's. I implemented RBAC and tenant-aware isolation enforced at the query layer, so a tenant boundary is a property of how the data is read, not a filter someone might forget to add. REST, GraphQL, and WebSocket services back real-time collaboration — shared workspaces, live presence, in-app notifications — across customer workspaces.",
        ],
      },
      {
        kind: "stack",
        groups: [
          { label: "Backend", items: ["NestJS", "Node.js", "TypeScript", "PostgreSQL", "Redis"] },
          { label: "APIs", items: ["REST", "GraphQL", "WebSockets", "event-driven messaging"] },
          { label: "Cloud", items: ["AWS Lambda", "ECS", "EC2", "Docker"] },
        ],
      },
    ],
  },

  {
    slug: "casper",
    index: "05",
    title: "Casper",
    kind: "Enterprise / security",
    summary:
      "An enterprise cyber-risk platform that scores security posture across parent, child, and portfolio companies — where the model has to match a real org chart.",
    role: "Software Engineer I",
    context: "Futurenostics",
    year: "2025",
    order: 5,
    featured: true,
    pillars: ["Infrastructure"],
    disciplines: ["Backend", "Access control", "Data modeling"],
    tech: ["Node.js", "Express", "PostgreSQL", "Microsoft Graph", "Azure"],
    motif: "lattice",
    tone: "slate",
    privateWork: true,
    outcomes: [
      { value: "3 tiers", label: "parent → child → portfolio RBAC" },
      { value: "Rolls up", label: "risk aggregates up the ownership tree" },
      { value: "MS Graph", label: "evidence prefilled from tenant data" },
    ],
    blocks: [
      {
        kind: "prose",
        body: [
          "Casper answers one hard question for an enterprise: how exposed are we, and how exposed is everyone we're financially attached to? A holding company cares about its own security posture, the companies it owns, and the companies those companies own. That structure is the whole problem.",
        ],
      },
      {
        kind: "diagram",
        variant: "hierarchy",
        caption: "Access and scoring roll up the ownership tree: a portfolio company's risk is visible to its parent, never sideways to its siblings.",
      },
      {
        kind: "prose",
        heading: "RBAC that matches an org chart",
        body: [
          "The real engineering is access control across parent, child, and portfolio companies. Someone at the top sees down through their holdings; someone at a portfolio company sees only their own posture. Getting that right means the permission model follows the ownership graph instead of being a flat list of roles. On top sits multi-level scoring: questionnaires, evidence uploads, and a risk score that aggregates upward so a parent gets a real read on the whole tree.",
        ],
      },
      {
        kind: "prose",
        heading: "Less busywork",
        body: [
          "Security questionnaires are tedious, and tedious means half-finished. I wired in Microsoft Graph to prefill what the tenant already knows about itself, so people answer only the questions a human actually has to. CI/CD and secrets ran on Azure and Key Vault.",
        ],
      },
      {
        kind: "stack",
        groups: [
          { label: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Sequelize", "Swagger"] },
          { label: "Frontend", items: ["React.js"] },
          { label: "Cloud / integrations", items: ["Azure", "Key Vault", "Microsoft Graph API", "CI/CD"] },
        ],
      },
    ],
  },

  {
    slug: "spatial-io",
    index: "06",
    title: "Spatial",
    kind: "Immersive 3D",
    summary:
      "Real-time collaboration features for immersive 3D worlds used by major brands — the backend and WebSocket layer behind shared virtual spaces.",
    role: "Full-stack contributor",
    context: "Contract",
    year: "2024",
    order: 6,
    featured: false,
    pillars: ["Infrastructure"],
    disciplines: ["Real-time", "Backend", "3D / web"],
    tech: ["Node.js", "WebSockets", "Three.js", "Babylon.js", "GraphQL", "AWS"],
    motif: "orbit",
    tone: "sage",
    liveUrl: "https://spatial.io",
    cover: "/assets/projects/spatial-io/cover.png",
    logo: "/assets/projects/spatial-io/logo.png",
    links: [{ label: "spatial.io", href: "https://spatial.io", kind: "live" }],
    outcomes: [
      { value: "Real time", label: "shared presence in 3D over WebSockets" },
      { value: "3D web", label: "Three.js and Babylon.js clients" },
    ],
    blocks: [
      {
        kind: "prose",
        body: [
          "Spatial builds immersive 3D worlds for some of the biggest brands around. I contributed to the real-time collaboration features — the parts that let people share a virtual space and see each other move through it in real time, backed by WebSocket communication and AWS-hosted services.",
          "A 3D room full of people is unforgiving about latency and state. The work here was keeping shared presence consistent across clients without the whole thing feeling laggy, across a stack spanning Three.js and Babylon.js on the front and Node services behind them.",
        ],
      },
      {
        kind: "stack",
        groups: [
          { label: "Real-time / backend", items: ["Node.js", "WebSockets", "REST", "GraphQL", "PostgreSQL", "MongoDB"] },
          { label: "3D web", items: ["Three.js", "Babylon.js", "React", "Redux"] },
          { label: "Cloud", items: ["AWS", "Kubernetes", "Docker", "GitHub Actions"] },
        ],
      },
    ],
  },

  {
    slug: "aloompa",
    index: "07",
    title: "Aloompa",
    kind: "Live-events mobile",
    summary:
      "White-labeled mobile apps for festival-scale live events — schedules, GPS venue maps, pre-orders, and AI features over the event data.",
    role: "Full-stack Developer",
    context: "Contract",
    year: "2024",
    order: 7,
    featured: false,
    pillars: ["AI", "Infrastructure"],
    disciplines: ["Mobile", "Backend", "AI features"],
    tech: ["Flutter", "Dart", "Node.js", "PostgreSQL", "LLM", "Embeddings"],
    motif: "signal",
    tone: "clay",
    liveUrl: "https://aloompa.com",
    cover: "/assets/projects/aloompa/cover.png",
    logo: "/assets/projects/aloompa/logo.png",
    links: [{ label: "aloompa.com", href: "https://aloompa.com", kind: "live" }],
    outcomes: [
      { value: "Festival scale", label: "apps for the largest live events" },
      { value: "GPS + schedule", label: "maps, agendas, pre-order, push" },
      { value: "AI over events", label: "recommendations and NL schedule queries" },
    ],
    blocks: [
      {
        kind: "prose",
        body: [
          "Aloompa (now WMT Digital) makes the official mobile apps for festival-scale live events — the kind of crowd where a schedule glitch is a real problem. I built Flutter mobile features and companion web-platform pieces: personal schedules, GPS venue maps, pre-order flows, and push messaging, on Node.js services on AWS.",
        ],
      },
      {
        kind: "prose",
        heading: "AI over the event graph",
        body: [
          "On top of the event data I worked on attendee-facing AI: embedding-based recommendations that suggest attractions from what someone likes, and LLM-powered natural-language queries so a person can just ask the schedule a question instead of scrolling it. Small, useful, and grounded in real data rather than a chatbot bolted on the side.",
        ],
      },
      {
        kind: "stack",
        groups: [
          { label: "Mobile", items: ["Flutter", "Dart", "Push notifications", "Deep linking"] },
          { label: "Backend", items: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "AWS"] },
          { label: "AI", items: ["Embeddings", "LLM integrations", "recommendations"] },
        ],
      },
    ],
  },

  {
    slug: "teamly",
    index: "08",
    title: "Teamly",
    kind: "Collaboration SaaS",
    summary:
      "Remote-team management software — real-time collaboration, RBAC, and multi-tenant data isolation across a React and Node stack.",
    role: "Full-stack Developer",
    context: "Contract",
    year: "2023",
    order: 8,
    featured: false,
    pillars: ["Infrastructure"],
    disciplines: ["Backend", "Real-time", "Multi-tenant"],
    tech: ["React", "Node.js", "GraphQL", "WebSockets", "MongoDB", "AWS"],
    motif: "lattice",
    tone: "ink",
    liveUrl: "https://teamly.com",
    cover: "/assets/projects/teamly/cover.png",
    logo: "/assets/projects/teamly/logo.png",
    links: [{ label: "teamly.com", href: "https://teamly.com", kind: "live" }],
    outcomes: [
      { value: "Multi-tenant", label: "isolated data per organization" },
      { value: "Real time", label: "chat and live updates over WebSockets" },
    ],
    blocks: [
      {
        kind: "prose",
        body: [
          "Teamly is collaboration software for distributed teams — chat, time tracking, task management, and screen capture in one place. I built RBAC and multi-tenant data-isolation flows, real-time collaboration over WebSockets, and the REST and GraphQL APIs backing shared workspaces, across a React frontend and a Node backend on AWS.",
          "The recurring theme in this kind of product is that isolation and permissions are the product, even though nobody sees them. Get the tenant boundaries wrong and every feature on top is a liability.",
        ],
      },
      {
        kind: "stack",
        groups: [
          { label: "Backend", items: ["Node.js", "Express", "MongoDB", "REST", "GraphQL", "WebSockets", "RBAC"] },
          { label: "Frontend", items: ["React.js", "Redux"] },
          { label: "Cloud", items: ["AWS S3", "EC2", "CloudFront", "Docker", "CI/CD"] },
        ],
      },
    ],
  },

  {
    slug: "memento-payments",
    index: "09",
    title: "Memento Payments",
    kind: "Payments",
    summary:
      "Secure payment workflows — gateway integrations, transaction and webhook processing, and notification services behind a GraphQL API.",
    role: "Developer",
    context: "Contract",
    year: "2023",
    order: 9,
    featured: false,
    pillars: ["Infrastructure"],
    disciplines: ["Backend", "Payments", "Integrations"],
    tech: ["Node.js", "GraphQL", "Prisma", "Stripe", "PayPal", "AWS"],
    motif: "vessel",
    tone: "sage",
    privateWork: true,
    outcomes: [
      { value: "Gateways", label: "Stripe and PayPal, with webhooks" },
      { value: "Idempotent", label: "transaction and refund handling" },
    ],
    blocks: [
      {
        kind: "prose",
        body: [
          "Memento is a payments product, which is a polite way of saying every edge case matters and none of them are yours to shrug off. I built payment workflows across gateway integrations, transaction flows, webhook processing, and notification services, behind a GraphQL API on a Prisma and PostgreSQL data layer.",
          "Payments teach you to respect the boring: retries that don't double-charge, webhook handlers that survive being delivered twice, and configuration kept well away from the code. Stripe and PayPal for the money, Twilio and SendGrid for the messages that go with it.",
        ],
      },
      {
        kind: "stack",
        groups: [
          { label: "Backend", items: ["Node.js", "GraphQL", "Prisma", "PostgreSQL"] },
          { label: "Payments / comms", items: ["Stripe", "PayPal", "Twilio", "SendGrid"] },
          { label: "Cloud", items: ["AWS ECS", "Lambda", "API Gateway", "RDS", "SES", "Docker", "GitLab CI"] },
        ],
      },
    ],
  },

  {
    slug: "bolt-pos",
    index: "10",
    title: "BOLT POS",
    kind: "Mobile / hardware",
    summary:
      "A mobile-first point-of-sale app with barcode scanning, thermal receipt printing, and card payments through Stripe and Tyro.",
    role: "Software Engineer Intern",
    context: "Futurenostics",
    year: "2025",
    order: 10,
    featured: false,
    pillars: ["Infrastructure"],
    disciplines: ["Mobile", "Payments", "Hardware"],
    tech: ["React Native", "Expo", "RedwoodJS", "PostgreSQL", "Stripe", "Tyro"],
    motif: "scan",
    tone: "slate",
    privateWork: true,
    outcomes: [
      { value: "Hardware", label: "thermal printer + barcode scanning" },
      { value: "2 gateways", label: "Stripe and Tyro (AU) payments" },
      { value: "3 roles", label: "cashier, manager, admin RBAC" },
    ],
    blocks: [
      {
        kind: "prose",
        body: [
          "A point-of-sale app is where software meets a physical counter — a scanner, a card reader, a printer spitting out a receipt. BOLT POS is mobile-first, and a lot of the work was the unglamorous business of making React Native talk to hardware that doesn't care about your abstractions.",
        ],
      },
      {
        kind: "list",
        heading: "The physical layer",
        items: [
          "Barcode scanning to pull a product into a sale.",
          "Thermal printer integration for on-the-spot receipts, through native modules.",
          "Card payments on two gateways — Stripe, and Tyro for the Australian market.",
          "RBAC for cashier, manager, and admin, because a POS is also a trust boundary.",
        ],
      },
      {
        kind: "prose",
        heading: "Shipping to real devices",
        body: [
          "The backend was RedwoodJS on PostgreSQL. The part that teaches humility is the release path: Xcode, TestFlight, and the native-module debugging that comes with touching printers and payment terminals. A build that runs in the simulator and a build that prints a receipt on a specific thermal printer are two different achievements.",
        ],
      },
      {
        kind: "stack",
        groups: [
          { label: "Mobile", items: ["React Native", "Expo", "Native Modules", "Xcode", "TestFlight"] },
          { label: "Backend", items: ["RedwoodJS", "PostgreSQL", "Docker"] },
          { label: "Payments", items: ["Stripe", "Tyro Payments"] },
        ],
      },
    ],
  },

  {
    slug: "pneumonia-cnn",
    index: "11",
    title: "Reading Chest X-rays",
    kind: "Machine learning",
    summary:
      "My first computer-vision model of consequence — a CNN that detects pneumonia from chest X-rays, built during an ML fellowship.",
    role: "ML / DL Fellow",
    context: "Bytewise Limited",
    year: "2024",
    order: 11,
    featured: false,
    pillars: ["AI"],
    disciplines: ["Machine learning", "Computer vision"],
    tech: ["Python", "scikit-learn", "CNNs", "NLP / transformers"],
    motif: "scan",
    tone: "clay",
    privateWork: false,
    outcomes: [
      { value: "CNN", label: "pneumonia detection from X-rays" },
      { value: "Full loop", label: "clean → train → validate → tune" },
      { value: "Fellowship", label: "Bytewise ML / DL, 2024" },
    ],
    blocks: [
      {
        kind: "prose",
        body: [
          "Before I was shipping LLM services in production, I was learning what a model actually is. During the Bytewise ML fellowship I built a convolutional neural network that reads a chest X-ray and calls whether there's pneumonia. It's the project that made the rest of my AI work possible, because it's where the ideas stopped being abstract.",
        ],
      },
      {
        kind: "prose",
        heading: "What actually mattered",
        body: [
          "The model architecture was the part I expected to be hard. It wasn't the part that decided the outcome. Data augmentation, an honest validation split, and patient tuning did more for accuracy than any clever layer. That lesson — that data discipline outweighs model cleverness — is the one I carried straight into production AI work.",
        ],
      },
      {
        kind: "list",
        heading: "The rest of the fellowship",
        items: [
          "Data cleaning and exploratory analysis on real datasets.",
          "Classification with scikit-learn and hand-built feature engineering.",
          "Transformer embeddings and NLP fundamentals.",
          "The CNN, from augmentation through validation to tuning.",
        ],
      },
      {
        kind: "quote",
        body: "The demo is easy. Production is the job. I learned that first on a model that had to be right about a lung.",
      },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const allProjects = [...projects].sort((a, b) => a.order - b.order);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function projectNeighbors(slug: string) {
  const sorted = allProjects;
  const i = sorted.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  const prev = i > 0 ? sorted[i - 1] : sorted[sorted.length - 1];
  const next = i < sorted.length - 1 ? sorted[i + 1] : sorted[0];
  return { prev, next };
}
