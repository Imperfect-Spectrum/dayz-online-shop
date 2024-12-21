'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { additionalLinks, mainLinks, rules, socialChannels } from '@/constants/constants';
import MobileMenuSection from './mobile-menu-section';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  return (
    <div
      className={`fixed z-50 inset-y-0 left-0 transform bg-white dark:bg-black text-black dark:text-white opacity-95 w-[70%] p-4 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <ScrollArea className="h-full">
        <nav className="flex flex-col space-y-4">
          <MobileMenuSection title="Основные страницы" items={mainLinks} />
          <MobileMenuSection title="Дополнительно" items={additionalLinks} />
          <MobileMenuSection title="Правила серверов" items={rules} />
          <MobileMenuSection title="Социальные сети проекта" items={socialChannels} />
          <Link href="https://lasthoperp.ru/" className="block py-2 text-lg font-semibold text-center">
            Магазин
          </Link>
        </nav>
      </ScrollArea>
    </div>
  );
}
