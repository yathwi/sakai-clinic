import { PageHeader } from '../_components/InMode/Pageheader';
import { Fotter } from '../_components/InMode/Fotter';
import { Metadata } from 'next';
type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'Inmode',
};

export default async function InModeLayout({ children }: Props) {
  return (
    <div>
      <PageHeader />
      <div>{children}</div>
      <Fotter />
    </div>
  );
}
