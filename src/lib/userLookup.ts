export interface UserLookupResponse {
  steamID: string;
  cftoolsID: string;
  last_updated: string;
  servers: {
    [key: string]: ServerData; // Ключ может быть любым названием сервера (например, 'aod', 'nh', 'dz')
  };
}

export interface ServerData {
  stats: ServerStats | null; // Статистика сервера или null, если данных нет
  bans: Ban[]; // История банов
  error?: string; // Возможная ошибка
}

export interface ServerStats {
  kills: number;
  deaths: number;
  kdratio: number;
  playtime: number;
  name_history: string[];
  zones: Zones;
  weapons: { [key: string]: WeaponStats }; // Динамический ключ для каждого оружия
  created_at: string;
  distance_traveled: number;
  hits: number;
  longest_shot: number;
  longest_kill: number;
}

export interface Zones {
  brain?: number;
  head?: number;
  leftarm?: number;
  rightarm?: number;
  leftleg?: number;
  rightleg?: number;
  torso?: number;
  lefthand?: number;
  righthand?: number;
  leftfoot?: number;
  rightfoot?: number;
  [key: string]: number | undefined; // Включение динамических ключей, таких как пустая строка ("")
}

export interface WeaponStats {
  damage: number;
  deaths: number;
  hits: number;
  kills: number;
  longest_kill: number;
  longest_shot: number;
  zones: Zones; // Оружие тоже может иметь информацию о зонах
}

export interface Ban {
  created_at: string;
  expires_at: string;
  reason: string;
  status: string; // Пример: 'Ban.EXPIRED'
}

export const lookupUser = async (steamID: string): Promise<UserLookupResponse> => {
  const response = await fetch('http://localhost:5000/api/user-lookup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ steamID }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user data');
  }

  return await response.json();
};
