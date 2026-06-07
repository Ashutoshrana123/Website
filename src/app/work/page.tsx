'use client';
import { motion } from 'framer-motion';

const works = [
  {
    num: '001',
    client: 'Leading Bollywood Actor',
    cat: 'Celebrity PR',
    title: 'National Press Relaunch',
    desc: 'A strategic PR campaign to reintroduce a veteran Bollywood actor post a 2-year hiatus — coordinating 30+ exclusive interviews, magazine covers, and OTT announcement placements.',
    results: ['2M+ digital reach', '30+ media features', '12 magazine covers'],
    year: '2025',
    color: '#0d0a14',
    accent: '#9b7ec8',
  },
  {
    num: '002',
    client: 'Luxury Fashion House',
    cat: 'Brand PR',
    title: 'Brand Repositioning Campaign',
    desc: 'Complete brand narrative overhaul for an Indian fashion label entering the luxury segment, with editorial placements in Vogue India, Harper\'s Bazaar, and GQ.',
    results: ['40+ publications', '5 editorial shoots', '300% share of voice increase'],
    year: '2025',
    color: '#0a0d14',
    accent: '#7ea0c8',
  },
  {
    num: '003',
    client: 'Tech Startup',
    cat: 'Event PR',
    title: 'Series B Funding Launch Event',
    desc: 'End-to-end PR for a high-profile funding announcement event — managing 200+ journalists, coordinating keynote press coverage, and generating national business press.',
    results: ['500+ media mentions', '200+ press attendees', 'National TV coverage'],
    year: '2024',
    color: '#120e18',
    accent: '#a47ac4',
  },
  {
    num: '004',
    client: 'D2C Beauty Brand',
    cat: 'Influencer Marketing',
    title: 'Mega Launch Creator Campaign',
    desc: 'Coordinated 150+ beauty creators across Instagram and YouTube for a new skincare line launch, achieving viral reach within the first 48 hours.',
    results: ['5M+ impressions', '150+ creators', '48hr viral trend'],
    year: '2024',
    color: '#0a140a',
    accent: '#7ec87e',
  },
];

export default function WorkPage() {
  const containerVariants: any = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <div>
      {/* Hero */}
      <div style={{ paddingTop: '9rem', paddingBottom: '6rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', maxWidth: '80rem', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <span className="gold-line" />
          <span className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)' }}>Portfolio</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }} className="font-display" style={{ fontSize: 'clamp(3.75rem, 6vw, 6rem)', lineHeight: 1, marginBottom: '1.5rem', color: 'var(--white)' }}>
          Work That<br />
          <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>Made Headlines.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.9, ease: 'easeOut' }} className="font-body" style={{ fontSize: '1.125rem', maxWidth: '42rem', lineHeight: 1.6, color: 'var(--white-dim)' }}>
          A selection of campaigns that moved the needle — in reach, reputation, and revenue.
        </motion.p>
      </div>

      {/* Case Studies */}
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem 7rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {works.map((w) => (
          <motion.div
            key={w.num}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="card-hover group"
            style={{
              position: 'relative', overflow: 'hidden', padding: '3rem',
              background: w.color,
              border: '1px solid var(--border)'
            }}
          >
            <div style={{
              position: 'absolute', inset: 0, zIndex: 0,
              background: `radial-gradient(ellipse at 80% 50%, ${w.accent}18 0%, transparent 60%)`,
            }} />

            <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
              {/* Left */}
              <motion.div variants={itemVariants} style={{ flex: '0 0 3rem' }}>
                <span className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: w.accent }}>{w.num}</span>
              </motion.div>

              {/* Center */}
              <motion.div variants={itemVariants} style={{ flex: '2 1 300px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.75rem', background: `${w.accent}20`, color: w.accent, border: `1px solid ${w.accent}40` }}>
                    {w.cat}
                  </span>
                  <span className="font-body" style={{ fontSize: '0.75rem', color: 'var(--white-dim)' }}>{w.year}</span>
                </div>
                <div className="font-body" style={{ fontSize: '0.875rem', marginBottom: '0.5rem', color: 'var(--white-dim)' }}>{w.client}</div>
                <h2 className="font-display" style={{ fontSize: 'clamp(2.25rem, 4vw, 3rem)', marginBottom: '1.5rem', color: 'var(--white)' }}>{w.title}</h2>
                <p className="font-body" style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--white-dim)' }}>{w.desc}</p>
              </motion.div>

              {/* Results */}
              <motion.div variants={itemVariants} style={{ flex: '1 1 200px' }}>
                <p className="font-heading" style={{ fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', color: w.accent }}>Results</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {w.results.map(r => (
                    <div key={r} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingBottom: '0.75rem', borderBottom: `1px solid ${w.accent}20` }}>
                      <span style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', flex: 'none', background: w.accent }} />
                      <span className="font-heading" style={{ fontSize: '0.875rem', color: 'var(--white)' }}>{r}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trusted by */}
      <div style={{ padding: '5rem 1.5rem', background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', textAlign: 'center' }}>
          <p className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '2.5rem', color: 'var(--white-dim)' }}>
            Trusted by Public Figures & Leading Brands
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem' }}>
            {['Entertainment', 'Fashion & Luxury', 'Tech Startups', 'FMCG Brands', 'Real Estate', 'Healthcare'].map(sector => (
              <div key={sector} className="font-display" style={{ fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--white-dim)' }}>
                {sector}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
