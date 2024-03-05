import Head from 'next/head';
import { ModeToggle } from './ModeToggle';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description: 'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

export function Header() {
  return (
    <div className="my-5">
      <title>Lasthope Stalker RP</title>
      <nav className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" width={100} height={100} alt="Last Hope Logo" />
          <span className="self-center text-3xl font-semibold whitespace-nowrap">Last Hope</span>
        </div>
        <div className="w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col justify-center items-center p-4 md:p-0 mt-4 border rounded-lg   md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
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
            <li>
              <a
                target="_blank"
                href="https://discord.com/invite/CT7Bn6ZmXu"
                className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Лор
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://discord.com/invite/CT7Bn6ZmXu"
                className="text-xl block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Донат
              </a>
            </li>
          </ul>
        </div>
        <ModeToggle />
      </nav>
    </div>
  );
}

// <li>
//   <NavigationMenuLink asChild>
//     <a
//       ref={ref}
//       className={cn(
//         'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
//         className
//       )}
//       {...props}
//     >
//       <div className="text-sm font-medium leading-none">{title}</div>
//       <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
//     </a>
//   </NavigationMenuLink>
// </li>;
