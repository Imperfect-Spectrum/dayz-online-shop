import Image from 'next/image';

interface FeatureItemProps {
  feature: {
    title: string;
    image: string;
    altText: string;
    inView: boolean;
  };
  inView: boolean;
}

export const FeatureItem = ({ feature, inView }: FeatureItemProps) => (
  <div className={`flex items-center justify-center gap-5 animate ${inView ? 'animate-slide-in-left' : ''}`}>
    <div className="flex flex-col justify-center items-center text-center">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-white">
        {feature.title}
      </h1>
      <Image
        className="h-auto max-w-full rounded-lg"
        src={feature.image}
        alt={feature.altText}
        width={700}
        height={700}
      />
    </div>
  </div>
);
