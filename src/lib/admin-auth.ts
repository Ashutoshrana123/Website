import { createHmac, timingSafeEqual } from 'crypto';
import { cookies } from 'next/headers';

const cookieName = 'golden_focus_admin';
const maxAge = 60 * 60 * 24 * 7;

function signature(value: string) { return createHmac('sha256', process.env.ADMIN_SESSION_SECRET || '').update(value).digest('base64url'); }
function token() { const value = 'admin'; return `${value}.${signature(value)}`; }

export function validCredentials(id: string, password: string) {
  const expectedId = process.env.ADMIN_ID || '';
  const expectedPassword = process.env.ADMIN_PASSWORD || '';
  if (!expectedId || !expectedPassword) return false;
  return id.length === expectedId.length && password.length === expectedPassword.length && timingSafeEqual(Buffer.from(id), Buffer.from(expectedId)) && timingSafeEqual(Buffer.from(password), Buffer.from(expectedPassword));
}

export function validToken(value?: string) {
  if (!process.env.ADMIN_SESSION_SECRET || !value) return false;
  const expected = token();
  return value.length === expected.length && timingSafeEqual(Buffer.from(value), Buffer.from(expected));
}

export async function isAdmin() { return validToken((await cookies()).get(cookieName)?.value); }
export function cookieOptions() { return { name: cookieName, value: token(), httpOnly: true, secure: true, sameSite: 'lax' as const, maxAge, path: '/' }; }
export { cookieName };
