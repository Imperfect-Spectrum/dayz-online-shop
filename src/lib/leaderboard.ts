export const fetchLeaderboardsKills = async () => {
  const response = await fetch('http://localhost:5000/api/leaderboard/leaderboardsKills');
  if (!response.ok) {
    throw new Error('Failed to fetch leaderboardsKills');
  }
  return response.json();
};

export const fetchLeaderboardsDeaths = async () => {
  const response = await fetch('http://localhost:5000/api/leaderboard/leaderboardsDeaths');
  if (!response.ok) {
    throw new Error('Failed to fetch leaderboardsDeaths');
  }
  return response.json();
};

export const fetchLeaderboardsPlaytime = async () => {
  const response = await fetch('http://localhost:5000/api/leaderboard/leaderboardsPlaytime');
  if (!response.ok) {
    throw new Error('Failed to fetch leaderboardsPlaytime');
  }
  return response.json();
};
