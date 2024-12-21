import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { additionalLinks, mainLinks, rules, socialChannels } from '@/constants/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { forwardRef } from 'react';

const DesktopMenu = () => {
  return (
    <NavigationMenu className="hidden 2xl:flex justify-between items-center p-4 mx-auto">
      <NavigationMenuList className="flex flex-wrap justify-center items-center mx-auto">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Основные страницы</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2 lg:w-[600px]">
              {mainLinks.map((link: any, index: any) => (
                <ListItem key={`main-${index}`} title={link.title} href={link.href}>
                  {link.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Дополнительно</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {additionalLinks.map((link: any, index: any) => (
                <ListItem key={`additional-${index}`} title={link.title} href={link.href}>
                  {link.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Правила серверов</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2 lg:w-[600px]">
              {rules.map((rule: any, index: any) => (
                <ListItem key={`rule-${index}`} title={rule.title} href={rule.href} target="_blank">
                  {rule.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Социальные сети проекта</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2 lg:w-[600px]">
              {socialChannels.map((channel: any, index: any) => (
                <ListItem key={`discord-${index}`} title={channel.title} href={channel.href} target="_blank">
                  {channel.description}
                </ListItem>
              ))}
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
      </NavigationMenuList>
    </NavigationMenu>
  );
};

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

export default DesktopMenu;
