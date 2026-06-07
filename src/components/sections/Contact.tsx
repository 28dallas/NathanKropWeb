'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/data'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = () => {
    // Wire up to your preferred email service (Resend, EmailJS, Formspree, etc.)
    // For now, opens the mailto as a fallback.
    const mailto = `mailto:${siteConfig.email}?subject=Portfolio Enquiry from ${form.name}&body=${encodeURIComponent(form.message)}`
    window.location.href = mailto
    setStatus('sent')
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'var(--dim)',
    border: '1px solid var(--border)',
    padding: '0.9rem 1rem',
    color: 'var(--paper)',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    resize: 'none' as const,
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.65rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'var(--muted)',
    marginBottom: '0.5rem',
  }

  return (
    <section
      id="contact"
      style={{
        padding: '7rem 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Giant watermark text */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'var(--font-display)',
          fontSize: '20vw',
          fontWeight: 300,
          color: 'rgba(201,150,58,0.03)',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          letterSpacing: '0.1em',
          userSelect: 'none',
        }}
      >
        CONTACT
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 3rem', position: 'relative', zIndex: 1 }}>
        <p className="section-label" style={{ justifyContent: 'center' }}>
          Contact
        </p>
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Let&apos;s build
          <br />
          <em>something.</em>
        </h2>

        {/* Form */}
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="name" style={labelStyle}>Your name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="First Last"
              value={form.name}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = 'var(--gold)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="email" style={labelStyle}>Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = 'var(--gold)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="message" style={labelStyle}>Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={handleChange}
              style={{ ...inputStyle, height: '130px' }}
              onFocus={(e) => (e.target.style.borderColor = 'var(--gold)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
            />
          </div>

          {status === 'sent' ? (
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--gold)',
                letterSpacing: '0.1em',
              }}
            >
              ✓ Message sent — I&apos;ll be in touch soon.
            </p>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={status === 'sending'}
              className="btn-primary"
              style={{ border: 'none', cursor: 'none' }}
            >
              {status === 'sending' ? 'Sending…' : 'Send Message →'}
            </button>
          )}
        </div>

        {/* Meta row */}
        <div
          style={{
            maxWidth: '600px',
            margin: '3rem auto 0',
            paddingTop: '3rem',
            borderTop: '1px solid var(--border)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '2rem',
            textAlign: 'left',
          }}
        >
          {[
            { label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
            { label: 'GitHub', value: 'github.com/28dallas', href: siteConfig.github },
            { label: 'Location', value: siteConfig.location, href: undefined },
          ].map(({ label, value, href }) => (
            <div key={label}>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  marginBottom: '0.4rem',
                }}
              >
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{
                    fontSize: '0.8rem',
                    color: 'rgba(245,240,232,0.7)',
                    fontFamily: 'var(--font-mono)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    wordBreak: 'break-all',
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = 'var(--gold)')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      'rgba(245,240,232,0.7)')
                  }
                >
                  {value}
                </a>
              ) : (
                <p
                  style={{
                    fontSize: '0.8rem',
                    color: 'rgba(245,240,232,0.7)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {value}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
