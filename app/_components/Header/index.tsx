import Menu from '@/app/_components/Menu';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full p-4 pt-8 pb-8 z-50 flex items-center justify-between">
      <Link href="/" className="flex">
        <Image src="/logo.png" alt="SIMPLE" className=" w-auto" width={40} height={50} priority />
      </Link>
      <Menu />
    </header>
  );
}
