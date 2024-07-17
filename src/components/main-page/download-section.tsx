import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

interface DownloadSectionProps {
  scrollToAboutServer: () => void;
}

export const DownloadSection = ({ scrollToAboutServer }: DownloadSectionProps) => {
  const downloads = [
    {
      name: 'Steam',
      description: 'Официальный steam клиент',
      icon: 'https://i.ibb.co/2y0sNP2/Steam-icon-logo-svg-1.png',
      href: 'https://store.steampowered.com/',
    },
    {
      name: 'Dayz',
      description: 'Официальный клиент игры Dayz',
      icon: 'https://i.ibb.co/JBxxs8p/dayz-icon.png',
      href: 'https://store.steampowered.com/app/221100/DayZ/',
    },
    {
      name: 'Mod Pack',
      description: 'Наш пак модов для игры',
      icon: 'https://i.ibb.co/kH6q6cx/last-hope-icon.png',
      href: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2609586541',
    },
  ];

  return (
    <div className="bg-[url('https://i.ibb.co/xGB8k7r/bg-2.png')] bg-cover bg-center h-[900px] flex flex-col items-center justify-center text-center mb-24">
      <h2 className="mb-6 text-4xl font-bold leading-none tracking-tight text-white">Загрузите и установите</h2>
      <div className="flex flex-wrap  justify-center gap-10 sm:mb-6 mb-10">
        {downloads.map((download) => (
          <div
            key={download.name}
            className="flex flex-col items-center justify-start gap-5 sm:w-[200px] sm:h-[300px] h-[150px]"
          >
            <Link href={download.href} target="_blank">
              <Image
                className="sm:h-[170px] sm:w-[170px] rounded-lg h-[105px] w-[105px]"
                src={download.icon}
                alt={`${download.name}-icon`}
                width={150}
                height={150}
              />
            </Link>
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-2xl font-extrabold leading-none tracking-tight text-white drop-shadow-[1px_1px_var(--tw-shadow-color)] shadow-black">
                {download.name}
              </p>
              <p className="text-xl font-normal text-white drop-shadow-[1px_1px_var(--tw-shadow_color)] shadow-black">
                {download.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Button variant="default" size={'lg'} className="bg-white text-black animate-pulse" onClick={scrollToAboutServer}>
        Узнать о сервере
      </Button>
    </div>
  );
};
