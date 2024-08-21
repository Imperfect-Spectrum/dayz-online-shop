import { useEffect, useState } from 'react';
import { ModeToggle } from './ModeToggle';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import NavMenu from './header/nav-menu';
import MonileNavMenu from './header/mobile-nav-menu';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-5 flex items-center mr-auto">
      <Link href="/">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" width={100} height={100} alt="Last Hope Logo" className="rounded-3xl" />
          <span className="self-center text-2xl md:text-3xl font-semibold whitespace-nowrap">Last Hope</span>
        </div>
      </Link>

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
