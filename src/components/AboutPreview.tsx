'use client';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, animate, useInView } from 'framer-motion';

function Counter({ from, to }: { from: number, to: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: 2.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function AboutPreview() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const containerVariants: any = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <section ref={ref} style={{ padding: '7rem 1.5rem', maxWidth: '80rem', margin: '0 auto', overflow: 'hidden' }}>
      {/* Header line */}
      <div style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <span className="gold-line" />
          <span className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)' }}>About Prestige PR</span>
        </div>
        <motion.div 
          initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{ height: '1px', background: 'var(--border)' }} 
        />
      </div>

      <motion.div 
        variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}
      >
        {/* Text */}
        <div style={{ flex: '1 1 400px' }}>
          <motion.h2 variants={itemVariants} className="font-display" style={{ fontSize: 'clamp(3rem, 6vw, 3.75rem)', lineHeight: 1.1, marginBottom: '2rem', color: 'var(--white)' }}>
            We Turn Your<br />
            Vision Into<br />
            <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>Visibility.</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="font-body" style={{ fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem', color: 'var(--white-dim)' }}>
            We are a modern PR & Event Management agency focused on creating impactful stories, strong media presence, and long-term brand value. With expertise across entertainment, fashion, corporate, and digital industries, we help individuals and businesses gain the attention they deserve.
          </motion.p>

          <motion.p variants={itemVariants} className="font-body" style={{ fontSize: '1rem', lineHeight: 1.6, marginBottom: '2.5rem', color: 'var(--white-dim)' }}>
            Our mission is simple: deliver measurable results through creative strategy, powerful relationships, and flawless execution — every time.
          </motion.p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {[
              { label: 'Strong Media Network', icon: '◆' },
              { label: 'Creative Campaigns', icon: '◆' },
              { label: 'Fast Execution', icon: '◆' },
              { label: 'Personalised Strategies', icon: '◆' },
            ].map((item) => (
              <motion.div variants={itemVariants} key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--gold)' }}>{item.icon}</span>
                <span className="font-body" style={{ fontSize: '0.875rem', color: 'var(--text)' }}>{item.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants}>
            <Link href="/about" className="btn-outline" style={{ textDecoration: 'none' }}>
              <span>Our Full Story</span>
              <span style={{ marginLeft: '0.5rem' }}>→</span>
            </Link>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div variants={itemVariants} style={{ flex: '1 1 400px', position: 'relative' }}>
          {/* Main card */}
          <div className="card-hover group" style={{ position: 'relative', height: '520px', overflow: 'hidden', border: '1px solid var(--border)' }}>
            
            {/* Parallax Image */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
              <motion.div style={{ position: 'absolute', inset: '-20%', y: yBg }}>
                <div className="card-bg-image" style={{
                  position: 'absolute', inset: 0, backgroundSize: 'cover', backgroundPosition: 'center',
                  backgroundImage: 'url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop")',
                  transition: 'transform 0.7s cubic-bezier(0.23,1,0.32,1)',
                }} />
              </motion.div>
            </div>
            <div className="card-overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }} />

            {/* Decorative interior */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, pointerEvents: 'none' }}>
              <div style={{ textAlign: 'center' }}>
                <motion.div 
                  animate={{ scale: [1, 1.05, 1], boxShadow: ["0px 0px 0px rgba(201,168,76,0)", "0px 0px 20px rgba(201,168,76,0.3)", "0px 0px 0px rgba(201,168,76,0)"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{ width: '5rem', height: '5rem', border: '1px solid var(--gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto', backdropFilter: 'blur(12px)', background: 'rgba(0,0,0,0.2)' }}
                >
                  <span className="font-display" style={{ fontSize: '1.875rem', fontStyle: 'italic', color: 'var(--gold)' }}>P</span>
                </motion.div>
              </div>
            </div>

            {/* Corner decorations */}
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '2rem', height: '2rem', borderLeft: '1px solid var(--gold)', borderTop: '1px solid var(--gold)' }} />
            <div style={{ position: 'absolute', top: '1rem', right: '1rem', width: '2rem', height: '2rem', borderRight: '1px solid var(--gold)', borderTop: '1px solid var(--gold)' }} />
            <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', width: '2rem', height: '2rem', borderLeft: '1px solid var(--gold)', borderBottom: '1px solid var(--gold)' }} />
            <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', width: '2rem', height: '2rem', borderRight: '1px solid var(--gold)', borderBottom: '1px solid var(--gold)' }} />
          </div>

          {/* Floating badge */}
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: 'absolute', bottom: '-2rem', left: '-2rem', padding: '1.5rem',
              background: 'rgba(10, 10, 10, 0.7)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderLeft: '3px solid var(--gold)',
              borderRadius: '16px',
              width: '180px',
              zIndex: 10,
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
            }}
          >
            <div className="font-heading" style={{ display: 'flex', alignItems: 'center', fontSize: '2rem', fontWeight: 700, marginBottom: '0.25rem', color: 'var(--gold)' }}>
              <Counter from={0} to={6} />+
            </div>
            <div className="font-body" style={{ fontSize: '0.875rem', color: 'var(--white-dim)' }}>Years of Excellence</div>
          </motion.div>

          {/* Floating media badge */}
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{
              position: 'absolute', top: '-1.5rem', right: '-1.5rem', padding: '1rem 1.5rem',
              background: 'linear-gradient(135deg, var(--gold) 0%, #b8923a 100%)',
              borderRadius: '40px',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              zIndex: 10,
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
            }}
          >
            <div className="font-heading" style={{ display: 'flex', alignItems: 'center', fontSize: '1.75rem', fontWeight: 800, color: 'var(--bg)' }}>
              <Counter from={0} to={100} />+
            </div>
            <div className="font-heading" style={{ fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--bg)', lineHeight: 1.2 }}>Media<br/>Features</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
