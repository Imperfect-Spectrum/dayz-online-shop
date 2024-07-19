import React from 'react';
import { NextApiResponse } from 'next';
import { Slider } from '@/components/carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

interface Item {
  id: number;
  name: string;
  description: string;
  image_path: string;
  category: string;
  available_servers: string[];
  price: number;
}

export default function Donate() {
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
    <div className=" h-[100vh]">
      <div className="flex flex-col gap-5">
        <Slider />
        <div className="inline-flex rounded-md shadow-sm mx-auto" role="group">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            <svg
              className="w-3 h-3 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            Оружие
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            <svg
              className="w-3 h-3 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
              />
            </svg>
            Броня
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-l border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            <svg
              className="w-3 h-3 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
              />
            </svg>
            Броня
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-l border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            <svg
              className="w-3 h-3 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
              />
            </svg>
            Броня
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-l border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            <svg
              className="w-3 h-3 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
              />
            </svg>
            Броня
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-l border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            <svg
              className="w-3 h-3 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
              />
            </svg>
            Броня
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            <svg
              className="w-3 h-3 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
              <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
            </svg>
            Инструменты
          </button>
        </div>
        <div className="flex flex-wrap gap-7 justify-between">
          {data.map((item) => (
            <div key={item.id} className="flip-card w-[300px] h-[380px]">
              <div className="flip-card-inner relative w-[100%] h-[100%] text-center m-0">
                <div className="flip-card-front  border-zinc-600 border-solid border-2 bg-zinc-900">
                  <div className="flex flex-col justify-between h-full">
                    <p className="text-zinc-400 font-bold text-2xl border-b-8 border-zinc-600 mt-2 pb-2 ">
                      {item.name}
                    </p>
                    <Image
                      src="https://i.ibb.co/K2pjGbW/MP-153mod.webp"
                      width={500}
                      height={500}
                      alt={item.name}
                      className="h-[100%] border-b-8 border-zinc-600"
                    />
                    <p className="text-zinc-400 font-bold text-xl text-center py-6">{item.price} RUB</p>
                  </div>
                </div>
                <div className="flip-card-back border-zinc-600 border-solid border-2  bg-zinc-900">
                  <div className="flex flex-col h-full">
                    <p className="text-zinc-400 font-bold text-2xl border-b-8 border-zinc-600 mt-2 pb-2 ">
                      {item.name}
                    </p>
                    <p className="text-zinc-400 font-bold text-lg text-left mx-2 pb-2">{item.description}</p>
                    <p className="text-zinc-400 font-bold text-lg text-left mx-2 pb-2">
                      <ins>Категория:</ins> {item.category}
                    </p>
                    <p className="text-zinc-400 font-bold text-lg text-left mx-2 pb-2">
                      <ins>Доступность:</ins> {item.available_servers.join()}
                    </p>
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-[70%] mx-auto mt-auto mb-10 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        className="w-3.5 h-3.5 me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 21"
                      >
                        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                      </svg>
                      Купить сейчас
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
