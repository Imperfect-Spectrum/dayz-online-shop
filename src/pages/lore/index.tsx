import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';

interface Group {
  name: string;
  imageUrl: string;
  pathUrl: string;
}

function Lore() {
  const groups = [
    {
      name: 'Нейтралы',
      imageUrl: 'https://i.ibb.co/xSYTpvB/neutrals-logo.png',
      pathUrl: 'neutrals',
    },
    {
      name: 'Люди Бармена',
      imageUrl: 'https://i.ibb.co/cXg3bxd/lb-logo.png',
      pathUrl: 'lb',
    },
    {
      name: 'Чистое Небо',
      imageUrl: 'https://i.ibb.co/D1d8FdM/rassvet-logo.png',
      pathUrl: 'rassvet',
    },
    {
      name: 'ОКСОП',
      imageUrl: 'https://i.ibb.co/XXBYC6G/oksop-logo.png',
      pathUrl: 'oksop',
    },
    {
      name: 'Грех',
      imageUrl: 'https://i.ibb.co/3k2ZSfd/greh-logo.png',
      pathUrl: 'greh',
    },
    {
      name: 'Ренегаты',
      imageUrl: 'https://i.ibb.co/hVMbLwh/renegati-logo.png',
      pathUrl: 'renegati',
    },
    {
      name: 'Монолит',
      imageUrl: 'https://i.ibb.co/QnzLHD6/monolit-logo.png',
      pathUrl: 'monolit',
    },
    {
      name: 'Охрана Деревни',
      imageUrl: 'https://i.ibb.co/zNcWRzb/odinochki-logo.png',
      pathUrl: 'odinochki',
    },
    {
      name: 'Ученые',
      imageUrl: 'https://i.ibb.co/zsZfm2m/ychenie-logo.png',
      pathUrl: 'nayka',
    },
    {
      name: 'Наемники',
      imageUrl: 'https://i.ibb.co/2nxD54Z/naemniki-logo.png',
      pathUrl: 'naemniki',
    },
    {
      name: 'Братва',
      imageUrl: 'https://i.ibb.co/t85RLXX/bratva-logo.png',
      pathUrl: 'bratva',
    },
    {
      name: 'Свобода',
      imageUrl: 'https://i.ibb.co/hB8sdY9/svoboda-logo.png',
      pathUrl: 'svoboda',
    },
    {
      name: 'Долг',
      imageUrl: 'https://i.ibb.co/Fnr4dVZ/dolg-logo.png',
      pathUrl: 'dolg',
    },
    {
      name: 'Военные сталкеры',
      imageUrl: 'https://i.ibb.co/4870kNR/voenstalker-logo.png',
      pathUrl: 'voenstalker',
    },
  ];

  return (
    <div className="pb-5 w-[100%] flex flex-col items-center justify-center">
      <h1 className="mb-12 text-4xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-white text-center mt-5">
        Лор группировок нашего сервера
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-14">
        {groups.map((item, index) => (
          <div key={index} className=" transition duration-500 hover:scale-125">
            <h1 className="text-3xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-white text-center mb-2">
              {item.name}
            </h1>
            <Link href={`/lore/${item.pathUrl}`}>
              <button className="flex items-center justify-centerrounded-3xl">
                <img className="object-cover" width="350" height="350" src={item.imageUrl} alt={item.name} />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lore;

// export const getServerSideProps = (async () => {
//   const res = await fetch('http://localhost:9090/restApi/groups/get');
//   const groups: Group[] = await res.json();
//   console.log('groups', groups);
//   return { props: { groups } };
// }) satisfies GetServerSideProps<{ groups: Group[] }>;
