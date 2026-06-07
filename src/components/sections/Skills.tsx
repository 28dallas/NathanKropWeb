import { skillCategories } from '@/lib/data'

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: '7rem 0',
        background: 'var(--dim-2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 3rem' }}>
        <p className="section-label">Expertise</p>
        <h2 className="section-title">
          The <em>stack</em>
          <br />
          behind the work.
        </h2>

        {/* Skills grid */}
        <div
          style={{
            display: 'grid',
            gap: '1px',
            background: 'var(--border)',
          }}
        >
          {skillCategories.map(({ label, skills }) => (
            <div
              key={label}
              style={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                background: 'var(--dim)',
              }}
            >
              {/* Category label — vertical */}
              <div
                style={{
                  padding: '2rem',
                  borderRight: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    color: 'var(--gold)',
                    textTransform: 'uppercase',
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    transform: 'rotate(180deg)',
                  }}
                >
                  {label}
                </span>
              </div>

              {/* Tags */}
              <div
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  alignItems: 'center',
                }}
              >
                {skills.map(({ name, highlight }) => (
                  <span
                    key={name}
                    className="skill-tag"
                    style={{
                      padding: '0.4rem 1rem',
                      border: highlight
                        ? '1px solid rgba(201,150,58,0.4)'
                        : '1px solid var(--border)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.08em',
                      color: highlight ? 'var(--amber)' : 'var(--muted)',
                      transition: 'all 0.2s',
                      cursor: 'default',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget
                      el.style.borderColor = 'var(--gold)'
                      el.style.color = 'var(--gold)'
                      el.style.background = 'rgba(201,150,58,0.05)'
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget
                      el.style.borderColor = highlight
                        ? 'rgba(201,150,58,0.4)'
                        : 'var(--border)'
                      el.style.color = highlight ? 'var(--amber)' : 'var(--muted)'
                      el.style.background = 'transparent'
                    }}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
