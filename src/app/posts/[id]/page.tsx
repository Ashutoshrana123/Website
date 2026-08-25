import type { Metadata } from 'next';
import { readStore } from '@/lib/posts-store';
import PostDetailClient from '@/components/PostDetailClient';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  try {
    const post = (await readStore()).posts.find(item => item.id === id);
    if (!post) return { title: 'Post not found' };
    const title = post.text.replace(/\s+/g, ' ').trim().slice(0, 120);
    const description = post.text.replace(/\s+/g, ' ').trim().slice(0, 200);
    const origin = 'https://pr-agency-alpha.vercel.app';
    return { title, description, openGraph: { title, description, siteName: title, type: 'article', url: `${origin}/posts/${id}`, images: post.image ? [{ url: `${origin}/api/posts/${id}/image` }] : [] }, twitter: { card: post.image ? 'summary_large_image' : 'summary', title, description, images: post.image ? [`${origin}/api/posts/${id}/image`] : [] } };
  } catch { return { title: 'Post' }; }
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) { return <PostDetailClient id={(await params).id} />; }
