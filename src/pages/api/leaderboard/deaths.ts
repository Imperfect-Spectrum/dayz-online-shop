import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchLeaderboardsDeaths } from '@/lib/leaderboard';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const data = await fetchLeaderboardsDeaths();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching leaderboardsDeaths data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
