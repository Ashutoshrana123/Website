'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Celebrity PR',
    desc: 'Managing public image, media interviews, launches, and personal branding for actors, influencers, and artists.',
    tags: ['Image Management', 'Media Interviews', 'Personal Branding'],
    icon: '★',
    image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2000&auto=format&fit=crop',
  },
  {
    num: '02',
    title: 'Brand PR',
    desc: 'Helping businesses gain recognition through strategic media outreach, storytelling, and positioning.',
    tags: ['Media Outreach', 'Brand Positioning', 'Storytelling'],
    icon: '◈',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop',
  },
  {
    num: '03',
    title: 'Press Releases',
    desc: 'Professional press release writing and placement across leading publications and media houses.',
    tags: ['Press Writing', 'Media Placement', 'Publications'],
    icon: '✦',
    image: 'https://images.unsplash.com/photo-1585241936939-f41e57c8d9e6?q=80&w=2000&auto=format&fit=crop',
  },
  {
    num: '04',
    title: 'Influencer Marketing',
    desc: 'Connecting brands with the right creators for maximum impact, authentic reach, and conversion.',
    tags: ['Creator Connect', 'Campaign Strategy', 'Analytics'],
    icon: '⟡',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2000&auto=format&fit=crop',
  },
  {
    num: '05',
    title: 'Event PR',
    desc: 'Media coverage, guest coordination, and promotional buzz for launches, galas, and events.',
    tags: ['Event Coverage', 'Guest Coordination', 'Buzz Generation'],
    icon: '◉',
    image: 'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?q=80&w=2000&auto=format&fit=crop',
  },
  {
    num: '06',
    title: 'Crisis Management',
    desc: 'Protecting and rebuilding brand reputation during challenging situations with speed and precision.',
    tags: ['Reputation Repair', 'Media Strategy', 'Crisis Comms'],
    icon: '⬡',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop',
  },
];

export default function ServicesSection() {
  const containerVariants: any = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <section style={{ padding: '8rem 1.5rem', background: 'var(--bg-2)', borderTop: '1px solid var(--border)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={containerVariants}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '2rem', marginBottom: '4rem' }}
        >
          <div>
            <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span className="gold-line" />
              <span className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                What We Do
              </span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="font-display" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', lineHeight: 1.1, color: 'var(--white)' }}>
              Our <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>Services.</span>
            </motion.h2>
          </div>
          
          <motion.div variants={itemVariants}>
            <Link href="/services" className="font-heading card-hover" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--white)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>All Services</span>
              <span>→</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Infinite scrolling marquee for services */}
        <div style={{ overflow: 'hidden', paddingBottom: '2rem' }}>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}
            className="marquee-track" 
            style={{ display: 'flex', width: 'max-content', animationDuration: '35s' }}
          >
            {/* We render two identical sets of cards for a seamless infinite loop */}
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} style={{ display: 'flex', gap: '1.5rem', paddingRight: '1.5rem' }}>
                {services.map((s, i) => (
                  <motion.div
                    key={`${setIndex}-${i}`}
                    variants={itemVariants}
                    className="card-hover group"
                    style={{
                      flex: '0 0 auto',
                      width: '360px',
                      height: '420px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '2rem',
                      position: 'relative',
                      overflow: 'hidden',
                      border: '1px solid var(--border)',
                      borderLeft: '1px solid var(--gold)',
                    }}
                  >
                    {/* Background Image */}
                    <div className="card-bg-image" style={{
                      position: 'absolute', inset: 0, backgroundSize: 'cover', backgroundPosition: 'center',
                      backgroundImage: `url("${s.image}")`,
                      opacity: 0.6, transition: 'opacity 0.7s, transform 0.7s', transform: 'scale(1.05)'
                    }} />
                    
                    <div className="card-overlay" style={{
                      position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(22,22,22,0.5) 0%, rgba(5,5,5,0.8) 100%)', transition: 'background-color 0.5s'
                    }} />

                    {/* Top */}
                    <div style={{ position: 'relative', zIndex: 10 }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                        <span className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textShadow: '0 2px 4px rgba(0,0,0,0.5)', color: 'var(--gold)' }}>{s.num}</span>
                        <span className="card-icon" style={{ fontSize: '1.5rem', color: 'var(--white-dim)', transition: 'color 0.3s', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{s.icon}</span>
                      </div>
                      <h3 className="font-display" style={{ fontSize: '1.875rem', marginBottom: '1rem', color: 'var(--white)', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{s.title}</h3>
                      <p className="font-body" style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--white-dim)', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>{s.desc}</p>
                    </div>

                    {/* Tags */}
                    <div style={{ position: 'relative', zIndex: 10 }}>
                      <div className="card-divider" style={{ height: '1px', marginBottom: '1.5rem', background: 'var(--border)', transition: 'background-color 0.3s' }} />
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {s.tags.map(tag => (
                          <span key={tag} className="font-heading" style={{
                            fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.25rem 0.75rem',
                            backdropFilter: 'blur(12px)',
                            background: 'rgba(201,168,76,0.1)',
                            color: 'var(--gold)',
                            border: '1px solid rgba(201,168,76,0.3)',
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
