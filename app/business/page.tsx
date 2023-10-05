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
            <li key={business.id} className="md:flex items-start py-10 md:mb-10">
              <dl className="flex-grow md:max-w-[50%]">
                <dt className="mb-6"></dt>
                <dd className=" text-[20px] font-bold">{business.title}</dd>
                <dd className="text-base mt-2">{business.description}</dd>
              </dl>
              <div className=" md:w-80  max-w-[90%]  mx-auto">
                <Image
                  src={business.image?.url as string}
                  alt=""
                  width={business.image?.width}
                  height={business.image?.height}
                  className=" mt-5 md:mt-0 h-auto rounded-lg"
                />
              </div>
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
