import { info } from '@/constants/lore';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Carousel } from 'react-responsive-carousel';

const GroupPage = () => {
  const router = useRouter();
  const { group } = router.query;

  const data = info.find((item) => item.value.toLowerCase() === group);

  if (data) {
    console.log('Найденный объект:', data);
  } else {
    console.log('Объект с указанным значением group.value не найден.');
  }

  return (
    <div className="xl:mx-[10%] mx-[0%] h-[100vh]">
      <div className="flex flex-col gap-10">
        <Image
          className="h-auto max-w-full rounded-lg object-cover"
          src={data?.caruselImg || ''}
          alt={data?.name || ''}
          width={4000}
          height={4000}
        />

        <div className="flex xl:flex-nowrap flex-wrap justify-around gap-6 mt-2 ">
          <div className="w-[500px] flex flex-col xl:mr-10 mr-0 animate-slideInFromLeft text-center">
            <h2 className="text-4xl font-extrabold dark:text-white text-center">{data?.name}</h2>
            <div className="flex flex-col items-center">
              <Image className="rounded-lg" src={data?.img || ''} alt={data?.name || ''} width={300} height={300} />
              <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Символ группировки</p>
            </div>
            <div className="flex gap-2">
              <p className="mb-4 text-xl font-normal text-gray-500 dark:text-gray-200 ">Основатель: </p>
              <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400 ">{data?.founder}</p>
            </div>

            <div className="flex gap-2">
              <p className="mb-4 text-xl font-normal text-gray-500 dark:text-gray-200 ">Девиз: </p>
              <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400 ">{data?.motto}</p>
            </div>
          </div>

          <div className="flex flex-col gap-14 w-[100%] md:ml-[10%] ml-[5%] mb-10">
            <div className="flex text-white animate-slideInFromRight">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="lg:w-10 lg:h-10 h-40 w-40 mb-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                />
              </svg>
              <p className="text-xl font-bold dark:text-center">{data?.quote}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="lg:w-10 lg:h-10 h-40 w-40 mb-auto"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
            <div className="flex flex-col gap-5 justify-center mr-auto animate-slideInFromBottom">
              <h4 className="text-2xl font-bold dark:text-white">
                <u>Описание и цели:</u>
              </h4>
              <div className="flex flex-col gap-5 border-l-8 border-gray-500 pl-8">
                <p className="text-xl font-semibold dark:text-white">{data?.description}</p>
                <p className="text-xl font-semibold dark:text-white">{data?.goals}</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 justify-center ml-auto text-right">
              <h4 className="text-2xl font-bold dark:text-white">
                <u>Жизнь и структура внутри:</u>
              </h4>
              <div className="flex flex-col gap-5 border-r-8 border-gray-500 pr-8">
                <p className="text-xl font-semibold dark:text-white">{data?.goals}</p>
                <p className="text-xl font-semibold dark:text-white">{data?.structure}</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 justify-center">
              <h4 className="text-2xl font-bold dark:text-white">
                <u>Особенности группировки:</u>
              </h4>
              <ul className="flex flex-col gap-5 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 border-l-8 border-gray-500 pl-8">
                {data?.features.map((item: any, index: any) => (
                  <li className="text-xl font-semibold dark:text-white" key={index}>
                    {item.name}
                    <p className="text-xl font-semibold dark:text-white">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupPage;
