'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { apiUrl } from '@/lib/api-url';

type ContentType = 'service' | 'work' | 'media';
type Item = { id: string; type: ContentType; title: string; description: string; category?: string; image?: string };

export default function AdminContentManager() {
  const [items, setItems] = useState<Item[]>([]);
  const [type, setType] = useState<ContentType>('media');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [notice, setNotice] = useState('');
  const [saving, setSaving] = useState(false);

  const load = () => fetch(apiUrl('/api/content')).then(response => response.ok ? response.json() : Promise.reject()).then(data => setItems(data.content)).catch(() => setNotice('Unable to load managed content.'));
  useEffect(() => { load(); }, []);
  const onImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/') || file.size > 3 * 1024 * 1024) { setNotice('Choose an image smaller than 3 MB.'); return; }
    const reader = new FileReader();
    reader.onload = () => setImage(String(reader.result));
    reader.readAsDataURL(file);
  };
  const submit = async (event: FormEvent) => {
    event.preventDefault(); setSaving(true); setNotice('');
    try {
      const response = await fetch(apiUrl('/api/content'), { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type, title, description, category, image }) });
      const data = await response.json(); if (!response.ok) throw new Error(data.error);
      setItems(current => [data.content, ...current]); setTitle(''); setDescription(''); setCategory(''); setImage(''); setNotice('Content published.');
    } catch (error) { setNotice(error instanceof Error ? error.message : 'Unable to publish content.'); }
    finally { setSaving(false); }
  };
  const remove = async (id: string) => {
    if (!window.confirm('Delete this item?')) return;
    const response = await fetch(apiUrl(`/api/content/${id}`), { method: 'DELETE' });
    if (response.ok) setItems(current => current.filter(item => item.id !== id)); else setNotice('Unable to delete this item.');
  };

  return <section style={{ maxWidth: '76rem', margin: '0 auto', padding: '0 1.5rem 7rem' }}>
    <div style={{ borderTop: '1px solid var(--border)', paddingTop: '3rem' }}><span className="font-heading" style={{ color: 'var(--gold)', fontSize: '.7rem', letterSpacing: '.16em' }}>CONTENT MANAGER</span><h2 className="font-display" style={{ color: 'var(--white)', fontSize: '2.6rem', margin: '.7rem 0 1.5rem' }}>Update every public section.</h2></div>
    <form onSubmit={submit} style={{ display: 'grid', gap: '1rem', padding: '1.5rem', background: 'var(--surface)', border: '1px solid var(--border)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(12rem,1fr))', gap: '1rem' }}><label style={label}>Section<select value={type} onChange={event => setType(event.target.value as ContentType)} style={input}><option value="media">Media gallery</option><option value="work">Portfolio work</option><option value="service">Services</option></select></label><label style={label}>Category<input value={category} onChange={event => setCategory(event.target.value)} placeholder="Optional label" style={input} /></label></div>
      <label style={label}>Title<input value={title} onChange={event => setTitle(event.target.value)} required maxLength={140} style={input} /></label><label style={label}>Description<textarea value={description} onChange={event => setDescription(event.target.value)} required maxLength={1600} style={{ ...input, minHeight: '7rem', resize: 'vertical' }} /></label>
      <label className="btn-outline" style={{ width: 'fit-content', cursor: 'pointer' }}>Upload image <input type="file" accept="image/*" onChange={onImage} hidden /></label>{image && <img src={image} alt="Upload preview" style={{ width: '8rem', height: '6rem', objectFit: 'cover' }} />}
      <button className="btn-primary" disabled={saving} style={{ width: 'fit-content' }}><span>{saving ? 'Publishing…' : 'Publish content'}</span></button>{notice && <p role="status" style={{ color: 'var(--gold)' }}>{notice}</p>}
    </form>
    <div style={{ display: 'grid', gap: '.75rem', marginTop: '1.5rem' }}>{items.map(item => <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', border: '1px solid var(--border)', background: 'var(--surface)' }}>{item.image && <img src={item.image} alt="" style={{ width: '3.5rem', height: '3.5rem', objectFit: 'cover' }} />}<div style={{ flex: 1 }}><strong style={{ color: 'var(--white)' }}>{item.title}</strong><div style={{ color: 'var(--white-dim)', fontSize: '.8rem' }}>{item.type} {item.category ? `· ${item.category}` : ''}</div></div><button onClick={() => remove(item.id)} style={{ background: 'none', color: '#e78080', border: 0, cursor: 'pointer' }}>Delete</button></div>)}</div>
  </section>;
}

const label = { display: 'grid', gap: '.45rem', color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontSize: '.68rem', letterSpacing: '.1em', textTransform: 'uppercase' as const };
const input = { width: '100%', background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--white)', padding: '.8rem', font: '1rem var(--font-body)' };
