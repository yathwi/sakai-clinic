import { PageHeader } from '../_components/Gummy-Smile/Pageheader';
import { Fotter } from '../_components/Gummy-Smile/Fotter';
import { Metadata } from 'next';
type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'ガミースマイル|サカイクリニック62',
};

export default function InModeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <PageHeader />
      <main className=" flex justify-center bg-red-50">
        <div className=" max-w-[414px]">
          <div>{children}</div>
        </div>
      </main>
      <Fotter />
    </div>
  );
}
