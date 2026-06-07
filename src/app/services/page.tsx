'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Celebrity PR',
    icon: '★',
    shortDesc: 'Managing public image for actors, influencers, and artists.',
    fullDesc: 'We specialize in 360° celebrity management — from crafting compelling media narratives to coordinating exclusive interviews, product endorsements, and public appearances. Our network spans Bollywood, regional cinema, digital creators, and international talent.',
    offerings: ['Public Image Strategy', 'Media Interview Coordination', 'Personal Branding', 'Endorsement Management', 'Launch Event PR', 'Social Media Persona'],
    accent: '#C9A84C',
  },
  {
    num: '02',
    title: 'Brand PR',
    icon: '◈',
    shortDesc: 'Strategic media outreach and storytelling for businesses.',
    fullDesc: 'We help brands find and amplify their authentic voice. From startup launches to Fortune 500 repositioning, our brand PR services build lasting media relationships and generate the kind of press coverage that drives real business results.',
    offerings: ['Brand Narrative Development', 'Media Outreach Campaigns', 'Corporate Communications', 'Product Launch PR', 'Industry Thought Leadership', 'Investor Relations Support'],
    accent: '#7aa8c4',
  },
  {
    num: '03',
    title: 'Press Releases',
    icon: '✦',
    shortDesc: 'Professional writing and placement in leading publications.',
    fullDesc: 'Our editorial team crafts press releases that editors actually want to publish. We combine compelling storytelling with strategic placement across 500+ media partners — from national dailies to niche industry publications.',
    offerings: ['Press Release Writing', 'Wire Distribution', 'National Publication Placement', 'Digital Media Coverage', 'Regional Language Outreach', 'Media List Management'],
    accent: '#c8a87e',
  },
  {
    num: '04',
    title: 'Influencer Marketing',
    icon: '⟡',
    shortDesc: 'Connecting brands with creators for authentic reach.',
    fullDesc: 'We manage end-to-end influencer campaigns — from creator discovery and negotiations to content briefing, delivery tracking, and performance analytics. Our network includes 5,000+ vetted creators across Instagram, YouTube, and emerging platforms.',
    offerings: ['Creator Discovery & Vetting', 'Campaign Strategy', 'Contract Negotiation', 'Content Briefing', 'Performance Tracking', 'ROI Reporting'],
    accent: '#9b7ec8',
  },
  {
    num: '05',
    title: 'Event PR',
    icon: '◉',
    shortDesc: 'Media coverage and buzz for launches and events.',
    fullDesc: 'From intimate press nights to grand-scale public launches, we design and execute event PR strategies that generate maximum media coverage. Our event specialists handle everything from media invitations and accreditation to live coverage coordination.',
    offerings: ['Event Concept & Branding', 'Media Invite Management', 'Press Accreditation', 'Live Coverage Coordination', 'Post-Event Press Outreach', 'Photo & Video PR'],
    accent: '#7ec8b4',
  },
  {
    num: '06',
    title: 'Crisis Management',
    icon: '⬡',
    shortDesc: 'Protecting and rebuilding brand reputation.',
    fullDesc: 'When reputation is on the line, speed and strategy are everything. Our crisis communications team is available 24/7 to contain narrative damage, draft statements, brief media, and guide brands through challenging moments with composure and precision.',
    offerings: ['Crisis Communication Planning', 'Media Monitoring', 'Statement Drafting', 'Spokesperson Training', 'Social Listening', 'Reputation Recovery Strategy'],
    accent: '#c87e7e',
  },
];

export default function ServicesPage() {
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
          <span className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)' }}>Services</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }} className="font-display" style={{ fontSize: 'clamp(3.75rem, 6vw, 6rem)', lineHeight: 1, marginBottom: '1.5rem', color: 'var(--white)' }}>
          What We <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>Do Best.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.9, ease: 'easeOut' }} className="font-body" style={{ fontSize: '1.125rem', maxWidth: '42rem', lineHeight: 1.6, color: 'var(--white-dim)' }}>
          Six core service areas. Hundreds of successful campaigns. One relentless focus: your brand&apos;s visibility.
        </motion.p>
      </div>

      {/* Services list */}
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem 7rem 1.5rem' }}>
        {services.map((s, i) => (
          <motion.div
            key={s.num}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            style={{
              paddingTop: '4rem', paddingBottom: '4rem', display: 'flex', flexWrap: 'wrap', gap: '2.5rem', alignItems: 'flex-start',
              borderTop: '1px solid var(--border)'
            }}
          >
            {/* Number */}
            <motion.div variants={itemVariants} style={{ flex: '0 0 3rem' }}>
              <span className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--gold)' }}>{s.num}</span>
            </motion.div>

            {/* Icon + Title */}
            <motion.div variants={itemVariants} style={{ flex: '1 1 200px' }}>
              <span style={{ fontSize: '2.25rem', display: 'block', marginBottom: '1rem', color: s.accent }}>{s.icon}</span>
              <h2 className="font-display" style={{ fontSize: 'clamp(2.25rem, 4vw, 3rem)', color: 'var(--white)' }}>{s.title}</h2>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} style={{ flex: '2 1 300px' }}>
              <p className="font-body" style={{ fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem', color: 'var(--white-dim)' }}>{s.fullDesc}</p>
              <Link href="/contact" className="btn-outline" style={{ fontSize: '0.75rem', textDecoration: 'none' }}>
                <span>Enquire</span>
                <span style={{ marginLeft: '0.5rem' }}>→</span>
              </Link>
            </motion.div>

            {/* Offerings */}
            <motion.div variants={itemVariants} style={{ flex: '1 1 200px' }}>
              <p className="font-heading" style={{ fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', color: s.accent }}>What&apos;s Included</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {s.offerings.map(o => (
                  <li key={o} className="font-body" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--white-dim)' }}>
                    <span style={{ width: '0.75rem', height: '1px', flex: 'none', background: s.accent }} />
                    {o}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ padding: '5rem 1.5rem', textAlign: 'center', background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
          <h2 className="font-display" style={{ fontSize: 'clamp(3rem, 5vw, 3.75rem)', marginBottom: '1.5rem', color: 'var(--white)' }}>
            Ready to Get <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>Started?</span>
          </h2>
          <p className="font-body" style={{ fontSize: '1rem', marginBottom: '2.5rem', maxWidth: '36rem', margin: '0 auto 2.5rem auto', color: 'var(--white-dim)' }}>
            Book a free 30-minute consultation and let&apos;s discuss how we can elevate your brand.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>
              <span>Book a Consultation</span>
              <span style={{ marginLeft: '0.5rem' }}>→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
