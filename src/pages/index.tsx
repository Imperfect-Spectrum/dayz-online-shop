import { DownloadSection } from '@/components/main-page/download-section';
import { FeatureSection } from '@/components/main-page/feature-section/feature-section';
import { MainSection } from '@/components/main-page/main-section';
import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true });

  const instructionsRef = useRef<HTMLDivElement>(null);
  const aboutServerRef = useRef<HTMLDivElement>(null);

  const scrollToInstructions = () => {
    instructionsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const scrollToAboutServer = () => {
    aboutServerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const features = [
    {
      title: 'Необычная экипировка',
      image: 'https://i.ibb.co/NYwZCRq/guns-jpg.png',
      altText: 'guns-png',
      inView: inView1,
    },
    {
      title: 'Интересные мутанты',
      image: 'https://i.ibb.co/XyhyBYN/mutants.png',
      altText: 'mutants-png',
      inView: inView1,
    },
    {
      title: 'Аномалии',
      image: 'https://i.ibb.co/mhTtdhD/anomaly.png',
      altText: 'anomaly-png',
      inView: inView2,
    },
    {
      title: 'Артефакты',
      image: 'https://i.ibb.co/F6JsrzP/artefact.png',
      altText: 'artefact-png',
      inView: inView2,
    },
    {
      title: 'Уникальный хабар',
      image: 'https://i.ibb.co/g65rCnv/habar.png',
      altText: 'habar-png',
      inView: inView3,
    },
    {
      title: 'Две карты',
      image: 'https://i.ibb.co/MGVQvWz/maps.png',
      altText: 'maps-png',
      inView: inView3,
    },
    {
      title: 'Системы аирдропов',
      image: 'https://i.ibb.co/FHs6jS6/airdrop.png',
      altText: 'airdrop-png',
      inView: inView4,
    },
    {
      title: 'Система флагов',
      image: 'https://i.ibb.co/TTTFSX6/flags.png',
      altText: 'flags-png',
      inView: inView4,
    },
  ];

  return (
    <div className="">
      <MainSection scrollToInstructions={scrollToInstructions} />
      <div ref={instructionsRef}>
        <DownloadSection scrollToAboutServer={scrollToAboutServer} />
      </div>
      <div ref={aboutServerRef} className="flex flex-col items-center justify-center gap-10">
        <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-white">Что есть у нас?</h1>
        <div ref={ref1}>
          <FeatureSection features={features.slice(0, 2)} inView={inView1} />
        </div>
        <div ref={ref2}>
          <FeatureSection features={features.slice(2, 4)} inView={inView2} />
        </div>
        <div ref={ref3}>
          <FeatureSection features={features.slice(4, 6)} inView={inView3} />
        </div>
        <div ref={ref4}>
          <FeatureSection features={features.slice(6, 8)} inView={inView4} />
        </div>
      </div>
      <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white text-center mt-5">
        И многое, многое другое....
      </h1>
    </div>
  );
}
