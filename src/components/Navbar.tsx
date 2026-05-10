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
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          height: '68px',
          background: scrolled || menuOpen ? 'rgba(247,244,239,0.96)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(14px)' : 'none',
          borderBottom: scrolled || menuOpen ? '1px solid #E7E0D5' : '1px solid transparent',
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
            fontSize: '1.1rem', fontWeight: 600,
            color: '#1C1917', textDecoration: 'none', letterSpacing: '-0.01em',
          }}
        >
          Aniket <span style={{ color: '#2D6A4F' }}>Sakpal</span>
        </a>

        {/* Desktop links */}
        <ul className="nav-desktop" style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{ fontSize: '0.875rem', fontWeight: 500, color: '#57534E', textDecoration: 'none', letterSpacing: '0.01em', transition: 'color 0.2s' }}
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
              style={{ fontSize: '0.875rem', fontWeight: 500, color: '#fff', background: '#2D6A4F', padding: '8px 18px', borderRadius: '8px', textDecoration: 'none', transition: 'background 0.2s' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.background = '#215C42')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.background = '#2D6A4F')}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none', flexDirection: 'column', gap: '5px',
            background: 'none', border: 'none', cursor: 'pointer', padding: '4px',
          }}
          aria-label="Toggle menu"
        >
          <span style={{ display: 'block', width: '22px', height: '2px', background: '#1C1917', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: '#1C1917', transition: 'all 0.2s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: '#1C1917', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            position: 'fixed', top: '68px', left: 0, right: 0, zIndex: 99,
            background: 'rgba(247,244,239,0.98)', backdropFilter: 'blur(14px)',
            borderBottom: '1px solid #E7E0D5',
            padding: '16px 6% 24px',
            display: 'flex', flexDirection: 'column', gap: '4px',
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '1rem', fontWeight: 500, color: '#57534E', textDecoration: 'none', padding: '12px 0', borderBottom: '1px solid #F0EBE3' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{ marginTop: '8px', display: 'inline-block', fontSize: '0.9rem', fontWeight: 500, color: '#fff', background: '#2D6A4F', padding: '12px 20px', borderRadius: '8px', textDecoration: 'none', textAlign: 'center' }}
          >
            Contact
          </a>
        </div>
      )}
    </>
  )
}
