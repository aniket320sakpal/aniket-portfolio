'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Skills', href: '#skills' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: '68px',
        background: scrolled ? 'rgba(247,244,239,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid #E7E0D5' : '1px solid transparent',
        transition: 'all 0.3s ease',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 6%',
      }}
    >
      {/* Logo */}
      <a
        href="#about"
        style={{
          fontFamily: 'Lora, Georgia, serif',
          fontSize: '1.1rem',
          fontWeight: 600,
          color: '#1C1917',
          textDecoration: 'none',
          letterSpacing: '-0.01em',
        }}
      >
        Aniket <span style={{ color: '#2D6A4F' }}>Sakpal</span>
      </a>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#57534E',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#2D6A4F')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#57534E')}
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            style={{
              fontSize: '0.875rem',
              fontWeight: 500,
              color: '#fff',
              background: '#2D6A4F',
              padding: '8px 18px',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.background = '#215C42')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.background = '#2D6A4F')}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
