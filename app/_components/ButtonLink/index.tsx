import Link from 'next/link';
import styles from './index.module.css';
import { BsArrowRight } from 'react-icons/bs';
type Props = {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
};

export default function ButtonLink({ href, children, isExternal = false }: Props) {
  if (isExternal) {
    return (
      <a href={href} className={styles.button} target="_blank" rel="noopener">
        {children}
      </a>
    );
  }
  return (
    <Link
      href={href}
      className="bg-blue-700 flex items-center justify-between p-5 w-fit md:w-72 rounded  hover:opacity-90 sm:p-4 sm:px-6 lg:px-12 sm:w-full text-white"
    >
      {children}
      <BsArrowRight className=" ml-3" />
    </Link>
  );
}
