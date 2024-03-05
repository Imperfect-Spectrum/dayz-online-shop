import Head from 'next/head';
import Image from 'next/image';
import { ModeToggle } from './ModeToggle';

export default function Layout({ children }: any) {
  return (
    <div className="">
      <Head>
        <title>Lasthope Stalker RP</title>
        <nav className="">
          <div className="flex flex-wrap items-center justify-around mx-auto p-4">
            <div className="flex items-center space-x-3 mr-auto">
              <Image src="/logo.png" width={100} height={100} alt="Last Hope Logo" />
              <span className="self-center text-3xl font-semibold whitespace-nowrap text-white">Last Hope</span>
            </div>

            <ModeToggle />
            {/* <div>
              {user ? (
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <Link href="/api/auth/logout">Выход</Link>
              </button>
            ) : (
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <Link href="/api/auth/login">Авторизация</Link>
              </button>
            )}
            </div>
           */}
          </div>
        </nav>
      </Head>
      <main>{children}</main>
    </div>
  );
}
