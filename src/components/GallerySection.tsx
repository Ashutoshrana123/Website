'use client';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const galleryItems = [
  { title: 'Brand Visual Identity', cat: 'AI Enhanced', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=2000&auto=format&fit=crop', accent: '#9b7ec8' },
  { title: 'Event Reel', cat: 'AI Post Production', image: 'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?q=80&w=2000&auto=format&fit=crop', accent: '#7ea0c8' },
  { title: 'Celebrity Portrait Series', cat: 'AI Retouching', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop', accent: '#c87e7e' },
  { title: 'Product Launch Film', cat: 'AI Color Grade', image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2000&auto=format&fit=crop', accent: '#7ec87e' },
  { title: 'Press Campaign Visuals', cat: 'AI Compositing', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop', accent: '#c8a87e' },
  { title: 'Social Content Pack', cat: 'AI Animation', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2000&auto=format&fit=crop', accent: '#7ec8b4' },
];

export default function GallerySection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  
  // Create alternating parallax speeds for odd/even items
  const y1 = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

  const containerVariants: any = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section ref={ref} style={{ padding: '7rem 1.5rem', maxWidth: '80rem', margin: '0 auto', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '4rem' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span className="gold-line" />
            <span className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)' }}>Gallery</span>
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: 'var(--white)', lineHeight: 1.1 }}>
            AI Post<br />
            <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>Production</span>
          </h2>
          <p className="font-body" style={{ fontSize: '1rem', marginTop: '1rem', maxWidth: '28rem', color: 'var(--white-dim)', lineHeight: 1.6 }}>
            We combine human creativity with AI-powered post production — delivering stunning visuals for every campaign.
          </p>
        </motion.div>
        <Link href="/media" className="btn-outline desktop-only" style={{ textDecoration: 'none' }}>
          <span>Full Gallery</span>
          <span style={{ marginLeft: '0.5rem' }}>→</span>
        </Link>
      </div>

      {/* Grid */}
      <motion.div 
        className="gallery-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {galleryItems.map((item, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className={`gallery-item card-hover group ${i === 0 || i === 4 ? 'gallery-span-2' : ''}`}
            style={{
              height: i === 0 || i === 4 ? 520 : 250,
              border: '1px solid var(--border)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Parallax Image Wrapper */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
              <motion.div style={{ position: 'absolute', inset: '-20%', y: i % 2 === 0 ? y1 : y2 }}>
                <div className="card-bg-image" style={{
                  position: 'absolute', inset: 0, backgroundSize: 'cover', backgroundPosition: 'center',
                  backgroundImage: `url("${item.image}")`,
                  transition: 'transform 0.7s cubic-bezier(0.23,1,0.32,1)',
                }} />
              </motion.div>
            </div>
            
            {/* Overlay */}
            <div className="card-overlay" style={{
              position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', transition: 'background-color 0.5s'
            }} />

            {/* Gradient accent */}
            <div style={{
              position: 'absolute', inset: 0, zIndex: 10,
              background: `radial-gradient(ellipse at center, ${item.accent}30 0%, transparent 70%)`,
            }} />

            {/* Decorative lines */}
            <div style={{ position: 'absolute', inset: '1.5rem', border: `1px solid ${item.accent}`, opacity: 0.2, zIndex: 10 }} />

            {/* Center icon */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 20 }}>
              <div className="card-center-icon" style={{
                width: '3rem', height: '3rem', borderRadius: '50%', border: `1px solid ${item.accent}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                opacity: 0.4, transition: 'opacity 0.3s', backdropFilter: 'blur(4px)', background: 'rgba(0,0,0,0.3)',
              }}>
                <span style={{ color: item.accent }}>✦</span>
              </div>
            </div>

            {/* Info */}
            <div className="card-info" style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.25rem', zIndex: 20,
              transform: 'translateY(0.5rem)', transition: 'transform 0.3s',
              background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)'
            }}>
              <span className="font-heading" style={{
                fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.5rem',
                borderRadius: '0.25rem', backdropFilter: 'blur(4px)', color: item.accent, background: 'rgba(0,0,0,0.5)'
              }}>{item.cat}</span>
              <h3 className="font-display" style={{ fontSize: '1.25rem', marginTop: '0.5rem', color: 'var(--white)', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{item.title}</h3>
            </div>

            {/* Hover view button */}
            <div className="card-hover-button" style={{
              position: 'absolute', top: '1rem', right: '1rem', opacity: 0, transition: 'opacity 0.3s', zIndex: 20
            }}>
              <span className="font-heading" style={{
                fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.375rem 0.75rem',
                backdropFilter: 'blur(12px)', background: 'rgba(0,0,0,0.6)', color: 'var(--gold)', border: '1px solid var(--gold)'
              }}>View</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
