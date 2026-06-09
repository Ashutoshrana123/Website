'use client';
import Link from 'next/link';

const services = ['Celebrity PR', 'Brand PR', 'Press Releases', 'Influencer Marketing', 'Event PR', 'Crisis Management'];
const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/work' },
  { label: 'Media', href: '/media' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
      {/* Top CTA Band */}
      <div style={{ padding: '5rem 1.5rem', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
        <p className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--gold)' }}>
          Ready to Elevate?
        </p>
        <h2 className="font-display" style={{ fontSize: 'clamp(3.75rem, 8vw, 6rem)', marginBottom: '2rem', color: 'var(--white)', lineHeight: 1.1 }}>
          Let&apos;s Build Your<br />
          <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>Brand Story.</span>
        </h2>
        <Link href="/contact" className="btn-primary" style={{ fontSize: '0.875rem', textDecoration: 'none' }}>
          <span>Book a Free Consultation</span>
          <span style={{ marginLeft: '0.5rem' }}>→</span>
        </Link>
      </div>

      {/* Main Footer */}
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '4rem 1.5rem', display: 'flex', flexWrap: 'wrap', gap: '3rem' }}>
        {/* Brand */}
        <div style={{ flex: '1 1 400px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '2rem', height: '2rem', border: '1px solid var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* <span className="font-heading" style={{ color: 'var(--gold)', fontWeight: 800, fontSize: '0.75rem' }}>P</span> */}
              <span className="font-heading" style={{ color: 'var(--gold)', fontWeight: 800, fontSize: '0.75rem' }}>GF</span>
            </div>
            <span className="font-heading" style={{ color: '#fff', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Golden Focus</span>
          </div>
          <p className="font-body" style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: '24rem', color: 'var(--white-dim)' }}>
            A results-driven Public Relations agency specializing in celebrity management, brand visibility, media placements, and reputation building.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {['Instagram', 'LinkedIn', 'Twitter', 'YouTube'].map(s => (
              <a 
                key={s} 
                href="#" 
                className="font-heading" 
                style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--white-dim)', textDecoration: 'none', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--white-dim)'}
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div style={{ flex: '1 1 150px' }}>
          <h4 className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem', color: 'var(--gold)' }}>Navigation</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {quickLinks.map(l => (
              <li key={l.href}>
                <Link 
                  href={l.href} 
                  className="font-body" 
                  style={{ fontSize: '0.875rem', color: 'var(--white-dim)', textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--white-dim)'}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div style={{ flex: '1 1 200px' }}>
          <h4 className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem', color: 'var(--gold)' }}>Services</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {services.map(s => (
              <li key={s}>
                <span className="font-body" style={{ fontSize: '0.875rem', color: 'var(--white-dim)' }}>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ 
        maxWidth: '80rem', 
        margin: '0 auto', 
        padding: '1.5rem', 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        gap: '1rem',
        borderTop: '1px solid var(--border)' 
      }}>
        <p className="font-body" style={{ fontSize: '0.75rem', color: 'var(--white-dim)', margin: 0 }}>
          © {new Date().getFullYear()} Golden Focus Agency. All rights reserved.
        </p>
        <p className="font-body" style={{ fontSize: '0.75rem', color: 'var(--white-dim)', margin: 0 }}>
          Privacy Policy · Terms of Service
        </p>
      </div>
    </footer>
  );
}
