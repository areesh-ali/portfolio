// Site-wide identity and configuration. Facts here are reconciled from the
// brand data pack (LinkedIn treated as canonical). Nothing invented.

export const site = {
  name: "Areesh Ali Abdullah",
  shortName: "Areesh Ali",
  initials: "AA",
  role: "Software Engineer",
  // The positioning line — the intersection is the brand.
  tagline: "I build backends, the cloud they run on, and the AI on top.",
  location: "Islamabad, Pakistan",
  timezone: "UTC+5",
  availability: "Open to remote roles and select freelance",
  email: "areesh.ali.abd@gmail.com",
  url: "https://areesh-portfolio.netlify.app",
  description:
    "Software engineer working at the intersection of AI, infrastructure, and cloud. I own systems end to end — Terraform and AWS underneath, backend services in the middle, and LLM or vision models on top.",
  socials: [
    { label: "LinkedIn", handle: "in/areesh-ali", href: "https://linkedin.com/in/areesh-ali" },
    { label: "GitHub", handle: "areesh-ali", href: "https://github.com/areesh-ali" },
    { label: "Email", handle: "areesh.ali.abd@gmail.com", href: "mailto:areesh.ali.abd@gmail.com" },
  ],
} as const;

export const nav = [
  { label: "Index", href: "/", short: "00" },
  { label: "Work", href: "/work", short: "01" },
  { label: "About", href: "/about", short: "02" },
  { label: "Lab", href: "/lab", short: "03" },
  { label: "Contact", href: "/contact", short: "04" },
] as const;
