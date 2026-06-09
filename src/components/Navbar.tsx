'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Media', href: '/media' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.5s ease',
          padding: scrolled ? '1rem 0' : '1.5rem 0',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          background: scrolled ? 'rgba(5,5,5,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        <div style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <div style={{
              width: '2rem',
              height: '2rem',
              border: '1px solid var(--gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span className="font-heading" style={{ color: 'var(--gold)', fontWeight: 800, fontSize: '0.75rem' }}>GF</span>
            </div>
            <span className="font-heading" style={{ color: '#F5F0E8', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Golden Focus</span>
          </Link>

          {/* Desktop Links */}
          <div className="desktop-only" style={{ alignItems: 'center', gap: '2rem' }}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-heading"
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--white-dim)',
                  transition: 'color 0.3s',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--white-dim)'}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="desktop-only" style={{ alignItems: 'center', gap: '1rem' }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: '0.75rem', padding: '0.75rem 1.5rem', textDecoration: 'none' }}>
              <span>Book Consultation</span>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="mobile-only"
            onClick={() => setMenuOpen(true)}
            style={{
              flexDirection: 'column',
              gap: '0.375rem',
              padding: '0.5rem',
              cursor: 'none',
              background: 'transparent',
              border: 'none'
            }}
          >
            <span style={{ display: 'block', width: '1.5rem', height: '1px', background: 'var(--gold)' }} />
            <span style={{ display: 'block', width: '1rem', height: '1px', background: 'var(--white)' }} />
            <span style={{ display: 'block', width: '1.5rem', height: '1px', background: 'var(--gold)' }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '2.5rem',
              background: 'var(--bg-3)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="font-heading" style={{ color: '#fff', fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Golden Focus</span>
              <button onClick={closeMenu} className="font-heading" style={{ color: 'var(--gold)', fontSize: '1.5rem', cursor: 'none', background: 'transparent', border: 'none' }}>✕</button>
            </div>
            <motion.nav 
              initial="hidden" 
              animate="visible" 
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
                hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              {links.map((l) => (
                <motion.div variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } }} key={l.href}>
                  <Link
                    href={l.href}
                    onClick={closeMenu}
                    className="font-display"
                    style={{
                      fontSize: '3rem',
                      color: '#fff',
                      fontStyle: 'italic',
                      textDecoration: 'none',
                      transition: 'color 0.3s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <Link href="/contact" onClick={closeMenu} className="btn-primary" style={{ textDecoration: 'none' }}>
                <span>Book Consultation</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
