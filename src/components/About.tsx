'use client'

const highlights = [
  {
    icon: '🏆',
    title: 'U.S. Patent — AI Hallucination Detection',
    desc: 'Multi-step Vision-LLM reasoning with object-mask tracking, structural consistency checks, and temporal cross-attention validation.',
  },
  {
    icon: '🏆',
    title: 'U.S. Patent — Agentic Video Systems',
    desc: 'Autonomous image-to-video pipeline making Expedia the first travel company to deploy AI-generated videos at scale.',
  },
  {
    icon: '🎓',
    title: 'Carnegie Mellon University',
    desc: 'M.S. in Data Science — Deep Learning, Distributed Systems, A/B Testing, ML Deployment, Graph Theory.',
  },
  {
    icon: '📍',
    title: 'Based in Austin, TX · Open to USA-wide roles',
    desc: 'Currently at Expedia Group. Consistently rated top performer with highest-band reviews.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: '#fff',
        borderTop: '1px solid #E7E0D5',
        borderBottom: '1px solid #E7E0D5',
        padding: '100px 6%',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2D6A4F', marginBottom: '12px' }}>
          About me
        </div>
        <h2 style={{
          fontFamily: 'Lora, Georgia, serif',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
          fontWeight: 600, letterSpacing: '-0.02em', color: '#1C1917',
          marginBottom: '56px', lineHeight: 1.2,
        }}>
          A decade of ML,<br />from insight to impact
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '72px', alignItems: 'start' }}>
          {/* Bio */}
          <div>
            {[
              <>I'm Aniket — a Machine Learning Scientist who has spent 10 years at the intersection of <strong style={{ color: '#1C1917', fontWeight: 500 }}>research and production engineering</strong>. My work spans LLM-powered agentic systems, causal inference, large-scale search & ranking, and multimodal AI.</>,
              <>At Expedia, I've led development of AI systems that genuinely ship — from a patented image-to-video pipeline that generated <strong style={{ color: '#1C1917', fontWeight: 500 }}>$7M+ in marketing uplift</strong> across 10,000+ hotel properties, to an analytics copilot with a tiered memory architecture and knowledge-graph RAG.</>,
              <>Outside Expedia, I co-founded <strong style={{ color: '#1C1917', fontWeight: 500 }}>Aitado</strong>, an AI learning platform that turns any document into a rich, interactive learning experience — Socratic dialogue, video explainers, and adaptive quizzes powered by multi-agent RAG.</>,
              <>I hold two U.S. patents in <strong style={{ color: '#1C1917', fontWeight: 500 }}>AI Hallucination Detection</strong> and <strong style={{ color: '#1C1917', fontWeight: 500 }}>Agentic Systems</strong>, and I was consistently rated a top performer at Expedia Group.</>,
            ].map((text, i) => (
              <p key={i} style={{ fontSize: '0.95rem', color: '#57534E', lineHeight: 1.8, marginBottom: '16px' }}>
                {text}
              </p>
            ))}

            <div style={{ display: 'flex', gap: '10px', marginTop: '28px', flexWrap: 'wrap' }}>
              {[
                { label: '🔗 LinkedIn', href: 'https://www.linkedin.com/in/aniket-sakpal/' },
                { label: '🚀 Aitado', href: 'http://www.aitado.com' },
                { label: '✉ Email me', href: 'mailto:aniket17sakpal@gmail.com' },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    padding: '9px 16px', borderRadius: '8px',
                    fontSize: '0.85rem', fontWeight: 500,
                    color: '#57534E', border: '1.5px solid #E7E0D5', textDecoration: 'none',
                    transition: 'all 0.2s',
                    background: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#2D6A4F'
                    ;(e.currentTarget as HTMLElement).style.color = '#2D6A4F'
                    ;(e.currentTarget as HTMLElement).style.background = '#D8F3DC'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#E7E0D5'
                    ;(e.currentTarget as HTMLElement).style.color = '#57534E'
                    ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {highlights.map((h) => (
              <div
                key={h.title}
                style={{
                  background: '#F7F4EF',
                  border: '1px solid #E7E0D5',
                  borderLeft: '3px solid #2D6A4F',
                  borderRadius: '10px',
                  padding: '18px 20px',
                }}
              >
                <div style={{ fontSize: '0.9rem', fontWeight: 500, color: '#1C1917', marginBottom: '5px' }}>
                  {h.icon} {h.title}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#57534E', lineHeight: 1.55 }}>{h.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
