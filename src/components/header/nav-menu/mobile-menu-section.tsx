import Link from 'next/link';

interface MobileMenuSectionProps {
  title: string;
  items: Array<{ title: string; href: string }>;
}

export default function MobileMenuSection({ title, items }: MobileMenuSectionProps) {
  return (
    <div className="">
      <h2 className="mb-2 text-lg font-semibold text-center">{title}</h2>
      <ul className="space-y-2 text-center border-solid border-2 bg-[hsl(var(--popover))] rounded-3xl">
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.href} className="block py-2">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
