import { Button } from '../ui/button';

interface MainSectionProps {
  scrollToInstructions: () => void;
}

export const MainSection = ({ scrollToInstructions }: MainSectionProps) => (
  <div className="bg-[url('https://i.ibb.co/YNH3zvQ/for-NEKIT-png.png')] bg-cover bg-center h-[900px] flex flex-col items-center justify-center text-center mb-24">
    <div className="">
      <h1 className="mb-4 text-8xl font-extrabold leading-none tracking-tight text-white animate-slidein300 opacity-0">
        Last Hope
      </h1>
      <p className="mb-6 text-4xl font-normal text-white animate-slidein500 opacity-0">Последняя надежда STALKER RP</p>
      <div className="animate-slidein700 opacity-0">
        <Button
          variant="default"
          size={'lg'}
          className="bg-white text-black animate-pulse"
          onClick={scrollToInstructions}
        >
          Начать играть
        </Button>
      </div>
    </div>
  </div>
);
