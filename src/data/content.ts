export const profile = {
  name: 'Aniket Sakpal',
  title: 'Machine Learning Scientist',
  tagline: 'Building AI that actually ships at scale',
  sub: '10 years crafting production-grade AI for Search, Ranking, and Agentic systems — from Fortune 100s to my own startup.',
  email: 'aniket17sakpal@gmail.com',
  phone: '(412) 983-9955',
  linkedin: 'https://www.linkedin.com/in/aniket-sakpal/',
  startup: 'http://www.aitado.com',
  location: 'Austin, TX · USA',
  available: true,
}

export const stats = [
  { num: '10+', label: 'Years in ML' },
  { num: '2', label: 'U.S. Patents' },
  { num: '$7M', label: 'Revenue uplift' },
  { num: '10K+', label: 'Properties scaled' },
]

export const skills = [
  {
    category: 'AI & ML',
    icon: '🤖',
    items: ['Agentic AI', 'RAG', 'Deep Learning', 'Reinforcement Learning', 'PPO / GRPO', 'Multi-Agent Systems', 'Video LLMs', 'LLMs'],
  },
  {
    category: 'Engineering',
    icon: '⚙️',
    items: ['PyTorch', 'FastAPI', 'Flask', 'Next.js', 'LangGraph', 'SQL', 'PySpark', 'Redis', 'Kubernetes'],
  },
  {
    category: 'Analytics',
    icon: '📊',
    items: ['A/B Testing', 'Interleaving', 'Causal Inference', 'Regression', 'Predictive Modeling', 'Optimization', 'Feature Engineering'],
  },
  {
    category: 'Tools & Infra',
    icon: '🛠',
    items: ['Python', 'Tableau', 'R', 'Git', 'Distributed Systems', 'Knowledge Graphs', 'Datadog', 'Langfuse'],
  },
]

export const experience = [
  {
    title: 'ML Scientist — Agentic & Multimodal AI',
    company: 'Expedia Group · Austin, TX',
    period: 'Jun 2024 – Present',
    current: true,
    patent: true,
    bullets: [
      {
        text: 'Built **production-grade AI analytics copilot** with adaptive reasoning loop — **ReAct** tool selection, multimodal execution, and episodic history compaction.',
        sub: [
          '**Declarative skill system** — YAML-manifest-driven workflows (metric diagnosis, root cause analysis) with hot-loading to eliminate LLM drift.',
          '**Redis state management** — key-sharding, TTL policies, partial-state hydration for sub-second agent transitions.',
          '**Tiered memory architecture** — factual, episodic, and preference memories with vector compression, relevance decay, and attention-gated retrieval.',
          '**Context-engineering layer** — dynamic pruning, hierarchical chunk selection, and semantic routing to optimize LLM context windows.',
          '**Knowledge graph RAG** — MBR/WBR retrieval via KG expansion, embedding debiasing, query rewriting, and MMR reranking.',
          '**Production orchestration** — async FastAPI + Redis Streams on Kubernetes; Datadog APM + Langfuse LLM tracing.',
        ],
      },
      {
        text: 'Built **patented agentic image-to-video system** — first in travel at scale, delivering **$7M+ marketing uplift** across 10,000+ hotel properties.',
        sub: [
          '**Hallucination detection** — Vision-LLM reasoning, object-mask tracking, and temporal cross-attention validation.',
          '**Camera-motion detector** — RAFT-style optical flow + custom video-embedding encoders to flag jitter and misaligned trajectories.',
          '**Autonomous regeneration loop** — LLM-driven prompt optimization, shot-plan adjustments, and diffusion-model control tuning.',
          '**Image-selection module** — fine-tuned YOLOv8 + CLIP dual-encoder on 1M+ images; LangGraph workflow for frame scoring and quality gating.',
          '**Video upscalers** — 3D-UNet + latent-space SR transformers with GAN-based perceptual loss and motion-aware temporal consistency.',
        ],
      },
    ],
  },
  {
    title: 'Co-founder & Lead AI Research Scientist',
    company: 'Aitado · Austin, TX',
    period: 'Aug 2022 – Present',
    current: true,
    patent: false,
    bullets: [
      {
        text: 'Built **AI learning co-pilot** transforming documents into interactive notebooks — explainer videos, Socratic audio, adaptive quizzes, and text Q&A.',
        sub: [
          '**Multi-agent architecture** — RAG, code generation, visualization, evaluation, and TTS agents coordinated for structured learning modules.',
          '**RL fine-tuning** (GRPO/RLHF) and multi-agent orchestration powering scalable content-assembly pipelines.',
        ],
      },
    ],
  },
  {
    title: 'ML Scientist — Search & Discovery',
    company: 'Expedia Group · Austin, TX',
    period: 'Oct 2022 – Jun 2024',
    current: false,
    patent: false,
    bullets: [
      {
        text: 'Developed **Search & Ranking Interpretation Framework** — latent-class discrete choice models, causal inference, and ranking-explainability diagnostics.',
        sub: [
          '**Latent-class choice models** via custom EM algorithm — uncovered heterogeneous segments, utility functions, and substitution patterns driving conversion.',
          '**Structural causal modeling** — instrumental variables, propensity weighting, and counterfactual estimators to isolate true booking drivers from bias.',
          '**Ranking-evaluation layer** — NDCG, ERR, Shapley/IG attributions to diagnose where algorithmic ordering diverged from customer utility.',
        ],
      },
      {
        text: 'Owned **A/B testing infrastructure** for Ranking ML models — statistically rigorous, interpretable evaluation at scale.',
        sub: [
          '**Interleaving pipelines** (team draft / probabilistic) enabling **10× faster** model iteration with variance-reduced comparisons.',
          '**Interpretable ranking metrics** — qualified CTR, position-normalized engagement, and intent-aligned utility gains.',
        ],
      },
    ],
  },
  {
    title: 'Associate Manager — Product Analytics',
    company: 'Dream11 · Mumbai, India',
    period: 'Dec 2020 – Jun 2021',
    current: false,
    patent: false,
    bullets: [
      {
        text: 'Improved app rating **3.1 → 3.7** leading product analytics and UX experimentation — drove six major feature launches; built funnel-conversion, marketing-effectiveness, and KPI alerting dashboards.',
        sub: [],
      },
    ],
  },
  {
    title: 'Lead Data Scientist',
    company: 'Mu Sigma · Bangalore, India',
    period: 'Oct 2016 – Dec 2020',
    current: false,
    patent: false,
    bullets: [
      { text: 'Led team of 5 delivering ML for **Fortune 100 CPG** and **Fortune 1 retailer** — predictive modeling, optimization, and large-scale analytics.', sub: [] },
      { text: 'Reduced churn **11% → 8%** — survival models (Cox PH, Weibull AFT) + clustering (k-means/GMM) to identify high-risk segments.', sub: [] },
      { text: 'Improved lead conversion **26% → 29%** — regularized logistic-regression scoring and uplift-based ranking of sales prospects.', sub: [] },
      { text: 'Increased manufacturing uptime **86% → 92%** — gradient boosting failure detection and real-time scoring pipelines.', sub: [] },
      { text: '**Marketing mix modeling** (MMM/ROI) and market-basket analysis via association-rule mining for strategic product placement.', sub: [] },
    ],
  },
]

