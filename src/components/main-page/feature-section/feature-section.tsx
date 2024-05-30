import { FeatureItem } from './feature-item';

interface FeatureSectionProps {
  features: {
    title: string;
    image: string;
    altText: string;
    inView: boolean;
  }[];
  inView: boolean;
}

export const FeatureSection = ({ features, inView }: FeatureSectionProps) => (
  <div className="flex items-center justify-center gap-10">
    {features.map((feature) => (
      <FeatureItem key={feature.title} feature={feature} inView={inView} />
    ))}
  </div>
);
