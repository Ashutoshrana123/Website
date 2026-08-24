'use client';

import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { apiUrl } from '@/lib/api-url';

type Post = { id: string; name: string; role: string; time: string; text: string; image?: string; video?: string; likes: number; comments: number; mine?: boolean };
type Upload = { src: string; type: 'image' | 'video' };

const seedPosts: Post[] = [
  { id: 'summer-campaign', name: 'Mira Kapoor', role: 'Creative Director', time: '2 hours ago', text: 'The best campaigns begin with a feeling, not a brief. A quiet look behind the visual language for our summer story.', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85', likes: 124, comments: 18 },
  { id: 'brand-launch', name: 'Arjun Mehta', role: 'Senior Account Lead', time: 'Yesterday', text: 'A beautiful evening welcoming a new name into the room. Thank you to every editor, creator, and partner who made the launch feel so considered.', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85', likes: 89, comments: 11 },
  { id: 'notes-on-pr', name: 'Golden Focus', role: 'Agency Journal', time: '3 days ago', text: 'Attention is fleeting. Trust is earned slowly, story by story. That distinction shapes every conversation we help our clients begin.', likes: 201, comments: 24 },
  { id: 'behind-the-scenes', name: 'Rhea Sethi', role: 'Production Lead', time: '1 week ago', text: 'A few seconds from the set. The energy before a campaign steps into the world is always something special.', video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', likes: 67, comments: 8 },
];

const avatar = (name: string) => name.split(' ').map(part => part[0]).join('').slice(0, 2);

export default function PostsExperience({ adminMode = false }: { adminMode?: boolean }) {
  const [posts, setPosts] = useState(seedPosts);
  const [modal, setModal] = useState<'create' | 'share' | null>(null);
  const [draft, setDraft] = useState('');
  const [uploads, setUploads] = useState<Upload[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [liked, setLiked] = useState<string[]>([]);
  const [loadedOlder, setLoadedOlder] = useState(false);
  const [notice, setNotice] = useState('');

  useEffect(() => { fetch(apiUrl('/api/posts')).then(response => response.ok ? response.json() : Promise.reject()).then(data => setPosts(data.posts)).catch(() => setNotice('Unable to refresh the feed. Showing the latest saved view.')); }, []);

  const visiblePosts = useMemo(() => loadedOlder ? posts : posts.slice(0, 3), [posts, loadedOlder]);
  const closeModal = () => { setModal(null); setDraft(''); setUploads([]); };

  const handleFiles = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []).filter(file => file.type.startsWith('image/') || file.type.startsWith('video/')).slice(0, 3 - uploads.length);
    if (!files.length) return;
    const values = await Promise.all(files.map(file => new Promise<Upload>((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve({ src: String(reader.result), type: file.type.startsWith('video/') ? 'video' : 'image' }); reader.onerror = reject; reader.readAsDataURL(file); })));
    setUploads(current => [...current, ...values]);
  };
  const publish = async () => {
    if (!draft.trim() && !uploads.length) { setNotice('Write a note or add an image before publishing.'); return; }
    try { const response = await fetch(apiUrl('/api/posts'), { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text: draft, media: uploads }) }); const data = await response.json(); if (!response.ok) throw new Error(data.error); setPosts(current => [data.post, ...current]); closeModal(); setNotice('Your post is now live.'); } catch (error) { setNotice(error instanceof Error ? error.message : 'Unable to publish this post. Please try again.'); }
  };
  const toggleLike = async (id: string) => { const active = liked.includes(id); setLiked(current => active ? current.filter(item => item !== id) : [...current, id]); const response = await fetch(apiUrl(`/api/posts/${id}`), { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: active ? 'unlike' : 'like' }) }); if (!response.ok) { setLiked(current => active ? [...current, id] : current.filter(item => item !== id)); setNotice('Unable to update the reaction. Please try again.'); } };

  return <div style={{ minHeight: '100vh', padding: '9rem 1.5rem 7rem', maxWidth: '76rem', margin: '0 auto' }}>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .6 }} style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '1rem' }}><span className="gold-line" /><span className="font-heading" style={eyebrow}>Agency Journal</span></div>
        <h1 className="font-display" style={{ color: 'var(--white)', fontSize: 'clamp(3.8rem, 7vw, 6.5rem)', lineHeight: .88 }}>Stories, in<br /><i className="text-gold-gradient">focus.</i></h1>
        <p style={{ color: 'var(--white-dim)', marginTop: '1.25rem', maxWidth: '30rem', lineHeight: 1.7 }}>Notes from the people, campaigns, and moments that make the work matter.</p>
      </div>
      {adminMode && <button className="btn-primary" onClick={() => setModal('create')}><span>+ Create post</span></button>}
    </motion.div>

    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 46rem) 1fr', gap: '5rem', alignItems: 'start' }} className="posts-layout">
      <section>
        <div style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--border)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between' }}><span className="font-heading" style={eyebrow}>Latest notes</span><span style={{ color: 'var(--white-dim)', fontSize: '.75rem' }}>{posts.length} entries</span></div>
        {notice && <div role="status" style={{ padding: '1rem', marginBottom: '1.5rem', background: 'var(--gold-dim)', color: 'var(--gold-light)', fontSize: '.85rem' }}>{notice}</div>}
        <div style={{ display: 'grid', gap: '1.5rem' }}>{visiblePosts.map((post, index) => <PostCard key={post.id} post={post} index={index} liked={liked.includes(post.id)} onLike={() => toggleLike(post.id)} onShare={() => setModal('share')} onImage={() => post.image && setSelectedImage(post.image)} />)}</div>
        {!loadedOlder && <button className="btn-outline" onClick={() => setLoadedOlder(true)} style={{ marginTop: '2rem' }}>Load older posts <span>↓</span></button>}
      </section>
      <aside className="posts-aside" style={{ borderLeft: '1px solid var(--border)', paddingLeft: '2rem' }}>
        <span className="font-heading" style={eyebrow}>The edit</span>
        <p className="font-display" style={{ color: 'var(--white)', fontSize: '2rem', lineHeight: 1.05, margin: '1rem 0' }}>The people behind a moment.</p>
        <p style={{ color: 'var(--white-dim)', fontSize: '.9rem', lineHeight: 1.7 }}>A living record of the ideas, teams and cultural conversations we are proud to help shape.</p>
      </aside>
    </div>

    <AnimatePresence>{modal === 'create' && <CreateModal draft={draft} uploads={uploads} setDraft={setDraft} onFiles={handleFiles} onRemove={(i) => setUploads(current => current.filter((_, index) => index !== i))} onClose={closeModal} onPublish={publish} />}</AnimatePresence>
    <AnimatePresence>{modal === 'share' && <ShareModal onClose={() => setModal(null)} onShare={() => { setModal(null); setNotice('Post link copied — ready to share.'); }} />}</AnimatePresence>
    <AnimatePresence>{selectedImage && <motion.div onClick={() => setSelectedImage(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={overlay}><img src={selectedImage} alt="Expanded post media" style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain' }} /></motion.div>}</AnimatePresence>
    <style jsx global>{`.posts-layout{grid-template-columns:minmax(0,46rem) 1fr}@media(max-width:800px){.posts-layout{grid-template-columns:1fr!important;gap:3rem!important}.posts-aside{border-left:0!important;border-top:1px solid var(--border)!important;padding:2rem 0 0!important}}`}</style>
  </div>;
}

const eyebrow = { fontSize: '.68rem', letterSpacing: '.2em', textTransform: 'uppercase' as const, color: 'var(--gold)' };
const overlay = { position: 'fixed' as const, inset: 0, zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', background: 'rgba(5,5,5,.94)', cursor: 'zoom-out' };

function PostCard({ post, index, liked, onLike, onShare, onImage }: { post: Post; index: number; liked: boolean; onLike: () => void; onShare: () => void; onImage: () => void }) {
  return <motion.article initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .08, duration: .55 }} style={{ padding: '1.75rem', border: '1px solid var(--border)', background: 'var(--surface)' }}>
    <div style={{ display: 'flex', gap: '.85rem', alignItems: 'center', marginBottom: '1.25rem' }}><div className="font-heading" style={{ width: '2.4rem', height: '2.4rem', display: 'grid', placeItems: 'center', border: '1px solid var(--gold)', color: 'var(--gold)', fontSize: '.7rem' }}>{avatar(post.name)}</div><div style={{ flex: 1 }}><div className="font-heading" style={{ color: 'var(--white)', fontSize: '.78rem', letterSpacing: '.05em' }}>{post.name}</div><div style={{ color: 'var(--white-dim)', fontSize: '.7rem', marginTop: '.25rem' }}>{post.role} · {post.time}</div></div><span style={{ color: 'var(--gold)', fontSize: '1.25rem' }}>···</span></div>
    <Link href={`/posts/${post.id}`} style={{ textDecoration: 'none' }}><p className="font-display" style={{ color: 'var(--white)', fontSize: '1.55rem', lineHeight: 1.25, marginBottom: post.image ? '1.25rem' : 0 }}>{post.text}</p></Link>
    {post.image && <button aria-label="Expand image" onClick={onImage} style={{ border: 0, padding: 0, width: '100%', background: 'none', cursor: 'zoom-in', display: 'block', marginBottom: '1.25rem', overflow: 'hidden' }}><img src={post.image} alt="Post media" style={{ width: '100%', height: 'clamp(13rem,35vw,25rem)', objectFit: 'cover', display: 'block', transition: 'transform .5s' }} /></button>}
    {post.video && <video controls preload="metadata" style={{ width: '100%', maxHeight: '28rem', display: 'block', marginBottom: '1.25rem', background: 'var(--bg)' }}><source src={post.video} type="video/mp4" /></video>}
    <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem', display: 'flex', gap: '1.5rem' }}><button onClick={onLike} style={actionStyle(liked)}>{liked ? '♥' : '♡'} {post.likes + (liked ? 1 : 0)}</button><Link href={`/posts/${post.id}#comments`} style={actionStyle(false)}>◌ {post.comments} comments</Link><button onClick={onShare} style={actionStyle(false)}>↗ share</button></div>
  </motion.article>;
}
const actionStyle = (active: boolean) => ({ background: 'none', border: 0, padding: 0, color: active ? 'var(--gold)' : 'var(--white-dim)', cursor: 'pointer', fontFamily: 'var(--font-heading)', textTransform: 'uppercase' as const, letterSpacing: '.08em', fontSize: '.65rem', textDecoration: 'none' });

function CreateModal({ draft, uploads, setDraft, onFiles, onRemove, onClose, onPublish }: { draft: string; uploads: Upload[]; setDraft: (s: string) => void; onFiles: (e: ChangeEvent<HTMLInputElement>) => void; onRemove: (i: number) => void; onClose: () => void; onPublish: () => void }) {
  return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={overlay}><motion.div onClick={e => e.stopPropagation()} initial={{ y: 24 }} animate={{ y: 0 }} exit={{ y: 24 }} style={{ width: 'min(38rem, 100%)', maxHeight: '90vh', overflow: 'auto', background: 'var(--bg-2)', border: '1px solid var(--border)', padding: '2rem', cursor: 'default' }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}><span className="font-display" style={{ fontSize: '2.25rem', color: 'var(--white)' }}>Create a post</span><button onClick={onClose} style={actionStyle(false)}>Close ×</button></div><textarea autoFocus value={draft} onChange={e => setDraft(e.target.value)} placeholder="What is on your mind?" style={{ resize: 'vertical', minHeight: '8rem', width: '100%', padding: '1rem', background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--white)', font: '1rem var(--font-body)', outline: 'none' }} />
    {uploads.length > 0 && <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '.6rem', marginTop: '1rem' }}>{uploads.map((upload, i) => <div key={upload.src} style={{ position: 'relative' }}>{upload.type === 'image' ? <img src={upload.src} alt="Upload preview" style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} /> : <video src={upload.src} muted style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', background: 'var(--bg)' }} />}<button aria-label="Remove media" onClick={() => onRemove(i)} style={{ position: 'absolute', top: 5, right: 5, ...actionStyle(false), color: 'var(--white)', background: 'rgba(0,0,0,.65)', padding: '.3rem .5rem' }}>×</button></div>)}</div>}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}><label className="btn-outline" style={{ padding: '.7rem 1rem', cursor: 'pointer' }}>Add media <input onChange={onFiles} type="file" accept="image/*,video/*" multiple hidden /></label><div style={{ display: 'flex', gap: '.75rem' }}><button className="btn-outline" onClick={onClose} style={{ padding: '.7rem 1rem' }}>Cancel</button><button className="btn-primary" onClick={onPublish} style={{ padding: '.75rem 1.1rem' }}><span>Publish</span></button></div></div></motion.div></motion.div>;
}

function ShareModal({ onClose, onShare }: { onClose: () => void; onShare: () => void }) { return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={overlay}><motion.div initial={{ y: 24 }} animate={{ y: 0 }} exit={{ y: 24 }} style={{ width: 'min(27rem, 100%)', background: 'var(--bg-2)', border: '1px solid var(--border)', padding: '2rem', cursor: 'default' }}><span className="font-display" style={{ color: 'var(--white)', fontSize: '2rem' }}>Share this story</span><p style={{ color: 'var(--white-dim)', fontSize: '.85rem', lineHeight: 1.6, margin: '1rem 0 1.5rem' }}>Copy a direct link to send this note to someone.</p><div style={{ display: 'flex', justifyContent: 'end', gap: '.75rem' }}><button className="btn-outline" onClick={onClose} style={{ padding: '.7rem 1rem' }}>Cancel</button><button className="btn-primary" onClick={onShare} style={{ padding: '.75rem 1rem' }}><span>Copy link</span></button></div></motion.div></motion.div> }
