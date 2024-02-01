import { PageHeader } from '../_components/InMode/Pageheader';
import { Fotter } from '../_components/InMode/Fotter';
import { Metadata } from 'next';
type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'インモード治療｜サカイクリニック62',
};

export default function InModeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className=" flex justify-center bg-red-50">
      <div className=" max-w-[414px]">
        {/* <PageHeader /> */}
        <div>{children}</div>
        <Fotter />
      </div>
    </main>
  );
}
