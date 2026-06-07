import Image from 'next/image'
import { siteConfig } from '@/lib/data'

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        padding: '0 3rem',
        paddingTop: '6rem',
        gap: '4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background:
            'radial-gradient(ellipse, rgba(201,150,58,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Left: Copy ─────────────────────────────────────── */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Tag line */}
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <span
            style={{ width: '2rem', height: '1px', background: 'var(--gold)', display: 'inline-block' }}
          />
          {siteConfig.title}
        </p>

        {/* Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 5vw, 5rem)',
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}
        >
          Building
          <br />
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>clean code</em>
          <br />
          that tells
          <br />a story.
        </h1>

        {/* Sub */}
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--muted)',
            lineHeight: 1.8,
            marginBottom: '2.5rem',
            letterSpacing: '0.05em',
          }}
        >
          Software Engineer · Media Creator · Writer
          <br />
          {siteConfig.location} ↗ Global
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <a href="#work" className="btn-primary">
            View Work
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {[
            { href: siteConfig.github, label: 'GitHub' },
            { href: `mailto:${siteConfig.email}`, label: 'Email' },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--muted)',
                textDecoration: 'none',
                letterSpacing: '0.1em',
                transition: 'color 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--gold)')
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = 'var(--muted)')
              }
            >
              ↗ {label}
            </a>
          ))}
        </div>
      </div>

      {/* ── Right: Photo ────────────────────────────────────── */}
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'relative', width: '420px', maxWidth: '100%' }}>
          {/* Offset border frame */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: '-12px',
              border: '1px solid rgba(201,150,58,0.3)',
              zIndex: 0,
            }}
          />

          {/* Photo */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Image
              src="/img/graduation-1.jpg"
              alt="Nathan Krop — graduation portrait"
              width={420}
              height={560}
              priority
              style={{
                width: '100%',
                height: '560px',
                objectFit: 'cover',
                objectPosition: 'top',
                filter: 'contrast(1.05) brightness(0.95)',
                display: 'block',
              }}
            />
          </div>

          {/* Vertical badge */}
          <div
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '-2rem',
              background: 'var(--gold)',
              color: 'var(--ink)',
              padding: '0.5rem 1rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              writingMode: 'vertical-rl',
              zIndex: 2,
            }}
          >
            Class of 2026
          </div>

          {/* Name watermark */}
          <span
            style={{
              position: 'absolute',
              bottom: '-1.5rem',
              right: 0,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              color: 'var(--gold)',
              textTransform: 'uppercase',
            }}
          >
            Nathan Krop
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
        }}
      >
        Scroll
      </div>
    </section>
  )
}
