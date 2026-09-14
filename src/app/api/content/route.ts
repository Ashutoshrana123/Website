import { isAdmin } from '@/lib/admin-auth';
import { readStore, type ManagedContent, type ManagedContentType, writeStore } from '@/lib/posts-store';

export const runtime = 'nodejs';

const contentTypes: ManagedContentType[] = ['service', 'work', 'media'];

export async function GET(request: Request) {
  const type = new URL(request.url).searchParams.get('type');
  const content = (await readStore()).content.filter(item => !type || item.type === type);
  return Response.json({ content });
}

export async function POST(request: Request) {
  if (!await isAdmin()) return Response.json({ error: 'Administrator access is required.' }, { status: 401 });
  const body = await request.json().catch(() => null) as Partial<ManagedContent> | null;
  const type = body?.type;
  const title = body?.title?.trim();
  const description = body?.description?.trim();
  const category = body?.category?.trim();
  const image = body?.image?.trim();
  if (!type || !contentTypes.includes(type) || !title || !description || title.length > 140 || description.length > 1600 || (image && (!image.startsWith('data:image/') || image.length > 4_500_000))) return Response.json({ error: 'Enter a title and description, and upload a valid image under 3 MB.' }, { status: 400 });
  const item: ManagedContent = { id: `content-${crypto.randomUUID()}`, type, title, description, category: category || undefined, image: image || undefined, createdAt: new Date().toISOString() };
  const store = await readStore();
  store.content.unshift(item);
  await writeStore(store);
  return Response.json({ content: item }, { status: 201 });
}
