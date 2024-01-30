import Image from 'next/image';
import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';
import Head from 'next/head';
import Link from 'next/link';

export const revalidate = 60;

export default async function Page() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  console.log(1, process.env.MICROCMS_API_KEY);
  console.log(111);
  return (
    <div className=" bg-slate-50  w-full flex justify-center">
      <div className=" text-center">
        <div className=" py-40  ">
          <p className="font-bold text-lg">ただいまサイトリニューアル中です</p>
          <div className=" mt-5">
            <p className="font-bold text-lg">準備済みコンテンツ</p>
            <div className=" mt-10 text-center">
              <Link href="" legacyBehavior>
                <a className=" py-5 text-white rounded-xl bg-green-500 hover:opacity-80  px-10">
                  ガミースマイル
                </a>
              </Link>
            </div>
            <div className=" mt-10 text-center">
              <Link href="" legacyBehavior>
                <a className=" py-5 text-white rounded-xl bg-green-500 hover:opacity-80  px-10">
                  インモード
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
