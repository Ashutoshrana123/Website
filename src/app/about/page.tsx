'use client';
import MarqueeSection from '@/components/MarqueeSection';
import { motion } from 'framer-motion';

const team = [
  { 
    name: 'Rahul Raj Singh', 
    role: 'Founder & CEO', 
    bio: 'Ex-Bollywood publicist with 12+ years of experience in celebrity management, media relations, and strategic brand positioning. Has worked with top Bollywood celebrities and successfully managed high-profile campaigns.', 
    initial: 'R' 
  },
  { 
    name: 'Saloni Singh', 
    role: 'Co-Founder & Head of Brand PR', 
    bio: 'Strategic brand communications expert specializing in corporate and fashion PR. Excels at brand reputation management, crisis communication, and building long-term media relationships.', 
    initial: 'S'  // Changed from 'A' to 'S' for Saloni
  },
  { 
    name: 'Huda Ali', 
    role: 'Senior PR Manager', 
    bio: 'Orchestrated 200+ successful events across India. Expert in event management, media buzz creation, celebrity coordination, and logistics. Known for delivering seamless high-profile experiences.', 
    initial: 'H'  // Changed from 'D' to 'H' for Huda
  },
  { 
    name: 'Sikander Siddiqui', 
    role: 'Office Manager', 
    bio: 'Operations expert ensuring smooth day-to-day functioning. Manages vendor relationships, team coordination, and administrative efficiency. Keeps the agency running like clockwork.', 
    initial: 'S'  // Changed from 'K' to 'S' for Sikander
  },
];

const values = [
  { title: 'Integrity', desc: 'We represent your brand as if it were our own — with full transparency and honest counsel.' },
  { title: 'Creativity', desc: 'Every campaign starts with a bold, original idea. We never settle for the predictable.' },
  { title: 'Results', desc: 'Media features, reach, and reputation growth you can measure. We deliver, every time.' },
  { title: 'Network', desc: 'Decades of relationships with editors, journalists, producers, and influencers across India.' },
];

export default function AboutPage() {
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
          <span className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)' }}>About Us</span>
        </motion.div>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 1.2, ease: 'easeOut' }} style={{ height: '1px', marginBottom: '2rem', background: 'var(--gold)', transformOrigin: 'left' }} />
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }} className="font-display" style={{ fontSize: 'clamp(3.75rem, 6vw, 6rem)', lineHeight: 1, marginBottom: '2rem', color: 'var(--white)' }}>
          The Team Behind<br />
          <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>Your Brand&apos;s Voice.</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.9, ease: 'easeOut' }} className="font-body" style={{ fontSize: '1.125rem', maxWidth: '42rem', lineHeight: 1.6, color: 'var(--white-dim)' }}>
          We are a modern PR & Event Management agency focused on creating impactful stories, strong media presence, and long-term brand value.
        </motion.p>
      </div>

      <MarqueeSection />

      {/* Mission */}
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} style={{ padding: '7rem 1.5rem', maxWidth: '80rem', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '5rem', alignItems: 'center' }}>
        <div style={{ flex: '1 1 400px' }}>
          <motion.div variants={itemVariants} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <span className="gold-line" />
            <span className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)' }}>Our Mission</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="font-display" style={{ fontSize: 'clamp(3rem, 5vw, 3.75rem)', lineHeight: 1.1, marginBottom: '2rem', color: 'var(--white)' }}>
            Turn Vision<br />Into <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>Visibility.</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="font-body" style={{ fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem', color: 'var(--white-dim)' }}>
            We are a modern PR agency focused on creating impactful stories, strong media presence, and long-term brand value. With expertise across entertainment, fashion, corporate, and digital industries, we help individuals and businesses gain the attention they deserve.
          </motion.p>
          <motion.p variants={itemVariants} className="font-body" style={{ fontSize: '1rem', lineHeight: 1.6, color: 'var(--white-dim)' }}>
            Founded in 2020, Golden Focus has grown from a boutique agency into one of India&apos;s most trusted names in public relations and event management — with a network spanning Bollywood, fashion, tech, and corporate sectors.
          </motion.p>
        </div>

        {/* Values grid */}
        <div style={{ flex: '1 1 400px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {values.map((v) => (
            <motion.div variants={itemVariants} key={v.title} className="card-hover" style={{ padding: '1.5rem', background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <h3 className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem', color: 'var(--gold)' }}>{v.title}</h3>
              <p className="font-body" style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--white-dim)' }}>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats */}
      <div style={{ padding: '5rem 1.5rem', background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} style={{ maxWidth: '80rem', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '3rem', textAlign: 'center', justifyContent: 'space-around' }}>
          {[
            { num: '100+', label: 'Media Features Delivered' },
            { num: '50+', label: 'Successful Campaigns' },
            { num: '20+', label: 'Celebrity Collaborations' },
            { num: '1M+', label: 'Audience Reach Generated' },
          ].map((s) => (
            <motion.div variants={itemVariants} key={s.label} style={{ flex: '1 1 150px' }}>
              <div className="font-display" style={{ fontSize: '3.75rem', fontStyle: 'italic', marginBottom: '0.5rem', color: 'var(--gold)' }}>{s.num}</div>
              <div className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--white-dim)' }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Team */}
      <div style={{ padding: '7rem 1.5rem', maxWidth: '80rem', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <span className="gold-line" />
          <span className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)' }}>The Team</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="font-display" style={{ fontSize: 'clamp(3rem, 5vw, 3.75rem)', marginBottom: '4rem', color: 'var(--white)' }}>
          Faces Behind the <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>Headlines.</span>
        </motion.h2>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {team.map((member) => (
            <motion.div variants={itemVariants} key={member.name} className="team-card card-hover group" style={{ padding: '2rem', textAlign: 'center', background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto', background: 'var(--gold-dim)', border: '1px solid var(--gold)', color: 'var(--gold)' }}>
                <span className="font-display" style={{ fontSize: '1.875rem', fontStyle: 'italic', transition: 'transform 0.3s' }} dangerouslySetInnerHTML={{ __html: member.initial }} />
              </div>
              <h3 className="font-heading" style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem', color: 'var(--white)' }}>{member.name}</h3>
              <p className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--gold)' }}>{member.role}</p>
              <p className="font-body" style={{ fontSize: '0.75rem', lineHeight: 1.6, color: 'var(--white-dim)' }}>{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
