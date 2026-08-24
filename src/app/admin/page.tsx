import { redirect } from 'next/navigation';
import { isAdmin } from '@/lib/admin-auth';
import PostsExperience from '@/components/PostsExperience';

export default async function AdminPage() {
  if (!await isAdmin()) redirect('/admin/login');
  return <PostsExperience adminMode />;
}
