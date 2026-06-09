'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const textVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <section ref={containerRef} style={{ position: 'relative', height: '100vh', minHeight: '700px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Background with Parallax */}
      <motion.div
        style={{
          position: 'absolute', inset: -50, zIndex: 0, y: yBg,
          backgroundImage: 'url("https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=2000&auto=format&fit=crop")',
          backgroundSize: 'cover', backgroundPosition: 'center',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(5,5,5,0.7) 100%)',
        }} />
      </motion.div>

      {/* Side label */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
        className="desktop-only" style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', flexDirection: 'column', alignItems: 'center', gap: '1rem', zIndex: 10 }}
      >
        <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
          <span className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)' }}>
            PR & Event Management
          </span>
        </div>
        <div style={{ width: '1px', height: '6rem', background: 'var(--gold)', opacity: 0.3 }} />
      </motion.div>


      {/* Content */}
      <motion.div 
        style={{ position: 'relative', zIndex: 10, maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', width: '100%', y: yText, opacity: opacityText }}
        initial="hidden" animate="visible" transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
      >
        <div style={{ maxWidth: '64rem' }}>
          <motion.div variants={textVariants} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <span className="gold-line" />
            <span className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              Est. 2026 · Mumbai
            </span>
          </motion.div>

          <motion.h1 variants={textVariants} className="font-display" style={{ fontSize: 'clamp(3rem, 6vw, 6.5rem)', lineHeight: 1.1, color: 'var(--white)', marginBottom: '2rem' }}>
            Elevating Brands,<br />
            Building Influence.
          </motion.h1>

          <motion.p variants={textVariants} className="font-body" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '42rem', color: 'var(--white-dim)' }}>
            We are a results-driven Public Relations & Event Management agency specializing in celebrity management, brand visibility, media placements, and reputation building.
          </motion.p>

          <motion.div variants={textVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>
              <span>Book a Consultation</span>
              <span style={{ marginLeft: '0.5rem' }}>→</span>
            </Link>
            <Link href="/work" className="btn-outline" style={{ textDecoration: 'none' }}>
              <span>View Our Work</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Stats bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }}
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, borderTop: '1px solid var(--border)', background: 'rgba(5,5,5,0.8)', backdropFilter: 'blur(20px)', zIndex: 10 }}
      >
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '1.25rem 1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1.5rem' }}>
          {[
            { num: '100+', label: 'Media Features' },
            { num: '50+', label: 'Campaigns' },
            { num: '20+', label: 'Celebrity Collabs' },
            { num: '1M+', label: 'Audience Reach' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center', flex: '1 1 100px' }}>
              <div className="font-heading" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 700, color: 'var(--gold)' }}>{s.num}</div>
              <div className="font-body" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem', color: 'var(--white-dim)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