export const projects = [
  {
    icon: '🎬',
    name: 'Agentic Image-to-Video System',
    badge: '🏆 U.S. Patent',
    badgeStyle: 'gold',
    desc: 'Enabled Expedia to become the first travel company to deploy AI-generated videos at scale — $7M+ marketing uplift across 10,000+ hotel properties. Hallucination detection, camera-motion analysis, and autonomous regeneration loop.',
    tags: ['Vision-LLM', 'Diffusion Models', 'YOLOv8', 'CLIP', 'LangGraph', 'Kubernetes'],
  },
  {
    icon: '🤖',
    name: 'AI Analytics Copilot',
    badge: 'Production',
    badgeStyle: 'green',
    desc: 'Production-grade analytics copilot with ReAct reasoning loop, YAML-manifest skill system, Redis-backed state management, and knowledge-graph RAG. Mirrors architecture of production coding agents.',
    tags: ['LangGraph', 'RAG', 'Redis', 'FastAPI', 'Knowledge Graphs', 'Langfuse'],
  },
  {
    icon: '🎓',
    name: 'Aitado — AI Learning Co-pilot',
    badge: 'Live · aitado.com',
    badgeStyle: 'green',
    desc: 'Co-founded platform that transforms questions and documents into interactive learning environments — Socratic audio dialogue, explainer videos, adaptive quizzes, and multi-agent RAG pipelines.',
    tags: ['Multi-Agent', 'GRPO/RLHF', 'TTS', 'RAG', 'Next.js', 'PyTorch'],
  },
  {
    icon: '📐',
    name: 'Search & Ranking Interpretation Framework',
    badge: 'Research',
    badgeStyle: 'blue',
    desc: 'Latent-class discrete choice models with causal inference and ranking-explainability diagnostics to evaluate how ML ranking systems satisfy real customer intent — with 10× faster model iteration via interleaving.',
    tags: ['Causal Inference', 'EM Algorithm', 'NDCG', 'Interleaving', 'Shapley', 'PySpark'],
  },
]

export const blogPosts = [
  {
    category: 'Recommender Systems',
    readTime: 'Paper',
    title: 'Bridging Choice Theory and Recommender Systems',
    excerpt: 'Exploring the intersection of discrete choice models and modern recommender systems — applying latent-class demand modeling to uncover heterogeneous user preferences and substitution patterns.',
    date: 'Apr 2024',
    href: '/docs/bridging-choice-theory-recommender-systems.pdf',
    coming: false,
    status: 'Under Review · ACM RecSys 2026',
  },
  {
    category: 'Computer Vision · GenAI',
    readTime: 'Paper',
    title: 'Image to Video Generation at Scale',
    excerpt: 'How we built and deployed the first AI image-to-video system in travel at scale — covering hallucination detection, camera-motion analysis, and autonomous regeneration loops across 10,000+ properties.',
    date: 'Dec 2025',
    href: '/docs/image-to-video-generation-at-scale.pdf',
    coming: false,
    patent: true,
    status: 'Under Review · ACM MM 2026',
  },
  {
    category: 'Agentic AI',
    readTime: 'Coming soon',
    title: 'Why most RAG pipelines fail in production — and how knowledge graphs fix it',
    excerpt: 'The gap between a RAG demo and a RAG system that answers business questions reliably is wider than most teams expect. Here\'s what I learned building one at Expedia.',
    date: 'Coming soon',
    href: '#',
    coming: true,
  },
]
