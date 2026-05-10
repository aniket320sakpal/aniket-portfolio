'use client'

import { projects } from '@/data/content'

const badgeStyles: Record<string, { bg: string; color: string }> = {
  gold: { bg: '#FEF3C7', color: '#B7791F' },
  green: { bg: '#D8F3DC', color: '#2D6A4F' },
  blue: { bg: '#DBEAFE', color: '#1D4ED8' },
}

export default function Projects() {
  return (
    <section id="projects" style={{ background: '#F7F4EF', padding: '100px 6%' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2D6A4F', marginBottom: '12px' }}>
          Projects & work
        </div>
        <h2 style={{
          fontFamily: 'Lora, Georgia, serif',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
          fontWeight: 600, letterSpacing: '-0.02em', color: '#1C1917',
          marginBottom: '16px',
        }}>
          Things I've built
        </h2>
        <p style={{ fontSize: '0.95rem', color: '#57534E', marginBottom: '52px', maxWidth: '560px' }}>
          Production systems, patented technology, and a startup — all grounded in rigorous ML and real-world impact.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {projects.map((p) => {
            const bs = badgeStyles[p.badgeStyle] || badgeStyles.green
            return (
              <div
                key={p.name}
                style={{
                  background: '#fff',
                  border: '1px solid #E7E0D5',
                  borderRadius: '12px',
                  padding: '28px',
                  display: 'flex', flexDirection: 'column',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 14px 36px rgba(0,0,0,0.08)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'none'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                  <span style={{ fontSize: '1.7rem' }}>{p.icon}</span>
                  <span style={{
                    fontSize: '0.7rem', fontWeight: 500, padding: '4px 10px', borderRadius: '100px',
                    background: bs.bg, color: bs.color,
                  }}>
                    {p.badge}
                  </span>
                </div>
                <div style={{ fontFamily: 'Lora, Georgia, serif', fontSize: '1.08rem', fontWeight: 600, color: '#1C1917', marginBottom: '10px' }}>
                  {p.name}
                </div>
                <p style={{ fontSize: '0.855rem', color: '#57534E', lineHeight: 1.65, marginBottom: '18px', flex: 1 }}>
                  {p.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: '#EDE9E1', color: '#57534E',
                        fontSize: '0.72rem', fontWeight: 500, padding: '3px 9px', borderRadius: '5px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
