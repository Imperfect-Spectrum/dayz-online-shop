import { Slider } from '@/components/carousel';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function GroupsInfo() {
  const info = [
    {
      id: 1,
      name: 'Долг',
      founder: 'генерал Таченко',
      description: 'Долг — военизированная группировка, члены которой живут по чёткому воинскому уставу.',
      motto: 'Защитим мир от Зоны!',
      quote:
        'Свободные сталкеры, ветераны и охотники — вливайтесь в ряды «Долга»! Защитить мир от заразы Зоны — наша общая цель и задача!',
      goals:
        'Основной целью группировки "Долг" является защита человечества от опасностей Зоны, что включает в себя борьбу с мутантами, обезвреживание аномалий и предотвращение выхода артефактов за пределы Зоны. Члены "Долга" убеждены, что Зона представляет собой колоссальную угрозу для всего живого и должна быть либо уничтожена, либо находиться под строгим контролем. Для достижения этих целей они готовы пойти на любые жертвы и не отступают перед лицом опасности.',
      lifeInside:
        'Жизнь в "Долге" строго регламентирована и подчинена достижению общих целей. Все члены группировки должны следовать установленным правилам и приказам своих командиров. Внутренняя структура "Долга" построена по военному принципу, где каждый знает своё место и задачи. В группировке ценятся дисциплина, ответственность и готовность к самопожертвованию. Несмотря на строгость, между членами "Долга" существует сильная взаимопомощь и товарищество, ведь общие испытания и борьба сплачивают людей.',
      structure:
        '"Долг" обладает чёткой иерархической структурой, на вершине которой стоит командование, состоящее из основателей и наиболее опытных членов. Ниже по иерархии располагаются бойцы, разделённые на специализированные подразделения в зависимости от их навыков и опыта. Важной частью жизни группировки является обучение и подготовка новобранцев, которые проходят через строгий отбор и обучение, прежде чем стать полноценными членами "Долга".',
      features: [
        {
          name: 'Чувство товарищества',
          description:
            'Несмотря на строгую дисциплину и иерархию, в "Долге" царит атмосфера взаимопомощи и братства. Общие цели и опасности, с которыми сталкиваются члены группировки, сплачивают их, создавая крепкие связи между бойцами.',
        },
        {
          name: 'Постоянная борьба',
          description:
            '"Долг" находится в постоянном противостоянии не только с опасностями Зоны, но и с другими группировками, которые имеют отличные от их цели или представляют угрозу выполнению миссии группировки. Это делает жизнь в "Долге" полной вызовов и требует от каждого члена готовности к непрерывной борьбе.',
        },
        {
          name: 'Стратегическое планирование',
          description:
            'В действиях "Долга" прослеживается чёткое стратегическое планирование. Каждая операция, каждый патруль и задание тщательно планируются с целью минимизации рисков и максимизации эффективности. Эта основательность в подходах позволяет "Долгу" успешно противостоять не только мутантам и аномалиям, но и другим сталкерским группировкам.',
        },
        {
          name: 'Жертвенность ради большой цели',
          description:
            'В основе идеологии "Долга" лежит убеждение, что любые жертвы оправданы, если они ведут к защите человечества от опасностей Зоны. Этот принцип порождает у членов группировки высокий уровень самоотдачи и готовность к самым тяжёлым испытаниям.',
        },
      ],
      img: 'https://static.wikia.nocookie.net/stalker_ru_gamepedia/images/a/a1/%D0%93%D0%B5%D1%80%D0%B1.png/revision/latest?cb=20170724225326',
    },
  ];
  return (
    <div className="mx-[10%] h-[100vh]">
      <div className="flex flex-col gap-10">
        <div className="w-[100%] mx-auto">
          <Carousel autoPlay showStatus={false} showIndicators={false} showThumbs={false} infiniteLoop={true}>
            <div className=" ">
              <img alt="3" src="merk.png" />
            </div>
            <div className=" ">
              <img alt="4" src="merk.png" />
            </div>
            <div className=" ">
              <img alt="5" src="merk.png" />
            </div>
          </Carousel>
        </div>

        {info.map((item) => (
          <div key={item.id} className="flex justify-around gap-6 mt-2">
            <div className="w-[500px] flex flex-col mr-10 animate-slideInFromLeft">
              <h2 className="text-4xl font-extrabold dark:text-white text-center">{item.name}</h2>
              <div className="flex flex-col items-center">
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={item.img}
                  alt={item.name}
                  width={300}
                  height={300}
                />
                <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Символ группировки</p>
              </div>
              <div className="flex gap-2">
                <p className="mb-4 text-xl font-normal text-gray-500 dark:text-gray-200 ">Основатель: </p>
                <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400 ">{item.founder}</p>
              </div>

              <div className="flex gap-2">
                <p className="mb-4 text-xl font-normal text-gray-500 dark:text-gray-200 ">Девиз: </p>
                <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400 ">{item.motto}</p>
              </div>
            </div>

            <div className="flex flex-col gap-14 w-[100%] ml-[10%] mb-10">
              <div className="flex text-white animate-slideInFromRight">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-10 h-10 mb-auto"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                  />
                </svg>
                <p className="text-xl font-bold dark:text-center">{item.quote}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 mb-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-5 justify-center mr-auto animate-slideInFromBottom">
                <h4 className="text-2xl font-bold dark:text-white">
                  <u>Описание и цели:</u>
                </h4>
                <div className="flex flex-col gap-5 border-l-8 border-gray-500 pl-8">
                  <p className="text-xl font-semibold dark:text-white">{item.description}</p>
                  <p className="text-xl font-semibold dark:text-white">{item.goals}</p>
                </div>
              </div>
              <div className="flex flex-col gap-5 justify-center ml-auto text-right">
                <h4 className="text-2xl font-bold dark:text-white">
                  <u>Жизнь и структура внутри:</u>
                </h4>
                <div className="flex flex-col gap-5 border-r-8 border-gray-500 pr-8">
                  <p className="text-xl font-semibold dark:text-white">{item.goals}</p>
                  <p className="text-xl font-semibold dark:text-white">{item.structure}</p>
                </div>
              </div>
              {/* <div className="flex flex-col gap-5 justify-center mr-auto">
              <p className="text-xl font-bold dark:text-white">
                <h4 className="text-2xl font-bold dark:text-white">Особенности группировки:</h4>
              </p>
              <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                {item.features.map((item, index) => (
                  <li className="text-xl font-semibold dark:text-white" key={index}>
                    {item.name}
                    <p className="text-xl font-semibold dark:text-white">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
// Основатель
// Генерал Таченко
//  <Image className="h-auto max-w-full rounded-lg" src={item.img} alt={item.name} width={300} height={300} />
