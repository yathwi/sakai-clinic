import Hero from '@/app/_components/Hero';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className=" max-w-[414px]">
      <div className=" py-40 bg-gray-300">
        <dl>
          <dt className={styles.title}>ページが見つかりませんでした</dt>
          <dd className={styles.text}>
            あなたがアクセスしようとしたページは存在しません。
            <br />
            URLを再度ご確認ください。
          </dd>
        </dl>
      </div>
    </div>
  );
}
