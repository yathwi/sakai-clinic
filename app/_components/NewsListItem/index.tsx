import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/app/_libs/microcms';
import styles from './index.module.css';
import PublishedDate from '../Date';
import Category from '../Category';

type Props = {
  news: Article;
};
export default function NewsListItem({ news }: Props) {
  return (
    <li className="border-b border-gray-200 last:border-b-0">
      <Link className="flex items-start gap-10 py-6" href={`/news/${news.id}`}>
        {/* {news.thumbnail ? (
          <Image
            src={news.thumbnail?.url}
            alt=""
            className="w-48 h-auto rounded"
            width={news.thumbnail?.width}
            height={news.thumbnail?.height}
          />
        ) : (
          <Image
            className="w-48 h-auto rounded"
            src="/no-image.png"
            alt="No Image"
            width={1200}
            height={630}
          />
        )} */}
        <dl>
          <dt className="text-lg font-bold ">{news.title}</dt>
          <dd className="flex items-center gap-4">
            <Category category={news.category} />
            <PublishedDate date={news.publishedAt || news.createdAt} />
          </dd>
        </dl>
      </Link>
    </li>
  );
}
