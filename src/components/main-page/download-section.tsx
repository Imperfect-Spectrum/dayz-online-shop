import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { downloadsData } from '@/constants/constants';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

interface DownloadSectionProps {
  scrollToAboutServer: () => void;
}

export const DownloadSection = ({ scrollToAboutServer }: DownloadSectionProps) => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div
      ref={ref}
      className="bg-[url('https://i.ibb.co/HVCH251/bg-2.png')] bg-cover bg-center h-[900px] flex flex-col items-center justify-center text-center mb-24"
    >
      <div>
        <h2
          className={`mb-6 text-4xl font-bold leading-none tracking-tight text-white ${
            isVisible ? 'animate-slidein300' : ''
          } opacity-0`}
        >
          Загрузите и установите
        </h2>
        <div className="flex flex-wrap  justify-center gap-10 sm:mb-6 mb-10">
          {downloadsData.map((download) => (
            <div
              key={download.name}
              className="flex flex-col items-center justify-start gap-5 sm:w-[200px] sm:h-[300px] h-[150px]"
            >
              <Link href={download.href} target="_blank">
                <Image
                  className={`sm:h-[170px] sm:w-[170px] rounded-lg h-[105px] w-[105px] ${
                    isVisible ? 'animate-slidein500' : ''
                  } opacity-0
                  }`}
                  src={download.icon}
                  alt={download.name}
                  width={170}
                  height={170}
                />
              </Link>
              <div
                className={`flex flex-col items-center justify-center text-center ${
                  isVisible ? 'animate-slidein500' : ''
                } opacity-0
                }`}
              >
                <p className="text-2xl font-extrabold leading-none tracking-tight text-white">{download.name}</p>
                <p className="text-xl font-normal text-white shadow-black">{download.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={`${isVisible ? 'animate-slidein700' : ''} opacity-0`}>
          <Button
            variant="default"
            size={'lg'}
            className="bg-white text-black animate-pulse"
            onClick={scrollToAboutServer}
          >
            Узнать о сервере
          </Button>
        </div>
      </div>
    </div>
  );
};
