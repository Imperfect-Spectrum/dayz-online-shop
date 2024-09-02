import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { guidesData } from '@/constants/constants';
import Image from 'next/image';

export default function Guides() {
  return (
    <div className="mb:mx-[10%] h-[100vh]">
      <h1 className="mb-12 text-4xl font-extrabold leading-none tracking-tight text-gray-800 dark:text-white text-center mt-5">
        Гайды, которые помогут вам в игре!
      </h1>
      <Accordion type="single" collapsible className="w-full">
        {guidesData.map((item) => (
          <AccordionItem key={item.value} value={item.value} className="text-2xl">
            <AccordionTrigger className="text-left">{item.trigger}</AccordionTrigger>
            <AccordionContent>
              <div className="flex gap-5 items-center justify-center flex-col lg:flex-row">
                {item.imageUrl.map((image, index) => (
                  <Image
                    key={`${item.value}-${index}`}
                    width={800}
                    height={800}
                    src={image}
                    alt={item.trigger}
                    loading="lazy"
                    className="mb-2"
                  />
                ))}
              </div>
              <p className="text-xl">{item.content}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
