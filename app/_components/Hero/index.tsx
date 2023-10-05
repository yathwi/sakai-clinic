import Image from 'next/image';
import styles from './index.module.css';

type Props = {
  title: string;
  sub: string;
  src: string;
};

export default function Hero({ title, sub, src }: Props) {
  return (
    <section className={styles.container}>
      <div>
        <h1 className="text-[3rem] font-bold align-middle mb-3 md:mt-20 mt-10 md:mb-16">{title}</h1>
        <p className=" flex items-center gap-20 mb-16 justify-center">{sub}</p>
      </div>

      <Image
        className="absolute top-0 right-0 w-full h-[600px] object-cover object-center flex items-center justify-center z-[-1]"
        src={src}
        alt="水の流れとともに幸せ・感謝・楽しさ・感動を運ぶ"
        width={4000}
        height={1200}
      />
    </section>
  );
}
