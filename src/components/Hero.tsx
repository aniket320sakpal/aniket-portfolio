'use client'
import { stats } from '@/data/content'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        padding: 'calc(68px + 80px) 6% 80px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '64px',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {/* Left */}
      <div style={{ animation: 'fadeUp 0.7s ease forwards' }}>
        {/* Available tag */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: '#D8F3DC', color: '#2D6A4F',
          fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase',
          padding: '5px 14px', borderRadius: '100px', marginBottom: '28px',
        }}>
          <span style={{ width: 6, height: 6, background: '#52B788', borderRadius: '50%', display: 'inline-block' }} />
          Open to Senior ML roles
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'Lora, Georgia, serif',
          fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
          fontWeight: 600,
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          color: '#1C1917',
          marginBottom: '20px',
        }}>
          Building AI that<br />
          <em style={{ fontStyle: 'italic', color: '#2D6A4F' }}>actually ships</em><br />
          at scale
        </h1>

        <p style={{
          fontSize: '1.05rem', color: '#57534E', lineHeight: 1.75,
          marginBottom: '36px', maxWidth: '480px',
        }}>
          Machine Learning Scientist with 10 years crafting production-grade AI for Search, Ranking, and Agentic systems — from Fortune 100s to my own startup.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '52px' }}>
          <a
            href="#contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '13px 26px', borderRadius: '8px',
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
            href="#experience"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '13px 26px', borderRadius: '8px',
              background: 'transparent', color: '#1C1917',
              border: '1.5px solid #E7E0D5',
              fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#2D6A4F'; (e.currentTarget as HTMLElement).style.color = '#2D6A4F' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#E7E0D5'; (e.currentTarget as HTMLElement).style.color = '#1C1917' }}
          >
            View experience
          </a>
          <a
            href="http://www.aitado.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '13px 26px', borderRadius: '8px',
              background: '#FEF3C7', color: '#B7791F',
              border: '1.5px solid #FDE68A',
              fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none',
              transition: 'all 0.2s',
            }}
          >
            🚀 aitado.com
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap' }}>
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{
                fontFamily: 'Lora, Georgia, serif',
                fontSize: '2rem', fontWeight: 600, color: '#1C1917', lineHeight: 1,
              }}>
                {s.num.replace('+', '')}<span style={{ color: '#2D6A4F' }}>{s.num.includes('+') ? '+' : ''}</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#A8A29E', marginTop: '3px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — info cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', animation: 'fadeUp 0.7s 0.15s ease both' }}>
        {[
          {
            label: 'Latest role',
            title: 'ML Scientist — Agentic & Multimodal AI',
            desc: 'Expedia Group · Building production AI copilots, knowledge-graph RAG, and patented video generation systems.',
            badge: '⚙ Present',
            badgeColor: '#2D6A4F', badgeBg: '#D8F3DC',
          },
          {
            label: 'Startup founder',
            title: 'Aitado — AI Learning Co-pilot',
            desc: 'Co-founded platform transforming documents into interactive notebooks with Socratic audio, adaptive quizzes & multi-agent RAG.',
            badge: '🌐 aitado.com',
            badgeColor: '#B7791F', badgeBg: '#FEF3C7',
          },
          {
            label: 'Education',
            title: 'M.S. Data Science — Carnegie Mellon University',
            desc: 'Deep Learning · Distributed Systems · A/B Testing · ML Deployment · Graph Theory',
            badge: null,
            badgeColor: '', badgeBg: '',
          },
        ].map((card) => (
          <div
            key={card.title}
            style={{
              background: '#fff',
              border: '1px solid #E7E0D5',
              borderRadius: '12px',
              padding: '22px 26px',
              transition: 'transform 0.25s, box-shadow 0.25s',
              cursor: 'default',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = '0 10px 28px rgba(0,0,0,0.07)'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'none'
              ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
            }}
          >
            <div style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#A8A29E', marginBottom: '7px' }}>{card.label}</div>
            <div style={{ fontFamily: 'Lora, Georgia, serif', fontSize: '1rem', fontWeight: 600, color: '#1C1917', marginBottom: '5px' }}>{card.title}</div>
            <div style={{ fontSize: '0.84rem', color: '#57534E', lineHeight: 1.55 }}>{card.desc}</div>
            {card.badge && (
              <span style={{
                display: 'inline-block', marginTop: '10px',
                background: card.badgeBg, color: card.badgeColor,
                fontSize: '0.72rem', fontWeight: 500, padding: '3px 10px', borderRadius: '100px',
              }}>
                {card.badge}
              </span>
            )}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          #hero { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
