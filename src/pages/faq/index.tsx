import Dialogue from '@/components/faq-page/dialogue-item';
import { IsLoadingSpin } from '@/components/faq-page/loading-spin';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface DialogueData {
  name: string;
  description: string;
  avatar: string;
  url: string;
}

export default function Faq() {
  const dialogues: DialogueData[] = [
    {
      name: 'Игрок',
      description: 'Привет! А как мне поменять свой ник в лаунчере?',
      avatar: 'https://i.ibb.co/gRf0bQ0/player-avatar.png',
      url: '',
    },
    {
      name: 'Администрация',
      description:
        'Здравствуйте! Для изменения вашего позывного в лаунчере DayZ, пожалуйста, убедитесь, что игра и все моды успешно установлены. Затем перейдите в раздел настроек профиля лаунчера и введите желаемый позывной в предназначенное для этого поле. Прилагаю картинку с пошаговой инструкцией для вашего удобства. Есть ли у вас еще вопросы?',
      avatar: 'https://i.ibb.co/drBXDKS/admin-avatar.png',
      url: 'URL_КАРТИНКИ',
    },
    {
      name: 'Игрок',
      description: 'Спасибо! А вот в дискроде у меня не получается поменять ник, что делать?',
      avatar: 'https://i.ibb.co/gRf0bQ0/player-avatar.png',
      url: '',
    },
    {
      name: 'Администрация',
      description:
        'После того как вы установили свой новый позывной в лаунчере DayZ, необходимо также указать его в специальном канале Discord. Для этого зайдите в раздел "Смена Ника" на сервере Discord и отправьте там сообщение с вашим новым ником. Прилагаю картинку с пошаговой инструкцией для вашего удобства. Если у вас возникнут дополнительные вопросы, не стесняйтесь задавать их.',
      avatar: 'https://i.ibb.co/drBXDKS/admin-avatar.png',
      url: 'URL_КАРТИНКИ',
    },
    {
      name: 'Игрок',
      description: 'Есть ли какие-то правила игры на проекте, где можно ознакомиться?',
      avatar: 'https://i.ibb.co/gRf0bQ0/player-avatar.png',
      url: '',
    },
    {
      name: 'Администрация',
      description:
        'Да, в проекте действуют определённые правила, которые очень важно изучить и запомнить, чтобы избежать наказаний во время игры. Вы можете ознакомиться с ними, перейдя по ссылке в шапке сверху на главной странице сайта проекта. Прилагаю картинку с пошаговой инструкцией, как найти и прочитать правила. Если у вас возникнут дополнительные вопросы, не стесняйтесь задавать их.',
      avatar: 'https://i.ibb.co/drBXDKS/admin-avatar.png',
      url: 'URL_КАРТИНКИ',
    },
    {
      name: 'Игрок',
      description: 'Я все сделал, а как мне найти ip сервера?',
      avatar: 'https://i.ibb.co/gRf0bQ0/player-avatar.png',
      url: '',
    },
    {
      name: 'Администрация',
      description:
        'Чтобы найти IP сервера и начать своё приключение в Зоне, откройте лаунчер игры и перейдите в раздел "Сообщество", затем во вкладку "Серверы". Введите в поисковую строку имя нашего сервера "Last Hope" или используйте IP-адрес 185.207.214.102 и порт 2302 для прямого подключения. Прилагаю картинку с пошаговой инструкцией, чтобы облегчить вам этот процесс. Если у вас возникнут дополнительные вопросы, не стесняйтесь задавать их.',
      avatar: 'https://i.ibb.co/drBXDKS/admin-avatar.png',
      url: 'URL_КАРТИНКИ',
    },
    {
      name: 'Игрок',
      description: 'А где мне задать остальные вопросы?',
      avatar: 'https://i.ibb.co/gRf0bQ0/player-avatar.png',
      url: '',
    },
    {
      name: 'Администрация',
      description:
        'Если у вас остались дополнительные вопросы, вы можете задать их в Discord. Найдите разделы с обращением к администрации и создайте свой тикет со своим вопросом. Прилагаю картинку с пошаговой инструкцией, как это сделать, чтобы облегчить вам процесс.',
      avatar: 'https://i.ibb.co/drBXDKS/admin-avatar.png',
      url: 'URL_КАРТИНКИ',
    },
  ];

  const [displayedDialogues, setDisplayedDialogues] = useState<DialogueData[]>([]);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (displayedDialogues.length < dialogues.length) {
        setDisplayedDialogues((current) => [...current, dialogues[current.length]]);
      } else {
        clearInterval(timer);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [displayedDialogues.length, dialogues.length]);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [displayedDialogues]);

  const isVisibleChat = true; // Эта переменная должна контролироваться вашим стейтом или пропсами

  if (!isVisibleChat) return null;
  return (
    <div className="flex flex-col gap-6">
      <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-white text-center mt-5">
        Ответы на часто задаваемые вопросы
      </h1>
      {displayedDialogues.map((dialogue, index) => (
        <div key={index}>
          <Dialogue
            name={dialogue.name}
            description={dialogue.description}
            avatar={dialogue.avatar}
            url={dialogue.url}
          />
        </div>
      ))}
      {displayedDialogues.length < dialogues.length && (
        <div
          className={`flex ${
            dialogues[displayedDialogues.length]?.name === 'Администрация' ? 'justify-end' : 'justify-start'
          } items-center gap-4 mx-[10%]`}
        >
          <Image
            className="rounded-full object-cover"
            width={40}
            height={40}
            src={
              dialogues[displayedDialogues.length]?.name === 'Администрация'
                ? 'https://i.ibb.co/drBXDKS/admin-avatar.png'
                : 'https://i.ibb.co/gRf0bQ0/player-avatar.png'
            }
            alt="avatar"
          />
          <IsLoadingSpin />
        </div>
      )}
      <div ref={endOfMessagesRef} />
    </div>
  );
}
