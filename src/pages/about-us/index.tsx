export default function About() {
  return (
    <div className="relative w-full">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/video_1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="flex flex-col gap-10 xl:px-10 bg-black bg-opacity-50 w-[100%] mx-auto relative h-full text-white text-center">
        <h1 className="mb-12 text-4xl font-extrabold leading-none tracking-tighttext-white text-center mt-5">
          О нас | Last Hope RP
        </h1>
        <div className="flex flex-col mx-[2%] lg:mx-[15%]">
          <p className="text-2xl mb-4 font-bold leading-none tracking-tighttext-white text-center">
            Привет, выжившие в мире DayZ!
          </p>
          <p className="text-2xl mb-4 font-bold leading-none tracking-tighttext-white text-center">
            Мы рады представить вам Last Hope RP — уникальный проект серверов, вдохновленных атмосферой культовой игры
            S.T.A.L.K.E.R.! Наши серверы созданы для тех, кто любит исследовать заброшенные территории, сталкиваться с
            опасными мутантами и бороться за выживание в атмосфере постапокалипсиса.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl mb-12 font-bold leading-none tracking-tighttext-white text-center ">
            У нас есть три сервера на любой вкус!
          </h2>
          <div className="text-center flex xl:flex-nowrap flex-wrap gap-20 mx-[2%] lg:mx-[15%]">
            <div className="border-4 border-gray-500 rounded-3xl p-5">
              <h3 className="text-2xl mb-4 font-bold leading-none tracking-tighttext-white text-center">
                Last Hope S.T.A.L.K.E.R. RP NH NO WHITE LIST
              </h3>
              <p className="mb-4">
                На первом сервере вас ожидает захватывающее путешествие по Северной части карты. Вы сможете исследовать
                Станцию Янов, Чернобыльскую АЭС, город Припять и множество других культовых локаций, оживших в мире
                DayZ. Пройдитесь по пустынным улицам, обнаружьте странные аномалии и сражайтесь за выживание в этом
                опасном мире.
                <br />
                <strong>IP для подключения:</strong> 185.207.214.102:2502
              </p>
            </div>
            <div className="border-4 border-gray-500 rounded-3xl p-5">
              <h3 className="text-2xl mb-4 font-bold leading-none tracking-tighttext-white text-center">
                Last Hope S.T.A.L.K.E.R. RP AOD NO WHITE LIST
              </h3>
              <p className="mb-4">
                На втором сервере вас ждет приключение на Южной части карты. Вы отправитесь на исследование Кордона,
                заглянете в Бар 100 рентген, побываете в Деревне новичков, исследуете заброшенные лагеря и столкнетесь с
                новыми вызовами и опасностями. Здесь каждый шаг может оказаться решающим для вашей судьбы.
                <br />
                <strong>IP для подключения:</strong> 185.207.214.102:2302
              </p>
            </div>
            <div className="border-4 border-gray-500 rounded-3xl p-5">
              <h3 className="text-2xl mb-4 font-bold leading-none tracking-tighttext-white text-center">
                Last Hope S.T.A.L.K.E.R. DZ RP
              </h3>
              <p className="mb-4">
                На третьем сервере вас ждет удивительное путешествие по специально созданной кастомной карте. Здесь вы
                сможете испытать свои навыки выживания в новой и непредсказуемой среде, полной сюрпризов и загадок.
                Заходите и погрузитесь в уникальный мир, где каждый уголок скрывает свои секреты.
                <br />
                <strong>IP для подключения:</strong> 212.22.93.108:2302
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mx-[2%] lg:mx-[15%] gap-6">
          <p className="text-xl mb-4 font-bold leading-none tracking-tighttext-white text-center">
            У нас вы найдете дружелюбное комьюнити, которое всегда готово помочь новичкам и поддержать опытных игроков.
            Наша отзывчивая администрация круглосуточно следит за порядком на серверах и оперативно решает возникающие
            проблемы.
          </p>
          <p className="text-xl mb-4 font-bold leading-none tracking-tighttext-white text-center">
            Не упустите свой шанс стать героем Зоны в Last Hope RP! Присоединяйтесь к нам уже сегодня и окунитесь в
            незабываемую атмосферу мира DayZ по мотивам S.T.A.L.K.E.R.!
          </p>
          <p className="text-xl mb-4 font-bold leading-none tracking-tighttext-white text-center">
            Удачи вам на просторах Зоны!
          </p>
        </div>
      </div>
    </div>
  );
}
