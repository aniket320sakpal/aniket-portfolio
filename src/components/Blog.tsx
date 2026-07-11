'use client'

import { blogPosts } from '@/data/content'

export default function Blog() {
  return (
    <section
      id="research"
      style={{
        background: '#fff',
        borderTop: '1px solid #E7E0D5',
        borderBottom: '1px solid #E7E0D5',
        padding: '100px 6%',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2D6A4F', marginBottom: '12px' }}>
          Research & Ideas
        </div>
        <h2 style={{
          fontFamily: 'Lora, Georgia, serif',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
          fontWeight: 600, letterSpacing: '-0.02em', color: '#1C1917',
          marginBottom: '16px',
        }}>
          Research & Publications
        </h2>
        <p style={{ fontSize: '0.95rem', color: '#57534E', marginBottom: '52px', maxWidth: '560px' }}>
          Papers, notes, and ideas from my work in agentic AI, search systems, and ML infrastructure — research in progress and published.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {blogPosts.map((post) => (
            <a
              key={post.title}
              href={post.href}
              target={post.coming || ('linkPending' in post && post.linkPending) ? undefined : '_blank'}
              rel={post.coming || ('linkPending' in post && post.linkPending) ? undefined : 'noopener noreferrer'}
              style={{
                background: post.coming ? '#F7F4EF' : '#fff',
                border: post.coming ? '1.5px dashed #D1CBC0' : '1.5px solid #2D6A4F22',
                borderRadius: '12px',
                padding: '28px',
                textDecoration: 'none',
                display: 'flex', flexDirection: 'column',
                transition: 'transform 0.25s, box-shadow 0.25s',
                cursor: post.coming ? 'default' : ('linkPending' in post && post.linkPending) ? 'default' : 'pointer',
                opacity: post.coming ? 0.75 : 1,
              }}
              onClick={(e) => (post.coming || ('linkPending' in post && post.linkPending)) && e.preventDefault()}
              onMouseEnter={(e) => {
                if (!post.coming && !('linkPending' in post && post.linkPending)) {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 10px 28px rgba(45,106,79,0.1)'
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'none'
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
                <span style={{
                  fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase',
                  color: '#2D6A4F', background: '#D8F3DC', padding: '3px 9px', borderRadius: '100px',
                }}>
                  {post.category}
                </span>
                {'patent' in post && post.patent && (
                  <span style={{
                    fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.04em',
                    color: '#B7791F', background: '#FEF3C7', padding: '3px 9px', borderRadius: '100px',
                  }}>
                    🏆 U.S. Patent
                  </span>
                )}
              </div>

              <div style={{
                fontFamily: 'Lora, Georgia, serif',
                fontSize: '1.02rem', fontWeight: 600,
                color: post.coming ? '#A8A29E' : '#1C1917',
                lineHeight: 1.4, marginBottom: '10px',
              }}>
                {post.title}
              </div>

              <p style={{
                fontSize: '0.83rem',
                color: post.coming ? '#A8A29E' : '#57534E',
                lineHeight: 1.6, flex: 1,
              }}>
                {post.excerpt}
              </p>

              {'status' in post && post.status && (
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  marginTop: '14px',
                  background: '#FEF3C7', color: '#B7791F',
                  fontSize: '0.72rem', fontWeight: 600,
                  padding: '4px 10px', borderRadius: '100px',
                }}>
                  🔄 {post.status}
                </div>
              )}

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px' }}>
                <span style={{ fontSize: '0.75rem', color: '#A8A29E' }}>{post.date}</span>
                {post.coming ? (
                  <span style={{ fontSize: '0.72rem', color: '#A8A29E', fontStyle: 'italic' }}>Coming soon</span>
                ) : 'linkPending' in post && post.linkPending ? (
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#2D6A4F' }}>Link coming soon</span>
                ) : (
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#2D6A4F' }}>Read Paper →</span>
                )}
              </div>
            </a>
          ))}
        </div>

        <p style={{ marginTop: '36px', fontSize: '0.85rem', color: '#A8A29E', textAlign: 'center' }}>
          Research notes coming soon — follow on{' '}
          <a href="https://www.linkedin.com/in/aniket-sakpal/" target="_blank" rel="noopener noreferrer" style={{ color: '#2D6A4F', textDecoration: 'none' }}>
            LinkedIn
          </a>{' '}
          for updates.
        </p>
      </div>
    </section>
  )
}
