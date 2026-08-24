import { readStore, type StoredPost, writeStore } from '@/lib/posts-store';

export const runtime = 'nodejs';

export async function GET() { const store = await readStore(); return Response.json({ posts: store.posts }); }

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as { text?: string; media?: { src: string; type: 'image' | 'video' }[] } | null;
  const text = body?.text?.trim() || '';
  const media = body?.media || [];
  if ((!text && !media.length) || text.length > 2800 || media.length > 3) return Response.json({ error: 'A post needs content and can contain up to three media files.' }, { status: 400 });
  if (media.some(item => !item.src || !['image', 'video'].includes(item.type))) return Response.json({ error: 'Unsupported media.' }, { status: 400 });
  const post: StoredPost = { id: `post-${crypto.randomUUID()}`, name: 'You', role: 'Golden Focus Team', time: 'Just now', text, image: media.find(item => item.type === 'image')?.src, video: media.find(item => item.type === 'video')?.src, likes: 0, comments: 0, mine: true };
  const store = await readStore(); store.posts.unshift(post); await writeStore(store);
  return Response.json({ post }, { status: 201 });
}
