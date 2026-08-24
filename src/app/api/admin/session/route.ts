import { cookieName, cookieOptions, validCredentials } from '@/lib/admin-auth';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as { id?: string; password?: string } | null;
  if (!body || !validCredentials(body.id || '', body.password || '')) return Response.json({ error: 'Invalid administrator credentials.' }, { status: 401 });
  const response = Response.json({ ok: true }); response.headers.append('Set-Cookie', `${cookieOptions().name}=${cookieOptions().value}; Path=/; Max-Age=604800; HttpOnly; Secure; SameSite=Lax`); return response;
}

export async function DELETE() { const response = Response.json({ ok: true }); response.headers.append('Set-Cookie', `${cookieName}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax`); return response; }
