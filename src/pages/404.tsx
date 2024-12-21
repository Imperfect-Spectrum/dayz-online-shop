import { FC } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Custom404: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-52">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="mt-4 text-xl">Упс............</p>
      <p className="mt-4 text-xl">Иди своей дорогой, сталкер</p>
      <p className="mt-4 text-xl">Страница не найдена</p>

      <Link href="/lore">На главную</Link>
    </div>
  );
};

export default Custom404;
