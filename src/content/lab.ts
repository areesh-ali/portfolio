// Lab: smaller experiments, notes, and things built for their own sake.
// Honest and modest — this space exists to show how I think, not to pad a résumé.

export interface Experiment {
  title: string;
  kind: string;
  year: string;
  body: string;
  motif: "orbit" | "strata" | "current" | "lattice" | "signal" | "vessel" | "scan";
  status: "live" | "ongoing" | "shelved" | "note";
}

export const experiments: Experiment[] = [
  {
    title: "Terraform as a reading exercise",
    kind: "Note",
    year: "2026",
    status: "note",
    motif: "strata",
    body: "A running set of notes on writing cloud infrastructure so the next person — usually future me — can read the whole account top to bottom. The test I use: could someone delete a piece and bring it back without asking me anything?",
    },
  {
    title: "When the queue is the answer",
    kind: "Writing",
    year: "2026",
    status: "ongoing",
    motif: "current",
    body: "A short piece I keep expanding on moving slow work off the request path. Same idea across TMN, an e-commerce backend, and a claims platform: the API stays fast because the heavy work happens where nobody is waiting.",
  },
  {
    title: "Rekognition as a gate, not a feature",
    kind: "Experiment",
    year: "2026",
    status: "shelved",
    motif: "scan",
    body: "A small sandbox for using vision models as a compliance gate rather than a product surface. Shelved for now, but the pattern went straight into real media verification.",
  },
  {
    title: "A CNN that reads a lung",
    kind: "Model",
    year: "2024",
    status: "live",
    motif: "signal",
    body: "The pneumonia-detection model from my ML fellowship, kept around as a reference for how much data discipline beats architecture cleverness. It still teaches me more than most tutorials.",
  },
  {
    title: "This site",
    kind: "Build",
    year: "2026",
    status: "live",
    motif: "lattice",
    body: "Built with Next.js and hand-written CSS, no component library and no icon pack. Every illustration and icon here is custom SVG. It's a small argument that you can own the whole line on the front end too.",
  },
];
