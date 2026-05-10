import { blogPosts } from '@/data/content'

export default function Blog() {
  return (
    <section
      id="blog"
      style={{
        background: '#fff',
        borderTop: '1px solid #E7E0D5',
        borderBottom: '1px solid #E7E0D5',
        padding: '100px 6%',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2D6A4F', marginBottom: '12px' }}>
          Blog & writing
        </div>
        <h2 style={{
          fontFamily: 'Lora, Georgia, serif',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
          fontWeight: 600, letterSpacing: '-0.02em', color: '#1C1917',
          marginBottom: '16px',
        }}>
          Thoughts on ML in production
        </h2>
        <p style={{ fontSize: '0.95rem', color: '#57534E', marginBottom: '52px', maxWidth: '560px' }}>
          Writing about what I've actually learned shipping agentic AI, search systems, and ML infrastructure at scale.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {blogPosts.map((post) => (
            <a
              key={post.title}
              href={post.href}
              style={{
                background: post.coming ? '#F7F4EF' : '#F7F4EF',
                border: post.coming ? '1.5px dashed #D1CBC0' : '1px solid #E7E0D5',
                borderRadius: '12px',
                padding: '28px',
                textDecoration: 'none',
                display: 'flex', flexDirection: 'column',
                transition: 'transform 0.25s, box-shadow 0.25s',
                cursor: post.coming ? 'default' : 'pointer',
                opacity: post.coming ? 0.85 : 1,
              }}
              onClick={(e) => post.coming && e.preventDefault()}
              onMouseEnter={(e) => {
                if (!post.coming) {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 10px 28px rgba(0,0,0,0.07)'
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'none'
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <span style={{
                  fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase',
                  color: '#2D6A4F', background: '#D8F3DC', padding: '3px 9px', borderRadius: '100px',
                }}>
                  {post.category}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#A8A29E' }}>{post.readTime}</span>
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

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '18px' }}>
                <span style={{ fontSize: '0.75rem', color: '#A8A29E' }}>{post.date}</span>
                {post.coming ? (
                  <span style={{ fontSize: '0.72rem', color: '#A8A29E', fontStyle: 'italic' }}>Coming soon</span>
                ) : (
                  <span style={{ fontSize: '1rem', color: '#2D6A4F' }}>→</span>
                )}
              </div>
            </a>
          ))}
        </div>

        <p style={{ marginTop: '36px', fontSize: '0.85rem', color: '#A8A29E', textAlign: 'center' }}>
          Articles coming soon — follow on{' '}
          <a href="https://www.linkedin.com/in/aniket-sakpal/" target="_blank" rel="noopener noreferrer" style={{ color: '#2D6A4F', textDecoration: 'none' }}>
            LinkedIn
          </a>{' '}
          for updates.
        </p>
      </div>
    </section>
  )
}
