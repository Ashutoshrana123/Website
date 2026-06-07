'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const works = [
  {
    cat: 'Celebrity PR',
    title: 'Actor Launch Campaign',
    year: '2025',
    result: '2M+ reach',
    image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=2000&auto=format&fit=crop',
    accent: '#C9A84C',
  },
  {
    cat: 'Brand PR',
    title: 'Fashion House Rebranding',
    year: '2025',
    result: '40+ publications',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop',
    accent: '#7aa8c4',
  },
  {
    cat: 'Event PR',
    title: 'Product Launch Gala',
    year: '2024',
    result: '500+ media mentions',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2000&auto=format&fit=crop',
    accent: '#a47ac4',
  },
  {
    cat: 'Influencer Marketing',
    title: 'Lifestyle Brand Campaign',
    year: '2024',
    result: '5M+ impressions',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2000&auto=format&fit=crop',
    accent: '#7ac47a',
  },
];

export default function WorkSection() {
  const containerVariants: any = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <section style={{ padding: '7rem 1.5rem', background: 'var(--bg)', maxWidth: '80rem', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '4rem' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span className="gold-line" />
            <span className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)' }}>Portfolio</span>
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: 'var(--white)', lineHeight: 1.1 }}>
            Our <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>Work</span>
          </h2>
        </motion.div>
        <Link href="/work" className="btn-outline desktop-only" style={{ textDecoration: 'none' }}>
          <span>View All</span>
          <span style={{ marginLeft: '0.5rem' }}>→</span>
        </Link>
      </div>

      {/* Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}
      >
        {works.map((w, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="card-hover group"
            style={{
              height: '450px',
              border: '1px solid var(--border)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Background Image */}
            <div className="card-bg-image" style={{
              position: 'absolute', inset: 0, backgroundSize: 'cover', backgroundPosition: 'center',
              backgroundImage: `url("${w.image}")`,
              transition: 'transform 0.7s cubic-bezier(0.23,1,0.32,1)',
            }} />
            
            {/* Overlay */}
            <div className="card-overlay" style={{
              position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', transition: 'background-color 0.5s'
            }} />
            
            <div style={{
              position: 'absolute', inset: 0,
              background: `radial-gradient(ellipse at 70% 50%, ${w.accent}20 0%, transparent 60%)`,
            }} />

            <div style={{ position: 'absolute', inset: 0, padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', zIndex: 10 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <span className="font-heading" style={{
                  fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.5rem 1rem', backdropFilter: 'blur(12px)',
                  background: 'rgba(0,0,0,0.4)',
                  color: w.accent,
                  border: `1px solid ${w.accent}40`,
                }}>
                  {w.cat}
                </span>
                <span className="font-heading" style={{ fontSize: '0.75rem', padding: '0.5rem 0.75rem', backdropFilter: 'blur(12px)', borderRadius: '0.375rem', background: 'rgba(0,0,0,0.5)', color: 'var(--white)' }}>{w.year}</span>
              </div>

              <div>
                <h3 className="font-display" style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', marginBottom: '1rem', color: 'var(--white)', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{w.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ width: '1.5rem', height: '1px', background: w.accent }} />
                  <span className="font-heading" style={{ fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: w.accent, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{w.result}</span>
                </div>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="card-hover-overlay" style={{
              position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s', zIndex: 20, background: 'rgba(0,0,0,0.4)'
            }}>
              <span className="font-heading" style={{ fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.75rem 1.5rem', border: '1px solid var(--gold)', backdropFilter: 'blur(12px)', color: 'var(--gold)', background: 'rgba(0,0,0,0.4)' }}>
                View Case Study →
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Mobile View All */}
      <div className="mobile-only" style={{ paddingTop: '3rem', width: '100%' }}>
        <Link href="/work" className="btn-outline" style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}>
          <span>View All Work</span>
        </Link>
      </div>
    </section>
  );
}
