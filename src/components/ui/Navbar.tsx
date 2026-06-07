'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/lib/data'

const navLinks = [
  { href: '#about',    label: 'About'    },
  { href: '#skills',   label: 'Skills'   },
  { href: '#work',     label: 'Work'     },
  { href: '#creative', label: 'Creative' },
  { href: '#contact',  label: 'Contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.2rem 3rem',
        borderBottom: scrolled
          ? '1px solid rgba(201,150,58,0.2)'
          : '1px solid rgba(201,150,58,0.08)',
        backdropFilter: 'blur(12px)',
        background: scrolled
          ? 'rgba(10,10,8,0.85)'
          : 'rgba(10,10,8,0.4)',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.4rem',
          fontWeight: 300,
          letterSpacing: '0.15em',
          color: 'var(--paper)',
          textDecoration: 'none',
        }}
      >
        Neithan<span style={{ color: 'var(--gold)' }}>.</span>K
      </Link>

      {/* Desktop Nav */}
      <nav aria-label="Main navigation">
        <ul
          style={{
            display: 'flex',
            gap: '2.5rem',
            listStyle: 'none',
          }}
        >
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = 'var(--gold)')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = 'var(--muted)')
                }
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* CTA */}
      <a
        href={`mailto:${siteConfig.email}`}
        className="btn-primary"
        style={{ fontSize: '0.65rem', padding: '0.6rem 1.25rem' }}
      >
        Hire Me
      </a>
      {/* Mobile menu button */}
      <button
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: 'var(--paper)',
          fontSize: '1.4rem',
          cursor: 'pointer',
          padding: '0.25rem',
        }}
        className="mobile-menu-btn"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '56px',
            left: 0,
            right: 0,
            background: 'rgba(10,10,8,0.97)',
            borderBottom: '1px solid var(--border)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            zIndex: 99,
          }}
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                textDecoration: 'none',
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
