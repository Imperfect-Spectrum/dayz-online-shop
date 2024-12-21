'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TitleLogo from './header/titleLogo';
import { ModeToggle } from './ModeToggle';
import DesktopMenu from './header/nav-menu/desktop-menu';
import MobileMenu from './header/nav-menu/mobile-menu';

export function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [pathURL, setPathURL] = useState('');

  // useEffect(() => {
  //   if (!router.isReady) return;
  //   setPathURL(router.pathname);
  // }, [router.isReady, router.pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathURL]);

  return (
    <div className="my-5 flex items-center mr-auto">
      <TitleLogo />
      <DesktopMenu />
      <div className="ml-auto">
        <ModeToggle />
      </div>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="2xl:hidden flex justify-between items-center p-4">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
