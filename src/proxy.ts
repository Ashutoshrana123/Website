import { NextResponse, type NextRequest } from 'next/server';

const allowedOrigins = ['https://goldenfocus.in', 'https://www.goldenfocus.in'];
const corsHeaders = { 'Access-Control-Allow-Methods': 'GET, POST, PATCH, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' };

export function proxy(request: NextRequest) {
  const origin = request.headers.get('origin') || '';
  const allowed = allowedOrigins.includes(origin);
  if (request.method === 'OPTIONS') return NextResponse.json({}, { headers: { ...(allowed ? { 'Access-Control-Allow-Origin': origin } : {}), ...corsHeaders } });
  const response = NextResponse.next();
  if (allowed) response.headers.set('Access-Control-Allow-Origin', origin);
  Object.entries(corsHeaders).forEach(([key, value]) => response.headers.set(key, value));
  return response;
}

export const config = { matcher: '/api/:path*' };
