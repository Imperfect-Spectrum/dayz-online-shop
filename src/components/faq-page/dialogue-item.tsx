import Image from 'next/image';

interface DialogueData {
  name: string;
  description: string;
  avatar: string;
  url: string;
}
// {`flex items-center justify-center gap-5 animate ${inView ? 'animate-slide-in-left' : ''}`}>
const Dialogue = ({ name, description, avatar, url }: DialogueData) => {
  return (
    <div className={`flex items-end gap-2 md:w-[40%] w-[100%] mx-[10%] ${name === 'Игрок' ? 'mr-auto' : 'ml-auto'}`}>
      <Image className="rounded-full object-cover" width={40} height={40} src={avatar} alt="avatar" />
      <div className="flex flex-col gap-2 rounded-r-xl rounded-tl-xl bg-slate-100 p-4 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
        <span className="font-semibold text-black dark:text-white text-lg">{name}</span>
        <div className="text-base">{description}</div>
        {url && (
          <p>
            <a href={url} className="text-blue-600 hover:underline">
              Ссылка на картинку
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Dialogue;
