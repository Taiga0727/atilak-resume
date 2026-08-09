import type { Profile } from "./types";

export const profile: Profile = {
  identity: {
    name: "Atilak Modetad",
    tagline: "Computer Vision · 3D Geometry · Applied Machine Learning",
    summary:
      "Applied Computer Science student at KMUTT working across computer vision, 3D point-cloud geometry, and applied ML. First-authored a knowledge-distillation method presented at an international conference; currently designs and builds — largely solo — a multi-view rendering and consensus pipeline for automated heritage-site damage detection.",
  },

  contact: {
    email: "atilak.work@gmail.com",
    github: "github.com/Taiga0727",
    githubUrl: "https://github.com/Taiga0727",
    phone: "094 054 8091",
    location: "Bangkok, Thailand",
  },

  publication: {
    kind: "publication",
    slug: "knowledge-distillation-wound-classification",
    title:
      "Knowledge Distillation Using Entropy-Guided Dynamic Parameter Transfer for Wound Image Classification",
    org: "1st author of 6 · ICCI 2025, International Conference on Cybernetics and Innovations · Pattaya, Thailand",
    dateLabel: "Apr 2025",
    homeProofLine:
      "95.22% accuracy · 42.7 MB (−49%) · 2.7 ms (−36%) · +4.66 pts vs. baseline KD",
    homeBullets: [
      "Designed EGATS and EGAAS — entropy-guided adaptive scaling for a knowledge-distillation temperature and loss-balance weight — plus a contrastive feature-alignment term, to compress a ResNet-34 wound classifier into a ResNet-18 student without the usual accuracy trade-off.",
    ],
    linked: true,
    detail: {
      stats: [
        { label: "Accuracy", value: "95.22%", accent: true },
        { label: "Model size", value: "42.7 MB (−49%)" },
        { label: "Inference", value: "2.7 ms (−36%)" },
        { label: "vs. baseline KD", value: "+4.66 pts", accent: true },
      ],
      sections: [
        {
          heading: "The problem",
          paragraphs: [
            "Standard knowledge distillation compresses a large teacher model into a smaller student using a fixed temperature (T) and loss-balance weight (α) for every training sample. But not every sample is equally ambiguous — an easy, confidently-classified wound image and a genuinely hard, borderline one carry very different amounts of useful signal in the teacher's soft labels. Using one fixed T and α for both wastes the easy samples and under-uses the hard ones.",
          ],
        },
        {
          heading: "EGATS — Entropy-Guided Adaptive Temperature Scaling",
          paragraphs: [
            "Instead of a fixed temperature, EGATS scales it per sample based on the teacher's own prediction entropy: T = clamp(1.0 + β·H_scaled, 1.0, 5.0). Higher-entropy (more uncertain) predictions get a higher temperature, softening the teacher's output distribution exactly where the extra nuance matters most.",
          ],
        },
        {
          heading: "EGAAS — Entropy-Guided Adaptive Alpha Scaling",
          paragraphs: [
            "The same entropy signal drives α — the balance between the distillation loss and the standard cross-entropy loss — via a sigmoid: α = σ(2 − H). Confident, low-entropy samples lean on ground-truth labels; uncertain, high-entropy samples lean more on the teacher's softened distribution.",
          ],
        },
        {
          heading: "Contrastive feature alignment",
          paragraphs: [
            "On top of EGATS/EGAAS, an auxiliary cosine-similarity contrastive loss (weighted λ = 0.1) pulls the student's intermediate feature representations toward the teacher's, giving the student a second, feature-space signal beyond just matching output logits.",
          ],
        },
        {
          heading: "Dataset & setup",
          paragraphs: [
            "Teacher: ResNet-34, 20 epochs, LR 0.0015. Student: ResNet-18, 70 epochs, LR 0.001. Trained and evaluated on a Kaggle wound-image dataset spanning 9 classes — burns, bruises, cuts, venous wounds, abrasions, surgical wounds, pressure wounds, diabetic wounds, lacerations — balanced to 100 images per class (900 total), resized to 224×224, augmented with 9 Albumentations transform types, split 80/10/10.",
          ],
        },
        {
          heading: "Through RAC",
          paragraphs: [
            "Produced through IPST/PMU-B's national RAC (Robotics, AI, and Coding) program, Cohort 2 — selected as 1 of 25 students nationally from a Python coding assessment, then developed and researched the method over an intensive residential workshop and follow-up remote work before submission to ICCI 2025.",
          ],
        },
      ],
      links: [
        {
          label: "ResearchGate",
          href: "https://www.researchgate.net/publication/391693610_Knowledge_Distillation_Using_Entropy-Guided_Dynamic_Parameter_Transfer_for_Wound_Image_Classification",
        },
        { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/document/10987261" },
      ],
    },
  },

  experience: [
    {
      kind: "experience",
      slug: "ancient-heritage-damage-detection",
      title: "Research Assistant — Automated Heritage Damage Detection",
      org: '"Ancient" project, KMUTT · grant-funded, paid in installments',
      dateLabel: "Dec 2025 – Present",
      badge: "Independent contribution",
      homeProofLine:
        "Overall accuracy 90.08% → 99.52% · Crack IoU → 83.25% · Spalling IoU → 97.28% · Decay IoU → 98.43%",
      homeBullets: [
        "Independently designed and built a multi-view 3D→2D rendering and consensus-classification pipeline, then rewrote the renderer around EWA (Elliptical Weighted Average) surface splatting to close rendering gaps at oblique camera angles.",
        "Also built, independently, a point-cloud simplification pipeline cutting a real 5.49M-point heritage scan to 1.53M points (−72%) while preserving damage-relevant detail.",
      ],
      linked: true,
      detail: {
        metricsTable: [
          { metric: "Overall accuracy", before: "90.08%", after: "99.52%" },
          { metric: "Crack IoU", before: "78.25%", after: "83.25%" },
          { metric: "Spalling IoU", before: "89.34%", after: "97.28%" },
          { metric: "Decay IoU", before: "54.58%", after: "98.43%" },
          { metric: "Unseen surface", before: "—", after: "0.0048%" },
        ],
        sections: [
          {
            heading: "What the project does",
            paragraphs: [
              "Automated detection of cracks, spalling, and decay on Thai heritage structures from real terrestrial-laser-scan (TLS) point clouds — real scans of Wat Chaiwatthanaram and Wat Yai Chai Mongkhon, both Ayutthaya-era sites, some over 5 million points per scan.",
            ],
          },
          {
            heading: "Two parallel tracks — and which one is his",
            paragraphs: [
              "The project's git-committed src/ package (a RandLA-Net/PointNet++ semantic-segmentation track, plus a FastAPI backend) is teammates' work. His own contribution is a separate, self-directed track: a full multi-view 3D→2D rendering and consensus-classification pipeline, built and iterated across many solo engineering sessions using real Colab GPU runs rather than guesswork.",
            ],
          },
          {
            heading: "EWA Surface Splatting",
            paragraphs: [
              "The renderer projects the point cloud into 2D from 32 camera views, then reaches a per-pixel consensus across views to classify damage. The original isotropic point-splat renderer left visible gaps at oblique camera angles. Rewrote it around EWA (Elliptical Weighted Average) surface splatting — anisotropic covariance-based projection adapted from the same math family used in 3D Gaussian Splatting (Zwicker et al., 2001) — applied as a closed-form, single-pass render, with no training involved. Result: the rate of surface points never seen by any camera view dropped to 0.0048%, and every IoU metric improved substantially (see table).",
            ],
          },
          {
            heading: "Real bugs found and fixed",
            paragraphs: [
              "Along the way, diagnosed and fixed several real rendering and reliability bugs on live Colab GPU runs, not in the abstract:",
            ],
            bullets: [
              "Point-splat size asymmetry across damage classes was causing large classes to silently overwrite small ones — fixing it cut false positives by 76–89%.",
              "Replaced hard pixel-overwrite rendering with proper Gaussian-weighted alpha blending, closing black holes at splat boundaries.",
              "Switched label decoding from hard one-hot to SVLS-style soft decoding, so ambiguous boundary pixels aren't forced into a false-confident class.",
              "Root-caused and fixed a Google Drive FUSE I/O hang (a native-level block that a plain SIGINT can't interrupt) with a signal-based timeout guard.",
              "Found and fixed a missing pcd.normals reassignment bug that silently broke Ball Pivoting mesh reconstruction whenever cached normals were reused.",
            ],
          },
          {
            heading: "Point-cloud simplification pipeline",
            paragraphs: [
              "Built independently: density-based clustering (DBSCAN/HDBSCAN) to segment the point cloud, curvature/roughness saliency scoring to identify which points carry structurally important detail, then adaptive voxel downsampling applied only to the non-salient points. On a real 5.49-million-point scan, this cut the cloud to 1.53 million points — a 72.14% reduction — while preserving the fine detail that damage detection depends on.",
            ],
          },
          {
            heading: "A documented decision not to pursue 3D Gaussian Splatting",
            paragraphs: [
              "Evaluated whether 3D Gaussian Splatting could be used directly for the semantic-segmentation task itself (not just as the projection math EWA borrows from). Root-caused four compounding bugs in a teammate's existing 3DGS implementation, scoped what a real fix would take, and made a reasoned decision not to pursue it — documented with the actual reasoning rather than left as an unexplained dead end.",
            ],
          },
        ],
      },
    },
  ],

  projects: [
    {
      kind: "project",
      slug: "fahmai-rag",
      title: "FahMai RAG Challenge",
      org: "Super AI Engineer Season 6, Level 1 Hackathon",
      dateLabel: "2026",
      homeProofLine: "BGE-M3 embeddings · hybrid BM25 + dense retrieval (RRF) · PyThaiNLP",
      homeBullets: [
        "Built a Thai-language retrieval-augmented QA system with hybrid retrieval and edge-case-aware prompting.",
      ],
      linked: true,
      detail: {
        sections: [
          {
            heading: "The task",
            paragraphs: [
              "Answer Thai-language customer-service questions about a fictional retailer from a knowledge base of about 135 Markdown documents, using a Thai-capable LLM — including correctly recognizing when a question has no answer in the knowledge base at all.",
            ],
          },
          {
            heading: "What changed from the starter kit",
            paragraphs: [
              "The provided baseline used a weaker multilingual embedding model, naive fixed-length chunking, and no reranking. Swapped in BAAI/bge-m3 — a stronger multilingual embedding model with solid Thai support — and fused BM25 keyword retrieval (tokenized with PyThaiNLP) with dense retrieval using Reciprocal Rank Fusion, so exact matches (like product codes) and semantic matches both surface reliably.",
            ],
          },
          {
            heading: "Query-adaptive weighting & edge cases",
            paragraphs: [
              "Weighted BM25 more heavily for queries that look like product-code lookups, and engineered prompts specifically to make the model answer 'not in knowledge base' or 'not related' correctly instead of guessing — the failure mode that hurts naive RAG systems most on edge-case questions.",
            ],
          },
          {
            heading: "Documented the strategy",
            paragraphs: [
              "Wrote a self-authored analysis document laying out the diagnosis and the fix, citing external research (including ACL 2024 work on RAG best practices) to justify each choice rather than tuning by trial and error alone.",
            ],
          },
        ],
      },
    },
    {
      kind: "project",
      slug: "space-hero-companion",
      title: "Space-Hero Companion",
      org: "NASA International Space Apps Challenge, Space Challenge Asia regional",
      dateLabel: "Oct 2024",
      badge: "Galactic 2nd Runner-Up",
      homeProofLine: "Presenter, Design, Research · 7-person team · Galactic 2nd Runner-Up",
      homeBullets: [
        "Presented, shaped the design concept, and researched the astronaut-wellbeing domain behind a companion-app game; a teammate built the Unity/C# implementation.",
      ],
      linked: true,
      detail: {
        sections: [
          {
            heading: "The concept",
            paragraphs: [
              "A Tamagotchi-style companion game to help astronauts manage stress, loneliness, and wellbeing during missions — a customizable companion with a mood/happiness loop, encouragement system, and simple health-data tracking, built for the 'Galactic Games' challenge track.",
            ],
          },
          {
            heading: "His role",
            paragraphs: [
              "Presenter, design, and research — he shaped the companion-app concept and the astronaut-wellbeing framing behind it, and presented the project to judges. The Unity/C# implementation was built by a teammate on the 7-person team.",
            ],
          },
          {
            heading: "Result",
            paragraphs: [
              "Galactic 2nd Runner-Up at the Space Challenge Asia regional round, part of the global NASA International Space Apps Challenge.",
            ],
          },
        ],
      },
    },
    {
      kind: "project",
      slug: "pestguard-ai",
      title: "PestGuard AI",
      org: "AI + IoT Young Master Competition",
      dateLabel: "2024",
      badge: "Best Excellent Idea, ฿5,000",
      homeProofLine: "Idea/pitch only — not implemented",
      homeBullets: [
        "Conceived and pitched, solo, a camera+AI pest/animal-detection concept alerting through Home Assistant.",
      ],
      linked: false,
    },
  ],

  education: [
    {
      title: "B.Sc. Applied Computer Science",
      org: "King Mongkut's University of Technology Thonburi (KMUTT), Dept. of Mathematics, Faculty of Science",
      dateLabel: "In progress",
    },
    {
      title: "High School — Science–Mathematics, Robotics Engineering track",
      org: "Wat Rajabopit School, Bangkok",
      dateLabel: "2025",
      note: "GPAX 3.68",
    },
  ],

  skills: [
    {
      category: "ML & Vision",
      items: [
        "PyTorch",
        "scikit-learn",
        "Open3D",
        "PyVista",
        "PointNet / PointNet++",
        "DGCNN",
        "Knowledge Distillation",
      ],
    },
    {
      category: "Retrieval & NLP",
      items: ["Sentence-Transformers (BGE-M3)", "Hybrid BM25 + Dense Retrieval", "PyThaiNLP"],
    },
    {
      category: "Systems & Tools",
      items: ["FastAPI", "Git / GitHub", "Google Colab", "mkdocs"],
    },
    {
      category: "Languages",
      items: ["Python", "C++"],
    },
    {
      category: "Embedded",
      items: ["Arduino", "Raspberry Pi", "KidBright"],
    },
  ],

  awards: [
    {
      year: "2024",
      desc: "RAC Cohort 2, IPST / PMU-B national program — selected 1 of 25 nationally",
      linkKind: "publication",
      linkSlug: "knowledge-distillation-wound-classification",
    },
    {
      year: "2024",
      desc: "NASA Space Apps Challenge — Galactic 2nd Runner-Up",
      linkKind: "project",
      linkSlug: "space-hero-companion",
    },
    { year: "2024", desc: "ICT Challenges, KMUTT — top 10 nationally, honorable mention" },
    { year: "2024", desc: "AI Prompt SPU Mini Hackathon — 4th place, honorable mention" },
    { year: "2024", desc: "AI + IoT Young Master Competition — Best Excellent Idea, ฿5,000" },
    {
      year: "2025",
      desc: "ICCI 2025 — first-authored paper accepted & presented",
      linkKind: "publication",
      linkSlug: "knowledge-distillation-wound-classification",
    },
  ],
};
