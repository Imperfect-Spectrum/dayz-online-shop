import { groupsData } from '@/constants/constants';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';

interface Group {
  name: string;
  imageUrl: string;
  pathUrl: string;
}

function Lore() {
  return (
    <div className="pb-5 w-[100%] flex flex-col items-center justify-center">
      <h1 className="mb-12 text-4xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-white text-center mt-5">
        Лор группировок нашего сервера
      </h1>
      <Link href="/" legacyBehavior passHref>
        <a>На главную</a>
      </Link>
      <div className="flex flex-wrap items-center justify-center gap-14">
        {groupsData.map((item, index) => (
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
