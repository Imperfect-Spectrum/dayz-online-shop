import { featuresData } from '@/constants/constants';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

export const FeatureSection = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const refsArray = featuresData.map(() => useIntersectionObserver(0.1));

  return (
    <div className="">
      <h1 className="mb-10 text-5xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-white text-center">
        Что есть у нас?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {featuresData.map((feature, index) => {
          const [ref, isVisible] = refsArray[index];

          const animationClass = isVisible
            ? index % 2 === 0
              ? 'animate-slide-in-left'
              : 'animate-slide-in-right'
            : 'opacity-0';

          return (
            <div key={index} ref={ref} className={`flex items-center justify-center ${animationClass}`}>
              <div className="flex flex-col justify-center items-center text-center">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-white">
                  {feature.title}
                </h1>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={feature.image}
                  alt={feature?.altText}
                  width={700}
                  height={700}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
