import { MongoClient } from 'mongodb';

export type StoredPost = { id: string; name: string; role: string; time: string; text: string; image?: string; video?: string; likes: number; comments: number; mine?: boolean };
type Store = { posts: StoredPost[]; comments: Record<string, string[]> };

const starterPosts: StoredPost[] = [
  { id: 'summer-campaign', name: 'Mira Kapoor', role: 'Creative Director', time: '2 hours ago', text: 'The best campaigns begin with a feeling, not a brief. A quiet look behind the visual language for our summer story.', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85', likes: 124, comments: 18 },
  { id: 'brand-launch', name: 'Arjun Mehta', role: 'Senior Account Lead', time: 'Yesterday', text: 'A beautiful evening welcoming a new name into the room. Thank you to every editor, creator, and partner who made the launch feel so considered.', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85', likes: 89, comments: 11 },
  { id: 'notes-on-pr', name: 'Golden Focus', role: 'Agency Journal', time: '3 days ago', text: 'Attention is fleeting. Trust is earned slowly, story by story. That distinction shapes every conversation we help our clients begin.', likes: 201, comments: 24 },
  { id: 'behind-the-scenes', name: 'Rhea Sethi', role: 'Production Lead', time: '1 week ago', text: 'A few seconds from the set. The energy before a campaign steps into the world is always something special.', video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', likes: 67, comments: 8 },
];

declare global { var mongoClientPromise: Promise<MongoClient> | undefined; }

function getClient() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('MONGODB_URI is not configured.');
  if (!global.mongoClientPromise) global.mongoClientPromise = new MongoClient(uri).connect();
  return global.mongoClientPromise;
}

async function collection() { return (await getClient()).db().collection<Store & { _id: string }>('application_state'); }

export type Inquiry = { name: string; email: string; service: string; message: string; createdAt: Date };

export async function saveInquiry(inquiry: Inquiry) {
  await (await getClient()).db().collection<Inquiry>('inquiries').insertOne(inquiry);
}

export async function readStore(): Promise<Store> {
  const states = await collection();
  const existing = await states.findOne({ _id: 'posts' });
  if (existing) return { posts: existing.posts, comments: existing.comments || {} };
  const store = { posts: starterPosts, comments: {} };
  await states.insertOne({ _id: 'posts', ...store });
  return store;
}

export async function writeStore(store: Store) {
  await (await collection()).updateOne({ _id: 'posts' }, { $set: store }, { upsert: true });
}
