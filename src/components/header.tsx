import { useEffect, useState } from 'react';
import { ModeToggle } from './ModeToggle';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import NavMenu from './header/nav-menu';
import MonileNavMenu from './header/mobile-nav-menu';
import TitleLogo from './header/titleLogo';
import { Button } from './ui/button';
import { useRouter } from 'next/router';

export function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [pathURL, setPathURL] = useState('');

  useEffect(() => {
    if (!router.isReady) return;
    setPathURL(router.pathname);
  }, [router.isReady, router.pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathURL]);

  return (
    <div className="my-5 flex items-center mr-auto">
      <TitleLogo />

      <NavMenu />

      <div className="ml-auto">
        <ModeToggle />
      </div>

      <div className="xl:hidden flex justify-between items-center p-4">
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={30} /> : <Menu size={30} />}</button>
      </div>

      <MonileNavMenu isOpen={isOpen} />
    </div>
  );
}
