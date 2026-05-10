'use client'

const stats = [
  { num: '10+', label: 'Years in ML', sub: 'Fortune 100 → startup' },
  { num: '2', label: 'U.S. Patents', sub: 'AI & Agentic Systems' },
  { num: '$7M+', label: 'Revenue Uplift', sub: 'Deployed at scale' },
]

const highlights = [
  { icon: '🏆', text: '2× U.S. Patent holder in AI hallucination detection & agentic video systems' },
  { icon: '🎓', text: 'M.S. Data Science — Carnegie Mellon University' },
  { icon: '🏢', text: 'ML Scientist at Expedia Group · Top performer, highest-band reviews' },
  { icon: '🚀', text: <>Co-founder of <a href="http://www.aitado.com" target="_blank" rel="noopener noreferrer" style={{ color: '#2D6A4F', textDecoration: 'none', fontWeight: 500 }}>Aitado ↗</a> — AI learning platform with multi-agent architecture</> },
  { icon: '📈', text: '$7M+ revenue uplift from patented AI video system deployed across travel' },
]

export default function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        padding: 'calc(68px + 60px) 6% 60px',
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        background: '#FDFAF7',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: '80px',
          alignItems: 'center',
          animation: 'fadeUp 0.7s ease forwards',
        }}>

          {/* Left — narrative */}
          <div>
            <h1 style={{
              fontFamily: 'Lora, Georgia, serif',
              fontWeight: 600, lineHeight: 1.2,
              letterSpacing: '-0.02em', color: '#1C1917',
              marginBottom: '24px',
            }}>
              <span style={{ display: 'block', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#78716C', fontWeight: 400, marginBottom: '8px', letterSpacing: '-0.01em' }}>
                Hi, I'm{' '}
                <span style={{ color: '#1C1917', fontWeight: 600 }}>Aniket Sakpal</span>
              </span>
              <span style={{ display: 'block', fontSize: 'clamp(2.2rem, 4vw, 3.4rem)' }}>
                I build AI Agents that<br />
                <em style={{ fontStyle: 'italic', color: '#2D6A4F' }}>reason, create</em> & take action
              </span>
            </h1>

            <p style={{ fontSize: '0.97rem', color: '#57534E', lineHeight: 1.8, marginBottom: '20px', maxWidth: '520px' }}>
              I design the <strong style={{ color: '#1C1917', fontWeight: 500 }}>reasoning loops, memory architectures, and tool systems</strong> that make LLM agents reliable in production — at Expedia Group and through my own startups.
            </p>


            {/* CTAs */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="#contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '12px 24px', borderRadius: '8px',
                  background: '#2D6A4F', color: '#fff',
                  fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#215C42'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#2D6A4F'; (e.currentTarget as HTMLElement).style.transform = 'none' }}
              >
                Get in touch ↗
              </a>
              <a
                href="/docs/aniket-sakpal-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '12px 24px', borderRadius: '8px',
                  background: 'transparent', color: '#1C1917',
                  border: '1.5px solid #E7E0D5',
                  fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#2D6A4F'; (e.currentTarget as HTMLElement).style.color = '#2D6A4F' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#E7E0D5'; (e.currentTarget as HTMLElement).style.color = '#1C1917' }}
              >
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/aniket-sakpal/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '12px 24px', borderRadius: '8px',
                  background: 'transparent', color: '#1C1917',
                  border: '1.5px solid #E7E0D5',
                  fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#2D6A4F'; (e.currentTarget as HTMLElement).style.color = '#2D6A4F' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#E7E0D5'; (e.currentTarget as HTMLElement).style.color = '#1C1917' }}
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right — proof */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Stat row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              {stats.map((s) => (
                <div key={s.label} style={{
                  background: '#fff', border: '1px solid #E7E0D5',
                  borderRadius: '14px', padding: '18px 16px', textAlign: 'center',
                }}>
                  <div style={{
                    fontFamily: 'Lora, Georgia, serif',
                    fontSize: '1.7rem', fontWeight: 600, color: '#2D6A4F', lineHeight: 1, marginBottom: '4px',
                  }}>
                    {s.num}
                  </div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 500, color: '#1C1917' }}>{s.label}</div>
                  <div style={{ fontSize: '0.7rem', color: '#A8A29E', marginTop: '2px' }}>{s.sub}</div>
                </div>
              ))}
            </div>

            {/* Key career highlights */}
            <div style={{
              background: '#fff', border: '1px solid #E7E0D5',
              borderRadius: '14px', padding: '22px 24px',
            }}>
              <div style={{
                fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: '#2D6A4F', marginBottom: '16px',
              }}>
                Key Career Highlights
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {highlights.map((h) => (
                  <div key={h.text} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '0.95rem', flexShrink: 0, marginTop: '1px' }}>{h.icon}</span>
                    <span style={{ fontSize: '0.83rem', color: '#57534E', lineHeight: 1.55 }}>{h.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}
