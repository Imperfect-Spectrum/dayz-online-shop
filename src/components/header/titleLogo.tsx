import Image from 'next/image';
import Link from 'next/link';

export default function TitleLogo() {
  return (
    <Link href="/">
      <div className="flex items-center space-x-3">
        <Image src="/logo.png" width={100} height={100} alt="Last Hope Logo" className="rounded-3xl" />
        <span className="self-center text-2xl md:text-3xl font-semibold whitespace-nowrap">Last Hope</span>
      </div>
    </Link>
  );
}
