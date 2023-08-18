import Image from 'next/image';
import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';
import Head from 'next/head';

export const revalidate = 60;

export default async function Page() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  console.log(1, process.env.MICROCMS_API_KEY);
  console.log(111);
  return (
    <>
      <section className="relative flex items-center justify-center bg-black opacity-90 text-white overflow-hidden py-[200px]">
        <div>
          <h1 className="text-[3rem] font-bold text-center m-[1rem]">
            テクノロジーの力で世界を変える
          </h1>
          <p className="text-center">
            私たちは市場をリードしているグローバルテックカンパニーです。
          </p>
        </div>
        <Image
          className="absolute top-0 right-0 w-full h-[600px] object-cover object-right flex items-center justify-center z-[-1]"
          src="/img-mv.jpg"
          alt=""
          width={3600}
          height={1200}
        />
      </section>
      <section className="relative bg-white w-[840px] mt-[-40px] mx-auto py-6 px-10 rounded-[var(--border-radius)]">
        <h2 className="text-lg">News</h2>
        <NewsList articles={data.contents} />
        <div className="absolute right-[-40px] bottom-[-40px]">
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
      <section className="w-[920px] mx-auto py-[100px]">
        <div className="flex justify-between items-start space-x-20">
          <div>
            <h2 className="text-3xl font-bold">Business</h2>
            <p className="flex items-center space-x-5 mb-10">事業内容</p>
            <p className="mb-10">
              当社は、次世代テクノロジーの研究開発・製造・販売を行う革新的な企業です。
              <br />
              AI、ロボット工学、自律システムなど、幅広い分野でのソリューション提供を通じて、社会の進化と未来の創造に貢献します。
            </p>
            <ButtonLink href="/business">もっとみる</ButtonLink>
          </div>
          <Image
            className="w-[400px] rounded-[var(--border-radius)]"
            src="/img-business.png"
            alt=""
            width={1024}
            height={1024}
          />
        </div>
      </section>
      <div className="bg-white">
        <section className="w-[920px] mx-auto py-[100px]">
          <div className="flex justify-between items-start space-x-20">
            <Image
              className="w-full ml-[-60%] rounded-[var(--border-radius)]"
              src="/img-aboutus.jpg"
              alt=""
              width={6000}
              height={4000}
            />
            <div>
              <h2 className="text-3xl font-bold">About Us</h2>
              <p className="flex items-center space-x-5 mb-10">私たちについて</p>
              <p className="mb-10">
                「テクノロジーの力で世界を変える」をミッションに掲げ、日々活動をしています。
              </p>
              <dl className="flex border-b border-[var(--color-border)] py-5">
                <dt className="w-[100px] font-bold">社名</dt>
                <dd className="flex-1">株式会社Simple</dd>
              </dl>
              <dl className="flex border-b border-[var(--color-border)] py-5">
                <dt className="w-[100px] font-bold">設立</dt>
                <dd className="flex-1">2023年4月</dd>
              </dl>
              <dl className="flex border-b border-[var(--color-border)] py-5">
                <dt className="w-[100px] font-bold">所在地</dt>
                <dd className="flex-1">
                  〒000-0000
                  <br />
                  東京都渋谷区渋谷1-1-1
                </dd>
              </dl>
              <dl className="flex border-b border-[var(--color-border)] py-5">
                <dt className="w-[100px] font-bold">代表者</dt>
                <dd className="flex-1">鈴木 太郎</dd>
              </dl>
              <dl className="flex border-b border-[var(--color-border)] py-5">
                <dt className="w-[100px] font-bold">資本金</dt>
                <dd className="flex-1">1,000万円</dd>
              </dl>
            </div>
          </div>
        </section>
      </div>
      <section className="w-[920px] mx-auto py-[100px]">
        <div className="flex justify-between items-start space-x-20">
          <div>
            <h2 className="text-3xl font-bold">We are hiring</h2>
            <p className="flex items-center space-x-5 mb-10">採用情報</p>
            <p className="mb-10">
              当社では、チャレンジ精神を持った人材を求めています。
              <br />
              新しいアイデアを出し合い、成長する環境で活躍したい方は、ぜひご応募ください。当社でのキャリアを築きながら、技術の最前線で力を発揮しましょう。
            </p>
            <ButtonLink href="">採用情報へ</ButtonLink>
          </div>
          <Image
            className="w-[480px] rounded-[var(--border-radius)]"
            src="/img-hiring.jpg"
            alt=""
            width={960}
            height={960}
          />
        </div>
      </section>
    </>
  );
}
