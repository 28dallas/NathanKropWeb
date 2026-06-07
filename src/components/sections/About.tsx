import Image from 'next/image'
import { stats } from '@/lib/data'

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: '7rem 0', position: 'relative' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 3rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '5rem',
            alignItems: 'start',
          }}
        >
          {/* ── Photo ──────────────────────────────────────── */}
          <div style={{ position: 'relative' }}>
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '-8px',
                left: '-8px',
                right: '8px',
                bottom: '8px',
                border: '1px solid rgba(201,150,58,0.2)',
                zIndex: 0,
              }}
            />
            <Image
              src="/img/graduation-2.jpg"
              alt="Nathan Krop holding his diploma"
              width={480}
              height={500}
              style={{
                width: '100%',
                height: '500px',
                objectFit: 'cover',
                objectPosition: 'top',
                filter: 'sepia(0.1) contrast(1.05)',
                display: 'block',
                position: 'relative',
                zIndex: 1,
              }}
            />
          </div>

          {/* ── Copy ──────────────────────────────────────── */}
          <div>
            <p className="section-label">About</p>
            <h2 className="section-title">
              Code with
              <br />
              <em>literary precision.</em>
            </h2>

            <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'rgba(245,240,232,0.75)', marginBottom: '1.5rem' }}>
              I&apos;m Nathan Krop — a Full-Stack Software Engineer based between{' '}
              <strong style={{ color: 'var(--paper)', fontWeight: 600 }}>
                Nairobi &amp; Eldoret, Kenya
              </strong>
              , building digital experiences that are as carefully crafted as they
              are technically sound.
            </p>

            <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'rgba(245,240,232,0.75)', marginBottom: '1.5rem' }}>
              My foundation is uncommon: a{' '}
              <strong style={{ color: 'var(--paper)', fontWeight: 600 }}>
                Software Engineering background from Moringa School
              </strong>{' '}
              layered onto an undergraduate grounding in{' '}
              <strong style={{ color: 'var(--paper)', fontWeight: 600 }}>
                English Literature
              </strong>
              . That combination shapes everything I build — the same instinct
              that makes prose compelling makes code readable, maintainable, and
              purposeful.
            </p>

            <p style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'rgba(245,240,232,0.75)', marginBottom: '1.5rem' }}>
              Beyond the terminal, I&apos;m an active{' '}
              <strong style={{ color: 'var(--paper)', fontWeight: 600 }}>
                Writer, Video / Photographer and content creator
              </strong>{' '}
              known as <em>PrinceNate4k</em> — channeling that same
              dedication to craft and expression into motivational digital art. I
              believe the best engineers are storytellers first.
            </p>

            {/* Stats grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem',
                marginTop: '2.5rem',
                paddingTop: '2.5rem',
                borderTop: '1px solid var(--border)',
              }}
            >
              {stats.map(({ num, label }) => (
                <div key={label}>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2.5rem',
                      fontWeight: 300,
                      color: 'var(--gold)',
                      lineHeight: 1,
                    }}
                  >
                    {num}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.15em',
                      color: 'var(--muted)',
                      textTransform: 'uppercase',
                      marginTop: '0.25rem',
                    }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
