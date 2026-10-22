import type { Profile } from "./types";

const GITHUB = "https://github.com/Taiga0727";
const IEEE = "https://ieeexplore.ieee.org/document/10987261";
const RESEARCHGATE =
  "https://www.researchgate.net/publication/391693610_Knowledge_Distillation_Using_Entropy-Guided_Dynamic_Parameter_Transfer_for_Wound_Image_Classification";

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
    linkedin: "LinkedIn",
    linkedinUrl: "https://www.linkedin.com/in/atilak-modetad-95b727331/",
    phone: "094 054 8091",
    location: "Bangkok, Thailand",
  },

  highlights: [
    { value: "1st author", label: "ICCI 2025 paper, published in IEEE Xplore" },
    { value: "95.22%", label: "wound-image accuracy with a 49% smaller model" },
    { value: "−72%", label: "point-cloud size on a real 5.49M-point heritage scan" },
    { value: "2nd Runner-Up", label: "NASA Space Apps 2024, Galactic" },
  ],

  publication: {
    kind: "publication",
    slug: "knowledge-distillation-wound-classification",
    title:
      "Knowledge Distillation Using Entropy-Guided Dynamic Parameter Transfer for Wound Image Classification",
    org: "1st author of 6 · ICCI 2025, International Conference on Cybernetics and Innovations · Pattaya, Thailand",
    dateLabel: "Apr 2025",
    homeProofLine:
      "95.22% accuracy · 42.7 MB (−49%) · 2.7 ms (−36%) · +4.66 pts vs. baseline KD",
    homeStats: [
      { label: "accuracy", value: "95.22%", accent: true },
      { label: "model size", value: "42.7 MB (−49%)" },
      { label: "inference", value: "2.7 ms (−36%)" },
      { label: "vs. baseline KD", value: "+4.66 pts", accent: true },
    ],
    homeBullets: [
      "Designed entropy-guided temperature (EGATS) and loss-balance (EGAAS) scaling that adapts knowledge distillation to each sample's uncertainty, plus a feature-alignment term, to compress a ResNet-34 wound classifier into a ResNet-18 student.",
      "Built the full pipeline (augmentation, fastai teacher, pruning and layer-truncation baselines, evaluation) and released the code and trained models.",
    ],
    homeFlow: [
      "ResNet-34 teacher",
      "Entropy per sample",
      "Adaptive T and α",
      "Distillation loss",
      "ResNet-18 student",
    ],
    stack: ["PyTorch", "fastai", "Albumentations", "Knowledge distillation"],
    links: [
      { label: "IEEE Xplore", href: IEEE },
      { label: "Code", href: `${GITHUB}/entropy-guided-kd-wound-classification` },
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
          heading: "How it fits together",
          paragraphs: [
            "For every training image, the teacher's own uncertainty sets both knobs at once.",
          ],
          flow: [
            { label: "ResNet-34 teacher", note: "Predicts class probabilities for each training image" },
            { label: "Entropy per sample", note: "How uncertain is the teacher about this image?" },
            { label: "Adaptive T and α", note: "T from entropy (1 to 5); α = σ(2 − H)" },
            {
              label: "Distillation loss",
              note: "α·KL at temperature T + (1 − α)·cross-entropy + 0.1·alignment",
            },
            { label: "ResNet-18 student", note: "42.7 MB, 49% smaller than the teacher" },
          ],
        },
        {
          heading: "Dataset & setup",
          paragraphs: [
            "Teacher: ResNet-34, 20 epochs, LR 0.0015. Student: ResNet-18, 70 epochs, LR 0.001. Trained and evaluated on a Kaggle wound-image dataset spanning 9 classes — burns, bruises, cuts, venous wounds, abrasions, surgical wounds, pressure wounds, diabetic wounds, lacerations — balanced to 100 images per class (900 total), resized to 224×224, augmented with 9 Albumentations transform types, split 80/10/10.",
          ],
        },
        {
          heading: "Code and reproducibility",
          paragraphs: [
            "The notebook, the entropy-guided loss, a manifest of the 900-image subset and the five trained models (release assets with SHA-256 checksums) are public on GitHub, together with notes on the limits of the evaluation.",
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
        { label: "IEEE Xplore", href: IEEE },
        { label: "ResearchGate", href: RESEARCHGATE },
        { label: "Code on GitHub", href: `${GITHUB}/entropy-guided-kd-wound-classification` },
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
      homeFlow: [
        "TLS point cloud",
        "32 camera views",
        "EWA splatting render",
        "Per-pixel consensus",
        "Damage labels",
      ],
      stack: ["Python", "Open3D", "PyVista", "DBSCAN / HDBSCAN", "Google Colab GPU"],
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
            flow: [
              { label: "TLS point cloud", note: "Real scans of Ayutthaya-era temples, some over 5M points" },
              { label: "32 camera views", note: "The cloud is projected into 2D from 32 viewpoints" },
              { label: "EWA splatting render", note: "Anisotropic, covariance-based projection in one pass" },
              { label: "Per-pixel consensus", note: "The views are combined to classify each surface point" },
              { label: "Damage labels", note: "Crack, spalling and decay" },
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
            flow: [
              { label: "5.49M-point scan", note: "A real heritage scan" },
              { label: "DBSCAN / HDBSCAN", note: "Density-based segmentation of the cloud" },
              { label: "Saliency scoring", note: "Curvature and roughness mark the points that matter" },
              { label: "Adaptive voxel downsampling", note: "Applied only to the non-salient points" },
              { label: "1.53M points", note: "−72.14%, damage-relevant detail kept" },
            ],
          },
          {
            heading: "A documented decision not to pursue 3D Gaussian Splatting",
            paragraphs: [
              "Evaluated whether 3D Gaussian Splatting could be used directly for the semantic-segmentation task itself (not just as the projection math EWA borrows from). Root-caused four compounding bugs in a teammate's existing 3DGS implementation, scoped what a real fix would take, and made a reasoned decision not to pursue it — documented with the actual reasoning rather than left as an unexplained dead end.",
            ],
          },
          {
            heading: "Code",
            paragraphs: ["Private research code; it is not published on GitHub."],
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
      homeStats: [
        { label: "questions", value: "100 × 10 choices" },
        { label: "knowledge base", value: "118 docs · 857 chunks" },
        { label: "intent routes", value: "5" },
      ],
      homeBullets: [
        "Built an intent-aware hybrid retrieval pipeline for Thai product Q&A: BGE-M3 dense search and BM25 over PyThaiNLP tokens, fused with intent-weighted Reciprocal Rank Fusion.",
        "Engineered forced retrieval for every product named in a question, and prompts that answer \"not in the knowledge base\" instead of guessing.",
      ],
      homeFlow: [
        "Question + 10 choices",
        "Intent routing",
        "BGE-M3 + BM25",
        "Fusion + forced retrieval",
        "LLM answer",
      ],
      stack: ["BGE-M3", "BM25", "PyThaiNLP", "RRF", "OpenThaiGPT (ThaiLLM API)", "Google Colab"],
      links: [{ label: "Code", href: `${GITHUB}/fahmai-rag-intent-aware` }],
      linked: true,
      detail: {
        sections: [
          {
            heading: "The task",
            paragraphs: [
              "Answer 100 Thai multiple-choice questions about an online electronics shop, using only its knowledge base of 118 Markdown documents (857 chunks) and a Thai LLM through the ThaiLLM API. Each question has 10 choices; choice 9 means \"not in the knowledge base\" and choice 10 \"unrelated to the shop\", so the system also has to recognize when no answer exists.",
            ],
          },
          {
            heading: "The pipeline",
            paragraphs: [
              "Questions differ in kind — a single spec lookup, a comparison of products, a price or points calculation that needs a policy file, a long story with the real question buried at the end — so one retriever is not enough.",
            ],
            flow: [
              { label: "Question + 10 choices", note: "100 Thai questions per run" },
              { label: "Intent routing", note: "Rules pick one of 5 intents and set the context size" },
              { label: "Hybrid retrieval", note: "BGE-M3 dense search and BM25 over PyThaiNLP tokens, top 20 each" },
              { label: "Fusion + forced retrieval", note: "Intent-weighted RRF; every named product gets a place" },
              { label: "LLM answer", note: "OpenThaiGPT; answer parsed to 1–10, one retry, default 9" },
            ],
          },
          {
            heading: "What changed from the starter kit",
            paragraphs: [
              "The provided baseline used a weaker multilingual embedding model, naive fixed-length chunking, and no reranking. Swapped in BAAI/bge-m3 — a stronger multilingual embedding model with solid Thai support — and fused BM25 keyword retrieval (tokenized with PyThaiNLP) with dense retrieval using Reciprocal Rank Fusion, so exact matches (like product codes) and semantic matches both surface reliably.",
              "Four helper functions (LLM call, BM25 and dense retrieval, answer parsing) started from the starter kit; the intent classifier, query decomposition, forced retrieval, prompt modes, run loop and debug helpers were written from scratch.",
            ],
          },
          {
            heading: "Query-adaptive weighting & edge cases",
            paragraphs: [
              "Fusion weights depend on the intent, so product-code lookups lean on BM25 and paraphrased questions on dense search. Every product named in a question is force-retrieved through a reverse index, which is what makes comparison questions answerable. Prompts are engineered to make the model answer \"not in knowledge base\" or \"not related\" correctly instead of guessing — the failure mode that hurts naive RAG systems most on edge-case questions.",
            ],
          },
          {
            heading: "Documented the strategy",
            paragraphs: [
              "Wrote a self-authored analysis document laying out the diagnosis and the fix, citing external research (including ACL 2024 work on RAG best practices) to justify each choice rather than tuning by trial and error alone.",
            ],
          },
        ],
        links: [{ label: "Code on GitHub", href: `${GITHUB}/fahmai-rag-intent-aware` }],
      },
    },
    {
      kind: "project",
      slug: "thai-data-storytelling",
      title: "Thai Open-Data Storytelling",
      org: "Super AI Engineer Season 6, Mini-hackathon",
      dateLabel: "Mar 2026",
      homeProofLine: "Fire risk · university enrollment · rainfall and flood risk",
      homeStats: [
        { label: "open datasets", value: "3" },
        { label: "provinces scored", value: "65" },
        { label: "student records (2025)", value: "2.0M" },
      ],
      homeBullets: [
        "Turned three Thai open datasets — fire statistics, university enrollment, rainfall and flood risk — into question-driven analyses with tiered recommendations and dashboard-ready CSVs.",
        "Scored fire risk per province on a frequency × damage plane (23 of 65 critical); factories were the strongest predictor of severity not built into the score (r = 0.73).",
      ],
      homeFlow: [
        "THackle open data",
        "Audit and clean",
        "Features and scores",
        "Question-driven analysis",
        "Recommendation + dashboard CSV",
      ],
      stack: ["pandas", "Plotly", "Looker Studio-ready CSV", "Google Colab"],
      links: [{ label: "Code", href: `${GITHUB}/thai-data-storytelling-hackathon` }],
      linked: false,
    },
    {
      kind: "project",
      slug: "ml-learning-notes",
      title: "Point-Cloud and Classical-ML Experiments",
      org: "Coursework and self-study",
      dateLabel: "Self-study",
      homeProofLine: "DGCNN on ModelNet40 · SVM on spider vs scorpion photos",
      homeStats: [
        { label: "ModelNet40 meshes", value: "12,311" },
        { label: "DGCNN, 1 epoch", value: "67.1%" },
        { label: "RBF SVM, optimistic", value: "89.3%" },
      ],
      homeBullets: [
        "Trained a Dynamic Graph CNN from scratch on 512-point clouds sampled from ModelNet40, and repaired the dataset's malformed OFF headers so Open3D could read them.",
        "Compared linear and RBF SVMs on pixel features of spider and scorpion photos, and documented why the result is optimistic: augmentation before the train/test split.",
      ],
      stack: ["PyTorch", "Open3D", "scikit-learn", "Albumentations"],
      links: [{ label: "Code", href: `${GITHUB}/ml-learning-notes` }],
      linked: false,
    },
    {
      kind: "project",
      slug: "space-hero-companion",
      title: "Space-Hero Companion",
      org: "NASA International Space Apps Challenge, Space Challenge Asia regional",
      dateLabel: "Oct 2024",
      badge: "Galactic 2nd Runner-Up",
      homeProofLine: "Presenter, Design, Research · 7-person team · Galactic 2nd Runner-Up",
      homeStats: [
        { label: "role", value: "Presenter · Design · Research" },
        { label: "team", value: "7 people" },
      ],
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
      homeStats: [{ label: "not implemented", value: "Idea / pitch only" }],
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
        "fastai",
        "scikit-learn",
        "Open3D",
        "PyVista",
        "Albumentations",
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
      category: "Data & Visualization",
      items: ["pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"],
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
