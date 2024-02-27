import React from 'react';
import { observer, useObserver } from 'mobx-react';
import { steamStore } from '../stores/steamStore';
import router, { NextSteamAuthApiRequest } from '@/lib/router';
import { NextApiResponse } from 'next';
import { SteamProfile } from '@/lib/passport';
import Link from 'next/link';
import { Slider } from '@/components/carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Item {
  id: number;
  name: string;
  description: string;
  image_path: string;
  category: string;
  available_servers: string[];
  price: number;
}

export default function Home({ user }: { user: SteamProfile }) {
  console.log(user);

  const data: Item[] = [
    {
      id: 1,
      name: 'МР153',
      description: 'Мурка доведенная до ума в условиях зоны.',
      image_path: '/images/мр153.jpg',
      category: 'Оружие',
      available_servers: ['Юг', 'Север'],
      price: 300,
    },
    {
      id: 2,
      name: 'AK-47',
      description: 'Мощная автоматическая винтовка.',
      image_path: '/images/ak47.jpg',
      category: 'Оружие',
      available_servers: ['Север'],
      price: 500,
    },
    {
      id: 3,
      name: 'Винтовка Мосина',
      description: 'Стрелковая винтовка времен Великой Отечественной войны.',
      image_path: '/images/mosin.jpg',
      category: 'Оружие',
      available_servers: ['Юг'],
      price: 400,
    },
    {
      id: 4,
      name: 'ППШ-41',
      description: 'Пистолет-пулемет Шпагина - советское оружие времен Второй мировой войны.',
      image_path: '/images/ppsh41.jpg',
      category: 'Оружие',
      available_servers: ['Юг', 'Север'],
      price: 450,
    },
    {
      id: 5,
      name: 'Сайга-12',
      description: 'Дробовик для эффективного поражения целей на средних дистанциях.',
      image_path: '/images/saiga12.jpg',
      category: 'Оружие',
      available_servers: ['Север'],
      price: 350,
    },
    {
      id: 6,
      name: 'Сайга-12',
      description: 'Дробовик для эффективного поражения целей на средних дистанциях.',
      image_path: '/images/saiga12.jpg',
      category: 'Оружие',
      available_servers: ['Север'],
      price: 350,
    },
    {
      id: 7,
      name: 'Сайга-12',
      description: 'Дробовик для эффективного поражения целей на средних дистанциях.',
      image_path: '/images/saiga12.jpg',
      category: 'Оружие',
      available_servers: ['Север'],
      price: 350,
    },
    {
      id: 8,
      name: 'Сайга-12',
      description: 'Дробовик для эффективного поражения целей на средних дистанциях.',
      image_path: '/images/saiga12.jpg',
      category: 'Оружие',
      available_servers: ['Север'],
      price: 350,
    },
    {
      id: 9,
      name: 'МР153',
      description: 'Мурка доведенная до ума в условиях зоны.',
      image_path: '/images/мр153.jpg',
      category: 'Оружие',
      available_servers: ['Юг', 'Север'],
      price: 300,
    },
    {
      id: 10,
      name: 'AK-47',
      description: 'Мощная автоматическая винтовка.',
      image_path: '/images/ak47.jpg',
      category: 'Оружие',
      available_servers: ['Север'],
      price: 500,
    },
    {
      id: 11,
      name: 'Винтовка Мосина',
      description: 'Стрелковая винтовка времен Великой Отечественной войны.',
      image_path: '/images/mosin.jpg',
      category: 'Оружие',
      available_servers: ['Юг'],
      price: 400,
    },
    {
      id: 12,
      name: 'ППШ-41',
      description: 'Пистолет-пулемет Шпагина - советское оружие времен Второй мировой войны.',
      image_path: '/images/ppsh41.jpg',
      category: 'Оружие',
      available_servers: ['Юг', 'Север'],
      price: 450,
    },
    {
      id: 13,
      name: 'Сайга-12',
      description: 'Дробовик для эффективного поражения целей на средних дистанциях.',
      image_path: '/images/saiga12.jpg',
      category: 'Оружие',
      available_servers: ['Север'],
      price: 350,
    },
    {
      id: 14,
      name: 'Сайга-12',
      description: 'Дробовик для эффективного поражения целей на средних дистанциях.',
      image_path: '/images/saiga12.jpg',
      category: 'Оружие',
      available_servers: ['Север'],
      price: 350,
    },
    {
      id: 15,
      name: 'Сайга-12',
      description: 'Дробовик для эффективного поражения целей на средних дистанциях.',
      image_path: '/images/saiga12.jpg',
      category: 'Оружие',
      available_servers: ['Север'],
      price: 350,
    },
    {
      id: 16,
      name: 'Сайга-12',
      description: 'Дробовик для эффективного поражения целей на средних дистанциях.',
      image_path: '/images/saiga12.jpg',
      category: 'Оружие',
      available_servers: ['Север'],
      price: 350,
    },
  ];

  return (
    <div className="mx-[10%] h-[100vh]">
      <nav className="bg-white border-gray-200 dark:bg-neutral-950">
        <div className="flex flex-wrap items-center justify-around mx-auto p-4">
          <div className="flex items-center space-x-3 mr-auto">
            <img src="logo.png" className="h-16" alt="Last Hope Logo" />
            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Last Hope</span>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto mr-auto" id="navbar-default">
            <ul className="font-medium flex flex-col justify-center items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-neutral-950 md:dark:bg-neutral-950 dark:border-gray-700">
              <li>
                <a
                  target="_blank"
                  href="https://vk.com/lastohope"
                  className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Группа ВК
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://discord.com/invite/CT7Bn6ZmXu"
                  className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Канал дискорд
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://discord.com/invite/CT7Bn6ZmXu"
                  className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Правила проекта
                </a>
              </li>
            </ul>
          </div>
          <div>
            {user ? (
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <Link href="/api/auth/logout">Выход</Link>
              </button>
            ) : (
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <Link href="/api/auth/login">Авторизация</Link>
              </button>
            )}
          </div>
        </div>
      </nav>
      <div className="flex flex-col gap-5">
        <Slider />  
        <div className="flex flex-wrap gap-7 justify-between">
          {data.map((item) => (
            <div key={item.id} className="flip-card w-[300px] h-[380px]">
              <div className="flip-card-inner relative w-[100%] h-[100%] text-center m-0">
                <div className="flip-card-front  border-white border-solid border-2 bg-zinc-800">
                  <div className="flex flex-col justify-between h-full">
                    <p className="text-white font-bold text-3xl border-b-8 mt-2 pb-2 ">{item.name}</p>
                        <img alt='mp-103' src="https://i.ibb.co/K2pjGbW/MP-153mod.webp" className='h-[100%] border-b-8'/>
                    <p className="text-white font-bold text-2xl text-center py-6">{item.price} RUB</p>
                  </div>
                </div>
                <div className="flip-card-back border-white border-solid border-2 bg-zinc-800">
                  <p className="text-white font-bold text-base">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {user?.id ? (
          <p className="text-orange-900 font-extrabold">steamID:{user.id}</p>
        ) : (
          <p className="text-orange-900 font-extrabold">Net SteamID!21</p>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps({ req, res }: { req: NextSteamAuthApiRequest; res: NextApiResponse }) {
  await router.run(req, res);
  const user = req.user || null;

  if (user) {
    steamStore.setSteamID(user.id);
  }

  return { props: { user } };
}
