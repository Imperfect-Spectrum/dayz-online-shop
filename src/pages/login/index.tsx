import { GetServerSidePropsContext, GetServerSidePropsResult, NextApiRequest, NextApiResponse } from 'next';
import { Session } from 'next-auth';
import { getServerSession } from 'next-auth/next';
import { signIn, signOut } from 'next-auth/react';
import { getAuthOptions } from '../api/auth/[...nextauth]';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { TrendingUp } from 'lucide-react';
import { Legend, Pie, PieChart } from 'recharts';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { useMemo } from 'react';

export interface IProps {
  userSession: Session | null;
}

export default function Login({ userSession }: IProps) {
  if (!userSession?.user) {
    return (
      <div className="pb-5 w-[100%] flex flex-col items-center justify-center">
        <h1 className="mb-12 text-4xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-white text-center mt-5">
          Личная статистика
        </h1>
        <div className="flex flex-col  items-center justify-center">
          <p className="mb-6 text-4xl font-normal text-white text-center">Вы не вошли в свой аккаунт :(</p>
          <div>
            <Button
              variant="default"
              size={'lg'}
              className="bg-white text-black animate-pulse"
              onClick={() => signIn()}
            >
              Авторизоваться через Steam
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const nameHistory = [
    'Carburetor',
    'Carburetor',
    'Carburetor',
    'Carburetor',
    'Carburetor',
    'Carburetor',
    '[MERC] 21',
    'Carburetor',
    'Carburetor',
    'Carburetor',
    'Carburetor',
    'Carburetor',
    'Carburetor',
    'Carburetor',
    'Carburetor',
    '[MERC] 21',
    'Carburetor',
    'Carburetor',
    'Carburetor',
    'Carburetor',
    'Carburetor',
    'Carburetor',
    'Carburetor',
    'Carburetor',
    '[MERC] 21',
    'Carburetor',
    'Carburetor',
    'Carburetor',
  ];

  const chartData = [
    { zone: 'brain', count: 6, fill: 'hsl(var(--chart-1))' },
    { zone: 'head', count: 110, fill: 'hsl(var(--chart-2))' },
    { zone: 'leftarm', count: 112, fill: 'hsl(var(--chart-3))' },
    { zone: 'leftfoot', count: 1, fill: 'hsl(var(--chart-4))' },
    { zone: 'lefthand', count: 36, fill: 'hsl(var(--chart-5))' },
    { zone: 'leftleg', count: 32, fill: 'hsl(var(--chart-6))' },
    { zone: 'rightarm', count: 105, fill: 'hsl(var(--chart-7))' },
    { zone: 'rightfoot', count: 2, fill: 'hsl(var(--chart-8))' },
    { zone: 'righthand', count: 24, fill: 'hsl(var(--chart-9))' },
    { zone: 'rightleg', count: 30, fill: 'hsl(var(--chart-10))' },
    { zone: 'torso', count: 850, fill: 'hsl(var(--chart-11))' },
  ];

  const chartConfig = {
    hits: {
      label: 'Попаданий',
    },
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
      label: 'Левая нога',
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
      label: 'Правая нога',
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
      label: 'Торс',
      color: 'hsl(var(--chart-11))',
    },
  } satisfies ChartConfig;

  const created_date = '2023-03-23T19:48:13.928000';
  const distance_traveled = 17973119.189065933;
  const time_play = 3000847;

  const totalHits = () => {
    return chartData.reduce((acc, curr) => acc + curr.count, 0);
  };

  return (
    <div className="pb-5 w-[100%] flex flex-col items-center justify-center gap-5">
      <h1 className="mb-12 text-4xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-white text-center mt-5">
        Личная статистика
      </h1>
      <div className="flex justify-center w-[80%]">
        <div className="flex flex-col text-center items-center justify-center mb-10 w-[20%]">
          <p className="text-2xl font-extrabold dark:text-white text-center mb-10">Информация об аккаунте</p>
          <Image
            width={100}
            height={100}
            src={userSession.user.image || ''}
            alt="profile_img"
            loading="lazy"
            className="rounded-full"
          />
          <div className="text-left">
            <div className="flex gap-2">
              <p className="text-2xl font-medium dark:text-white text-center">Имя: </p>
              <p className="text-2xl font-bold dark:text-white text-center">{userSession.user.name}</p>
            </div>
            <div className="flex gap-2">
              <p className="text-2xl font-medium dark:text-white text-center">SteamID: </p>
              <p className="text-2xl font-bold dark:text-white text-center">steamID</p>
            </div>
            <div className="flex gap-2">
              <p className="text-2xl font-medium dark:text-white text-center">Последнее имя: </p>
              <p className="text-2xl font-bold dark:text-white text-center">Carburetor</p>
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
        <div className=" w-[80%]">
          <p className="text-2xl font-extrabold dark:text-white text-center mb-10">Личная статистика</p>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <div className="h-20 bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black w-[25%]">
              <div className="flex gap-2">
                <p className="text-2xl font-medium dark:text-black text-center">Дата создания: </p>
                <p className="text-2xl font-bold dark:text-black text-center">
                  {new Date(created_date).toDateString()}
                </p>
              </div>
            </div>
            <div className="h-20 bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black w-[25%]">
              <div className="flex gap-2">
                <p className="text-2xl font-medium dark:text-black text-center">Пройденное расстояние(км): </p>
                <p className="text-2xl font-bold dark:text-black text-center">
                  {(distance_traveled / 1000).toFixed(0)}
                </p>
              </div>
            </div>
            <div className="h-20 bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black w-[25%]">
              <div className="flex gap-2">
                <p className="text-2xl font-medium dark:text-black text-center">Время в игре(ч): </p>
                <p className="text-2xl font-bold dark:text-black text-center">{(time_play / 3600).toFixed(0)}</p>
              </div>
            </div>
            <div className="h-20 bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black w-[25%]">
              <div className="flex gap-2">
                <p className="text-2xl font-medium dark:text-black text-center">Убийств: </p>
                <p className="text-2xl font-bold dark:text-black text-center">100</p>
              </div>
            </div>
            <div className="h-20 bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black w-[25%]">
              <div className="flex gap-2">
                <p className="text-2xl font-medium dark:text-black text-center">Смертей: </p>
                <p className="text-2xl font-bold dark:text-black text-center">10</p>
              </div>
            </div>
            <div className="h-20 bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black w-[25%]">
              <div className="flex gap-2">
                <p className="text-2xl font-medium dark:text-black text-center">КД(%): </p>
                <p className="text-2xl font-bold dark:text-black text-center">10.0</p>
              </div>
            </div>
            <div className="h-20 bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black w-[25%]">
              <div className="flex gap-2">
                <p className="text-2xl font-medium dark:text-black text-center">Кол-во попаданий: </p>
                <p className="text-2xl font-bold dark:text-black text-center">1328</p>
              </div>
            </div>
            <div className="h-20 bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black w-[25%]">
              <div className="flex gap-2">
                <p className="text-2xl font-medium dark:text-black text-center">Дальность попадания: </p>
                <p className="text-2xl font-bold dark:text-black text-center">377.54</p>
              </div>
            </div>
            <div className="h-20 bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black w-[25%]">
              <div className="flex gap-2">
                <p className="text-2xl font-medium dark:text-black text-center">Дальность убийства: </p>
                <p className="text-2xl font-bold dark:text-black text-center">367.19</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-[80%]  h-[500px]">
        <ScrollArea className=" w-[25%] rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-xl font-medium leading-none">История имен: </h4>
            {nameHistory.map((name, index) => (
              <div key={index}>
                <div className="text-lg">{index + ': ' + name}</div>
                {index < nameHistory.length - 1 && <Separator className="my-2" />}
              </div>
            ))}
          </div>
        </ScrollArea>

        <Card className="flex flex-col w-full">
          <CardHeader className="items-center pb-0">
            <CardTitle>Диаграмма - Пораженные зоны тела (%)</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 pb-0 mt-10">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[350px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
            >
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Pie data={chartData} dataKey="count" label nameKey="zone" />
                <Legend verticalAlign="bottom" height={40} />
              </PieChart>
            </ChartContainer>
          </CardContent>

          <CardFooter className="flex-col text-lg">
            <div className="flex items-center gap-2 font-medium leading-none">Зоны повреждений</div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<IProps>> {
  // @ts-expect-error
  const userSession = await getServerSession(context.req, context.res, getAuthOptions(context.req));

  return {
    props: {
      userSession,
    },
  };
}
