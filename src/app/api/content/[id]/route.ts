import { isAdmin } from '@/lib/admin-auth';
import { readStore, writeStore } from '@/lib/posts-store';

export const runtime = 'nodejs';

export async function DELETE(_request: Request, context: RouteContext<'/api/content/[id]'>) {
  if (!await isAdmin()) return Response.json({ error: 'Administrator access is required.' }, { status: 401 });
  const { id } = await context.params;
  const store = await readStore();
  const originalLength = store.content.length;
  store.content = store.content.filter(item => item.id !== id);
  if (store.content.length === originalLength) return Response.json({ error: 'Content not found.' }, { status: 404 });
  await writeStore(store);
  return Response.json({ ok: true });
}
