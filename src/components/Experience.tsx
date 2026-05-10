import { experience } from '@/data/content'

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        background: '#fff',
        borderTop: '1px solid #E7E0D5',
        borderBottom: '1px solid #E7E0D5',
        padding: '100px 6%',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2D6A4F', marginBottom: '12px' }}>
          Experience
        </div>
        <h2 style={{
          fontFamily: 'Lora, Georgia, serif',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
          fontWeight: 600, letterSpacing: '-0.02em', color: '#1C1917',
          marginBottom: '16px',
        }}>
          10 years of building things<br />that matter
        </h2>
        <p style={{ fontSize: '0.95rem', color: '#57534E', marginBottom: '56px', maxWidth: '560px' }}>
          From Fortune 100 clients to my own startup — always focused on production systems, real impact, and rigorous ML.
        </p>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: '13px', top: '8px', bottom: '8px',
            width: '1.5px', background: '#E7E0D5',
          }} />

          {experience.map((job, i) => (
            <div key={i} style={{ position: 'relative', paddingLeft: '52px', marginBottom: i < experience.length - 1 ? '52px' : 0 }}>
              {/* Dot */}
              <div style={{
                position: 'absolute', left: 0, top: '5px',
                width: '28px', height: '28px', borderRadius: '50%',
                background: '#fff',
                border: `2px solid ${job.current ? '#2D6A4F' : '#E7E0D5'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: job.current ? '#2D6A4F' : '#A8A29E',
                }} />
              </div>

              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                <div style={{ fontFamily: 'Lora, Georgia, serif', fontSize: '1.1rem', fontWeight: 600, color: '#1C1917' }}>
                  {job.title}
                </div>
                <span style={{
                  fontSize: '0.75rem', fontWeight: 500, color: '#2D6A4F',
                  background: '#D8F3DC', padding: '3px 10px', borderRadius: '100px',
                  whiteSpace: 'nowrap',
                }}>
                  {job.period}
                </span>
              </div>

              <div style={{ fontSize: '0.875rem', fontWeight: 500, color: '#57534E', marginBottom: '14px' }}>
                {job.company}
              </div>

              {job.patent && (
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '5px',
                  background: '#FEF3C7', color: '#B7791F',
                  fontSize: '0.72rem', fontWeight: 500, padding: '3px 10px', borderRadius: '100px',
                  marginBottom: '12px',
                }}>
                  🏆 2× U.S. Patent Holder
                </div>
              )}

              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {job.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    style={{
                      fontSize: '0.875rem', color: '#57534E', lineHeight: 1.7,
                      paddingLeft: '16px', position: 'relative', marginBottom: '6px',
                    }}
                  >
                    <span style={{ position: 'absolute', left: 0, color: '#52B788', fontSize: '0.8rem' }}>→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
