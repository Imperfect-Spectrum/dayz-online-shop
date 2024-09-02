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
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, Rectangle, XAxis } from 'recharts';
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

  const entries = [
    {
      created_at: '2023-06-20T16:24:22.860000Z',
      expires_at: '2023-06-20T16:25:00Z',
      id: '6491d2b622a721ca03b7e77c',
      identifier: '641b6140a5adde1a4f318c4b',
      reason: 'LRP 1d || Zub',
      status: 'Ban.EXPIRED',
      updated_at: '2023-06-20T16:29:01.159000Z',
    },
    {
      created_at: '2024-01-15T18:30:42.172000Z',
      expires_at: '2024-01-16T18:30:00Z',
      id: '65a579d2b1cbe380de3412c7',
      identifier: '641b6140a5adde1a4f318c4b',
      reason: 'nonrp 1d by luci + leshiy',
      status: 'Ban.EXPIRED',
      updated_at: '2024-01-16T18:30:09.759000Z',
    },
    {
      created_at: '2024-02-07T23:16:02.330000Z',
      expires_at: '2024-02-08T23:15:00Z',
      id: '65c40f326eee37c583597721',
      identifier: '641b6140a5adde1a4f318c4b',
      reason: 'RPK 1 d Percival',
      status: 'Ban.EXPIRED',
      updated_at: '2024-02-09T00:03:33.244000Z',
    },
    {
      created_at: '2024-02-14T19:56:23.602000Z',
      expires_at: '2024-02-15T19:55:00Z',
      id: '65cd1ae70ca2802076211bdb',
      identifier: '641b6140a5adde1a4f318c4b',
      reason: 'rpk 1d',
      status: 'Ban.EXPIRED',
      updated_at: '2024-02-14T19:56:23.606000Z',
    },
    {
      created_at: '2024-07-09T21:41:34.553000Z',
      expires_at: '2024-07-10T21:41:00Z',
      id: '668dae8e90a578b68d40a864',
      identifier: '641b6140a5adde1a4f318c4b',
      reason: 'RDM 1d by Cyxoi',
      status: 'Ban.EXPIRED',
      updated_at: '2024-07-09T21:41:34.558000Z',
    },
    {
      created_at: '2024-02-14T19:56:23.602000Z',
      expires_at: '2024-02-15T19:55:00Z',
      id: '65cd1ae70ca2802076211bdb',
      identifier: '641b6140a5adde1a4f318c4b',
      reason: 'rpk 1d',
      status: 'Ban.EXPIRED',
      updated_at: '2024-02-14T19:56:23.606000Z',
    },
    {
      created_at: '2024-07-09T21:41:34.553000Z',
      expires_at: '2024-07-10T21:41:00Z',
      id: '668dae8e90a578b68d40a864',
      identifier: '641b6140a5adde1a4f318c4b',
      reason: 'RDM 1d by Cyxoi',
      status: 'Ban.EXPIRED',
      updated_at: '2024-07-09T21:41:34.558000Z',
    },
    {
      created_at: '2024-02-14T19:56:23.602000Z',
      expires_at: '2024-02-15T19:55:00Z',
      id: '65cd1ae70ca2802076211bdb',
      identifier: '641b6140a5adde1a4f318c4b',
      reason: 'rpk 1d',
      status: 'Ban.EXPIRED',
      updated_at: '2024-02-14T19:56:23.606000Z',
    },
    {
      created_at: '2024-07-09T21:41:34.553000Z',
      expires_at: '2024-07-10T21:41:00Z',
      id: '668dae8e90a578b68d40a864',
      identifier: '641b6140a5adde1a4f318c4b',
      reason: 'RDM 1d by Cyxoi',
      status: 'Ban.EXPIRED',
      updated_at: '2024-07-09T21:41:34.558000Z',
    },
    {
      created_at: '2024-02-14T19:56:23.602000Z',
      expires_at: '2024-02-15T19:55:00Z',
      id: '65cd1ae70ca2802076211bdb',
      identifier: '641b6140a5adde1a4f318c4b',
      reason: 'rpk 1d',
      status: 'Ban.EXPIRED',
      updated_at: '2024-02-14T19:56:23.606000Z',
    },
    {
      created_at: '2024-07-09T21:41:34.553000Z',
      expires_at: '2024-07-10T21:41:00Z',
      id: '668dae8e90a578b68d40a864',
      identifier: '641b6140a5adde1a4f318c4b',
      reason: 'RDM 1d by Cyxoi',
      status: 'Ban.EXPIRED',
      updated_at: '2024-07-09T21:41:34.558000Z',
    },
    {
      created_at: '2024-02-14T19:56:23.602000Z',
      expires_at: '2024-02-15T19:55:00Z',
      id: '65cd1ae70ca2802076211bdb',
      identifier: '641b6140a5adde1a4f318c4b',
      reason: 'rpk 1d',
      status: 'Ban.EXPIRED',
      updated_at: '2024-02-14T19:56:23.606000Z',
    },
    {
      created_at: '2024-07-09T21:41:34.553000Z',
      expires_at: '2024-07-10T21:41:00Z',
      id: '668dae8e90a578b68d40a864',
      identifier: '641b6140a5adde1a4f318c4b',
      reason: 'RDM 1d by Cyxoi',
      status: 'Ban.EXPIRED',
      updated_at: '2024-07-09T21:41:34.558000Z',
    },
  ];

  const dataWeapons = {
    ak101: {
      damage: 110.05,
      deaths: 0,
      hits: 1,
      kills: 0,
      longest_kill: 0,
      longest_shot: 4.22,
      zones: {
        leftleg: 1,
      },
    },
    ak74: {
      damage: 342.8299999999999,
      deaths: 0,
      hits: 13,
      kills: 1,
      longest_kill: 2.03,
      longest_shot: 20.76,
      zones: {
        rightarm: 2,
        torso: 11,
      },
    },
    akm: {
      damage: 12.120000000000001,
      deaths: 2,
      hits: 2,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.44,
      zones: {
        head: 1,
        lefthand: 1,
      },
    },
    aks74u_black: {
      damage: 18.85,
      deaths: 0,
      hits: 1,
      kills: 0,
      longest_kill: 0,
      longest_shot: 3.3,
      zones: {
        torso: 1,
      },
    },
    amanitamushroom: {
      damage: 0.31,
      deaths: 0,
      hits: 1,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.16,
      zones: {
        torso: 1,
      },
    },
    ammo_12gapellets: {
      damage: 13.5,
      deaths: 0,
      hits: 1,
      kills: 0,
      longest_kill: 0,
      longest_shot: 2.04,
      zones: {
        rightarm: 1,
      },
    },
    ammo_762x39: {
      damage: 4.83,
      deaths: 0,
      hits: 1,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.26,
      zones: {
        torso: 1,
      },
    },
    aod_m1014: {
      damage: 138.77,
      deaths: 0,
      hits: 5,
      kills: 0,
      longest_kill: 0,
      longest_shot: 9.59,
      zones: {
        lefthand: 1,
        leftleg: 2,
        rightleg: 1,
        torso: 1,
      },
    },
    aod_mp153_baikal: {
      damage: 57.36,
      deaths: 0,
      hits: 11,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.9,
      zones: {
        head: 1,
        torso: 10,
      },
    },
    aod_mp153v2: {
      damage: 39.13,
      deaths: 0,
      hits: 1,
      kills: 0,
      longest_kill: 0,
      longest_shot: 10.72,
      zones: {
        rightleg: 1,
      },
    },
    b95: {
      damage: 1778.8899999999999,
      deaths: 1,
      hits: 20,
      kills: 2,
      longest_kill: 82.85,
      longest_shot: 165.42,
      zones: {
        head: 2,
        leftarm: 4,
        leftfoot: 1,
        lefthand: 2,
        torso: 11,
      },
    },
    broom_birch: {
      damage: 6.9,
      deaths: 0,
      hits: 3,
      kills: 0,
      longest_kill: 0,
      longest_shot: 2.44,
      zones: {
        rightfoot: 1,
        torso: 2,
      },
    },
    canteen: {
      damage: 5.0,
      deaths: 0,
      hits: 1,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0.87,
      zones: {
        torso: 1,
      },
    },
    chemlight_red: {
      damage: 8.25,
      deaths: 0,
      hits: 1,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.02,
      zones: {
        leftarm: 1,
      },
    },
    combatknife: {
      damage: 9.9,
      deaths: 0,
      hits: 1,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.52,
      zones: {
        torso: 1,
      },
    },
    crowbar: {
      damage: 25.0,
      deaths: 0,
      hits: 4,
      kills: 0,
      longest_kill: 0,
      longest_shot: 2.42,
      zones: {
        leftarm: 1,
        rightarm: 1,
        torso: 2,
      },
    },
    deagle: {
      damage: 0,
      deaths: 2,
      hits: 0,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0,
      zones: {},
    },
    dp_ar15_custom: {
      damage: 0,
      deaths: 2,
      hits: 0,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0,
      zones: {},
    },
    dp_kpk_stalker: {
      damage: 0.73,
      deaths: 0,
      hits: 1,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0.98,
      zones: {
        torso: 1,
      },
    },
    handcuffkeys: {
      damage: 10.0,
      deaths: 0,
      hits: 1,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0.96,
      zones: {
        rightarm: 1,
      },
    },
    handcuffs: {
      damage: 3.6,
      deaths: 0,
      hits: 1,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0.97,
      zones: {
        torso: 1,
      },
    },
    huntingknife: {
      damage: 27.78,
      deaths: 0,
      hits: 3,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.53,
      zones: {
        lefthand: 1,
        torso: 2,
      },
    },
    imp_acr_black: {
      damage: 0,
      deaths: 1,
      hits: 0,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0,
      zones: {},
    },
    imp_ak74: {
      damage: 236.87,
      deaths: 1,
      hits: 6,
      kills: 0,
      longest_kill: 0,
      longest_shot: 146.13,
      zones: {
        leftleg: 1,
        rightleg: 2,
        torso: 3,
      },
    },
    imp_akm: {
      damage: 10400.76,
      deaths: 22,
      hits: 323,
      kills: 30,
      longest_kill: 92.16,
      longest_shot: 195.15,
      zones: {
        head: 17,
        leftarm: 27,
        lefthand: 3,
        leftleg: 11,
        rightarm: 27,
        righthand: 3,
        rightleg: 10,
        torso: 225,
      },
    },
    imp_an94: {
      damage: 8.0,
      deaths: 0,
      hits: 3,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.87,
      zones: {
        rightarm: 1,
        torso: 2,
      },
    },
    imp_ar15: {
      damage: 966.93,
      deaths: 10,
      hits: 40,
      kills: 2,
      longest_kill: 16.01,
      longest_shot: 32.06,
      zones: {
        lefthand: 1,
        leftleg: 1,
        rightarm: 4,
        righthand: 3,
        torso: 31,
      },
    },
    imp_ar15skeleton: {
      damage: 13824.1,
      deaths: 7,
      hits: 412,
      kills: 36,
      longest_kill: 27.7,
      longest_shot: 116.29,
      zones: {
        brain: 5,
        head: 43,
        leftarm: 29,
        lefthand: 7,
        leftleg: 14,
        rightarm: 20,
        rightfoot: 1,
        righthand: 6,
        rightleg: 10,
        torso: 277,
      },
    },
    imp_axmc: {
      damage: 0,
      deaths: 1,
      hits: 0,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0,
      zones: {},
    },
    imp_dvl10m1_diversant: {
      damage: 261.03,
      deaths: 2,
      hits: 1,
      kills: 1,
      longest_kill: 66.63,
      longest_shot: 66.63,
      zones: {
        torso: 1,
      },
    },
    imp_fal: {
      damage: 0,
      deaths: 1,
      hits: 0,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0,
      zones: {},
    },
    imp_fnballista: {
      damage: 3664.45,
      deaths: 5,
      hits: 34,
      kills: 6,
      longest_kill: 158.13,
      longest_shot: 225.87,
      zones: {
        head: 5,
        leftarm: 5,
        rightarm: 4,
        righthand: 1,
        torso: 19,
      },
    },
    imp_g28_tan: {
      damage: 489.14,
      deaths: 2,
      hits: 7,
      kills: 2,
      longest_kill: 18.75,
      longest_shot: 222.16,
      zones: {
        head: 1,
        leftarm: 2,
        righthand: 1,
        torso: 3,
      },
    },
    imp_helmet_k63_raised_green: {
      damage: 0.27,
      deaths: 0,
      hits: 1,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.17,
      zones: {
        torso: 1,
      },
    },
    imp_hk416: {
      damage: 481.2400000000001,
      deaths: 2,
      hits: 14,
      kills: 2,
      longest_kill: 8.76,
      longest_shot: 9.61,
      zones: {
        head: 2,
        leftarm: 2,
        rightleg: 1,
        torso: 9,
      },
    },
    imp_hk417: {
      damage: 272.6,
      deaths: 1,
      hits: 6,
      kills: 1,
      longest_kill: 20.3,
      longest_shot: 32.93,
      zones: {
        rightarm: 2,
        torso: 4,
      },
    },
    imp_hkmr308_black: {
      damage: 3089.4300000000003,
      deaths: 3,
      hits: 70,
      kills: 10,
      longest_kill: 154.73,
      longest_shot: 357.52,
      zones: {
        head: 1,
        leftarm: 6,
        lefthand: 1,
        leftleg: 1,
        rightarm: 7,
        righthand: 1,
        torso: 53,
      },
    },
    imp_k98: {
      damage: 504.99,
      deaths: 2,
      hits: 6,
      kills: 4,
      longest_kill: 217.09,
      longest_shot: 217.09,
      zones: {
        head: 1,
        torso: 5,
      },
    },
    imp_mcmillan_cs5: {
      damage: 0,
      deaths: 1,
      hits: 0,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0,
      zones: {},
    },
    imp_medicines_bandage: {
      damage: 98.63000000000001,
      deaths: 0,
      hits: 19,
      kills: 0,
      longest_kill: 0,
      longest_shot: 2.2,
      zones: {
        head: 1,
        leftarm: 1,
        lefthand: 1,
        leftleg: 1,
        rightarm: 4,
        righthand: 1,
        torso: 10,
      },
    },
    imp_mk47: {
      damage: 117.44,
      deaths: 3,
      hits: 11,
      kills: 0,
      longest_kill: 0,
      longest_shot: 27.97,
      zones: {
        torso: 11,
      },
    },
    imp_pkp: {
      damage: 2015.8899999999999,
      deaths: 7,
      hits: 35,
      kills: 5,
      longest_kill: 33.24,
      longest_shot: 98.97,
      zones: {
        head: 1,
        leftarm: 3,
        leftfoot: 1,
        rightarm: 5,
        torso: 25,
      },
    },
    imp_pkpz_black: {
      damage: 0,
      deaths: 1,
      hits: 0,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0,
      zones: {},
    },
    imp_rpk16_tan: {
      damage: 145.92,
      deaths: 0,
      hits: 4,
      kills: 1,
      longest_kill: 15.2,
      longest_shot: 15.2,
      zones: {
        rightarm: 1,
        torso: 3,
      },
    },
    imp_vss: {
      damage: 0,
      deaths: 1,
      hits: 0,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0,
      zones: {},
    },
    imp_vss_tact: {
      damage: 0,
      deaths: 1,
      hits: 0,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0,
      zones: {},
    },
    izh18shotgun: {
      damage: 44.0,
      deaths: 0,
      hits: 5,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.76,
      zones: {
        head: 1,
        leftarm: 1,
        rightleg: 1,
        torso: 2,
      },
    },
    izh43shotgun: {
      damage: 47.0,
      deaths: 0,
      hits: 6,
      kills: 0,
      longest_kill: 0,
      longest_shot: 2.34,
      zones: {
        head: 2,
        righthand: 1,
        torso: 3,
      },
    },
    kuvalda_aks74u: {
      damage: 14.9,
      deaths: 0,
      hits: 3,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.82,
      zones: {
        torso: 3,
      },
    },
    kuvalda_ash12: {
      damage: 0,
      deaths: 2,
      hits: 0,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0,
      zones: {},
    },
    kuvalda_asval: {
      damage: 14048.160000000002,
      deaths: 8,
      hits: 351,
      kills: 36,
      longest_kill: 49.48,
      longest_shot: 88.37,
      zones: {
        head: 18,
        leftarm: 35,
        lefthand: 11,
        leftleg: 11,
        rightarm: 33,
        righthand: 7,
        rightleg: 3,
        torso: 233,
      },
    },
    kuvalda_f2000: {
      damage: 162.61999999999998,
      deaths: 0,
      hits: 6,
      kills: 1,
      longest_kill: 4.42,
      longest_shot: 4.42,
      zones: {
        torso: 6,
      },
    },
    kuvalda_lr300: {
      damage: 0,
      deaths: 1,
      hits: 0,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0,
      zones: {},
    },
    kuvalda_mdr_308: {
      damage: 0,
      deaths: 3,
      hits: 0,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0,
      zones: {},
    },
    kuvalda_ppsh: {
      damage: 2.88,
      deaths: 0,
      hits: 2,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.53,
      zones: {
        torso: 2,
      },
    },
    kuvalda_rpg26: {
      damage: 41.449999999999996,
      deaths: 0,
      hits: 3,
      kills: 1,
      longest_kill: 44.96,
      longest_shot: 101.73,
      zones: {
        '': 3,
      },
    },
    kuvalda_sigmcx_spear: {
      damage: 1025.54,
      deaths: 1,
      hits: 17,
      kills: 3,
      longest_kill: 28.38,
      longest_shot: 44.82,
      zones: {
        head: 2,
        leftarm: 4,
        rightarm: 1,
        righthand: 1,
        torso: 9,
      },
    },
    kuvalda_striker: {
      damage: 270.43,
      deaths: 1,
      hits: 15,
      kills: 1,
      longest_kill: 5.84,
      longest_shot: 12.43,
      zones: {
        lefthand: 1,
        rightleg: 1,
        torso: 13,
      },
    },
    kuvalda_svds: {
      damage: 515.48,
      deaths: 8,
      hits: 7,
      kills: 1,
      longest_kill: 367.19,
      longest_shot: 377.54,
      zones: {
        leftarm: 1,
        lefthand: 1,
        rightarm: 1,
        torso: 4,
      },
    },
    kuvalda_tt: {
      damage: 0.76,
      deaths: 0,
      hits: 1,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0.8,
      zones: {
        torso: 1,
      },
    },
    kuvalda_val_mag_30rnd: {
      damage: 22.75,
      deaths: 0,
      hits: 2,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.12,
      zones: {
        rightarm: 1,
        righthand: 1,
      },
    },
    kuvalda_vsk94: {
      damage: 57.45000000000001,
      deaths: 0,
      hits: 7,
      kills: 0,
      longest_kill: 0,
      longest_shot: 17.64,
      zones: {
        head: 1,
        torso: 6,
      },
    },
    kuvalda_vss: {
      damage: 3602.1099999999997,
      deaths: 4,
      hits: 115,
      kills: 15,
      longest_kill: 41.49,
      longest_shot: 72.32,
      zones: {
        brain: 1,
        head: 24,
        leftarm: 7,
        leftleg: 1,
        rightarm: 9,
        righthand: 1,
        rightleg: 5,
        torso: 67,
      },
    },
    loh_item_antibiotics: {
      damage: 0.99,
      deaths: 0,
      hits: 1,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0.99,
      zones: {
        torso: 1,
      },
    },
    loh_item_booster: {
      damage: 25.0,
      deaths: 0,
      hits: 2,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.67,
      zones: {
        lefthand: 1,
        torso: 1,
      },
    },
    loh_medical_medium: {
      damage: 2.87,
      deaths: 0,
      hits: 2,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.22,
      zones: {
        torso: 2,
      },
    },
    loh_toz34: {
      damage: 0,
      deaths: 1,
      hits: 0,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0,
      zones: {},
    },
    m18smokegrenade_green: {
      damage: 5.0,
      deaths: 0,
      hits: 1,
      kills: 0,
      longest_kill: 0,
      longest_shot: 2.01,
      zones: {
        head: 1,
      },
    },
    m18smokegrenade_purple: {
      damage: 4.83,
      deaths: 0,
      hits: 1,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.24,
      zones: {
        torso: 1,
      },
    },
    makarovij70: {
      damage: 123.45,
      deaths: 1,
      hits: 5,
      kills: 1,
      longest_kill: 2.93,
      longest_shot: 2.93,
      zones: {
        torso: 5,
      },
    },
    mosin9130_camo: {
      damage: 0,
      deaths: 1,
      hits: 0,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0,
      zones: {},
    },
    mp133shotgun: {
      damage: 27.0,
      deaths: 0,
      hits: 4,
      kills: 0,
      longest_kill: 0,
      longest_shot: 2.19,
      zones: {
        leftarm: 1,
        lefthand: 1,
        torso: 2,
      },
    },
    nr_detector_bear: {
      damage: 15.73,
      deaths: 0,
      hits: 2,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.03,
      zones: {
        lefthand: 1,
        righthand: 1,
      },
    },
    nr_detector_branch: {
      damage: 2.75,
      deaths: 0,
      hits: 1,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.05,
      zones: {
        torso: 1,
      },
    },
    pmp_knife_homemadeknife: {
      damage: 31.8,
      deaths: 0,
      hits: 2,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.56,
      zones: {
        lefthand: 2,
      },
    },
    pmp_knife_krisknife: {
      damage: 64.58,
      deaths: 0,
      hits: 4,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.83,
      zones: {
        leftarm: 1,
        lefthand: 1,
        righthand: 1,
        torso: 1,
      },
    },
    pmp_medicine_tetracycline: {
      damage: 111.58000000000003,
      deaths: 0,
      hits: 29,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.46,
      zones: {
        head: 2,
        leftarm: 2,
        lefthand: 1,
        rightarm: 2,
        righthand: 1,
        torso: 21,
      },
    },
    rag: {
      damage: 0.62,
      deaths: 0,
      hits: 1,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0.9,
      zones: {
        torso: 1,
      },
    },
    sawedoffizh43shotgun: {
      damage: 75.47,
      deaths: 1,
      hits: 12,
      kills: 0,
      longest_kill: 0,
      longest_shot: 4.1,
      zones: {
        leftarm: 1,
        lefthand: 1,
        torso: 10,
      },
    },
    sfp_cantenussr2: {
      damage: 1.23,
      deaths: 0,
      hits: 1,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.19,
      zones: {
        torso: 1,
      },
    },
    sfp_collection_jural_71: {
      damage: 9.49,
      deaths: 0,
      hits: 2,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.34,
      zones: {
        torso: 2,
      },
    },
    sfp_drinkcan_baltica9: {
      damage: 0.54,
      deaths: 0,
      hits: 2,
      kills: 0,
      longest_kill: 0,
      longest_shot: 2.07,
      zones: {
        torso: 2,
      },
    },
    sfp_galil: {
      damage: 10.0,
      deaths: 0,
      hits: 1,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.6,
      zones: {
        lefthand: 1,
      },
    },
    sfp_jackdan_bootle: {
      damage: 3.5,
      deaths: 0,
      hits: 1,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0.79,
      zones: {
        torso: 1,
      },
    },
    sfp_knife_handmade: {
      damage: 15.0,
      deaths: 0,
      hits: 1,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.73,
      zones: {
        lefthand: 1,
      },
    },
    sfp_mobile_nukea: {
      damage: 5.0,
      deaths: 0,
      hits: 1,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.47,
      zones: {
        lefthand: 1,
      },
    },
    sfp_mossberg_maverick: {
      damage: 9.65,
      deaths: 0,
      hits: 5,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.11,
      zones: {
        torso: 5,
      },
    },
    sfp_rem870: {
      damage: 27.0,
      deaths: 0,
      hits: 3,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.39,
      zones: {
        leftarm: 1,
        torso: 2,
      },
    },
    sfp_rusirp_corob: {
      damage: 0.31,
      deaths: 0,
      hits: 1,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0.95,
      zones: {
        torso: 1,
      },
    },
    sfp_rusirp_shpik_open: {
      damage: 1.25,
      deaths: 0,
      hits: 1,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0.9,
      zones: {
        head: 1,
      },
    },
    sfp_sigareta_smoke: {
      damage: 3.8000000000000003,
      deaths: 0,
      hits: 2,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.48,
      zones: {
        torso: 2,
      },
    },
    sfp_usstevens620: {
      damage: 232.04,
      deaths: 0,
      hits: 16,
      kills: 0,
      longest_kill: 0,
      longest_shot: 15.38,
      zones: {
        leftarm: 1,
        leftleg: 1,
        rightarm: 2,
        rightleg: 1,
        torso: 11,
      },
    },
    st_w_pm: {
      damage: 0,
      deaths: 1,
      hits: 0,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0,
      zones: {},
    },
    st_w_val: {
      damage: 0,
      deaths: 1,
      hits: 0,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0,
      zones: {},
    },
    tf_ak104: {
      damage: 0,
      deaths: 1,
      hits: 0,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0,
      zones: {},
    },
    tf_akm: {
      damage: 0,
      deaths: 2,
      hits: 0,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0,
      zones: {},
    },
    tf_m4a1_cqbr: {
      damage: 284.0,
      deaths: 3,
      hits: 8,
      kills: 0,
      longest_kill: 0,
      longest_shot: 12.64,
      zones: {
        leftarm: 2,
        torso: 6,
      },
    },
    tf_svch: {
      damage: 0,
      deaths: 1,
      hits: 0,
      kills: 0,
      longest_kill: 0,
      longest_shot: 0,
      zones: {},
    },
    uw_remingtone: {
      damage: 131.29999999999998,
      deaths: 0,
      hits: 7,
      kills: 0,
      longest_kill: 0,
      longest_shot: 3.04,
      zones: {
        head: 1,
        rightarm: 2,
        torso: 4,
      },
    },
    vitaminbottle: {
      damage: 0.76,
      deaths: 0,
      hits: 1,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.01,
      zones: {
        torso: 1,
      },
    },
    winchester70: {
      damage: 684.52,
      deaths: 0,
      hits: 3,
      kills: 1,
      longest_kill: 242.55,
      longest_shot: 242.55,
      zones: {
        lefthand: 1,
        rightarm: 1,
        torso: 1,
      },
    },
    worm: {
      damage: 4.46,
      deaths: 0,
      hits: 1,
      kills: 0,
      longest_kill: 0,
      longest_shot: 1.13,
      zones: {
        torso: 1,
      },
    },
  };

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

  const created_date = '2023-03-23T19:48:13.928000';
  const distance_traveled = 17973119.189065933;
  const time_play = 3000847;

  function transformData(data: DataWeapons): WeaponEntry[] {
    const result = Object.keys(data)
      .map((key) => {
        const weapon = data[key];
        return {
          name: key,
          kills: weapon.kills,
          longestKill: weapon.longest_kill,
          longestShot: weapon.longest_shot,
          hits: weapon.hits,
          damage: weapon.damage,
        };
      })
      .filter((weapon) => weapon.kills > 5);

    result.sort((a, b) => b.kills - a.kills);

    return result;
  }

  const transformedData = transformData(dataWeapons);
  console.log(transformedData);

  return (
    <div className="pb-5 w-[100%] flex flex-col items-center justify-center gap-5">
      <h1 className="mb-12 text-4xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-white text-center mt-5">
        Личная статистика
      </h1>
      <div className="flex justify-between w-[80%] gap-5">
        <div className="flex flex-col text-center items-center justify-center mb-10 w-[20%] mr-20">
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
        <div className="w-[80%]">
          <p className="text-2xl font-extrabold dark:text-white text-center mb-10">Личная статистика</p>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
              <div className="flex gap-2 items-center justify-center">
                <p className="text-2xl font-medium dark:text-black text-center">Дата создания: </p>
                <p className="text-2xl font-bold dark:text-black text-center">
                  {new Date(created_date).toDateString()}
                </p>
              </div>
            </div>
            <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
              <div className="flex gap-2 items-center justify-center">
                <p className="text-2xl font-medium dark:text-black text-center">Пройденное расстояние(км): </p>
                <p className="text-2xl font-bold dark:text-black text-center">
                  {(distance_traveled / 1000).toFixed(0)}
                </p>
              </div>
            </div>
            <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
              <div className="flex gap-2 items-center justify-center">
                <p className="text-2xl font-medium dark:text-black text-center">Время в игре(ч): </p>
                <p className="text-2xl font-bold dark:text-black text-center">{(time_play / 3600).toFixed(0)}</p>
              </div>
            </div>
            <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
              <div className="flex gap-2 items-center justify-center">
                <p className="text-2xl font-medium dark:text-black text-center">Убийств: </p>
                <p className="text-2xl font-bold dark:text-black text-center">100</p>
              </div>
            </div>
            <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
              <div className="flex gap-2 items-center justify-center">
                <p className="text-2xl font-medium dark:text-black text-center">Смертей: </p>
                <p className="text-2xl font-bold dark:text-black text-center">10</p>
              </div>
            </div>
            <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
              <div className="flex gap-2 items-center justify-center">
                <p className="text-2xl font-medium dark:text-black text-center">КД(%): </p>
                <p className="text-2xl font-bold dark:text-black text-center">10.0</p>
              </div>
            </div>
            <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
              <div className="flex gap-2 items-center justify-center">
                <p className="text-2xl font-medium dark:text-black text-center">Кол-во попаданий: </p>
                <p className="text-2xl font-bold dark:text-black text-center">1328</p>
              </div>
            </div>
            <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
              <div className="flex gap-2 items-center justify-center">
                <p className="text-2xl font-medium dark:text-black text-center">Дальность попадания: </p>
                <p className="text-2xl font-bold dark:text-black text-center">377.54</p>
              </div>
            </div>
            <div className="h-20 w-[400px] bg-white shadow-md flex items-center justify-center rounded-lg p-2.5 text-black">
              <div className="flex gap-2 items-center justify-center">
                <p className="text-2xl font-medium dark:text-black text-center">Дальность убийства: </p>
                <p className="text-2xl font-bold dark:text-black text-center">367.19</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-[80%] h-[600px]">
        <div className="flex flex-col w-[20%] mr-20">
          <p className="text-2xl font-extrabold dark:text-white text-center mb-10">История имен:</p>
          <ScrollArea className="w-[100%] rounded-md border">
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
        </div>
        <div className="flex flex-col w-[80%]">
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
              {entries.map((entry) => (
                <TableRow key={entry.id}>
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
      <Card className="w-[40%]">
        <CardHeader>
          <CardTitle>Гистограмма - Попадания по зонам тела</CardTitle>
          <CardDescription>Распределение подсчетов по зонам</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
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
      <div className="flex flex-col w-[80%]">
        <p className="text-2xl font-extrabold dark:text-white text-center mb-10">Рейтинг вашего оружия:</p>
        <Table className="">
          <TableCaption>Рейтинг вашего оружия.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Название</TableHead>
              <TableHead>Убийств</TableHead>
              <TableHead>Дальность убийства</TableHead>
              <TableHead>Дальность попадания</TableHead>
              <TableHead>Всего урона</TableHead>
              <TableHead>Кол-во попаданий</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transformedData.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{index}</TableCell>
                <TableCell>{entry.name}</TableCell>
                <TableCell>{entry.kills}</TableCell>
                <TableCell>{entry.longestKill}</TableCell>
                <TableCell>{entry.longestShot}</TableCell>
                <TableCell>{entry.damage}</TableCell>
                <TableCell>{entry.hits}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
