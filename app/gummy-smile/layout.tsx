import { PageHeader } from '../_components/InMode/Pageheader';
import { Fotter } from '../_components/InMode/Fotter';
import { Metadata } from 'next';
type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'Inmode',
};

export default function InModeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <PageHeader />
      <div>{children}</div>
      <Fotter />
    </main>
  );
}
