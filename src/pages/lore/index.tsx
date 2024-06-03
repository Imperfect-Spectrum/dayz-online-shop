import Image from 'next/image';
import Link from 'next/link';

function Lore() {
  const group = [
    {
      name: 'Нейтралы',
      imageUrl: 'https://i.ibb.co/xSYTpvB/neutrals-logo.png',
      pathUrl: 'resource1',
    },
    {
      name: 'Люди Бармена',
      imageUrl: 'https://i.ibb.co/cXg3bxd/lb-logo.png',
      pathUrl: 'resource2',
    },
    {
      name: 'Чистое Небо',
      imageUrl: 'https://i.ibb.co/D1d8FdM/rassvet-logo.png',
      pathUrl: 'resource3',
    },
    {
      name: 'ОКСОП',
      imageUrl: 'https://i.ibb.co/XXBYC6G/oksop-logo.png',
      pathUrl: 'resource4',
    },
    {
      name: 'Грех',
      imageUrl: 'https://i.ibb.co/3k2ZSfd/greh-logo.png',
      pathUrl: 'resource5',
    },
    {
      name: 'Ренегаты',
      imageUrl: 'https://i.ibb.co/hVMbLwh/renegati-logo.png',
      pathUrl: 'resource6',
    },
    {
      name: 'Монолит',
      imageUrl: 'https://i.ibb.co/QnzLHD6/monolit-logo.png',
      pathUrl: 'resource7',
    },
    {
      name: 'Охрана Деревни',
      imageUrl: 'https://i.ibb.co/zNcWRzb/odinochki-logo.png',
      pathUrl: 'resource8',
    },
    {
      name: 'Ученые',
      imageUrl: 'https://i.ibb.co/zsZfm2m/ychenie-logo.png',
      pathUrl: 'resource9',
    },
    {
      name: 'Наемники',
      imageUrl: 'https://i.ibb.co/2nxD54Z/naemniki-logo.png',
      pathUrl: 'resource10',
    },
    {
      name: 'Братва',
      imageUrl: 'https://i.ibb.co/t85RLXX/bratva-logo.png',
      pathUrl: 'resource11',
    },
    {
      name: 'Свобода',
      imageUrl: 'https://i.ibb.co/hB8sdY9/svoboda-logo.png',
      pathUrl: 'resource12',
    },
    {
      name: 'Долг',
      imageUrl: 'https://i.ibb.co/Fnr4dVZ/dolg-logo.png',
      pathUrl: 'resource13',
    },
    {
      name: 'Военные сталкеры',
      imageUrl: 'https://i.ibb.co/4870kNR/voenstalker-logo.png',
      pathUrl: 'resource14',
    },
  ];
  return (
    <div className="pb-5 w-[100%] flex flex-col items-center justify-center">
      <h1 className="mb-12 text-4xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-white text-center mt-5">
        Лор группировок нашего сервера
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-14">
        {group.map((item, index) => (
          <div key={index}>
            <h1 className="text-3xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-white text-center mb-2">
              {item.name}
            </h1>
            <Link href={`/${item.pathUrl}`}>
              <button className="flex items-center justify-center hover:ring-4 ring-slate-600 rounded-3xl">
                <Image className="object-cover" width={350} height={350} src={item.imageUrl} alt={item.name} />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lore;
