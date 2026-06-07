import { creativeItems } from '@/lib/data'

export default function Creative() {
  return (
    <section
      id="creative"
      style={{
        padding: '7rem 0',
        background: 'var(--dim-2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 3rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '5rem',
            alignItems: 'center',
          }}
        >
          {/* ── Left ──────────────────────────────────────── */}
          <div>
            <p className="section-label">Creative &amp; Media</p>
            <h2 className="section-title">
              Art fuels
              <br />
              <em>the work.</em>
            </h2>

            {/* Italic pull quote */}
            <blockquote
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                fontStyle: 'italic',
                color: 'var(--muted)',
                lineHeight: 1.7,
                borderLeft: '2px solid var(--gold)',
                paddingLeft: '1.5rem',
                marginBottom: '2rem',
              }}
            >
              &ldquo;The same instinct that makes a verse resonate makes an
              interface unforgettable.&rdquo;
            </blockquote>

            <p
              style={{
                fontSize: '0.85rem',
                color: 'var(--muted)',
                lineHeight: 1.8,
                fontFamily: 'var(--font-sans)',
              }}
            >
              As PrinceBreezy / NatePrince, I create music, rap, and
              motivational content — bringing the same discipline and
              intentionality to creative work as to engineering. Reliable
              freelance delivery on Upwork &amp; Fiverr.
            </p>
          </div>

          {/* ── Right: Items ──────────────────────────────── */}
          <div style={{ display: 'grid', gap: '1rem' }}>
            {creativeItems.map(({ icon, title, description }) => (
              <div
                key={title}
                className="creative-item"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.25rem',
                  border: '1px solid var(--border)',
                  transition: 'border-color 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor =
                    'rgba(201,150,58,0.3)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor =
                    'var(--border)')
                }
              >
                {/* Icon */}
                <div
                  aria-hidden="true"
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    background: 'rgba(201,150,58,0.1)',
                    border: '1px solid rgba(201,150,58,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>

                {/* Text */}
                <div>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      marginBottom: '0.3rem',
                      color: 'var(--paper)',
                      fontFamily: 'var(--font-sans)',
                    }}
                  >
                    {title}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      color: 'var(--muted)',
                      lineHeight: 1.6,
                      letterSpacing: '0.03em',
                    }}
                  >
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
