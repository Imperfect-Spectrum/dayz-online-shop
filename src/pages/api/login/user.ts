import { lookupUser } from '@/lib/userLookup';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { steamID } = req.body;

  if (!steamID) {
    return res.status(400).json({ message: 'steamID is required' });
  }

  try {
    const userData = await lookupUser(steamID);
    return res.status(200).json(userData);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to fetch user data', error });
  }
}
