import { readStore, writeStore } from '@/lib/posts-store';

export const runtime = 'nodejs';
export async function GET(_request: Request, context: RouteContext<'/api/posts/[id]'>) { const { id } = await context.params; const post = (await readStore()).posts.find(item => item.id === id); return post ? Response.json({ post }) : Response.json({ error: 'Post not found.' }, { status: 404 }); }
export async function PATCH(request: Request, context: RouteContext<'/api/posts/[id]'>) { const { id } = await context.params; const body = await request.json().catch(() => null) as { action?: string } | null; const store = await readStore(); const post = store.posts.find(item => item.id === id); if (!post) return Response.json({ error: 'Post not found.' }, { status: 404 }); if (body?.action === 'like') post.likes += 1; if (body?.action === 'unlike') post.likes = Math.max(0, post.likes - 1); await writeStore(store); return Response.json({ post }); }
