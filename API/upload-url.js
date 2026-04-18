import { put } from '@vercel/blob';

export default async function handler(req, res) {
  const { name } = JSON.parse(req.body);

  const blob = await put(name, null, {
    access: 'public',
    addRandomSuffix: true,
  });

  res.json({ url: blob.url });
}
