import { siteConfig } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        padding: '2rem 3rem',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem',
        flexWrap: 'wrap',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          color: 'var(--muted)',
          letterSpacing: '0.1em',
        }}
      >
        © {year} {siteConfig.name}. All rights reserved.
      </span>

      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1rem',
          fontStyle: 'italic',
          color: 'rgba(201,150,58,0.4)',
        }}
      >
        {siteConfig.aliases.join(' · ')}
      </span>

      <a
        href={siteConfig.github}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          color: 'var(--muted)',
          textDecoration: 'none',
          letterSpacing: '0.1em',
          transition: 'color 0.2s',
        }}
        onMouseEnter={(e) =>
          ((e.target as HTMLElement).style.color = 'var(--gold)')
        }
        onMouseLeave={(e) =>
          ((e.target as HTMLElement).style.color = 'var(--muted)')
        }
      >
        github.com/28dallas ↗
      </a>
    </footer>
  )
}
