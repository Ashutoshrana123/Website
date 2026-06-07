'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: 'Professional, proactive, and highly connected in the media industry. They delivered beyond our expectations.',
    author: 'Priya Sharma',
    role: 'CEO, LuxBrand India',
    initial: 'P',
  },
  {
    quote: 'They transformed our brand image and visibility within months. Our media presence has grown 10x since partnering with Prestige PR.',
    author: 'Arjun Kapoor',
    role: 'Actor & Brand Ambassador',
    initial: 'A',
  },
  {
    quote: 'Excellent PR support for our product launches and press interviews. The team handles everything seamlessly.',
    author: 'Meera Nair',
    role: 'Founder, Luminara Fashion',
    initial: 'M',
  },
  {
    quote: 'Trusted, talented, and truly invested in our success. Prestige PR is not just an agency — they are partners.',
    author: 'Vikram Rajan',
    role: 'Managing Director, RajCorp',
    initial: 'V',
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ padding: '7rem 0', position: 'relative', overflow: 'hidden', background: 'var(--bg-3)' }}>
      {/* Decorative */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }} />

      <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <span className="gold-line" />
          <span className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)' }}>Testimonials</span>
          <span className="gold-line" style={{ transform: 'scaleX(-1)' }} />
        </div>

        <h2 className="font-display" style={{ fontSize: 'clamp(3rem, 6vw, 3.75rem)', marginBottom: '4rem', color: 'var(--white)' }}>
          What They <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>Say</span>
        </h2>

        {/* Quote */}
        <div style={{ minHeight: '250px', position: 'relative' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <div className="font-display" style={{ fontSize: '3.75rem', marginBottom: '1.5rem', color: 'var(--gold)', lineHeight: 1 }}>&ldquo;</div>
              <p className="font-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 1.875rem)', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '2.5rem', color: 'var(--white)' }}>
                {testimonials[active].quote}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                <div className="font-heading" style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.875rem', background: 'var(--gold)', color: 'var(--bg)' }}>
                  {testimonials[active].initial}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div className="font-heading" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--white)' }}>{testimonials[active].author}</div>
                  <div className="font-body" style={{ fontSize: '0.75rem', color: 'var(--gold)' }}>{testimonials[active].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginTop: '3rem' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{ cursor: 'none', transition: 'all 0.3s', width: i === active ? '2rem' : '0.5rem', height: '0.25rem', background: i === active ? 'var(--gold)' : 'var(--border)' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
