import { saveInquiry } from '@/lib/posts-store';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as { name?: string; email?: string; service?: string; message?: string } | null;
  const name = body?.name?.trim() || '';
  const email = body?.email?.trim().toLowerCase() || '';
  const service = body?.service?.trim() || '';
  const message = body?.message?.trim() || '';
  if (!name || !service || !message || !/^\S+@\S+\.\S+$/.test(email)) return Response.json({ error: 'Please complete every field with a valid email address.' }, { status: 400 });
  if (name.length > 120 || service.length > 120 || message.length > 5000) return Response.json({ error: 'One or more fields is too long.' }, { status: 400 });
  await saveInquiry({ name, email, service, message, createdAt: new Date() });
  return Response.json({ ok: true }, { status: 201 });
}
