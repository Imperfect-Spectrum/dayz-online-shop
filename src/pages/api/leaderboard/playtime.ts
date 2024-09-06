import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchLeaderboardsPlaytime } from '@/lib/leaderboard';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const data = await fetchLeaderboardsPlaytime();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching leaderboardsPlaytime data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
