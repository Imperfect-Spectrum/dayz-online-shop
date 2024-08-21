'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { forwardRef } from 'react';

export default function NavMenu() {
  return (
    <NavigationMenu className="hidden xl:flex justify-between items-center p-4 mx-auto">
      <NavigationMenuList className="flex justify-center items-center mx-auto">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>На главную</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>О нас</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a
            href="https://vk.com/lastohope"
            target="_blank"
            rel="noopener noreferrer"
            className={navigationMenuTriggerStyle()}
          >
            Группа ВК
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-xl">Каналы дискорда</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[500px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem title="AOD/NH" href="https://discord.com/invite/CT7Bn6ZmXu" target="_blank">
                Ссылка на дискорд серверов AOD/NH
              </ListItem>
              <ListItem title="DZ" href="https://discord.gg/v2XWb8sftV" target="_blank">
                Ссылка на дискорд сервера DZ
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-xl">Правила проекта</NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem
                title="AOD/NH"
                href="https://docs.google.com/document/d/1qAyml1-ysCopuBSxjhNak2i6wdwt9xAlQvZIoi9yDSY"
                target="_blank"
              >
                Правила серверов AOD/NH
              </ListItem>
              <ListItem
                title="DZ"
                href="https://docs.google.com/document/d/14dVo19had991FRhEhmoWsMydq67OAPEMM5lImNDxVqw/edit#heading=h.1s7hco9w25wf"
                target="_blank"
              >
                Правила сервера DZ
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a
            href="https://lasthoperp.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className={navigationMenuTriggerStyle()}
          >
            Магазин
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/lore" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Лор</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/pathes" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Патч ноуты</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/guides" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Гайды</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/faq" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>ЧАВО</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-lg font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';
