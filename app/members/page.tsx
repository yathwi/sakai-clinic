import Image from 'next/image';
import { getMembersList } from '@/app/_libs/microcms';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

type Props = {
  searchParams: {
    dk: string;
  };
};

export const revalidate = 60;
export default async function Page({ searchParams }: Props) {
  const data = await getMembersList({
    draftKey: searchParams.dk,
  });

  return (
    <div className="container mx-auto py-10">
      {data.contents.length === 0 ? (
        <p className="mb-10">メンバーが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className="md:flex items-start gap-10 mb-10 mb:mb-20">
              <Image
                src={member.image?.url as string}
                alt="役職"
                width={member.image?.width}
                height={member.image?.height}
                className="w-60 h-auto rounded-lg"
              />
              <dl>
                <dt className="text-xl font-bold mb-2">{member.name}</dt>
                <dd className="mb-2">{member.position}</dd>
                <dd className="text-sm">{member.profile}</dd>
              </dl>
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
