import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { fetchLeaderboardsDeaths, fetchLeaderboardsKills, fetchLeaderboardsPlaytime } from '@/lib/leaderboard';
import { Crosshair, Hourglass, Skull } from 'lucide-react';
import { GetServerSideProps } from 'next';
import { useState } from 'react';

interface Player {
  animal_deaths?: number;
  cftools_id: string;
  deaths: number;
  environment_deaths?: number;
  explosion_deaths?: number;
  falldamage_deaths?: number;
  hits: number;
  kdratio: number;
  kills: number;
  latest_name: string;
  longest_kill: number;
  longest_shot: number;
  playtime: number;
  rank: number;
  suicides?: number;
  infected_deaths?: number;
}

// Интерфейс для корневого объекта
interface GameData {
  aod: Player[];
  nh: Player[];
  dz: Player[];
}

interface LeaderboardProps {
  leaderboardsKills: GameData;
  leaderboardsDeaths: GameData;
  leaderboarPlaytime: GameData;
}

export default function Leaderboard({ leaderboardsKills, leaderboardsDeaths, leaderboarPlaytime }: LeaderboardProps) {
  const [activeButton, setActiveButton] = useState<string>('kills');
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };
  return (
    <div className="flex flex-col gap-6">
      <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-white text-center mt-5">
        Таблицы лидеров наших серверов!
      </h1>
      <p className="text-base font-normal dark:text-white text-center">(Обновления происходят каждую неделю!)</p>
      <div className="inline-flex rounded-md shadow-sm mx-auto" role="group">
        <button
          type="button"
          className={`inline-flex items-center px-4 py-2 text-sm font-medium border rounded-s-lg focus:z-10 focus:ring-2 focus:ring-gray-500 dark:border-white dark:hover:bg-gray-700 dark:focus:bg-gray-700
          ${
            activeButton === 'kills'
              ? 'bg-gray-900 text-white dark:bg-gray-700'
              : 'bg-transparent text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white dark:text-white'
          }`}
          onClick={() => handleButtonClick('kills')}
        >
          <Crosshair />
          Убийства
        </button>

        <button
          type="button"
          className={`inline-flex items-center px-4 py-2 text-sm font-medium border-t border-b focus:z-10 focus:ring-2 focus:ring-gray-500 dark:border-white dark:hover:bg-gray-700 dark:focus:bg-gray-700
          ${
            activeButton === 'deaths'
              ? 'bg-gray-900 text-white dark:bg-gray-700'
              : 'bg-transparent text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white dark:text-white'
          }`}
          onClick={() => handleButtonClick('deaths')}
        >
          <Skull />
          Смерти
        </button>

        <button
          type="button"
          className={`inline-flex items-center px-4 py-2 text-sm font-medium border rounded-e-lg focus:z-10 focus:ring-2 focus:ring-gray-500 dark:border-white dark:hover:bg-gray-700 dark:focus:bg-gray-700
          ${
            activeButton === 'time'
              ? 'bg-gray-900 text-white dark:bg-gray-700'
              : 'bg-transparent text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white dark:text-white'
          }`}
          onClick={() => handleButtonClick('time')}
        >
          <Hourglass />
          Время игры
        </button>
      </div>
      {activeButton === 'kills' && (
        <div className="flex  flex-col xl:flex-row items-center justify-center gap-5">
          <div className="xl:w-[30%] w-[95%] h-[600px] flex flex-col justify-center items-center mx-auto">
            <p className="text-2xl font-extrabold dark:text-white text-center mb-10">AOD</p>
            <Table>
              <TableCaption>Таблицы лидеров по убийствам AOD</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Ранг</TableHead>
                  <TableHead>Имя</TableHead>
                  <TableHead>Убийства</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboardsKills.aod.map((player, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{player.rank}</TableCell>
                    <TableCell className="font-medium">{player.latest_name}</TableCell>
                    <TableCell className="font-medium text-green-400">{player.kills}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="xl:w-[30%] w-[95%] h-[600px] flex flex-col justify-center items-center mx-auto">
            <p className="text-2xl font-extrabold dark:text-white text-center mb-10">NH</p>
            <Table>
              <TableCaption>Таблицы лидеров по убийствам NH</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Ранг</TableHead>
                  <TableHead>Имя</TableHead>
                  <TableHead>Убийства</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboardsKills.nh.map((player, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{player.rank}</TableCell>
                    <TableCell className="font-medium">{player.latest_name}</TableCell>
                    <TableCell className="font-medium text-green-400">{player.kills}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="xl:w-[30%] w-[95%] h-[600px] flex flex-col justify-center items-center mx-auto">
            <p className="text-2xl font-extrabold dark:text-white text-center mb-10">DZ</p>
            <Table>
              <TableCaption>Таблицы лидеров по убийствам DZ</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Ранг</TableHead>
                  <TableHead>Имя</TableHead>
                  <TableHead>Убийства</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboardsKills.dz.map((player, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{player.rank}</TableCell>
                    <TableCell className="font-medium">{player.latest_name}</TableCell>
                    <TableCell className="font-medium text-green-400">{player.kills}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
      {activeButton === 'deaths' && (
        <div className="flex  flex-col xl:flex-row items-center justify-center gap-5">
          <div className="xl:w-[30%] w-[95%] h-[600px] flex flex-col justify-center items-center mx-auto">
            <p className="text-2xl font-extrabold dark:text-white text-center mb-10">AOD</p>
            <Table>
              <TableCaption>Таблицы лидеров по смертям AOD</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Ранг</TableHead>
                  <TableHead>Имя</TableHead>
                  <TableHead>Смерти</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboardsDeaths.aod.map((player, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{player.rank}</TableCell>
                    <TableCell className="font-medium">{player.latest_name}</TableCell>
                    <TableCell className="font-medium  text-red-400">{player.deaths}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="xl:w-[30%] w-[95%] h-[600px] flex flex-col justify-center items-center mx-auto">
            <p className="text-2xl font-extrabold dark:text-white text-center mb-10">NH</p>
            <Table>
              <TableCaption>Таблицы лидеров по смертям NH</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Ранг</TableHead>
                  <TableHead>Имя</TableHead>
                  <TableHead>Смерти</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboardsDeaths.nh.map((player, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{player.rank}</TableCell>
                    <TableCell className="font-medium">{player.latest_name}</TableCell>
                    <TableCell className="font-medium  text-red-400">{player.deaths}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="xl:w-[30%] w-[95%] h-[600px] flex flex-col justify-center items-center mx-auto">
            <p className="text-2xl font-extrabold dark:text-white text-center mb-10">DZ</p>
            <Table>
              <TableCaption>Таблицы лидеров по смертям DZ</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Ранг</TableHead>
                  <TableHead>Имя</TableHead>
                  <TableHead>Смерти</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboardsDeaths.dz.map((player, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{player.rank}</TableCell>
                    <TableCell className="font-medium">{player.latest_name}</TableCell>
                    <TableCell className="font-medium  text-red-400">{player.deaths}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
      {activeButton === 'time' && (
        <div className="flex  flex-col xl:flex-row items-center justify-center gap-5">
          <div className="xl:w-[30%] w-[95%] h-[600px] flex flex-col justify-center items-center mx-auto">
            <p className="text-2xl font-extrabold dark:text-white text-center mb-10">AOD</p>
            <Table>
              <TableCaption>Таблицы лидеров по времени игры AOD</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Ранг</TableHead>
                  <TableHead>Имя</TableHead>
                  <TableHead>Время игры</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboarPlaytime.aod.map((player, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{player.rank}</TableCell>
                    <TableCell className="font-medium">{player.latest_name}</TableCell>
                    <TableCell className="font-medium  text-blue-400">
                      {(player.playtime / 3600).toFixed(2)} ч.
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="xl:w-[30%] w-[95%] h-[600px] flex flex-col justify-center items-center mx-auto">
            <p className="text-2xl font-extrabold dark:text-white text-center mb-10">NH</p>
            <Table>
              <TableCaption>Таблицы лидеров по времени игры NH</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Ранг</TableHead>
                  <TableHead>Имя</TableHead>
                  <TableHead>Время игры</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboarPlaytime.nh.map((player, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{player.rank}</TableCell>
                    <TableCell className="font-medium">{player.latest_name}</TableCell>
                    <TableCell className="font-medium  text-blue-400">
                      {(player.playtime / 3600).toFixed(2)} ч.
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="xl:w-[30%] w-[95%] h-[600px] flex flex-col justify-center items-center mx-auto">
            <p className="text-2xl font-extrabold dark:text-white text-center mb-10">DZ</p>
            <Table>
              <TableCaption>Таблицы лидеров по времени игры DZ</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Ранг</TableHead>
                  <TableHead>Имя</TableHead>
                  <TableHead>Время игры</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboarPlaytime.dz.map((player, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{player.rank}</TableCell>
                    <TableCell className="font-medium">{player.latest_name}</TableCell>
                    <TableCell className="font-medium  text-blue-400">
                      {(player.playtime / 3600).toFixed(2)} ч.
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const leaderboardsKills = await fetchLeaderboardsKills();
    const leaderboardsDeaths = await fetchLeaderboardsDeaths();
    const leaderboarPlaytime = await fetchLeaderboardsPlaytime();

    return {
      props: {
        leaderboardsKills,
        leaderboardsDeaths,
        leaderboarPlaytime,
      },
    };
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
    return {
      notFound: true,
    };
  }
};
