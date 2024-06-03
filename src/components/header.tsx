import { useState } from 'react';
import { ModeToggle } from './ModeToggle';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: 'https://vk.com/lastohope', label: 'Группа ВК' },
    { href: 'https://discord.com/invite/CT7Bn6ZmXu', label: 'Канал дискорд' },
    { href: 'https://discord.com/invite/CT7Bn6ZmXu', label: 'Правила проекта' },
    { href: 'https://discord.com/invite/CT7Bn6ZmXu', label: 'Лор' },
    { href: 'https://discord.com/invite/CT7Bn6ZmXu', label: 'Донат' },
    { href: 'https://discord.com/invite/CT7Bn6ZmXu', label: 'Гайды' },
    { href: 'https://discord.com/invite/CT7Bn6ZmXu', label: 'Отзывы' },
    { href: 'https://discord.com/invite/CT7Bn6ZmXu', label: 'Патч ноуты' },
    { href: 'https://discord.com/invite/CT7Bn6ZmXu', label: 'ЧАВО' },
  ];

  return (
    <div className="my-5 flex items-center mr-auto">
      <div className="flex items-center space-x-3">
        <Image src="/logo.png" width={100} height={100} alt="Last Hope Logo" />
        <span className="self-center text-3xl font-semibold whitespace-nowrap">Last Hope</span>
      </div>

      {/* Десктопное меню, отображается только на больших экранах */}
      <div className="hidden xl:flex justify-between items-center p-4 mx-auto">
        <nav className="flex justify-center items-center mx-auto">
          <div className="w-full" id="navbar-default">
            <ul className="font-medium flex justify-center items-center p-4 rounded-lg space-x-8 ">
              {links.map((link) => (
                <li key={link.label} className="mt-4 xl:mt-0">
                  <a
                    target="_blank"
                    href={link.href}
                    className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent xl:border-0 md:hover:text-blue-700 xl:p-0 dark:text-white xl:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div className="ml-auto">
        <ModeToggle />
      </div>

      <div className="xl:hidden flex justify-between items-center p-4">
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={30} /> : <Menu size={30} />}</button>
      </div>

      {/* Мобильное выдвижное меню */}
      <div
        className={`fixed z-50 inset-y-0 left-0 transform bg-white dark:bg-black text-black dark:text-white opacity-95 w-[60%] p-4 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="w-full" id="navbar-default">
          <ul className="font-medium flex flex-col justify-center items-start p-4 rounded-lg gap-6">
            {links.map((link) => (
              <li key={link.label} className="">
                <a
                  target="_blank"
                  href={link.href}
                  className="text-xl py-2 px-3 font-semibold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent xl:border-0 md:hover:text-blue-700 xl:p-0 dark:text-white xl:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
