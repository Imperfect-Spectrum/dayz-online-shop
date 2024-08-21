import { DownloadSection } from '@/components/main-page/download-section';
import { FeatureSection } from '@/components/main-page/feature-section';
import { MainSection } from '@/components/main-page/main-section';
import React, { useRef } from 'react';

export default function Home() {
  const instructionsRef = useRef<HTMLDivElement>(null);
  const aboutServerRef = useRef<HTMLDivElement>(null);

  const scrollToInstructions = () => {
    instructionsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const scrollToAboutServer = () => {
    aboutServerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      <div>
        <MainSection scrollToInstructions={scrollToInstructions} />
      </div>
      <div ref={instructionsRef}>
        <DownloadSection scrollToAboutServer={scrollToAboutServer} />
      </div>
      <div ref={aboutServerRef} className="flex flex-col items-center justify-center gap-10">
        <FeatureSection />
      </div>
      <h1 className="mb-10 text-3xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-white text-center mt-5">
        И многое, многое другое....
      </h1>
    </div>
  );
}
