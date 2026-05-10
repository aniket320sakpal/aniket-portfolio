'use client'
import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production: wire up to EmailJS, Resend, or a Next.js API route
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%', padding: '12px 16px',
    background: '#fff', border: '1.5px solid #E7E0D5',
    borderRadius: '8px', fontFamily: 'DM Sans, sans-serif',
    fontSize: '0.9rem', color: '#1C1917', outline: 'none',
    transition: 'border-color 0.2s',
  }

  const labelStyle = {
    fontSize: '0.78rem', fontWeight: 500, color: '#57534E',
    display: 'block', marginBottom: '6px',
  }

  return (
    <section id="contact" style={{ background: '#F7F4EF', padding: '100px 6%' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2D6A4F', marginBottom: '12px' }}>
          Contact
        </div>
        <h2 style={{
          fontFamily: 'Lora, Georgia, serif',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
          fontWeight: 600, letterSpacing: '-0.02em', color: '#1C1917',
          marginBottom: '56px',
        }}>
          Let's work together
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '72px', alignItems: 'start' }}>
          {/* Left info */}
          <div>
            <h3 style={{ fontFamily: 'Lora, Georgia, serif', fontSize: '1.3rem', fontWeight: 600, color: '#1C1917', marginBottom: '12px' }}>
              Open to senior ML roles
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#57534E', lineHeight: 1.75, marginBottom: '28px' }}>
              I'm looking for Staff / Senior ML Scientist or Applied Scientist roles — especially teams working on agentic AI, search, ranking, or multimodal systems. Happy to chat.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { icon: '✉', label: 'aniket17sakpal@gmail.com', href: 'mailto:aniket17sakpal@gmail.com' },
                { icon: '📞', label: '(412) 983-9955', href: 'tel:+14129839955' },
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
                    padding: '12px 16px', background: '#fff',
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

          {/* Form */}
          {submitted ? (
            <div style={{
              padding: '28px', background: '#D8F3DC', borderRadius: '12px',
              fontSize: '0.95rem', color: '#2D6A4F', fontWeight: 500, lineHeight: 1.6,
            }}>
              ✅ Message sent! Thanks for reaching out, Aniket will get back to you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={labelStyle}>Your name</label>
                  <input
                    type="text" required placeholder="Jane Smith"
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = '#2D6A4F'}
                    onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = '#E7E0D5'}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email address</label>
                  <input
                    type="email" required placeholder="jane@company.com"
                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = '#2D6A4F'}
                    onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = '#E7E0D5'}
                  />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Subject</label>
                <input
                  type="text" placeholder="Job opportunity / Collaboration / Other"
                  value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => (e.target as HTMLInputElement).style.borderColor = '#2D6A4F'}
                  onBlur={(e) => (e.target as HTMLInputElement).style.borderColor = '#E7E0D5'}
                />
              </div>
              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  required placeholder="Tell me about the role, team, or what you're building..."
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, minHeight: '140px', resize: 'vertical' }}
                  onFocus={(e) => (e.target as HTMLTextAreaElement).style.borderColor = '#2D6A4F'}
                  onBlur={(e) => (e.target as HTMLTextAreaElement).style.borderColor = '#E7E0D5'}
                />
              </div>
              <p style={{ fontSize: '0.78rem', color: '#A8A29E' }}>
                To wire up real email delivery, add an <code style={{ background: '#EDE9E1', padding: '1px 5px', borderRadius: '4px' }}>EmailJS</code> or <code style={{ background: '#EDE9E1', padding: '1px 5px', borderRadius: '4px' }}>Resend</code> integration in <code style={{ background: '#EDE9E1', padding: '1px 5px', borderRadius: '4px' }}>src/app/api/contact/route.ts</code>.
              </p>
              <button
                type="submit"
                style={{
                  padding: '13px 28px', borderRadius: '8px',
                  background: '#2D6A4F', color: '#fff',
                  border: 'none', fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer',
                  transition: 'all 0.2s', alignSelf: 'flex-start',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#215C42'
                  ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#2D6A4F'
                  ;(e.currentTarget as HTMLElement).style.transform = 'none'
                }}
              >
                Send message →
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
