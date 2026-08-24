'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { apiUrl } from '@/lib/api-url';

const notes: Record<string, { name: string; role: string; time: string; text: string; image?: string }> = {
  'summer-campaign': { name: 'Mira Kapoor', role: 'Creative Director', time: '2 hours ago', text: 'The best campaigns begin with a feeling, not a brief. A quiet look behind the visual language for our summer story.\n\nThe room was filled with afternoon light, fresh references, and the first drafts of an idea that will soon be everywhere.', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1600&q=85' },
  'brand-launch': { name: 'Arjun Mehta', role: 'Senior Account Lead', time: 'Yesterday', text: 'A beautiful evening welcoming a new name into the room. Thank you to every editor, creator, and partner who made the launch feel so considered.', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=85' },
  'notes-on-pr': { name: 'Golden Focus', role: 'Agency Journal', time: '3 days ago', text: 'Attention is fleeting. Trust is earned slowly, story by story. That distinction shapes every conversation we help our clients begin.' },
};

export default function PostDetailPage() {
  const params = useParams<{ id: string }>();
  const post = notes[params.id] || { name: 'Golden Focus', role: 'Agency Journal', time: 'Just now', text: 'This new story is now part of the Golden Focus journal.' };
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>(['Beautifully put — congratulations to the whole team.']);
  useEffect(() => { fetch(apiUrl(`/api/posts/${params.id}/comments`)).then(response => response.ok ? response.json() : Promise.reject()).then(data => setComments(data.comments)).catch(() => undefined); }, [params.id]);
  return <div style={{ minHeight: '100vh', maxWidth: '52rem', margin: '0 auto', padding: '9rem 1.5rem 7rem' }}>
    <Link href="/posts" className="font-heading" style={{ color: 'var(--gold)', fontSize: '.7rem', letterSpacing: '.15em', textTransform: 'uppercase', textDecoration: 'none' }}>← Back to posts</Link>
    <article style={{ marginTop: '2rem', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '2rem 0' }}>
      <div style={{ color: 'var(--gold)', fontSize: '.68rem', letterSpacing: '.17em', textTransform: 'uppercase', marginBottom: '1rem' }}>{post.name} · {post.role} · {post.time}</div>
      <p className="font-display" style={{ whiteSpace: 'pre-line', color: 'var(--white)', fontSize: 'clamp(2rem, 4vw, 3.15rem)', lineHeight: 1.15 }}>{post.text}</p>
      {post.image && <img src={post.image} alt="Post media" style={{ width: '100%', maxHeight: '38rem', objectFit: 'cover', marginTop: '2rem' }} />}
      <div style={{ display: 'flex', gap: '1.5rem', paddingTop: '1.25rem', marginTop: '1.25rem', borderTop: '1px solid var(--border)' }}><button onClick={() => setLiked(!liked)} style={action(liked)}>{liked ? '♥ Liked' : '♡ Like'}</button><a href="#comments" style={action(false)}>◌ Comment</a><button onClick={() => navigator.clipboard?.writeText(window.location.href)} style={action(false)}>↗ Copy link</button></div>
    </article>
    <section id="comments" style={{ marginTop: '3rem' }}><span className="font-heading" style={{ color: 'var(--gold)', fontSize: '.7rem', letterSpacing: '.18em', textTransform: 'uppercase' }}>Conversation</span><div style={{ marginTop: '1.5rem', display: 'grid', gap: '1rem' }}>{comments.map((item, i) => <div key={i} style={{ padding: '1rem 0', borderBottom: '1px solid var(--border)', color: 'var(--text)' }}><span className="font-heading" style={{ color: 'var(--white)', fontSize: '.7rem', marginRight: '.6rem' }}>Community</span>{item}</div>)}</div><form onSubmit={async e => { e.preventDefault(); const text = comment.trim(); if (!text) return; const response = await fetch(apiUrl(`/api/posts/${params.id}/comments`), { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text }) }); if (response.ok) { setComments([...comments, text]); setComment(''); } }} style={{ display: 'flex', gap: '.75rem', marginTop: '1.5rem' }}><input value={comment} onChange={e => setComment(e.target.value)} placeholder="Add to the conversation…" style={{ minWidth: 0, flex: 1, background: 'var(--bg)', border: '1px solid var(--border)', padding: '.85rem 1rem', color: 'var(--white)' }} /><button className="btn-primary" style={{ padding: '.8rem 1rem' }}><span>Send</span></button></form></section>
  </div>;
}
const action = (active: boolean) => ({ color: active ? 'var(--gold)' : 'var(--white-dim)', border: 0, background: 'none', padding: 0, font: '.68rem var(--font-heading)', letterSpacing: '.1em', textTransform: 'uppercase' as const, cursor: 'pointer', textDecoration: 'none' });
