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
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.sub}>{sub}</p>
      </div>
      <Image className={styles.bgimg} src={src} alt="" width={4000} height={1200} />
    </section>
  );
}
