export default function Footer() {
  return (
    <footer style={{
      background: '#1C1917',
      color: '#A8A29E',
      padding: '40px 6%',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px',
    }}>
      <div>
        <div style={{ fontFamily: 'Lora, Georgia, serif', fontSize: '1rem', color: '#F7F4EF', marginBottom: '4px' }}>
          Aniket Sakpal
        </div>
        <div style={{ fontSize: '0.78rem', color: '#78716C' }}>
          © {new Date().getFullYear()} · ML Scientist · Austin, TX
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        {[
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aniket-sakpal/' },
          { label: 'Aitado', href: 'http://www.aitado.com' },
          { label: 'Email', href: 'mailto:aniket17sakpal@gmail.com' },
        ].map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.8rem', color: '#A8A29E', textDecoration: 'none', transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#52B788')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#A8A29E')}
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
