'use client';
import { motion } from 'framer-motion';

const clients = [
  'VOGUE INDIA', 'GQ MAGAZINE', 'HARPER\'S BAZAAR', 'RELIANCE BRANDS',
  'NETFLIX INDIA', 'AMAZON PRIME', 'YASH RAJ FILMS', 'DHARMA PRODUCTIONS',
  'NYKAA', 'TATA LUXURY'
];

export default function MarqueeSection() {
  return (
    <div style={{ padding: '2rem 0', background: 'var(--gold)', overflow: 'hidden' }}>
      <motion.div
        className="marquee-track"
        style={{ display: 'flex', whiteSpace: 'nowrap' }}
        animate={{ x: [0, -1000] }}
        transition={{ ease: 'linear', duration: 15, repeat: Infinity }}
      >
        {[...clients, ...clients, ...clients].map((client, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '0 2rem' }}>
            <span className="font-heading" style={{ fontSize: '1.5rem', letterSpacing: '0.1em', color: 'var(--bg)', fontWeight: 700 }}>
              {client}
            </span>
            <span style={{ margin: '0 2rem', fontSize: '1.5rem', color: 'var(--bg)', opacity: 0.5 }}>✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
