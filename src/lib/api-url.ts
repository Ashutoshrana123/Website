const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://pr-agency-alpha.vercel.app';

export function apiUrl(path: string) {
  return `${baseUrl}${path}`;
}
