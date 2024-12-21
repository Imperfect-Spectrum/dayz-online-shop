'use client';
import { useState } from 'react';
import MobileMenu from './mobile-menu';

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  return <>{isDesktop ? <DesktopMenu /> : <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />}</>;
}
