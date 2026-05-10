'use client'

export default function Contact() {
  return (
    <section id="contact" style={{ background: '#F7F4EF', padding: '100px 6%' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2D6A4F', marginBottom: '12px' }}>
          Contact
        </div>
        <h2 style={{
          fontFamily: 'Lora, Georgia, serif',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
          fontWeight: 600, letterSpacing: '-0.02em', color: '#1C1917',
          marginBottom: '16px',
        }}>
          Let's work together
        </h2>
        <p style={{ fontSize: '0.95rem', color: '#57534E', lineHeight: 1.75, marginBottom: '36px' }}>
          I'm open to senior ML and Applied Scientist roles — particularly teams working on agentic AI, search, ranking, or multimodal systems. Reach out directly.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {[
            { icon: '✉', label: 'aniket17sakpal@gmail.com', href: 'mailto:aniket17sakpal@gmail.com' },
            { icon: '🔗', label: 'linkedin.com/in/aniket-sakpal', href: 'https://www.linkedin.com/in/aniket-sakpal/' },
            { icon: '🚀', label: 'aitado.com', href: 'http://www.aitado.com' },
            { icon: '📍', label: 'Austin, TX · Open to USA-wide', href: '#' },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                fontSize: '0.875rem', color: '#57534E', textDecoration: 'none',
                padding: '14px 18px', background: '#fff',
                border: '1px solid #E7E0D5', borderRadius: '10px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#2D6A4F'
                ;(e.currentTarget as HTMLElement).style.color = '#2D6A4F'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#E7E0D5'
                ;(e.currentTarget as HTMLElement).style.color = '#57534E'
              }}
            >
              <span style={{ fontSize: '1.1rem', width: '24px', textAlign: 'center' }}>{l.icon}</span>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
