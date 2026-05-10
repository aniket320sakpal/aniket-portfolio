'use client'

import { skills } from '@/data/content'

export default function Skills() {
  return (
    <section id="skills" style={{ background: '#F7F4EF', padding: '100px 6%' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2D6A4F', marginBottom: '12px' }}>
          Skills & expertise
        </div>
        <h2 style={{
          fontFamily: 'Lora, Georgia, serif',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
          fontWeight: 600, letterSpacing: '-0.02em', color: '#1C1917',
          marginBottom: '16px',
        }}>
          Full-spectrum ML engineering
        </h2>
        <p style={{ fontSize: '0.95rem', color: '#57534E', marginBottom: '52px', maxWidth: '560px' }}>
          From research and experimentation to large-scale production deployment — covering the full ML lifecycle.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          {skills.map((cat) => (
            <div
              key={cat.category}
              style={{
                background: '#fff',
                border: '1px solid #E7E0D5',
                borderRadius: '12px',
                padding: '24px',
                transition: 'box-shadow 0.2s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(0,0,0,0.06)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = 'none')}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{cat.icon}</div>
              <div style={{ fontWeight: 500, fontSize: '0.9rem', color: '#1C1917', marginBottom: '14px' }}>{cat.category}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {cat.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      background: '#EDE9E1', color: '#57534E',
                      fontSize: '0.74rem', fontWeight: 500,
                      padding: '4px 10px', borderRadius: '6px',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
