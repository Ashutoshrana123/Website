'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Celebrity PR', 'Brand PR', 'Event PR', 'AI Post Production'];

const mediaItems = [
  { id: 1, cat: 'Celebrity PR', title: 'Actor Press Launch', type: 'Photo', color: '#0d0a14', accent: '#9b7ec8', size: 'large', image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, cat: 'Event PR', title: 'Fashion Gala 2025', type: 'Event', color: '#0a0d14', accent: '#7ea0c8', size: 'small', image: 'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, cat: 'AI Post Production', title: 'Brand Visual Series', type: 'AI', color: '#140a0a', accent: '#c87e7e', size: 'small', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1000&auto=format&fit=crop' },
  { id: 4, cat: 'Brand PR', title: 'Corporate Rebrand', type: 'Photo', color: '#0a140a', accent: '#7ec87e', size: 'large', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop' },
  { id: 5, cat: 'AI Post Production', title: 'Event Reel Grading', type: 'AI', color: '#14100a', accent: '#c8a87e', size: 'small', image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1000&auto=format&fit=crop' },
  { id: 6, cat: 'Celebrity PR', title: 'Influencer Campaign', type: 'Photo', color: '#0a1210', accent: '#7ec8b4', size: 'small', image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1000&auto=format&fit=crop' },
  { id: 7, cat: 'Event PR', title: 'Product Launch', type: 'Event', color: '#10140a', accent: '#b4c87e', size: 'small', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop' },
  { id: 8, cat: 'AI Post Production', title: 'Portrait Series AI', type: 'AI', color: '#14080a', accent: '#c87ea0', size: 'large', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop' },
  { id: 9, cat: 'Brand PR', title: 'Startup Media Kit', type: 'Photo', color: '#080a14', accent: '#7e90c8', size: 'small', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1000&auto=format&fit=crop' },
];

const press = [
  { pub: 'Times of India', title: 'Top PR Agency in Mumbai 2025', date: 'Jan 2025' },
  { pub: 'Hindu Business Line', title: 'Celebrity PR Trends: Golden Focus featured', date: 'Mar 2025' },
  { pub: 'Vogue India', title: 'The Faces Behind Fashion PR', date: 'Feb 2025' },
  { pub: 'Economic Times', title: 'PR Agencies Redefining Brand Stories', date: 'Apr 2025' },
  { pub: 'Filmfare', title: '20 Most Influential PR Pros in Bollywood', date: 'Dec 2024' },
];

export default function MediaPage() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? mediaItems : mediaItems.filter(m => m.cat === active);

  return (
    <div>
      {/* Hero */}
      <div style={{ paddingTop: '9rem', paddingBottom: '4rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', maxWidth: '80rem', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <span className="gold-line" />
          <span className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)' }}>Media & Gallery</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }} className="font-display" style={{ fontSize: 'clamp(3.75rem, 6vw, 6rem)', lineHeight: 1, marginBottom: '1.5rem', color: 'var(--white)' }}>
          Press, Stories &<br />
          <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>Visual Work.</span>
        </motion.h1>
      </div>

      {/* Filter tabs */}
      <div style={{ padding: '0 1.5rem', maxWidth: '80rem', margin: '0 auto 2.5rem auto', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              cursor: 'none', transition: 'all 0.3s',
              padding: '0.5rem 1rem', border: '1px solid',
              fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase',
              background: active === cat ? 'var(--gold)' : 'transparent',
              color: active === cat ? 'var(--bg)' : 'var(--white-dim)',
              borderColor: active === cat ? 'var(--gold)' : 'var(--border)'
            }}
            className="font-heading"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <motion.div layout className="gallery-grid" style={{ padding: '0 1.5rem 7rem 1.5rem', maxWidth: '80rem', margin: '0 auto' }}>
        <AnimatePresence>
          {filtered.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              key={item.id}
              className={`media-item card-hover group ${item.size === 'large' ? 'gallery-span-2' : ''}`}
              style={{
                height: item.size === 'large' ? 480 : 220,
                background: item.color,
                border: '1px solid var(--border)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div className="card-bg-image" style={{
                position: 'absolute', inset: 0, backgroundSize: 'cover', backgroundPosition: 'center',
                backgroundImage: `url("${item.image}")`,
                opacity: 0.3, transition: 'transform 0.7s, opacity 0.3s'
              }} />

              <div style={{
                position: 'absolute', inset: 0,
                background: `radial-gradient(ellipse at center, ${item.accent}30 0%, transparent 65%)`,
              }} />
              <div className="card-hover-overlay" style={{
                position: 'absolute', inset: '1rem', border: `1px solid ${item.accent}`, opacity: 0, transition: 'opacity 0.3s'
              }} />

              {/* Center visual */}
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: '2.25rem', opacity: 0.15, color: item.accent }}>✦</div>
              </div>

              <div className="card-info" style={{ 
                position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.25rem', 
                background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                transform: 'translateY(0.5rem)', transition: 'transform 0.3s'
              }}>
                <div className="font-heading" style={{ fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem', color: item.accent }}>{item.cat} · {item.type}</div>
                <div className="font-display" style={{ fontSize: '1.25rem', color: 'var(--white)' }}>{item.title}</div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Press Coverage */}
      <div style={{ padding: '6rem 1.5rem', background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span className="gold-line" />
            <span className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)' }}>In the Press</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="font-display" style={{ fontSize: 'clamp(3rem, 5vw, 3.75rem)', marginBottom: '4rem', color: 'var(--white)' }}>
            As Featured <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>In.</span>
          </motion.h2>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
            {press.map((p, i) => (
              <motion.div variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }} key={i} className="press-item group" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 0', borderBottom: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <span className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', width: '8rem', color: 'var(--gold)' }}>{p.pub}</span>
                  <span className="font-display card-icon" style={{ fontSize: '1.25rem', color: 'var(--white)', transition: 'color 0.3s' }}>{p.title}</span>
                </div>
                <span className="font-body desktop-only" style={{ fontSize: '0.75rem', color: 'var(--white-dim)' }}>{p.date}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
