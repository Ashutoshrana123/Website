import { redirect } from 'next/navigation';
import { isAdmin } from '@/lib/admin-auth';
import PostsExperience from '@/components/PostsExperience';
import AdminContentManager from '@/components/AdminContentManager';

export default async function AdminPage() {
  if (!await isAdmin()) redirect('/admin/login');
  return <><PostsExperience adminMode /><AdminContentManager /></>;
}
