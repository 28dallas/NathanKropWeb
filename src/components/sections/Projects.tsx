'use client'

import { useState } from 'react'
import { projects } from '@/lib/data'

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="work" style={{ padding: '7rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 3rem' }}>
        <p className="section-label">Projects</p>
        <h2 className="section-title">
          Selected
          <br />
          <em>work.</em>
        </h2>
      </div>

      {/* Projects grid — full bleed with container max-width */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 3rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1px',
          background: 'var(--border)',
        }}
      >
        {projects.map((project, i) => (
          <div
            key={project.num}
            className="project-card"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              background: hoveredIndex === i ? 'var(--card)' : 'var(--dim)',
              padding: '2.5rem',
              transition: 'background 0.2s ease',
              cursor: 'none',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Left accent bar */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '3px',
                height: hoveredIndex === i ? '100%' : '0',
                background: 'var(--gold)',
                transition: 'height 0.3s ease',
              }}
            />

            {/* Number */}
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '3rem',
                fontWeight: 300,
                color: 'rgba(201,150,58,0.15)',
                lineHeight: 1,
                marginBottom: '1rem',
              }}
            >
              {project.num}
            </p>

            {/* Title */}
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 500,
                marginBottom: '0.75rem',
                lineHeight: 1.2,
                color: 'var(--paper)',
              }}
            >
              {project.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: '0.82rem',
                color: 'var(--muted)',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {project.description}
            </p>

            {/* Tech tags */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1.5rem',
              }}
            >
              {project.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.08em',
                    color: 'var(--gold)',
                    background: 'rgba(201,150,58,0.08)',
                    padding: '0.25rem 0.6rem',
                    border: '1px solid rgba(201,150,58,0.2)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Link */}
            {project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = 'var(--gold)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = 'var(--muted)')
                }
              >
                {project.linkLabel} →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
