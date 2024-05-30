import { Button } from '../ui/button';

interface MainSectionProps {
  scrollToInstructions: () => void;
}

export const MainSection = ({ scrollToInstructions }: MainSectionProps) => (
  <div className="bg-[url('https://i.ibb.co/YNH3zvQ/for-NEKIT-png.png')] bg-cover bg-center h-[900px] flex flex-col items-center justify-center mb-24">
    <h1 className="mb-4 text-8xl font-extrabold leading-none tracking-tight text-white">Last Hope</h1>
    <p className="mb-6 text-4xl font-normal text-white">Последняя надежда Stalker RP</p>
    <Button variant="default" size={'lg'} className="bg-white text-black animate-pulse" onClick={scrollToInstructions}>
      Начать играть
    </Button>
  </div>
);
