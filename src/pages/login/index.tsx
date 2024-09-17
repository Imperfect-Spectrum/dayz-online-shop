import { GetServerSidePropsContext, GetServerSidePropsResult, NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { signIn, signOut } from 'next-auth/react';
import { getAuthOptions } from '../api/auth/[...nextauth]';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
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
import { lookupUser, UserLookupResponse } from '@/lib/userLookup';
import { Crosshair, Hourglass, Laptop, Skull } from 'lucide-react';
import { useState } from 'react';

interface WeaponData {
  damage: number;
  deaths: number;
  hits: number;
  kills: number;
  longest_kill: number;
  longest_shot: number;
  zones: Record<string, number>;
}

interface WeaponEntry {
  name: string;
  kills: number;
  longestKill: number;
  longestShot: number;
  hits: number;
  damage: number;
}

interface DataWeapons {
  [key: string]: WeaponData;
}

interface IProps {
  userData: UserLookupResponse | null;
  nameSteam: string | null;
  imageSteam: string | null;
  userSession: any | null;
}

interface UserProps {
  userData: UserLookupResponse | null;
  nameSteam: string | null;
  imageSteam: string | null;
  userSession: any | null;
}

export default function Login({ userData, nameSteam, imageSteam, userSession }: UserProps) {
  const [activeButton, setActiveButton] = useState<string>('aod');
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  if (!userSession?.user) {
    return (
      <div className="pb-5 w-[100%] flex flex-col items-center justify-center">
        <h1 className="mb-12 text-4xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-white text-center mt-5">
          Личная статистика
        </h1>
        <div className="flex flex-col  items-center justify-center">
          <p className="mb-6 text-4xl font-normal text-white text-center">Вы не вошли в свой аккаунт :(</p>
          <p className="mb-6 text-2xl font-normal text-white text-center">Или его нет на наших серверах</p>
          <div>
            <Button
              variant="default"
              size={'lg'}
              className="bg-white text-black animate-pulse"
              onClick={() => signIn('steam')}
            >
              Авторизоваться через Steam
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const chartDataAod = [
    { zone: 'brain', count: userData?.servers.aod.stats?.zones.brain, fill: 'hsl(var(--chart-1))' },
    { zone: 'head', count: userData?.servers.aod.stats?.zones.head, fill: 'hsl(var(--chart-2))' },
    { zone: 'leftarm', count: userData?.servers.aod.stats?.zones.leftarm, fill: 'hsl(var(--chart-3))' },
    { zone: 'leftfoot', count: userData?.servers.aod.stats?.zones.leftfoot, fill: 'hsl(var(--chart-4))' },
    { zone: 'lefthand', count: userData?.servers.aod.stats?.zones.lefthand, fill: 'hsl(var(--chart-5))' },
    { zone: 'leftleg', count: userData?.servers.aod.stats?.zones.leftleg, fill: 'hsl(var(--chart-6))' },
    { zone: 'rightarm', count: userData?.servers.aod.stats?.zones.rightarm, fill: 'hsl(var(--chart-7))' },
    { zone: 'rightfoot', count: userData?.servers.aod.stats?.zones.rightfoot, fill: 'hsl(var(--chart-8))' },
    { zone: 'righthand', count: userData?.servers.aod.stats?.zones.righthand, fill: 'hsl(var(--chart-9))' },
    { zone: 'rightleg', count: userData?.servers.aod.stats?.zones.rightleg, fill: 'hsl(var(--chart-10))' },
    { zone: 'torso', count: userData?.servers.aod.stats?.zones.torso, fill: 'hsl(var(--chart-11))' },
  ];

  const chartDataNh = [
    { zone: 'brain', count: userData?.servers.nh.stats?.zones.brain, fill: 'hsl(var(--chart-1))' },
    { zone: 'head', count: userData?.servers.nh.stats?.zones.head, fill: 'hsl(var(--chart-2))' },
    { zone: 'leftarm', count: userData?.servers.nh.stats?.zones.leftarm, fill: 'hsl(var(--chart-3))' },
    { zone: 'leftfoot', count: userData?.servers.nh.stats?.zones.leftfoot, fill: 'hsl(var(--chart-4))' },
    { zone: 'lefthand', count: userData?.servers.nh.stats?.zones.lefthand, fill: 'hsl(var(--chart-5))' },
    { zone: 'leftleg', count: userData?.servers.nh.stats?.zones.leftleg, fill: 'hsl(var(--chart-6))' },
    { zone: 'rightarm', count: userData?.servers.nh.stats?.zones.rightarm, fill: 'hsl(var(--chart-7))' },
    { zone: 'rightfoot', count: userData?.servers.nh.stats?.zones.rightfoot, fill: 'hsl(var(--chart-8))' },
    { zone: 'righthand', count: userData?.servers.nh.stats?.zones.righthand, fill: 'hsl(var(--chart-9))' },
    { zone: 'rightleg', count: userData?.servers.nh.stats?.zones.rightleg, fill: 'hsl(var(--chart-10))' },
    { zone: 'torso', count: userData?.servers.nh.stats?.zones.torso, fill: 'hsl(var(--chart-11))' },
  ];

  const chartDataDz = [
    { zone: 'brain', count: userData?.servers.dz.stats?.zones.brain, fill: 'hsl(var(--chart-1))' },
    { zone: 'head', count: userData?.servers.dz.stats?.zones.head, fill: 'hsl(var(--chart-2))' },
    { zone: 'leftarm', count: userData?.servers.dz.stats?.zones.leftarm, fill: 'hsl(var(--chart-3))' },
    { zone: 'leftfoot', count: userData?.servers.dz.stats?.zones.leftfoot, fill: 'hsl(var(--chart-4))' },
    { zone: 'lefthand', count: userData?.servers.dz.stats?.zones.lefthand, fill: 'hsl(var(--chart-5))' },
    { zone: 'leftleg', count: userData?.servers.dz.stats?.zones.leftleg, fill: 'hsl(var(--chart-6))' },
    { zone: 'rightarm', count: userData?.servers.dz.stats?.zones.rightarm, fill: 'hsl(var(--chart-7))' },
    { zone: 'rightfoot', count: userData?.servers.dz.stats?.zones.rightfoot, fill: 'hsl(var(--chart-8))' },
    { zone: 'righthand', count: userData?.servers.dz.stats?.zones.righthand, fill: 'hsl(var(--chart-9))' },
    { zone: 'rightleg', count: userData?.servers.dz.stats?.zones.rightleg, fill: 'hsl(var(--chart-10))' },
    { zone: 'torso', count: userData?.servers.dz.stats?.zones.torso, fill: 'hsl(var(--chart-11))' },
  ];

  const chartConfig = {
    brain: {
      label: 'Мозг',
      color: 'hsl(var(--chart-1))',
    },
    head: {
      label: 'Голова',
      color: 'hsl(var(--chart-2))',
    },
    leftarm: {
      label: 'Левая рука',
      color: 'hsl(var(--chart-3))',
    },
    leftfoot: {
      label: 'Левая ступня',
      color: 'hsl(var(--chart-4))',
    },
    lefthand: {
      label: 'Левая кисть',
      color: 'hsl(var(--chart-5))',
    },
    leftleg: {
      label: 'Левая нога',
      color: 'hsl(var(--chart-6))',
    },
    rightarm: {
      label: 'Правая рука',
      color: 'hsl(var(--chart-7))',
    },
    rightfoot: {
      label: 'Правая ступня',
      color: 'hsl(var(--chart-8))',
    },
    righthand: {
      label: 'Правая кисть',
      color: 'hsl(var(--chart-9))',
    },
    rightleg: {
      label: 'Правая нога',
      color: 'hsl(var(--chart-10))',
    },
    torso: {
      label: 'Туловище',
      color: 'hsl(var(--chart-11))',
    },
  } satisfies ChartConfig;

  // function transformData(data: DataWeapons): WeaponEntry[] {
  //   const result = Object.keys(data)
  //     .map((key) => {
  //       const weapon = data[key];
  //       return {
  //         name: key,
  //         kills: weapon.kills,
  //         longestKill: weapon.longest_kill,
  //         longestShot: weapon.longest_shot,
  //         hits: weapon.hits,
  //         damage: weapon.damage,
  //       };
  //     })
  //     .filter((weapon) => weapon.kills > 1);

  //   result.sort((a, b) => b.kills - a.kills);

  //   return result;
  // }

  // const transformedData = transformData(userData?.servers.aod.stats?.weapons || undefined);

  return (
    <div className="pb-5 w-[100%] flex flex-col items-center justify-center gap-5">
      <h1 className="mb-12 text-4xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-white text-center mt-5">
        Личная статистика
      </h1>
      <div className="inline-flex rounded-md shadow-sm mx-auto" role="group">
        <button
          type="button"
          className={`inline-flex items-center px-4 py-2 text-sm font-medium border rounded-s-lg focus:z-10 focus:ring-2 focus:ring-gray-500 dark:border-white dark:hover:bg-gray-700 dark:focus:bg-gray-700
          ${
            activeButton === 'aod'
              ? 'bg-gray-900 text-white dark:bg-gray-700'
              : 'bg-transparent text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white dark:text-white'
          }`}
          onClick={() => handleButtonClick('aod')}
        >
          <Laptop />
          AOD
        </button>

        <button
          type="button"
          className={`inline-flex items-center px-4 py-2 text-sm font-medium border-t border-b focus:z-10 focus:ring-2 focus:ring-gray-500 dark:border-white dark:hover:bg-gray-700 dark:focus:bg-gray-700
          ${
            activeButton === 'nh'
              ? 'bg-gray-900 text-white dark:bg-gray-700'
              : 'bg-transparent text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white dark:text-white'
          }`}
          onClick={() => handleButtonClick('nh')}
        >
          <Laptop />
          NH
        </button>

        <button
          type="button"
          className={`inline-flex items-center px-4 py-2 text-sm font-medium border rounded-e-lg focus:z-10 focus:ring-2 focus:ring-gray-500 dark:border-white dark:hover:bg-gray-700 dark:focus:bg-gray-700
          ${
            activeButton === 'dz'
              ? 'bg-gray-900 text-white dark:bg-gray-700'
              : 'bg-transparent text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white dark:text-white'
          }`}
          onClick={() => handleButtonClick('dz')}
        >
          <Laptop />
          DZ
        </button>
      </div>
      {activeButton === 'aod' && (
        <>
          <div className="flex flex-col xl:flex-row xl:justify-between justify-center w-[80%] gap-5">
            <div className="flex flex-col text-center items-center justify-center mb-10 w-[100%] xl:w-[20%] mr-20">
              <p className="text-2xl font-extrabold dark:text-white text-center mb-10">Информация об аккаунте</p>
              <img
                width={100}
                height={100}
                src={imageSteam || ''}
                alt="profile_img"
                loading="lazy"
                className="rounded-full"
              />
              <div className="text-left">
                <div className="flex gap-2">
                  <p className="text-2xl font-medium dark:text-white text-center">Имя: </p>
                  <p className="text-2xl font-bold dark:text-white text-center">{nameSteam}</p>
                </div>
                <div className="flex gap-2">
                  <p className="text-2xl font-medium dark:text-white text-center">SteamID: </p>
                  <p className="text-2xl font-bold dark:text-white text-center">{userData?.steamID}</p>
                </div>
                <div className="flex gap-2">
                  <p className="text-2xl font-medium dark:text-white text-center">Последнее имя: </p>
                  <p className="text-2xl font-bold dark:text-white text-center">
                    {userData?.servers.aod.stats?.name_history[0]}
                  </p>
                </div>
              </div>
              <Button
                variant="default"
                size={'lg'}
                className="bg-white text-black animate-pulse mt-10 w-full"
                onClick={() => signOut()}
              >
                Выйти из аккаунта
              </Button>
            </div>
            <div className="xl:w-[80%] w-[100%]">
              <p className="text-2xl font-extrabold dark:text-white text-center mb-10">Личная статистика</p>
              <div className="flex flex-wrap justify-center items-center gap-10">
                <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-2xl font-medium dark:text-black text-center">Дата создания: </p>
                    <p className="text-2xl font-bold dark:text-black text-center">
                      {new Date(userData?.servers.aod.stats?.created_at || '').toLocaleDateString('ru-RU')}
                    </p>
                  </div>
                </div>
                <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-2xl font-medium dark:text-black text-center">Пройденное расстояние(км): </p>
                    <p className="text-2xl font-bold dark:text-black text-center">
                      {((userData?.servers.aod.stats?.distance_traveled || 0) / 1000).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-2xl font-medium dark:text-black text-center">Время в игре(ч): </p>
                    <p className="text-2xl font-bold dark:text-black text-center">
                      {((userData?.servers.aod.stats?.playtime || 0) / 3600).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-2xl font-medium dark:text-black text-center">Убийств: </p>
                    <p className="text-2xl font-bold dark:text-black text-center">
                      {userData?.servers.aod.stats?.kills || 0}
                    </p>
                  </div>
                </div>
                <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-2xl font-medium dark:text-black text-center">Смертей: </p>
                    <p className="text-2xl font-bold dark:text-black text-center">
                      {userData?.servers.aod.stats?.deaths || 0}
                    </p>
                  </div>
                </div>
                <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-2xl font-medium dark:text-black text-center">КД(%): </p>
                    <p className="text-2xl font-bold dark:text-black text-center">
                      {userData?.servers.aod.stats?.kdratio || 0}
                    </p>
                  </div>
                </div>
                <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-2xl font-medium dark:text-black text-center">Кол-во попаданий: </p>
                    <p className="text-2xl font-bold dark:text-black text-center">
                      {userData?.servers.aod.stats?.hits || 0}
                    </p>
                  </div>
                </div>
                <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-2xl font-medium dark:text-black text-center">Дальность попадания: </p>
                    <p className="text-2xl font-bold dark:text-black text-center">
                      {userData?.servers.aod.stats?.longest_shot || 0}
                    </p>
                  </div>
                </div>
                <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-2xl font-medium dark:text-black text-center">Дальность убийства: </p>
                    <p className="text-2xl font-bold dark:text-black text-center">
                      {userData?.servers.aod.stats?.longest_kill || 0}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row xl:justify-between justify-center items-center w-[80%] xl:h-[600px] h-[1200px]">
            <div className="flex flex-col xl:w-[20%] w-[100%] xl:mr-20 mr-0">
              <p className="text-2xl font-extrabold dark:text-white text-center mb-10">История имен:</p>
              <ScrollArea className="w-[100%] rounded-md border">
                <div className="p-4">
                  <h4 className="mb-4 text-xl font-medium leading-none">История последних имен: </h4>
                  {userData?.servers.aod.stats?.name_history.map((name, index) => (
                    <div key={index}>
                      <div className="text-lg">{index + ': ' + name}</div>
                      {index < (userData?.servers.aod.stats?.name_history.length || 0) - 1 && (
                        <Separator className="my-2" />
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
            <div className="flex flex-col w-[100%]">
              <p className="text-2xl font-extrabold dark:text-white text-center mb-10">История банов:</p>
              <Table className="">
                <TableCaption>Полная история ваших банов.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Создан</TableHead>
                    <TableHead>Истек</TableHead>
                    <TableHead>Причина</TableHead>
                    <TableHead>Статус</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userData?.servers.aod.bans.map((entry, index) => (
                    <TableRow key={index}>
                      <TableCell>{new Date(entry.created_at).toLocaleString()}</TableCell>
                      <TableCell>{new Date(entry.expires_at).toLocaleString()}</TableCell>
                      <TableCell>{entry.reason}</TableCell>
                      <TableCell>{entry.status === 'Ban.EXPIRED' ? 'Истек' : 'Не истек'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <Card className="xl:w-[50%] w-[100%]">
            <CardHeader>
              <CardTitle>Гистограмма - Попадания по зонам тела</CardTitle>
              <CardDescription>Распределение подсчетов по зонам</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <BarChart accessibilityLayer data={chartDataAod}>
                  <CartesianGrid vertical={true} />
                  <XAxis
                    dataKey="zone"
                    tickLine={true}
                    tickMargin={10}
                    axisLine={true}
                    tickFormatter={(value) => chartConfig[value as keyof typeof chartConfig]?.label}
                  />
                  <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
                  <Bar dataKey="count" strokeWidth={2} radius={5} activeIndex={2} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </>
      )}
      {activeButton === 'nh' && (
        <>
          <div className="flex flex-col xl:flex-row xl:justify-between justify-center w-[80%] gap-5">
            <div className="flex flex-col text-center items-center justify-center mb-10 w-[100%] xl:w-[20%] mr-20">
              <p className="text-2xl font-extrabold dark:text-white text-center mb-10">Информация об аккаунте</p>
              <img
                width={100}
                height={100}
                src={imageSteam || ''}
                alt="profile_img"
                loading="lazy"
                className="rounded-full"
              />
              <div className="text-left">
                <div className="flex gap-2">
                  <p className="text-2xl font-medium dark:text-white text-center">Имя: </p>
                  <p className="text-2xl font-bold dark:text-white text-center">{nameSteam}</p>
                </div>
                <div className="flex gap-2">
                  <p className="text-2xl font-medium dark:text-white text-center">SteamID: </p>
                  <p className="text-2xl font-bold dark:text-white text-center">{userData?.steamID}</p>
                </div>
                <div className="flex gap-2">
                  <p className="text-2xl font-medium dark:text-white text-center">Последнее имя: </p>
                  <p className="text-2xl font-bold dark:text-white text-center">
                    {userData?.servers.nh.stats?.name_history[0]}
                  </p>
                </div>
              </div>
              <Button
                variant="default"
                size={'lg'}
                className="bg-white text-black animate-pulse mt-10 w-full"
                onClick={() => signOut()}
              >
                Выйти из аккаунта
              </Button>
            </div>
            <div className="xl:w-[80%] w-[100%]">
              <p className="text-2xl font-extrabold dark:text-white text-center mb-10">Личная статистика</p>
              <div className="flex flex-wrap justify-center items-center gap-10">
                <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-2xl font-medium dark:text-black text-center">Дата создания: </p>
                    <p className="text-2xl font-bold dark:text-black text-center">
                      {new Date(userData?.servers.nh.stats?.created_at || '').toLocaleDateString('ru-RU')}
                    </p>
                  </div>
                </div>
                <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-2xl font-medium dark:text-black text-center">Пройденное расстояние(км): </p>
                    <p className="text-2xl font-bold dark:text-black text-center">
                      {((userData?.servers.nh.stats?.distance_traveled || 0) / 1000).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-2xl font-medium dark:text-black text-center">Время в игре(ч): </p>
                    <p className="text-2xl font-bold dark:text-black text-center">
                      {((userData?.servers.nh.stats?.playtime || 0) / 3600).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-2xl font-medium dark:text-black text-center">Убийств: </p>
                    <p className="text-2xl font-bold dark:text-black text-center">
                      {userData?.servers.nh.stats?.kills || 0}
                    </p>
                  </div>
                </div>
                <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-2xl font-medium dark:text-black text-center">Смертей: </p>
                    <p className="text-2xl font-bold dark:text-black text-center">
                      {userData?.servers.nh.stats?.deaths || 0}
                    </p>
                  </div>
                </div>
                <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-2xl font-medium dark:text-black text-center">КД(%): </p>
                    <p className="text-2xl font-bold dark:text-black text-center">
                      {userData?.servers.nh.stats?.kdratio || 0}
                    </p>
                  </div>
                </div>
                <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-2xl font-medium dark:text-black text-center">Кол-во попаданий: </p>
                    <p className="text-2xl font-bold dark:text-black text-center">
                      {userData?.servers.nh.stats?.hits || 0}
                    </p>
                  </div>
                </div>
                <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-2xl font-medium dark:text-black text-center">Дальность попадания: </p>
                    <p className="text-2xl font-bold dark:text-black text-center">
                      {userData?.servers.nh.stats?.longest_shot || 0}
                    </p>
                  </div>
                </div>
                <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-2xl font-medium dark:text-black text-center">Дальность убийства: </p>
                    <p className="text-2xl font-bold dark:text-black text-center">
                      {userData?.servers.nh.stats?.longest_kill || 0}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row xl:justify-between justify-center items-center w-[80%] xl:h-[600px] h-[1200px]">
            <div className="flex flex-col xl:w-[20%] w-[100%] xl:mr-20 mr-0">
              <p className="text-2xl font-extrabold dark:text-white text-center mb-10">История имен:</p>
              <ScrollArea className="w-[100%] rounded-md border">
                <div className="p-4">
                  <h4 className="mb-4 text-xl font-medium leading-none">История последних имен: </h4>
                  {userData?.servers.nh.stats?.name_history.map((name, index) => (
                    <div key={index}>
                      <div className="text-lg">{index + ': ' + name}</div>
                      {index < (userData?.servers.nh.stats?.name_history.length || 0) - 1 && (
                        <Separator className="my-2" />
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
            <div className="flex flex-col w-[100%]">
              <p className="text-2xl font-extrabold dark:text-white text-center mb-10">История банов:</p>
              <Table className="">
                <TableCaption>Полная история ваших банов.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Создан</TableHead>
                    <TableHead>Истек</TableHead>
                    <TableHead>Причина</TableHead>
                    <TableHead>Статус</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userData?.servers.nh.bans.map((entry, index) => (
                    <TableRow key={index}>
                      <TableCell>{new Date(entry.created_at).toLocaleString()}</TableCell>
                      <TableCell>{new Date(entry.expires_at).toLocaleString()}</TableCell>
                      <TableCell>{entry.reason}</TableCell>
                      <TableCell>{entry.status === 'Ban.EXPIRED' ? 'Истек' : 'Не истек'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <Card className="xl:w-[50%] w-[100%]">
            <CardHeader>
              <CardTitle>Гистограмма - Попадания по зонам тела</CardTitle>
              <CardDescription>Распределение подсчетов по зонам</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <BarChart accessibilityLayer data={chartDataNh}>
                  <CartesianGrid vertical={true} />
                  <XAxis
                    dataKey="zone"
                    tickLine={true}
                    tickMargin={10}
                    axisLine={true}
                    tickFormatter={(value) => chartConfig[value as keyof typeof chartConfig]?.label}
                  />
                  <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
                  <Bar dataKey="count" strokeWidth={2} radius={5} activeIndex={2} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </>
      )}
      {activeButton === 'dz' && (
        <>
          <div className="flex flex-col xl:flex-row xl:justify-between justify-center w-[80%] gap-5">
            <div className="flex flex-col text-center items-center justify-center mb-10 w-[100%] xl:w-[20%] mr-20">
              <p className="text-2xl font-extrabold dark:text-white text-center mb-10">Информация об аккаунте</p>
              <img
                width={100}
                height={100}
                src={imageSteam || ''}
                alt="profile_img"
                loading="lazy"
                className="rounded-full"
              />
              <div className="text-left">
                <div className="flex gap-2">
                  <p className="text-2xl font-medium dark:text-white text-center">Имя: </p>
                  <p className="text-2xl font-bold dark:text-white text-center">{nameSteam}</p>
                </div>
                <div className="flex gap-2">
                  <p className="text-2xl font-medium dark:text-white text-center">SteamID: </p>
                  <p className="text-2xl font-bold dark:text-white text-center">{userData?.steamID}</p>
                </div>
                <div className="flex gap-2">
                  <p className="text-2xl font-medium dark:text-white text-center">Последнее имя: </p>
                  <p className="text-2xl font-bold dark:text-white text-center">
                    {userData?.servers.dz.stats?.name_history[0]}
                  </p>
                </div>
              </div>
              <Button
                variant="default"
                size={'lg'}
                className="bg-white text-black animate-pulse mt-10 w-full"
                onClick={() => signOut()}
              >
                Выйти из аккаунта
              </Button>
            </div>
            <div className="xl:w-[80%] w-[100%]">
              <p className="text-2xl font-extrabold dark:text-white text-center mb-10">Личная статистика</p>
              <div className="flex flex-wrap justify-center items-center gap-10">
                <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-2xl font-medium dark:text-black text-center">Дата создания: </p>
                    <p className="text-2xl font-bold dark:text-black text-center">
                      {new Date(userData?.servers.dz.stats?.created_at || '').toLocaleDateString('ru-RU')}
                    </p>
                  </div>
                </div>
                <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-2xl font-medium dark:text-black text-center">Пройденное расстояние(км): </p>
                    <p className="text-2xl font-bold dark:text-black text-center">
                      {((userData?.servers.dz.stats?.distance_traveled || 0) / 1000).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-2xl font-medium dark:text-black text-center">Время в игре(ч): </p>
                    <p className="text-2xl font-bold dark:text-black text-center">
                      {((userData?.servers.dz.stats?.playtime || 0) / 3600).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-2xl font-medium dark:text-black text-center">Убийств: </p>
                    <p className="text-2xl font-bold dark:text-black text-center">
                      {userData?.servers.dz.stats?.kills || 0}
                    </p>
                  </div>
                </div>
                <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-2xl font-medium dark:text-black text-center">Смертей: </p>
                    <p className="text-2xl font-bold dark:text-black text-center">
                      {userData?.servers.dz.stats?.deaths || 0}
                    </p>
                  </div>
                </div>
                <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-2xl font-medium dark:text-black text-center">КД(%): </p>
                    <p className="text-2xl font-bold dark:text-black text-center">
                      {userData?.servers.dz.stats?.kdratio || 0}
                    </p>
                  </div>
                </div>
                <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-2xl font-medium dark:text-black text-center">Кол-во попаданий: </p>
                    <p className="text-2xl font-bold dark:text-black text-center">
                      {userData?.servers.dz.stats?.hits || 0}
                    </p>
                  </div>
                </div>
                <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-2xl font-medium dark:text-black text-center">Дальность попадания: </p>
                    <p className="text-2xl font-bold dark:text-black text-center">
                      {userData?.servers.dz.stats?.longest_shot || 0}
                    </p>
                  </div>
                </div>
                <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-2xl font-medium dark:text-black text-center">Дальность убийства: </p>
                    <p className="text-2xl font-bold dark:text-black text-center">
                      {userData?.servers.dz.stats?.longest_kill || 0}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row xl:justify-between justify-center items-center w-[80%] xl:h-[600px] h-[1200px]">
            <div className="flex flex-col xl:w-[20%] w-[100%] xl:mr-20 mr-0">
              <p className="text-2xl font-extrabold dark:text-white text-center mb-10">История имен:</p>
              <ScrollArea className="w-[100%] rounded-md border">
                <div className="p-4">
                  <h4 className="mb-4 text-xl font-medium leading-none">История последних имен: </h4>
                  {userData?.servers.dz.stats?.name_history.map((name, index) => (
                    <div key={index}>
                      <div className="text-lg">{index + ': ' + name}</div>
                      {index < (userData?.servers.dz.stats?.name_history.length || 0) - 1 && (
                        <Separator className="my-2" />
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
            <div className="flex flex-col w-[100%]">
              <p className="text-2xl font-extrabold dark:text-white text-center mb-10">История банов:</p>
              <Table className="">
                <TableCaption>Полная история ваших банов.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Создан</TableHead>
                    <TableHead>Истек</TableHead>
                    <TableHead>Причина</TableHead>
                    <TableHead>Статус</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {userData?.servers.dz.bans.map((entry, index) => (
                    <TableRow key={index}>
                      <TableCell>{new Date(entry.created_at).toLocaleString()}</TableCell>
                      <TableCell>{new Date(entry.expires_at).toLocaleString()}</TableCell>
                      <TableCell>{entry.reason}</TableCell>
                      <TableCell>{entry.status === 'Ban.EXPIRED' ? 'Истек' : 'Не истек'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          <Card className="xl:w-[50%] w-[100%]">
            <CardHeader>
              <CardTitle>Гистограмма - Попадания по зонам тела</CardTitle>
              <CardDescription>Распределение подсчетов по зонам</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <BarChart accessibilityLayer data={chartDataDz}>
                  <CartesianGrid vertical={true} />
                  <XAxis
                    dataKey="zone"
                    tickLine={true}
                    tickMargin={10}
                    axisLine={true}
                    tickFormatter={(value) => chartConfig[value as keyof typeof chartConfig]?.label}
                  />
                  <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
                  <Bar dataKey="count" strokeWidth={2} radius={5} activeIndex={2} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<IProps>> {
  // @ts-expect-error
  const userSession = await getServerSession(context.req, context.res, getAuthOptions(context.req));

  const steamID = userSession?.user?.email?.split('@')[0] || null;
  const nameSteam = userSession?.user?.name || null;
  const imageSteam = userSession?.user?.image || null;

  try {
    const userData = steamID ? await lookupUser(steamID) : null;
    return {
      props: {
        userData,
        nameSteam,
        imageSteam,
        userSession,
      },
    };
  } catch (error) {
    console.error('Error fetching user data:', error);
    return {
      props: {
        userData: null,
        nameSteam: null,
        imageSteam: null,
        userSession: null,
      },
    };
  }
}
