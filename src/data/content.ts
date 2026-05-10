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
      'Built production-grade AI analytics copilot with adaptive reasoning loop — intent understanding, autonomous tool selection via ReAct, multimodal execution, and episodic history compaction.',
      'Designed a declarative skill system with YAML-manifest-driven analytical workflows (metric diagnosis, root cause analysis) and hot-loading — eliminating LLM drift.',
      'Built a tiered memory architecture — factual, episodic, and preference memories with vector compression, relevance decay, and attention-gated retrieval.',
      'Developed knowledge-graph RAG pipeline retrieving context from MBR/WBR documents using KG expansion, custom embedding debiasing, query rewriting, and MMR-based reranking.',
      'Built patented agentic image-to-video system — the first at scale in travel — delivering $7M+ uplift across 10,000+ hotel properties. Includes hallucination-detection engine, camera-motion detector, and autonomous regeneration loop.',
    ],
  },
  {
    title: 'Co-founder & Lead AI Research Scientist',
    company: 'Aitado · Austin, TX',
    period: 'Aug 2022 – Present',
    current: true,
    patent: false,
    bullets: [
      'Built an AI learning co-pilot that transforms documents into interactive notebooks — explainer videos, Socratic audio dialogues, Q&A, and adaptive quizzes.',
      'Designed multi-agent architecture coordinating RAG, code generation, visualization, evaluation, and TTS agents to create coherent, pedagogically structured learning modules.',
      'Led back-end development and research on RL fine-tuning (GRPO/RLHF), multi-agent orchestration, and automated content-assembly pipelines.',
    ],
  },
  {
    title: 'ML Scientist — Search & Discovery',
    company: 'Expedia Group · Austin, TX',
    period: 'Oct 2022 – Jun 2024',
    current: false,
    patent: false,
    bullets: [
      'Developed Search & Ranking Interpretation Framework using latent-class discrete choice models, causal inference, and ranking-explainability diagnostics.',
      'Built latent-class choice models via custom EM algorithm to uncover heterogeneous customer segments and model substitution patterns.',
      'Designed A/B testing infrastructure for Ranking ML models using interleaving methods (team draft / probabilistic) — achieving 10× acceleration in model iteration cycles.',
      'Designed interpretable ranking metrics: qualified CTR, position-normalized engagement, and intent-aligned utility gains.',
    ],
  },
  {
    title: 'Associate Manager — Product Analytics',
    company: 'Dream11 · Mumbai, India',
    period: 'Dec 2020 – Jun 2021',
    current: false,
    patent: false,
    bullets: [
      'Improved app rating from 3.1 → 3.7 by leading product analytics and UX experimentation.',
      'Drove launch decisions for six major features; built funnel-conversion, marketing-effectiveness, and KPI alerting dashboards.',
    ],
  },
  {
    title: 'Lead Data Scientist',
    company: 'Mu Sigma · Bangalore, India',
    period: 'Oct 2016 – Dec 2020',
    current: false,
    patent: false,
    bullets: [
      'Led team of 5 delivering ML solutions for Fortune 100 CPG and Fortune 1 retail clients.',
      'Reduced churn 11% → 8% using survival models (Cox PH, Weibull AFT) and clustering (k-means/GMM).',
      'Improved lead conversion 26% → 29% via regularized logistic-regression scoring and uplift-based ranking.',
      'Increased manufacturing uptime 86% → 92% with gradient-boosting failure detection and real-time scoring pipelines.',
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
    category: 'Agentic AI',
    readTime: '8 min read',
    title: 'Why most RAG pipelines fail in production — and how knowledge graphs fix it',
    excerpt: 'The gap between a RAG demo and a RAG system that answers business questions reliably is wider than most teams expect. Here\'s what I learned building one at Expedia.',
    date: 'Coming soon',
    href: '#',
    coming: true,
  },
  {
    category: 'ML Systems',
    readTime: '6 min read',
    title: 'The hidden cost of LLM drift in production analytical agents',
    excerpt: 'When an LLM decides how to answer a metric question, small prompt variations create large output variance. A YAML-manifest skill system solved this for us.',
    date: 'Coming soon',
    href: '#',
    coming: true,
  },
  {
    category: 'Experimentation',
    readTime: '10 min read',
    title: 'Interleaving vs A/B testing for ranking models: a practical guide',
    excerpt: 'How we achieved 10× faster model iteration at Expedia by moving from traditional A/B tests to probabilistic interleaving — and the tradeoffs that come with it.',
    date: 'Coming soon',
    href: '#',
    coming: true,
  },
]
