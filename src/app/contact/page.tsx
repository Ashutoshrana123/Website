'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setTimeout(() => setSent(true), 300);
  };

  const services = ['Celebrity PR', 'Brand PR', 'Press Releases', 'Influencer Marketing', 'Event PR', 'Crisis Management'];

  return (
    <div>
      {/* Hero */}
      <div style={{ paddingTop: '9rem', paddingBottom: '4rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', maxWidth: '80rem', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <span className="gold-line" />
          <span className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)' }}>Get In Touch</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }} className="font-display" style={{ fontSize: 'clamp(3.75rem, 6vw, 6rem)', lineHeight: 1, color: 'var(--white)' }}>
          Let&apos;s Build<br />
          <span className="text-gold-gradient" style={{ fontStyle: 'italic' }}>Your Brand Story.</span>
        </motion.h1>
      </div>

      {/* Main */}
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem 7rem 1.5rem', display: 'flex', flexWrap: 'wrap', gap: '5rem' }}>
        {/* Left info */}
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }} style={{ flex: '1 1 400px' }}>
          <p className="font-body" style={{ fontSize: '1rem', lineHeight: 1.6, marginBottom: '3rem', color: 'var(--white-dim)' }}>
            Book a free 30-minute consultation with our team. We&apos;ll understand your goals, share initial ideas, and tell you exactly how we can help — no obligation.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}>
            {[
              { label: 'Email', value: 'hello@prestigepr.in', icon: '✉' },
              { label: 'Phone', value: '+91 98765 43210', icon: '☎' },
              { label: 'Offices', value: 'Mumbai · Chennai · Delhi', icon: '◉' },
              { label: 'Hours', value: 'Mon–Sat, 9am–7pm IST', icon: '◷' },
            ].map(c => (
              <div key={c.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <span style={{ fontSize: '1.125rem', marginTop: '0.125rem', flex: 'none', color: 'var(--gold)' }}>{c.icon}</span>
                <div>
                  <div className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem', color: 'var(--gold)' }}>{c.label}</div>
                  <div className="font-body" style={{ fontSize: '0.875rem', color: 'var(--white)' }}>{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Social */}
          <div>
            <p className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--white-dim)' }}>Follow Us</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {['Instagram', 'LinkedIn', 'Twitter', 'YouTube'].map(s => (
                <a key={s} href="#" className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--white-dim)', textDecoration: 'none', transition: 'color 0.3s' }}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Why us quick list */}
          <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <p className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem', color: 'var(--gold)' }}>Why Choose Us</p>
            {[
              'Strong Media Network',
              'Creative Campaign Ideas',
              'Fast Execution',
              'Personalised PR Strategies',
              'Proven Results',
              'Trusted by Public Figures & Brands',
            ].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.625rem 0', borderBottom: '1px solid var(--border)' }}>
                <span style={{ width: '0.75rem', height: '1px', flex: 'none', background: 'var(--gold)' }} />
                <span className="font-body" style={{ fontSize: '0.875rem', color: 'var(--white-dim)' }}>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }} style={{ flex: '1 1 400px' }}>
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '3rem', border: '1px solid var(--border)', background: 'var(--surface)' }}>
                <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', background: 'var(--gold)', color: 'var(--bg)' }}>
                  <span style={{ fontSize: '1.5rem' }}>✓</span>
                </div>
                <h3 className="font-display" style={{ fontSize: '2.25rem', marginBottom: '1rem', color: 'var(--white)' }}>Message Sent!</h3>
                <p className="font-body" style={{ fontSize: '0.875rem', color: 'var(--white-dim)' }}>
                  Thank you for reaching out. Our team will contact you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ padding: '2rem', background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <h2 className="font-display" style={{ fontSize: '1.875rem', marginBottom: '2rem', color: 'var(--white)' }}>Book a Consultation</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem', color: 'var(--gold)' }}>Full Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="font-body"
                      style={{
                        width: '100%', padding: '0.75rem 1rem', fontSize: '0.875rem', outline: 'none', transition: 'all 0.3s',
                        background: 'var(--bg-3)',
                        border: '1px solid var(--border)',
                        color: 'var(--white)',
                      }}
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem', color: 'var(--gold)' }}>Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="font-body"
                      style={{
                        width: '100%', padding: '0.75rem 1rem', fontSize: '0.875rem', outline: 'none', transition: 'all 0.3s',
                        background: 'var(--bg-3)',
                        border: '1px solid var(--border)',
                        color: 'var(--white)',
                      }}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem', color: 'var(--gold)' }}>Service Interested In</label>
                    <select
                      value={form.service}
                      onChange={e => setForm({ ...form, service: e.target.value })}
                      className="font-body"
                      style={{
                        width: '100%', padding: '0.75rem 1rem', fontSize: '0.875rem', outline: 'none', transition: 'all 0.3s',
                        background: 'var(--bg-3)',
                        border: '1px solid var(--border)',
                        color: form.service ? 'var(--white)' : 'var(--white-dim)',
                      }}
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="font-heading" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem', color: 'var(--gold)' }}>Message</label>
                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="font-body"
                      style={{
                        width: '100%', padding: '0.75rem 1rem', fontSize: '0.875rem', outline: 'none', resize: 'none', transition: 'all 0.3s',
                        background: 'var(--bg-3)',
                        border: '1px solid var(--border)',
                        color: 'var(--white)',
                      }}
                      placeholder="Tell us about your brand and goals..."
                    />
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={handleSubmit}
                    className="btn-primary form-btn"
                    style={{ cursor: 'none', width: '100%', justifyContent: 'center', marginTop: '0.5rem', border: 'none' }}
                  >
                    <span>Send Message</span>
                    <span style={{ marginLeft: '0.5rem' }}>→</span>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
