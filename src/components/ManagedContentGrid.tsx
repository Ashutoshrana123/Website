'use client';

import { useEffect, useState } from 'react';
import { apiUrl } from '@/lib/api-url';

type ContentType = 'service' | 'work' | 'media';
type Item = { id: string; title: string; description: string; category?: string; image?: string };

export default function ManagedContentGrid({ type, title }: { type: ContentType; title: string }) {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => { fetch(apiUrl(`/api/content?type=${type}`)).then(response => response.ok ? response.json() : Promise.reject()).then(data => setItems(data.content)).catch(() => undefined); }, [type]);
  if (!items.length) return null;
  return <section style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem 6rem' }}><h2 className="font-display" style={{ color: 'var(--white)', fontSize: 'clamp(2.3rem,4vw,3.5rem)', marginBottom: '2rem' }}>{title}</h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(16rem,1fr))', gap: '1.25rem' }}>{items.map(item => <article key={item.id} style={{ overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--surface)' }}>{item.image && <img src={item.image} alt="" style={{ width: '100%', height: '13rem', objectFit: 'cover', display: 'block' }} />}<div style={{ padding: '1.25rem' }}>{item.category && <p style={{ color: 'var(--gold)', fontSize: '.7rem', textTransform: 'uppercase', letterSpacing: '.1em' }}>{item.category}</p>}<h3 className="font-display" style={{ color: 'var(--white)', fontSize: '1.7rem', margin: '.5rem 0' }}>{item.title}</h3><p style={{ color: 'var(--white-dim)', lineHeight: 1.6 }}>{item.description}</p></div></article>)}</div></section>;
}
