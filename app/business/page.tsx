import Image from 'next/image';
import { getBusinessList } from '@/app/_libs/microcms';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

type Props = {
  searchParams: {
    dk: string;
  };
};

export const revalidate = 60;
export default async function Page({ searchParams }: Props) {
  const data = await getBusinessList({
    draftKey: searchParams.dk,
  });

  return (
    <div className="container">
      {data.contents.length === 0 ? (
        <p className="mb-10">事業内容が登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((business) => (
            <li key={business.id} className="flex items-start gap-10 mb-40">
              <dl className="flex-grow">
                <dt className="mb-6">
                  {/* <Image
                    src={business.logo?.url as string}
                    alt=""
                    width={business.logo?.width}
                    height={business.logo?.height}
                    className="h-10 w-auto"
                  /> */}
                </dt>
                <dd className="text-sm">{business.description}</dd>
                <dd className="flex mt-10">
                  {/* <ButtonLink href={business.link} isExternal>
                    サービスサイトへ
                  </ButtonLink> */}
                </dd>
              </dl>
              <Image
                src={business.image?.url as string}
                alt=""
                width={business.image?.width}
                height={business.image?.height}
                className="w-60 h-auto rounded-lg"
              />
            </li>
          ))}
        </ul>
      )}
      <footer className="flex flex-col items-center border-t pt-10 text-center gap-6">
        <h2 className="text-4xl font-bold">We are hiring</h2>
        <p>私たちは共にチャレンジする仲間を募集しています。</p>
        <ButtonLink href="/recruitment">採用情報へ</ButtonLink>
      </footer>
    </div>
  );
}
